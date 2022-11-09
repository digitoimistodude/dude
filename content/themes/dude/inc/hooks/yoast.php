<?php
namespace Air_Light;

// Fix archive meta title not updating in author archives
function yoast_author_archive_title( $title ) {
  if ( is_author() ) {
    $author_id = get_user_by( 'slug', get_query_var( 'author_name' ) )->ID;

    if ( $author_id ) {
      // Override too long SEO meta title
      $title = get_the_author_meta( 'display_name', $author_id ) . ' - Digitoimisto Duden blogi';
    }
  }

  return $title;
}
