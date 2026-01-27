<?php
/**
 * The template for timeline
 *
 * Company timeline block.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-08 12:40:41
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $tabs = get_field( 'tabs' );
} else {
  $title = $args['title'];
  $tabs = $args['tabs'];
}

?>

<section class="block block-timeline">
  <div class="container">

    <h2>
      <?php echo esc_html( $title ); ?>
    </h2>

    <div class="tablist has-horizontal-scroll" role="tablist" aria-orientation="horizontal" aria-label="Aikajana">

      <div class="fade-overlay" aria-hidden="true">
        <div class="fade-left"></div>
        <div class="fade-right"></div>
      </div>

      <div class="tab-list-box horizontal-list">
        <?php $i = 1;
        while ( have_rows( 'tabs' ) ) :
          the_row();
          $year = get_sub_field( 'year' );
          ?>

          <button role="tab"
            aria-selected="<?php if ( 1 === $i ) { echo 'true'; } else { echo 'false'; } ?>"
            aria-controls="<?php echo esc_html( sanitize_title( $year ) ); ?>-tab"
            id="<?php echo esc_html( sanitize_title( $year ) ); ?>"
            class="tab-button theme-color-border-and-hover"
            <?php if ( 1 !== $i ) { echo 'tabindex="-1"'; } ?>>
              <?php echo esc_html( $year ); ?>
          </button>
        <?php $i++;
      endwhile; ?>
      </div>
    </div>

    <div class="tabpanels">
      <?php $i = 1;
      while ( have_rows( 'tabs' ) ) :
        the_row();
        $year = get_sub_field( 'year' );
        $image = get_sub_field( 'image' );
        $content = get_sub_field( 'content' );
        ?>
        <div tabindex="0"
          role="tabpanel"
          id="<?php echo esc_html( sanitize_title( $year ) ); ?>-tab"
          aria-labelledby="<?php echo esc_html( sanitize_title( $year ) ); ?>"
          <?php if ( 1 !== $i ) { echo 'hidden=""'; } ?>>

          <div class="tab-content">
            <?php if ( ! empty( $image ) ) : ?>
              <div>
                <?php native_lazyload_tag( $image['id'] ); ?>
                <p class="description"><?php echo esc_html( $image['description'] ) ?></p>
              </div>
            <?php endif; ?>

            <div class="content">
              <h2 class="year">
                <?php echo esc_html( $year ) ?>
              </h2>

              <?php echo wp_kses_post( $content ); ?>
            </div>
          </div>

        </div>
      <?php $i++;
      endwhile; ?>
    </div>

  </div>
</section>
