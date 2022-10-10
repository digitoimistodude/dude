<?php
/**
 * @Author: Niku Hietanen
 * @Date: 2020-02-18 15:05:35
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2021-05-04 11:13:17
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
class Your_Taxonomy extends Taxonomy {


  public function register( array $post_types = [] ) {
    // Taxonomy labels.
    $labels = [
      'name'                  => _x( 'Your Taxonomies', 'Taxonomy plural name', 'dude' ),
      'singular_name'         => _x( 'Your Taxonomy', 'Taxonomy singular name', 'dude' ),
      'search_items'          => __( 'Search Your Taxonomies', 'dude' ),
      'popular_items'         => __( 'Popular Your Taxonomies', 'dude' ),
      'all_items'             => __( 'All Your Taxonomies', 'dude' ),
      'parent_item'           => __( 'Parent Your Taxonomy', 'dude' ),
      'parent_item_colon'     => __( 'Parent Your Taxonomy', 'dude' ),
      'edit_item'             => __( 'Edit Your Taxonomy', 'dude' ),
      'update_item'           => __( 'Update Your Taxonomy', 'dude' ),
      'add_new_item'          => __( 'Add New Your Taxonomy', 'dude' ),
      'new_item_name'         => __( 'New Your Taxonomy', 'dude' ),
      'add_or_remove_items'   => __( 'Add or remove Your Taxonomies', 'dude' ),
      'choose_from_most_used' => __( 'Choose from most used Taxonomies', 'dude' ),
      'menu_name'             => __( 'Your Taxonomy', 'dude' ),
    ];

    $args = [
      'labels'            => $labels,
      'public'            => false,
      'show_in_nav_menus' => true,
      'show_admin_column' => true,
      'hierarchical'      => true,
      'show_tagcloud'     => false,
      'show_ui'           => true,
      'query_var'         => false,
      'rewrite'           => [
        'slug' => 'your-taxonomy',
      ],
    ];

    $this->register_wp_taxonomy( $this->slug, $post_types, $args );
  }

}
