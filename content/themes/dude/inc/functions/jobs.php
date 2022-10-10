<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2022-08-27 14:04:39
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-08-27 14:10:16
 *
 * @package dude
 */

namespace Air_Light;

function get_open_jobs_count() {
  $cache_key = 'open-jobs-count';

  $open_jobs = wp_cache_get( $cache_key, 'theme' );
  if ( ! empty( $open_jobs ) ) {
    return $open_jobs;
  }

  $open_jobs = new \WP_Query( [
    'post_type'       => 'job',
    'posts_per_page'  => 100,
    'post_status'     => 'publish',
    'meta_key'        => 'filled', // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key
    'meta_value'      => '0', // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_value
    'fields'          => 'ids',
  ] );

  wp_cache_set( $cache_key, $open_jobs->found_posts, 'theme', MONTH_IN_SECONDS );

  return $open_jobs->found_posts;
} // end get_open_jobs_count
