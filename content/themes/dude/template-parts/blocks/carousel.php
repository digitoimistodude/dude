<?php
/**
 * The template for carousel block
 *
 * Description of your block called "carousel" goes here.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-08-30 18:53:55
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $images = get_field( 'images' );
  $make_active_bigger = get_field( 'make_active_bigger' );
} else {
  $title = $args['title'];
  $images = $args['images'];
  $make_active_bigger = $args['make_active_bigger'];
}

if ( empty( $images ) ) {
  maybe_show_error_block( 'Kuvia ei valittuna' );
  return;
}
?>

<section class="block block-carousel is-carousel">
  <div class="container">

    <div class="swiper swiper-container<?php if ( $make_active_bigger ) { echo ' is-full-width'; } ?>">

      <header class="head">
        <?php if ( ! empty( $title ) ) : ?>
          <h2>
            <?php echo esc_html( $title ); ?>
          </h2>
        <?php endif; ?>

        <div class="swiper-controls">
          <button class="swiper-actions swiper-button-prev arrow-link arrow-link-prev">
            <span class="arrow-link-arrow"></span>
          </button>

          <button class="swiper-actions swiper-button-next arrow-link arrow-link-next">
            <span class="arrow-link-arrow"></span>
          </button>
        </div>
      </header>

      <ul class="images swiper-wrapper">
        <?php foreach ( $images as $image_id ) : ?>
          <li class="item item-image swiper-slide">
            <?php native_lazyload_tag( $image_id ) ?>
          </li>
        <?php endforeach; ?>
      </ul>
      <div class="swiper-scrollbar"></div>
    </div>

  </div>
</section>
