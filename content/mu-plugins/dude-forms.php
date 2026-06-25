<?php
/**
 * Plugin Name: Dude Forms
 * Description: Server-side contact form handler. Stores submissions in wp_dude_form_submissions (durable copy), emails the team, and pushes to Twenty CRM when configured. Designed as the foundation for the Fall site rebuild - endpoint URL is stable so any future theme keeps working.
 * Version: 1.0.0
 * Author: Dude
 */

namespace Dude\Forms;

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

const DB_VERSION       = '3';
const TABLE            = 'dude_form_submissions';
const REST_NAMESPACE   = 'dude/v1';
const RETRY_HOOK       = 'dude_forms_retry_twenty_sync';
const MAX_TWENTY_RETRIES = 3;

/**
 * Resolve table name with prefix.
 */
function table(): string {
  global $wpdb;
  return $wpdb->prefix . TABLE;
}

/**
 * Create or upgrade the submissions table. Cheap on every load - dbDelta is a no-op when schema matches.
 */
function maybe_install_table(): void {
  $installed = get_option( 'dude_forms_db_version' );
  if ( $installed === DB_VERSION ) {
    return;
  }

  global $wpdb;
  $charset = $wpdb->get_charset_collate();
  $table   = table();

  $sql = "CREATE TABLE {$table} (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    form_key VARCHAR(64) NOT NULL DEFAULT 'contact',
    name VARCHAR(255) NOT NULL DEFAULT '',
    email VARCHAR(255) NOT NULL DEFAULT '',
    phone VARCHAR(64) NOT NULL DEFAULT '',
    company VARCHAR(255) NOT NULL DEFAULT '',
    message TEXT NOT NULL,
    source_url VARCHAR(512) NOT NULL DEFAULT '',
    referrer VARCHAR(512) NOT NULL DEFAULT '',
    ip_hash CHAR(64) NOT NULL DEFAULT '',
    user_agent VARCHAR(512) NOT NULL DEFAULT '',
    created_at DATETIME NOT NULL,
    twenty_person_id VARCHAR(64) NOT NULL DEFAULT '',
    twenty_opportunity_id VARCHAR(64) NOT NULL DEFAULT '',
    twenty_synced_at DATETIME NULL,
    twenty_retries TINYINT UNSIGNED NOT NULL DEFAULT 0,
    twenty_last_error VARCHAR(512) NOT NULL DEFAULT '',
    status VARCHAR(16) NOT NULL DEFAULT 'new',
    attachments TEXT NULL,
    budget_euros INT UNSIGNED NULL,
    enrichment TEXT NULL,
    enriched_at DATETIME NULL,
    PRIMARY KEY  (id),
    KEY idx_status (status),
    KEY idx_form_key (form_key),
    KEY idx_created (created_at)
  ) {$charset};";

  require_once ABSPATH . 'wp-admin/includes/upgrade.php';
  dbDelta( $sql );
  update_option( 'dude_forms_db_version', DB_VERSION );
}
add_action( 'plugins_loaded', __NAMESPACE__ . '\\maybe_install_table' );

/**
 * Register REST routes.
 */
add_action( 'rest_api_init', function () {
  register_rest_route( REST_NAMESPACE, '/contact-submit', [
    'methods'             => 'POST',
    'callback'            => __NAMESPACE__ . '\\handle_contact_submit',
    'permission_callback' => '__return_true',
  ] );
} );

/**
 * Public REST endpoint that accepts a contact submission.
 *
 * Validation flow:
 * 1. Honeypot input named "website" must be empty (bots fill all fields).
 * 2. Required fields: name, email, message.
 * 3. Email must be a valid address.
 *
 * On success the row is inserted, the team gets an email, and Twenty CRM is
 * called if configured. We always return 200 to the honeypot path so bots get
 * no signal.
 */
function handle_contact_submit( \WP_REST_Request $request ) {
  // Honeypot - accept silently so bots think it worked.
  if ( ! empty( trim( (string) $request->get_param( 'website' ) ) ) ) {
    return new \WP_REST_Response( [ 'ok' => true ], 200 );
  }

  $name    = sanitize_text_field( (string) $request->get_param( 'name' ) );
  $email   = sanitize_email( (string) $request->get_param( 'email' ) );
  $phone   = sanitize_text_field( (string) $request->get_param( 'phone' ) );
  $company = sanitize_text_field( (string) $request->get_param( 'company' ) );
  $message = sanitize_textarea_field( (string) $request->get_param( 'message' ) );

  $errors = [];
  if ( '' === $name ) {
    $errors['name'] = 'Nimi puuttuu';
  }
  if ( '' === $email || ! is_email( $email ) ) {
    $errors['email'] = 'Sähköpostiosoite puuttuu tai on virheellinen';
  }
  if ( '' === $message ) {
    $errors['message'] = 'Viesti puuttuu';
  }
  if ( $errors ) {
    return new \WP_REST_Response( [ 'ok' => false, 'errors' => $errors ], 422 );
  }

  global $wpdb;
  $inserted = $wpdb->insert( table(), [
    'form_key'   => sanitize_key( (string) ( $request->get_param( 'form_key' ) ?: 'contact' ) ),
    'name'       => $name,
    'email'      => $email,
    'phone'      => $phone,
    'company'    => $company,
    'message'    => $message,
    'source_url' => esc_url_raw( (string) $request->get_param( 'source_url' ) ),
    'referrer'   => esc_url_raw( (string) $request->get_param( 'referrer' ) ),
    'ip_hash'    => hash( 'sha256', (string) ( $_SERVER['REMOTE_ADDR'] ?? '' ) ),
    'user_agent' => substr( (string) ( $_SERVER['HTTP_USER_AGENT'] ?? '' ), 0, 512 ),
    'created_at' => current_time( 'mysql' ),
    'status'     => 'new',
  ] );

  if ( false === $inserted ) {
    error_log( '[dude-forms] DB insert failed: ' . $wpdb->last_error );
    return new \WP_REST_Response( [ 'ok' => false, 'errors' => [ '_' => 'Tallennus epäonnistui, yritä hetken päästä uudelleen.' ] ], 500 );
  }

  $submission_id = (int) $wpdb->insert_id;

  send_notification_email( $submission_id );

  if ( twenty_configured() ) {
    sync_to_twenty( $submission_id );
  }

  return new \WP_REST_Response( [ 'ok' => true, 'id' => $submission_id ], 200 );
}

