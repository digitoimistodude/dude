<?php
/**
 * The template for title-content-cols-30
 *
 * Description of your block called "title-content-cols-30" goes here.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 12:04:32
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $hide_title = get_field( 'hide_title' );
  $cols = get_field( 'cols' );
} else {
  $title = $args['title'];
  $hide_title = $args['hide_title'];
  $cols = $args['cols'];
}

?>

<section class="block block-title-content-cols-30 has-unified-padding-if-stacked">
  <div class="container">

    <?php if ( ! $hide_title && ! empty( $title ) ) : ?>
    <h2>
      <?php echo esc_html( $title ); ?>
    </h2>
    <?php elseif ( $hide_title && ! empty( $title ) ) : ?>
    <span class="screen-reader-text-dude">
      <?php echo esc_html( $title ) ?>
    </span>
    <?php endif; ?>

    <div class="cols">
      <?php foreach ( $cols as $col ) : ?>
      <div class="col">
        <p>
          <?php echo wp_kses_post( $col['content'] ) ?>
        </p>

        <?php if ( ! empty( $col['link'] ) ) : ?>
        <p class="link-underlined-wrapper">
          <a class="link-underlined" href="<?php echo esc_html( $col['link']['url'] ) ?>">
            <?php echo esc_html( $col['link']['title'] ) ?>
          </a>
        </p>
        <?php endif; ?>
      </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>
