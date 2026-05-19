<?php
/**
 * @Author: Roni Laukkarinen
 * @Date: 2024-09-17 17:05:00
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2024-09-17 17:05:00
 *
 * @package dude
 */

namespace Air_Light;

/**
 * Registers the Reference Target Group taxonomy.
 *
 * @param Array $post_types Optional. Post types in
 * which the taxonomy should be registered.
 */
class Reference_Target_Group extends Taxonomy {


  public function register( array $post_types = [] ) {
    // Taxonomy labels.
    $labels = [
      'name'                  => _x( 'Toimialat', 'Taxonomy plural name', 'dude' ),
      'singular_name'         => _x( 'Toimiala', 'Taxonomy singular name', 'dude' ),
      'search_items'          => __( 'Hae toimialoja', 'dude' ),
      'popular_items'         => __( 'Suositut toimialat', 'dude' ),
      'all_items'             => __( 'Kaikki toimialat', 'dude' ),
      'parent_item'           => __( 'Toimialan vanhempi', 'dude' ),
      'parent_item_colon'     => __( 'Toimialan vanhempi', 'dude' ),
      'edit_item'             => __( 'Muokkaa toimialaa', 'dude' ),
      'update_item'           => __( 'Päivitä toimiala', 'dude' ),
      'add_new_item'          => __( 'Lisää uusi toimiala', 'dude' ),
      'new_item_name'         => __( 'Uusi toimiala', 'dude' ),
      'add_or_remove_items'   => __( 'Lisää tai poista toimialoja', 'dude' ),
      'choose_from_most_used' => __( 'Valitse kaikistä käytetyimmistä', 'dude' ),
      'menu_name'             => __( 'Toimialat', 'dude' ),
    ];

    $args = [
      'labels'            => $labels,
      'public'            => true,
      'show_in_nav_menus' => true,
      'show_in_rest'      => true,
      'show_admin_column' => true,
      'hierarchical'      => false,
      'show_tagcloud'     => false,
      'show_ui'           => true,
      'query_var'         => true,
      'has_archive'       => true,
      'rewrite'           => [
        'slug' => 'verkkosivut-toimiala',
        'with_front' => false,
      ],
    ];

    $this->register_wp_taxonomy( $this->slug, $post_types, $args );
  }
}
