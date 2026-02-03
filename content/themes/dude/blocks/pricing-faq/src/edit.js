import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
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

export default function Edit() {
  const blockProps = useBlockProps( {
    className: 'block block-pricing-faq block-upkeep-faq',
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
            { __( 'Muokkaa osion otsikkoa ja kuvausta suoraan lohkossa. Lisää, muokkaa ja poista kysymyksiä käyttämällä accordion-lohkoa. Käytä sivupalkin Dimensions-asetuksia marginaalien ja välistysten säätöön.', 'dude' ) }
          </p>
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
