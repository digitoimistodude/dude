<?php
/**
 * Lead popup reactions REST API endpoint
 *
 * @package dude
 */

namespace Air_Light;

/**
 * Get client IP address
 */
function get_client_ip() {
  $ip = '';
  if ( ! empty( $_SERVER['HTTP_CLIENT_IP'] ) ) {
    $ip = sanitize_text_field( wp_unslash( $_SERVER['HTTP_CLIENT_IP'] ) );
  } elseif ( ! empty( $_SERVER['HTTP_X_FORWARDED_FOR'] ) ) {
    $ip = sanitize_text_field( wp_unslash( $_SERVER['HTTP_X_FORWARDED_FOR'] ) );
  } elseif ( ! empty( $_SERVER['REMOTE_ADDR'] ) ) {
    $ip = sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) );
  }

  return $ip;
}

/**
 * Check if IP is blocked due to abuse
 */
function is_ip_blocked() {
  $ip = get_client_ip();
  $ip_hash = md5( $ip . SECURE_AUTH_KEY );
  $block_key = 'popup_reaction_blocked_' . $ip_hash;

  return false !== get_transient( $block_key );
}

/**
 * Block an IP address for 15 minutes
 */
function block_ip() {
  $ip = get_client_ip();
  $ip_hash = md5( $ip . SECURE_AUTH_KEY );
  $block_key = 'popup_reaction_blocked_' . $ip_hash;

  set_transient( $block_key, true, 15 * MINUTE_IN_SECONDS );
}

/**
 * Check rate limit (max 5 reactions per minute per IP)
 */
function check_rate_limit() {
  $ip = get_client_ip();
  $ip_hash = md5( $ip . SECURE_AUTH_KEY );
  $rate_key = 'popup_reaction_rate_' . $ip_hash;

  $attempts = get_transient( $rate_key );

  if ( false === $attempts ) {
    $attempts = 1;
  } else {
    $attempts++;
  }

  // Max 5 reactions per minute
  if ( $attempts > 5 ) {
    // If excessive attempts (>20), block the IP
    if ( $attempts > 20 ) {
      block_ip();
    }

    return false;
  }

  set_transient( $rate_key, $attempts, MINUTE_IN_SECONDS );
  return true;
}

/**
 * Register REST API endpoint for lead popup reactions
 */
add_action( 'rest_api_init', function () {
  // Get reactions endpoint
  register_rest_route( 'dude/v1', '/popup-reactions', [
    'methods'             => 'GET',
    'callback'            => __NAMESPACE__ . '\\get_popup_reactions',
    'permission_callback' => '__return_true',
  ] );

  // Add/remove reaction endpoint
  register_rest_route( 'dude/v1', '/popup-reactions', [
    'methods'             => 'POST',
    'callback'            => __NAMESPACE__ . '\\modify_popup_reaction',
    'permission_callback' => '__return_true',
    'args'                => [
      'reaction' => [
        'required'          => true,
        'validate_callback' => function( $param ) {
          return in_array( $param, [ 'thumbs_up', 'thumbs_down', 'laugh', 'heart', 'lots_of_laughs', 'fire' ], true );
        },
      ],
      'action' => [
        'required'          => true,
        'validate_callback' => function( $param ) {
          return in_array( $param, [ 'add', 'remove' ], true );
        },
      ],
    ],
  ] );
} );

/**
 * Get current reaction counts
 */
function get_popup_reactions() {
  $defaults = [
    'thumbs_up'      => 0,
    'thumbs_down'    => 0,
    'laugh'          => 0,
    'heart'          => 0,
    'lots_of_laughs' => 0,
    'fire'           => 0,
  ];

  $stored = get_option( 'dude_popup_reactions', [] );
  $reactions = array_merge( $defaults, $stored );

  return rest_ensure_response( $reactions );
}

/**
 * Add or remove a reaction
 */
function modify_popup_reaction( $request ) {
  // Check if IP is blocked
  if ( is_ip_blocked() ) {
    return new \WP_Error(
      'ip_blocked',
      'Your IP has been temporarily blocked due to excessive requests.',
      [ 'status' => 403 ]
    );
  }

  // Check rate limit
  if ( ! check_rate_limit() ) {
    return new \WP_Error(
      'rate_limit_exceeded',
      'Too many requests. Please try again later.',
      [ 'status' => 429 ]
    );
  }

  $reaction = $request->get_param( 'reaction' );
  $action = $request->get_param( 'action' );

  // Get current counts with defaults
  $defaults = [
    'thumbs_up'      => 0,
    'thumbs_down'    => 0,
    'laugh'          => 0,
    'heart'          => 0,
    'lots_of_laughs' => 0,
    'fire'           => 0,
  ];

  $stored = get_option( 'dude_popup_reactions', [] );
  $reactions = array_merge( $defaults, $stored );

  // Modify the reaction count
  if ( isset( $reactions[ $reaction ] ) ) {
    if ( 'add' === $action ) {
      $reactions[ $reaction ]++;
    } elseif ( 'remove' === $action && $reactions[ $reaction ] > 0 ) {
      $reactions[ $reaction ]--;
    }
    update_option( 'dude_popup_reactions', $reactions );
  }

  return rest_ensure_response( [
    'success'   => true,
    'reactions' => $reactions,
  ] );
}
