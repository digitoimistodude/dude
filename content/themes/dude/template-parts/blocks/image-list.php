<?php
/**
 * The template for image-list
 *
 * A block that has list and image.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 14:49:12
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $items_raw = get_field( 'items' );
  $image = get_field( 'image' );
} else {
  $items_raw = $args['items'];
  $image = $args( 'image' );
}

$items = [];
foreach ( $items_raw as $item ) {
  if ( empty( $item['content'] ) ) {
    continue;
  }

  $items[] = $item['content'];
}

$picture_cdn_args = [
  'width'     => '663',
  'height'    => '470',
];

$picture_cdn_srcset = [
  220 => [
    'width'     => '435',
    'height'    => '326',
  ],
  600 => [
    'width'     => '555',
    'height'    => '416',
  ],
  1620 => [
    'width'     => '663',
    'height'    => '470',
  ],
];
?>

<section class="block block-image-list">
  <div class="container">
    <div class="cols">
      <div class="col image image-background">
        <?php if ( ! empty( $image ) ) {
          get_picture_element_with_cfcdn( $image, $picture_cdn_args, $picture_cdn_srcset );
        } ?>
      </div>

      <ul class="col list">
        <?php foreach ( $items as $item ) : ?>
          <li><span><?php echo esc_html( $item ) ?></span></li>
        <?php endforeach; ?>
      </ul>
    </div>
  </div>
</section>
