<?php
/**
 * @Author:		Elias Kautto
 * @Date:   		2022-06-29 09:42:28
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 11:36:43
 *
 * @package dude
 */

namespace Air_Light;

function set_wpforms_forms_to_field( $field ) {
  $forms = [];
  $form_query = new \WP_Query( [
    'post_type'       => 'wpforms',
    'posts_per_page'  => 100,
  ] );

  if ( $form_query->have_posts() ) {
    while ( $form_query->have_posts() ) {
      $form_query->the_post();
      $forms[ get_the_ID() ] = get_the_title();
    }
  } wp_reset_postdata();

  $field['choices'] = $forms;

  return $field;
} // end set_wpforms_forms_to_field
