<?php
/**
 * @Author:		Elias Kautto
 * @Date:   		2022-06-13 13:25:15
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 11:31:48
 *
 * @package dude
 */

namespace Air_Light;

function set_block_color_values( $field ) {
  if ( 'button_group' === $field['type'] ) {
    $field['choices'] = THEME_SETTINGS['block_colors'];
  }

  return $field;
} // end set_block_color_values
