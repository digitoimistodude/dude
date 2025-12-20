<?php
// Xmas Pikkujoulu 2025 REST API
add_action( 'rest_api_init', function () {
  register_rest_route( 'xmas/v1', '/messages', array(
    'methods'             => 'GET',
    'callback'            => 'dude_xmas_get_messages',
    'permission_callback' => '__return_true',
  ) );

  register_rest_route( 'xmas/v1', '/messages', array(
    'methods'             => 'POST',
    'callback'            => 'dude_xmas_post_message',
    'permission_callback' => '__return_true',
  ) );

  register_rest_route( 'xmas/v1', '/visitors', array(
    'methods'             => 'GET',
    'callback'            => 'dude_xmas_get_visitors',
    'permission_callback' => '__return_true',
  ) );

  register_rest_route( 'xmas/v1', '/like', array(
    'methods'             => 'POST',
    'callback'            => 'dude_xmas_like_message',
    'permission_callback' => '__return_true',
  ) );

  register_rest_route( 'xmas/v1', '/total-visitors', array(
    'methods'             => 'GET',
    'callback'            => 'dude_xmas_get_total_visitors',
    'permission_callback' => '__return_true',
  ) );
} );

function dude_xmas_get_visitors() {
  $api_key = defined( 'PLAUSIBLE_API_KEY' ) ? PLAUSIBLE_API_KEY : '';
  if ( empty( $api_key ) ) {
    return rest_ensure_response( array( 'visitors' => 0 ) );
  }

  $response = wp_remote_get( 'https://analytics.dude.fi/api/v1/stats/realtime/visitors?site_id=dude.fi', array(
    'headers' => array(
      'Authorization' => 'Bearer ' . $api_key,
    ),
    'timeout' => 5,
  ) );

  if ( is_wp_error( $response ) ) {
    return rest_ensure_response( array( 'visitors' => 0 ) );
  }

  $body = wp_remote_retrieve_body( $response );
  $visitors = intval( $body );

  return rest_ensure_response( array( 'visitors' => $visitors ) );
}

function dude_xmas_get_total_visitors() {
  // Track unique visitors ourselves using hashed IPs
  // Baseline: 189 visitors before we started tracking (Dec 19, 2025)
  $baseline = 189;

  // Get visitor IP
  $ip = '';
  if ( ! empty( $_SERVER['HTTP_CLIENT_IP'] ) ) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
  } elseif ( ! empty( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
    $ip = explode( ',', $_SERVER['HTTP_X_FORWARDED_FOR'] )[0];
  } else {
    $ip = $_SERVER['REMOTE_ADDR'] ?? '';
  }

  // Hash IP for privacy (use WP secure key)
  $salt = defined( 'SECURE_AUTH_KEY' ) ? SECURE_AUTH_KEY : 'xmas2025';
  $ip_hash = md5( $ip . $salt );

  // Get existing visitors
  $visitors = get_option( 'dude_xmas_unique_visitors_2025', array() );

  // Add this visitor if not already tracked
  if ( ! empty( $ip ) && ! in_array( $ip_hash, $visitors, true ) ) {
    $visitors[] = $ip_hash;
    update_option( 'dude_xmas_unique_visitors_2025', $visitors, false );
  }

  $total = $baseline + count( $visitors );

  return rest_ensure_response( array( 'total' => $total ) );
}

function dude_xmas_get_messages() {
  // Try to get cached response first (cache for 5 seconds to reduce DB load)
  $cached = get_transient( 'dude_xmas_messages_cache' );
  if ( $cached !== false ) {
    return rest_ensure_response( $cached );
  }

  $messages = get_option( 'dude_xmas_messages_2025', array() );
  $likes = get_option( 'dude_xmas_likes_2025', array() );

  // Add like counts to messages and remove IP
  $messages = array_map( function( $msg ) use ( $likes ) {
    unset( $msg['ip'] );
    $msg['likes'] = isset( $likes[ $msg['id'] ] ) ? $likes[ $msg['id'] ] : 0;
    return $msg;
  }, $messages );

  // Sort: 10+ likes stick to top, then newest first
  usort( $messages, function( $a, $b ) {
    $a_popular = $a['likes'] >= 10;
    $b_popular = $b['likes'] >= 10;
    // Popular messages (10+ likes) go to top
    if ( $a_popular && ! $b_popular ) return -1;
    if ( $b_popular && ! $a_popular ) return 1;
    // Among popular, sort by likes desc
    if ( $a_popular && $b_popular ) {
      if ( $a['likes'] !== $b['likes'] ) {
        return $b['likes'] - $a['likes'];
      }
    }
    // Otherwise sort by timestamp desc (newest first)
    return strtotime( $b['timestamp'] ) - strtotime( $a['timestamp'] );
  } );

  // Cache for 5 seconds
  set_transient( 'dude_xmas_messages_cache', $messages, 5 );

  return rest_ensure_response( $messages );
}

