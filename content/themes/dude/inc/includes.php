<?php
/**
 * Include custom features etc.
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-18 15:07:17
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-05-24 15:53:13
 *
 * @package dude
 */

namespace Air_Light;

// Theme setup
require get_theme_file_path( '/inc/includes/theme-setup.php' );

// Localized strings
require get_theme_file_path( '/inc/includes/localization.php' );

// Nav Walker
require get_theme_file_path( '/inc/includes/nav-walker.php' );

// Post type and taxonomy base classes
// We check this with if, because this stuff will not go to WP theme directory
if ( file_exists( get_theme_file_path( '/inc/includes/taxonomy.php' ) ) ) {
  require get_theme_file_path( '/inc/includes/taxonomy.php' );
}

if ( file_exists( get_theme_file_path( '/inc/includes/post-type.php' ) ) ) {
  require get_theme_file_path( '/inc/includes/post-type.php' );
}

// Include ACF field type for Gravity Forms - loaded via acf/include_field_types hook inside the file
require get_theme_file_path( '/inc/includes/acf-field-gravity-forms.php' );

// Lead popup reactions REST API
require get_theme_file_path( '/inc/includes/lead-popup-reactions.php' );

// Contact form statistics and tracking
require get_theme_file_path( '/inc/includes/contact-form-stats.php' );

// Custom functions
require get_theme_file_path( 'inc/functions/vimeo.php' );
require get_theme_file_path( 'inc/functions/person.php' );
require get_theme_file_path( 'inc/functions/jobs.php' );

// Xmas Pikkujoulu 2025
require get_theme_file_path( 'inc/xmas.php' );
