<?php
/**
 * The template for expectations
 *
 * Description of your block called "expectations" goes here.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 12:06:45
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $cols = get_field( 'cols' );
} else {
  $cols = $args['cols'];
}

if ( empty( $cols ) ) {
  maybe_show_error_block( 'Kentistä puuttuu sisältöä' );
  return;
}
?>

<section class="block block-icon-list-cols">
  <div class="container">
    <div class="cols cols-two">

      <?php foreach ( $cols as $col ) : ?>
        <div class="col">
          <?php if ( ! empty( $col['title'] ) ) : ?>
            <h2>
              <?php echo esc_html( $col['title'] ) ?>
            </h2>
          <?php endif; ?>

          <ul>
            <?php foreach ( $col['list'] as $list_item ) : ?>
              <li><span><?php echo esc_html( $list_item['text'] ); ?></span></li>
            <?php endforeach; ?>
          </ul>
        </div>
      <?php endforeach; ?>

    </div>
  </div>
</section>
