import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

const v1 = {
  attributes: {
    title: {
      type: 'string',
      default: 'Räätälöidyt WordPress-sivustot',
    },
    description: {
      type: 'string',
      default:
        'Lorem ipsum dolor sit amet consectetur. Dictumst malesuada sem platea placerat arcu elit morbi.',
    },
    paddingTopDesktop: {
      type: 'number',
      default: 0,
    },
    paddingBottomDesktop: {
      type: 'number',
      default: 0,
    },
    paddingTopMobile: {
      type: 'number',
      default: 0,
    },
    paddingBottomMobile: {
      type: 'number',
      default: 0,
    },
  },
  save: ({ attributes }) => {
    const { title, description } = attributes;

    const blockProps = useBlockProps.save({
      className: 'block block-pricing-category has-unified-padding-if-stacked',
    });

    return (
      <section {...blockProps}>
        <div className="container">
          <div className="pricing-category">
            <div className="category-info">
              <RichText.Content
                tagName="h2"
                className="category-title"
                value={title}
              />
              <RichText.Content
                tagName="p"
                className="category-description"
                value={description}
              />
            </div>
            <div
              className="category-items accordion"
              data-allow-multiple
              data-allow-toggle
            >
              <InnerBlocks.Content />
            </div>
          </div>
        </div>
      </section>
    );
  },
  isEligible: (attributes) => {
    return (
      attributes.paddingTopDesktop !== undefined ||
      attributes.paddingBottomDesktop !== undefined
    );
  },
};

export default [v1];
