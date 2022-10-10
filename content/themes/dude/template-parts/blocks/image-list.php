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

if ( empty( $items_raw ) ) {
  maybe_show_error_block( 'Listaelementtejä on pakko olla.' );
  return;
}

$items = [];
foreach ( $items_raw as $item ) {
  if ( empty( $item['content'] ) ) {
    continue;
  }

  $items[] = $item['content'];
}

if ( empty( $items ) ) {
  maybe_show_error_block( 'Listaelementtejä on pakko olla.' );
  return;
}
?>

<section class="block block-image-list">
  <div class="container">
    <div class="cols">
      <div class="col image image-background">
        <?php if ( ! empty( $image ) ) {
          native_lazyload_tag( $image );
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
