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

$use_full_width = get_field( 'use_full_width' );

if ( ! isset( $args ) ) {
  $image_id = get_field( 'image_id' );
} else {
  $image_id = $args['image_id'];
}

$picture_cdn_args = [
  'width'     => '1800',
  'height'    => '1112',
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
    'width'     => '1800',
    'height'    => '1112',
  ],
];

?>

<section class="block block-image has-unified-padding-if-stacked has-transition-fade<?php if ( $use_full_width ) echo ' is-full-width'; ?>">
  <?php
    if ( ! $use_full_width ) echo '<div class="container">';
    get_picture_element_with_cfcdn( $image_id, $picture_cdn_args, $picture_cdn_srcset );
    if ( ! $use_full_width ) echo '</div>';
  ?>
</section>
