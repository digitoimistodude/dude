<?php
/**
 * Video-autoplay block
 *
 * Description of your block called "video-autoplay" goes here.
 *
 * @package dude
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */

namespace Air_Light;

// Fields
$vimeo_url = get_field( 'vimeo_url' );

// Get VIMEO_TOKEN from .env
$vimeo_token = getenv( 'VIMEO_TOKEN' );

// Get video ID
$video_id = get_vimeo_id( $vimeo_url );

// Get video data from Vimeo API
$video_data = wp_remote_get( 'https://api.vimeo.com/videos/' . $video_id, [
  'headers' => [
    'Authorization' => 'Bearer ' . $vimeo_token,
  ],
] );

// If API request fails, use default 1920 x 1080
if ( is_wp_error( $video_data ) ) {
  $video_width = 1920;
  $video_height = 1080;
} else {
  $video_data = json_decode( wp_remote_retrieve_body( $video_data ) );
  $video_width = $video_data->width;
  $video_height = $video_data->height;
}

// The actual URL
$player_embed_url = 'https://player.vimeo.com/video/' . $video_id;

// Make it loop and autoplay
$player_embed_url = add_query_arg( [
  'title' => 0,
  'portrait' => 0,
  'muted' => 1,
  'autoplay' => 1,
  'byline' => 0,
  'controls' => 0,
  'background' => 1,
  'dnt' => 1,
  'loop' => 1,
  'autopause' => 0,
], $player_embed_url );
?>

<section class="block block-video-autoplay">
  <iframe class="reference-iframe" src="<?php echo esc_url( $player_embed_url ); ?>" width="<?php echo esc_attr( $video_width ); ?>" height="<?php echo esc_attr( $video_height ); ?>" allow="autoplay; fullscreen" style="border:0;"></iframe>
</section>
