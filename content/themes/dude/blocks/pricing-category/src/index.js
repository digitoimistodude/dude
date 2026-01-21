import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import Edit from './edit';
import metadata from '../block.json';
import './style.scss';

registerBlockType(metadata.name, {
  edit: Edit,
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
});
