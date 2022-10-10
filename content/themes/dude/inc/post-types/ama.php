<?php
/**
 * @Author: Niku Hietanen
 * @Date: 2020-02-18 15:06:45
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 14:27:12
 *
 * @package dude
 */

namespace Air_Light;

/**
 * Registers the Your Post Type post type.
 */
class AMA extends Post_Type {

  public function register() {

    // Modify all the i18ized strings here.
    $generated_labels = [
      'name'               => _x( 'Ama-kysymykset', 'post type general name', 'dude' ),
      'singular_name'      => _x( 'Ama-kysymys', 'post type singular name', 'dude' ),
      'menu_name'          => _x( 'Ama', 'admin menu', 'dude' ),
      'name_admin_bar'     => _x( 'Ama-kysymys', 'add new on admin bar', 'dude' ),
      'add_new'            => _x( 'Lisää Ama-kysymys', 'example', 'dude' ),
      'add_new_item'       => __( 'Lisää uusi Ama-kysymys', 'dude' ),
      'new_item'           => __( 'Uusi Ama-kysymys', 'dude' ),
      'edit_item'          => __( 'Muokkaa Ama-kysymystä', 'dude' ),
      'view_item'          => __( 'Katsele Ama-kysymystä', 'dude' ),
      'all_items'          => __( 'Kaikki Ama-kysymykset', 'dude' ),
      'search_items'       => __( 'Etsi Ama-kysymyksiä', 'dude' ),
      'parent_item_colon'  => __( 'Tyypin isäntä:', 'dude' ),
      'not_found'          => __( 'Ama-kysymyksiä ei löytynyt.', 'dude' ),
      'not_found_in_trash' => __( 'Ama-kysymyksiä ei löytynyt roskista.', 'dude' ),
    ];

    // Definition of the post type arguments. For full list see:
    // http://codex.wordpress.org/Function_Reference/register_post_type
    $args = [
      'labels'             => $generated_labels,
      'public'             => false,
      'publicly_queryable' => false,
      'show_ui'            => true,
      'show_in_menu'       => true,
      'query_var'          => false,
      'capability_type'    => 'post',
      'has_archive'        => false,
      'hierarchical'       => false,
      'menu_position'      => null,
      'show_in_rest'       => true,
      'menu_icon'          => 'dashicons-admin-comments',
      'supports'           => [ 'title', 'editor', 'revisions' ],
    ];

    $this->register_wp_post_type( $this->slug, $args );
  }
}
