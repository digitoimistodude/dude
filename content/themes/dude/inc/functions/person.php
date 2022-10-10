<?php
/**
 * @Author:		Elias Kautto
 * @Date:   		2022-06-23 14:33:04
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-04 10:50:55
 *
 * @package dude
 */

namespace Air_Light;

function get_person_id_by_email( $email ) {
  if ( empty( $email ) ) {
    return false;
  }

  $user = get_user_by( 'email', $email );
  if ( ! $user ) {
    return false;
  }

  $person_query = new \WP_Query( [
    'post_type'      => 'person',
    'status'         => 'publish',
    'meta_key'       => 'email', // phpcs:ignore WordPress.DB.SlowDBQuery
    'meta_value'     => $user->data->user_email, // phpcs:ignore WordPress.DB.SlowDBQuery
    'fields'         => 'ids',
    'posts_per_page' => 1,
  ] );

  if ( ! $person_query->have_posts() ) {
    return false;
  }

  return reset( $person_query->posts );
} // end get_person_id_by_email
