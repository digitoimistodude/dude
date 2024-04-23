<?php
/**
 * The template for index
 *
 * Description of the file called
 * index.
 *
 * @Author:		Tuomas Marttila
 * @Date:   		2022-05-27 10:27:39
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-07-29 12:18:06
 *
 * @package dude
 */

namespace Air_Light;

$items = [];
while ( have_posts() ) {
  the_post();

  $items[] = [
    'post_id' => get_the_id(),
  ];
}

$picture_cdn_args = [
  'width'     => '732',
  'height'    => '628',
];

$picture_cdn_srcset = [
  220 => [
    'width'     => '435',
    'height'    => '245',
  ],
  700 => [
    'width'     => '732',
    'height'    => '628',
  ],
  1590 => [
    'width'     => '732',
    'height'    => '628',
  ],
];

// Video post thumbnail for testing
// $video_post_id = 5776;
$featured_post = $items[0];

get_header(); ?>

<main class="site-main">
  <?php if ( is_home() && ! is_paged() ) : ?>
    <section class="block block-blog-hero">
      <div class="container">
        <h1 id="content" class="has-transition-fade">Tarinoita Dudelta</h1>
        <p class="has-transition-fade">Duden blogi sisältää tekijöiden ajatuksia WordPressistä, verkkosivujen suunnittelusta ja kaikkea siltä väliltä.</p>
      </div>
    </section>

    <section class="block block-blog-upsell">
      <div class="container">
        <div class="cols has-transition-fade">
          <div class="col col-image">
            <a href="<?php echo esc_url( get_the_permalink( $featured_post['post_id'] ) ) ?>" class="global-link" tabindex="-1" aria-hidden="true"></a>
            <div class="image image-background">
              <?php get_picture_element_with_cfcdn( get_post_thumbnail_id( $featured_post['post_id'] ), $picture_cdn_args, $picture_cdn_srcset );
              $video_bg = get_post_meta( $featured_post['post_id'], 'article_video', true );
              if ( $video_bg ) : ?>
                <div class="vimeo-iframe-wrapper vimeo-iframe-wrapper-upsell">
                  <iframe src="https://player.vimeo.com/video/<?php echo str_replace( array( 'http:', 'https:', 'vimeo.com', '/' ), '', $video_bg ); // phpcs:ignore ?>?background=1&autoplay=1&loop=1&byline=0&title=0"
                    frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
                  </iframe>
                </div>
              <?php endif; ?>
            </div>
          </div>

          <div class="col col-content">
            <a href="<?php echo esc_url( get_the_permalink( $featured_post['post_id'] ) ) ?>" class="global-link" tabindex="-1" aria-hidden="true"></a>
            <p class="date">
              <?php echo esc_html( ucfirst( wp_date( 'l', get_the_date( 'U' ) ) ) ) ?>na <?php echo esc_html( get_the_date( 'j.n.Y', $featured_post['post_id'] ) ) ?>
            </p>

            <h2>
              <a href="<?php echo esc_url( get_the_permalink( $featured_post['post_id'] ) ) ?>">
                <?php echo esc_html( get_the_title( $featured_post['post_id'] ) ) ?>
              </a>
            </h2>

            <p>
              <?php echo esc_html( get_the_excerpt( $featured_post['post_id'] ) ) ?>
            </p>
          </div>
        </div>
      </div>
    </section>
  <?php endif; ?>

  <section class="block block-blog-latest block-blog block-blog-archive<?php if ( is_archive() || is_paged() ) : ?> is-archive<?php endif; ?>">
    <div class="container">

      <header class="archive-head block-head<?php if ( is_category() || is_tag() || is_author() || is_date() ) : ?> block-head-archive<?php endif; ?>">
        <?php if ( is_tag() ) : ?>
          <h1 class="block-title block-title-archive" id="block-title-block-blog"><?php echo single_tag_title(); ?></h1>
        <?php elseif ( is_category() ) : ?>
          <h1 class="block-title block-title-archive" id="block-title-block-blog"><?php echo single_cat_title(); ?></h1>
        <?php elseif ( is_day() ) : ?>
          <h1 class="block-title block-title-archive" id="block-title-block-blog"><?php echo esc_attr( ucfirst( date_i18n( 'l', get_the_time( 'U' ) ) ) ) ?>, <?php the_time( 'j.' ) ?> <?php the_time( 'F' ) ?>ta <?php the_time( 'Y' ) ?></h1>
        <?php elseif ( is_month() ) : ?>
          <h1 class="block-title block-title-archive" id="block-title-block-blog"><?php echo esc_attr( ucfirst( date_i18n( 'F', get_the_time( 'U' ) ) ) ) ?>, <?php the_time( 'Y' ) ?></h1>
        <?php elseif ( is_year() ) : ?>
          <h1 class="block-title block-title-archive" id="block-title-block-blog"><?php the_time( 'Y' ); ?></h1>
        <?php elseif ( is_search() ) : ?>
          <h1 class="block-title block-title-archive" id="block-title-block-blog"><?php $cat = get_the_category(); $cat = $cat[0]; echo esc_attr( $cat->category_count ); ?> löytyi</h1>
        <?php elseif ( is_author() ) : ?>
          <h1 class="block-title block-title-archive" id="block-title-block-blog"><?php echo get_the_author(); ?></h1>
        <?php elseif ( is_paged() ) : ?>
          <h1 class="block-title block-title-archive">Vanhemmat kirjoitukset</h1>
        <?php else : ?>
          <h2 class="block-title block-title-archive">Uusimmat kirjoitukset</h2>
        <?php endif; ?>

        <p class="filter-label">Selaa kirjoituksia aiheittain</p>
          <ul class="archive-filters filter-category">
            <?php wp_list_categories( [
              'title_li'  => null,
              'orderby'   => 'order',
            ] ); ?>
          </ul>
      </header>

      <div class="cols cols-3">
        <?php foreach ( $items as $item ) {
          get_template_part( 'template-parts/loops/post', null, [ 'post_id' => $item['post_id'] ] );
        } ?>
      </div>

    <?php the_posts_pagination(); ?>

    </div>
  </section>

</main>

<?php get_footer();
