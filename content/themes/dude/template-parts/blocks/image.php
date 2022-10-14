<?php
/**
 * The template for image
 *
 * Single image block.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-14 12:38:45
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $image_id = get_field( 'image_id' );
} else {
  $image_id = $args['image_id'];
}

if ( empty( $image_id ) ) {
  maybe_show_error_block( 'Kuvaa ei ole asetettu' );
  return;
}

$picture_cdn_args = [
  'width'     => '1400',
  'height'    => '865',
];

$picture_cdn_srcset = [
  220 => [
    'width'     => '435',
    'height'    => '269',
  ],
  600 => [
    'width'     => '555',
    'height'    => '343',
  ],
  1000 => [
    'width'     => '1400',
    'height'    => '865',
  ],
];
?>

<section class="block block-image has-unified-padding-if-stacked">
  <div class="container has-transition-fade">
    <?php get_picture_element_with_cfcdn( $image_id, $picture_cdn_args, $picture_cdn_srcset ); ?>
  </div>
</section>
