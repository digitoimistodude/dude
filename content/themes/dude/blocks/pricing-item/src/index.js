import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import Edit from './edit';
import metadata from '../block.json';

// Generate a slug from title for accessible IDs
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

// v1 deprecation - old format with string features
const v1 = {
  attributes: {
    title: { type: 'string', default: 'Tuotteen nimi' },
    isPopular: { type: 'boolean', default: false },
    price: { type: 'string', default: '0 €' },
    shortDescription: { type: 'string', default: 'Lyhyt kuvaus' },
    content: { type: 'string', default: 'Pidempi kuvaus tuotteesta.' },
    features: { type: 'array', default: ['Ominaisuus 1', 'Ominaisuus 2'] },
  },
  migrate: (attributes) => {
    const migratedFeatures = attributes.features.map((f) =>
      typeof f === 'string' ? { text: f } : f
    );
    return {
      ...attributes,
      features: migratedFeatures,
      featuresTitle: '',
      showGradientBox: false,
      gradientBoxHeading: '',
    };
  },
  save: ({ attributes }) => {
    const { title, isPopular, price, shortDescription, content, features } =
      attributes;
    const itemId = slugify(title || 'pricing-item');
    const triggerId = `accordion-${itemId}`;
    const panelId = itemId;
    const blockProps = useBlockProps.save({
      className: `pricing-accordion-item${isPopular ? ' is-popular' : ''}`,
    });

    return (
      <div {...blockProps}>
        <h3>
          <button
            className="accordion-trigger"
            type="button"
            aria-expanded="false"
            aria-controls={panelId}
            id={triggerId}
          >
            <span className="accordion-title">
              <span className="item-content">
                <span className="item-header">
                  <RichText.Content
                    tagName="span"
                    className="item-name"
                    value={title}
                  />
                  {isPopular && <span className="badge">Suosituin</span>}
                </span>
                <span className="item-meta">
                  <RichText.Content
                    tagName="span"
                    className="price"
                    value={price}
                  />
                  <RichText.Content
                    tagName="span"
                    className="description"
                    value={shortDescription}
                  />
                </span>
              </span>
              <span className="accordion-icon">
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
          </button>
        </h3>
        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          className="accordion-panel"
          hidden
        >
          <div>
            {content && <p>{content}</p>}
            {features && features.length > 0 && (
              <ul>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  },
};

registerBlockType(metadata.name, {
  edit: Edit,
  save: ({ attributes }) => {
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

    // Generate unique ID from title for accessibility
    const itemId = slugify(title || 'pricing-item');
    const triggerId = `accordion-${itemId}`;
    const panelId = itemId;

    const blockProps = useBlockProps.save({
      className: `pricing-accordion-item${isPopular ? ' is-popular' : ''}`,
    });

    return (
      <div {...blockProps}>
        <h3>
          <button
            className="accordion-trigger"
            type="button"
            aria-expanded="false"
            aria-controls={panelId}
            id={triggerId}
          >
            <span className="accordion-title">
              <span className="item-content">
                <span className="item-header">
                  <RichText.Content
                    tagName="span"
                    className="item-name"
                    value={title}
                  />
                  {isPopular && <span className="badge">Suosituin</span>}
                </span>
                <span className="item-meta">
                  <RichText.Content
                    tagName="span"
                    className="price"
                    value={price}
                  />
                  <RichText.Content
                    tagName="span"
                    className="description"
                    value={shortDescription}
                  />
                </span>
              </span>
              <span className="accordion-icon">
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
          </button>
        </h3>
        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          className="accordion-panel"
          hidden
        >
          <div
            className={`panel-layout${
              showGradientBox ? ' has-gradient-box' : ''
            }`}
          >
            <div className="panel-main">
              {content && (
                <RichText.Content
                  tagName="p"
                  className="item-description"
                  value={content}
                />
              )}
              {featuresTitle && (
                <p className="features-title">{featuresTitle}</p>
              )}
              {features && features.length > 0 && (
                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>
                      <RichText.Content tagName="span" value={feature.text} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {showGradientBox && (
              <div className="panel-gradient-box">
                {gradientBoxHeading && (
                  <RichText.Content
                    tagName="h4"
                    className="gradient-box-heading"
                    value={gradientBoxHeading}
                  />
                )}
                <InnerBlocks.Content />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
  deprecated: [v1],
});
