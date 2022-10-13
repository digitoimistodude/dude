<?php
/**
 * File: picture-with-cfcd.php
 *
 * Description: picture-with-cfcd
 *
 * @Author:        Elias Kautto
 * @Date:           2022-10-13 15:43:28
 * @Last Modified by:   Elias Kautto
 * @Last Modified time: 2022-10-13 15:51:45
 *
 * @package dude
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */

namespace Air_Light;

function get_picture_element_with_cfcd( $image_id, $img_params, $sources ) {
  if ( ! isset( $sources ) || empty( $sources ) ) {
    return;
  }

  if ( ! isset( $img_params ) || empty( $img_params ) ) {
    return;
  }

  if ( empty( $image_id ) ) {
    return;
  }

  $image_url = wp_get_attachment_image_url( $image_id, 'full' );
  if ( false === $image_url ) {
    return;
  }

  ksort( $sources );

  echo '<picture>';
  foreach ( $sources as $key => $source ) {
    if ( ! isset( $source['width'] ) || ! isset( $source['height'] ) ) {
      continue;
    }

    $media = "(min-width: {$key})";
    next( $sources );
    $next_key = key( $sources );
    if ( null !== $next_key ) {
      $max_width = absint( $next_key ) - 1;
      $media .= " and (max-width: {$max_width})";
    }

    echo "<source media='{$media}' srcet='https://cdn.dude.fi/cdn-cgi/image/width={$source['width']},height={$source['height']},quality={$img_params['quality']},fit={$img_params['fit']},format=auto/{$image_url}'>"; //phpcs:ignore
  }

  echo "<img loading='lazy' src='https://cdn.dude.fi/cdn-cgi/image/width={$img_params['width']},height={$img_params['height']},quality={$img_params['quality']},fit={$img_params['fit']},format=auto/{$image_url}' alt=''>"; //phpcs:ignore
  echo '</picture>';
} // get_picture_element_with_cfcd
