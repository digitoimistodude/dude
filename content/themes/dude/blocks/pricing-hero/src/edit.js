import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import './style.scss';

const TEMPLATE = [
  [
    'core/heading',
    {
      level: 1,
      content: 'Hinnasto',
      placeholder: __('Esiotsikko…', 'dude'),
      className: 'prefix',
    },
  ],
  [
    'core/heading',
    {
      level: 2,
      content: 'Investoi parempaan<br>digitaaliseen läsnäoloon',
      placeholder: __('Kirjoita otsikko…', 'dude'),
    },
  ],
  [
    'core/paragraph',
    {
      content:
        'Kaikki palvelumme ovat räätälöityjä ja suunniteltu kestämään aikaa. Teemme ratkaisuja, jotka toimivat useita vuosia ja tukevat liiketoimintasi kasvua. Investointi, joka maksaa itsensä takaisin päivä päivältä.',
      placeholder: __('Kirjoita ingressi…', 'dude'),
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

export default function Edit() {
  const blockProps = useBlockProps({
    className: 'block block-pricing-hero',
  });

  const innerBlocksProps = useInnerBlocksProps(
    { className: 'content is-layout-grid' },
    {
      template: TEMPLATE,
      templateLock: 'all',
    }
  );

  return (
    <section {...blockProps}>
      <div className="container">
        <div {...innerBlocksProps} />
      </div>
    </section>
  );
}
