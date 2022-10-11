<?php
/**
 * Air-cookie
 *
 * Cookie consent hooks.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-10-11 17:44:19
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-11 17:56:31
 *
 * @package dude
 */

// Cookie consent
add_action( 'air_cookie_js_analytics', __NAMESPACE__ . '\air_cookie_js_analytics' );
function air_cookie_js_analytics() {
  if ( is_user_logged_in() ) {
    return;
  }

  ob_start(); ?>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:8741,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  <?php echo ob_get_clean(); // phpcs:ignore
}
