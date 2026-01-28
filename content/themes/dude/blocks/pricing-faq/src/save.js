import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
  const { paddingTopDesktop, paddingBottomDesktop, paddingTopMobile, paddingBottomMobile } = attributes;

  const blockProps = useBlockProps.save( {
    className: 'block block-pricing-faq block-upkeep-faq',
    style: {
      '--padding-top-desktop': `${ paddingTopDesktop }px`,
      '--padding-bottom-desktop': `${ paddingBottomDesktop }px`,
      '--padding-top-mobile': `${ paddingTopMobile }px`,
      '--padding-bottom-mobile': `${ paddingBottomMobile }px`,
    },
  } );

  return (
    <div { ...blockProps }>
      <div className="container">
        <div className="faq-layout">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}
