<?php
/**
 * The template for hero-jobs
 *
 * Description of your block called "hero-jobs" goes here.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-08-30 19:47:33
 *
 * @package dude
 */

namespace Air_Light;

if ( is_page() ) {
  $title = get_field( 'title' );
  $content = get_field( 'content' );
  $button = get_field( 'button' );
  $bg_image = get_field( 'bg_image' );
} else {
  $title = get_the_title();
  $alt_title = get_post_meta( get_the_ID(), 'alt_title', true );
  $content = get_post_meta( get_the_ID(), 'hero_content', true );
  $button = get_post_meta( get_the_ID(), 'hero_button', true );
  $bg_image = get_post_thumbnail_id();
}

if ( isset( $alt_title ) && ! empty( $alt_title ) ) {
  $title = $alt_title;
}

?>

<section class="block block-hero-jobs block-background-petrol has-bg-image">
  <div class="container">

    <div class="col col-content has-transition-fade">
      <div class="content">
        <h1 id="content">
          <?php echo esc_html( $title ); ?>
        </h1>

        <?php if ( ! empty( $content ) ) {
          echo wp_kses_post( wpautop( $content ) );
        }

        if ( ! empty( $button['url'] ) || ! empty( $button['title'] ) ) :
        ?>
          <p class="button-wrapper">
            <a href="<?php echo esc_url( $button['url'] ); ?>" class="no-external-link-indicator<?php if ( str_contains( $button['url'], '#' ) ) echo ' js-trigger'; ?>">
              <span class="screen-reader-text-dude">Siirry työpaikkalistaukseen: </span><?php echo wp_kses_post( $button['title'] ); ?>
            </a>
          </p>
        <?php endif; ?>
      </div>
    </div>

    <?php if ( ! empty( $bg_image ) ) : ?>
      <div class="col col-image has-transition-fade" aria-hidden="true">
        <?php native_lazyload_tag( $bg_image ) ?>
      </div>
    <?php endif;

    include get_theme_file_path( 'assets/svg/logo-big-white.svg' );
    ?>
  </div>
</section>
