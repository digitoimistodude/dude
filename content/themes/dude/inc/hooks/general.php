<?php
/**
 * General hooks.
 *
 * @Author: Niku Hietanen
 * @Date: 2020-02-20 13:46:50
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-14 15:17:19
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

// Air helper disables
add_filter( 'air_helper_disable_views_tag', '__return_false' );
add_filter( 'air_helper_disable_views_category', '__return_false' );
add_filter( 'air_helper_disable_views_author', '__return_false' );

// Air cookie disables
// Allow Vimeo videos to autoplay
add_filter( 'air_cookie\embeds\vimeo\add_dnt', '__return_false' );

// Pre_get_posts for some archives to enable Simple Post Ordering
add_action( 'pre_get_posts', __NAMESPACE__ . '\pre_get_posts' );
function pre_get_posts( $query ) {
  if ( $query->is_main_query() && $query->is_post_type_archive( 'reference' ) ) {
		$query->set( 'posts_per_page', 100 );
		$query->set( 'orderby', 'menu_order' );
		$query->set( 'order', 'ASC' );
  }
}

function tsm_acf_profile_avatar( $avatar, $id_or_email, $size, $default, $alt ) {
  $user = '';

  // Get user by id or email
  if ( is_numeric( $id_or_email ) ) {
    $id   = (int) $id_or_email;
    $user = get_user_by( 'id', $id );
  } elseif ( is_object( $id_or_email ) ) {
    if ( ! empty( $id_or_email->user_id ) ) {
      $id   = (int) $id_or_email->user_id;
      $user = get_user_by( 'id', $id );
    }
  } else {
    $user = get_user_by( 'email', $id_or_email );
  }

  if ( ! $user ) {
    return $avatar;
  }

  // Get the user id
  $user_id = $user->ID;

  // Get the file id
  $image_id = get_user_meta( $user_id, 'tsm_local_avatar', true ); // This is your field name

  // Bail if we don't have a local avatar
  if ( ! $image_id ) {
    return $avatar;
  }

  // Get the file size
  $image_url = wp_get_attachment_image_src( $image_id, 'thumbnail' ); // Set image size by name

  // Get the file url
  $avatar_url = $image_url[0];

  // Get the img markup
  $avatar = '<img alt="' . $alt . '" src="' . $avatar_url . '" class="avatar avatar-' . $size . '" height="' . $size . '" width="' . $size . '"/>';

  // Return our new avatar
  return $avatar;
} // end tsm_acf_profile_avatar

function change_attachment_image_src_to_cfcdn( $image ) {
  $image[0] = build_image_cf_cdn_url( $image[0], [
    'width'   => $image[1],
    'height'  => $image[2],
    'quality' => THEME_SETTINGS['cfcdn_defaults']['quality'],
  ] );

  return $image;
} // end change_attachment_image_src_to_cfcdn

function post_content_replace_image_urls_with_cfcdn( $content ) {
  if ( ! is_singular( 'post' ) ) {
    return $content;
  }

  $quality = THEME_SETTINGS['cfcdn_defaults']['quality'];

  // Match all urls on src and srcset
  preg_match_all( '/[^"\'=\s]+\.(jpe?g|png|gif)/', $content, $matches );
  if ( empty( $matches ) ) {
    return $content;
  }

  // keep log on which urls are already replaced to avoid doing that multiple times
  $handled = [];

  // handle matches and replace the image url
  foreach ( $matches[0] as $match ) {
    if ( array_key_exists( $match, $handled ) ) {
      continue;
    }

    $handled[ $match ] = true;

    $image_url = build_image_cf_cdn_url( $match, [
      'quality' => THEME_SETTINGS['cfcdn_defaults']['quality'],
    ] );

    $content = str_replace( $match, $image_url, $content );
  }

  return $content;
} // end post_content_replace_image_urls_with_cfcdn

function two_factor_force_email_provider_for_user( $enabled_providers ) {
  if ( ! in_array( 'Two_Factor_Email', $enabled_providers ) ) {
    $enabled_providers[] = 'Two_Factor_Email';
  }

  return $enabled_providers;
} // end two_factor_force_email_provider_for_user

// Disable WordPress scaling down (-scaled) images
add_filter( 'big_image_size_threshold', '__return_false' );