function dude_xmas_post_message( WP_REST_Request $request ) {
  // Origin check - only allow from dude.fi
  $origin = isset( $_SERVER['HTTP_ORIGIN'] ) ? $_SERVER['HTTP_ORIGIN'] : '';
  $referer = isset( $_SERVER['HTTP_REFERER'] ) ? $_SERVER['HTTP_REFERER'] : '';
  $allowed = strpos( $origin, 'dude.fi' ) !== false || strpos( $referer, 'dude.fi' ) !== false;
  if ( ! $allowed && ! empty( $origin ) ) {
    return new WP_Error( 'forbidden', 'Kielletty', array( 'status' => 403 ) );
  }

  $params = $request->get_json_params();

  // Honeypot - bots fill hidden fields
  $honeypot = isset( $params['website'] ) ? $params['website'] : '';
  if ( ! empty( $honeypot ) ) {
    // Pretend success but don't save
    return rest_ensure_response( array( 'id' => 'fake', 'status' => 'ok' ) );
  }

  $author = isset( $params['author'] ) ? sanitize_text_field( $params['author'] ) : '';
  $message = isset( $params['message'] ) ? sanitize_textarea_field( $params['message'] ) : '';

  if ( empty( $author ) || empty( $message ) ) {
    return new WP_Error( 'missing_fields', 'Nimi ja viesti vaaditaan', array( 'status' => 400 ) );
  }

  if ( mb_strlen( $author ) > 50 || mb_strlen( $message ) > 500 ) {
    return new WP_Error( 'too_long', 'Nimi max 50 merkkiä, viesti max 500 merkkiä', array( 'status' => 400 ) );
  }

  // Get real IP (handle proxies/CloudFlare)
  $ip = isset( $_SERVER['HTTP_CF_CONNECTING_IP'] ) ? $_SERVER['HTTP_CF_CONNECTING_IP'] :
        ( isset( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ? explode( ',', $_SERVER['HTTP_X_FORWARDED_FOR'] )[0] :
        $_SERVER['REMOTE_ADDR'] );
  $rate_limit_key = 'xmas_rate_' . md5( $ip );
  $last_post = get_transient( $rate_limit_key );

  if ( $last_post && ( time() - $last_post ) < 30 ) {
    return new WP_Error( 'rate_limit', 'Odota 30 sekuntia ennen seuraavaa viestiä', array( 'status' => 429 ) );
  }

  $messages = get_option( 'dude_xmas_messages_2025', array() );

  $new_message = array(
    'id'        => uniqid(),
    'author'    => $author,
    'message'   => $message,
    'timestamp' => current_time( 'c' ),
    'ip'        => md5( $ip ),
  );

  $messages[] = $new_message;

  // Keep only the last 500 messages
  if ( count( $messages ) > 500 ) {
    $messages = array_slice( $messages, -500 );
  }

  update_option( 'dude_xmas_messages_2025', $messages );
  set_transient( $rate_limit_key, time(), 60 );

  // Clear the cache so new message shows immediately
  delete_transient( 'dude_xmas_messages_cache' );

  unset( $new_message['ip'] );
  return rest_ensure_response( $new_message );
}

function dude_xmas_get_client_ip() {
  if ( ! empty( $_SERVER['HTTP_CF_CONNECTING_IP'] ) ) {
    return sanitize_text_field( wp_unslash( $_SERVER['HTTP_CF_CONNECTING_IP'] ) );
  } elseif ( ! empty( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
    $ips = explode( ',', sanitize_text_field( wp_unslash( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) );
    return trim( $ips[0] );
  } elseif ( ! empty( $_SERVER['REMOTE_ADDR'] ) ) {
    return sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) );
  }
  return '';
}

function dude_xmas_check_rate_limit( $action = 'like' ) {
  $ip = dude_xmas_get_client_ip();
  $salt = defined( 'SECURE_AUTH_KEY' ) ? SECURE_AUTH_KEY : 'xmas2025';
  $ip_hash = md5( $ip . $salt );
  $rate_key = 'xmas_rate_' . $action . '_' . $ip_hash;

  $attempts = get_transient( $rate_key );
  if ( false === $attempts ) {
    $attempts = 1;
  } else {
    $attempts++;
  }

  // Max 10 likes per minute
  if ( $attempts > 10 ) {
    return false;
  }

  set_transient( $rate_key, $attempts, MINUTE_IN_SECONDS );
  return true;
}

function dude_xmas_like_message( WP_REST_Request $request ) {
  // Origin check
  $origin = isset( $_SERVER['HTTP_ORIGIN'] ) ? $_SERVER['HTTP_ORIGIN'] : '';
  $referer = isset( $_SERVER['HTTP_REFERER'] ) ? $_SERVER['HTTP_REFERER'] : '';
  $allowed = strpos( $origin, 'dude.fi' ) !== false || strpos( $referer, 'dude.fi' ) !== false;
  if ( ! $allowed && ! empty( $origin ) ) {
    return new WP_Error( 'forbidden', 'Kielletty', array( 'status' => 403 ) );
  }

  // Rate limit
  if ( ! dude_xmas_check_rate_limit( 'like' ) ) {
    return new WP_Error( 'rate_limit', 'Liikaa pyyntöjä, odota hetki', array( 'status' => 429 ) );
  }

  $params = $request->get_json_params();
  $message_id = isset( $params['id'] ) ? sanitize_text_field( $params['id'] ) : '';

  if ( empty( $message_id ) || ! preg_match( '/^[a-f0-9]+$/', $message_id ) ) {
    return new WP_Error( 'invalid_id', 'Virheellinen viestin ID', array( 'status' => 400 ) );
  }

  // Check message exists
  $messages = get_option( 'dude_xmas_messages_2025', array() );
  $found = false;
  foreach ( $messages as $msg ) {
    if ( $msg['id'] === $message_id ) {
      $found = true;
      break;
    }
  }

  if ( ! $found ) {
    return new WP_Error( 'not_found', 'Viestiä ei löytynyt', array( 'status' => 404 ) );
  }

  // No IP-based duplicate check - rely on client-side localStorage
  // This allows multiple people on the same network to like messages
  $likes = get_option( 'dude_xmas_likes_2025', array() );
  $likes[ $message_id ] = isset( $likes[ $message_id ] ) ? $likes[ $message_id ] + 1 : 1;
  update_option( 'dude_xmas_likes_2025', $likes );

  // Clear cache
  delete_transient( 'dude_xmas_messages_cache' );

  return rest_ensure_response( array(
    'id'    => $message_id,
    'likes' => $likes[ $message_id ],
  ) );
}

// Admin page for managing xmas messages
add_action( 'admin_menu', function() {
  add_menu_page(
    'Pikkujouluterveiset',
    'Pikkujoulut',
    'manage_options',
    'xmas-messages',
    'dude_xmas_admin_page',
    'dashicons-carrot',
    30
  );
} );

function dude_xmas_admin_page() {
  // Handle settings save
  if ( isset( $_POST['xmas_banner_save'] ) && isset( $_POST['_wpnonce'] ) ) {
    if ( wp_verify_nonce( $_POST['_wpnonce'], 'xmas_banner_settings' ) ) {
      update_option( 'dude_xmas_banner_enabled', isset( $_POST['xmas_banner_enabled'] ) ? 1 : 0 );
      update_option( 'dude_xmas_banner_enabled_xmas', isset( $_POST['xmas_banner_enabled_xmas'] ) ? 1 : 0 );
      update_option( 'dude_xmas_banner_message', sanitize_text_field( $_POST['xmas_banner_message'] ) );
      update_option( 'dude_xmas_banner_message_xmas', sanitize_text_field( $_POST['xmas_banner_message_xmas'] ) );
      update_option( 'dude_xmas_banner_end', sanitize_text_field( $_POST['xmas_banner_end'] ) );
      echo '<div class="notice notice-success"><p>Asetukset tallennettu!</p></div>';
    }
  }

  // Handle delete action
  if ( isset( $_GET['delete'] ) && isset( $_GET['_wpnonce'] ) ) {
    if ( wp_verify_nonce( $_GET['_wpnonce'], 'xmas_delete_' . $_GET['delete'] ) ) {
      $messages = get_option( 'dude_xmas_messages_2025', array() );
      $messages = array_filter( $messages, function( $msg ) {
        return $msg['id'] !== $_GET['delete'];
      } );
      update_option( 'dude_xmas_messages_2025', array_values( $messages ) );
      delete_transient( 'dude_xmas_messages_cache' );
      echo '<div class="notice notice-success"><p>Viesti poistettu!</p></div>';
    }
  }

  $banner_enabled = get_option( 'dude_xmas_banner_enabled', 0 );
  $banner_enabled_xmas = get_option( 'dude_xmas_banner_enabled_xmas', 0 );
  $banner_message = get_option( 'dude_xmas_banner_message', 'Dude-pukin kuuma linja on auki! Voit jättää terveisesi jouluaattoon asti.' );
  $banner_message_xmas = get_option( 'dude_xmas_banner_message_xmas', 'Dude vietti pikkujouluja ja luki terveisiä' );
  $banner_end = get_option( 'dude_xmas_banner_end', '2025-12-25T00:00' );

  $messages = get_option( 'dude_xmas_messages_2025', array() );
  $likes = get_option( 'dude_xmas_likes_2025', array() );
  $messages = array_reverse( $messages );
  ?>
  <div class="wrap">
    <h1>Pikkujoulut 2025</h1>

    <h2>Sivuston banneri</h2>
    <form method="post">
      <?php wp_nonce_field( 'xmas_banner_settings' ); ?>
      <table class="form-table">
        <tr>
          <th>dude.fi</th>
          <td>
            <label>
              <input type="checkbox" name="xmas_banner_enabled" value="1" <?php checked( $banner_enabled, 1 ); ?>>
              Näytä banneri dude.fi-sivustolla
            </label>
            <br><br>
            <input type="text" name="xmas_banner_message" value="<?php echo esc_attr( $banner_message ); ?>" class="large-text">
            <p class="description">Koko banneria klikkaamalla pääsee osoitteeseen tontut.dude.fi.</p>
          </td>
        </tr>
        <tr>
          <th>tontut.dude.fi</th>
          <td>
            <label>
              <input type="checkbox" name="xmas_banner_enabled_xmas" value="1" <?php checked( $banner_enabled_xmas, 1 ); ?>>
              Näytä banneri tontut.dude.fi/xmas-sivulla
            </label>
            <br><br>
            <input type="text" name="xmas_banner_message_xmas" value="<?php echo esc_attr( $banner_message_xmas ); ?>" class="large-text">
          </td>
        </tr>
        <tr>
          <th>Piilota automaattisesti</th>
          <td>
            <input type="datetime-local" name="xmas_banner_end" value="<?php echo esc_attr( $banner_end ); ?>">
            <p class="description">Molemmat bannerit piilotetaan automaattisesti tämän ajankohdan jälkeen.</p>
          </td>
        </tr>
      </table>
      <p><button type="submit" name="xmas_banner_save" class="button button-primary">Tallenna asetukset</button></p>
    </form>

    <hr>

    <h2>Terveiset</h2>
    <p>Yhteensä <?php echo count( $messages ); ?> viestiä</p>

    <table class="wp-list-table widefat fixed striped">
      <thead>
        <tr>
          <th style="width:150px">Aika</th>
          <th style="width:150px">Nimi</th>
          <th>Viesti</th>
          <th style="width:60px">❤️</th>
          <th style="width:100px">Toiminnot</th>
        </tr>
      </thead>
      <tbody>
        <?php if ( empty( $messages ) ) : ?>
          <tr><td colspan="5">Ei viestejä.</td></tr>
        <?php else : ?>
          <?php foreach ( $messages as $msg ) : ?>
            <?php $like_count = isset( $likes[ $msg['id'] ] ) ? $likes[ $msg['id'] ] : 0; ?>
            <tr>
              <td><?php echo esc_html( date( 'd.m.Y H:i', strtotime( $msg['timestamp'] ) ) ); ?></td>
              <td><strong><?php echo esc_html( $msg['author'] ); ?></strong></td>
              <td><?php echo esc_html( $msg['message'] ); ?></td>
              <td><?php echo esc_html( $like_count ); ?></td>
              <td>
                <a href="<?php echo wp_nonce_url( admin_url( 'admin.php?page=xmas-messages&delete=' . $msg['id'] ), 'xmas_delete_' . $msg['id'] ); ?>"
                   onclick="return confirm('Poistetaanko viesti?');"
                   class="button button-small button-link-delete">Poista</a>
              </td>
            </tr>
          <?php endforeach; ?>
        <?php endif; ?>
      </tbody>
    </table>
  </div>
  <?php
}

// REST API endpoint for banner settings
add_action( 'rest_api_init', function() {
  register_rest_route( 'xmas/v1', '/banner', array(
    'methods'             => 'GET',
    'callback'            => 'dude_xmas_get_banner',
    'permission_callback' => '__return_true',
  ) );
} );

function dude_xmas_get_banner() {
  $enabled = get_option( 'dude_xmas_banner_enabled', 0 );
  $enabled_xmas = get_option( 'dude_xmas_banner_enabled_xmas', 0 );
  $message = get_option( 'dude_xmas_banner_message', 'Dude-pukin kuuma linja on auki! Voit jättää terveisesi jouluaattoon asti.' );
  $message_xmas = get_option( 'dude_xmas_banner_message_xmas', 'Dude vietti pikkujouluja ja luki terveisiä' );
  $end = get_option( 'dude_xmas_banner_end', '2025-12-25T00:00' );

  // Check if banner has expired
  $end_time = strtotime( $end );
  if ( $end_time && time() > $end_time ) {
    $enabled = 0;
    $enabled_xmas = 0;
  }

  return rest_ensure_response( array(
    'enabled'      => (bool) $enabled,
    'enabled_xmas' => (bool) $enabled_xmas,
    'message'      => $message,
    'message_xmas' => $message_xmas,
    'end'          => $end,
  ) );
}

// Frontend banner on dude.fi
add_action( 'wp_head', 'dude_xmas_banner_styles' );
function dude_xmas_banner_styles() {
  $enabled = get_option( 'dude_xmas_banner_enabled', 0 );
  $end = get_option( 'dude_xmas_banner_end', '2025-12-25T00:00' );
  $end_time = strtotime( $end );

  if ( ! $enabled || ( $end_time && time() > $end_time ) ) {
    return;
  }
  ?>
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  .xmas-banner {
    background: #1a1a2e;
    border-bottom: 2px solid #4a4a6a;
    overflow: hidden;
    position: relative;
    z-index: 9999;
  }
  .is-animating .xmas-banner,
  .is-leaving .xmas-banner {
    opacity: 1 !important;
    visibility: visible !important;
  }
  .xmas-banner a {
    display: flex;
    text-decoration: none;
    white-space: nowrap;
    width: fit-content;
    animation: xmasBannerScroll var(--banner-duration, 30s) linear infinite;
  }
  .xmas-banner:hover a {
    animation-play-state: paused;
  }
  .xmas-banner-text {
    color: #f8d878;
    font-size: 10px;
    padding: 6px 50px;
    font-family: 'Press Start 2P', monospace;
    flex-shrink: 0;
  }
  @keyframes xmasBannerScroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  </style>
  <script>
  document.addEventListener('DOMContentLoaded', function() {
    var banner = document.querySelector('.xmas-banner a');
    if (banner) {
      var textLen = banner.textContent.length;
      var duration = Math.max(15, Math.min(60, textLen * 0.15));
      banner.style.setProperty('--banner-duration', duration + 's');
    }
  });
  </script>
  <?php
}

add_action( 'wp_body_open', 'dude_xmas_banner_output' );
function dude_xmas_banner_output() {
  $enabled = get_option( 'dude_xmas_banner_enabled', 0 );
  $message = get_option( 'dude_xmas_banner_message', 'Dude-pukin kuuma linja on auki! Voit jättää terveisesi jouluaattoon asti.' );
  $end = get_option( 'dude_xmas_banner_end', '2025-12-25T00:00' );
  $end_time = strtotime( $end );

  if ( ! $enabled || ( $end_time && time() > $end_time ) ) {
    return;
  }
  ?>
  <div class="xmas-banner">
    <a href="https://tontut.dude.fi" target="_blank" rel="noopener">
      <div class="xmas-banner-inner">
        <?php for ( $i = 0; $i < 10; $i++ ) : ?>
          <span class="xmas-banner-text"><?php echo esc_html( $message ); ?></span>
        <?php endfor; ?>
      </div>
    </a>
  </div>
  <?php
}
