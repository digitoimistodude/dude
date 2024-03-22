<?php
/**
 * The template for single-person
 *
 * Description of the file called
 * single-person.
 *
 * @Author:		Tuomas Marttila
 * @Date:   		2022-06-16 13:42:57
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-07-29 12:21:43
 *
 * @package dude
 */

the_post();

$current_person = null;
if ( is_singular( 'person' ) ) {
  $current_person = get_the_id();
}

// Current person data
$job_title = get_post_meta( $current_person, 'title', true );
$tel = get_post_meta( $current_person, 'tel', true );
$email = get_post_meta( $current_person, 'email', true );
$social = get_field( 'social_media' );

$social_media_count = get_post_meta( $current_person, 'social_media', true );
for ( $i = 0; $i < $social_media_count; $i++ ) {
  $social_media[] = [
    'name' => get_post_meta( $current_person, "social_media_${i}_name", true ),
    'value' => get_post_meta( $current_person, "social_media_${i}_value", true ),
  ];
}

// Get other person data
$person_query = new \WP_Query( [
  'post_type'               => 'person',
  'post_status'             => 'publish',
  'order'                   => 'ASC',
  'orderby'                 => 'menu_order',
  'post__not_in'            => [ $current_person ],
  'posts_per_page'          => 100,
  'no_found_rows'           => true,
  'cache_results'           => true,
  'update_post_term_cache'  => false,
  'update_post_meta_cache'  => false,
] );

$person_ids = [];
if ( $person_query->have_posts() ) {
  $person_ids = wp_list_pluck( $person_query->posts, 'ID' );
}

$persons = [];
foreach ( $person_ids as $person_id ) {
  $persons[] = [
    'person_id' => $person_id,
    'show_phone' => false,
    'posts_per_page' => 100,
  ];
}; // phpcs:ignore

$args = [
  'persons' => $persons,
  'title' => 'Katso myös muut dudet',
  'posts_per_page' => 100,
];

get_header(); ?>

<main class="site-main">

  <section class="block block-single-person has-unified-padding-if-stacked">
    <div class="container">

      <div class="content">
        <p id="content" class="prefix" aria-describedby="block-title-job-title">
          <?php echo esc_html( $job_title ) ?>
        </p>

        <h1 id="block-title-job-title">
          <?php the_title() ?>
        </h1>

        <?php the_content(); ?>

        <p class="contact">
          <a class="contact-detail" href="mailto:<?php echo esc_attr( $email ) ?>"><?php echo esc_html( $email ) ?></a>
          <?php if ( ! empty( $tel ) ) : ?>
            <br/><a class="contact-detail" href="tel:<?php echo esc_attr( str_replace( ' ', '', $tel ) ) ?>"><?php echo esc_html( $tel ) ?></a>
          <?php endif; ?>
        </p>

        <ul class="social-media">
          <?php foreach ( $social_media as $social ) : ?>
            <li>
              <a<?php if ( 'mastodon' === strtolower( $social['name'] ) ) echo ' rel="me"'; ?> href="<?php echo esc_url( $social['value'] ) ?>" class="no-external-link-indicator">
                <?php include get_theme_file_path( 'svg/social/' . strtolower( str_replace( '.', '-', $social['name'] ) ) . '.svg' ) ?>
                <span class="screen-reader-text-dude">
                  <?php echo esc_html( $social['name'] ) ?>
                </span>
              </a>
            </li>
          <?php endforeach; ?>
        </ul>
      </div>

      <div class="image-wrapper">
        <?php native_lazyload_tag( get_post_thumbnail_id( $post->ID ) ) ?>
      </div>

    </div>
  </section>

  <?php get_template_part( 'template-parts/blocks/persons', null, $args ); ?>

</main>

<?php get_footer();
