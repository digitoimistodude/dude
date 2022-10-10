<?php
/**
 * @Author:		Elias Kautto
 * @Date:   		2022-06-27 11:16:13
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 12:07:37
 *
 * @package dude
 */

namespace Air_Light;

$job_id = $args;

$data = [
  'permalink' => get_the_permalink( $job_id ),
  'title'     => get_the_title( $job_id ),
  'location'  => get_post_meta( $job_id, 'location', true ),
];

if ( empty( $data['permalink'] ) || empty( $data['title'] ) ) {
  return;
}
?>

<li class="job">
  <a class="job-link" href="<?php echo esc_url( $data['permalink'] ) ?>">
    <span class="job-title">
      <?php echo esc_html( $data['title'] ) ?>
      <?php include get_theme_file_path( '/svg/arrow-right.svg' ); ?>
    </span>

    <?php if ( isset( $data['location'] ) && ! empty( $data['location'] ) ) : ?>
      <span class="job-location">
        <?php echo esc_html( $data['location'] ) ?>
      </span>
    <?php endif; ?>
  </a>
</li>
