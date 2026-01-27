<?php
/**
 * The template for blog-latest block
 *
 * A block that shows latest blog posts.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-08-27 17:42:08
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $diamond_articles = get_field( 'diamond_articles' );
  $block_color = get_field( 'block_color' );

} else {
  $title = $args['title'];
  $diamond_articles = $args['diamond_articles'];
  $block_color = $args['block_color'];
}

$classes = [
  'block',
  'block-blog-latest',
  'is-single-block',
];

if ( ! empty( $block_color ) ) {
  $classes[] = 'block-background-' . esc_attr( $block_color );
}

if ( ! $diamond_articles ) {
  if ( ! isset( $args ) ) {
    $post_ids = get_field( 'post_ids' );

  } else {
    $post_ids = $args['post_ids'];
  }  
} elseif ( $diamond_articles ) {
  $diamond_article_ids = get_custom_setting( 'diamond_articles', 'diamond-articles' );

  if ( $diamond_article_ids ) {
    $post_ids = array_slice( $diamond_article_ids, 0, 3 );
  }
} else {
  $posts_query = new \WP_Query( [
    'post_type'       => 'post',
    'post_status'     => 'publish',
    'posts_per_page'  => 3,
    'fields'          => 'ids',
  ] );

    $post_ids = $posts_query->posts;
}

?>

<section class="<?php echo esc_attr( join( ' ', $classes ) ) ?>">
  <div class="container">

    <h2>
      <?php echo esc_html( $title ); ?>
    </h2>

    <div class="cols">
      <?php foreach ( $post_ids as $post_id ) {
        get_template_part( 'template-parts/loops/post-block', null, [ 'post_id' => $post_id ] );
      } ?>
    </div>

    <p class="button-wrapper">
      <a class="button button-large" href="<?php echo esc_url( get_the_permalink( get_option( 'page_for_posts' ) ) ); ?>">
        <?php ask_e( 'Blogi: Siirry blogiin' ); ?>
      </a>
    </p>

  </div>
</section>
