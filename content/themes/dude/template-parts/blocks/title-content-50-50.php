<?php
/**
 * The template for title-content-50-50
 *
 * A block for title and content in columns.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 12:04:14
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $content = get_field( 'content' );
} else {
  $title = $args['title'];
  $content = $args['content'];
}

?>

<section class="block block-title-content-50-50 has-unified-padding-if-stacked">
  <div class="container">
    <div class="cols cols-two">

      <div class="col col-title">
        <h2>
          <?php echo esc_html( $title ); ?>
        </h2>
      </div>

      <div class="col col-content">
        <?php echo wp_kses_post( wpautop( $content ) ); ?>
      </div>

    </div>
  </div>
</section>
