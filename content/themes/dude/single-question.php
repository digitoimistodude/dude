<?php
/**
 * The template for single-question
 *
 * Description of the file called
 * single-question.
 *
 * @Author:		Tuomas Marttila
 * @Date:   		2022-06-23 14:50:40
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-07-29 12:21:48
 *
 * @package dude
 */
the_post();

$archive_link = get_post_type_archive_link( get_post_type() );

get_header(); ?>

 <main class="site-main">
  <section class="block block-single-question">
    <div class="container">

      <h1 id="content">
        <?php the_title() ?>
      </h1>

      <?php the_content(); ?>

      <p class="back-to-archive" style="margin-top: 4rem;">
        <a class="arrow-link" href="<?php echo esc_attr( $archive_link ) ?>">
          Kaikki kysymykset
          <span class="arrow-link-arrow"></span>
        </a>
      </p>

    </div>
  </section>
 </main>

 <?php get_footer();
