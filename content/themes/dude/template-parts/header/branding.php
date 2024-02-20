<?php
/**
 * Site branding & logo
 *
 * Branding related stuff in the site header.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-09-13 13:10:11
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2024-02-19 13:47:45
 *
 * @package dude
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */

namespace Air_Light;

$description = get_bloginfo( 'description', 'display' );
?>

<div class="site-branding">

  <p class="site-title">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
      <span class="screen-reader-text-dude"><?php bloginfo( 'name' ); ?></span>
      <?php include get_theme_file_path( THEME_SETTINGS['logo'] ); ?>
    </a>
  </p>

  <?php if ( $description || is_customize_preview() ) : ?>
    <p class="site-description screen-reader-text">
      <?php echo esc_html( $description ); ?>
    </p>
  <?php endif; ?>

</div>

<p class="site-phone">
  <a href="tel:<?php echo esc_html( str_replace( ' ', '', $sales_phone ) ); ?>">
    <?php include get_theme_file_path( '/svg/phone.svg' ); ?>
    <span>Kilauta</span>
  </a>
</p>
