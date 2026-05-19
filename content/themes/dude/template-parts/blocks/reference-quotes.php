<?php
/**
 * The template for reference-quotes
 *
 * A block for testimonials.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-04 13:43:49
 *
 * @package dude
 */

namespace Air_Light;

$reference_ids = [];
if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $reference_ids = get_field( 'reference_ids' );
} else {
  $title = $args['title'];
  $reference_ids = $args['reference_ids'];
}

$quote_ids = [];
$quote_field = 'quote_short';
foreach ( $reference_ids as $reference_id ) {
  if ( empty( get_post_meta( $reference_id, $quote_field, true ) ) ) {
    continue;
  }

  $quote_ids[] = $reference_id;
}

?>

<?php
// If is front page or "Verkkosivut" page
if ( is_front_page() || is_page( 9 ) ) :
?>
  <section class="block has-unified-padding-if-stacked block-testimonial-train">
    <div class="container">
      <h2 class="block-heading">
        <?php echo esc_html( $title ); ?>
      </h2>
    </div>

    <div class="testimonial-train">
      <ul class="quotes list" id="list">
        <?php foreach ( $quote_ids as $quote_id ) {
          get_template_part( 'template-parts/loops/reference-quote', null, [ 'post_id' => $quote_id, 'quote_field' => $quote_field ] );
        }
        ?>
      </ul>
    </div>
  </section>
<?php else : ?>
  <section class="block block-reference-quotes has-unified-padding-if-stacked is-carousel">
    <div class="container">

      <h2 class="screen-reader-text-dude">
        <?php echo esc_html( $title ); ?>
      </h2>

      <div class="swiper-container is-reference-quotes">

        <?php if ( 1 < count( $quote_ids ) ) : ?>
          <div class="swiper-controls">
            <button class="swiper-actions swiper-button-prev arrow-link arrow-link-prev">
              <span aria-hidden="true" class="arrow-link-arrow"></span>
            </button>

            <button class="swiper-actions swiper-button-next arrow-link arrow-link-next">
              <span aria-hidden="true" class="arrow-link-arrow"></span>
            </button>
          </div>
        <?php endif; ?>

        <ul class="quotes swiper-wrapper">
          <?php foreach ( $quote_ids as $quote_id ) {
            get_template_part( 'template-parts/loops/reference-quote', null, [ 'post_id' => $quote_id, 'quote_field' => $quote_field ] );
          }
          ?>
        </ul>

      </div>

    </div>
  </section>
<?php endif; 
