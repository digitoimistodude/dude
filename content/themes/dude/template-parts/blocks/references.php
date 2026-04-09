<?php
/**
 * The template for references
 *
 * A block for references.
 *
 * @Author:		Roni Laukkarinen
 * @Date:   		2022-02-10 12:28:36
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-02-17 11:30:55
 *
 * @package dude
 */

namespace Air_Light;

$logos = [
  'otava',
  'gofore',
  'upcloud',
  'musiikkitalo',
  'north-patrol',
  'forum',
  'kuivalihakundi',
  'siipiweikot',
  // 'abbq',
  // 'aicci',
  // 'akvafilter',
  // 'alba',
  // 'alive',
  // 'alonen',
  // 'alpa',
  // 'ark',
  // 'arkkitehti-lehti',
  // 'arkkitehtuurin-finlandia',
  // 'atena',
  // 'barexplosive',
  // 'berner',
  'suomenkirjasaatio',
  // 'biisoni',
  // 'bitwise',
  // 'blackbruin',
  'business-tampere',
  // 'byemmi',
  'caravanlehti',
  // 'co2esto',
  // 'crmservice',
  'elonen',
  // 'eurohostel',
  // 'figbc',
  // 'fimpec',
  // 'finn-id',
  // 'finse',
  // 'flowhouse',
  // 'flumenia',
  'gradia',
  // 'groom',
  // 'halltex',
  // 'harmooni',
  // 'helinä-rautavaaran-museo',
  // 'hotellialba',
  // 'jylkkari',
  // 'kata-safety',
  // 'keskiaikafestivaali',
  // 'kiilopää',
  // 'kiinteistolehti',
  // 'kiinteistoliitto',
  'kiinteistomedia',
  'kktavastia',
  // 'kuntoutuskouluttajat',
  // 'kustantajat',
  'lahden-kaupunki',
  // 'lhkk',
  // 'liiga',
  'padasjoki',
  'sofioksanen',
  'lutakko',
  'bauermedia',
  'mauri-kunnas1',
  // 'mediashake',
  // 'mirjam-helin',
  // 'miseva',
  // 'mpn',
  // 'mpsmotors',
  // 'murska',
  // 'musiikkikampus',
  // 'nilkko',
  // 'nodeon',
  // 'oivanki',
  // 'paahtimo-papu',
  'like',
  // 'paijanneristeilythilden',
  // 'pama',
  // 'paut',
  // 'paytrail',
  // 'pienpanimoliitto',
  // 'probot',
  'radiomedia',
  'rakennusliitto',
  'rakentaja',
  // 'realsnacks-alt',
  // 'redanredan',
  'rex',
  // 'saarikoski',
  // 'safa',
  'sagax',
  // 'sfcaravan',
  // 'sievo',
  // 'sohwi',
  'suomen-uusiutuvat',
  // 'tahto',
  // 'tatujapatu',
  // 'teeleidi',
  // 'tikka-spikes',
  // 'tofuture',
  // 'trey',
  // 'tulos',
  'turunakk',
  'ulkoministerio',
  // 'vaao',
  // 'valkeakosken-ammattiopisto',
  // 'varjola-alt',
  // 'vastuunjako',
  // 'verena-alt',
  // 'vierityspalkki',
  // 'viivijawagner',
  // 'visiiri',
  'workpower-nocolor',
  // 'wotkins',
  'ylva',
];

if ( ! isset( $args ) ) {
  $title = get_field( 'title' );
  $reference_ids = get_field( 'reference_ids' );
  $link = get_field( 'link' );
  $show_logos = get_field( 'show_logos' );
  $show_title = get_field( 'show_title' );
} else {
  $title = $args['title'];
  $reference_ids = $args['reference_ids'];
  $link = $args['link'];
  $show_logos = $args['show_logos'];
  $show_title = $args['show_title'];
}

?>

<section class="block block-references has-unified-padding-if-stacked">
  <div class="container">

    <?php if ( is_front_page() && $show_logos ) : ?>
      <div class="references-header">
        <h2 class="block-heading<?php if ( ! $show_title ) echo ' screen-reader-text-dude'; ?>">
          <?php echo esc_html( $title ); ?>
        </h2>

        <?php
        $nps_score = get_field( 'nps_score' );
        $nps_description = get_field( 'nps_description' );

        if ( ! $nps_score ) {
          $nps_score = '92';
        }

        if ( ! $nps_description ) {
          $nps_description = 'Ja tästä jotain tosi järkevää asiaa';
        }
        ?>

        <svg style="display:none;position:absolute;inset:0;z-index:0">
          <filter id="liquid-lens" x="-50%" y="-50%" width="200%" height="200%">
            <feImage x="0" y="0" result="normalMap" xlink:href="data:image/svg+xml;utf8,
              &lt;svg xmlns='http://www.w3.org/2000/svg' width='300' height='300'&gt;
                &lt;radialGradient id='nmap' cx='50%' cy='50%' r='50%'&gt;
                  &lt;stop offset='0%' stop-color='rgb(128,128,255)'/&gt;
                  &lt;stop offset='100%' stop-color='rgb(255,255,255)'/&gt;
                &lt;/radialGradient&gt;
                &lt;rect width='100%' height='100%' fill='url(#nmap)'/&gt;
              &lt;/svg&gt;" />
            <feDisplacementMap in="SourceGraphic" in2="normalMap" scale="60" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feMerge>
              <feMergeNode in="displaced" />
            </feMerge>
          </filter>
        </svg>
        <div class="nps-badge" aria-label="NPS-pisteet: <?php echo esc_attr( $nps_score ); ?>">
          <div class="nps-glass"></div>
          <span class="nps-number"><?php echo esc_html( $nps_score ); ?></span>
          <div class="nps-details">
            <span class="nps-label">NPS</span>
            <?php if ( $nps_description ) : ?>
              <span class="nps-description"><?php echo esc_html( $nps_description ); ?></span>
            <?php endif; ?>
          </div>
        </div>
      </div>
    <?php else : ?>
      <h2 class="block-heading<?php if ( ! $show_title ) echo ' screen-reader-text-dude'; ?>">
        <?php echo esc_html( $title ); ?>
      </h2>
    <?php endif; ?>

    <?php if ( $show_logos ) : ?>
      <h2 class="logos-label" id="asiakkaitamme">
        Asiakkaitamme
      </h2>

      <ul class="logos" aria-describedby="asiakkaitamme">
        <?php foreach ( $logos as $logo ) {
          $logo_path = get_theme_file_path( "assets/svg/logos/{$logo}.svg" );
          if ( ! file_exists( $logo_path ) ) {
            continue;
          }
          ?>

          <li><?php include $logo_path; ?></li>
        <?php } ?>
      </ul>
    <?php endif; ?>

    <div class="cols cols-two">
      <?php foreach ( $reference_ids as $key => $reference_id ) {
        get_template_part( 'template-parts/loops/reference', null, [ 'post_id' => $reference_id, 'key' => $key ] );
      }
      ?>
    </div>

    <?php if ( ! empty( $link ) ) : ?>
      <p class="link-wrapper">
        <a href="<?php echo esc_url( $link['url'] ) ?>" class="arrow-link">
          <?php echo esc_html( $link['title'] ); ?>
          <span class="arrow-link-arrow"></span>
        </a>
      </p>
    <?php endif; ?>

  </div>
</section>
