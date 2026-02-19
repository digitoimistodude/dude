<?php
/**
 * Gather all bits and pieces together.
 * If you end up having multiple post types, taxonomies,
 * hooks and functions - please split those to their
 * own files under /inc and just require here.
 *
 * @Date: 2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-11-17 18:29:15
 *
 * @package dude
 */

namespace Air_Light;

/**
 * The current version of the theme.
 */
// It's really 8.3.7, but we got the updates later on
define( 'AIR_LIGHT_VERSION', '8.4.2' );

// We need to have some defaults as comments or empties so let's allow this:
// phpcs:disable Squiz.Commenting.InlineComment.SpacingBefore, WordPress.Arrays.ArrayDeclarationSpacing.SpaceInEmptyArray

/**
 * Theme settings
 */
add_action( 'after_setup_theme', function() {
  /* Different IDs on local and production */
  if ( 'development' === wp_get_environment_type() ) {
    $dashboard_widget_id = 13547;
  } else {
    $dashboard_widget_id = 16864;
  }

  $theme_settings = [
    /**
     * Theme textdomain
     */
    'textdomain' => 'dude',

    /**
     * Image and content sizes
     */
    'image_sizes' => [
      'small'   => 300,
      'medium'  => 700,
      'large'   => 1200,
    ],
    'content_width' => 800,

    /**
     * Logo and featured image
     */
    'default_featured_image'  => null,
    'logo'                    => '/assets/svg/logo.svg',

    /**
     * Some hardcoded page ID's that are not related to custom settings.
     */
    'page_ids' => [
      'jobs'  => 4491,
    ],

    /**
     * CF CDN default settings
     */
    'cfcdn_defaults' => [
      'quality' => 100,
      'fit'     => 'cover',
    ],

    /**
     * Custom setting group settings when using Air setting groups plugin.
     * On multilingual sites using Polylang, translations are handled automatically.
     */
    'custom_settings' => [
      'general' => [
        'id'    => 11585,
        'title' => 'Yleiset',
       ],
       'dashboard_widget' => [
         'id'    => $dashboard_widget_id,
         'title' => 'Dashboard-widget asiakkaiden hallintapaneeliin',
        ],
       'diamond-articles' => [
        'id'    => 11673,
        'title' => 'Timanttiset blogaukset',
       ],
    ],

    'block_colors' => [
      'petrol'  => 'Petrooli',
      'mint'    => 'Vaalea minttu',
      'white'   => 'Valkoinen',
    ],

    /**
     * All links are cheked with JS, if those direct to external site and if,
     * indicator of that is included. Exclude domains from that check in this array.
     */
    'external_link_domains_exclude' => [
      'localhost:3000',
      'dude.test',
      'dude.fi',
      'www.dude.fi',
      'handbook.dude.fi',
      'dude.vaiheessa.fi',
      'tontut.dude.fi',
    ],

    /**
     * Menu locations
     */
    'menu_locations' => [
      'primary' => __( 'Primary Menu', 'dude' ),
      'footer' => __( 'Footer Menu', 'dude' ),
    ],

    /**
     * Taxonomies
     *
     * See the instructions:
     * https://github.com/digitoimistodude/dude#custom-taxonomies
     */
    'taxonomies' => [
      'reference-category' => [
        'name' => 'Reference_Category',
        'post_types' => [ 'reference' ],
      ],
      'reference-target-group' => [
        'name' => 'Reference_Target_Group',
        'post_types' => [ 'reference' ],
      ],
      'reference-budget' => [
        'name' => 'Reference_Budget',
        'post_types' => [ 'reference' ],
      ],
    ],

    /**
     * Post types
     *
     * See the instructions:
     * https://github.com/digitoimistodude/dude#custom-post-types
     */
    'post_types' => [
      'reference' => 'Reference',
      'person'    => 'Person',
      'question'  => 'Question',
      'ama'       => 'AMA',
      'job'       => 'Job',
    ],

    /**
     * Gutenberg -related settings
     */
    // Register custom ACF Blocks
    'acf_blocks' => [
      [
       'name' => 'video-autoplay',
       'title' => 'Autoplay-video',
       'prevent_cache' => true,
      ],
      [
       'name' => 'form-person',
       'title' => 'Lomake henkilöllä',
       'prevent_cache' => true,
      ],
      [
       'name' => 'form',
       'title' => 'Lomake',
       'prevent_cache' => true,
      ],
      [
       'name' => 'title-icon-list-cols',
       'title' => 'Otsikko ja listat kuvakkeilla',
       'prevent_cache' => true,
      ],
      [
       'name' => 'job-techniques',
       'title' => 'Tekniikat',
       'prevent_cache' => true,
      ],
      [
       'name' => 'hero-jobs',
       'title' => 'Työpaikkasivun yläosa',
       'prevent_cache' => true,
      ],
      [
       'name' => 'images',
       'title' => 'Kuvat',
       'prevent_cache' => true,
      ],
      [
       'name' => 'title-content-cols-30',
       'title' => 'Tekstipalstat 30-30-30',
       'prevent_cache' => true,
      ],
      [
       'name' => 'jobs',
       'title' => 'Avoimet työpaikat',
       'prevent_cache' => true,
      ],
      [
       'name' => 'title-images',
       'title' => 'Otsikko ja kuvat',
       'prevent_cache' => true,
      ],
      [
       'name' => 'timeline',
       'title' => 'Aikajana',
       'prevent_cache' => true,
      ],
      [
       'name' => 'carousel',
       'title' => 'Kuvakaruselli',
       'prevent_cache' => true,
      ],
      [
       'name' => 'image',
       'title' => 'Kuva',
       'prevent_cache' => true,
      ],
      [
       'name' => 'persons',
       'title' => 'Henkilöt',
       'prevent_cache' => true,
      ],
      [
       'name' => 'reference-quote-long',
       'title' => 'Yksittäinen pidempi lainaus',
       'prevent_cache' => true,
      ],
      [
       'name' => 'reference-quote-short',
       'title' => 'Yksittäinen lyhempi lainaus',
       'prevent_cache' => true,
      ],
      [
       'name' => 'image-content',
       'title' => 'Kuva ja teksti',
       'prevent_cache' => true,
      ],
      [
       'name' => 'keynumbers-content',
       'title' => 'Avainluvut ja tekstisisältö',
       'prevent_cache' => true,
      ],
      [
       'name' => 'hero-centered',
       'title' => 'Sivun yläosa keskitetty',
       'prevent_cache' => true,
      ],
      [
       'name' => 'image-list',
       'title' => 'Kuva ja lista',
       'prevent_cache' => true,
      ],
      [
       'name' => 'process',
       'title' => 'Prosessi',
       'prevent_cache' => true,
      ],
      [
       'name' => 'faq-accordion',
       'title' => 'UKK-haitari',
       'prevent_cache' => true,
      ],
      [
       'name' => 'list',
       'title' => 'Lista',
       'prevent_cache' => true,
      ],
      [
       'name' => 'title-content-50-50',
       'title' => 'Otsikko ja teksti 50/50',
       'prevent_cache' => true,
      ],
      [
       'name' => 'hero-content-image',
       'title' => 'Sivun yläosa kuvalla',
       'prevent_cache' => true,
      ],
      [
       'name' => 'blog-latest',
       'title' => 'Blogaukset',
       'prevent_cache' => true,
      ],
      [
       'name' => 'cta-big',
       'title' => 'Iso toimintakehoite',
       'prevent_cache' => true,
      ],
      [
       'name' => 'title-content-columns',
       'title' => 'Otsikko ja sisältöpalstat',
       'prevent_cache' => true,
      ],
      [
       'name' => 'cta-small',
       'title' => 'Pieni toimintakehoite',
       'keywords' => [ 'cta' ],
       'prevent_cache' => true,
      ],
      [
       'name' => 'reference-quotes',
       'title' => 'Asiakaslainaukset',
       'prevent_cache' => true,
      ],
      [
       'name' => 'references',
       'title' => 'Referenssit',
       'prevent_cache' => true,
      ],
      [
       'name' => 'hero',
       'title' => 'Yksinkertainen sivun yläosa',
       'prevent_cache' => true,
      ],
      [
       'name' => 'content',
       'title' => 'Tekstisisältö',
       'prevent_cache' => true,
      ],
      [
       'name' => 'badges',
       'title' => 'WordPress-ansiomerkit',
       'prevent_cache' => true,
      ],
      [
       'name' => 'open-source',
       'title' => 'Avoin lähdekoodi',
       'prevent_cache' => true,
      ],
    ],

    // Custom ACF block default settings
    'acf_block_defaults' => [
      'category'          => 'dude',
      'mode'              => 'preview',
      'align'             => 'full',
      'api_version'       => 3,
      'post_types'        => [
        'page',
        'job',
        'reference',
      ],
      'supports'          => [
        'align' => false,
      ],
      'render_callback'   => __NAMESPACE__ . '\render_acf_block',
    ],

    // Restrict to only selected blocks
    // Set the value to 'all' to allow all blocks everywhere
    'allowed_blocks' => [
      'default' => [],
      'post' => [
        'core/archives',
        'core/audio',
        'core/buttons',
        'core/categories',
        'core/code',
        'core/column',
        'core/columns',
        'core/coverImage',
        'core/embed',
        'core/file',
        'core/freeform',
        'core/gallery',
        'core/heading',
        'core/html',
        'core/image',
        'core/latestComments',
        'core/latestPosts',
        'core/list',
        'core/more',
        'core/nextpage',
        'core/paragraph',
        'core/preformatted',
        'core/pullquote',
        'core/quote',
        'core/block',
        'core/separator',
        'core/shortcode',
        'core/spacer',
        'core/subhead',
        'core/table',
        'core/textColumns',
        'core/verse',
        'core/video',
      ],
      'job' => [
        'core/archives',
        'core/audio',
        'core/buttons',
        'core/categories',
        'core/code',
        'core/column',
        'core/columns',
        'core/coverImage',
        'core/embed',
        'core/file',
        'core/freeform',
        'core/gallery',
        'core/heading',
        'core/html',
        'core/image',
        'core/latestComments',
        'core/latestPosts',
        'core/list',
        'core/more',
        'core/nextpage',
        'core/paragraph',
        'core/preformatted',
        'core/pullquote',
        'core/quote',
        'core/block',
        'core/separator',
        'core/shortcode',
        'core/spacer',
        'core/subhead',
        'core/table',
        'core/textColumns',
        'core/verse',
        'core/video',
      ],
      'reference' => [
        'core/image',
        'core/html',
        'core/columns',
      ],
      'ama' => [
        'core/archives',
        'core/audio',
        'core/buttons',
        'core/categories',
        'core/code',
        'core/column',
        'core/columns',
        'core/coverImage',
        'core/embed',
        'core/file',
        'core/freeform',
        'core/gallery',
        'core/heading',
        'core/html',
        'core/image',
        'core/latestComments',
        'core/latestPosts',
        'core/list',
        'core/more',
        'core/nextpage',
        'core/paragraph',
        'core/preformatted',
        'core/pullquote',
        'core/quote',
        'core/block',
        'core/separator',
        'core/shortcode',
        'core/spacer',
        'core/subhead',
        'core/table',
        'core/textColumns',
        'core/verse',
        'core/video',
      ],
      'page' => [
        // Native Gutenberg blocks for pricing page
        'dude/pricing-hero',
        'dude/pricing-cta',
        'dude/pricing-category',
        'dude/pricing-faq',
        // Core blocks
        'core/heading',
        'core/paragraph',
        'core/list',
        'core/buttons',
        'core/image',
        'core/columns',
        'core/column',
        'core/separator',
        'core/spacer',
        'core/html',
        'core/block',
      ],
    ],

    // If you want to use classic editor somewhere, define it here
    'use_classic_editor' => [
      'question',
    ],
  ];

  $theme_settings = apply_filters( 'dude_theme_settings', $theme_settings );

  define( 'THEME_SETTINGS', $theme_settings );
} ); // end action after_setup_theme

