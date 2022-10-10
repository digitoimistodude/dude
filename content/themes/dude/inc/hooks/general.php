<?php
/**
 * General hooks.
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-20 13:46:50
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-09-26 11:04:44
 *
 * @package dude
 */

namespace Air_Light;

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function widgets_init() {
  register_sidebar( array(
    'name'          => esc_html__( 'Sidebar', 'dude' ),
    'id'            => 'sidebar-1',
    'description'   => esc_html__( 'Add widgets here.', 'dude' ),
    'before_widget' => '<section id="%1$s" class="widget %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h2 class="widget-title">',
    'after_title'   => '</h2>',
  ) );
} // end widgets_init

function reference_archive_query( $query ) {
  if ( is_admin() ) {
    return;
  }

  if ( ! $query->is_main_query() ) {
    return;
  }

  if ( ! $query->is_post_type_archive( 'reference' ) ) {
    return;
  }

  $query->set( 'post_status', 'publish' );
  $query->set( 'posts_per_page', 100 );
  $query->set( 'orderby', 'menu_order' );
  $query->set( 'order', 'ASC' );
} // end reference_archive_query

function clear_open_jobs_count_cache() {
  wp_cache_delete( 'open-jobs-count', 'theme' );
} // end clear_open_jobs_count_cache

/**
 * Show archives
 */
add_filter( 'air_helper_disable_views_tag', '__return_false' );
add_filter( 'air_helper_disable_views_category', '__return_false' );
add_filter( 'air_helper_disable_views_author', '__return_false' );

// Pre_get_posts for some archives to enable Simple Post Ordering
add_action( 'pre_get_posts', __NAMESPACE__ . '\pre_get_posts' );
function pre_get_posts( $query ) {
  if ( $query->is_main_query() && $query->is_post_type_archive( 'reference' ) ) {
		$query->set( 'posts_per_page', 100 );
		$query->set( 'orderby', 'menu_order' );
		$query->set( 'order', 'ASC' );
  }
}
