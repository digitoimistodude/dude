<?php
/**
 * The template for list
 *
 * List block.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 11:54:48
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $items_raw = get_field( 'items' );
} else {
  $items_raw = $args['items'];
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

<section class="block block-list has-unified-padding-if-stacked">
  <div class="container">

  <ul>
    <?php foreach ( $items as $item ) : ?>
      <li><span><?php echo esc_html( $item ) ?></span></li>
    <?php endforeach; ?>
  </ul>

  </div>
</section>
