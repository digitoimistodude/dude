<?php
/**
 * Gutenberg related settings
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-20 13:46:50
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-06 22:27:05
 *
 * @package dude
 */

namespace Air_Light;

/**
 * Restrict blocks to only allowed blocks in the settings
 */
function allowed_block_types( $allowed_blocks, $editor_context ) {
  if ( ! isset( THEME_SETTINGS['allowed_blocks'] ) || 'all' === THEME_SETTINGS['allowed_blocks'] ) {
    return $allowed_blocks;
  }

  // Add the default allowed blocks
  $allowed_blocks = isset( THEME_SETTINGS['allowed_blocks']['default'] ) ? THEME_SETTINGS['allowed_blocks']['default'] : [];

  // If there is post type specific blocks, add them to the allowed blocks list
  if ( isset( THEME_SETTINGS['allowed_blocks'][ $editor_context->post->post_type ] ) ) {
    $allowed_blocks = array_merge( $allowed_blocks, THEME_SETTINGS['allowed_blocks'][ $editor_context->post->post_type ] );
  }

  // Add custom blocks
  if ( isset( THEME_SETTINGS['acf_blocks'] ) ) {
    foreach ( THEME_SETTINGS['acf_blocks'] as $custom_block ) {
      $allowed_blocks[] = 'acf/' . $custom_block['name'];
    }
  }

  return $allowed_blocks;
} // end allowed_block_types

/**
 * Check whether to use classic or block editor for a certain post type as defined in the settings
 */
function use_block_editor_for_post_type( $use_block_editor, $post_type ) {
  if ( in_array( $post_type, THEME_SETTINGS['use_classic_editor'], true ) ) {
    return false;
  }

  return true;
} // end use_block_editor_for_post_type

/**
 * Enqueue block editor JavaScript
 */
function register_block_editor_assets() {

  // Dependencies
  $dependencies = [
    'wp-blocks',    // Provides useful functions and components for extending the editor
    'wp-i18n',      // Provides localization functions
    'wp-element',   // Provides React.Component
    'wp-components', // Provides many prebuilt components and controls
  ];

  // Enqueue the bundled block JS file
  wp_enqueue_script(
    'block-editor-js',
    get_theme_file_uri( get_asset_file( 'gutenberg-editor.js' ) ),
    $dependencies,
    filemtime( get_theme_file_path( get_asset_file( 'gutenberg-editor.js' ) ) ),
    'all'
  );
} // end register_block_editor_assets

// Remove Gutenberg inline "Normalization styles" like .editor-styles-wrapper h1
// color: inherit;
// @source https://github.com/WordPress/gutenberg/issues/18595#issuecomment-599588153
// @ref https://gist.github.com/gziolo/a947dc52eb2604c77a0a5b0797b2e781#block_editor_settings_all
function remove_gutenberg_inline_styles( $editor_settings, $editor_context ) {

  if ( ! empty( $editor_settings['defaultEditorStyles'] ) ) {
    unset( $editor_settings['defaultEditorStyles'][0]['css'] );
    unset( $editor_settings['styles'][0]['css'] );
    unset( $editor_settings['styles'][1]['css'] );
  }

  return $editor_settings;
} // end remove_gutenberg_inline_styles

/**
 * Register post meta for pricing gradient background (available on all post types)
 */
function register_pricing_gradient_meta() {
  register_post_meta( '', '_show_pricing_gradient', [
    'show_in_rest'  => true,
    'single'        => true,
    'type'          => 'boolean',
    'default'       => false,
    'auth_callback' => function() {
      return current_user_can( 'edit_posts' );
    },
  ] );

  register_post_meta( '', '_force_dark_mode', [
    'show_in_rest'  => true,
    'single'        => true,
    'type'          => 'boolean',
    'default'       => false,
    'auth_callback' => function() {
      return current_user_can( 'edit_posts' );
    },
  ] );
}
add_action( 'init', __NAMESPACE__ . '\register_pricing_gradient_meta' );

/**
 * Enqueue pricing gradient toggle script for block editor
 */
function enqueue_pricing_gradient_toggle() {
  wp_enqueue_script(
    'dude-pricing-gradient-toggle',
    get_theme_file_uri( '/assets/src/js/admin/gradient-toggle.js' ),
    [ 'wp-plugins', 'wp-editor', 'wp-element', 'wp-components', 'wp-data' ],
    filemtime( get_theme_file_path( '/assets/src/js/admin/gradient-toggle.js' ) ),
    true
  );
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_pricing_gradient_toggle' );

/**
 * Enqueue force dark mode toggle script for block editor
 */
function enqueue_force_dark_mode_toggle() {
  wp_enqueue_script(
    'dude-force-dark-mode-toggle',
    get_theme_file_uri( '/assets/src/js/admin/force-dark-mode-toggle.js' ),
    [ 'wp-plugins', 'wp-editor', 'wp-element', 'wp-components', 'wp-data' ],
    filemtime( get_theme_file_path( '/assets/src/js/admin/force-dark-mode-toggle.js' ) ),
    true
  );
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_force_dark_mode_toggle' );

/**
 * Register block pattern category for Dude patterns
 */
function register_block_pattern_categories() {
  register_block_pattern_category( 'dude', [
    'label' => __( 'Dude', 'flavor' ),
  ] );
}
add_action( 'init', __NAMESPACE__ . '\register_block_pattern_categories' );
