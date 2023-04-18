<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2022-04-23 15:45:23
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-04-18 18:11:51
 * @package dude
 */

namespace Air_Light;

$data = [
  'thumbnail_id'          => get_post_thumbnail_id( $args['post_id'] ),
  'permalink'             => get_the_permalink( $args['post_id'] ),
  'title'                 => get_the_title( $args['post_id'] ),
  'desc'                  => get_post_meta( $args['post_id'], 'short_desc', true ),
  'meta_tags'             => wp_get_post_terms( $args['post_id'], 'reference-category' ),
  'vimeo_video_url'       => get_post_meta( $args['post_id'], 'vimeo_video_url', true ),
];

$picture_cdn_args = [
  'width'   => '635',
  'height'  => '635',
];

$picture_cdn_srcset = [
  220 => [
    'width'     => '435',
    'height'    => '435',
  ],
  480 => [
    'width'     => '435',
    'height'    => '435',
  ],
  600 => [
    'width'     => '678',
    'height'    => '678',
  ],
  760 => [
    'width'     => '500',
    'height'    => '500',
  ],
  1000 => [
    'width'     => '596',
    'height'    => '596',
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
      'width'     => '435',
      'height'    => '508',
    ],
    480 => [
      'width'     => '435',
      'height'    => '508',
    ],
    600 => [
      'width'     => '555',
      'height'    => '648',
    ],
    760 => [
      'width'     => '395',
      'height'    => '461',
    ],
    1000 => [
      'width'     => '542',
      'height'    => '632',
    ],
    1460 => [
      'width'     => '591',
      'height'    => '690',
    ],
    1590 => [
      'width'     => '635',
      'height'    => '741',
    ],
  ];
}
?>

<div class="col col-reference<?php if ( ! empty( $data['vimeo_video_url'] ) ) echo ' has-video'; ?>">

  <a class="global-link" href="<?php echo esc_url( $data['permalink'] ) ?>" aria-hidden="true" tabindex="-1"></a>

  <div class="image image-background<?php if ( empty( $data['vimeo_video_url'] ) ) echo ' has-duotone'; ?>">

    <?php
    // If there is a vimeo video url, play the video in video bg instead of image
    if ( ! empty( $data['vimeo_video_url'] ) ) :
      $vimeo_id = get_vimeo_id( $data['vimeo_video_url'] );
    ?>

      <div class="video js-video wp-has-aspect-ratio">
        <div class="vimeo-player" data-video-id="<?php echo esc_html( $vimeo_id ); ?>" data-play-button="play-<?php echo esc_html( $vimeo_id ); ?>" id="<?php echo esc_html( $vimeo_id ); ?>"></div>
        <div class="play-button-container">
          <button class="play-reference-video" id="play-<?php echo esc_html( $vimeo_id ); ?>" type="button">
            <span class="icon-wrapper" aria-hidden="true"><span class="icon"></span></span>
            <span class="play-label">Katso video</span>
          </button>
        </div>

      </div>
    <?php endif; ?>
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
