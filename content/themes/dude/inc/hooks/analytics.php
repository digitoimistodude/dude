<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2022-08-05 14:10:57
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-10 15:11:06
 * @package dude
 */

namespace Air_Light;

// phpcs:disable WordPress.WP.EnqueuedResources.NonEnqueuedScript
function head_analytics_scripts() { ?>
  <?php // We need Vimeo script globally for showreel to work when coming from any page ?>
  <script data-swup-ignore-script defer src="https://player.vimeo.com/api/player.js"></script>

  <?php
  // We need to load up WPForms related scripts on the pages that are no forms
  // to make forms work with Swup.js
  if ( ! is_page( 4487 ) ) : ?>
    <script data-swup-reload-script data-swup-ignore-script src="<?php echo esc_url( get_home_url() ); ?>/content/plugins/wpforms/assets/js/wpforms.min.js" id="wpforms-js-swup"></script>
    <script data-swup-reload-script data-swup-ignore-script src="<?php echo esc_url( get_home_url() ); ?>/content/plugins/wpforms/assets/pro/js/wpforms-conditional-logic-fields.min.js" id="wpforms-builder-conditionals-js-swup"></script>
    <script data-swup-reload-script data-swup-ignore-script src="<?php echo esc_url( get_home_url() ); ?>/content/plugins/wpforms/assets/lib/choices.min.js" id="wpforms-choicesjs-js-swup"></script>
    <script data-swup-reload-script data-swup-ignore-script>
    /* <![CDATA[ */
    var wpforms_conditional_logic = {"11358":{"4":{"logic":[[{"field":"5","operator":"==","value":"Haluan kertoa tarkemmin projektista","type":"checkbox"}]],"action":"show"},"6":{"logic":[[{"field":"5","operator":"==","value":"Haluan kertoa tarkemmin projektista","type":"checkbox"}]],"action":"show"},"9":{"logic":[[{"field":"5","operator":"==","value":"Haluan kertoa tarkemmin projektista","type":"checkbox"}]],"action":"show"},"7":{"logic":[[{"field":"5","operator":"==","value":"Haluan kertoa tarkemmin projektista","type":"checkbox"}]],"action":"show"}}}
    /* ]]> */
    </script>
  <?php endif; ?>

  <?php if ( 'production' === wp_get_environment_type() ) : ?>
    <script data-swup-ignore-script defer data-domain="dude.fi" src="https://analytics.dude.fi/js/plausible.js"></script>
  <?php endif; ?>

  <script>
  /**
   *
   * 👋 Moi!
   *
   * Onpa mahtavaa, että sivustomme koodi on saanut sinut kiinnostumaan. Tuotannossa suurin osa on minifoituna,
   * mutta meidän kaikki tekeminen löytyy myös GitHubistamme: https://github.com/digitoimistodude
   *
   * Tämän sivuston anti löytyy osoitteesta https://github.com/digitoimistodude/dude - tutki rauhassa!
   *
   * Haluaisitko meille töihin? Lähetä sähköpostia osoitteeseen moro@dude.fi.
   * Avoimiin työpaikkoihimme voit tutustua osoitteessa https://www.dude.fi/tyopaikat
   *
   * Toivottavasti palaillaan asiaan!
   *
   *
   *                    `/shhyyyhhyy+:`
   *                 `+hh+.        `-+yds:
   *         :`  ./+omo`                -sdo`
   *         hd`dh/--.                    `+ms`
   *        ydsMN                           `om:
   *       +m` +m.                            -ms
   *       /N:`                                `dy
   *        -dNh+-..  :hyy+.                 -syyMs
   *       `dy.   sNhsN/ `/hh:                /M.-+.
   *       +N     mo -/     .sdo`             /M`
   *       om    +N`          `+dy:           `M:
   *       +m   -N:              -sds:`        +m.
   *       om  :N/````              -ohyo:`     om-
   *       ds +dhyysyyyyyyso/-.-:+oyyyyymNNmhs+:-/ms.
   *     .hd``.          `.-/oys+:.`     ``..:/ohNymNy:
   *     :/N+sN             :Nom+             /M.M: `.:/.
   *      `M/sM+           `ms /N`           `mM.yd
   *      /N`+MN:         -ms   sd-         -mdN .M-
   *      hy -M/dy/-..-:ohy-     :yhs+/::/ohh-yh  hy
   *     `M:  mo .:+ooo/-`         `.::///-` `N/  /N`
   *     +N   :N.    .:+sssso/-`-+syyyyyso:` yd   `M:
   *     mo    +m/-ohy+-.``.-/sho:.`    `-oddd`    mo
   *    -M.     .+y/`                       :      yh
   *    om                                         :M.
   *    hy                                          sm`
   *    N/.+                                       yyNd
   *   :MdMs                                       -Msys
   *   /-/N`                                        om-`
   *     mo `                                      dhdy:
   *    +Myhm                                      hy
   *    `.`/N                                 :s+:`/N`
   *       :M`-h                               +MoyhNo
   *       .MdNd  -h`                      :o` `M:  `.
   *       `y.my+hMo                        hNs:ds
   *         -so/:M./s              --     --hNyys
   *             -MdyM.   /:       ` ho`  .Mysyo.
   *              s- dy-odM- .    yh /Mmo./N
   *                 :Md::M+hM-  omsdyMs/ymy
   *                  y  sh+.om`+N.  .:/:  `
   *                          smN-
   *                           y:
   *
   */
  </script>
<?php } // end head_analytics_scripts

function footer_analytics_scripts() { ?>
<?php } // end footer_analytics_scripts
