<?php
/**
 * @Author: Niku Hietanen
 * @Date: 2020-02-18 15:06:45
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 11:40:17
 *
 * @package dude
 */

namespace Air_Light;

/**
 * Registers the Your Post Type post type.
 */
class Question extends Post_Type {

  public function register() {

    // Modify all the i18ized strings here.
    $labels = [
      'name'               => _x( 'Kysymykset', 'post type general name', 'dude' ),
      'singular_name'      => _x( 'Kysymys', 'post type singular name', 'dude' ),
      'menu_name'          => _x( 'Kysymykset', 'admin menu', 'dude' ),
      'name_admin_bar'     => _x( 'Kysymys', 'add new on admin bar', 'dude' ),
      'add_new'            => _x( 'Lisää kysymys', 'example', 'dude' ),
      'add_new_item'       => __( 'Lisää uusi kysymys', 'dude' ),
      'new_item'           => __( 'Uusi kysymys', 'dude' ),
      'edit_item'          => __( 'Muokkaa kysymystä', 'dude' ),
      'view_item'          => __( 'Katsele kysymystä', 'dude' ),
      'all_items'          => __( 'Kaikki kysymykset', 'dude' ),
      'search_items'       => __( 'Etsi kysymyksiä', 'dude' ),
      'parent_item_colon'  => __( 'Tyypin isäntä:', 'dude' ),
      'not_found'          => __( 'Kysymyksiä ei löytynyt.', 'dude' ),
      'not_found_in_trash' => __( 'Kysymyksiä ei löytynyt roskista.', 'dude' ),
    ];

    // Definition of the post type arguments. For full list see:
    // http://codex.wordpress.org/Function_Reference/register_post_type
    $args = [
      'labels'             => $labels,
      'public'             => true,
      'publicly_queryable' => true,
      'show_ui'            => true,
      'show_in_menu'       => true,
      'query_var'          => false,
      'capability_type'    => 'post',
      'has_archive'        => true,
      'hierarchical'       => false,
      'menu_position'      => null,
      'show_in_rest'       => false,
      'menu_icon'          => 'dashicons-editor-help',
      'supports'           => [ 'title', 'editor', 'revisions' ],
      'rewrite'             => [
        'with_front'  => false,
        'slug'        => 'usein-kysytyt-kysymykset',
      ],
    ];

    $this->register_wp_post_type( $this->slug, $args );
  }
}