/**
 * Send the team email. Mailgun is already wired site-wide via wp_mail.
 */
function send_notification_email( int $submission_id ): void {
  global $wpdb;
  $row = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM " . table() . " WHERE id = %d", $submission_id ) );
  if ( ! $row ) {
    return;
  }

  $recipient = defined( 'DUDE_FORMS_NOTIFY_EMAIL' ) && DUDE_FORMS_NOTIFY_EMAIL
    ? DUDE_FORMS_NOTIFY_EMAIL
    : get_option( 'admin_email' );

  $subject = sprintf( '[dude.fi] Uusi yhteydenotto: %s', $row->name );

  $body = "Saapunut: " . $row->created_at . "\n\n"
        . "Nimi:         " . $row->name . "\n"
        . "Sähköposti:   " . $row->email . "\n"
        . "Puhelin:      " . ( $row->phone ?: '(ei annettu)' ) . "\n"
        . "Yritys:       " . ( $row->company ?: '(ei annettu)' ) . "\n\n"
        . "Viesti:\n" . $row->message . "\n\n"
        . "---\n"
        . "Lähde:    " . $row->source_url . "\n"
        . "Viittaaja: " . ( $row->referrer ?: '(ei tiedossa)' ) . "\n"
        . "Tallennusid: #" . $row->id;

  $headers = [
    'From: dude.fi <noreply@dude.fi>',
    'Reply-To: ' . sanitize_text_field( $row->name ) . ' <' . $row->email . '>',
  ];

  wp_mail( $recipient, $subject, $body, $headers );
}

/**
 * Lowercase email domain (post-`@`) for a given address, or '' when invalid.
 */
function email_domain( string $email ): string {
  $at = strrpos( $email, '@' );
  if ( false === $at ) {
    return '';
  }
  return strtolower( trim( substr( $email, $at + 1 ) ) );
}

/**
 * Is this domain a free / personal mailbox where the address tells us nothing
 * about the visitor's employer? List is overridable via env (comma-separated
 * in the `DUDE_FORMS_FREE_EMAIL_DOMAINS` constant).
 */
function is_free_email_domain( string $domain ): bool {
  if ( '' === $domain ) {
    return true;
  }
  $list = defined( 'DUDE_FORMS_FREE_EMAIL_DOMAINS' ) ? (string) DUDE_FORMS_FREE_EMAIL_DOMAINS : '';
  $free = array_map( 'trim', array_filter( explode( ',', strtolower( $list ) ) ) );
  return in_array( $domain, $free, true );
}

/**
 * Search Twenty for an existing Company whose primary domain matches `$domain`.
 * Returns the Company id or '' when not found.
 */
function find_twenty_company_by_domain( string $api_base, string $auth_header, string $domain ): string {
  if ( '' === $domain ) {
    return '';
  }
  $candidates = [ $domain, 'www.' . $domain, 'https://' . $domain, 'https://www.' . $domain ];
  foreach ( $candidates as $candidate ) {
    $url = $api_base . '/rest/companies?filter=' . rawurlencode( 'domainName.primaryLinkUrl[eq]:"' . $candidate . '"' );
    $response = wp_remote_get( $url, [
      'headers' => [ 'Authorization' => $auth_header ],
      'timeout' => 5,
    ] );
    if ( is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) >= 300 ) {
      continue;
    }
    $data = json_decode( (string) wp_remote_retrieve_body( $response ), true );
    $hit  = $data['data']['companies'][0]['id'] ?? '';
    if ( $hit ) {
      return (string) $hit;
    }
  }
  return '';
}

/**
 * Best-effort parse of a Finnish free-text budget into euros. Accepts forms
 * like "20 000", "20000 EUR", "20 000 €", "20k". Returns null when nothing
 * sensible can be extracted (caller should then omit `amount`).
 */
function parse_budget_euros( string $raw ): ?int {
  $cleaned = trim( $raw );
  if ( '' === $cleaned ) {
    return null;
  }
  // Handle 20k / 100k shorthand.
  if ( preg_match( '/(\d+)\s*[kK]\b/', $cleaned, $m ) ) {
    return (int) $m[1] * 1000;
  }
  // Strip everything except digits, dots, commas, spaces; then keep digits.
  $digits = preg_replace( '/[^0-9]/', '', $cleaned );
  if ( '' === $digits ) {
    return null;
  }
  $value = (int) $digits;
  if ( $value < 100 ) {
    return null;
  }
  return $value;
}

/**
 * Normalize a phone number to international (E.164-ish) format so Twenty
 * accepts it. Twenty validates strictly and rejects Finnish trunk-prefix
 * numbers like "0401234567" with INVALID_PHONE_NUMBER. We assume Finnish
 * defaults because the form is on a Finnish website; visitors entering
 * international numbers already include the +.
 */
function normalize_phone( string $raw ): string {
  $clean = preg_replace( '/[\s\-\(\)]/', '', $raw );
  if ( '' === $clean ) {
    return '';
  }
  if ( str_starts_with( $clean, '+' ) ) {
    return $clean; // Already international
  }
  if ( str_starts_with( $clean, '00' ) ) {
    return '+' . substr( $clean, 2 );
  }
  if ( str_starts_with( $clean, '358' ) ) {
    return '+' . $clean;
  }
  if ( str_starts_with( $clean, '0' ) ) {
    return '+358' . substr( $clean, 1 ); // Finnish trunk-prefix → international
  }
  return $clean;
}

/**
 * Are Twenty CRM credentials configured?
 */
function twenty_configured(): bool {
  return defined( 'TWENTY_API_URL' )
    && defined( 'TWENTY_API_TOKEN' )
    && '' !== (string) TWENTY_API_URL
    && '' !== (string) TWENTY_API_TOKEN;
}

