<?php
/**
 * The template for hero-centered
 *
 * Block that has centered hero content.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 11:48:59
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $content = get_field( 'content' );
  $link = get_field( 'link' );
} else {
  $title = $args['title'];
  $content = $args['content'];
  $link = $args['link'];
}

if ( empty( $title ) ) {
  maybe_show_error_block( 'Otsikko on pakollinen' );
  return;
}
?>

<section class="block block-hero-centered has-unified-padding-if-stacked">
  <div class="container">
    <div class="content has-transition-fade">

      <h1 id="content" class="prefix">
        <?php the_title(); ?>
      </h1>

      <?php echo wp_kses_post( wpautop( $title ) );

      echo wp_kses_post( wpautop( $content ) );

      if ( ! empty( $link ) && ! empty( $link['title'] && $link['url'] ) ) : ?>
        <p class="link-underlined-wrapper">
          <a href="<?php echo esc_url( $link['url'] ) ?>" class="link-underlined">
            <?php echo esc_html( $link['title'] ) ?>
          </a>
        </p>
      <?php endif; ?>

    </div>
  </div>
</section>
