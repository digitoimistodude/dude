<?php
/**
 * Pricing Hero block render template
 *
 * @package dude
 * @param array    $attributes Block attributes.
 * @param string   $content    Block default content.
 * @param WP_Block $block      Block instance.
 */

$prefix       = $attributes['prefix'] ?? 'Hinnasto';
$title        = $attributes['title'] ?? 'Investoi parempaan<br>digitaaliseen läsnäoloon';
$ingress      = $attributes['ingress'] ?? '';
$show_button  = $attributes['showButton'] ?? true;
$button_text  = $attributes['buttonText'] ?? 'Ota yhteyttä';
?>
<section <?php echo get_block_wrapper_attributes( [ 'class' => 'block block-pricing-hero has-unified-padding-if-stacked' ] ); ?>>
  <div class="container">
    <div class="content">
      <p class="prefix"><?php echo esc_html( $prefix ); ?></p>
      <h1 id="content"><?php echo wp_kses_post( $title ); ?></h1>
      <p class="ingress"><?php echo wp_kses_post( $ingress ); ?></p>
      <?php if ( $show_button ) : ?>
        <p class="button-wrapper">
          <a href="<?php echo esc_url( get_permalink( 4487 ) ); ?>" class="button button-mint button-huge"><?php echo esc_html( $button_text ); ?></a>
        </p>
      <?php endif; ?>
    </div>
  </div>
</section>
