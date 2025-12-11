<?php
/**
 * The template for carousel block
 *
 * Description of your block called "carousel" goes here.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-14 12:31:19
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $images = get_field( 'images' );
  $make_active_bigger = get_field( 'make_active_bigger' );
  $carousel_style = get_field( 'carousel_style' );
} else {
  $title = $args['title'];
  $images = $args['images'];
  $make_active_bigger = $args['make_active_bigger'];
  $carousel_style = $args['carousel_style'] ?? 'default';
}

if ( empty( $images ) ) {
  maybe_show_error_block( 'Kuvia ei valittuna' );
  return;
}

// Default carousel dimensions (1400x840, aspect ratio ~1.67)
$picture_cdn_args = [
  'width'     => '1400',
  'height'    => '840',
];

$picture_cdn_srcset = [
  220 => [
    'width'     => '435',
    'height'    => '261',
  ],
  600 => [
    'width'     => '555',
    'height'    => '333',
  ],
  860 => [
    'width'     => '1400',
    'height'    => '840',
  ],
];

// Alt (matala) carousel dimensions (1400x750)
if ( 'alt' === $carousel_style ) {
  $picture_cdn_args = [
    'width'  => '1400',
    'height' => '750',
  ];

  $picture_cdn_srcset = [
    220 => [
      'width'  => '435',
      'height' => '233',
    ],
    600 => [
      'width'  => '555',
      'height' => '297',
    ],
    860 => [
      'width'  => '1400',
      'height' => '750',
    ],
  ];
}
?>

<section class="block block-carousel is-carousel<?php if ( 'alt' === $carousel_style ) { echo ' carousel-style-alt'; } ?>">
  <div class="container">

    <div class="swiper swiper-container<?php if ( $make_active_bigger ) { echo ' is-full-width'; } ?>">

      <?php if ( 'alt' !== $carousel_style ) : ?>
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
      <?php endif; ?>

      <ul class="images swiper-wrapper">
        <?php foreach ( $images as $image_id ) : ?>
          <li class="item item-image swiper-slide">
            <?php get_picture_element_with_cfcdn( $image_id, $picture_cdn_args, $picture_cdn_srcset ); ?>
          </li>
        <?php endforeach; ?>
      </ul>
      <div class="swiper-scrollbar"></div>

      <?php if ( 'alt' === $carousel_style ) : ?>
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
      <?php endif; ?>
    </div>

  </div>
</section>
