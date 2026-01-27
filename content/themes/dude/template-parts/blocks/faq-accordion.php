<?php
/**
 * Accordion
 *
 * Block for accordion elements.
 *
 * @Author:		Tuomas Marttila
 * @Date:   		2022-01-07 11:12:46
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-09-16 12:03:47
 *
 * @package air-blocks
 */

namespace Air_Light;

$title = get_field( 'title' );
$content = get_field( 'content' );
$question_ids = get_field( 'question_ids' );

$question_datas = [];
foreach ( $question_ids as $question_id ) {
  $question_data_tmp = [
    'title' => get_the_title( $question_id ),
    'content' => get_post_field( 'post_content', $question_id ),
  ];

  if ( empty( $question_data_tmp['title'] ) || empty( $question_data_tmp['content'] ) ) {
    continue;
  }

  $question_datas[] = $question_data_tmp;
}

// Add these data attributes to accordion div if you want multiple:
// data-allow-multiple

// Add these data attributes accordion div if you want to enable toggling:
// data-allow-toggle
?>

<section class="block block-accordion block-faq-accordion has-unified-padding-if-stacked">
  <div class="container">
    <?php if ( ! empty( $title ) ) : ?>
      <div class="col-title">
        <h2>
          <?php echo esc_html( $title ) ?>
        </h2>

        <?php if ( ! empty( $content ) ) : ?>
          <?php echo wp_kses_post( wpautop( $content ) ) ?>
        <?php endif; ?>

      </div>
    <?php endif; ?>

    <div class="accordion" data-allow-multiple data-allow-toggle>
      <?php foreach ( $question_datas as $question_data ) :
        $key = sanitize_title( $question_data['title'] ); ?>
        <div class="accordion-item">
          <h3>
            <button
              aria-expanded="false"
              class="accordion-trigger"
              aria-controls="<?php echo esc_attr( $key ); ?>"
              id="accordion-<?php echo esc_attr( $key ); ?>">
              <span class="accordion-title">
                <?php echo esc_html( $question_data['title'] ) ?><span class="accordion-icon"></span>
              </span>
            </button>
          </h3>

          <div
            id="<?php echo esc_attr( $key ); ?>"
            role="region"
            aria-labelledby="accordion-<?php echo esc_attr( $key ); ?>"
            class="accordion-panel"
            hidden="">
            <div>
              <?php echo wp_kses_post( wpautop( $question_data['content'] ) ); ?>
            </div>
          </div>
        </div>
      <?php endforeach ?>
    </div>

  </div>
</section>
