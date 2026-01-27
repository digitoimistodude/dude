<?php
/**
 * The template for persons
 *
 * Staff area.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2024-03-22 15:02:30
 *
 * @package dude
 */

namespace Air_Light;

// Fields
$title = get_field( 'title' );
$content = get_field( 'content' );
$persons = get_field( 'persons' );

if ( empty( $persons ) && is_singular( 'person' ) ) {
  $person_query = new \WP_Query( [
    'post_type'      => 'person',
    'status'         => 'publish',
    'fields'         => 'ids',
    'posts_per_page' => 100,
    'post__not_in'        => [ get_the_ID() ],
  ] );

  if ( $person_query->have_posts() ) {
    $persons = $person_query->posts;

    while ( $person_query->have_posts() ) {
      $person_query->the_post();
      $persons[] = [
       'person_id' => get_the_ID(),
      ];
    }
  }
}

// Data
$persons_data = [];

foreach ( $persons as $person ) {

  if ( ! $person['person_id'] ) {
    continue;
  }

  $person_tmp = [
    'permalink'  => get_the_permalink( $person['person_id'] ),
    'name'       => get_the_title( $person['person_id'] ),
    'image'      => get_post_thumbnail_id( $person['person_id'] ),
    'title'      => get_post_meta( $person['person_id'], 'title', true ),
    'email'      => get_post_meta( $person['person_id'], 'email', true ),
    'phone'      => get_post_meta( $person['person_id'], 'tel', true ),
    'show_phone' => $person['show_phone'],
  ];

  $social_media_count = get_post_meta( $person['person_id'], 'social_media', true );
  for ( $i = 0; $i < $social_media_count; $i++ ) {
    $person_tmp['social_media'][] = [
      'name' => get_post_meta( $person['person_id'], "social_media_{$i}_name", true ),
      'value' => get_post_meta( $person['person_id'], "social_media_{$i}_value", true ),
    ];
  }

  if ( empty( $person_tmp['name'] ) || empty( $person_tmp['image'] ) ) {
    continue;
  }

  $persons_data[] = $person_tmp;
}

?>

<section class="block block-persons has-unified-padding-if-stacked">
  <div class="container">

    <?php if ( ! empty( $title || $content ) ) : ?>
      <div class="title-content">
        <h2>
          <?php echo esc_html( $title ); ?>
        </h2>
        <div class="content">
          <?php echo wp_kses_post( wpautop( $content ) ) ?>
        </div>
      </div>
    <?php endif; ?>

    <div class="cols cols-persons">
      <?php foreach ( $persons_data as $person ) : ?>

        <div class="col col-person">
          <div class="image-wrapper">
            <?php native_lazyload_tag( $person['image'] ) ?>
            <a href="<?php echo esc_url( $person['permalink'] ); ?>" class="global-link" tabindex="-1" aria-hidden="true"></a>
          </div>

          <div class="content">
            <h3>
              <a href="<?php echo esc_url( $person['permalink'] ); ?>">
                <?php echo esc_html( $person['name'] ); ?>
              </a>
            </h3>

            <?php if ( ! empty( $person['title'] ) ) : ?>
              <p><?php echo esc_html( $person['title'] ) ?></p>
            <?php endif;

            if ( ! empty( $person['email'] ) ) : ?>
              <p>
                <a href="mailto:<?php echo esc_attr( $person['email'] ) ?>">
                  <?php echo esc_html( $person['email'] ) ?>
                </a>
              </p>
            <?php endif;

            if ( ! empty( $person['phone'] ) && $person['show_phone'] ) : ?>
              <p>
                <a href="tel:<?php echo esc_attr( $person['phone'] ) ?>">
                  <?php echo esc_html( $person['phone'] ) ?>
                </a>
              </p>
            <?php endif;

            if ( isset( $person['social_media'] ) && ! empty( $person['social_media'] ) ) : ?>
              <ul class="social-media">
                <?php foreach ( $person['social_media'] as $social ) : ?>
                  <li>
                    <a href="<?php echo esc_url( $social['value'] ) ?>" class="no-external-link-indicator">
                      <?php include get_theme_file_path( 'assets/svg/social/' . strtolower( str_replace( '.', '-', $social['name'] ) ) . '.svg' ) ?>
                      <span class="screen-reader-text-dude">
                        <?php echo esc_html( $social['name'] ) ?>
                      </span>
                    </a>
                  </li>
                <?php endforeach; ?>
              </ul>
            <?php endif; ?>

          </div>
        </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>
