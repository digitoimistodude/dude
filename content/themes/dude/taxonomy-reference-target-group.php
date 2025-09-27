<?php
/**
 * The template for displaying target group taxonomy archive
 *
 * @Author: Roni Laukkarinen
 * @Date: 2025-01-01 17:05:00
 * @Last Modified by: Roni Laukkarinen
 * @Last Modified time: 2025-01-01 17:05:00
 * @package dude
 */

namespace Air_Light;

// Get current term
$current_term = get_queried_object();

// Get custom fields from the taxonomy term
$custom_title = get_field( 'archive_title', $current_term );
$custom_description = get_field( 'archive_description', $current_term );

// Get all references for this target group
$reference_ids = [];
$references_query = new \WP_Query([
  'post_type' => 'reference',
  'posts_per_page' => -1,
  'tax_query' => [
    [
      'taxonomy' => 'reference-target-group',
      'field'    => 'term_id',
      'terms'    => $current_term->term_id,
    ],
  ],
]);

if ( $references_query->have_posts() ) {
  while ( $references_query->have_posts() ) {
    $references_query->the_post();
    $reference_ids[] = get_the_id();
  }
  wp_reset_postdata();
}

// Get all reference categories for filtering
$reference_categories = get_terms( [
  'taxonomy' => 'reference-category',
  'hide_empty' => true,
] );

// Get all target groups for the main filter
$target_groups_terms = get_terms( [
  'taxonomy' => 'reference-target-group',
  'hide_empty' => true,
] );

$target_groups = [ 'all' => 'Kaikki toimialat' ];
foreach ( $target_groups_terms as $term ) {
  $target_groups[ $term->slug ] = $term->name;
}

// Get current filters from URL parameters
$current_ratkaisut = isset( $_GET['ratkaisut'] ) ? array_map( 'sanitize_text_field', explode( ',', $_GET['ratkaisut'] ) ) : [ 'all' ]; // phpcs:ignore
$current_haku = isset( $_GET['haku'] ) ? sanitize_text_field( $_GET['haku'] ) : '';

get_header(); ?>

