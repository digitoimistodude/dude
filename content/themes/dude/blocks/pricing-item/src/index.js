import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import Edit from './edit';
import metadata from '../block.json';

// Generate a slug from title for accessible IDs
const slugify = ( text ) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace( /\s+/g, '-' )
    .replace( /[^\w-]+/g, '' )
    .replace( /--+/g, '-' );
};

registerBlockType( metadata.name, {
  edit: Edit,
  save: ( { attributes } ) => {
    const { title, isPopular, price, shortDescription, content, features } = attributes;

    // Generate unique ID from title for accessibility
    const itemId = slugify( title || 'pricing-item' );
    const triggerId = `accordion-${ itemId }`;
    const panelId = itemId;

    const blockProps = useBlockProps.save( {
      className: `accordion-item pricing-accordion-item${ isPopular ? ' is-popular' : '' }`,
    } );

    return (
      <div { ...blockProps }>
        <h3>
          <button
            className="accordion-trigger"
            type="button"
            aria-expanded="false"
            aria-controls={ panelId }
            id={ triggerId }
          >
            <span className="accordion-title">
              <span className="item-content">
                <span className="item-header">
                  <RichText.Content tagName="span" className="item-name" value={ title } />
                  { isPopular && <span className="badge">Suosituin</span> }
                </span>
                <span className="item-meta">
                  <RichText.Content tagName="span" className="price" value={ price } />
                  <RichText.Content tagName="span" className="description" value={ shortDescription } />
                </span>
              </span>
              <span className="accordion-icon">
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M.666.667l8 8 8-8" stroke="#7EFFE1" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </span>
          </button>
        </h3>
        <div
          id={ panelId }
          role="region"
          aria-labelledby={ triggerId }
          className="accordion-panel"
          hidden
        >
          <div>
            { content && <p>{ content }</p> }
            { features && features.length > 0 && (
              <ul>
                { features.map( ( feature, index ) => (
                  <li key={ index }>{ feature }</li>
                ) ) }
              </ul>
            ) }
          </div>
        </div>
      </div>
    );
  },
} );
