<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2022-04-23 15:45:23
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-03 14:50:21
 * @package dude
 */

namespace Air_Light;

$data = [
  'thumbnail_id'  => get_post_thumbnail_id( $args['post_id'] ),
  'permalink'     => get_the_permalink( $args['post_id'] ),
  'title'         => get_the_title( $args['post_id'] ),
  'desc'          => get_post_meta( $args['post_id'], 'short_desc', true ),
  'meta_tags'     => wp_get_post_terms( $args['post_id'], 'reference-category' ),
];

?>

<div class="col col-reference">

  <a class="global-link" href="<?php echo esc_url( $data['permalink'] ) ?>" aria-hidden="true" tabindex="-1"></a>

  <div class="image image-background has-duotone" aria-hidden="true">
    <?php native_lazyload_tag( $data['thumbnail_id'] ) ?>
  </div>

  <h3 class="has-text-gradient">
    <a href="<?php echo esc_url( $data['permalink'] ) ?>">
      <?php echo esc_html( $data['title'] );

      if ( ! empty( $data['desc'] ) ) {
        echo ' &ndash; ' . esc_attr( $data['desc'] );
      } ?>
    </a>
  </h3>

  <?php if ( ! empty( $data['meta_tags'] ) ) : ?>
    <ul class="meta-tags">
      <?php foreach ( $data['meta_tags'] as $tag ) : ?>
        <li><?php echo esc_html( mb_strtolower( $tag->name ) ) ?></li>
      <?php endforeach; ?>
    </ul>
  <?php endif; ?>

</div>
