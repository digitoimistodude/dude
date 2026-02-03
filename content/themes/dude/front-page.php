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
  <?php the_content();

  do_action( 'dude_site_main_after_content' );
  ?>
</main>

<?php get_footer();
