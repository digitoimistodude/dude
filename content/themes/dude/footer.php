<?php
/**
 * Template for displaying the footer
 *
 * Description for template.
 *
 * @Author: Roni Laukkarinen
 * @Date: 2020-05-11 13:33:49
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-11-06 16:45:17
 *
 * @package dude
 */

namespace Air_Light;

/**
 * !!! Please note !!!
 *
 * Analytics and other external code go to
 * inc/hooks/analytics.php file, not here.
 *
 * !!! Please note !!!
 */

// Sales phone
$salesperson_id = get_custom_setting( 'salesperson', 'general' );
$sales_phone = get_post_meta( $salesperson_id, 'tel', true );
$sales_phone_tel_value = preg_replace( '/\s+/', '', $sales_phone );
?>

</div><!-- #content -->

<footer id="colophon" class="site-footer has-dark-bg">

  <div class="container">
    <nav aria-label="Alavalikko">
      <?php wp_nav_menu( array(
        'theme_location'  => 'footer',
        'container'       => null,
        'container_class' => null,
        'depth'           => 0,
        'menu_class'      => 'menu-items',
        'menu_id'         => 'footer-menu',
        'echo'            => true,
        'fallback_cb'     => __NAMESPACE__ . '\Nav_Walker::fallback',
        'items_wrap'      => '<ul id="%1$s" class="%2$s">%3$s</ul>',
        'walker'          => new Nav_Walker(),
      ) ); ?>
    </nav>

    <div class="footer-columns">

      <div class="col col-full-width">
        <p class="introduction">Dude, vuodesta 2013. Tuntuuko, että olisimme oikea tekijä sinulle ja sinä oikea asiakas meille? Ota meihin yhteyttä.</p>
      </div>

      <div class="col">
        <h2>Asiakkuudet</h2>
        <p>Uskomme että voimme tavalla tai toisella auttaa sinua projektisi alkuvaiheessa. Vastaamme sinulle viimeistään seuraavana arkipäivänä.</p>

        <h3 class="screen-reader-text-dude">Ota yhteyttä</h3>

        <ul>
          <li><a href="mailto:moro@dude.fi">moro@dude.fi</a></li>
          <li><a href="tel:<?php echo esc_html( $sales_phone_tel_value ); ?>"><?php echo esc_html( $sales_phone ); ?></a></li>
        </ul>
      </div>

      <div class="col">
        <h2>Yhteystiedot</h2>
        <p>Digitoimisto Dude Oy<br />
        Kauppakatu 14<br />
        40100 Jyväskylä</p>

        <p>
          <a class="button button-small" href="<?php echo esc_url( get_page_link( 4487 ) ); ?>">
            Lähetä viesti
          </a>
        </p>
      </div>

    </div>

    <div class="certificates">
      <ul aria-label="Logot ja sertifikaatit">
        <li>
          <a aria-label="Ulkoinen sivusto: Vierityspalkki" class="no-external-link-indicator" href="https://vierityspalkki.fi/toimistot/digitoimisto-dude"><?php include get_theme_file_path( '/svg/certificates/certificate-vierityspalkki.svg' ); ?></a>
        </li>
        <li>
          <a aria-label="Ulkoinen sivusto: ite wiki" class="no-external-link-indicator" href="https://www.itewiki.fi/digitoimisto-dude"><?php include get_theme_file_path( '/svg/certificates/certificate-itewiki.svg' ); ?></a>
        </li>
        <li>
          <a aria-label="Ulkoinen sivusto: Koodia Suomesta" class="no-external-link-indicator" href="https://koodiasuomesta.fi/"><?php include get_theme_file_path( '/svg/certificates/certificate-koodiasuomesta.svg' ); ?></a>
        </li>
        <li>
          <a aria-label="Ulkoinen sivusto: .fi-verkkotunnusvälittäjä" class="no-external-link-indicator" href="https://www.traficom.fi/fi/viestinta/fi-verkkotunnukset/etsi-verkkotunnusvalittaja"><?php include get_theme_file_path( '/svg/certificates/certificate-fivalittaja.svg' ); ?></a>
        </li>
        <li>
          <a aria-label="Ulkoinen sivusto: Green Web Foundation" class="no-external-link-indicator" href="https://www.thegreenwebfoundation.org/green-web-check/?url=https%3A%2F%2Fwww.dude.fi"><?php include get_theme_file_path( '/svg/certificates/certificate-greenwebfoundation.svg' ); ?></a>
        </li>
        <li>
          <a aria-label="Ulkoinen sivusto: Suomen avoimien tietojärjestelmien keskus-COSS ry" class="no-external-link-indicator" href="https://coss.fi/blogi/dudella-avoin-lahdekoodi-ja-aktiivinen-osallistuminen-yhteison-toimintaan-ovat-osa-menestysta/"><?php include get_theme_file_path( '/svg/certificates/certificate-coss.svg' ); ?></a>
        </li>
        <li>
          <a aria-label="Ulkoinen sivusto: Luotettava kumppani" class="no-external-link-indicator" href="https://zeckit.com/selvitys/FI/2548021-5?lang=fi"><?php include get_theme_file_path( '/svg/certificates/certificate-luotettavakumppani-no-box.svg' ); ?></a>
        </li>
        <li>
          <a aria-label="Ulkoinen sivusto: AAA-luottoluokitus" class="no-external-link-indicator" href="https://www.bisnode.fi/aaa-kauppa/products/25480215"><?php include get_theme_file_path( '/svg/certificates/certificate-aaa-2023.svg' ); ?></a>
        </li>
      </ul>
    </div>

    <div class="bottom-bar">
      <p class="copyright"><a class="no-external-link-indicator" href="https://www.asiakastieto.fi/yritykset/fi/digitoimisto-dude-oy/25480215/yleiskuva" aria-label="Ulospäin vievä linkki: Digitoimisto Duden Asiakastieto-profiili">Digitoimisto Dude Oy</a> - Digitaalinen mainostoimisto, Jyväskylä. Some: <a class="no-external-link-indicator" href="https://www.facebook.com/digitoimistodude">Facebook</a>, <a class="no-external-link-indicator" href="https://twitter.com/dudetoimisto">X</a>, <a class="no-external-link-indicator" href="https://mementomori.social/@dude" rel="me">Mastodon</a>, <a href="https://bsky.app/profile/dude.fi" class="no-external-link-indicator">Bluesky</a>, <a class="no-external-link-indicator" href="https://www.threads.net/@digitoimistodude">Threads</a>, <a class="no-external-link-indicator" href="https://www.linkedin.com/company/digitoimisto-dude-oy">LinkedIn</a>, <a class="no-external-link-indicator" href="https://www.instagram.com/digitoimistodude/">Instagram</a> ja <a class="no-external-link-indicator" href="https://github.com/digitoimistodude">Github</a>. &mdash; <a href="https://handbook.dude.fi/tietosuojaseloste">Tietosuojaseloste</a> &mdash; <button data-cc="c-settings" class="cc-link cookie-settings">Evästeasetukset</button>
      </p>

      <div role="radiogroup" aria-label="<?php ask_e( 'Saavutettavuus: Valitse väriteema' ); ?>" id="dark-mode-footer-toggle" class="dark-mode-footer-toggle">

        <input id="color-scheme-toggle-light" type="radio" name="colorModeToggle" value="light">
        <label tabindex="-1" for="color-scheme-toggle-light" class="dark-mode-footer-label">Vaalea</label>

        <input id="color-scheme-toggle-dark" type="radio" name="colorModeToggle" value="dark">
        <label tabindex="-1" for="color-scheme-toggle-dark" class="dark-mode-footer-label">Tumma</label>

        <input id="color-scheme-toggle-auto" type="radio" name="colorModeToggle" value="auto" checked>
        <label tabindex="0" for="color-scheme-toggle-auto" class="dark-mode-footer-label">Automaattinen</label>

      </div>

    </div>

  </div>
</footer><!-- #colophon -->

</div><!-- #page -->

<?php wp_footer(); ?>

<svg aria-hidden="true" class="screen-reader-text duotone-filters" xmlns="http://www.w3.org/2000/svg">
  <filter id="duotone-dude-brand-bright" color-interpolation-filters="sRGB" x="0" y="0" height="100%" width="100%">
    <feColorMatrix id="fe-2" type="matrix" values="0.375 0 0 0 0.1171875 0.734375 0 0 0 0.26171875 0.59765625 0 0 0 0.28125 0 0 0 1 0">
    </feColorMatrix>
  </filter>
</svg>

<button
  id="top"
  class="top"
  type="button"
>
  <span class="screen-reader-text-dude"><?php echo esc_html( get_default_localization( 'Back to top' ) ); ?></span>
  <span aria-hidden="true">&uarr;</span>
</button>

</body>
</html>
