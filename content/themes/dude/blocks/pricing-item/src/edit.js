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
import { useState, useMemo } from '@wordpress/element';

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

  const getPanelTemplate = useMemo(() => {
    const mainGroup = [
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
          },
        ],
        [
          'core/heading',
          {
            level: 4,
            placeholder: __('Ominaisuuksien otsikko (valinnainen)…', 'dude'),
            className: 'features-title',
          },
        ],
        [
          'core/list',
          {
            placeholder: __('Lisää ominaisuudet…', 'dude'),
          },
        ],
      ],
    ];

    if (showGradientBox) {
      const gradientBoxGroup = [
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
            },
          ],
          [
            'core/list',
            {
              className: 'list-checkbox',
              placeholder: __('Lisää listan kohteet…', 'dude'),
            },
          ],
          [
            'core/buttons',
            {},
            [
              [
                'core/button',
                {
                  text: __('Painikkeen teksti', 'dude'),
                  className: 'is-style-mint',
                },
              ],
            ],
          ],
        ],
      ];
      return [mainGroup, gradientBoxGroup];
    }

    return [mainGroup];
  }, [showGradientBox]);

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
                template={getPanelTemplate}
                templateLock={false}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
