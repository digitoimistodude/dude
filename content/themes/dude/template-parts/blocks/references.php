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

if ( empty( $title ) || empty( $reference_ids ) ) {
  maybe_show_error_block( 'A title is required' );
  return;
}
?>

<section class="block block-references has-unified-padding-if-stacked">
  <div class="container">

    <h2 class="block-heading<?php if ( ! $show_title ) echo ' screen-reader-text-dude'; ?>">
      <?php echo esc_html( $title ); ?>
    </h2>

    <?php if ( $show_logos ) : ?>
      <h2 class="logos-label" id="asiakkaitamme">
        Asiakkaitamme
      </h2>

      <ul class="logos" aria-describedby="asiakkaitamme">
        <?php foreach ( $logos as $logo ) {
          $logo_path = get_theme_file_path( "assets/svg/logos/{$logo}.svg" );
          if ( ! file_exists( $logo_path ) ) {
            continue;
          } ?>

          <li><?php include $logo_path; ?></li>
        <?php } ?>
      </ul>
    <?php endif; ?>

    <div class="cols cols-two">
      <?php foreach ( $reference_ids as $key => $reference_id ) {
        get_template_part( 'template-parts/loops/reference', null, [ 'post_id' => $reference_id, 'key' => $key ] );
      } ?>
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
