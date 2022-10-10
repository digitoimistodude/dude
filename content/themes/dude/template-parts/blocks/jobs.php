<?php
/**
 * The template for jobs
 *
 * Description of your block called "jobs" goes here.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 11:53:39
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $description = get_field( 'description' );
} else {
  $title = $args['title'];
  $description = $args['description'];
}

if ( empty( $title ) ) {
  maybe_show_error_block( 'A title is required' );
  return;
}

$jobs_query = new \WP_query( [
  'post_type'      => 'job',
  'posts_per_page' => 50,
  'meta_key'       => 'filled', // phpcs:ignore
  'meta_value'     => '0', // phpcs:ignore
  'fields'          => 'ids',
] );

$jobs = [];
if ( $jobs_query->have_posts() ) {
  $jobs = $jobs_query->posts;
}
?>

<section class="block block-jobs has-unified-padding-if-stacked" id="avoimet-tyopaikat">
  <div class="container">

    <h2>
      <?php echo esc_html( $title ) ?>
    </h2>

    <?php if ( ! empty( $description ) ) : ?>
      <div class="open-positions-description">
        <?php echo wp_kses_post( wpautop( $description ) ) ?>
      </div>
    <?php endif;

    if ( ! empty( $jobs ) ) : ?>
      <ul class="jobs">
        <?php foreach ( $jobs as $job ) {
          get_template_part( 'template-parts/loops/job', null, $job );
        } ?>
      </ul>
    <?php else : ?>
      <div class="no-jobs">
        <p>
          Ei avoinna olevia työpaikkoja.
        </p>
      </div>
    <?php endif; ?>

  </div>
</section>
