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

// Disable cropping entirely (no fit) so images scale without being cut
$picture_cdn_args = [
  'width'   => '1400',
  'height'  => '840',
  'gravity' => 'auto',
  'fit'     => null,
];

$picture_cdn_srcset = [
  220 => [
    'width'     => '435',
    'height'    => '237',
  ],
  600 => [
    'width'     => '555',
    'height'    => '302',
  ],
  860 => [
    'width'     => '1400',
    'height'    => '840',
  ],
];
?>

<?php if ( 'alt' === $carousel_style ) : ?>
<section class="block block-carousel has-unified-padding-if-stacked carousel-style-alt">
  <div class="container">
    <div class="scroll-carousel">
      <ul class="scroll-carousel-track">
        <?php foreach ( $images as $image_id ) : ?>
          <li class="scroll-carousel-item">
            <?php get_picture_element_with_cfcdn( $image_id, $picture_cdn_args, $picture_cdn_srcset ); ?>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>

    <div class="scroll-carousel-controls">
      <button class="scroll-carousel-prev arrow-link arrow-link-prev" type="button">
        <span class="arrow-link-arrow"></span>
      </button>

      <button class="scroll-carousel-next arrow-link arrow-link-next" type="button">
        <span class="arrow-link-arrow"></span>
      </button>
    </div>
  </div>
</section>
<?php else : ?>
<section class="block block-carousel has-unified-padding-if-stacked is-carousel">
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
            <?php get_picture_element_with_cfcdn( $image_id, $picture_cdn_args, $picture_cdn_srcset ); ?>
          </li>
        <?php endforeach; ?>
      </ul>
      <div class="swiper-scrollbar"></div>
    </div>

  </div>
</section>
<?php endif; 
