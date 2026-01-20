<?php
/**
 * Native Gutenberg blocks hooks.
 *
 * @package dude
 */

namespace Air_Light;

/**
 * Register native Gutenberg block categories
 */
function register_block_categories( $categories ) {
  return array_merge(
    [
      [
        'slug'  => 'dude-native',
        'title' => __( 'Duden natiivilohkot', 'dude' ),
      ],
      [
        'slug'  => 'dude',
        'title' => __( 'Duden ACF-lohkot', 'dude' ),
      ],
    ],
    $categories
  );
}
add_filter( 'block_categories_all', __NAMESPACE__ . '\register_block_categories', 10, 1 );

/**
 * Register all native blocks from the blocks directory
 */
function register_native_gutenberg_blocks() {
  // Get all directories in the blocks folder
  $blocks_dir = get_theme_file_path( '/blocks' );

  if ( ! is_dir( $blocks_dir ) ) {
    return;
  }

  $block_folders = array_filter( glob( $blocks_dir . '/*' ), 'is_dir' );

  foreach ( $block_folders as $block_folder ) {
    // Check if block.json exists at block root
    if ( file_exists( $block_folder . '/block.json' ) ) {
      $registration_result = register_block_type( $block_folder );

      if ( is_wp_error( $registration_result ) ) {
        // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
        error_log( 'Block registration error for ' . basename( $block_folder ) . ': ' . $registration_result->get_error_message() );
      }
    }
  }
}
add_action( 'init', __NAMESPACE__ . '\register_native_gutenberg_blocks' );

// Note: Block editor assets are automatically enqueued via block.json's editorScript property
// when register_block_type() is called with the block folder path. No manual enqueue needed.

/**
 * Override block style versions with filemtime for proper cache busting
 */
function native_block_cache_busting( $ver, $handle ) {
  // Check if this is one of our native block styles
  $block_handles = [
    'dude-pricing-hero-style',
    'dude-pricing-category-style',
    'dude-pricing-item-style',
    'dude-pricing-cta-style',
    'dude-pricing-faq-style',
  ];

  if ( in_array( $handle, $block_handles, true ) ) {
    // Extract block name from handle (e.g., 'dude-pricing-hero-style' -> 'pricing-hero')
    $block_name = str_replace( [ 'dude-', '-style' ], '', $handle );
    $style_file = get_theme_file_path( '/blocks/' . $block_name . '/build/style-index.css' );

    if ( file_exists( $style_file ) ) {
      return filemtime( $style_file );
    }
  }

  return $ver;
}
add_filter( 'style_loader_ver', __NAMESPACE__ . '\native_block_cache_busting', 10, 2 );
