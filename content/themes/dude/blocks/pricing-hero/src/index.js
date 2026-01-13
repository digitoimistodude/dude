import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import Edit from './edit';
import './style.scss';

registerBlockType( 'dude/pricing-hero', {
  edit: Edit,
  save: () => {
    const blockProps = useBlockProps.save( {
      className: 'block block-pricing-hero',
    } );

    return (
      <section { ...blockProps }>
        <div className="container">
          <div className="content is-layout-grid">
            <InnerBlocks.Content />
          </div>
        </div>
      </section>
    );
  },
} );
