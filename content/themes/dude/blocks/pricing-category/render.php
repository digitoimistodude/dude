<?php
/**
 * Pricing Category block render template
 *
 * @package dude
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content (InnerBlocks).
 * @param WP_Block $block      Block instance.
 */

$items = $attributes['items'] ?? [];
?>
<section <?php echo get_block_wrapper_attributes( [ 'class' => 'block block-pricing-category has-unified-padding-if-stacked' ] ); ?>>
  <div class="container">
    <div class="pricing-category">
      <div class="category-info">
        <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
      </div>
      <div class="category-items">
        <div class="pricing-accordion">
          <?php foreach ( $items as $item ) :
            $is_popular = ! empty( $item['isPopular'] );
            $item_class = $is_popular ? 'pricing-accordion-item is-popular' : 'pricing-accordion-item';
          ?>
            <div class="<?php echo esc_attr( $item_class ); ?>" aria-expanded="false" role="button" tabindex="0">
              <div class="item-main">
                <div class="item-content">
                  <div class="item-header">
                    <h3><?php echo esc_html( $item['title'] ?? '' ); ?></h3>
                    <?php if ( $is_popular ) : ?>
                      <span class="badge">Suosituin</span>
                    <?php endif; ?>
                  </div>
                  <div class="item-meta">
                    <span class="price"><?php echo esc_html( $item['price'] ?? '' ); ?></span>
                    <span class="description"><?php echo esc_html( $item['shortDescription'] ?? '' ); ?></span>
                  </div>
                </div>
                <span class="icon" aria-hidden="true"></span>
              </div>
              <div class="accordion-content">
                <p><?php echo wp_kses_post( $item['content'] ?? '' ); ?></p>
                <?php if ( ! empty( $item['features'] ) ) : ?>
                  <ul>
                    <?php foreach ( $item['features'] as $feature ) : ?>
                      <li><?php echo esc_html( $feature ); ?></li>
                    <?php endforeach; ?>
                  </ul>
                <?php endif; ?>
                <p class="accordion-cta"><button type="button" class="button button-mint pricing-contact-button">Ota yhteyttä</button></p>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>
</section>
