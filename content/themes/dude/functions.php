<?php
/**
 * Gather all bits and pieces together.
 * If you end up having multiple post types, taxonomies,
 * hooks and functions - please split those to their
 * own files under /inc and just require here.
 *
 * @Date: 2019-10-15 12:30:02
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-03 15:07:54
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
    'logo'                    => '/svg/logo.svg',

    /**
     * Some hardcoded page ID's that are not related to custom settings.
     */
    'page_ids' => [
      'jobs'  => 4491,
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
       'name' => 'form-person',
       'title' => 'Lomake henkilöllä',
      ],
      [
       'name' => 'form',
       'title' => 'Lomake',
      ],
      [
       'name' => 'title-icon-list-cols',
       'title' => 'Otsikko ja listat kuvakkeilla',
      ],
      [
       'name' => 'job-techniques',
       'title' => 'Tekniikat',
      ],
      [
       'name' => 'hero-jobs',
       'title' => 'Työpaikkasivun yläosa',
      ],
      [
       'name' => 'images',
       'title' => 'Kuvat',
      ],
      [
       'name' => 'title-content-cols-30',
       'title' => 'Tekstipalstat 30-30-30',
      ],
      [
       'name' => 'jobs',
       'title' => 'Avoimet työpaikat',
      ],
      [
       'name' => 'title-images',
       'title' => 'Otsikko ja kuvat',
      ],
      [
       'name' => 'timeline',
       'title' => 'Aikajana',
      ],
      [
       'name' => 'carousel',
       'title' => 'Kuvakaruselli',
      ],
      [
       'name' => 'image',
       'title' => 'Kuva',
      ],
      [
       'name' => 'persons',
       'title' => 'Henkilöt',
      ],
      [
       'name' => 'reference-quote-long',
       'title' => 'Yksittäinen pidempi lainaus',
      ],
      [
       'name' => 'reference-quote-short',
       'title' => 'Yksittäinen lyhempi lainaus',
      ],
      [
       'name' => 'image-content',
       'title' => 'Kuva ja teksti',
      ],
      [
       'name' => 'keynumbers-content',
       'title' => 'Avainluvut ja tekstisisältö',
      ],
      [
       'name' => 'hero-centered',
       'title' => 'Sivun yläosa keskitetty',
      ],
      [
       'name' => 'image-list',
       'title' => 'Kuva ja lista',
      ],
      [
       'name' => 'process',
       'title' => 'Prosessi',
      ],
      [
       'name' => 'faq-accordion',
       'title' => 'UKK-haitari',
      ],
      [
       'name' => 'list',
       'title' => 'Lista',
      ],
      [
       'name' => 'title-content-50-50',
       'title' => 'Otsikko ja teksti 50/50',
      ],
      [
       'name' => 'hero-content-image',
       'title' => 'Sivun yläosa kuvalla',
      ],
      [
       'name' => 'blog-latest',
       'title' => 'Blogaukset',
      ],
      [
       'name' => 'cta-big',
       'title' => 'Iso toimintakehoite',
      ],
      [
       'name' => 'title-content-columns',
       'title' => 'Otsikko ja sisältöpalstat',
      ],
      [
       'name' => 'cta-small',
       'title' => 'Pieni toimintakehoite',
       'keywords' => [ 'cta' ],
      ],
      [
       'name' => 'reference-quotes',
       'title' => 'Asiakaslainaukset',
      ],
      [
       'name' => 'references',
       'title' => 'Referenssit',
      ],
      [
       'name' => 'hero',
       'title' => 'Yksinkertainen sivun yläosa',
      ],
      [
       'name' => 'content',
       'title' => 'Tekstisisältö',
      ],
      [
       'name' => 'badges',
       'title' => 'WordPress-ansiomerkit',
      ],
      [
       'name' => 'open-source',
       'title' => 'Avoin lähdekoodi',
      ],
    ],

    // Custom ACF block default settings
    'acf_block_defaults' => [
      'category'          => 'dude',
      'mode'              => 'auto',
      'align'             => 'full',
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
      'default' => [
      ],
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