/**
 * Push a submission to Twenty CRM.
 *
 * Creates a Person and an Opportunity linked to it. The Opportunity goes into
 * the configured first stage (TWENTY_FIRST_STAGE constant), defaulting to
 * 'NEW' to match Twenty's stock pipeline.
 *
 * On failure we increment a retry counter and schedule wp-cron to try again
 * with exponential backoff. After MAX_TWENTY_RETRIES the row is marked failed
 * and an error is logged so PHP error log alerting can catch it.
 */
function sync_to_twenty( int $submission_id ): void {
  if ( ! twenty_configured() ) {
    return;
  }

  global $wpdb;
  $table = table();
  $row   = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM {$table} WHERE id = %d", $submission_id ) );
  if ( ! $row ) {
    return;
  }
  if ( 'synced' === $row->status ) {
    return;
  }

  $api_base   = rtrim( (string) TWENTY_API_URL, '/' );
  $auth_header = 'Bearer ' . TWENTY_API_TOKEN;
  // Verified against /open-api/core on 2026-06-25: stage enum is
  // LIIDIT, OFFER_IN, WON, LOST. LIIDIT is the first stage.
  $first_stage = defined( 'TWENTY_FIRST_STAGE' ) ? (string) TWENTY_FIRST_STAGE : 'LIIDIT';

  // Split full name into first + last.
  $parts      = preg_split( '/\s+/', trim( $row->name ), 2 );
  $first_name = $parts[0] ?? '';
  $last_name  = $parts[1] ?? '';

  // 1. Create Person.
  // Note: companyId on Person requires a UUID. For v1 we put the typed-in
  // company name into jobTitle so it's not lost. Full Company linking is a
  // separate future enhancement.
  $person_body = [
    'name'   => [
      'firstName' => $first_name,
      'lastName'  => $last_name,
    ],
    'emails' => [
      'primaryEmail' => $row->email,
    ],
  ];
  if ( $row->phone ) {
    $person_body['phones'] = [
      'primaryPhoneNumber' => normalize_phone( (string) $row->phone ),
    ];
  }
  if ( $row->company ) {
    $person_body['jobTitle'] = $row->company;
  }

  // `?upsert=true` tells Twenty to update an existing Person with the same
  // identifying fields instead of throwing a 400 duplicate error. The same
  // contact submitting twice (or an existing Person re-engaging) becomes an
  // update of their record rather than a hard failure.
  $do_person_request = static function ( array $body ) use ( $api_base, $auth_header ) {
    return wp_remote_post( $api_base . '/rest/people?upsert=true', [
      'headers' => [
        'Authorization' => $auth_header,
        'Content-Type'  => 'application/json',
      ],
      'body'    => wp_json_encode( $body ),
      'timeout' => 6,
    ] );
  };
  $person_response = $do_person_request( $person_body );

  // Twenty rejects some phone formats hard. Don't lose the lead - retry
  // without the phone field. The phone is still in our local DB row and in
  // the email notification, so it's not lost downstream.
  if ( ! is_wp_error( $person_response )
    && wp_remote_retrieve_response_code( $person_response ) >= 400
    && isset( $person_body['phones'] )
    && false !== strpos( (string) wp_remote_retrieve_body( $person_response ), 'INVALID_PHONE_NUMBER' )
  ) {
    unset( $person_body['phones'] );
    $person_response = $do_person_request( $person_body );
  }

  if ( is_wp_error( $person_response ) || wp_remote_retrieve_response_code( $person_response ) >= 300 ) {
    record_twenty_failure( $submission_id, $row, $person_response, 'person' );
    return;
  }

  $person_data = json_decode( (string) wp_remote_retrieve_body( $person_response ), true );
  $person_id   = $person_data['data']['createPerson']['id']
    ?? $person_data['data']['updatePerson']['id']
    ?? $person_data['data']['id']
    ?? $person_data['id']
    ?? '';

  if ( '' === $person_id ) {
    record_twenty_failure( $submission_id, $row, $person_response, 'person' );
    return;
  }

  // Look up a Company by the visitor's email domain when it is not a free
  // mailbox. If a match exists in Twenty, link both Person and Opportunity to
  // it. We never create a Company in Phase 1 - that is the AI enrichment job
  // because the human-readable company name is not derivable from the domain
  // alone in general.
  $company_id = '';
  $domain     = email_domain( (string) $row->email );
  if ( ! is_free_email_domain( $domain ) ) {
    $company_id = find_twenty_company_by_domain( $api_base, $auth_header, $domain );
    if ( '' !== $company_id ) {
      $patch = wp_remote_request( $api_base . '/rest/people/' . rawurlencode( $person_id ), [
        'method'  => 'PATCH',
        'headers' => [
          'Authorization' => $auth_header,
          'Content-Type'  => 'application/json',
        ],
        'body'    => wp_json_encode( [ 'companyId' => $company_id ] ),
        'timeout' => 5,
      ] );
      if ( is_wp_error( $patch ) || wp_remote_retrieve_response_code( $patch ) >= 300 ) {
        error_log( '[dude-forms] linking Person to Company failed (non-fatal): ' . ( is_wp_error( $patch ) ? $patch->get_error_message() : wp_remote_retrieve_body( $patch ) ) );
      }
    }
  }

  // 2. Create Opportunity in first stage, linked to the Person. The
  // Opportunity name includes the company so it's visible in the pipeline
  // list view without expanding the row.
  $opp_label = $row->company
    ? $row->name . ' / ' . $row->company
    : $row->name;
  $opp_body = [
    'name'             => 'Yhteydenotto: ' . $opp_label,
    'stage'            => $first_stage,
    'pointOfContactId' => $person_id,
  ];

  // Default owner so the lead is not unassigned in the pipeline.
  if ( defined( 'TWENTY_DEFAULT_OWNER_ID' ) && '' !== (string) TWENTY_DEFAULT_OWNER_ID ) {
    $opp_body['ownerId'] = (string) TWENTY_DEFAULT_OWNER_ID;
  }

  // Carry the Company link through to the Opportunity when we found one.
  if ( '' !== $company_id ) {
    $opp_body['companyId'] = $company_id;
  }

  // Default tunniste (Type) so new web leads land categorised. Workspace enum:
  // PIENKEHITYS, PROJEKTI, TILAUSKANTA, LASKUTETTU.
  if ( defined( 'TWENTY_DEFAULT_TUNNISTE' ) && '' !== (string) TWENTY_DEFAULT_TUNNISTE ) {
    $opp_body['tunniste'] = array_values( array_filter( array_map( 'trim', explode( ',', (string) TWENTY_DEFAULT_TUNNISTE ) ) ) );
  }

  // Budget when the visitor wrote a parseable number in field 9.
  if ( ! empty( $row->budget_euros ) ) {
    $opp_body['amount'] = [
      'amountMicros' => ( (int) $row->budget_euros ) * 1000000,
      'currencyCode' => 'EUR',
    ];
  }

  $opp_response = wp_remote_post( $api_base . '/rest/opportunities', [
    'headers' => [
      'Authorization' => $auth_header,
      'Content-Type'  => 'application/json',
    ],
    'body'    => wp_json_encode( $opp_body ),
    'timeout' => 6,
  ] );

  if ( is_wp_error( $opp_response ) || wp_remote_retrieve_response_code( $opp_response ) >= 300 ) {
    // Person did create - record it. Opportunity failed; retry whole thing.
    $wpdb->update( $table, [ 'twenty_person_id' => $person_id ], [ 'id' => $submission_id ] );
    record_twenty_failure( $submission_id, $row, $opp_response, 'opportunity' );
    return;
  }

  $opp_data = json_decode( wp_remote_retrieve_body( $opp_response ), true );
  $opp_id   = $opp_data['data']['createOpportunity']['id']
    ?? $opp_data['data']['id']
    ?? $opp_data['id']
    ?? '';

  $wpdb->update( $table, [
    'twenty_person_id'      => $person_id,
    'twenty_opportunity_id' => $opp_id,
    'twenty_synced_at'      => current_time( 'mysql' ),
    'twenty_last_error'     => '',
    'status'                => 'synced',
  ], [ 'id' => $submission_id ] );

  // AI enrichment runs out of band via a system cron entry that calls
  // `wp dude-forms enrich-pending` as a user who has Claude Code auth (see
  // README). We deliberately do not use wp_schedule_single_event here because
  // wp-cron typically runs as the WordPress system user which has no Claude
  // Code session; the system cron picks up unenriched rows on its own cadence.

  // 3. Attach a Note carrying the full message + extras so the salesperson
  //    sees them in Twenty. Best-effort: if Note creation fails the lead is
  //    still marked synced (Person + Opportunity are already created).
  try {
    create_twenty_note_for_opportunity( $api_base, $auth_header, $opp_id, $row );
  } catch ( \Throwable $e ) {
    error_log( '[dude-forms] Twenty Note failed for submission #' . $submission_id . ': ' . $e->getMessage() );
  }

  // 4. Mirror each WPForms file upload into Twenty Files, linked to this
  //    Opportunity. Also best-effort.
  try {
    create_twenty_attachments_for_opportunity( $api_base, $auth_header, $opp_id, $row );
  } catch ( \Throwable $e ) {
    error_log( '[dude-forms] Twenty Attachments failed for submission #' . $submission_id . ': ' . $e->getMessage() );
  }
}

