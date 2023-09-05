<?php
/**
 * Template for header
 *
 * <head> section and everything up until <div id="content">
 *
 * @Author: Roni Laukkarinen
 * @Date: 2020-05-11 13:17:32
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-02-15 16:39:31
 *
 * @package dude
 *
 * phpcs:disable WordPress.WP.EnqueuedResources
 */

namespace Air_Light;

/**
 * !!! HUOMIO !!!
 *
 * Jos meinaat lisätä tänne analytiikkaskriptejä tai muuta ulkopuolista
 * koodia, teeppä se mieluummin inc/hooks/analytics.php tiedostoon.
 *
 * !!! HUOMIO !!!
 */

$salesperson_id = get_custom_setting( 'salesperson', 'general' );
$sales_phone = get_post_meta( $salesperson_id, 'tel', true );
$sales_phone_tel_value = preg_replace( '/\s+/', '', $sales_phone );

$body_class = [ 'no-js' ];
$navigation_color = get_post_meta( get_the_id(), 'color', true );

if ( 'dark' === $navigation_color && ! is_archive() ) {
  $body_class[] = 'has-dark-navigation';
}

if ( 'light' === $navigation_color && ! is_archive() ) {
  $body_class[] = 'has-light-navigation';
}

if ( is_singular( 'job' ) && '1' === get_post_meta( get_the_ID(), 'filled', true ) ) {
  $body_class[] = 'job-filled';
}
?>

<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="facebook-domain-verification" content="x7eavmx0oavfz2pm9ad0rqi5egt1zw" />
  <link rel="profile" href="http://gmpg.org/xfn/11">
  <link rel="icon" href="<?php echo esc_html( get_template_directory_uri() ); ?>/svg/dynamic-favicon.svg">

  <?php wp_head();

  if ( 16399 === get_the_id() ) : ?>
    <style>
      .wp-block-gallery.has-nested-images figcaption {
        margin: 0 auto;
        flex: 0 0 100%;
      }

      .wp-block-gallery.has-nested-images figure.width-100 {
        width: 100% !important;
      }
    </style>
  <?php endif; ?>
</head>

<body <?php body_class( $body_class ); // The following style margin needed for Autoptimize ?> style="margin: 0 !important;">
  <a class="skip-link screen-reader-text-dude js-trigger" href="#content"><?php echo esc_html( get_default_localization( 'Skip to content' ) ); ?></a>

  <?php wp_body_open(); ?>
  <div id="page" class="site" aria-live="polite">

    <div class="nav-container">
      <header class="site-header" id="site-header">

        <?php get_template_part( 'template-parts/header/branding' ); ?>

        <p class="site-phone">
          <a href="tel:<?php echo esc_html( str_replace( ' ', '', $sales_phone ) ); ?>">
            <?php include get_theme_file_path( '/svg/phone.svg' ); ?>
            <span>Kilauta</span>
          </a>
        </p>

        <?php get_template_part( 'template-parts/header/navigation' ); ?>

      </header>
    </div><!-- .nav-container -->

    <div class="site-content">
