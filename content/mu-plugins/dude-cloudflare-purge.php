<?php
/**
 * Plugin Name: Dude Cloudflare Purge
 * Description: Purge Cloudflare edge cache on content updates and on demand. Configure via CLOUDFLARE_ZONE_ID and CLOUDFLARE_API_TOKEN env vars (defined in config/application.php).
 * Version: 1.0.0
 * Author: Dude
 */

namespace Dude\CloudflarePurge;

if ( ! defined( 'ABSPATH' ) ) {
  exit;
}

/**
 * Purge Cloudflare cache. Empty array = purge everything; otherwise purge listed URLs.
 *
 * @param string[] $urls Absolute URLs to purge, or empty array for purge-all.
 * @return bool True on API success.
 */
function purge( array $urls = [] ): bool {
  if ( ! defined( 'CLOUDFLARE_ZONE_ID' ) || ! defined( 'CLOUDFLARE_API_TOKEN' ) ) {
    return false;
  }
  $zone  = (string) CLOUDFLARE_ZONE_ID;
  $token = (string) CLOUDFLARE_API_TOKEN;
  if ( '' === $zone || '' === $token ) {
    return false;
  }

  $body = empty( $urls )
    ? [ 'purge_everything' => true ]
    : [ 'files' => array_values( $urls ) ];

  $response = wp_remote_post(
    "https://api.cloudflare.com/client/v4/zones/{$zone}/purge_cache",
    [
      'headers' => [
        'Authorization' => "Bearer {$token}",
        'Content-Type'  => 'application/json',
      ],
      'body'    => wp_json_encode( $body ),
      'timeout' => 8,
    ]
  );

  if ( is_wp_error( $response ) ) {
    error_log( '[dude-cf-purge] HTTP error: ' . $response->get_error_message() );
    return false;
  }

  $code = wp_remote_retrieve_response_code( $response );
  $data = json_decode( wp_remote_retrieve_body( $response ), true );
  if ( 200 !== $code || empty( $data['success'] ) ) {
    error_log( '[dude-cf-purge] CF API ' . $code . ': ' . wp_remote_retrieve_body( $response ) );
    return false;
  }

  return true;
}

/**
 * Throttled wrapper so a single request firing multiple hooks only purges once.
 */
function purge_throttled( array $urls = [] ): bool {
  $key = 'dude_cf_purge_lock_' . md5( serialize( $urls ) );
  if ( get_transient( $key ) ) {
    return false;
  }
  set_transient( $key, 1, 5 );
  return purge( $urls );
}

// Purge edge cache when a post is published or updated (skip revisions/autosaves/drafts).
add_action( 'save_post', function ( $post_id, $post ) {
  if ( wp_is_post_revision( $post_id ) || wp_is_post_autosave( $post_id ) ) {
    return;
  }
  if ( 'publish' !== $post->post_status ) {
    return;
  }
  purge_throttled();
}, 100, 2 );

// Also purge edge when nginx-helper triggers a full origin purge.
add_action( 'rt_nginx_helper_after_fastcgi_purge_all', function () {
  purge_throttled();
} );

// WP-CLI: `wp cf purge` (all) | `wp cf purge https://www.dude.fi/foo` (specific URL(s))
if ( defined( 'WP_CLI' ) && WP_CLI ) {
  \WP_CLI::add_command( 'cf purge', function ( $args ) {
    $urls = $args ?: [];
    $ok   = purge( $urls );
    if ( $ok ) {
      \WP_CLI::success( $urls ? 'Purged ' . count( $urls ) . ' URL(s)' : 'Purged everything' );
    } else {
      \WP_CLI::error( 'Purge failed (check CLOUDFLARE_ZONE_ID/TOKEN env vars and error log)' );
    }
  } );
}
