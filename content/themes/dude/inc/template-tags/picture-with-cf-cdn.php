<?php
/**
 * File: picture-with-cfcd.php
 *
 * Description: picture-with-cfcd
 *
 * @Author:        Elias Kautto
 * @Date:           2022-10-13 15:43:28
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-10-14 15:57:36
 *
 * @package dude
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */

namespace Air_Light;

function get_picture_element_with_cfcdn( $image_id, $img_params, $sources ) {
  if ( ! isset( $sources ) || empty( $sources ) ) {
    return;
  }

  if ( empty( $image_id ) ) {
    return;
  }

  // remove filter to avoid getting cdn url already in this stage
  remove_filter( 'wp_get_attachment_image_src', __NAMESPACE__ . '\change_attachment_image_src_to_cfcdn' );

  $image_data = wp_get_attachment_image_src( $image_id, 'full' );
  $image_url = $image_data[0];

  add_filter( 'wp_get_attachment_image_src', __NAMESPACE__ . '\change_attachment_image_src_to_cfcdn' );

  $img_params = wp_parse_args( $img_params, [
    'width'   => $image_data[1],
    'height'  => $image_data[2],
    'quality' => THEME_SETTINGS['cfcdn_defaults']['quality'],
    'fit'     => THEME_SETTINGS['cfcdn_defaults']['fit'],
    'classes' => [],
  ] );

  if ( ! empty( $img_params['classes'] ) ) {
    $img_params['classes'] = 'class="' . implode( ' ', $img_params['classes'] ) . '" ';
  } else {
    $img_params['classes'] = '';
  }

  $alt = get_post_meta( $image_id, '_wp_attachment_image_alt', true );

  ksort( $sources );

  echo '<picture>';
  foreach ( $sources as $key => $source ) {
    if ( ! isset( $source['width'] ) || ! isset( $source['height'] ) ) {
      continue;
    }

    $media = "(min-width: {$key}px)";
    next( $sources );
    $next_key = key( $sources );
    if ( null !== $next_key ) {
      $max_width = absint( $next_key ) - 1;
      $media .= " and (max-width: {$max_width}px)";
    }

    $image_cdn_url = build_image_cf_cdn_url( $image_url, [
      'width'   => $source['width'],
      'height'  => $source['height'],
      'quality' => $img_params['quality'],
      'fit'     => $img_params['fit'],
    ] );

    echo '<source media="' . $media .'" srcset="' .$image_cdn_url . '">'; //phpcs:ignore
  }

  $image_cdn_url = build_image_cf_cdn_url( $image_url, $img_params );

  echo '<img ' . $img_params['classes'] . 'loading="lazy" src="' . $image_cdn_url . '" width="' . $img_params['width'] . '" height="' . $img_params['height'] . '" alt="' . $alt . '">'; //phpcs:ignore
  echo '</picture>';
} // get_picture_element_with_cfcd

function build_image_cf_cdn_url( $image_url, $args = [] ) {
  unset( $args['classes'] );

  if ( ! isset( $args['format'] ) ) {
    $args['format'] = 'auto';
  }

  $args_url = [];
  foreach ( $args as $key => $value ) {
    $args_url[] = "{$key}={$value}";
  }

  // CF CDN does not support loading from local (duh), get same image from production
  if ( 'production' !== wp_get_environment_type() ) {
    $image_url = str_replace( 'dude.test', 'dude.fi', $image_url );
  }

  return 'https://cdn.dude.fi/cdn-cgi/image/' . implode( ',', $args_url ) . "/{$image_url}";
} // end build_image_cf_cdn_url
