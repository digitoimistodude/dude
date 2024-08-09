<?php
/**
 * @Author: Niku Hietanen
 * @Date: 2020-02-18 15:05:35
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-11-10 10:36:23
 *
 * @package dude
 */

namespace Air_Light;

/**
 * Registers the Your Taxonomy taxonomy.
 *
 * @param Array $post_types Optional. Post types in
 * which the taxonomy should be registered.
 */
class Reference_Category extends Taxonomy {


  public function register( array $post_types = [] ) {
    // Taxonomy labels.
    $labels = [
      'name'                  => _x( 'Kategoriat', 'Taxonomy plural name', 'dude' ),
      'singular_name'         => _x( 'Kategoria', 'Taxonomy singular name', 'dude' ),
      'search_items'          => __( 'Hae kategorioita', 'dude' ),
      'popular_items'         => __( 'Suositut kategoriat', 'dude' ),
      'all_items'             => __( 'Kaikki kategoriat', 'dude' ),
      'parent_item'           => __( 'Kategorian vanhempi', 'dude' ),
      'parent_item_colon'     => __( 'Kategorian vanhempi', 'dude' ),
      'edit_item'             => __( 'Muokkaa kategoriaa', 'dude' ),
      'update_item'           => __( 'Päivitä kategoria', 'dude' ),
      'add_new_item'          => __( 'Lisää uusi kategoria', 'dude' ),
      'new_item_name'         => __( 'Uusi Kategoria', 'dude' ),
      'add_or_remove_items'   => __( 'Lisää tai poista kategorioita', 'dude' ),
      'choose_from_most_used' => __( 'Valitse kaikistä käytetyimmistä', 'dude' ),
      'menu_name'             => __( 'Kategoriat', 'dude' ),
    ];

    $args = [
      'labels'            => $labels,
      'public'            => false,
      'show_in_nav_menus' => true,
      'show_in_rest'      => true,
      'show_admin_column' => true,
      'hierarchical'      => true,
      'show_tagcloud'     => false,
      'show_ui'           => true,
      'query_var'         => false,
      'rewrite'           => [
        'slug' => 'reference-category',
      ],
    ];

    $this->register_wp_taxonomy( $this->slug, $post_types, $args );
  }
}
