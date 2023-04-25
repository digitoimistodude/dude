<?php
/**
 * Lead magnet / quiz
 *
 * Marketing quiz related hooks.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-10-11 17:44:19
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-04-25 16:15:47
 *
 * @package dude
 */

/**
 * Print confirmation after form has been submitted
 *
 * @link https://wpforms.com/developers/how-to-show-all-fields-in-your-confirmation-message/
 */
 function wpf_dev_frontend_confirmation_message( $message, $form_data, $fields, $entry_id ) {

  // Only run on my form with a certain ID
  if ( 15271 !== absint( $form_data['id'] ) ) {
    return $message;
  }

  // Needed fields
  $email_address = $fields['12']['value'];

  $message = '<div class="lead-magnet-confirmation-message">
      <h3 style="color: var(--color-success);">Kiitos testin täyttämisestä!</h3>
      <p class="lead-magnet__text">Testitulokset on lähetetty sähköpostiosoitteeseesi <strong style="color: var(--color-hover-main-level);">' . $email_address . '</strong>. Jos sinulla on verkkosivujenne kehittämisideoita, lähetä ihmeessä viestiä <a href="mailto:moro@dude.fi">moro@dude.fi</a> tai soita toimitusjohtaja Juha Laitiselle <a href="tel:+358400443221">0400 443 221</a>.</p>
    </div>';

  return $message;

}

add_filter( 'wpforms_frontend_confirmation_message', __NAMESPACE__ . '\wpf_dev_frontend_confirmation_message', 10, 4 );
