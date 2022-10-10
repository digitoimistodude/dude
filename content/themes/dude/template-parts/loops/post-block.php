<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2022-04-23 17:32:22
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-08-27 13:46:31
 *
 * @package dude
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */

namespace Air_Light;

$data = [
  'id'            => $args['post_id'],
  'title'         => get_the_title( $args['post_id'] ),
  'thumbnail_id'  => get_post_thumbnail_id( $args['post_id'] ),
  'permalink'     => get_the_permalink( $args['post_id'] ),
  'category'      => get_primary_category( $args['post_id'] ),
];
?>

<div class="h-entry col col-post col-post-block">
  <h3 class="has-text-gradient">
    <a class="p-name" href="<?php echo esc_url( $data['permalink'] ) ?>">
      <?php echo esc_html( $data['title'] ); ?>
    </a>
  </h3>

  <?php if ( ! empty( $data['category'] ) ) : ?>
    <p class="meta meta-category">
      <a href="<?php echo esc_url( get_category_link( $data['category'] ) ) ?>">
        <?php echo esc_html( $data['category']->name ) ?>
      </a>
    </p>
  <?php endif; ?>
</div>
