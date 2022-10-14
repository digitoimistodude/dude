<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2022-04-23 16:15:21
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-14 11:35:55
 *
 * @package dude
 */

namespace Air_Light;

$data = [
  'color'  => get_post_meta( $args['post_id'], 'brand_color_official', true ),
  'quote'   => get_post_meta( $args['post_id'], $args['quote_field'], true ),
  'person'  => [
    'name'      => get_post_meta( $args['post_id'], 'quote_person', true ),
    'job_title' => get_post_meta( $args['post_id'], 'quote_person_title', true ),
    'image'     => get_post_meta( $args['post_id'], 'quote_person_image', true ),
    'company'   => get_the_title( $args['post_id'] ),
  ],
];

$picture_cdn_args = [
  'width'   => '635',
  'height'  => '635',
  'classes' => [ 'person' ],
];

$picture_cdn_srcset = [
  220 => [
    'width'     => '64',
    'height'    => '64',
  ],
  768 => [
    'width'     => '64',
    'height'    => '64',
  ],
];


?>

<li class="item item-quote item-quote-<?php echo esc_html( sanitize_title( $data['person']['company'] ) ); ?> item-quote-big swiper-slide"<?php if ( is_front_page() || is_page( 9 ) ) echo 'style="background-color: ' . esc_attr( $data['color'] ) . ';"'; ?>>
  <figure>

    <blockquote>
      <?php echo wp_kses_post( wpautop( $data['quote'] ) ) ?>
    </blockquote>

    <figcaption>
      <?php get_picture_element_with_cfcdn( $data['person']['image'], $picture_cdn_args, $picture_cdn_srcset ); ?>

      <cite>
        <span class="name"><span class="mdash" aria-hidden="true"></span><?php echo esc_html( $data['person']['name'] ) ?><span class="comma">, </span></span><span class="name-title"><?php echo esc_html( strtolower( $data['person']['job_title'] ) ) ?></span>
        <span class="company"><span class="screen-reader-text-dude">yrityksestä </span><?php echo esc_html( $data['person']['company'] ) ?></span>
      </cite>
    </figcaption>

  </figure>
</li>
