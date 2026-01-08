import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from '@wordpress/block-editor';
import {
  PanelBody,
  Button,
  TextControl,
  TextareaControl,
  ToggleControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit( { attributes, setAttributes } ) {
  const { title, isPopular, price, shortDescription, content, features } = attributes;
  const [ isExpanded, setIsExpanded ] = useState( false );

  const blockProps = useBlockProps( {
    className: `pricing-accordion-item${ isPopular ? ' is-popular' : '' }`,
    'aria-expanded': isExpanded ? 'true' : 'false',
  } );

  const updateFeature = ( index, value ) => {
    const newFeatures = [ ...features ];
    newFeatures[ index ] = value;
    setAttributes( { features: newFeatures } );
  };

  const addFeature = () => {
    setAttributes( { features: [ ...features, 'Uusi ominaisuus' ] } );
  };

  const removeFeature = ( index ) => {
    const newFeatures = features.filter( ( _, i ) => i !== index );
    setAttributes( { features: newFeatures } );
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'Tuotteen asetukset', 'dude' ) }>
          <ToggleControl
            label={ __( 'Suosituin', 'dude' ) }
            checked={ isPopular }
            onChange={ ( value ) => setAttributes( { isPopular: value } ) }
          />
          <TextareaControl
            label={ __( 'Sisältö (avattu)', 'dude' ) }
            value={ content }
            onChange={ ( value ) => setAttributes( { content: value } ) }
          />

          <p><strong>{ __( 'Ominaisuudet', 'dude' ) }</strong></p>
          { features.map( ( feature, index ) => (
            <div key={ index } style={ { display: 'flex', gap: '8px', marginBottom: '8px' } }>
              <TextControl
                value={ feature }
                onChange={ ( value ) => updateFeature( index, value ) }
                style={ { flex: 1 } }
              />
              <Button
                isDestructive
                variant="secondary"
                onClick={ () => removeFeature( index ) }
                style={ { flexShrink: 0 } }
              >
                { __( 'X', 'dude' ) }
              </Button>
            </div>
          ) ) }
          <Button
            variant="secondary"
            onClick={ addFeature }
          >
            { __( '+ Lisää ominaisuus', 'dude' ) }
          </Button>
        </PanelBody>
      </InspectorControls>

      <div { ...blockProps }>
        <div
          className="item-main"
          onClick={ () => setIsExpanded( ! isExpanded ) }
          onKeyDown={ ( e ) => {
            if ( e.key === 'Enter' || e.key === ' ' ) {
              e.preventDefault();
              setIsExpanded( ! isExpanded );
            }
          } }
          role="button"
          tabIndex={ 0 }
        >
          <div className="item-content">
            <div className="item-header">
              <RichText
                tagName="h3"
                value={ title }
                onChange={ ( value ) => setAttributes( { title: value } ) }
                placeholder={ __( 'Tuotteen nimi...', 'dude' ) }
                onClick={ ( e ) => e.stopPropagation() }
              />
              { isPopular && <span className="badge">Suosituin</span> }
            </div>
            <div className="item-meta">
              <RichText
                tagName="span"
                className="price"
                value={ price }
                onChange={ ( value ) => setAttributes( { price: value } ) }
                placeholder={ __( 'Hinta...', 'dude' ) }
                onClick={ ( e ) => e.stopPropagation() }
              />
              <RichText
                tagName="span"
                className="description"
                value={ shortDescription }
                onChange={ ( value ) => setAttributes( { shortDescription: value } ) }
                placeholder={ __( 'Lyhyt kuvaus...', 'dude' ) }
                onClick={ ( e ) => e.stopPropagation() }
              />
            </div>
          </div>
          <span className="icon" aria-hidden="true"></span>
        </div>
        { isExpanded && (
          <div className="accordion-content">
            <p>{ content }</p>
            { features && features.length > 0 && (
              <ul>
                { features.map( ( feature, index ) => (
                  <li key={ index }>{ feature }</li>
                ) ) }
              </ul>
            ) }
          </div>
        ) }
      </div>
    </>
  );
}
