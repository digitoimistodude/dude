<?php
/**
 * The template for cta-big block
 *
 * A block template for CTA.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 11:42:21
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $content = get_field( 'content' );
  $button = get_field( 'button' );
  $style = get_field( 'style' );
} else {
  $title = $args['title'];
  $content = $args['content'];
  $button = $args['button'];
  $style = $args['style'];
}

$classes = [
  'cta-box',
  'cta-box-big',
];

if ( 'dark' === $style ) {
  $classes[] = 'has-dark-style';
} else {
  $classes[] = 'has-radial-gradient-animation';
}
?>

<section class="block block-cta block-cta-big">
  <div class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
    <div class="container">

      <div class="content">
        <h2>
          <?php echo esc_html( $title ); ?>
        </h2>

        <?php echo wp_kses_post( wpautop( $content ) ); ?>

        <p class="button-wrapper">
          <a href="<?php echo esc_url( $button['url'] ) ?>" class="button button-mint button-huge">
            <?php echo esc_html( $button['title'] ) ?>
          </a>
        </p>
      </div>

    </div>
  </div>
</section>
