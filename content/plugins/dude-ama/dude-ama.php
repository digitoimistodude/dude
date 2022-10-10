<?php
/**
 * Plugin Name: Dude AMA
 * Description: Functionality to have an "Ask Me Anything" -live session
 * Version: 0.0.1
 * Author: Digitoimisto Dude Oy, Niku Hietanen
 * Author URI: https://www.dude.fi
 * Requires at least: 5.0
 * Tested up to: 5.5
 * License: GPL-3.0+
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 *
 * @package dude-ama
 */

namespace Dude_Ama;

if ( ! defined( 'ABSPATH' ) ) {
  exit();
}

function get_ama_entry( $post_id, $wrap = true ) {
  $question = get_the_title( $post_id );
  $answer = get_the_content( $post_id );
  $timestamp = get_the_date( 'Y-m-d H:i:s', $post_id );
  $likes = get_post_meta( $post_id, '_ama-likes', true );

  if ( $wrap ) {
    $output = wp_cache_get( "ama-question-{$post_id}", 'theme' );
    if ( ! $output ) :
      ob_start(); ?>
      <div id="<?php echo esc_attr( $post_id ); ?>" class="inner" data-id="<?php echo esc_attr( $post_id ); ?>" data-timestamp="<?php echo esc_attr( $timestamp ); ?>">
        <div class="content">
          <h2><?php echo esc_html( $question ); ?></h2>
          <?php echo wp_kses_post( $answer ); ?>
        </div>
        <likes :id="<?php echo esc_attr( $post_id ); ?>" :count="<?php echo esc_attr( $likes ); ?>"></likes>
      </div>
      <?php $output = ob_get_clean();
      wp_cache_set( "ama-question-{$post_id}", $output, 'theme', MINUTE_IN_SECONDS / 4 );
    endif;

    return $output;
  } else {
    ob_start(); ?>
    <h2><?php echo esc_html( $question ); ?></h2>
    <?php echo wp_kses_post( $answer ); ?>
    <?php
    return ob_get_clean();
  }
} // end get_ama_entry

add_action( 'rest_api_init', __NAMESPACE__ . '\register_question_api' );
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\register_scripts' );
add_action( 'dude_ama_enqueue_scripts', __NAMESPACE__ . '\enqueue_scripts' );
add_filter( 'autoptimize_filter_noptimize', __NAMESPACE__ . '\ama_noptimize', 10, 0 );

function ama_noptimize() {
  if ( strpos( $_SERVER['REQUEST_URI'], 'ama' ) !== false ) { // phpcs:ignore
    return true;
  } else {
    return false;
  }
} // end ama_noptimize

/**
 * Register scripts
 */
function register_scripts() {

  wp_register_style( 'dude-ama-styles',
    get_theme_file_uri( \Air_Light\get_asset_file( 'ama.css' ) ),
    [],
    filemtime( get_theme_file_path( \Air_Light\get_asset_file( 'ama.css' ) ) )
  );

  wp_register_script( 'vue', 'https://unpkg.com/vue@3.0.5/dist/vue.global.prod.js', [], '3.0.5', true );
  wp_register_script( 'axios', 'https://unpkg.com/axios/dist/axios.min.js', [], '1.0.0', true );
  wp_register_script( 'dude-ama', untrailingslashit( plugin_dir_url( __FILE__ ) ) . '/scripts.js', [ 'vue', 'axios', ], filemtime( untrailingslashit( plugin_dir_path( __FILE__ ) ) . '/scripts.js' ), true );

  wp_localize_script( 'dude-ama', 'dudeAmaApi', [
    'URL' => esc_url( get_home_url() ),
  ] );
} // end register_scripts

/**
 * Enqueue AMA scripts
 */
function enqueue_scripts() {
  wp_enqueue_script( 'vue' );
  wp_enqueue_script( 'axios' );
  wp_enqueue_script( 'dude-ama' );
  wp_enqueue_style( 'dude-ama-styles' );
} // end enqueue_scripts

/**
 * Register API for questions
 */
function register_question_api() {
  register_rest_field(
    'ama',
    'meta',
    [
     'get_callback' => __NAMESPACE__ . '\get_rendered_ama',
     'schema'       => null,
    ]
  );

  register_rest_route( 'ama/v1', '/drafts', array(
    'methods'             => 'GET',
    'callback'            => __NAMESPACE__ . '\get_drafts_count',
    'permission_callback' => '__return_true',
  ) );

  register_rest_route( 'dude-ama/v1', 'create-question/', array(
    'methods'             => 'post',
    'callback'            => __NAMESPACE__ . '\save_question',
    'permission_callback' => '__return_true',
  ) );

  register_rest_route( 'dude-ama/v1', 'add-like/', array(
    'methods'             => 'post',
    'callback'            => __NAMESPACE__ . '\save_like',
    'permission_callback' => '__return_true',
  ) );
} // end register_question_api

function get_drafts_count() {
  $count = wp_cache_get( 'ama-drafts', 'theme' );

  if ( ! $count ) {
    $count = wp_count_posts( 'ama' )->draft;
    wp_cache_set( 'ama-drafts', $count, 'theme', MINUTE_IN_SECONDS / 4 );
  }

  return $count;
} // end get_drafts_count

function save_question( $request ) {
  $question = sanitize_text_field( $request->get_param( 'question' ) );

  if ( ! empty( $question ) ) {
    $new_post = [
      'post_title'    => $question,
      'post_content'  => '',
      'post_status'   => 'draft',
      'post_author'   => 1,
      'post_type'     => 'ama',
    ];

    wp_insert_post( $new_post );
  }
} // end save_question

function save_like( $request ) {
  if ( empty( $request->get_param( 'id' ) ) || ! intval( $request->get_param( 'id' ) ) ) {
    return;
  }

  $id = intval( $request->get_param( 'id' ) );

  // Check if actually a post and check the post type at the same time
  if ( 'ama' !== get_post_type( $id ) ) {
    return;
  }

  $likes = intval( get_post_meta( $id, '_ama-likes', true ) );
  $likes++;

  update_post_meta( $id, '_ama-likes', $likes );
} // end save_like

/**
 * Get rendered html
 */
function get_rendered_ama( $ama ) {
  $rendered_listing = get_ama_entry( $ama['id'], false );
  $likes = get_post_meta( $ama['id'], '_ama-likes', true );

  return [
    'rendered_listing' => $rendered_listing,
    'likes' => $likes,
  ];
} // end get_rendered_ama
