<?php
/**
 * The template for relevanssi-related
 *
 * Description of the file called
 * relevanssi-related.
 *
 * @Author:		Tuomas Marttila
 * @Date:   		2022-06-21 14:51:10
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 12:14:23
 *
 * @package dude
 */

if ( empty( $related_posts ) ) {
  return;
}
?>

<section class="block block-blog-relevant">
  <div class="container">
    <h2>Lue myös nämä</h2>

    <div class="cols">
      <?php foreach ( $related_posts as $related_post ) {
        get_template_part( 'template-parts/loops/post', null, [ 'post_id' => $related_post ] );
      } ?>
    </div>

  </div>
</section>
