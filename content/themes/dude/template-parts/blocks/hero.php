<?php
/**
 * Hero
 *
 * A visual hero used on front page.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-21 23:08:33
 *
 * @package dude
 */

namespace Air_Light;

// Showreel video ID
$vimeo_showreel_id = '747270541';

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $content = get_field( 'content' );
} else {
  $title = $args['title'];
  $content = $args['content'];
}

if ( empty( $title ) || empty( $content ) ) {
  maybe_show_error_block( 'Otsikko ja tekstisisältö on vaadittu' );
  return;
}

// Sales phone
$salesperson_id = get_custom_setting( 'salesperson', 'general' );
$sales_phone = get_post_meta( $salesperson_id, 'tel', true );
$sales_phone_tel_value = preg_replace( '/\s+/', '', $sales_phone );
?>

<section class="block block-hero">
  <div class="container has-transition-fade">

    <div class="content">
      <h1 id="content">
        <?php echo esc_html( $title ); ?>
      </h1>

      <?php echo wp_kses_post( wpautop( $content ) ); ?>

      <p class="button-wrapper">
        <button class="play-showreel" id="play-<?php echo esc_html( $vimeo_showreel_id ); ?>" type="button">
          <span class="icon-wrapper" aria-hidden="true"><span class="icon"></span></span>
          <span class="play-label">Katso showreel</span>
        </button>
      </p>
    </div>

  <div class="showreel">

    <div class="image-poster image image-background image-background-layer">
      <picture>
        <source media="(min-width: 220px) and (max-width: 600px)" srcset="https://cdn.dude.fi/cdn-cgi/image/width=1243.52,height=700,fit=cover,quality=75,format=auto/https://www.dude.fi/media/showreel.jpg">
        <source media="(min-width: 1000px)" srcset="https://cdn.dude.fi/cdn-cgi/image/width=1208,height=680,quality=75,fit=cover,format=auto/https://www.dude.fi/media/showreel.jpg">
        <img loading="eager" src="https://cdn.dude.fi/cdn-cgi/image/width=1208,height=680,quality=75,fit=cover,format=auto/https://www.dude.fi/media/showreel.jpg" width="1208" height="680" alt="Duden showreel">
      </picture>
    </div>

    <div class="video js-video">
      <div class="vimeo-player" id="<?php echo esc_html( $vimeo_showreel_id ); ?>" data-video-id="<?php echo esc_html( $vimeo_showreel_id ); ?>" data-play-button="play-<?php echo esc_html( $vimeo_showreel_id ); ?>"></div>

        <div class="video-cta container">
          <div class="video-cta-content">
            <h2 class="h1">Miltäs vaikutti?</h2>
            <p>Puhuttelivatko työnäytteemme? <a href="https://www.dude.fi/tyot">Täältä</a> voit katsoa lisää. Soittele numeroon <a href="tel:<?php echo esc_html( $sales_phone_tel_value ); ?>"><?php echo esc_html( $sales_phone ); ?></a> tai lähetä sähköpostia <a href="mailto:moro@dude.fi">moro@dude.fi</a>, jos haluat uudistaa verkkosivusi tai brändi-ilmeesi.</p>
          </div>
        </div>

    </div>
  </div>

  </div>
</section>
