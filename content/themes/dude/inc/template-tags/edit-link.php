<?php
/**
 * Edit link
 *
 * This function shows edit links.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-08 17:18:33
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-09-16 15:02:21
 *
 * @package dude
 */

namespace Air_Light;

function air_edit_link() {
  if ( ! get_edit_post_link() ) {
    return;
  } ?>

  <p class="edit-link">
    <a href="<?php echo esc_url( get_edit_post_link() ); ?>">
      Muokkaa
    </a>
  </p>
<?php } // end air_edit_link
