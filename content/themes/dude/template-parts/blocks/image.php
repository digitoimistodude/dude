<?php
/**
 * The template for image
 *
 * Single image block.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 11:52:37
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
?>

<section class="block block-image has-unified-padding-if-stacked">
  <div class="container has-transition-fade">

    <?php native_lazyload_tag( $image_id ) ?>

  </div>
</section>
