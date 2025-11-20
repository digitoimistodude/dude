<?php
/**
 * Cloudflare CDN support (image resizing)
 * Version: 2.0.0 (2024-04-18)
 *
 * @package dude
 */

namespace Air_Light;

function get_picture_element_with_cfcdn( $image_id, $img_params, $sources, $loading = 'lazy' ) {
  if ( ! isset( $sources ) || empty( $sources ) ) {
    return;
  }

  if ( empty( $image_id ) ) {
    return;
  }

  // Remove filter to avoid getting cdn url already in this stage
  remove_filter( 'wp_get_attachment_image_src', __NAMESPACE__ . '\change_attachment_image_src_to_cfcdn' );

  $image_data = wp_get_attachment_image_src( $image_id, 'full' );
  $image_url = $image_data[0];

  $crop_dimensions = get_post_meta( $image_id, '_wpsmartcrop_enabled', true ) ? get_post_meta( $image_id, '_wpsmartcrop_image_focus', true ) : [];
  if ( empty( $crop_dimensions ) ) {
    $styles['focal-position'] = 'auto';
    $image_object_position = false;
  } else {

    // Set dimensions for gravity setting and reverse array (top comes first in array)
    $parsed_dimensions = array_map(
      function ( $dimension ) {

        $dimension = round( $dimension, 0 );

        if ( 10 > $dimension ) {
          return '0.0' . $dimension;
        } else {
          return '0.' . $dimension;
        }
      },
      array_reverse( $crop_dimensions )
    );

    // Set dimensions for inline css object-position and reverse array (top comes first in array)
    $parsed_object_dimensions = array_map(
      function ( $dimension ) {
        return $dimension . '%';
      },
      array_reverse( $crop_dimensions )
    );

    $styles['focal-position'] = implode( 'x', $parsed_dimensions );
    $image_object_position = $cssstyles['object-position'] = implode( ' ', $parsed_object_dimensions );

  }

  add_filter( 'wp_get_attachment_image_src', __NAMESPACE__ . '\change_attachment_image_src_to_cfcdn' );

  $img_params = wp_parse_args( $img_params, [
    'width'   => $image_data[1],
    'height'  => $image_data[2],
    'quality' => THEME_SETTINGS['cfcdn_defaults']['quality'],
    'fit'     => THEME_SETTINGS['cfcdn_defaults']['fit'],
    'gravity' => $styles['focal-position'],
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
      'gravity' => $img_params['gravity'],
      'fit'     => $img_params['fit'],
    ] );

    $image_cdn_url_retina = build_image_cf_cdn_url( $image_url, [
      'width'   => $source['width'] * 2,
      'height'  => $source['height'] * 2,
      'quality' => $img_params['quality'],
      'gravity' => $img_params['gravity'],
      'fit'     => $img_params['fit'],
    ] );

    echo '<source media="' . $media .'" srcset="' .$image_cdn_url . ' 1x, ' .$image_cdn_url_retina . ' 2x">'; // phpcs:ignore
  }

  $image_cdn_url = build_image_cf_cdn_url( $image_url, $img_params );

  if ( ! empty( $image_object_position ) ) {
    echo '<img ' . $img_params['classes'] . 'loading="' . $loading . '" src="' . $image_cdn_url . '" width="' . $img_params['width'] . '" height="' . $img_params['height'] . '" alt="' . $alt . '" style="object-position: '. $image_object_position .'">'; //phpcs:ignore
  } else {
    echo '<img ' . $img_params['classes'] . 'loading="' . $loading . '" src="' . $image_cdn_url . '" width="' . $img_params['width'] . '" height="' . $img_params['height'] . '" alt="' . $alt . '">'; //phpcs:ignore
  }

  echo '</picture>';
}

if ( ! function_exists( '\Air_Light\build_image_cf_cdn_url' ) ) {
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

    // Use origin.dude.fi for fetching to avoid CF double-proxying, Ref: DEV-619
    $image_url = preg_replace( '#^https?://(www\.)?dude\.fi/#', 'https://origin.dude.fi/', $image_url );

    return 'https://cdn.dude.fi/cdn-cgi/image/' . implode( ',', $args_url ) . "/{$image_url}";
  } // End build_image_cf_cdn_url
}
