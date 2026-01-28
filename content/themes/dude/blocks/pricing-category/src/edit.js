import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, InspectorControls, RichText, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import './style.scss';
import './editor.scss';

const TEMPLATE = [
  [
    'dude/pricing-item',
    {
      title: 'Pieni sivusto',
      isPopular: false,
      price: '5 000 – 10 000 €',
      shortDescription: 'Pienyrittäjät, freelancerit, yksinyrittäjät',
      content: 'Moderni ja nopea WordPress-sivusto pienille yrityksille. Sisältää responsiivisen suunnittelun, hakukoneoptimoinnin perusteet ja helppokäyttöisen sisällönhallinnan.',
      features: [ 'Responsiivinen design', 'SEO-optimoitu', 'Nopea latausaika', 'Helppo päivitettävyys' ],
    },
  ],
  [
    'dude/pricing-item',
    {
      title: 'Keskikokoinen sivusto',
      isPopular: true,
      price: '10 000 – 25 000 €',
      shortDescription: 'Kasvavat yritykset, verkkokaupat',
      content: 'Laajempi kokonaisuus yrityksille, jotka tarvitsevat monipuolisempia ominaisuuksia. Sisältää räätälöityjä toiminnallisuuksia ja integraatioita.',
      features: [ 'Kaikki pienen sivuston ominaisuudet', 'Räätälöidyt toiminnallisuudet', 'Kolmannen osapuolen integraatiot', 'Koulutus ja dokumentaatio' ],
    },
  ],
  [
    'dude/pricing-item',
    {
      title: 'Laaja sivusto',
      isPopular: false,
      price: '25 000 € +',
      shortDescription: 'Isommat yritykset, monimutkaiset projektit',
      content: 'Täysin räätälöity ratkaisu vaativiin tarpeisiin. Suunnitellaan ja toteutetaan alusta loppuun yhteistyössä asiakkaan kanssa.',
      features: [ 'Täysin räätälöity toteutus', 'Monimutkaiset integraatiot', 'Skaalautuva arkkitehtuuri', 'Jatkuva kehitys ja tuki' ],
    },
  ],
];

const ALLOWED_BLOCKS = [ 'dude/pricing-item' ];

export default function Edit( { attributes, setAttributes } ) {
  const { title, description, paddingTopDesktop, paddingBottomDesktop, paddingTopMobile, paddingBottomMobile } = attributes;

  const blockProps = useBlockProps( {
    className: 'block block-pricing-category has-unified-padding-if-stacked',
    style: {
      '--padding-top-desktop': `${ paddingTopDesktop }px`,
      '--padding-bottom-desktop': `${ paddingBottomDesktop }px`,
      '--padding-top-mobile': `${ paddingTopMobile }px`,
      '--padding-bottom-mobile': `${ paddingBottomMobile }px`,
    },
  } );

  const innerBlocksProps = useInnerBlocksProps(
    { className: 'category-items accordion' },
    {
      template: TEMPLATE,
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: InnerBlocks.ButtonBlockAppender,
    }
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'Kategorian asetukset', 'dude' ) }>
          <p style={ { color: '#757575', fontSize: '12px' } }>{ __( 'Muokkaa sisältöä suoraan lohkossa. Lisää tuotteita painamalla + -painiketta.', 'dude' ) }</p>
        </PanelBody>
        <PanelBody title={ __( 'Padding settings', 'dude' ) } initialOpen={ false }>
          <RangeControl label={ __( 'Padding top (desktop)', 'dude' ) } value={ paddingTopDesktop } onChange={ ( value ) => setAttributes( { paddingTopDesktop: value } ) } min={ 0 } max={ 200 } step={ 1 } />
          <RangeControl label={ __( 'Padding bottom (desktop)', 'dude' ) } value={ paddingBottomDesktop } onChange={ ( value ) => setAttributes( { paddingBottomDesktop: value } ) } min={ 0 } max={ 200 } step={ 1 } />
          <RangeControl label={ __( 'Padding top (mobile)', 'dude' ) } value={ paddingTopMobile } onChange={ ( value ) => setAttributes( { paddingTopMobile: value } ) } min={ 0 } max={ 200 } step={ 1 } />
          <RangeControl label={ __( 'Padding bottom (mobile)', 'dude' ) } value={ paddingBottomMobile } onChange={ ( value ) => setAttributes( { paddingBottomMobile: value } ) } min={ 0 } max={ 200 } step={ 1 } />
        </PanelBody>
      </InspectorControls>

      <section { ...blockProps }>
        <div className="container">
          <div className="pricing-category">
            <div className="category-info">
              <RichText tagName="h2" className="category-title" value={ title } onChange={ ( value ) => setAttributes( { title: value } ) } placeholder={ __( 'Kategorian otsikko…', 'dude' ) } />
              <RichText tagName="p" className="category-description" value={ description } onChange={ ( value ) => setAttributes( { description: value } ) } placeholder={ __( 'Kategorian kuvaus…', 'dude' ) } />
            </div>
            <div { ...innerBlocksProps } />
          </div>
        </div>
      </section>
    </>
  );
}
