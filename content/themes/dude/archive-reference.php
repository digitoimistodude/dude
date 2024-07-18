<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2022-07-29 15:17:10
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-23 12:12:30
 * @package dude
 */

namespace Air_Light;

$reference_ids = [];
if ( have_posts() ) {
  while ( have_posts() ) {
    the_post();
    $reference_ids[] = get_the_id();
  }
}
wp_enqueue_script( 'video-player' );

get_header(); ?>

<main class="site-main archive-reference">

  <?php get_template_part( 'template-parts/blocks/hero-content-image', null, [
    'prefix'          => 'Töitämme',
    'title'           => 'Näistä olemme erityisen ylpeitä',
    'content'         => 'Olemme toteuttaneet monipuolisesti verkkopalveluita ja brändi-identiteettejä kaikenlaisille toimijoille.',
    'block_color'     => 'petrol',
    'image'           => null,
    'use_as_bg_image' => null,
  ] );

  get_template_part( 'template-parts/blocks/references', null, [
    'reference_ids' => $reference_ids,
    'title'         => 'Töitämme',
    'link'          => null,
    'show_logos'    => false,
    'show_title'    => false,
  ] ); ?>

</main>

<?php get_footer();
