<?php
/**
 * The template for job-techniques
 *
 * Description of your block called "job-techniques" goes here.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-08-30 19:47:30
 *
 * @package dude
 */

namespace Air_Light;

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
} else {
  $title = $args['title'];
}

$logos = [
  'apple'     => 'https://www.apple.com/fi/macbook-pro-16/',
  'gulp'      => 'https://gulpjs.com/',
  'webpack'   => 'https://webpack.js.org/',
  'wordpress' => 'https://codex.wordpress.org/Main_Page',
  'vuejs'     => 'https://vuejs.org/',
  'redis'     => 'https://redis.io/',
  'php'       => 'https://www.php.net/',
  'js'        => 'https://www.javascript.com/',
  'html'      => 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  'css'       => 'https://github.com/digitoimistodude/awesome-frontend',
  'babel'     => 'https://babeljs.io/',
  'sass'      => 'https://sass-lang.com/documentation/syntax#scss',
  'es6'       => 'https://www.w3schools.com/js/js_es6.asp',
  'github'    => 'https://github.com/digitoimistodude',
  'nginx'     => 'https://www.nginx.com/',
  'bash'      => 'https://www.gnu.org/software/bash/',
  'composer'  => 'https://getcomposer.org/',
  'npm'       => 'https://www.npmjs.com/',
];
?>

<section class="block block-job-techniques has-unified-padding-if-stacked">
  <div class="container">

    <header class="block-head block-head-small">
      <h2 class="block-title">
        <?php echo esc_html( $title ) ?>
      </h2>
    </header>

    <ul class="logo-wall">

      <?php foreach ( $logos as $key => $url ) : ?>
        <li>
          <a href="<?php echo esc_url( $url ) ?>" class="no-external-link-indicator">
            <?php include get_theme_file_path( "assets/svg/stack/${key}.svg" ); ?>
          </a>
        </li>
      <?php endforeach; ?>

    </ul>

  </div>
</section>
