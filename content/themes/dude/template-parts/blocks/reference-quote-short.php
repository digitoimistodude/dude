<?php
/**
 * The template for reference-quote-short
 *
 * Short quote for a reference.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-11-21 15:40:36
 *
 * @package dude
 */

namespace Air_Light;

$post_id = get_the_ID();
$quote = get_post_meta( $post_id, 'quote_short', true );
$person_image = get_post_meta( $post_id, 'quote_person_image', true );
$person_name = get_post_meta( $post_id, 'quote_person', true );
$person_title = get_post_meta( $post_id, 'quote_person_title', true );
$company = get_the_title( $post_id );

$picture_cdn_args = [
  'width'     => '663',
  'height'    => '470',
];

$picture_cdn_srcset = [
  0 => [
    'width'     => '62',
    'height'    => '62',
  ],
  601 => [
    'width'     => '80',
    'height'    => '80',
  ],
  701 => [
    'width'     => '128',
    'height'    => '128',
  ],
];
?>

<section class="block block-reference-quote block-reference-quote-short">
  <div class="container">
    <figure>

      <blockquote>
        <?php echo wp_kses_post( wpautop( $quote ) ) ?>
      </blockquote>

      <figcaption>
        <?php get_picture_element_with_cfcdn( $person_image, $picture_cdn_args, $picture_cdn_srcset ); ?>
        <cite>
          <span class="name"><span class="mdash" aria-hidden="true"></span><?php echo esc_html( $person_name ) ?><span class="comma">, </span></span><span class="name-title"><?php echo esc_html( strtolower( $person_title ) ) ?></span>
          <span class="company"><span class="screen-reader-text-dude">yrityksestä </span><?php echo esc_html( $company ) ?></span>
        </cite>
      </figcaption>

    </figure>
  </div>
</section>
