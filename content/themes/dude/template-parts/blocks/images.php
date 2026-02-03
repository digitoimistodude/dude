<?php
/**
 * The template for images
 *
 * Description of your block called "images" goes here.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 11:52:58
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $images = get_field( 'images' );
} else {
  $images = $args['images'];
}

?>

<section class="block block-images">
  <div class="container">

    <?php foreach ( $images as $key => $image ) {
      $key++;
      native_lazyload_tag( $image, [ 'class' => "image-{$key}" ] );
    }
    ?>

  </div>
</section>
