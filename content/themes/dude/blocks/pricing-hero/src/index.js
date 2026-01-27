import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import Edit from './edit';
import './style.scss';

registerBlockType( 'dude/pricing-hero', {
  edit: Edit,
  save: ( { attributes } ) => {
    const { paddingTopDesktop, paddingBottomDesktop, paddingTopMobile, paddingBottomMobile } = attributes;

    const blockProps = useBlockProps.save( {
      className: 'block block-pricing-hero',
      style: {
        '--padding-top-desktop': `${ paddingTopDesktop }px`,
        '--padding-bottom-desktop': `${ paddingBottomDesktop }px`,
        '--padding-top-mobile': `${ paddingTopMobile }px`,
        '--padding-bottom-mobile': `${ paddingBottomMobile }px`,
      },
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
