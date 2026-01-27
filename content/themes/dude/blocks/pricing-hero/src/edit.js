import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import './style.scss';

const TEMPLATE = [
  [
    'core/heading',
    {
      level: 1,
      content: 'Hinnasto',
      placeholder: __( 'Esiotsikko…', 'dude' ),
      className: 'prefix',
    },
  ],
  [
    'core/heading',
    {
      level: 2,
      content: 'Investoi parempaan<br>digitaaliseen läsnäoloon',
      placeholder: __( 'Kirjoita otsikko…', 'dude' ),
    },
  ],
  [
    'core/paragraph',
    {
      content: 'Kaikki palvelumme ovat räätälöityjä ja suunniteltu kestämään aikaa. Teemme ratkaisuja, jotka toimivat useita vuosia ja tukevat liiketoimintasi kasvua. Investointi, joka maksaa itsensä takaisin päivä päivältä.',
      placeholder: __( 'Kirjoita ingressi…', 'dude' ),
      className: 'ingress',
    },
  ],
  [
    'core/buttons',
    {},
    [
      [
        'core/button',
        {
          text: 'Ota yhteyttä',
          className: 'is-style-mint',
        },
      ],
    ],
  ],
];

export default function Edit( { attributes, setAttributes } ) {
  const { paddingTopDesktop, paddingBottomDesktop, paddingTopMobile, paddingBottomMobile } = attributes;

  const blockProps = useBlockProps( {
    className: 'block block-pricing-hero',
    style: {
      '--padding-top-desktop': `${ paddingTopDesktop }px`,
      '--padding-bottom-desktop': `${ paddingBottomDesktop }px`,
      '--padding-top-mobile': `${ paddingTopMobile }px`,
      '--padding-bottom-mobile': `${ paddingBottomMobile }px`,
    },
  } );

  const innerBlocksProps = useInnerBlocksProps(
    { className: 'content is-layout-grid' },
    {
      template: TEMPLATE,
      templateLock: 'all',
    }
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'Padding settings', 'dude' ) } initialOpen={ true }>
          <RangeControl label={ __( 'Padding top (desktop)', 'dude' ) } value={ paddingTopDesktop } onChange={ ( value ) => setAttributes( { paddingTopDesktop: value } ) } min={ 0 } max={ 200 } step={ 1 } />
          <RangeControl label={ __( 'Padding bottom (desktop)', 'dude' ) } value={ paddingBottomDesktop } onChange={ ( value ) => setAttributes( { paddingBottomDesktop: value } ) } min={ 0 } max={ 200 } step={ 1 } />
          <RangeControl label={ __( 'Padding top (mobile)', 'dude' ) } value={ paddingTopMobile } onChange={ ( value ) => setAttributes( { paddingTopMobile: value } ) } min={ 0 } max={ 200 } step={ 1 } />
          <RangeControl label={ __( 'Padding bottom (mobile)', 'dude' ) } value={ paddingBottomMobile } onChange={ ( value ) => setAttributes( { paddingBottomMobile: value } ) } min={ 0 } max={ 200 } step={ 1 } />
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
