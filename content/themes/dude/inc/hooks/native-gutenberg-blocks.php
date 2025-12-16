<?php
/**
 * Native Gutenberg blocks hooks.
 *
 * @package dude
 */

namespace Air_Light;

/**
 * Register native Gutenberg block category
 */
function register_block_categories( $categories ) {
  return array_merge(
    $categories,
    [
      [
        'slug'  => 'dude',
        'title' => __( 'Duden lohkot', 'dude' ),
      ],
    ]
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
