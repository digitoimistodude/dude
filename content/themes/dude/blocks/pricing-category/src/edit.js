import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  useInnerBlocksProps,
  InspectorControls,
} from '@wordpress/block-editor';
import {
  PanelBody,
} from '@wordpress/components';
import './style.scss';

const TEMPLATE = [
  [ 'core/heading', {
    level: 2,
    content: 'Räätälöidyt WordPress-sivustot',
    placeholder: __( 'Kategorian otsikko...', 'dude' ),
    className: 'category-title',
  } ],
  [ 'core/paragraph', {
    content: 'Lorem ipsum dolor sit amet consectetur. Dictumst malesuada sem platea placerat arcu elit morbi.',
    placeholder: __( 'Kategorian kuvaus...', 'dude' ),
    className: 'category-description',
  } ],
  [ 'dude/pricing-item', {
    title: 'Pieni sivusto',
    isPopular: false,
    price: '5 000 – 10 000 €',
    shortDescription: 'Pienyrittäjät, freelancerit, yksinyrittäjät',
    content: 'Moderni ja nopea WordPress-sivusto pienille yrityksille. Sisältää responsiivisen suunnittelun, hakukoneoptimoinnin perusteet ja helppokäyttöisen sisällönhallinnan.',
    features: [ 'Responsiivinen design', 'SEO-optimoitu', 'Nopea latausaika', 'Helppo päivitettävyys' ],
  } ],
  [ 'dude/pricing-item', {
    title: 'Keskikokoinen sivusto',
    isPopular: true,
    price: '10 000 – 25 000 €',
    shortDescription: 'Kasvavat yritykset, verkkokaupat',
    content: 'Laajempi kokonaisuus yrityksille, jotka tarvitsevat monipuolisempia ominaisuuksia. Sisältää räätälöityjä toiminnallisuuksia ja integraatioita.',
    features: [ 'Kaikki pienen sivuston ominaisuudet', 'Räätälöidyt toiminnallisuudet', 'Kolmannen osapuolen integraatiot', 'Koulutus ja dokumentaatio' ],
  } ],
  [ 'dude/pricing-item', {
    title: 'Laaja sivusto',
    isPopular: false,
    price: '25 000 € +',
    shortDescription: 'Isommat yritykset, monimutkaiset projektit',
    content: 'Täysin räätälöity ratkaisu vaativiin tarpeisiin. Suunnitellaan ja toteutetaan alusta loppuun yhteistyössä asiakkaan kanssa.',
    features: [ 'Täysin räätälöity toteutus', 'Monimutkaiset integraatiot', 'Skaalautuva arkkitehtuuri', 'Jatkuva kehitys ja tuki' ],
  } ],
];

const ALLOWED_BLOCKS = [ 'core/heading', 'core/paragraph', 'dude/pricing-item' ];

export default function Edit() {
  const blockProps = useBlockProps( {
    className: 'block block-pricing-category has-unified-padding-if-stacked',
  } );

  const innerBlocksProps = useInnerBlocksProps(
    { className: 'pricing-category' },
    {
      template: TEMPLATE,
      allowedBlocks: ALLOWED_BLOCKS,
    }
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'Kategorian asetukset', 'dude' ) }>
          <p style={ { color: '#757575', fontSize: '12px' } }>
            { __( 'Muokkaa sisältöä suoraan lohkossa. Lisää tuotteita painamalla + -painiketta.', 'dude' ) }
          </p>
        </PanelBody>
      </InspectorControls>

      <section { ...blockProps }>
        <div className="container">
          <div { ...innerBlocksProps } />
        </div>
      </section>
    </>
  );
}
