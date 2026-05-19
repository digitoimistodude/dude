<?php
/**
 * Template Name: Kyselyt
 *
 * @Author: Timi Wahalahti
 * @Date:   2022-08-05 13:58:58
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-12 14:45:00
 * @package dude
 */

the_post();

$form_id = get_post_meta( get_the_id(), 'wpforms_id', true );
$form_title = get_post_meta( get_the_id(), 'form_title', true );
$form_description = get_post_meta( get_the_id(), 'form_description', true );
$hero_content = get_post_meta( get_the_id(), 'hero_content', true );
?>
<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php wp_head(); ?>
  </head>

  <body class="template-surveys-modern">

    <div id="page" class="site">
     <div class="site-content">

        <main id="main" class="site-main">

          <header class="survey-header">
            <div class="survey-header--text">
              <?php if ( ! empty( $form_title ) ) : ?>
                <h1 id="content"><?php echo wp_kses_post( $form_title ); ?></h1>
              <?php endif; ?>

              <?php if ( ! empty( $hero_content ) ) : ?>
                <p class="survey-header-description"><?php echo esc_html( $hero_content ); ?></p>
              <?php endif; ?>
            </div>

            <div class="survey-header--logo">
              <?php include get_theme_file_path( 'assets/svg/logo.svg' ); ?>
              <p class="survey-header--logo-tagline"><a href="<?php echo esc_url( get_home_url() ); ?>">www.dude.fi</a></p>
            </div>
          </header>

          <?php if ( ! empty( $form_description ) ) : ?>
            <div class="container">
              <?php echo wpautop( $form_description ); // phpcs:ignore ?>
            </div>
          <?php endif; ?>

          <?php echo do_shortcode( '[wpforms id="' . $form_id . '"]' );

          do_action( 'dude_site_main_after_content' );
          ?>

        </main><!-- #main -->
      </div><!-- #primary -->

    </div><!-- #page -->

  <?php wp_footer(); ?>

  </body>
</html>
