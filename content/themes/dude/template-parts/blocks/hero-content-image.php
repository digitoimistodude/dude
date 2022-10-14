<?php
/**
 * The template for hero-content-image
 *
 * Hero with image element.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-14 12:26:12
 *
 * @package dude
 */

namespace Air_Light;

// Page data
$link_to_work = get_field( 'link_to_work', get_the_ID() );
$prefix = get_the_title();

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $content = get_field( 'content' );
  $image = get_field( 'image' );
  $use_bg_image = get_field( 'use_as_bg_image' );
  $block_color = get_field( 'block_color' );
} else {
  $title = $args['title'];
  $content = $args['content'];
  $image = $args['image'];
  $use_bg_image = $args['use_as_bg_image'];
  $block_color = $args['block_color'];
  $prefix = $args['prefix'];
}

if ( empty( $title ) ) {
  maybe_show_error_block( 'Otsikko ja sisältö on pakolliset.' );
  return;
}

// If reference
if ( get_post_type() === 'reference' ) {
  $block_color = 'reference';
}

$classes = [
  'block',
  'block-hero-content-image',
];

if ( ! empty( $image ) ) {
  $classes[] = 'has-image';
}

if ( ! empty( $image ) && ! $use_bg_image ) {
  $classes[] = 'has-image-as-img';
}

if ( $use_bg_image ) {
  $classes[] = 'has-bg-image';
}

// If is contact page
if ( is_page( 4487 ) ) {
  $classes[] = 'block-hero-contact';
} else {
  $classes[] = 'block-background-' . esc_attr( $block_color );
}
?>

<section class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
  <div class="container">

    <div class="col col-content has-transition-fade">
      <div class="content">
        <h1 id="content" class="prefix">
          <?php echo esc_html( $prefix ); ?>
        </h1>

        <h2>
          <?php echo esc_html( $title ) ?>
        </h2>

        <?php echo wp_kses_post( wpautop( $content ) ); ?>

        <?php if ( is_singular( 'reference' ) && ! empty( $link_to_work ) ) : ?>
          <p class="button-wrapper">
            <a href="<?php echo esc_url( $link_to_work ); ?>" class="button-work">Siirry sivustolle</a>
          </p>
        <?php endif; ?>
      </div>
    </div>

    <?php if ( ! empty( $image ) && ! is_page( 4487 ) ) : ?>
      <div class="col col-image has-transition-fade">
        <?php if ( is_page( 9 ) ) {
           $picture_cdn_args = [
            'width'     => '640',
            'height'    => '804',
           ];

          $picture_cdn_srcset = [
            220 => [
              'width'     => '435',
              'height'    => '507',
            ],
            600 => [
              'width'     => '548',
              'height'    => '689',
            ],
            1620 => [
              'width'     => '640',
              'height'    => '804',
            ],
          ];
          get_picture_element_with_cfcdn( $image, $picture_cdn_args, $picture_cdn_srcset );
        } else {
          native_lazyload_tag( $image );
        }
        ?>
      </div>
    <?php endif; ?>

  </div>
</section>
