<?php
/**
 * Content
 *
 * WYSIWYG content block.
 *
 * @Author:		Tuomas Marttila
 * @Date:   		2022-01-04 11:40:09
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 11:41:59
 *
 * @package air-blocks
 */

namespace Air_Light;

$content = get_field( 'content' );

if ( empty( $content ) ) {
  maybe_show_error_block( 'Tekstisisältö on pakollinen' );
  return;
}
?>

<section class="block block-content">
  <div class="container">
    <?php echo wp_kses_post( wpautop( $content ) ); ?>
  </div>
</section>
