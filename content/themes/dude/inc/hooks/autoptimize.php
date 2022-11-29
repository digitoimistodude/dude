<?php
/**
 * Autoptimize related
 *
 * @Author: Roni Laukkarinen
 * @Date: 2022-11-29 16:36:04
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-11-29 16:36:04
 *
 * @package dude
 */

namespace Air_Light;

// Load minifications after Yoast meta tags
function autoptimize_tweaks( $replacetag ) {
  return array( '</head>', 'before' );
}
