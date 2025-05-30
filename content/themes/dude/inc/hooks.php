<?php
/**
 * @Author:		Elias Kautto
 * @Date:   		2022-05-31 10:31:39
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2024-02-16 11:42:36
 *
 * @package dude
 */

namespace Air_Light;

remove_action( 'wp_body_open', 'wp_global_styles_render_svg_filters' );

// Air helper custom settings
add_filter( 'air_helper_custom_settings_post_ids', __NAMESPACE__ . '\custom_settings_post_ids' );

// Disable instant.page script
add_action( 'init', function() {
  remove_action( 'wp_enqueue_scripts', 'air_helper_enqueue_instantpage_script' );
}, 999 );

// WPForms related hooks
require get_theme_file_path( 'inc/hooks/wpforms.php' );

// Analytics and external scripts
require get_theme_file_path( 'inc/hooks/analytics.php' );
add_action( 'wp_head', __NAMESPACE__ . '\head_analytics_scripts' );
add_action( 'wp_footer', __NAMESPACE__ . '\footer_analytics_scripts' );
add_action( 'air_cookie_js_analytics', __NAMESPACE__ . '\air_cookie_js_analytics' );

// General hooks
require get_theme_file_path( 'inc/hooks/general.php' );
add_action( 'widgets_init', __NAMESPACE__ . '\widgets_init' );
add_action( 'pre_get_posts', __NAMESPACE__ . '\reference_archive_query' );
add_action( 'save_post_job', __NAMESPACE__ . '\clear_open_jobs_count_cache', 10, 2 );
add_filter( 'get_avatar', __NAMESPACE__ . '\tsm_acf_profile_avatar', 10, 5 );
add_filter( 'wp_get_attachment_image_src', __NAMESPACE__ . '\change_attachment_image_src_to_cfcdn' );
// add_filter( 'the_content', __NAMESPACE__ . '\post_content_replace_image_urls_with_cfcdn' );
add_filter( 'two_factor_enabled_providers_for_user',  __NAMESPACE__ . '\two_factor_force_email_provider_for_user', 1 );

// Scripts and styles associated hooks
require get_theme_file_path( 'inc/hooks/scripts-styles.php' );
require get_theme_file_path( 'inc/hooks/autoptimize.php' );
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_theme_scripts' );
add_filter( 'script_loader_tag',  __NAMESPACE__ . '\add_data_attribute_to_scripts', 10, 2 );
add_filter( 'air_cookie_inline_js', __NAMESPACE__ . '\swupify_air_cookie_inline_script' );
// add_filter( 'autoptimize_filter_css_replacetag', __NAMESPACE__ . '\autoptimize_tweaks', 10, 1 );

// NB! If you use ajax functionality in Gravity Forms, remove this line
// to prevent Uncaught ReferenceError: jQuery is not defined
// add_action( 'wp_default_scripts', __NAMESPACE__ . '\move_jquery_into_footer' );

// Gutenberg associated hooks
require get_theme_file_path( 'inc/hooks/gutenberg.php' );
add_filter( 'allowed_block_types_all', __NAMESPACE__ . '\allowed_block_types', 10, 2 );
add_filter( 'use_block_editor_for_post_type', __NAMESPACE__ . '\use_block_editor_for_post_type', 10, 2 );
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\register_block_editor_assets' );
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\block_editor_title_input_styles' );
add_filter( 'block_editor_settings_all', __NAMESPACE__ . '\remove_gutenberg_inline_styles', 10, 2 );

// ACF blocks
require get_theme_file_path( 'inc/hooks/acf-blocks.php' );
add_filter( 'block_categories_all', __NAMESPACE__ . '\acf_blocks_add_category_in_gutenberg', 10, 2 );
add_action( 'acf/init', __NAMESPACE__ . '\acf_blocks_init' );

// Yoast
require get_theme_file_path( 'inc/hooks/yoast.php' );
add_filter( 'pre_get_document_title', __NAMESPACE__ . '\yoast_author_archive_title', 99 );

if ( is_admin() ) {
  // Dynamic svg icon select
  require get_theme_file_path( 'inc/hooks/acf-dynamic-icon-select.php' );
  add_filter( 'acf/load_field/type=select', __NAMESPACE__ . '\acf_dynamic_select_for_icon' );
  add_action( 'acf/input/admin_head', __NAMESPACE__ . '\improved_acf_svg_selector_ui_styles' );

  // ACF block color select
  require get_theme_file_path( 'inc/hooks/acf-block-color-select.php' );
  add_filter( 'acf/load_field/name=block_color', __NAMESPACE__ . '\set_block_color_values' );

  // ACF WPForms field
  require get_theme_file_path( 'inc/hooks/acf-wpforms-field.php' );
  add_filter( 'acf/load_field/name=wpforms_id', __NAMESPACE__ . '\set_wpforms_forms_to_field' );

  add_action( 'admin_menu', function() {
    $setting_groups = THEME_SETTINGS['custom_settings'];

    if ( ! array_key_exists( 'diamond-articles', $setting_groups ) ) {
      return;
    }

    $diamond_articles_settings = $setting_groups['diamond-articles'];

    add_submenu_page(
      'edit.php',
      $diamond_articles_settings['title'],
      $diamond_articles_settings['title'],
      'publish_posts',
      "post.php?post={$diamond_articles_settings['id']}&action=edit"
    );
  } );
} // end is_admin

add_action( 'rest_api_init', __NAMESPACE__ . '\salesperson_rest_api' );
function salesperson_rest_api() {

  // Do not display if ACF not active
  if ( ! function_exists( 'get_field' ) ) {
    return;
  }

  // Define setting groups
  $setting_groups = THEME_SETTINGS['custom_settings'];

  // Do not display if setting group not found
  if ( ! array_key_exists( 'dashboard_widget', $setting_groups ) ) {
    return;
  }

  // Get setting group ID
  $setting_group_id = $setting_groups['dashboard_widget']['id'];

  // Get fields from dashboard_widget custom_settings fields
  $dashboard_widget_title = get_field( 'dashboard_widget_title', $setting_group_id );
  $dashboard_widget_content = get_field( 'dashboard_widget_content', $setting_group_id );
  $dashboard_widget_content_thirdparty = get_field( 'dashboard_widget_content_thirdparty', $setting_group_id );

  // Add everything to array
  $dashboard_widget = [
    'title'   => $dashboard_widget_title,
    'content' => $dashboard_widget_content,
    'content_thirdparty' => $dashboard_widget_content_thirdparty,
  ];

  register_rest_route( 'dude/v1', '/salesperson', [
    'methods'   => 'GET',
    'callback'  => function( $data ) use ( $dashboard_widget ) { // phpcs:disable
      return $dashboard_widget;
    },
  ] );
} // end salesperson_rest_api

// 10v party invitations
// require get_theme_file_path( 'inc/hooks/10-calendar-invite.php' );
