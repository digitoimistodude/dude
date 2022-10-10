<?php
/**
 * The template for title-content-columns
 *
 * A block that ha stitle and columns.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-05 18:36:34
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $columns_raw = get_field( 'columns' );
  $two_columns = get_field( 'two_columns' );
  $hide_title = get_field( 'hide_title' );
  $style_vision_mission = get_field( 'style_vision_mission' );
  $block_color = get_field( 'block_color' );
} else {
  $title = $args['title'];
  $columns_raw = $args['columns'];
  $two_columns = $args['two_columns'];
  $hide_title = $args['hide_title'];
  $style_vision_mission = $args['style_vision_mission'];
  $block_color = $args( 'block_color' );
}

if ( empty( $title ) || empty( $columns_raw ) ) {
  maybe_show_error_block( 'Otsikko ja lohkot on pakollisia' );
  return;
}

$columns = [];
foreach ( $columns_raw as $column ) {
  if ( empty( $column['title'] ) ) {
    continue;
  }

  if ( empty( $column['content'] ) ) {
    continue;
  }

  $columns[] = $column;
}

// If reference
if ( get_post_type() === 'reference' ) {
  $block_color = 'reference';
}

$classes = [
  'block',
  'block-title-content-columns',
  'block-background-' . esc_attr( $block_color ),
];

if ( $hide_title ) {
  $classes[] = 'has-style-alt has-unified-padding-if-stacked';
}
?>

<section class="<?php echo esc_attr( join( ' ', $classes ) ); ?>">
  <div class="container">

    <h2 class="block-heading<?php if ( true === $hide_title ) echo ' screen-reader-text-dude'; ?>">
      <?php echo esc_html( $title ); ?>
    </h2>

    <div class="cols<?php if ( $two_columns ) echo ' cols-2' ?>">
      <?php foreach ( $columns as $column ) : ?>
        <div class="col<?php if ( $column['icon_left'] ) echo ' is-icon-left' ?>">
          <div class="icon">
            <?php if ( ! empty( $column['icon_svg'] ) ) {
              $icon_path = get_theme_file_path( "svg/foruser/{$column['icon_svg']}" );
              if ( file_exists( $icon_path ) ) {
                include $icon_path;
              }
            } ?>
          </div>

          <div class="content">
            <h3>
              <?php echo esc_html( $column['title'] ) ?>
            </h3>

            <?php echo wp_kses_post( wpautop( $column['content'] ) ); ?>
          </div>

        </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>
