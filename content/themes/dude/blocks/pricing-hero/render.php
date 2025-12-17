<?php
/**
 * Pricing Hero block render template
 *
 * @package dude
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content (InnerBlocks).
 * @param WP_Block $block      Block instance.
 */

?>
<section <?php echo get_block_wrapper_attributes( [ 'class' => 'block block-pricing-hero' ] ); ?>>
  <div class="container">
    <div class="content">
      <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
    </div>
  </div>
</section>
