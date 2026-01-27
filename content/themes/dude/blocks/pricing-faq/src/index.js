import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import Edit from './edit';
import './style.scss';

registerBlockType( 'dude/pricing-faq', {
  edit: Edit,
  save: ( { attributes } ) => {
    const { items, paddingTopDesktop, paddingBottomDesktop, paddingTopMobile, paddingBottomMobile } = attributes;

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
            <div className="faq-intro">
              <InnerBlocks.Content />
            </div>
            <div className="faq-items">
              <div className="accordion" data-allow-multiple data-allow-toggle>
                { items &&
                  items.map( ( item, index ) => {
                    const faqId = `faq-block-${ index + 1 }`;
                    return (
                      <div key={ index } className="accordion-item">
                        <h3>
                          <button aria-expanded="false" className="accordion-trigger" aria-controls={ faqId } id={ `accordion-${ faqId }` }>
                            <span className="accordion-title">
                              <RichText.Content tagName="span" value={ item.question } />
                              <span className="accordion-icon"></span>
                            </span>
                          </button>
                        </h3>
                        <div id={ faqId } role="region" aria-labelledby={ `accordion-${ faqId }` } className="accordion-panel" hidden>
                          <div>
                            <RichText.Content tagName="p" value={ item.answer } />
                          </div>
                        </div>
                      </div>
                    );
                  } ) }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
} );
