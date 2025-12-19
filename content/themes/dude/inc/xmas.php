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
} );

function dude_xmas_get_messages() {
  // Try to get cached response first (cache for 5 seconds to reduce DB load)
  $cached = get_transient( 'dude_xmas_messages_cache' );
  if ( $cached !== false ) {
    return rest_ensure_response( $cached );
  }

  $messages = get_option( 'dude_xmas_messages_2025', array() );
  $messages = array_slice( array_reverse( $messages ), 0, 50 );

  // Remove IP hashes from response
  $messages = array_map( function( $msg ) {
    unset( $msg['ip'] );
    return $msg;
  }, $messages );

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
