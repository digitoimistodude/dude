<?php
/**
 * Dark mode toggle.
 *
 * @Author: Roni Laukkarinen
 * @Date: 2022-02-20 13:46:50
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 11:33:46
 *
 * @package dude
 */

namespace Air_Light;

/**
* Add dark mode switch to top menu
*/
function add_dark_menu_switch( $items, $args ) {
  if ( 'primary' === $args->theme_location ) {
    // Button is generated via dark-mode-switch JS module
    $items .= '<li class="menu-item menu-item-dark-mode-switch" id="dark-mode-toggle"></li>';
  }

  return $items;
}// end add_dark_menu_switch
