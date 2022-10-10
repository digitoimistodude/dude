<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2022-04-23 15:20:10
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 11:31:41
 *
 * @package dude
 */

namespace Air_Light;

/**
 * Get Vimeo.com video thumbnail URL
 */
function get_vimeo_video_details( $video_id ) {
  $response = wp_remote_get( "https://vimeo.com/api/oembed.json?url=https://vimeo.com/{$video_id}" );

  if ( 200 !== wp_remote_retrieve_response_code( $response ) ) {
    return false;
  }

  $body = wp_remote_retrieve_body( $response );
  if ( empty( $body ) ) {
    return false;
  }

  $body = json_decode( $body );

  return $body;
} // end get_vimeo_video_details
