<?php
/**
 * Contact form statistics and tracking
 *
 * @package dude
 */

namespace Air_Light;

/**
 * Register REST API endpoints
 */
add_action( 'rest_api_init', function () {
  // Track button click
  register_rest_route( 'dude/v1', '/contact-form-click', [
    'methods'             => 'POST',
    'callback'            => __NAMESPACE__ . '\\track_contact_form_click',
    'permission_callback' => '__return_true',
  ] );

  // Get statistics
  register_rest_route( 'dude/v1', '/contact-form-stats', [
    'methods'             => 'GET',
    'callback'            => __NAMESPACE__ . '\\get_contact_form_stats',
    'permission_callback' => '__return_true',
  ] );
} );

/**
 * Track contact form button click
 */
function track_contact_form_click() {
  $clicks = get_option( 'dude_contact_form_clicks', 0 );
  $clicks++;
  update_option( 'dude_contact_form_clicks', $clicks );

  return rest_ensure_response( [
    'success' => true,
    'clicks'  => $clicks,
  ] );
}

/**
 * Get unique visitors from Plausible API
 */
function get_plausible_visitors() {
  $api_key = defined( 'PLAUSIBLE_API_KEY' ) ? PLAUSIBLE_API_KEY : '';
  $site_id = 'dude.fi';

  if ( empty( $api_key ) ) {
    return null;
  }

  // Cache for 1 hour
  $cache_key = 'plausible_unique_visitors';
  $cached = get_transient( $cache_key );
  if ( false !== $cached ) {
    return $cached;
  }

  $url = sprintf(
    'https://analytics.dude.fi/api/v1/stats/aggregate?site_id=%s&metrics=pageviews&period=custom&date=2025-11-19,%s&filters=%s',
    urlencode( $site_id ),
    gmdate( 'Y-m-d' ),
    urlencode( 'event:page==/' )
  );

  $response = wp_remote_get( $url, [
    'headers' => [
      'Authorization' => 'Bearer ' . $api_key,
    ],
    'timeout' => 10,
  ] );

  if ( is_wp_error( $response ) ) {
    error_log( 'Plausible API Error: ' . $response->get_error_message() );
    return null;
  }

  $status_code = wp_remote_retrieve_response_code( $response );
  $body = wp_remote_retrieve_body( $response );

  error_log( 'Plausible API Response Status: ' . $status_code );
  error_log( 'Plausible API Response Body: ' . $body );

  $data = json_decode( $body, true );

  if ( ! isset( $data['results']['pageviews']['value'] ) ) {
    error_log( 'Plausible API: Invalid response structure' );
    return null;
  }

  $visitors = intval( $data['results']['pageviews']['value'] );
  set_transient( $cache_key, $visitors, HOUR_IN_SECONDS );

  return $visitors;
}

/**
 * Get Pipedrive statistics
 */
function get_pipedrive_stats() {
  $api_token = defined( 'PIPEDRIVE_API_TOKEN' ) ? PIPEDRIVE_API_TOKEN : '';
  $form_id = '1C922tUo90oeWhck1VhXZFdy1KWojGVSTwWxvxu5eswakOcepyDnWl7MtQDYOBcBl';

  if ( empty( $api_token ) ) {
    return null;
  }

  // Cache for 1 hour
  $cache_key = 'pipedrive_form_stats';
  $cached = get_transient( $cache_key );
  if ( false !== $cached ) {
    return $cached;
  }

  // Get all leads/deals created (this is a simplified version)
  // You'll need to adjust the API endpoint based on how Pipedrive tracks your form submissions
  $url = sprintf(
    'https://api.pipedrive.com/v1/deals?api_token=%s&status=all_not_deleted',
    $api_token
  );

  $response = wp_remote_get( $url, [
    'timeout' => 10,
  ] );

  if ( is_wp_error( $response ) ) {
    return null;
  }

  $body = wp_remote_retrieve_body( $response );
  $data = json_decode( $body, true );

  if ( ! isset( $data['data'] ) || ! is_array( $data['data'] ) ) {
    return null;
  }

  // Count total deals (this is simplified - you may need to filter by source/form)
  $stats = [
    'submissions' => count( $data['data'] ),
    'leads'       => count( $data['data'] ), // For now, assume 1:1 ratio
  ];

  set_transient( $cache_key, $stats, HOUR_IN_SECONDS );

  return $stats;
}

/**
 * Get contact form statistics
 */
function get_contact_form_stats() {
  $clicks = intval( get_option( 'dude_contact_form_clicks', 0 ) );
  $visitors = get_plausible_visitors();
  $pipedrive_stats = get_pipedrive_stats();

  // Log for debugging
  error_log( 'Contact Form Stats - Clicks: ' . $clicks );
  error_log( 'Contact Form Stats - Visitors: ' . ( $visitors ? $visitors : 'NULL' ) );
  error_log( 'Contact Form Stats - Pipedrive: ' . ( $pipedrive_stats ? wp_json_encode( $pipedrive_stats ) : 'NULL' ) );

  // Calculate click rate
  $click_rate = 0;
  if ( $visitors && $visitors > 0 ) {
    $click_rate = ( $clicks / $visitors ) * 100;
  }

  // Calculate conversion rate
  $conversion_rate = 0;
  if ( $pipedrive_stats && $pipedrive_stats['submissions'] > 0 ) {
    $conversion_rate = ( $pipedrive_stats['leads'] / $pipedrive_stats['submissions'] ) * 100;
  }

  return rest_ensure_response( [
    'clicks'     => $clicks,
    'visitors'   => $visitors,
    'click_rate' => number_format( $click_rate, 2 ),
    // Note: Pipedrive stats temporarily disabled - needs proper implementation
    // to differentiate between form submissions and qualified leads
    'debug'      => [
      'plausible_api_key_set' => defined( 'PLAUSIBLE_API_KEY' ) && ! empty( PLAUSIBLE_API_KEY ),
      'pipedrive_api_key_set' => defined( 'PIPEDRIVE_API_TOKEN' ) && ! empty( PIPEDRIVE_API_TOKEN ),
    ],
  ] );
}
