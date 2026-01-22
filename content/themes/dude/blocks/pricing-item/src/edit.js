import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  RichText,
  InspectorControls,
  InnerBlocks,
} from '@wordpress/block-editor';
import {
  PanelBody,
  Button,
  TextControl,
  ToggleControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
  const {
    title,
    isPopular,
    price,
    shortDescription,
    content,
    features,
    featuresTitle,
    showGradientBox,
    gradientBoxHeading,
  } = attributes;
  const [isExpanded, setIsExpanded] = useState(false);

  const blockProps = useBlockProps({
    className: `pricing-accordion-item${isPopular ? ' is-popular' : ''}`,
  });

  const updateFeature = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = { text: value };
    setAttributes({ features: newFeatures });
  };

  const addFeature = () => {
    setAttributes({ features: [...features, { text: 'Uusi ominaisuus' }] });
  };

  const removeFeature = (index) => {
    const newFeatures = features.filter((_, i) => i !== index);
    setAttributes({ features: newFeatures });
  };

  const GRADIENT_BOX_TEMPLATE = [
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

          <TextControl
            label={__('Ominaisuuksien otsikko (valinnainen)', 'dude')}
            value={featuresTitle}
            onChange={(value) => setAttributes({ featuresTitle: value })}
            help={__('Näytetään ennen ominaisuuslistaa', 'dude')}
            __next40pxDefaultSize
            __nextHasNoMarginBottom
          />

          <p>
            <strong>{__('Ominaisuudet', 'dude')}</strong>
          </p>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                gap: '8px',
                marginBottom: '8px',
              }}
            >
              <TextControl
                value={feature.text || feature}
                onChange={(value) => updateFeature(index, value)}
                style={{ flex: 1 }}
                __next40pxDefaultSize
                __nextHasNoMarginBottom
              />
              <Button
                isDestructive
                variant="secondary"
                onClick={() => removeFeature(index)}
                style={{ flexShrink: 0 }}
              >
                {__('X', 'dude')}
              </Button>
            </div>
          ))}
          <Button variant="secondary" onClick={addFeature}>
            {__('+ Lisää ominaisuus', 'dude')}
          </Button>

          <hr style={{ margin: '16px 0' }} />

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
              <div className="panel-main">
                <RichText
                  tagName="p"
                  className="item-description"
                  value={content}
                  onChange={(value) => setAttributes({ content: value })}
                  placeholder={__('Pidempi kuvaus…', 'dude')}
                  allowedFormats={['core/bold', 'core/italic', 'core/link']}
                />
                {featuresTitle && (
                  <p className="features-title">{featuresTitle}</p>
                )}
                {features && features.length > 0 && (
                  <ul>
                    {features.map((feature, index) => (
                      <li key={index}>
                        <RichText
                          tagName="span"
                          value={feature.text || feature}
                          onChange={(value) => updateFeature(index, value)}
                          allowedFormats={[
                            'core/bold',
                            'core/italic',
                            'core/link',
                          ]}
                          placeholder={__('Ominaisuus…', 'dude')}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {showGradientBox && (
                <div className="panel-gradient-box">
                  <RichText
                    tagName="h4"
                    className="gradient-box-heading"
                    value={gradientBoxHeading}
                    onChange={(value) =>
                      setAttributes({
                        gradientBoxHeading: value,
                      })
                    }
                    placeholder={__('Laatikon otsikko…', 'dude')}
                    allowedFormats={['core/bold', 'core/italic', 'core/link']}
                  />
                  <InnerBlocks
                    allowedBlocks={['core/list', 'core/buttons', 'core/button']}
                    template={GRADIENT_BOX_TEMPLATE}
                    templateLock={false}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
