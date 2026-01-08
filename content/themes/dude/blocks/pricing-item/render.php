<?php
/**
 * Pricing Item block render template.
 *
 * @param array  $attributes Block attributes.
 * @param string $content    Block content (not used for this block).
 * @param object $block      Block instance.
 *
 * @package dude
 */

$title = $attributes['title'] ?? '';
$is_popular = $attributes['isPopular'] ?? false;
$price = $attributes['price'] ?? '';
$short_description = $attributes['shortDescription'] ?? '';
$content_text = $attributes['content'] ?? '';
$features = $attributes['features'] ?? [];
$item_id = 'pricing-item-' . uniqid();

$item_classes = 'pricing-accordion-item';
if ( $is_popular ) {
  $item_classes .= ' is-popular';
}
?>
<div class="<?php echo esc_attr( $item_classes ); ?>" aria-expanded="false">
  <button
    class="item-main"
    type="button"
    aria-controls="<?php echo esc_attr( $item_id ); ?>"
    aria-expanded="false"
  >
    <div class="item-content">
      <div class="item-header">
        <h3><?php echo wp_kses_post( $title ); ?></h3>
        <?php if ( $is_popular ) : ?>
          <span class="badge"><?php esc_html_e( 'Suosituin', 'flavor' ); ?></span>
        <?php endif; ?>
      </div>
      <div class="item-meta">
        <span class="price"><?php echo wp_kses_post( $price ); ?></span>
        <span class="description"><?php echo wp_kses_post( $short_description ); ?></span>
      </div>
    </div>
    <span class="icon" aria-hidden="true"></span>
  </button>
  <div id="<?php echo esc_attr( $item_id ); ?>" class="accordion-content" hidden>
    <?php if ( ! empty( $content_text ) ) : ?>
      <p><?php echo wp_kses_post( $content_text ); ?></p>
    <?php endif; ?>
    <?php if ( ! empty( $features ) ) : ?>
      <ul>
        <?php foreach ( $features as $feature ) : ?>
          <li><?php echo wp_kses_post( $feature ); ?></li>
        <?php endforeach; ?>
      </ul>
    <?php endif; ?>
  </div>
</div>
