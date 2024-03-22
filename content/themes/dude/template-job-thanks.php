<?php
/**
 * Job application thank you page
 *
 * Template Name: Kiitos työhakemuksesta
 *
 * @Author:		Roni Laukkarinen
 * @Date:   	2024-03-22 15:22:55
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2024-03-22 15:22:59
 *
 * @package dude
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */

namespace Air_Light;

the_post();

get_header(); ?>

<main class="site-main">

  <section class="block block-hero block-hero-contact-thanks">

      <div class="mask" aria-hidden="true"></div>
      <div class="vimeo-iframe-wrapper vimeo-iframe-wrapper-oizo">
        <iframe data-no-lazy="1" id="video" src="https://player.vimeo.com/video/926259601?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1#t=24s&controls=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay; fullscreen"></iframe>
      </div>

    <div class="container">

      <div class="content">
        <h1 id="content">Kiitos hakemuksesta!</h1>

        <div class="hero-description">
          <p><a href="https://www.youtube.com/watch?v=Cs4r9dB6psE">Rekryosastomme</a> käsittelee hakemustasi parhaillaan ja palaa asiaan pian!</p>
        </div>

      </div>

    </div>
  </section>

  <?php the_content();

  do_action( 'dude_site_main_after_content' ); ?>
</main>

<?php get_footer();
