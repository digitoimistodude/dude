<?php
/**
 * The template for image-content
 *
 * A block that has both image and content.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-05 15:48:56
 *
 * @package dude
 */

namespace Air_Light;

// Fields
$title = get_field( 'title' );
$content = get_field( 'content' );
$link = get_field( 'link' );
$style = get_field( 'style' );
$image = get_field( 'image' );
$image_side = get_field( 'image_side' );

// Hiding block if true
if ( get_field( 'hide_block' ) ) {
  return;
}

if ( empty( $title ) || empty( $image ) ) {
  maybe_show_error_block( 'A title and image is required' );
  return;
}

$classes = [
  'block',
  'block-image-content',
];

if ( 'cards' === $style ) {
  $classes[] = 'block-image-content-cards';
} else {
  $classes[] = 'has-unified-padding-if-stacked';
}

if ( $image_side ) {
  $classes[] = 'block-image-content-right';
}
?>

<section class="<?php echo esc_attr( join( ' ', $classes ) ) ?>">
  <div class="container">

    <div class="col col-image">
      <?php native_lazyload_tag( $image ) ?>
      <?php if ( 'job' === get_post_type() ) :
        $caption = wp_get_attachment_metadata( $image )['image_meta']['caption'];
        if ( ! empty( $caption ) ) : ?>
        ?>
          <figcaption>
            <?php echo esc_html( $caption ); ?>
          </figcaption>
        <?php endif; ?>
      <?php endif; ?>
    </div>

    <div class="col col-content">
      <div class="content">
        <h2>
          <?php echo esc_html( $title ); ?>
        </h2>

        <?php echo wp_kses_post( wpautop( $content ) );

        if ( ! empty( $link ) && ! empty( $link['title'] && $link['url'] ) ) : ?>
          <p class="link-underlined-wrapper">
            <a href="<?php echo esc_url( $link['url'] ) ?>" class="link-underlined">
              <?php echo esc_html( $link['title'] ) ?>
            </a>
          </p>
        <?php endif; ?>
      </div>
    </div>

  </div>
</section>
