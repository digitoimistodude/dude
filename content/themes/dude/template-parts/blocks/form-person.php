<?php
/**
 * The template for form-person
 *
 * Description of your block called "form-person" goes here.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-05 15:33:22
 *
 * @package dude
 */

namespace Air_Light;

$title = get_field( 'title' );
$person_id = get_field( 'person_id' );
$form_id = get_field( 'wpforms_id' );

$person = [];
if ( ! empty( $person_id ) ) {
  $person = [
    'name'      => get_the_title( $person_id ),
    'email'     => get_post_meta( $person_id, 'email', true ),
    'tel'       => get_post_meta( $person_id, 'tel', true ),
    'photo'     => get_post_meta( $person_id, 'avatar', true ),
  ];
}

?>

<section class="block block-form-person has-unified-padding-if-stacked">
  <div class="container">

    <div class="form has-transition-fade">
      <?php wpforms_display( $form_id );

      do_action( 'wpforms_wp_footer_end' );
      ?>
    </div>

    <?php // NB! Person section removed (new contact layout 4.10.2022) ?>

  </div>
</section>
