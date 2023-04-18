<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2022-04-23 15:45:23
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-04-18 15:46:05
 * @package dude
 */

namespace Air_Light;

$data = [
  'thumbnail_id'    => get_post_thumbnail_id( $args['post_id'] ),
  'permalink'       => get_the_permalink( $args['post_id'] ),
  'title'           => get_the_title( $args['post_id'] ),
  'desc'            => get_post_meta( $args['post_id'], 'short_desc', true ),
  'meta_tags'       => wp_get_post_terms( $args['post_id'], 'reference-category' ),
  'vimeo_video_url' => get_post_meta( $args['post_id'], 'vimeo_video_url', true ),
  'vimeo_video_url_nosubs' => get_post_meta( $args['post_id'], 'vimeo_video_url_nosubs', true ),
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

<div class="col col-reference">

  <a class="global-link" href="<?php echo esc_url( $data['permalink'] ) ?>" aria-hidden="true" tabindex="-1"></a>

  <div class="image image-background has-duotone<?php if ( ! empty( $data['vimeo_video_url'] ) ) echo ' has-video'; ?>">

    <?php
    // If there is a vimeo video url, play the video in video bg instead of image
    if ( ! empty( $data['vimeo_video_url'] ) ) :
      $vimeo_id = get_vimeo_id( $data['vimeo_video_url'] );
      $vimeo_id_nosubs = get_vimeo_id( $data['vimeo_video_url_nosubs'] );
    ?>

      <div class="video js-video wp-has-aspect-ratio" data-video="<?php echo esc_html( $vimeo_id_nosubs ); ?>">
        <div class="vimeo-player" data-video-id="<?php echo esc_html( $vimeo_id_nosubs ); ?>" data-play-button="play-<?php echo esc_html( $vimeo_id ); ?>" id="<?php echo esc_html( $vimeo_id ); ?>"></div>
        <div class="video-preview js-video-preview">
          <?php get_picture_element_with_cfcdn( $data['thumbnail_id'], $picture_cdn_args, $picture_cdn_srcset ); ?>
        </div>

        <div>
          <button class="play" id="play-<?php echo esc_html( $vimeo_id ); ?>" type="button">
            Katso asiakastarina
          </button>
        </div>

      </div>

    <?php else :
      get_picture_element_with_cfcdn( $data['thumbnail_id'], $picture_cdn_args, $picture_cdn_srcset );
    endif; ?>

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
