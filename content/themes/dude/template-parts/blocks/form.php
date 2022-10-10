<?php
/**
 * The template for form
 *
 * Description of your block called "form" goes here.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-08-13 12:36:33
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $content = get_field( 'content' );
  $form_id = get_field( 'wpforms_id' );
} else {
  $title = $args['title'];
  $content = $args['content'];
  $form_id = $args['wpforms_id'];
}

if ( ! function_exists( 'wpforms_display' ) ) {
  maybe_show_error_block( 'Lomakelisäosa ei ole aktiivinen.' );
  return;
}

if ( empty( $form_id ) ) {
  maybe_show_error_block( 'Lomaketta ei valittu.' );
  return;
}

if ( is_singular( 'job' ) && '1' === get_post_meta( get_the_ID(), 'filled', true ) ) {
  return;
}
?>

<section class="block block-form has-unified-padding-if-stacked">
  <div class="container">

    <?php if ( ! empty( $title ) ) : ?>
      <h2>
        <?php echo esc_html( $title ); ?>
      </h2>
    <?php endif;

    if ( ! empty( $content ) ) {
      echo wp_kses_post( wpautop( $content ) );
    }

    wpforms_display( $form_id ); ?>

  </div>
</section>