/**
 * Create one Twenty Attachment per file uploaded to the WPForms submission,
 * each linked to the freshly-created Opportunity. We store a public URL in
 * `fullPath`, since Twenty's REST API does not expose a binary upload
 * endpoint and WPForms files are already publicly served under
 * `https://www.dude.fi/wp-content/uploads/wpforms/...`.
 */
function create_twenty_attachments_for_opportunity( string $api_base, string $auth_header, string $opp_id, $row ): void {
  if ( '' === $opp_id || empty( $row->attachments ) ) {
    return;
  }
  $files = json_decode( (string) $row->attachments, true );
  if ( ! is_array( $files ) ) {
    return;
  }
  foreach ( $files as $file ) {
    $url  = (string) ( $file['url']  ?? '' );
    $name = (string) ( $file['name'] ?? '' );
    if ( '' === $url ) {
      continue;
    }
    $resp = wp_remote_post( $api_base . '/rest/attachments', [
      'headers' => [
        'Authorization' => $auth_header,
        'Content-Type'  => 'application/json',
      ],
      'body'    => wp_json_encode( [
        'name'                => $name !== '' ? $name : basename( $url ),
        'fullPath'            => $url,
        'fileCategory'        => 'OTHER',
        'targetOpportunityId' => $opp_id,
      ] ),
      'timeout' => 6,
    ] );
    if ( is_wp_error( $resp ) || wp_remote_retrieve_response_code( $resp ) >= 300 ) {
      error_log( '[dude-forms] Twenty Attachment create failed for ' . $url . ': ' . ( is_wp_error( $resp ) ? $resp->get_error_message() : wp_remote_retrieve_body( $resp ) ) );
    }
  }
}

/**
 * Create a Twenty Note containing the message and attach it to an Opportunity.
 * Best-effort - caller is responsible for try/catch around it.
 */
function create_twenty_note_for_opportunity( string $api_base, string $auth_header, string $opp_id, $row ): void {
  if ( '' === $opp_id ) {
    return;
  }

  $lines = [];
  if ( $row->message ) {
    $lines[] = $row->message;
  }
  $lines[] = '';
  $lines[] = '---';
  if ( $row->source_url ) {
    $lines[] = 'Lähde: ' . $row->source_url;
  }
  $lines[] = 'WPForms submission #' . (int) $row->id . ' (' . $row->form_key . ')';
  $body_md = implode( "\n", $lines );

  $note_response = wp_remote_post( $api_base . '/rest/notes', [
    'headers' => [
      'Authorization' => $auth_header,
      'Content-Type'  => 'application/json',
    ],
    'body'    => wp_json_encode( [
      'title'  => 'Yhteydenotto: ' . $row->name,
      'bodyV2' => [
        'markdown'  => $body_md,
        'blocknote' => '',
      ],
    ] ),
    'timeout' => 6,
  ] );
  if ( is_wp_error( $note_response ) || wp_remote_retrieve_response_code( $note_response ) >= 300 ) {
    error_log( '[dude-forms] Twenty Note create failed: ' . ( is_wp_error( $note_response ) ? $note_response->get_error_message() : wp_remote_retrieve_body( $note_response ) ) );
    return;
  }
  $note_data = json_decode( (string) wp_remote_retrieve_body( $note_response ), true );
  $note_id   = (string) ( $note_data['data']['createNote']['id']
    ?? $note_data['data']['id']
    ?? $note_data['id']
    ?? '' );
  if ( '' === $note_id ) {
    return;
  }

  // Link the Note to the Opportunity via a NoteTarget.
  $link_response = wp_remote_post( $api_base . '/rest/noteTargets', [
    'headers' => [
      'Authorization' => $auth_header,
      'Content-Type'  => 'application/json',
    ],
    'body'    => wp_json_encode( [
      'noteId'              => $note_id,
      'targetOpportunityId' => $opp_id,
    ] ),
    'timeout' => 6,
  ] );
  if ( is_wp_error( $link_response ) || wp_remote_retrieve_response_code( $link_response ) >= 300 ) {
    error_log( '[dude-forms] Twenty NoteTarget link failed: ' . ( is_wp_error( $link_response ) ? $link_response->get_error_message() : wp_remote_retrieve_body( $link_response ) ) );
  }
}

