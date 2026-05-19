<?php
/**
 * The template for displaying front page
 *
 * Contains the closing of the #content div and all content after.
 * Initial styles for front page template.
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-08-15 17:03:29
 *
 * @package dude
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */

namespace Air_Light;

get_header(); ?>

<main class="site-main">
  <div class="aurora-gradient-bg" aria-hidden="true">
    <?php include get_theme_file_path( 'assets/svg/aurora-gradient.svg' ); ?>
  </div>
  <?php the_content();

  do_action( 'dude_site_main_after_content' );
  ?>
</main>

<script>
  // Set aurora gradient height to cover everything up to the CTA block
  (function() {
    function setAuroraHeight() {
      var cta = document.querySelector('.block-cta-big');
      var aurora = document.querySelector('.aurora-gradient-bg');
      if (cta && aurora) {
        aurora.style.setProperty('--aurora-height', cta.offsetTop + 'px');
      }
    }
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setAuroraHeight);
    } else {
      setAuroraHeight();
    }
    window.addEventListener('resize', setAuroraHeight);
  })();
</script>

<?php get_footer();
