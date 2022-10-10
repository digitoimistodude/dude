<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2022-04-23 16:15:21
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-10 15:38:28
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
?>

<li class="item item-quote item-quote-<?php echo esc_html( sanitize_title( $data['person']['company'] ) ); ?> item-quote-big swiper-slide"<?php if ( is_front_page() || is_page( 9 ) ) echo 'style="background-color: ' . esc_attr( $data['color'] ) . ';"'; ?>>
  <figure>

    <blockquote>
      <?php echo wp_kses_post( wpautop( $data['quote'] ) ) ?>
    </blockquote>

    <figcaption>
      <picture>
        <source media="(min-width: 320px) and (max-width: 767px)" srcset="<?php echo esc_url( wp_get_attachment_image_url( $data['person']['image'], 'thumbnail' ) ); ?>">
        <source media="(min-width: 768px)" srcset="<?php echo esc_url( wp_get_attachment_image_url( $data['person']['image'], 'thumbnail' ) ); ?>">
        <img
          class="person"
          loading="lazy"
          src="<?php echo esc_url( wp_get_attachment_image_url( $data['person']['image'], 'thumbnail' ) ); ?>"
          alt="<?php echo esc_attr( get_post_meta( $data['person']['image'], '_wp_attachment_image_alt', true ) ); ?>"
        >
      </picture>

      <cite>
        <span class="name"><span class="mdash" aria-hidden="true"></span><?php echo esc_html( $data['person']['name'] ) ?><span class="comma">, </span></span><span class="name-title"><?php echo esc_html( strtolower( $data['person']['job_title'] ) ) ?></span>
        <span class="company"><span class="screen-reader-text-dude">yrityksestä </span><?php echo esc_html( $data['person']['company'] ) ?></span>
      </cite>
    </figcaption>

  </figure>
</li>
