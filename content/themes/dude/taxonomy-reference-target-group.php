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
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" stroke-width="1.5"/>
          <path d="M16.167 12.5C16.0408 12.7513 16.0113 13.0405 16.0842 13.3119C16.1572 13.5834 16.3278 13.8191 16.567 13.9792L16.625 14.0208C16.8119 14.1479 16.9715 14.3098 17.0953 14.4973C17.2191 14.6847 17.3048 14.894 17.3479 15.1133C17.391 15.3327 17.3908 15.5577 17.3475 15.7769C17.3041 15.9962 17.2182 16.2054 17.0946 16.3925C16.971 16.5796 16.8119 16.7412 16.6261 16.8684C16.4403 16.9956 16.2313 17.0859 16.0107 17.1343C15.7901 17.1828 15.5619 17.1885 15.3391 17.1512C15.1164 17.114 14.9031 17.0346 14.7113 16.9175L14.6529 16.8758C14.4134 16.6367 14.1022 16.466 13.7578 16.3858C13.4134 16.3056 13.05 16.3194 12.7143 16.4254C12.3854 16.5289 12.0955 16.7231 11.8787 16.9847C11.6619 17.2463 11.5275 17.5648 11.4913 17.9025L11.4746 18.0542C11.4372 18.4945 11.2286 18.9043 10.892 19.1985C10.5554 19.4927 10.1158 19.6494 9.66125 19.6358C9.20675 19.6223 8.77735 19.4395 8.46025 19.1251C8.14315 18.8108 7.96203 18.3891 7.95375 17.9483L7.94542 17.8642C7.90935 17.5144 7.77299 17.1817 7.55212 16.9066C7.33125 16.6315 7.03521 16.4255 6.69792 16.3125C6.36209 16.2065 5.99872 16.1927 5.65431 16.2729C5.30989 16.3531 4.99875 16.5238 4.75792 16.7629L4.69958 16.8046C4.50779 16.9217 4.29446 17.0011 4.07178 17.0383C3.8491 17.0756 3.6209 17.0699 3.40024 17.0214C3.17959 16.973 2.97065 16.8827 2.78485 16.7555C2.59906 16.6283 2.43996 16.4667 2.31639 16.2796C2.19283 16.0925 2.10714 15.8832 2.06378 15.6639C2.02041 15.4445 2.02016 15.2195 2.06323 15C2.1063 14.7805 2.19191 14.571 2.31542 14.3838L2.35708 14.3254C2.59622 14.0863 2.76688 13.7751 2.84664 13.4307C2.92641 13.0863 2.91143 12.7228 2.80375 12.387C2.70027 12.0581 2.50609 11.7682 2.24443 11.5514C1.98278 11.3346 1.66426 11.2002 1.32659 11.1641L1.175 11.1475C0.734713 11.1101 0.324944 10.9014 0.030666 10.5648C-0.263611 10.2282 -0.420264 9.78868 -0.406818 9.33414C-0.393372 8.8796 -0.210539 8.4502 0.103735 8.13312C0.418009 7.81603 0.839754 7.63493 1.28042 7.62667L1.36458 7.61833C1.71443 7.58227 2.04709 7.4459 2.32217 7.22503C2.59726 7.00416 2.80332 6.70812 2.91625 6.37083C3.02222 6.03501 3.03604 5.67164 2.95584 5.32722C2.87564 4.9828 2.70496 4.67167 2.46583 4.43083L2.42417 4.3725C2.30066 4.18532 2.21497 3.97599 2.1719 3.75667C2.12884 3.53734 2.12908 3.31231 2.17244 3.09299C2.21581 2.87367 2.30143 2.66433 2.42464 2.47679C2.54785 2.28925 2.70646 2.12759 2.89167 2.00083C3.07889 1.87728 3.28821 1.79159 3.50754 1.74852C3.72686 1.70546 3.95189 1.70569 4.17121 1.74906C4.39053 1.79243 4.59987 1.87804 4.78741 2.00125L4.84583 2.04292C5.08484 2.28206 5.39598 2.45272 5.74039 2.53248C6.08481 2.61225 6.44818 2.59727 6.78375 2.48958L6.84167 2.4725C7.17057 2.36902 7.46045 2.17484 7.67768 1.91318C7.89491 1.65153 8.03033 1.33302 8.06792 0.995417L8.08417 0.84375C8.12157 0.403462 8.33022 -0.00630839 8.66679 -0.30058C9.00337 -0.594851 9.4429 -0.751514 9.8974 -0.737999C10.3519 -0.724484 10.7813 -0.541669 11.0984 -0.227363C11.4155 0.0869428 11.5966 0.508687 11.6049 0.949167L11.6133 1.03333C11.6493 1.37101 11.7837 1.68952 12.0005 1.95118C12.2172 2.21283 12.5071 2.40702 12.8375 2.51042C13.1733 2.61639 13.5367 2.63021 13.8811 2.55001C14.2255 2.46981 14.5366 2.29913 14.7775 2.06L14.8358 2.01833C15.023 1.89482 15.2324 1.80913 15.4517 1.76607C15.671 1.72301 15.8961 1.72325 16.1154 1.76661C16.3347 1.80998 16.5439 1.8956 16.7311 2.01881C16.9182 2.14202 17.0799 2.30063 17.2071 2.48583C17.3306 2.67305 17.4163 2.88237 17.4597 3.1017C17.5031 3.32102 17.5033 3.54605 17.4603 3.76537C17.4172 3.98469 17.3316 4.19403 17.2081 4.38157L17.1664 4.44C16.9273 4.67901 16.7566 4.99014 16.6764 5.33456C16.5962 5.67898 16.61 6.04234 16.716 6.37792C16.8195 6.70681 17.0137 6.99669 17.2753 7.21392C17.5369 7.43115 17.8554 7.5665 18.1931 7.60253L18.3448 7.61875C18.785 7.65615 19.1948 7.86479 19.4891 8.20137C19.7834 8.53795 19.94 8.97748 19.9265 9.43198C19.913 9.88649 19.7302 10.3159 19.4158 10.6329C19.1015 10.95 18.6798 11.1312 18.2391 11.1394L18.155 11.1477C17.8173 11.1838 17.4987 11.3182 17.2371 11.535C17.0155 11.7968 16.8813 12.1867 16.7754 12.4225Z" stroke="currentColor" stroke-width="1.5"/>
        </svg>
      </span>
      <span class="filter-text">Suodata lisää</span>
    </button>

    <div class="advanced-filters-content" id="advanced-filters-content" hidden>
      <div class="container">
        <div class="filter-row">
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