<main class="site-main archive-reference tax-reference-target-group">

  <?php get_template_part( 'template-parts/blocks/hero-content-image', null, [
    'prefix'          => 'Referenssit',
    'title'           => $custom_title ? $custom_title : $current_term->name,
    'content'         => $custom_description ? $custom_description : $current_term->description,
    'block_color'     => 'petrol',
    'image'           => null,
    'use_as_bg_image' => null,
  ] );

  // Main target group filtering
  ?>
  <section class="reference-filters-main">
    <div class="container">
      <div class="archive-head">
        <p class="filter-label">Toimiala</p>
        <div class="filter-group target-groups archive-filters" role="group" aria-label="Suodata toimialoittain">
        <?php foreach ( $target_groups as $key => $label ) : ?>
          <button
            type="button"
            class="filter-button filter-target-group<?php echo $key === $current_term->slug ? ' active' : ''; ?>"
            data-filter="target-group"
            data-value="<?php echo esc_attr( $key ); ?>"
            aria-pressed="<?php echo $key === $current_term->slug ? 'true' : 'false'; ?>">
            <?php echo esc_html( $label ); ?>
            <?php if ( 'all' !== $key && $key !== $current_term->slug ) : ?>
              <small class="archive-link" data-archive-url="<?php echo esc_url( get_term_link( get_term_by( 'slug', $key, 'reference-target-group' ) ) ); ?>"></small>
            <?php elseif ( 'all' === $key ) : ?>
              <small class="archive-link" data-archive-url="<?php echo esc_url( get_post_type_archive_link( 'reference' ) ); ?>"></small>
            <?php endif; ?>
          </button>
        <?php endforeach; ?>
        </div>
      </div>
    </div>
  </section>

  <?php // Advanced filtering section ?>
  <section class="reference-filters-advanced" id="advanced-filters" aria-expanded="false">
    <button type="button" class="filter-toggle-advanced" aria-controls="advanced-filters-content" aria-expanded="false">
      <span class="icon-settings" aria-hidden="true">
        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.4524 4.88007V3.36007H14.7374V2.59507H12.4524V1.07007H11.6924V4.88007H12.4524Z" fill="currentColor"/>
          <path d="M12.4524 15.55V14.025H14.7374V13.26H12.4524V11.74H11.6924V15.55H12.4524Z" fill="currentColor"/>
          <path d="M14.7375 7.93002H4.07245V6.40502H3.31245V5.64502H2.54745V6.40502H1.78745V7.93002H0.262451V8.69002H1.78745V10.215H2.54745V10.975H3.31245V10.215H4.07245V8.69002H14.7375V7.93002Z" fill="currentColor"/>
          <path d="M10.9275 15.55H11.6925V16.31H10.9275V15.55Z" fill="currentColor"/>
          <path d="M10.9275 10.9751H11.6925V11.7401H10.9275V10.9751Z" fill="currentColor"/>
          <path d="M10.9275 4.88013H11.6925V5.64513H10.9275V4.88013Z" fill="currentColor"/>
          <path d="M10.9275 0.310059H11.6925V1.07006H10.9275V0.310059Z" fill="currentColor"/>
          <path d="M10.9275 11.74H10.1675V13.26H0.262451V14.025H10.1675V15.55H10.9275V11.74Z" fill="currentColor"/>
          <path d="M10.1675 2.59507H0.262451V3.36007H10.1675V4.88007H10.9275V1.07007H10.1675V2.59507Z" fill="currentColor"/>
        </svg>
      </span>
      <span class="filter-text">Suodata lisää</span>
    </button>

    <div class="advanced-filters-content" id="advanced-filters-content" hidden>
      <div class="container">
        <div class="cols cols-two">
          <?php // Solutions/Categories filter ?>
          <div class="filter-group filter-solutions">
            <div class="archive-head">
              <p class="filter-label">Ratkaisut</p>
              <div class="filter-checkboxes" role="group" aria-labelledby="solutions-label">
                <label class="filter-checkbox">
                  <input type="checkbox" name="solution" value="all" <?php echo in_array( 'all', $current_ratkaisut ) ? 'checked' : ''; ?>>
                  <span>Kaikki</span>
                </label>
                <?php if ( ! empty( $reference_categories ) ) : ?>
                  <?php foreach ( $reference_categories as $category ) : ?>
                    <label class="filter-checkbox">
                      <input type="checkbox" name="solution" value="<?php echo esc_attr( $category->slug ); ?>" <?php echo in_array( $category->slug, $current_ratkaisut ) ? 'checked' : ''; ?>>
                      <span><?php echo esc_html( $category->name ); ?></span>
                    </label>
                  <?php endforeach; ?>
                <?php endif; ?>
              </div>
            </div>
          </div>

          <?php // Keyword search ?>
          <div class="filter-group filter-search">
            <div class="archive-head">
              <p class="filter-label">Hae työnäytteistä</p>
              <div class="search-input-wrapper">
                <input
                  type="search"
                  id="reference-search"
                  name="search"
                  placeholder="Kirjoita hakusana"
                  value="<?php echo esc_attr( $current_haku ); ?>"
                  aria-label="Hae työnäytteistä">
                <span class="search-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.5 17.5L13.875 13.875" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <?php
  // Debug: Show how many references were found
  if ( ! empty( $reference_ids ) ) {
    // Debug comment - remove in production
    echo '<!-- Found ' . count( $reference_ids ) . ' references in ' . esc_html( $current_term->name ) . ' -->';

    get_template_part( 'template-parts/blocks/references', null, [
      'reference_ids' => $reference_ids,
      'title'         => 'Referenssit',
      'link'          => null,
      'show_logos'    => false,
      'show_title'    => false,
      'filterable'    => true,
    ] );
  } else {
    echo '<div class="container"><p>Ei referenssejä tässä toimialassa. Varmista että olet lisännyt referenssejä "' . esc_html( $current_term->name ) . '" toimialaan WordPress-hallinnassa.</p></div>';
  } ?>

</main>

<?php get_footer();
