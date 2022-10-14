<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2022-04-23 15:45:23
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-14 11:14:52
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

$picture_cdn_args = [
  'width'   => '635',
  'height'  => '635',
];

$picture_cdn_srcset = [
  220 => [
    'width'     => '450',
    'height'    => '450',
  ],
  600 => [
    'width'     => '678',
    'height'    => '678',
  ],
  760 => [
    'width'     => '500',
    'height'    => '500',
  ],
  1460 => [
    'width'     => '591',
    'height'    => '591',
  ],
  1590 => [
    'width'     => '635',
    'height'    => '635',
  ],
];

$key = null;
if ( isset( $args['key'] ) ) {
  $key = $args['key'];
}

// :nth-of-type(2n)
if ( ( $key % 2 ) !== 0 ) {
  $picture_cdn_args = [
    'width'   => '635',
    'height'  => '741',
  ];

  $picture_cdn_srcset = [
    220 => [
      'width'     => '450',
      'height'    => '450',
    ],
    600 => [
      'width'     => '678',
      'height'    => '678',
    ],
    1349 => [
      'width'     => '500',
      'height'    => '500',
    ],
    760 => [
      'width'     => '635',
      'height'    => '741',
    ],
  ];
}
?>

<div class="col col-reference">

  <a class="global-link" href="<?php echo esc_url( $data['permalink'] ) ?>" aria-hidden="true" tabindex="-1"></a>

  <div class="image image-background has-duotone">
    <?php get_picture_element_with_cfcdn( $data['thumbnail_id'], $picture_cdn_args, $picture_cdn_srcset ); ?>
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
