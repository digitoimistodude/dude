<?php
/**
 * @Author: Roni Laukkarinen
 * @Date: 2026-02-19 14:00:00
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2026-02-19 14:00:00
 *
 * @package dude
 */

namespace Air_Light;

/**
 * Registers the Reference Budget taxonomy.
 *
 * @param Array $post_types Optional. Post types in
 * which the taxonomy should be registered.
 */
class Reference_Budget extends Taxonomy {


  public function register( array $post_types = [] ) {
    // Taxonomy labels.
    $labels = [
      'name'                  => _x( 'Budjettiluokat', 'Taxonomy plural name', 'dude' ),
      'singular_name'         => _x( 'Budjettiluokka', 'Taxonomy singular name', 'dude' ),
      'search_items'          => __( 'Hae budjettiluokkia', 'dude' ),
      'popular_items'         => __( 'Suositut budjettiluokat', 'dude' ),
      'all_items'             => __( 'Kaikki budjettiluokat', 'dude' ),
      'parent_item'           => __( 'Budjettiluokan vanhempi', 'dude' ),
      'parent_item_colon'     => __( 'Budjettiluokan vanhempi', 'dude' ),
      'edit_item'             => __( 'Muokkaa budjettiluokkaa', 'dude' ),
      'update_item'           => __( 'Päivitä budjettiluokka', 'dude' ),
      'add_new_item'          => __( 'Lisää uusi budjettiluokka', 'dude' ),
      'new_item_name'         => __( 'Uusi budjettiluokka', 'dude' ),
      'add_or_remove_items'   => __( 'Lisää tai poista budjettiluokkia', 'dude' ),
      'choose_from_most_used' => __( 'Valitse kaikistä käytetyimmistä', 'dude' ),
      'menu_name'             => __( 'Budjettiluokat', 'dude' ),
    ];

    $args = [
      'labels'            => $labels,
      'public'            => false,
      'show_in_nav_menus' => false,
      'show_in_rest'      => true,
      'show_admin_column' => true,
      'hierarchical'      => false,
      'show_tagcloud'     => false,
      'show_ui'           => true,
      'query_var'         => true,
      'has_archive'       => false,
      'rewrite'           => false,
    ];

    $this->register_wp_taxonomy( $this->slug, $post_types, $args );
  }
}
