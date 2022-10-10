<?php
/**
 * @Author:		Elias Kautto
 * @Date:   		2022-06-20 14:41:04
 * @Last Modified by:   Timi Wahalahti
 * @Last Modified time: 2022-07-29 12:15:09
 *
 * @package dude
 */

namespace Air_Light;

$question_datas = [];
if ( have_posts() ) {
  while ( have_posts() ) {
    the_post();
    $question_datas[] = [
      'title'     => get_the_title(),
      'content'   => get_the_content(),
      'permalink' => get_the_permalink(),
    ];
  }
}

get_header(); ?>

<main class="site-main archive-questions">
  <section class="block block-archive-questions">
    <div class="container">

      <h1 id="content">
        <?php ask_e( 'Arkisto: Kaikki kyssärit' ) ?>
      </h1>

      <div class="accordion" data-allow-toggle>
        <?php foreach ( $question_datas as $question_data ) :
          $key = sanitize_title( $question_data['title'] ); ?>
          <div class="accordion-item">
          <h3>
            <button
              aria-expanded="false"
              class="accordion-trigger"
              aria-controls="<?php echo esc_attr( $key ); ?>"
              id="accordion-<?php echo esc_attr( $key ); ?>">
                <span class="accordion-title">
                  <?php echo esc_html( $question_data['title'] ) ?><span class="accordion-icon"></span>
                </span>
            </button>
          </h3>

          <div
            id="<?php echo esc_attr( $key ); ?>"
            role="region"
            aria-labelledby="accordion-<?php echo esc_attr( $key ); ?>"
            class="accordion-panel"
            hidden="">
              <div>
                <?php echo wp_kses_post( wpautop( $question_data['content'] ) ); ?>
                <p>
                  <a href="<?php echo esc_url( $question_data['permalink'] ) ?>">
                    <?php ask_e( 'Arkisto: Avaa yksittäinen kysymys' ) ?>
                  </a>
                </p>
              </div>
            </div>
          </div>

        <?php endforeach; ?>
      </div>
    </div>

  </section>
</main>

<?php get_footer();
