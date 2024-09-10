<?php
/**
 * The template for video-autoplay
 *
 * Description of your block called "video-autoplay" goes here.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-02-10 12:28:36
 *
 * @package dude
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */

namespace Air_Light;

// Fields
$vimeo_url = get_field( 'vimeo_url' );

if ( empty( $vimeo_url ) ) {
  maybe_show_error_block( 'Vimeo URL -kenttää ei voi jättää tyhjäksi, lisää esim. https://vimeo.com/1000301382' );
  return;
}

// Get VIMEO_TOKEN from .env
$vimeo_token = getenv( 'VIMEO_TOKEN' );

// Get video width and height from https://api.vimeo.com/videos/<video>
$video_id = explode( '/', $vimeo_url )[3];

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
  $player_embed_url = 'https://player.vimeo.com/video/' . $video_id;
} else {
  $video_data = json_decode( wp_remote_retrieve_body( $video_data ) );
  $video_width = $video_data->width;
  $video_height = $video_data->height;
  $player_embed_url = $video_data->player_embed_url;
}
?>

<section class="block block-video-autoplay">
  <iframe class="reference-iframe" src="<?php echo esc_url( $player_embed_url ); ?>?autoplay=1&loop=1&muted=1&background=1" width="<?php echo esc_attr( $video_width ); ?>" height="<?php echo esc_attr( $video_height ); ?>" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</section>

