import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import './style.scss';

const TEMPLATE = [
  [
    'core/group',
    {
      className: 'faq-intro',
    },
    [
      [
        'core/heading',
        {
          level: 2,
          content: 'Hyvä tietää',
          placeholder: __( 'Osion otsikko…', 'dude' ),
        },
      ],
      [
        'core/paragraph',
        {
          content: 'Paljonko maksaa? Kauanko kestää? Lue ohesta usein kysytyt kysymykset.',
          placeholder: __( 'Osion kuvaus…', 'dude' ),
        },
      ],
    ],
  ],
  [
    'core/group',
    {
      className: 'faq-items',
    },
    [
      [
        'core/accordion',
        {},
        [
          [
            'core/accordion-item',
            {
              title: 'Paljonko sivuston teko maksaa?',
            },
            [
              [
                'core/paragraph',
                {
                  content: 'Sivuston hinta riippuu sen laajuudesta ja vaativuudesta. Pieni sivusto maksaa 5 000 – 10 000 €, keskikokoinen 10 000 – 25 000 € ja laaja sivusto 25 000 € tai enemmän.',
                },
              ],
            ],
          ],
          [
            'core/accordion-item',
            {
              title: 'Kauanko sivuston teko kestää?',
            },
            [
              [
                'core/paragraph',
                {
                  content: 'Projektin kesto vaihtelee 2–12 viikkoa riippuen sivuston koosta ja monimutkaisuudesta. Annamme tarkemman aikataulun projektin aloitusvaiheessa.',
                },
              ],
            ],
          ],
          [
            'core/accordion-item',
            {
              title: 'Saanko muokata sivustoa itse?',
            },
            [
              [
                'core/paragraph',
                {
                  content: 'Kyllä! Kaikki sivustomme rakennetaan WordPressin päälle, joten voit helposti muokata sisältöä itse. Tarjoamme myös koulutusta ja dokumentaatiota.',
                },
              ],
            ],
          ],
        ],
      ],
    ],
  ],
];

export default function Edit( { attributes, setAttributes } ) {
  const { paddingTopDesktop, paddingBottomDesktop, paddingTopMobile, paddingBottomMobile } = attributes;

  const blockProps = useBlockProps( {
    className: 'block block-pricing-faq block-upkeep-faq',
    style: {
      '--padding-top-desktop': `${ paddingTopDesktop }px`,
      '--padding-bottom-desktop': `${ paddingBottomDesktop }px`,
      '--padding-top-mobile': `${ paddingTopMobile }px`,
      '--padding-bottom-mobile': `${ paddingBottomMobile }px`,
    },
  } );

  const innerBlocksProps = useInnerBlocksProps(
    { className: 'container' },
    {
      template: TEMPLATE,
      allowedBlocks: [ 'core/group' ],
      renderAppender: false,
    }
  );

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'UKK-asetukset', 'dude' ) }>
          <p style={ { color: '#757575', fontSize: '12px', marginBottom: '16px' } }>
            { __( 'Muokkaa osion otsikkoa ja kuvausta suoraan lohkossa. Lisää, muokkaa ja poista kysymyksiä käyttämällä accordion-lohkoa.', 'dude' ) }
          </p>
        </PanelBody>
        <PanelBody title={ __( 'Välistysten asetukset', 'dude' ) } initialOpen={ false }>
          <RangeControl label={ __( 'Ylävälistys (desktop)', 'dude' ) } value={ paddingTopDesktop } onChange={ ( value ) => setAttributes( { paddingTopDesktop: value } ) } min={ 0 } max={ 200 } step={ 1 } />
          <RangeControl label={ __( 'Alavälistys (desktop)', 'dude' ) } value={ paddingBottomDesktop } onChange={ ( value ) => setAttributes( { paddingBottomDesktop: value } ) } min={ 0 } max={ 200 } step={ 1 } />
          <RangeControl label={ __( 'Ylävälistys (mobiili)', 'dude' ) } value={ paddingTopMobile } onChange={ ( value ) => setAttributes( { paddingTopMobile: value } ) } min={ 0 } max={ 200 } step={ 1 } />
          <RangeControl label={ __( 'Alavälistys (mobiili)', 'dude' ) } value={ paddingBottomMobile } onChange={ ( value ) => setAttributes( { paddingBottomMobile: value } ) } min={ 0 } max={ 200 } step={ 1 } />
        </PanelBody>
      </InspectorControls>

      <div { ...blockProps }>
        <div className="faq-layout">
          <div { ...innerBlocksProps } />
        </div>
      </div>
    </>
  );
}