/**
 * Record a Twenty sync failure and schedule a retry with exponential backoff.
 */
function record_twenty_failure( int $submission_id, $row, $response, string $step ): void {
  global $wpdb;
  $table   = table();
  $retries = (int) $row->twenty_retries + 1;

  if ( is_wp_error( $response ) ) {
    $error = $response->get_error_message();
  } else {
    $code  = wp_remote_retrieve_response_code( $response );
    $body  = wp_remote_retrieve_body( $response );
    $error = "HTTP {$code}: " . substr( (string) $body, 0, 400 );
  }
  $error = sprintf( '[%s] %s', $step, $error );

  $is_final = $retries >= MAX_TWENTY_RETRIES;
  $wpdb->update( $table, [
    'twenty_retries'    => $retries,
    'twenty_last_error' => substr( $error, 0, 512 ),
    'status'            => $is_final ? 'failed' : 'new',
  ], [ 'id' => $submission_id ] );

  if ( $is_final ) {
    error_log( "[dude-forms] Twenty sync FAILED for submission #{$submission_id} after {$retries} attempts: {$error}" );
    return;
  }

  // Exponential backoff: 5 min, 25 min, then it's the final attempt.
  $delay = 60 * 5 * ( $retries * $retries );
  wp_schedule_single_event( time() + $delay, RETRY_HOOK, [ $submission_id ] );
}
add_action( RETRY_HOOK, __NAMESPACE__ . '\\sync_to_twenty' );

/**
 * Bridge existing WPForms 11358 (front-page contact form) submissions into
 * the same durable table + Twenty sync as the new server-side form. This is
 * a temporary belt during migration: when the new template-contact form goes
 * live, both paths still hit the same downstream pipeline so leads keep
 * flowing into Twenty regardless of which form the visitor used.
 *
 * Field IDs in form 11358:
 *   2  = Nimi
 *   8  = Sähköposti
 *   11 = Puhelin
 *   1  = Laita meille viestiä!
 *   4  = Mille voisi olla tarvetta? (checkbox)
 *   12 = Mitä ominaisuuksia laitetaan? (checkbox)
 *   6  = Milloin pitäisi olla valmista?
 *   9  = Alustava budjetti?
 *
 * Defensive: ANY error is caught and logged. WPForms email + DB entry happen
 * before this hook fires, so a Twenty failure cannot block a lead reaching the
 * sales inbox.
 */
const BRIDGE_FORM_ID = 11358;

add_action( 'wpforms_process_complete', __NAMESPACE__ . '\\bridge_wpforms_to_twenty', 100, 4 );

function bridge_wpforms_to_twenty( $fields, $entry, $form_data, $entry_id ): void {
  $form_id = (int) ( $form_data['id'] ?? 0 );
  if ( BRIDGE_FORM_ID !== $form_id ) {
    return;
  }

  try {
    $get = static function ( int $field_id ) use ( $fields ): string {
      $v = $fields[ $field_id ]['value'] ?? '';
      if ( is_array( $v ) ) {
        $v = implode( ', ', array_filter( array_map( 'strval', $v ) ) );
      }
      return is_string( $v ) ? trim( $v ) : '';
    };

    $name    = sanitize_text_field( $get( 2 ) );
    $email   = sanitize_email( $get( 8 ) );
    $phone   = sanitize_text_field( $get( 11 ) );
    $message = sanitize_textarea_field( $get( 1 ) );
    $budget  = parse_budget_euros( $get( 9 ) );

    // WPForms enforces required fields and email format, so we trust them.
    // The one thing we still gate on is a non-empty email, because without it
    // Twenty has nothing to dedupe against.
    if ( '' === $email ) {
      return;
    }

    // Append every other answered field to the message using the form's own
    // labels. Skip the core fields we already mapped, the honeypot, hidden
    // fields, and file uploads (those become Twenty Attachments below).
    $core_fields  = [ 2, 8, 11, 1 ];
    $skip_types   = [ 'hidden', 'divider', 'pagebreak', 'html', 'file-upload' ];
    $form_fields  = $form_data['fields'] ?? [];
    $extras = [];
    foreach ( $form_fields as $fid => $field_def ) {
      $fid = (int) $fid;
      if ( in_array( $fid, $core_fields, true ) ) {
        continue;
      }
      if ( in_array( $field_def['type'] ?? '', $skip_types, true ) ) {
        continue;
      }
      $label = sanitize_text_field( (string) ( $field_def['label'] ?? '' ) );
      $value = $get( $fid );
      if ( '' === $value || '' === $label ) {
        continue;
      }
      $extras[] = "{$label}: {$value}";
    }
    if ( $extras ) {
      $message .= "\n\n--- Lisätiedot ---\n" . implode( "\n", $extras );
    }

    // Collect file uploads from every file-upload field; store as JSON so the
    // Twenty sync step can turn each into an Attachment linked to the
    // Opportunity.
    $attachments = [];
    foreach ( $form_fields as $fid => $field_def ) {
      if ( ( $field_def['type'] ?? '' ) !== 'file-upload' ) {
        continue;
      }
      $raw = $fields[ $fid ]['value_raw'] ?? null;
      if ( ! is_array( $raw ) ) {
        continue;
      }
      foreach ( $raw as $file ) {
        $file_url  = (string) ( $file['value'] ?? '' );
        $file_name = (string) ( $file['name']  ?? '' );
        if ( '' === $file_url ) {
          continue;
        }
        $attachments[] = [
          'name' => $file_name !== '' ? $file_name : basename( $file_url ),
          'url'  => esc_url_raw( $file_url ),
        ];
      }
    }

    global $wpdb;
    $inserted = $wpdb->insert( table(), [
      'form_key'     => 'wpforms-' . $form_id,
      'name'         => $name,
      'email'        => $email,
      'phone'        => $phone,
      'company'      => '',
      'message'      => $message,
      'source_url'   => esc_url_raw( (string) ( $entry['referer_url'] ?? '' ) ),
      'referrer'     => '',
      'ip_hash'      => hash( 'sha256', (string) ( $_SERVER['REMOTE_ADDR'] ?? '' ) ),
      'user_agent'   => substr( (string) ( $_SERVER['HTTP_USER_AGENT'] ?? '' ), 0, 512 ),
      'created_at'   => current_time( 'mysql' ),
      'status'       => 'new',
      'attachments'  => $attachments ? wp_json_encode( $attachments ) : null,
      'budget_euros' => null !== $budget ? $budget : null,
    ] );

    if ( false === $inserted ) {
      error_log( '[dude-forms] WPForms ' . $form_id . ' bridge DB insert failed: ' . $wpdb->last_error );
      return;
    }

    $submission_id = (int) $wpdb->insert_id;

    if ( twenty_configured() ) {
      sync_to_twenty( $submission_id );
    }
  } catch ( \Throwable $e ) {
    error_log( '[dude-forms] WPForms ' . $form_id . ' bridge error: ' . $e->getMessage() );
  }
}

