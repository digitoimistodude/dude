<?php
/**
 * 10v party thank you
 *
 * Template Name: 10v-juhlien kiitossivu
 *
 * @Author:		Roni Laukkarinen
 * @Date:   	2022-08-05 11:13:30
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-06-08 12:16:42
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
        <iframe data-no-lazy="1" id="video" src="https://player.vimeo.com/video/834335571?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1#t=173s&controls=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay; fullscreen"></iframe>
      </div>

    <div class="container">

      <div class="content">
        <h1 id="content">Kiitos ilmoittautumisesta!</h1>

        <div class="hero-description">
          <p>Nimesi on listalla. Jos tulee kysyttävää, pistä viestiä <a href="mailto:moro@dude.fi">moro@dude.fi</a>. Nähdään!</p>
        </div>

      </div>

    </div>
  </section>

  <?php the_content();

  do_action( 'dude_site_main_after_content' );
  ?>
</main>

<?php get_footer();
