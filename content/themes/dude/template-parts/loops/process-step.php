<?php
/**
 * @Author:		Elias Kautto
 * @Date:   		2022-05-31 16:41:52
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-06 14:55:40
 *
 * @package dude
 */

namespace Air_Light;

$step = $args['step'];
$step_number = $args['step_number'];
$button = $step['button'];
?>

<li class="item item-step item-step-big swiper-slide">
  <p class="step-number">
    <?php echo esc_html( absint( $step_number ) + 1 ) ?>
  </p>

  <h2>
    <?php echo esc_html( $step['title'] ) ?>
  </h2>

  <?php echo wp_kses_post( wpautop( $step['content'] ) );

  if ( ! empty( $step['list'] ) ) :
  ?>
    <ul>
      <?php foreach ( $step['list'] as $list_item ) : ?>
        <li>
          <?php if ( empty( $list_item['link'] ) ) :
            echo esc_html( $list_item['list_item'] );
          else :
          ?>
            <a href="<?php echo esc_url( $list_item['link'] ) ?>">
              <?php echo esc_html( $list_item['list_item'] ); ?>
            </a>
          <?php endif; ?>
        </li>
      <?php endforeach; ?>
    </ul>
  <?php endif; ?>

  <?php if ( ! empty( $button ) ) : ?>
    <p class="button-wrapper">
      <a href="<?php echo esc_url( $button['url'] ) ?>" class="button button-style-mint button-large">
        <?php echo esc_html( $button['title'] ) ?>
      </a>
    </p>
  <?php endif; ?>
</li>
