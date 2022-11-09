<?php
/**
 * The template for displaying all single posts
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-22 14:02:05
 *
 * @package dude
 */

namespace Air_Light;

the_post();

// Fields
$guest_post = get_field( 'guest_post' );
$guest_post_author = get_field( 'guest_post_author' );
$guest_post_author_description = get_field( 'guest_post_author_description' );
$guest_post_author_avatar = get_field( 'guest_post_author_avatar' );
$video_bg = get_post_meta( get_the_id(), 'article_video', true );

// Variables
$user_id = get_the_author_meta( 'ID' );
$author_person_id = get_person_id_by_email( get_the_author_meta( 'email' ) );
$now_year = wp_date( 'Y' );
$post_year = get_the_time( 'Y' );
$post_is_old = $post_year <= $now_year - 2;
$post_is_years_old = $now_year - $post_year;

if ( true === get_field( 'hide_old_box' ) ) {
  $post_is_old = false;
}

get_header(); ?>

<main class="site-main">

  <section class="block block-hero-single block-background-petrol-gradient<?php if ( $post_is_old ) : ?> is-old<?php endif; ?>">
    <div class="container">
      <div class="content">
        <p id="content" class="block-title-pre" aria-describedby="block-title-<?php echo esc_html( sanitize_title( get_the_title() ) ) ?>">
          <?php echo esc_html( ucfirst( wp_date( 'l', get_the_date( 'U' ) ) ) ) ?>na <?php echo esc_html( get_the_date( 'j.n.Y' ) ) ?>
        </p>

        <h1 id="block-title-<?php echo esc_html( sanitize_title( get_the_title() ) ) ?>">
          <?php the_title(); ?>
        </h1>

        <?php echo wp_kses_post( wpautop( the_excerpt() ) ) ?>
      </div>
    </div>

    <div class="image image-background-layer image-background<?php if ( $video_bg ) echo ' has-video'; ?>" aria-hidden="true">
      <?php native_lazyload_tag( get_post_thumbnail_id() ) ?>
      <?php if ( $video_bg ) : ?>
        <div class="vimeo-iframe-wrapper">
          <iframe src="https://player.vimeo.com/video/<?php echo esc_html( str_replace( array( 'http:', 'https:', 'vimeo.com', '/' ), '', $video_bg ) ) ?>?background=1&autoplay=1&loop=1&byline=0&title=0"
          frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      <?php endif; ?>
    </div>

    <?php if ( $post_is_old ) : ?>
      <div class="notification-box">
        <div class="box">
          <?php include get_theme_file_path( '/svg/info.svg' ); ?>
          <p>Tämä kirjoitus saattaa sisältää vanhentunutta tietoa, sillä se on julkaistu yli <?php echo esc_html( $post_is_years_old ); ?> vuotta sitten.</p>
        </div>
      </div>
    <?php endif; ?>
  </section>

  <section class="block block-single<?php if ( $post_is_old ) : ?> is-old<?php endif; ?>">
    <article class="article-content">

      <?php if ( true === $guest_post ) : ?>
        <div class="author-card">
          <p>
            <span class="author">
              <img src="<?php echo esc_url( wp_get_attachment_image_url( $guest_post_author_avatar, $size = 'thumbnail' ) ); ?>" class="avatar avatar-100" alt="<?php echo esc_html( $guest_post_author ); ?>">
              <span><span class="writtenby">Vieraskynän kirjoittanut</span> <?php echo esc_html( $guest_post_author ); ?></span>
            </span>
          </p>
        </div>
      <?php else : ?>
        <div class="author-card">
          <p>
            <a class="author" href="<?php echo esc_url( get_author_posts_url( $user_id ) ) ?>" rel="author">
              <?php echo get_avatar( $user_id, '100' ); ?>
              <span><span class="writtenby">Kirjoittanut</span> <?php echo esc_html( get_userdata( $user_id )->display_name ); ?></span>
            </a>
          </p>
        </div>
      <?php endif; ?>

      <?php the_content();

      if ( true === $guest_post ) : ?>
        <div class="guest-post-author-card">
          <?php native_lazyload_tag( $guest_post_author_avatar ) ?>

          <div class="guest-post-author-card-content">
            <h3><?php echo esc_html( $guest_post_author ); ?></h3>
            <?php echo wp_kses_post( wpautop( $guest_post_author_description ) ); ?>
          </div>
        </div>
      <?php endif;

      entry_footer();

      if ( get_edit_post_link() ) {
        edit_post_link( sprintf( wp_kses( __( 'Muokkaa artikkelia <span class="screen-reader-text-dude">%s</span>', 'dude' ), [ 'span' => [ 'class' => [] ] ] ), get_the_title() ), '<p class="edit-link">', '</p>' );
      } ?>

    </article>

    <?php if ( ! isset( $guest_post ) || false === $guest_post ) :
      if ( ! empty( $author_person_id ) && ( 'publish' === get_post_status( $author_person_id ) || 'draft' === get_post_status( $author_person_id ) ) ) :
        $author_image_big = get_post_thumbnail_id( $author_person_id );
        $author_job_title = get_post_meta( $author_person_id, 'title', true );
        $author_desc = get_post_meta( $author_person_id, 'short_desc_blog', true );
        ?>

        <div class="entry-author">
          <?php if ( ! empty( $author_image_big ) ) : ?>
            <?php native_lazyload_tag( $author_image_big ) ?>
          <?php endif; ?>

          <div class="author-info">
            <h3>
              <?php echo esc_html( get_the_title( $author_person_id ) ); ?>
            </h3>

            <?php if ( ! empty( $author_job_title ) ) : ?>
              <p class="job-title"><?php echo esc_html( $author_job_title ) ?></p>
            <?php endif;

            if ( ! empty( $author_desc ) ) : ?>
              <p class="person-description"><?php echo esc_html( $author_desc ) ?></p>
            <?php endif; ?>

            <p class="link-underlined-wrapper">
              <a class="link-underlined" href="<?php echo esc_url( get_the_permalink( $author_person_id ) ); ?>">Lue lisää</a>
            </p>
          </div>
        </div>
      <?php endif;
    endif; ?>

  </section>

  <?php if ( function_exists( 'relevanssi_the_related_posts' ) ) {
    relevanssi_the_related_posts();
  }

  do_action( 'dude_site_main_after_content' ); ?>

</main>

<?php get_footer();
