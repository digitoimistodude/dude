<?php
/**
 * @Author: Niku Hietanen
 * @Date: 2020-02-18 15:06:45
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-10 13:45:31
 *
 * @package dude
 */

namespace Air_Light;

/**
 * Registers the Your Post Type post type.
 */
class Reference extends Post_Type {

  public function register() {

    // Modify all the i18ized strings here.
    $labels = [
      'name'               => _x( 'Työt', 'post type general name', 'dude' ),
      'singular_name'      => _x( 'Työ', 'post type singular name', 'dude' ),
      'menu_name'          => _x( 'Työt', 'admin menu', 'dude' ),
      'name_admin_bar'     => _x( 'Työ', 'add new on admin bar', 'dude' ),
      'add_new'            => _x( 'Lisää uusi', 'example', 'dude' ),
      'add_new_item'       => __( 'Lisää uusi työ', 'dude' ),
      'new_item'           => __( 'Uusi työ', 'dude' ),
      'edit_item'          => __( 'Muokkaa työtä', 'dude' ),
      'view_item'          => __( 'Katsele työtä', 'dude' ),
      'all_items'          => __( 'Kaikki työt', 'dude' ),
      'search_items'       => __( 'Etsi töitä', 'dude' ),
      'parent_item_colon'  => __( 'Työn isäntä:', 'dude' ),
      'not_found'          => __( 'Töitä ei löytynyt.', 'dude' ),
      'not_found_in_trash' => __( 'Töitä ei löytynyt roskista.', 'dude' ),
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
      'menu_icon'          => 'dashicons-portfolio',
      'show_in_rest'       => true,
      'supports'           => [ 'title', 'editor', 'thumbnail', 'revisions', 'page-attributes' ],
      'rewrite'            => [
        'with_front'  => false,
        'slug'        => 'toitamme',
      ],
    ];

    $this->register_wp_post_type( $this->slug, $args );
  }
}