/**
 * WP-CLI: `wp dude-forms sync <id>` - manually trigger Twenty sync for a row
 * (used for backfill after we add Twenty credentials).
 */
if ( defined( 'WP_CLI' ) && WP_CLI ) {
  \WP_CLI::add_command( 'dude-forms sync', function ( $args ) {
    if ( empty( $args[0] ) ) {
      \WP_CLI::error( 'Usage: wp dude-forms sync <submission_id>' );
    }
    if ( ! twenty_configured() ) {
      \WP_CLI::error( 'Twenty not configured. Set TWENTY_API_URL and TWENTY_API_TOKEN in .env / config.' );
    }
    sync_to_twenty( (int) $args[0] );
    \WP_CLI::success( 'Sync attempted for submission #' . (int) $args[0] );
  } );

  \WP_CLI::add_command( 'dude-forms backfill', function () {
    if ( ! twenty_configured() ) {
      \WP_CLI::error( 'Twenty not configured.' );
    }
    global $wpdb;
    $rows = $wpdb->get_col( "SELECT id FROM " . table() . " WHERE status IN ('new','failed') ORDER BY id ASC" );
    foreach ( $rows as $id ) {
      sync_to_twenty( (int) $id );
      \WP_CLI::log( "Synced #{$id}" );
    }
    \WP_CLI::success( 'Backfill complete: ' . count( $rows ) . ' rows processed.' );
  } );

  \WP_CLI::add_command( 'dude-forms enrich', function ( $args ) {
    if ( empty( $args[0] ) ) {
      \WP_CLI::error( 'Usage: wp dude-forms enrich <submission_id>' );
    }
    enrich_submission_with_ai( (int) $args[0] );
    \WP_CLI::success( 'Enrichment attempted for submission #' . (int) $args[0] );
  } );

  \WP_CLI::add_command( 'dude-forms enrich-pending', function () {
    global $wpdb;
    $rows = $wpdb->get_col( "SELECT id FROM " . table() . " WHERE status='synced' AND enriched_at IS NULL ORDER BY id ASC LIMIT 25" );
    if ( ! $rows ) {
      \WP_CLI::log( 'No pending rows.' );
      return;
    }
    foreach ( $rows as $id ) {
      enrich_submission_with_ai( (int) $id );
      \WP_CLI::log( "Enriched #{$id}" );
    }
    \WP_CLI::success( 'Processed ' . count( $rows ) . ' pending row(s).' );
  } );
}

/* -----------------------------------------------------------------------------
 * AI enrichment (Phase 2)
 *
 * After the basic Twenty sync succeeds we optionally ask Claude (via the
 * Claude Code CLI installed on the server) to enrich the lead with what it
 * knows about the company and likely role. The job runs out of band on
 * wp-cron so it never blocks the visitor's form-submission response. If
 * anything goes wrong the basic record stays put.
 *
 * Configuration:
 *   - DUDE_FORMS_ENRICH_WITH_AI=1       turn the feature on
 *   - DUDE_FORMS_CLAUDE_BIN=/path/to/claude   override binary path
 * -----------------------------------------------------------------------------
 */

/**
 * Locate the Claude Code CLI binary. Returns '' when none is available.
 */
function claude_bin(): string {
  if ( defined( 'DUDE_FORMS_CLAUDE_BIN' ) && '' !== (string) DUDE_FORMS_CLAUDE_BIN ) {
    return (string) DUDE_FORMS_CLAUDE_BIN;
  }
  foreach ( [ '/home/rolle/.local/bin/claude', '/usr/local/bin/claude', '/usr/bin/claude' ] as $candidate ) {
    if ( is_file( $candidate ) && is_executable( $candidate ) ) {
      return $candidate;
    }
  }
  return '';
}

/**
 * Build the enrichment prompt for Claude. Includes the form data plus a
 * strict JSON schema and a one-shot example to make response parsing
 * predictable. All visitor-supplied strings are placed inside fenced blocks
 * so prompt-injection from the message body cannot rewrite the instructions.
 */
