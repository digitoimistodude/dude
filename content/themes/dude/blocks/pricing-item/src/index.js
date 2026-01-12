import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import Edit from './edit';
import metadata from '../block.json';

registerBlockType( metadata.name, {
  edit: Edit,
  save: ( { attributes } ) => {
    const { title, isPopular, price, shortDescription, content, features } = attributes;

    const blockProps = useBlockProps.save( {
      className: `pricing-accordion-item${ isPopular ? ' is-popular' : '' }`,
      'aria-expanded': 'false',
    } );

    return (
      <div { ...blockProps }>
        <button className="item-main" type="button" aria-expanded="false">
          <div className="item-content">
            <div className="item-header">
              <RichText.Content tagName="h3" value={ title } />
              { isPopular && <span className="badge">Suosituin</span> }
            </div>
            <div className="item-meta">
              <RichText.Content tagName="span" className="price" value={ price } />
              <RichText.Content tagName="span" className="description" value={ shortDescription } />
            </div>
          </div>
          <span className="icon" aria-hidden="true"></span>
        </button>
        <div className="accordion-content" hidden>
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
    );
  },
} );
