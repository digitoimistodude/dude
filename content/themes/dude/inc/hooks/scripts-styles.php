<?php
/**
 * Enqueue and localize theme scripts and styles
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-20 13:46:50
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-04 10:50:33
 *
 * @package dude
 */

namespace Air_Light;

// TODO: Test
/**
 * Move jQuery to footer
 */
function move_jquery_into_footer( $wp_scripts ) {
  if ( ! is_admin() ) {
    $wp_scripts->add_data( 'jquery',         'group', 1 );
    $wp_scripts->add_data( 'jquery-core',    'group', 1 );
    $wp_scripts->add_data( 'jquery-migrate', 'group', 1 );
  }
} // end dude_move_jquery_into_footer

/**
 * Enqueue scripts and styles.
 */
function enqueue_theme_scripts() {

  // Enqueue global.css
  wp_enqueue_style( 'styles',
    get_theme_file_uri( get_asset_file( 'global.css' ) ),
    [],
    filemtime( get_theme_file_path( get_asset_file( 'global.css' ) ) )
  );

  // Enqueue jquery and front-end.js
  wp_enqueue_script( 'jquery-core' );
  wp_enqueue_script( 'scripts',
    get_theme_file_uri( get_asset_file( 'front-end.js' ) ),
    [],
    filemtime( get_theme_file_path( get_asset_file( 'front-end.js' ) ) ),
    true
  );

  // Required comment-reply script
  if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
    wp_enqueue_script( 'comment-reply' );
  }

  wp_localize_script( 'scripts', 'dude_screenReaderText', [
    'expand'          => get_default_localization( 'Open child menu' ),
    'collapse'        => get_default_localization( 'Close child menu' ),
    'expand_for'      => get_default_localization( 'Open child menu for' ),
    'collapse_for'    => get_default_localization( 'Close child menu for' ),
    'expand_toggle'   => get_default_localization( 'Open main menu' ),
    'collapse_toggle' => get_default_localization( 'Close main menu' ),
    'external_link'   => get_default_localization( 'External site' ),
    'target_blank'    => get_default_localization( 'opens in a new window' ),
    'previous_slide'  => get_default_localization( 'Previous slide' ),
    'next_slide'      => get_default_localization( 'Next slide' ),
    'last_slide'      => get_default_localization( 'Last slide' ),
    'skip_slider'     => get_default_localization( 'Skip over the carousel element' ),
    'homeurl'         => esc_url( get_home_url() ),
  ] );

  // Survey template styles
  if ( 'template-surveys.php' === basename( get_page_template() ) ) {
    wp_enqueue_style( 'styles-surveys',
      get_theme_file_uri( get_asset_file( 'surveys.css' ) ),
      [],
      filemtime( get_theme_file_path( get_asset_file( 'surveys.css' ) ) )
    );
  }

  // Add domains/hosts to disable external link indicators
  wp_localize_script( 'scripts', 'dude_externalLinkDomains', THEME_SETTINGS['external_link_domains_exclude'] );
} // end enqueue_theme_scripts

/**
 * Load polyfills for legacy browsers
 */
function enqueue_polyfills() {
  // Include polyfills
  $script = '
  var supportsES6 = (function () {
  try {
    new Function("(a = 0) => a");
    return true;
  } catch (err) {
    return false;
  }
  }());
  var legacyScript ="' . esc_url( get_theme_file_uri( get_asset_file( 'legacy.js' ) ) ) . '";
  if (!supportsES6) {
    var script = document.createElement("script");
    script.src = legacyScript;
    document.head.appendChild(script);
  }';

  if ( file_exists( get_theme_file_path( get_asset_file( 'legacy.js' ) ) ) ) {
    wp_register_script( 'dude_legacy', '', [], filemtime( get_theme_file_path( get_asset_file( 'legacy.js' ) ) ), false );
    wp_enqueue_script( 'dude_legacy' );
    wp_add_inline_script( 'dude_legacy', $script, true );
  }
} // end enqueue_polyfills

/**
 * Returns the built asset filename and path depending on
 * current environment.
 *
 * @param string $filename File name with the extension
 * @return string file and path of the asset file
 */
function get_asset_file( $filename ) {
  $env = 'development' === wp_get_environment_type() && ! isset( $_GET['load_production_builds'] ) ? 'dev' : 'prod'; // phpcs:ignore WordPress.Security.NonceVerification.Recommended

  $filetype = pathinfo( $filename )['extension'];

  return "${filetype}/${env}/${filename}";
} // end get_asset_file

/**
 * Add data attributes for scripts for Swup.js to work with
 * them properly
 */
function add_data_attribute_to_scripts( $tag, $handle ) {
  // Add attributes to evertything except these scripts
  $allowed_handles = [
    null,
    'scripts',
    'koko-analytics',
  ];

  if ( ! in_array( $handle, $allowed_handles ) ) { // phpcs:ignore
    return str_replace( '<script', '<script data-swup-reload-script data-swup-ignore-script', $tag );
  }

  return $tag;
} // end add_data_attribute_to_scripts
