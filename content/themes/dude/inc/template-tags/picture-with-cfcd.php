<?php
/**
 * File: picture-with-cfcd.php
 *
 * Description: picture-with-cfcd
 *
 * @Author:        Elias Kautto
 * @Date:           2022-10-13 15:43:28
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-14 10:33:05
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

  $image_data = wp_get_attachment_image_src( $image_id, 'full' );
  $image_url = $image_data[0];
  if ( false === $image_url ) {
    return;
  }

  $img_params = wp_parse_args( $img_params, [
    'width'   => $image_data[1],
    'height'  => $image_data[2],
    'quality' => '75',
    'fit'      => 'cover',
  ] );

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
