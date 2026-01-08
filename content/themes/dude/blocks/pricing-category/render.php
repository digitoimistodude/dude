<?php
/**
 * Pricing Category block render template
 *
 * @package dude
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content (InnerBlocks).
 * @param WP_Block $block      Block instance.
 */

// Separate inner blocks into category info (heading, paragraph) and items (pricing-item)
$category_info_html = '';
$items_html = '';

foreach ( $block->inner_blocks as $inner_block ) {
  $rendered = $inner_block->render();

  if ( 'dude/pricing-item' === $inner_block->name ) {
    $items_html .= $rendered;
  } else {
    $category_info_html .= $rendered;
  }
}
?>
<section <?php echo get_block_wrapper_attributes( [ 'class' => 'block block-pricing-category has-unified-padding-if-stacked' ] ); ?>>
  <div class="container">
    <div class="pricing-category">
      <div class="category-info">
        <?php echo $category_info_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
      </div>
      <div class="category-items">
        <div class="pricing-accordion">
          <?php echo $items_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
        </div>
      </div>
    </div>
  </div>
</section>