/**
 * Required files
 */
require get_theme_file_path( '/inc/hooks.php' );
require get_theme_file_path( '/inc/includes.php' );
require get_theme_file_path( '/inc/template-tags.php' );

// Run theme setup
add_action( 'init', __NAMESPACE__ . '\theme_setup' );
add_action( 'after_setup_theme', __NAMESPACE__ . '\build_theme_support' );

/**
 * Get Vimeo video id from url
 *
 * Supported url formats -
 *
 * https://vimeo.com/11111111
 * http://vimeo.com/11111111
 * https://www.vimeo.com/11111111
 * http://www.vimeo.com/11111111
 * https://vimeo.com/channels/11111111
 * http://vimeo.com/channels/11111111
 * https://vimeo.com/groups/name/videos/11111111
 * http://vimeo.com/groups/name/videos/11111111
 * https://vimeo.com/album/2222222/video/11111111
 * http://vimeo.com/album/2222222/video/11111111
 * https://vimeo.com/11111111?param=test
 * http://vimeo.com/11111111?param=test
 *
 * @param string $url The URL
 *
 * @return string the video id extracted from url
 */
function get_vimeo_id( $url = '' ) {
  $regs = array();
  $id = '';

  if ( preg_match( '%^https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)(?:[?]?.*)$%im', $url, $regs ) ) {
    $id = $regs[3];
  }

  return $id;
}
