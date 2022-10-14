<?php
/**
 * The template for title-images
 *
 * Description of your block called "title-images" goes here.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-14 12:19:59
 *
 * @package dude
 */

namespace Air_Light;

$title = get_field( 'title' );
$content = get_field( 'content' );
$images = get_field( 'images' );
$link = get_field( 'link' );

if ( empty( $images ) ) {
  maybe_show_error_block( 'Laitteleha niitä kuvia.' );
  return;
}

if ( empty( $title ) ) {
  maybe_show_error_block( 'Otsikkoa ei ole asetettuna.' );
  return;
}
?>

<section class="block block-title-images">
  <div class="container">

    <div class="content">
      <h2>
        <?php echo esc_html( $title ); ?>
      </h2>

      <?php if ( ! empty( $content ) ) : ?>
        <div class="content-text">
          <?php echo wp_kses_post( $content ); ?>
        </div>
      <?php endif; ?>

      <?php if ( ! empty( $link ) ) : ?>
        <p class="link-underlined-wrapper">
          <a class="link-underlined" href="<?php echo esc_url( $link['url'] ) ?>">
            <?php echo esc_html( $link['title'] ) ?>
          </a>
        </p>
      <?php endif; ?>
    </div>

    <div class="images">
      <?php $count = 1; foreach ( $images as $image ) : ?>
        <div class="image">
          <?php if ( 1 === $count ) {
              $picture_cdn_args = [
                'width'   => '700',
                'height'  => '467',
              ];

              $picture_cdn_srcset = [
                220 => [
                  'width'     => '218',
                  'height'    => '145',
                ],
                480 => [
                  'width'     => '218',
                  'height'    => '145',
                ],
                600 => [
                  'width'     => '278',
                  'height'    => '185',
                ],
                760 => [
                  'width'     => '429',
                  'height'    => '286',
                ],
                1160 => [
                  'width'     => '656',
                  'height'    => '437',
                ],
                1591 => [
                  'width'     => '700',
                  'height'    => '467',
                ],
              ];

            } elseif ( 2 === $count ) {
              $picture_cdn_args = [
                'width'     => '525',
                'height'    => '350',
              ];

              $picture_cdn_srcset = [
                220 => [
                  'width'     => '163',
                  'height'    => '109',
                ],
                620 => [
                  'width'     => '252',
                  'height'    => '168',
                ],
                1000 => [
                  'width'     => '370',
                  'height'    => '207',
                ],
                1460 => [
                  'width'     => '525',
                  'height'    => '350',
                ],
              ];
            } elseif ( 3 === $count ) {
              $picture_cdn_args = [
                'width'     => '500',
                'height'    => '333',
              ];

              $picture_cdn_srcset = [
                220 => [
                  'width'     => '218',
                  'height'    => '145',
                ],
                620 => [
                  'width'     => '263',
                  'height'    => '175',
                ],
                1000 => [
                  'width'     => '429',
                  'height'    => '286',
                ],
                1200 => [
                  'width'     => '500',
                  'height'    => '333',
                ],
              ];
            } elseif ( 4 === $count ) {
              $picture_cdn_args = [
                'width'     => '900',
                'height'    => '450',
              ];

              $picture_cdn_srcset = [
                220 => [
                  'width'     => '288',
                  'height'    => '144',
                ],
                620 => [
                  'width'     => '372',
                  'height'    => '186',
                ],
                1000 => [
                  'width'     => '720',
                  'height'    => '360',
                ],
                1201 => [
                  'width'     => '900',
                  'height'    => '450',
                ],
              ];
            } else {
              $picture_cdn_args = [
                'width'     => '525',
                'height'    => '350',
              ];

              $picture_cdn_srcset = [
                220 => [
                  'width'     => '163',
                  'height'    => '109',
                ],
                620 => [
                  'width'     => '252',
                  'height'    => '168',
                ],
                1000 => [
                  'width'     => '370',
                  'height'    => '207',
                ],
                1460 => [
                  'width'     => '525',
                  'height'    => '350',
                ],
              ];
            }
            ?>
            <?php get_picture_element_with_cfcdn( $image, $picture_cdn_args, $picture_cdn_srcset ); ?>
        </div>
      <?php $count++; endforeach; ?>
    </div>

  </div>
</section>
