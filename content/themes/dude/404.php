<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-05 18:33:36
 *
 * @package dude
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 */

namespace Air_Light;

get_header(); ?>

<div class="overlay overlay-scanline" aria-hidden="true"></div>
<div class="overlay overlay-vignette" aria-hidden="true"></div>

<main class="site-main">

  <section class="block block-error-404">
    <div class="container">
      <div class="content">

      <div class="hero-description">
        <h1 class="screen-reader-text-dude"><?php echo esc_html( get_default_localization( 'Page not found.' ) ); ?></h1>
        <p aria-hidden="true"><span class="dudefi">dude.fi</span></p>
        <p>Tapahtui virhe 404 kohdassa <?php echo esc_html( filter_input( INPUT_SERVER, 'REQUEST_URI' ) ); ?>. Etsimääsi sivua tai tiedostoa ei löydy, se on saatettu poistaa tai siirtää.</p>
        <p class="press-f5">Paina F5 jatkaaksesi <span class="blink" aria-hidden="true"></span></p>
      </div>

      </div>
    </div>
  </section>

</main>

<?php

// Enable visible footer if fits project:
get_footer();

// WordPress scripts and hooks
wp_footer();
