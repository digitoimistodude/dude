import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
  const blockProps = useBlockProps.save( {
    className: 'block block-pricing-faq block-upkeep-faq',
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
