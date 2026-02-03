<?php
/**
 * The template for process
 *
 * Our process.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 11:56:37
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $steps = get_field( 'steps' );
} else {
  $title = $args['title'];
  $steps = $args['steps'];
}

?>

<section class="block block-process has-radial-gradient-animation is-carousel">
  <div class="container">

    <div class="swiper swiper-container is-process">

      <header class="head">
        <h2>
          <?php echo esc_html( $title ); ?>
        </h2>

        <div class="swiper-controls">
          <button class="swiper-actions swiper-button-prev arrow-link arrow-link-prev">
            <span class="arrow-link-arrow"></span>
          </button>

          <div class="swiper-pagination"></div>

          <button class="swiper-actions swiper-button-next arrow-link arrow-link-next">
            <span class="arrow-link-arrow"></span>
          </button>
        </div>
      </header>

      <ul class="steps swiper-wrapper">
        <?php foreach ( $steps as $key => $step ) {
          get_template_part( 'template-parts/loops/process-step', null, [ 'step' => $step, 'step_number' => $key ] );
        }
        ?>
      </ul>

    </div>

  </div>
</section>
