<?php
/**
 * Singe reference.
 *
 * The template for single reference.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-08-13 09:47:34
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-11-09 14:32:17
 *
 * @package dude
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */

namespace Air_Light;

the_post();

$color_dark = get_post_meta( get_the_id(), 'brand_color', true );
$color_light = get_post_meta( get_the_id(), 'brand_color_light', true );
$color_background_block_dark = get_post_meta( get_the_id(), 'color_background_block', true );
$color_background_block_light = get_post_meta( get_the_id(), 'color_background_block_light', true );
$color_text_dark = get_post_meta( get_the_id(), 'brand_color_text', true );
$color_text_light = get_post_meta( get_the_id(), 'brand_color_text_light', true );
$color_official = get_post_meta( get_the_id(), 'brand_color_official', true );
$custom_css = get_post_meta( get_the_id(), 'custom_css', true );

// Get next references to bottom of the page
$reference_ids = wp_cache_get( get_the_id() . '_references', 'theme' );
if ( ! $reference_ids ) {
  $reference_query = new \WP_Query( [
    'post_type'               => 'reference',
    'post_status'             => 'publish',
    'orderby'                 => 'rand',
    'posts_per_page'          => 4,
    'meta_key'                => '_thumbnail_id', // phpcs:ignore
    'post__not_in'            => [ get_the_id() ],
    'date_query'              => [
      'after' => '-2 years',
    ],
    'no_found_rows'           => true,
    'cache_results'           => true,
    'update_post_term_cache'  => false,
    'update_post_meta_cache'  => false,
    'fields'                  => 'ids',
  ] );

  if ( $reference_query->have_posts() ) {
    $reference_ids = $reference_query->posts;
  }

  wp_reset_postdata();

  wp_cache_set( get_the_id() . '_references', $reference_ids, 'theme', DAY_IN_SECONDS );
}

get_header(); ?>

<main class="site-main">
  <style type="text/css">
    .block-reference-quote-short,
    .block-reference-quote-short span,
    .block-background-reference,
    body {
      --color-brand-reference-bg: <?php echo esc_attr( $color_light ) ?>;
      --color-brand-reference-text: <?php echo esc_attr( $color_text_light ) ?>;
      --color-brand-reference-official: <?php echo esc_attr( $color_official ) ?>;
    }

    .block {
      --color-background-block: <?php echo esc_attr( $color_background_block_light ) ?>;
    }

    @media (prefers-color-scheme: light) {
      .block-reference-quote-short,
      .block-reference-quote-short span,
      .block-background-reference,
      body {
        --color-brand-reference-bg: <?php echo esc_attr( $color_light ) ?>;
        --color-brand-reference-text: <?php echo esc_attr( $color_text_light ) ?>;
        --color-brand-reference-official: <?php echo esc_attr( $color_official ) ?>;
      }

      body[data-color-scheme="light"] .block,
      .block {
        --color-background-block: <?php echo esc_attr( $color_background_block_light ) ?>;
      }

      body[data-color-scheme="dark"],
      body[data-color-scheme="dark"] .block {
        --color-background-block: <?php echo esc_attr( $color_background_block_dark ) ?>;
      }

      body[data-color-scheme="light"] .block-reference-quote-short,
      body[data-color-scheme="light"] .block-reference-quote-short span,
      body[data-color-scheme="light"] .block-background-reference,
      body[data-color-scheme="light"] {
        --color-brand-reference-bg: <?php echo esc_attr( $color_light ) ?>;
        --color-brand-reference-text: <?php echo esc_attr( $color_text_light ) ?>;
        --color-brand-reference-official: <?php echo esc_attr( $color_official ) ?>;
      }

      body[data-color-scheme="dark"] .block-reference-quote-short,
      body[data-color-scheme="dark"] .block-reference-quote-short span,
      body[data-color-scheme="dark"] .block-background-reference,
      body[data-color-scheme="dark"] {
        --color-brand-reference-bg: <?php echo esc_attr( $color_dark ) ?>;
        --color-brand-reference-text: <?php echo esc_attr( $color_text_dark ) ?>;
        --color-brand-reference-official: <?php echo esc_attr( $color_official ) ?>;
      }
    }

    @media (prefers-color-scheme: dark) {
      .block-reference-quote-short,
      .block-reference-quote-short span,
      .block-background-reference,
      body {
        --color-brand-reference-bg: <?php echo esc_attr( $color_dark ) ?>;
        --color-brand-reference-text: <?php echo esc_attr( $color_text_dark ) ?>;
        --color-brand-reference-official: <?php echo esc_attr( $color_official ) ?>;
      }

      body[data-color-scheme="light"],
      body[data-color-scheme="light"] .block {
        --color-background-block: <?php echo esc_attr( $color_background_block_light ) ?>;
      }

      .block,
      body[data-color-scheme="dark"],
      body[data-color-scheme="dark"] .block {
        --color-background-block: <?php echo esc_attr( $color_background_block_dark ) ?>;
      }

      body[data-color-scheme="light"] .block-reference-quote-short,
      body[data-color-scheme="light"] .block-reference-quote-short span,
      body[data-color-scheme="light"] .block-background-reference,
      body[data-color-scheme="light"] {
        --color-brand-reference-bg: <?php echo esc_attr( $color_light ) ?>;
        --color-brand-reference-text: <?php echo esc_attr( $color_text_light ) ?>;
        --color-brand-reference-official: <?php echo esc_attr( $color_official ) ?>;
      }

      body[data-color-scheme="dark"] .block-reference-quote-short,
      body[data-color-scheme="dark"] .block-reference-quote-short span,
      body[data-color-scheme="dark"] .block-background-reference,
      body[data-color-scheme="dark"] {
        --color-brand-reference-bg: <?php echo esc_attr( $color_dark ) ?>;
        --color-brand-reference-text: <?php echo esc_attr( $color_text_dark ) ?>;
        --color-brand-reference-official: <?php echo esc_attr( $color_official ) ?>;
      }
    }

    <?php if ( $custom_css ) {
      echo $custom_css; // phpcs:ignore
    } ?>
  </style>

  <?php the_content();

  get_template_part( 'template-parts/blocks/references', null, [
    'reference_ids' => $reference_ids,
    'title'         => 'Katso myös nämä',
    'link'          => null,
    'show_logos'    => false,
    'show_title'    => true,
  ] );

  do_action( 'dude_site_main_after_content' ); ?>
</main>

<?php get_footer();