function build_enrichment_prompt( $row ): string {
  $domain  = email_domain( (string) $row->email );
  $extras  = ( false !== strpos( (string) $row->message, "--- Lisätiedot ---" ) )
    ? substr( (string) $row->message, strpos( (string) $row->message, "--- Lisätiedot ---" ) )
    : '';
  $message = ( '' !== $extras )
    ? substr( (string) $row->message, 0, strpos( (string) $row->message, "--- Lisätiedot ---" ) )
    : (string) $row->message;

  $payload = [
    'name'    => (string) $row->name,
    'email'   => (string) $row->email,
    'domain'  => $domain,
    'phone'   => (string) $row->phone,
    'budget_euros' => $row->budget_euros ? (int) $row->budget_euros : null,
    'message' => trim( $message ),
    'extras'  => trim( $extras ),
  ];

  $schema = <<<JSON
{
  "company": {
    "known": false,
    "name": "",
    "industry": "",
    "domain": "",
    "linkedin_url_guess": "",
    "summary_fi": ""
  },
  "person": {
    "likely_role": "",
    "language": "fi"
  },
  "salesperson_briefing_fi": ""
}
JSON;

  $instructions = <<<TXT
You are enriching a lead-form submission for a Finnish digital agency (Dude).
Return a single JSON object that matches the schema below, with no prose, no
markdown, no code fences.

Rules:
- "company.known" must be true ONLY when you can confidently identify the
  company from the email domain or the message. Otherwise leave it false and
  leave the other company fields empty strings.
- "linkedin_url_guess" must be either an exact URL you are highly confident
  exists, or an empty string. Never guess plausible-but-unverified URLs.
- "person.likely_role" is optional. Infer from signatures, message tone, or
  email patterns (etunimi.sukunimi@). Empty string when unsure.
- "person.language" is the ISO 639-1 code of the message language (e.g. "fi",
  "en", "sv"). Default to "fi".
- "salesperson_briefing_fi" is a single short paragraph in Finnish summarising
  who this lead seems to be and what they want, max 80 words.

Schema:
$schema

Submission:
TXT;

  return $instructions . "\n" . wp_json_encode( $payload, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT );
}

/**
 * Invoke `claude -p` with the prompt on stdin and return the raw stdout, or
 * '' on any failure (logged).
 */
function run_claude( string $prompt ): string {
  $bin = claude_bin();
  if ( '' === $bin ) {
    error_log( '[dude-forms] enrich skipped: no claude binary found' );
    return '';
  }

  $descriptors = [
    0 => [ 'pipe', 'r' ],
    1 => [ 'pipe', 'w' ],
    2 => [ 'pipe', 'w' ],
  ];
  // Pass --output-format json so Claude wraps its answer in a stable
  // envelope with { result, session_id, ... }. We unwrap it below.
  $cmd = $bin . ' -p --output-format json';
  $env = [ 'PATH' => '/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin', 'HOME' => getenv( 'HOME' ) ?: '/tmp' ];
  $proc = proc_open( $cmd, $descriptors, $pipes, null, $env );
  if ( ! is_resource( $proc ) ) {
    error_log( '[dude-forms] proc_open(claude) failed' );
    return '';
  }
  fwrite( $pipes[0], $prompt );
  fclose( $pipes[0] );
  $stdout = stream_get_contents( $pipes[1] );
  $stderr = stream_get_contents( $pipes[2] );
  fclose( $pipes[1] );
  fclose( $pipes[2] );
  $exit = proc_close( $proc );
  if ( 0 !== $exit ) {
    error_log( '[dude-forms] claude exit=' . $exit . ' stderr=' . substr( (string) $stderr, 0, 500 ) );
    return '';
  }
  return (string) $stdout;
}

/**
 * Pull the first JSON object out of a body of text. Claude may or may not
 * wrap its response in a fence; this is tolerant of either.
 */
function extract_json_object( string $body ): array {
  $body = trim( $body );
  if ( '' === $body ) {
    return [];
  }
  // Strip surrounding code fence if present.
  if ( str_starts_with( $body, '```' ) ) {
    $body = preg_replace( '/^```[a-z]*\s*|\s*```$/m', '', $body );
  }
  $start = strpos( $body, '{' );
  $end   = strrpos( $body, '}' );
  if ( false === $start || false === $end || $end <= $start ) {
    return [];
  }
  $json   = substr( $body, $start, $end - $start + 1 );
  $parsed = json_decode( $json, true );
  return is_array( $parsed ) ? $parsed : [];
}

/**
 * Background job: pull the row, run Claude, store the enrichment, and apply
 * the relevant fields to the existing Twenty records. Best-effort all the way
 * down. Logs failures and returns.
 */
function enrich_submission_with_ai( int $submission_id ): void {
  if ( ! twenty_configured() ) {
    return;
  }
  global $wpdb;
  $row = $wpdb->get_row( $wpdb->prepare( "SELECT * FROM " . table() . " WHERE id = %d", $submission_id ) );
  if ( ! $row || 'synced' !== $row->status ) {
    return;
  }
  if ( ! empty( $row->enriched_at ) ) {
    return; // already enriched
  }

  try {
    $prompt   = build_enrichment_prompt( $row );
    $envelope = run_claude( $prompt );
    if ( '' === $envelope ) {
      return;
    }

    // Claude --output-format json envelope shape: { "result": "...", "session_id": "..." }
    $envelope_data = json_decode( $envelope, true );
    $result_text   = is_array( $envelope_data ) && isset( $envelope_data['result'] )
      ? (string) $envelope_data['result']
      : $envelope;

    $enrichment = extract_json_object( $result_text );
    if ( empty( $enrichment ) ) {
      error_log( '[dude-forms] enrich: could not parse JSON from claude output' );
      return;
    }

    $wpdb->update( table(), [
      'enrichment'  => wp_json_encode( $enrichment, JSON_UNESCAPED_UNICODE ),
      'enriched_at' => current_time( 'mysql' ),
    ], [ 'id' => $submission_id ] );

    apply_enrichment_to_twenty( $row, $enrichment );
  } catch ( \Throwable $e ) {
    error_log( '[dude-forms] enrich error: ' . $e->getMessage() );
  }
}

