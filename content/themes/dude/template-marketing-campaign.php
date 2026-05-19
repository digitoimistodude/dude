<?php
/**
 * Template Name: Markkinontikampanja
 *
 * This template is dedicated to all kinds of marketng campaigns via forms.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   	2023-05-24 15:44:41
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-05-24 15:46:07
 *
 * @package dude
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

namespace Air_Light;

the_post();

get_header(); ?>

<main class="site-main">
  <?php the_content();

  do_action( 'dude_site_main_after_content' );
  ?>
</main>

<?php get_footer();
