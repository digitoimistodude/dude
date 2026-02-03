import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

const v1 = {
  attributes: {
    paddingTopDesktop: {
      type: 'number',
      default: 64,
    },
    paddingBottomDesktop: {
      type: 'number',
      default: 0,
    },
    paddingTopMobile: {
      type: 'number',
      default: 75,
    },
    paddingBottomMobile: {
      type: 'number',
      default: 0,
    },
  },
  save: () => {
    const blockProps = useBlockProps.save({
      className: 'block block-pricing-hero',
    });

    const innerBlocksProps = useInnerBlocksProps.save({
      className: 'content is-layout-grid',
    });

    return (
      <section {...blockProps}>
        <div className="container">
          <div {...innerBlocksProps} />
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
