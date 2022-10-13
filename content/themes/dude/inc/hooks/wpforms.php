<?php
/**
 * Air-cookie
 *
 * Cookie consent hooks.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-10-11 17:44:19
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-13 13:01:56
 *
 * @package dude
 */

// Hack to get WPForms to function with swup.js
$wforms = \WPForms\WPForms::instance()->frontend;
add_filter( 'wpforms_global_assets', '__return_true' );
// remove_action( 'wp_footer', [ $wforms, 'assets_footer' ], 15 );
remove_action( 'wp_footer', [ $wforms, 'recaptcha_noconflict' ], 19 );
remove_action( 'wp_footer', [ $wforms, 'missing_assets_error_js' ], 20 );
// remove_action( 'wp_footer', [ $wforms, 'footer_end' ], 99 );
add_action( 'dude_site_main_after_content', [ $wforms, 'assets_footer' ], 15 );
// add_action( 'dude_site_main_after_content', [ $wforms, 'recaptcha_noconflict' ], 19 );
add_action( 'dude_site_main_after_content', [ $wforms, 'missing_assets_error_js' ], 20 );
// add_action( 'dude_site_main_after_content', [ $wforms, 'footer_end' ], 99 );

// Disable WPForms email suggestions like "Did you mean juha@dude.fr?"
add_filter( 'wpforms_mailcheck_enabled', '__return_false' );

// Remove useless stuff on front end like this:
// "entry_preview_iframe_styles":["https:\/\/www.dude.fi\/wp\/wp-includes\/js\/tinymce\/skins\/lightgray\/content.min.css?ver=6.0.2","https:\/\/www.dude.fi\/wp\/wp-includes\/css\/dashicons.min.css?ver=6.0.2","https:\/\/www.dude.fi\/wp\/wp-includes\/js\/tinymce\/skins\/wordpress\/wp-content.css?ver=6.0.2"]}</script>
function wpf_dev_frontend_strings( $strings ) {
  if ( isset( $strings['entry_preview_iframe_styles'] ) ) {
   unset( $strings['entry_preview_iframe_styles'] );
  }

  return $strings;
}

add_filter( 'wpforms_frontend_strings', __NAMESPACE__ . '\wpf_dev_frontend_strings', 90, 1 );
