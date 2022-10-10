<?php
/**
 * The template for title-images
 *
 * Description of your block called "title-images" goes here.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-08-27 17:31:05
 *
 * @package dude
 */

namespace Air_Light;

$title = get_field( 'title' );
$content = get_field( 'content' );
$images = get_field( 'images' );
$link = get_field( 'link' );

if ( empty( $images ) ) {
  maybe_show_error_block( 'Laitteleha niitä kuvia.' );
  return;
}

if ( empty( $title ) ) {
  maybe_show_error_block( 'Otsikkoa ei ole asetettuna.' );
  return;
}
?>

<section class="block block-title-images">
  <div class="container">

    <div class="content">
      <h2>
        <?php echo esc_html( $title ); ?>
      </h2>

      <?php if ( ! empty( $content ) ) : ?>
        <div class="content-text">
          <?php echo wp_kses_post( $content ); ?>
        </div>
      <?php endif; ?>

      <?php if ( ! empty( $link ) ) : ?>
        <p class="link-underlined-wrapper">
          <a class="link-underlined" href="<?php echo esc_url( $link['url'] ) ?>">
            <?php echo esc_html( $link['title'] ) ?>
          </a>
        </p>
      <?php endif; ?>
    </div>

    <div class="images">
      <?php foreach ( $images as $image ) : ?>
        <div class="image">
          <?php native_lazyload_tag( $image ); ?>
        </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>