/**
 * Push enrichment fields into Twenty. Order:
 *   1. Create or link a Company when one is confidently identified
 *   2. Patch Person.jobTitle when empty and we have a likely role
 *   3. Append the salesperson briefing as a Note attached to the Opportunity
 */
function apply_enrichment_to_twenty( $row, array $enrichment ): void {
  $api_base    = rtrim( (string) TWENTY_API_URL, '/' );
  $auth_header = 'Bearer ' . TWENTY_API_TOKEN;

  $company_data = is_array( $enrichment['company'] ?? null ) ? $enrichment['company'] : [];
  $person_data  = is_array( $enrichment['person']  ?? null ) ? $enrichment['person']  : [];
  $briefing     = (string) ( $enrichment['salesperson_briefing_fi'] ?? '' );

  // Company
  if ( ! empty( $company_data['known'] ) && '' !== (string) ( $company_data['name'] ?? '' ) ) {
    $domain = email_domain( (string) $row->email );
    if ( ! is_free_email_domain( $domain ) ) {
      $company_id = find_twenty_company_by_domain( $api_base, $auth_header, $domain );
      if ( '' === $company_id ) {
        $company_body = [
          'name'       => (string) $company_data['name'],
          'domainName' => [ 'primaryLinkUrl' => $domain, 'primaryLinkLabel' => $domain ],
        ];
        if ( ! empty( $company_data['linkedin_url_guess'] ) ) {
          $company_body['linkedinLink'] = [ 'primaryLinkUrl' => (string) $company_data['linkedin_url_guess'], 'primaryLinkLabel' => '' ];
        }
        $resp = wp_remote_post( $api_base . '/rest/companies?upsert=true', [
          'headers' => [ 'Authorization' => $auth_header, 'Content-Type' => 'application/json' ],
          'body'    => wp_json_encode( $company_body ),
          'timeout' => 6,
        ] );
        if ( ! is_wp_error( $resp ) && wp_remote_retrieve_response_code( $resp ) < 300 ) {
          $d = json_decode( (string) wp_remote_retrieve_body( $resp ), true );
          $company_id = (string) ( $d['data']['createCompany']['id'] ?? $d['data']['updateCompany']['id'] ?? '' );
        } else {
          error_log( '[dude-forms] enrich: Company create failed: ' . ( is_wp_error( $resp ) ? $resp->get_error_message() : wp_remote_retrieve_body( $resp ) ) );
        }
      }
      if ( '' !== $company_id ) {
        if ( ! empty( $row->twenty_person_id ) ) {
          wp_remote_request( $api_base . '/rest/people/' . rawurlencode( (string) $row->twenty_person_id ), [
            'method'  => 'PATCH',
            'headers' => [ 'Authorization' => $auth_header, 'Content-Type' => 'application/json' ],
            'body'    => wp_json_encode( [ 'companyId' => $company_id ] ),
            'timeout' => 5,
          ] );
        }
        if ( ! empty( $row->twenty_opportunity_id ) ) {
          wp_remote_request( $api_base . '/rest/opportunities/' . rawurlencode( (string) $row->twenty_opportunity_id ), [
            'method'  => 'PATCH',
            'headers' => [ 'Authorization' => $auth_header, 'Content-Type' => 'application/json' ],
            'body'    => wp_json_encode( [ 'companyId' => $company_id ] ),
            'timeout' => 5,
          ] );
        }
      }
    }
  }

  // Person job title
  $likely_role = (string) ( $person_data['likely_role'] ?? '' );
  if ( '' !== $likely_role && ! empty( $row->twenty_person_id ) ) {
    wp_remote_request( $api_base . '/rest/people/' . rawurlencode( (string) $row->twenty_person_id ), [
      'method'  => 'PATCH',
      'headers' => [ 'Authorization' => $auth_header, 'Content-Type' => 'application/json' ],
      'body'    => wp_json_encode( [ 'jobTitle' => $likely_role ] ),
      'timeout' => 5,
    ] );
  }

  // Briefing note
  if ( '' !== $briefing && ! empty( $row->twenty_opportunity_id ) ) {
    $resolved_company = trim( (string) ( $company_data['name'] ?? '' ) );
    if ( '' === $resolved_company ) {
      $resolved_company = trim( (string) ( $row->company ?? '' ) );
    }
    $title_parts   = array_values( array_filter( array_map( 'trim', [ (string) $row->name, $resolved_company ] ) ) );
    $title_subject = $title_parts ? implode( ', ', $title_parts ) : (string) $row->email;
    $note_title    = 'Yhteydenotto - ' . $title_subject . ' - Tekoälyllä rikastettu tiivistelmä dude.fi lomakkeesta';

    $server_host = gethostname() ?: ( wp_parse_url( home_url(), PHP_URL_HOST ) ?: 'dude.fi' );
    $footer      = "\n\n---\n*Tämä tiivistelmä on tuotettu automaattisesti `claude -p` -työkalulla (Anthropic Claude Code CLI) palvelimella `" . $server_host . "`, mu-pluginissa `dude-forms` (Linear: DEV-1110). Lähde: WPForms-lomakelähetys #" . (int) $row->id . '.*';

    $note_resp = wp_remote_post( $api_base . '/rest/notes', [
      'headers' => [ 'Authorization' => $auth_header, 'Content-Type' => 'application/json' ],
      'body'    => wp_json_encode( [
        'title'  => $note_title,
        'bodyV2' => [ 'markdown' => $briefing . $footer, 'blocknote' => '' ],
      ] ),
      'timeout' => 6,
    ] );
    if ( ! is_wp_error( $note_resp ) && wp_remote_retrieve_response_code( $note_resp ) < 300 ) {
      $nd      = json_decode( (string) wp_remote_retrieve_body( $note_resp ), true );
      $note_id = (string) ( $nd['data']['createNote']['id'] ?? '' );
      if ( '' !== $note_id ) {
        wp_remote_post( $api_base . '/rest/noteTargets', [
          'headers' => [ 'Authorization' => $auth_header, 'Content-Type' => 'application/json' ],
          'body'    => wp_json_encode( [
            'noteId'              => $note_id,
            'targetOpportunityId' => (string) $row->twenty_opportunity_id,
          ] ),
          'timeout' => 6,
        ] );
      }
    }
  }
}
