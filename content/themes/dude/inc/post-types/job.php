<?php
/**
 * @Author:		Elias Kautto
 * @Date:   		2022-06-27 11:33:59
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 15:13:24
 *
 * @package dude
 */

namespace Air_Light;

/**
 * Registers the Your Post Type post type.
 */
class Job extends Post_Type {

  public function register() {

    // Modify all the i18ized strings here.
    $generated_labels = [
      'name'               => _x( 'Työpaikat', 'post type general name', 'dude' ),
      'singular_name'      => _x( 'Työpaikka', 'post type singular name', 'dude' ),
      'menu_name'          => _x( 'Työpaikat', 'admin menu', 'dude' ),
      'name_admin_bar'     => _x( 'Työpaikka', 'add new on admin bar', 'dude' ),
      'add_new'            => _x( 'Lisää työpaikka', 'example', 'dude' ),
      'add_new_item'       => __( 'Lisää uusi työpaikka', 'dude' ),
      'new_item'           => __( 'Uusi työpaikka', 'dude' ),
      'edit_item'          => __( 'Muokkaa työpaikkaa', 'dude' ),
      'view_item'          => __( 'Katsele työpaikkaa', 'dude' ),
      'all_items'          => __( 'Kaikki työpaikat', 'dude' ),
      'search_items'       => __( 'Etsi työpaikkoja', 'dude' ),
      'parent_item_colon'  => __( 'Tyypin isäntä:', 'dude' ),
      'not_found'          => __( 'Työpaikkoja ei löytynyt.', 'dude' ),
      'not_found_in_trash' => __( 'Työpaikkoja ei löytynyt roskista.', 'dude' ),
    ];

    // Definition of the post type arguments. For full list see:
    // http://codex.wordpress.org/Function_Reference/register_post_type
    $args = [
      'labels'             => $generated_labels,
      'public'             => true,
      'show_ui'            => true,
      'show_in_menu'       => true,
      'query_var'          => false,
      'has_archive'        => false,
      'hierarchical'       => false,
      'menu_position'      => null,
      'show_in_rest'       => true,
      'menu_icon'          => 'dashicons-hammer',
      'supports'           => [ 'title', 'editor', 'revisions', 'thumbnail' ],
      'rewrite'            => [
        'with_front'  => false,
        'slug'        => 'tyopaikat',
      ],
    ];

    $this->register_wp_post_type( $this->slug, $args );
  }
}
