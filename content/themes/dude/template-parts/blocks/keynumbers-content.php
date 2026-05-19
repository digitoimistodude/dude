<?php
/**
 * The template for keynumbers-content
 *
 * Block that has keynumbers.
 *
 * @Author:     Roni Laukkarinen
 * @Date:           2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-09-08 18:05:14
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $keynumbers = get_field( 'keynumbers' );
  $content = get_field( 'content' );
  $additional_info_title = get_field( 'additional_info_title' );
  $additional_info_content = get_field( 'additional_info_content' );
} else {
  $keynumbers = $args['keynumbers'];
  $content = $args['content'];
  $additional_info_title = $args['additional_info_title'];
  $additional_info_content = $args['additional_info_content'];
}

?>

<section class="block block-keynumbers-content has-unified-padding-if-stacked">
  <div class="container">
    <div class="cols">

      <div class="col col-numbers">
        <?php foreach ( $keynumbers as $keynumber ) : ?>
          <div class="number">
            <h2 class="title">
          <?php echo esc_html( $keynumber['title'] ) ?>
            </h2>

            <div class="number-and-description">
              <p class="number">
          <?php echo esc_html( $keynumber['number'] ) ?>
              </p>

              <p class="description">
          <?php echo esc_html( $keynumber['description'] ) ?>
              </p>
            </div>
          </div>
        <?php endforeach; ?>

        <div class="additional-information">
          <h2 class="additional-info-title">
            <?php echo esc_html( $additional_info_title ) ?>
          </h2>

          <?php echo wp_kses_post( $additional_info_content ) ?>
        </div>

        <?php
        // Show budget class for references
        $budget_terms = wp_get_post_terms( get_the_ID(), 'reference-budget' );
        if ( ! empty( $budget_terms ) && ! is_wp_error( $budget_terms ) ) :
          ?>
          <div class="budget-information">
            <h2 class="additional-info-title">Budjettiluokka</h2>
            <p class="budget-price"><?php echo esc_html( $budget_terms[0]->name ); ?></p>
          </div>
        <?php endif; ?>
      </div>

      <div class="col col-content">
        <?php echo wp_kses_post( wpautop( $content ) ) ?>
      </div>

    </div>
  </div>
</section>
