<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2022-04-23 17:32:22
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-09-08 17:33:06
 *
 * @package dude
 */

namespace Air_Light;

$data = [
  'title'         => get_the_title( $args['post_id'] ),
  'thumbnail_id'  => get_post_thumbnail_id( $args['post_id'] ),
  'permalink'     => get_the_permalink( $args['post_id'] ),
  'date'          => get_the_date( null, $args['post_id'] ),
  'rawdate'       => get_the_date( 'c', $args['post_id'] ),
  'post_id'       => $args['post_id'],
];
?>

<div class="h-entry col col-post">
  <a class="global-link" href="<?php echo esc_url( $data['permalink'] ) ?>" aria-hidden="true" tabindex="-1"></a>
  <div class="h-entry-content">
    <div class="image image-background has-duotone" aria-hidden="true">
      <?php native_lazyload_tag( $data['thumbnail_id'] ) ?>
      <span aria-hidden="true">Lue kirjoitus</span>

      <?php
      $video_bg = get_post_meta( $data['post_id'], 'article_video', true );
      if ( $video_bg ) : ?>
        <div class="vimeo-iframe-wrapper vimeo-iframe-wrapper-upsell">
          <iframe src="https://player.vimeo.com/video/<?php echo str_replace( array( 'http:', 'https:', 'vimeo.com', '/' ), '', $video_bg ); // phpcs:ignore ?>?background=1&autoplay=1&loop=1&byline=0&title=0"
            frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>
          </iframe>
        </div>
      <?php endif; ?>
    </div>

    <h3 class="has-text-gradient">
      <a class="p-name" href="<?php echo esc_url( $data['permalink'] ) ?>">
        <?php echo esc_html( $data['title'] ); ?>
      </a>
    </h3>

    <p class="meta meta-date">
      <time class="dt-published has-text-gradient" datetime="<?php echo esc_html( $data['rawdate'] ); ?>">
        <?php echo esc_html( $data['date'] ); ?>
      </time>
    </p>
  </div>
</div>
