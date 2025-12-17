<?php
/**
 * Pricing FAQ block render template
 *
 * @package dude
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content (InnerBlocks).
 * @param WP_Block $block      Block instance.
 */

$items = $attributes['items'] ?? [];
?>
<section <?php echo get_block_wrapper_attributes( [ 'class' => 'block block-pricing-faq block-upkeep-faq' ] ); ?>>
  <div class="container">
    <div class="faq-layout">
      <div class="faq-intro">
        <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
      </div>
      <div class="faq-items">
        <div class="accordion" data-allow-multiple data-allow-toggle>
          <?php foreach ( $items as $index => $item ) :
            $faq_id = 'faq-block-' . ( $index + 1 );
          ?>
            <div class="accordion-item">
              <h3>
                <button aria-expanded="false" class="accordion-trigger" aria-controls="<?php echo esc_attr( $faq_id ); ?>" id="accordion-<?php echo esc_attr( $faq_id ); ?>">
                  <span class="accordion-title">
                    <?php echo esc_html( $item['question'] ?? '' ); ?><span class="accordion-icon"></span>
                  </span>
                </button>
              </h3>
              <div id="<?php echo esc_attr( $faq_id ); ?>" role="region" aria-labelledby="accordion-<?php echo esc_attr( $faq_id ); ?>" class="accordion-panel" hidden>
                <div>
                  <p><?php echo wp_kses_post( $item['answer'] ?? '' ); ?></p>
                </div>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>
</section>
