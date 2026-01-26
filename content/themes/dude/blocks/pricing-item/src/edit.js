import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  RichText,
  InspectorControls,
  InnerBlocks,
} from '@wordpress/block-editor';
import {
  PanelBody,
  ToggleControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
  const {
    title,
    isPopular,
    price,
    shortDescription,
    showGradientBox,
  } = attributes;
  const [isExpanded, setIsExpanded] = useState(false);

  const blockProps = useBlockProps({
    className: `pricing-accordion-item${isPopular ? ' is-popular' : ''}`,
  });

  const TEMPLATE = [
    [
      'core/group',
      {
        className: 'panel-main',
        layout: { type: 'constrained' },
      },
      [
        [
          'core/paragraph',
          {
            placeholder: __('Pidempi kuvaus…', 'dude'),
            className: 'item-description',
            content: __(
              'Kirjoita tähän tuotteen pidempi kuvaus ja yksityiskohdat.',
              'dude'
            ),
          },
        ],
        [
          'core/heading',
          {
            level: 4,
            placeholder: __('Ominaisuuksien otsikko (valinnainen)…', 'dude'),
            className: 'features-title',
            content: __('Sisältää', 'dude'),
          },
        ],
        [
          'core/list',
          {
            placeholder: __('Lisää ominaisuudet…', 'dude'),
            values:
              '<li>Esimerkki ominaisuus 1</li><li>Esimerkki ominaisuus 2</li><li>Esimerkki ominaisuus 3</li>',
          },
        ],
      ],
    ],
    [
      'core/group',
      {
        className: 'panel-gradient-box',
        layout: { type: 'constrained' },
      },
      [
        [
          'core/heading',
          {
            level: 4,
            placeholder: __('Laatikon otsikko…', 'dude'),
            className: 'gradient-box-heading',
            content: __('Mitä saat', 'dude'),
          },
        ],
        [
          'core/list',
          {
            className: 'list-checkbox',
            placeholder: __('Lisää listan kohteet…', 'dude'),
            values:
              '<li>Esimerkki ominaisuus 1</li><li>Esimerkki ominaisuus 2</li>',
          },
        ],
        [
          'core/buttons',
          {},
          [
            [
              'core/button',
              {
                text: __('Ota yhteyttä', 'dude'),
                className: 'is-style-mint',
              },
            ],
          ],
        ],
      ],
    ],
  ];

  return (
    <>
      <InspectorControls>
        <PanelBody title={__('Tuotteen asetukset', 'dude')}>
          <ToggleControl
            label={__('Suosituin', 'dude')}
            checked={isPopular}
            onChange={(value) => setAttributes({ isPopular: value })}
            __nextHasNoMarginBottom
          />

          <ToggleControl
            label={__('Näytä gradientti-laatikko', 'dude')}
            checked={showGradientBox}
            onChange={(value) => setAttributes({ showGradientBox: value })}
            help={__(
              'Lisää oikealle puolelle gradientti-laatikko lisäsisällölle',
              'dude'
            )}
            __nextHasNoMarginBottom
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        <div className="accordion-header">
          <div
            className="accordion-trigger"
            aria-expanded={isExpanded ? 'true' : 'false'}
          >
            <span className="accordion-title">
              <span className="item-content">
                <span className="item-header">
                  <RichText
                    tagName="span"
                    className="item-name"
                    value={title}
                    onChange={(value) => setAttributes({ title: value })}
                    placeholder={__('Tuotteen nimi…', 'dude')}
                    allowedFormats={['core/bold', 'core/italic', 'core/link']}
                  />
                  {isPopular && <span className="badge">Suosituin</span>}
                </span>
                <span className="item-meta">
                  <RichText
                    tagName="span"
                    className="price"
                    value={price}
                    onChange={(value) => setAttributes({ price: value })}
                    placeholder={__('Hinta…', 'dude')}
                    allowedFormats={['core/bold', 'core/italic', 'core/link']}
                  />
                  <RichText
                    tagName="span"
                    className="description"
                    value={shortDescription}
                    onChange={(value) =>
                      setAttributes({
                        shortDescription: value,
                      })
                    }
                    placeholder={__('Lyhyt kuvaus…', 'dude')}
                    allowedFormats={['core/bold', 'core/italic', 'core/link']}
                  />
                </span>
              </span>
              <span
                className="accordion-icon"
                onClick={() => setIsExpanded(!isExpanded)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsExpanded(!isExpanded);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={
                  isExpanded ? __('Sulje', 'dude') : __('Avaa', 'dude')
                }
              >
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M.666.667l8 8 8-8"
                    stroke="#7EFFE1"
                    strokeWidth="1.333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </div>
        </div>
        {isExpanded && (
          <div className="accordion-panel">
            <div
              className={`panel-layout${
                showGradientBox ? ' has-gradient-box' : ''
              }`}
            >
              <InnerBlocks
                allowedBlocks={[
                  'core/group',
                  'core/paragraph',
                  'core/heading',
                  'core/list',
                  'core/buttons',
                  'core/button',
                ]}
                template={TEMPLATE}
                templateLock={false}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
