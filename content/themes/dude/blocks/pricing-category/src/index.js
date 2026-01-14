import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import Edit from './edit';
import './style.scss';

registerBlockType( 'dude/pricing-category', {
  edit: Edit,
  save: () => {
    const blockProps = useBlockProps.save( {
      className: 'block block-pricing-category has-unified-padding-if-stacked',
    } );

    return (
      <section { ...blockProps }>
        <div className="container">
          <div className="pricing-category accordion" data-allow-multiple data-allow-toggle>
            <InnerBlocks.Content />
          </div>
        </div>
      </section>
    );
  },
} );
