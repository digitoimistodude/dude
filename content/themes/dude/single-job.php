<?php
/**
 * The template for single-person
 *
 * Description of the file called
 * single-person.
 *
 * @Author:		Tuomas Marttila
 * @Date:   		2022-06-16 13:42:57
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-08-15 17:03:44
 *
 * @package dude
 */

the_post();

get_header(); ?>

<main class="site-main">

  <?php get_template_part( 'template-parts/blocks/hero-jobs', null ) ?>
  <?php the_content();

  do_action( 'dude_site_main_after_content' ); ?>
        
</main>

<?php get_footer();
