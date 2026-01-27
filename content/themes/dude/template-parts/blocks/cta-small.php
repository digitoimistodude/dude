<?php
/**
 * The template for cta-small block
 *
 * A small CTA block.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 11:42:51
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $content = get_field( 'content' );
  $button = get_field( 'button' );
} else {
  $title = $args['title'];
  $content = $args['content'];
  $button = $args['button'];
}

$classes = [
  'block',
  'block-cta',
  'block-cta-small',
  'has-unified-padding-if-stacked',
];
?>

<section class="<?php echo esc_attr( join( ' ', $classes ) ) ?>">
  <div class="container">

    <div class="cta-box cta-box-small has-radial-gradient-animation">

      <div class="cta-box-content">
        <h2>
          <?php echo esc_html( $title ); ?>
        </h2>

        <?php echo wp_kses_post( wpautop( $content ) ); ?>
      </div>

      <p class="button-wrapper">
        <a href="<?php echo esc_url( $button['url'] ) ?>" class="button button-style-mint button-huge">
          <?php echo esc_html( $button['title'] ) ?>
        </a>
      </p>
    </div>

  </div>
</section>
