<?php
/**
 * @Author: Niku Hietanen
 * @Date: 2020-02-18 15:06:45
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 11:40:14
 *
 * @package dude
 */

namespace Air_Light;

/**
 * Registers the Your Post Type post type.
 */
class Person extends Post_Type {

  public function register() {

    // Modify all the i18ized strings here.
    $labels = [
      'name'               => _x( 'Tyypit', 'post type general name', 'dude' ),
      'singular_name'      => _x( 'Tyyppi', 'post type singular name', 'dude' ),
      'menu_name'          => _x( 'Tyypit', 'admin menu', 'dude' ),
      'name_admin_bar'     => _x( 'Tyyppi', 'add new on admin bar', 'dude' ),
      'add_new'            => _x( 'Lisää tyyppi', 'example', 'dude' ),
      'add_new_item'       => __( 'Lisää uusi tyyppi', 'dude' ),
      'new_item'           => __( 'Uusi tyyppi', 'dude' ),
      'edit_item'          => __( 'Muokkaa tyyppiä', 'dude' ),
      'view_item'          => __( 'Katsele tyyppiä', 'dude' ),
      'all_items'          => __( 'Kaikki tyypit', 'dude' ),
      'search_items'       => __( 'Etsi tyyppejä', 'dude' ),
      'parent_item_colon'  => __( 'Tyypin isäntä:', 'dude' ),
      'not_found'          => __( 'Tyyppejä ei löytynyt.', 'dude' ),
      'not_found_in_trash' => __( 'Tyyppejä ei löytynyt roskista.', 'dude' ),
    ];

    // Definition of the post type arguments. For full list see:
    // http://codex.wordpress.org/Function_Reference/register_post_type
    $args = [
      'labels'             => $labels,
      'public'             => true,
      'publicly_queryable' => true,
      'show_ui'            => true,
      'show_in_menu'       => true,
      'query_var'          => true,
      'capability_type'    => 'post',
      'has_archive'        => true,
      'hierarchical'       => false,
      'menu_position'      => null,
      'menu_icon'          => 'dashicons-nametag',
      'show_in_rest'       => true,
      'rewrite'             => [
        'with_front'  => false,
        'slug'        => 'dudet',
      ],
      'supports'            => [ 'title', 'editor', 'thumbnail', 'revisions', 'page-attributes' ],
      'taxonomies'          => [],
    ];

    $this->register_wp_post_type( $this->slug, $args );
  }
}
