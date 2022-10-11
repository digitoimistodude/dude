<?php
/**
 * Hero
 *
 * A visual hero used on front page.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-11 15:50:54
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
    <div class="video js-video">
      <div class="vimeo-player" id="<?php echo esc_html( $vimeo_showreel_id ); ?>" data-video-id="<?php echo esc_html( $vimeo_showreel_id ); ?>" data-play-button="play-<?php echo esc_html( $vimeo_showreel_id ); ?>"></div>

        <div class="video-cta container">
          <div class="video-cta-content">
            <h1>Miltäs vaikutti?</h1>
            <p>Puhuttelivatko työnäytteemme? <a href="https://www.dude.fi/tyot">Täältä</a> voit katsoa lisää. Soittele numeroon <a href="tel:<?php echo esc_html( $sales_phone_tel_value ); ?>"><?php echo esc_html( $sales_phone ); ?></a> tai lähetä sähköpostia <a href="mailto:moro@dude.fi">moro@dude.fi</a>, jos haluat uudistaa verkkosivusi tai brändi-ilmeesi.</p>
          </div>
        </div>

    </div>
  </div>

  </div>
</section>
