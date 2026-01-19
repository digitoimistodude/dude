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
        <div className="accordion-header">
          <div
            className="accordion-trigger"
            aria-expanded={ isExpanded ? 'true' : 'false' }
          >
            <span className="accordion-title">
              <span className="item-content">
                <span className="item-header">
                  <RichText
                    tagName="span"
                    className="item-name"
                    value={ title }
                    onChange={ ( value ) => setAttributes( { title: value } ) }
                    placeholder={ __( 'Tuotteen nimi...', 'dude' ) }
                  />
                  { isPopular && <span className="badge">Suosituin</span> }
                </span>
                <span className="item-meta">
                  <RichText
                    tagName="span"
                    className="price"
                    value={ price }
                    onChange={ ( value ) => setAttributes( { price: value } ) }
                    placeholder={ __( 'Hinta...', 'dude' ) }
                  />
                  <RichText
                    tagName="span"
                    className="description"
                    value={ shortDescription }
                    onChange={ ( value ) => setAttributes( { shortDescription: value } ) }
                    placeholder={ __( 'Lyhyt kuvaus...', 'dude' ) }
                  />
                </span>
              </span>
              <span
                className="accordion-icon"
                onClick={ () => setIsExpanded( ! isExpanded ) }
                onKeyDown={ ( e ) => {
                  if ( e.key === 'Enter' || e.key === ' ' ) {
                    e.preventDefault();
                    setIsExpanded( ! isExpanded );
                  }
                } }
                role="button"
                tabIndex={ 0 }
                aria-label={ isExpanded ? __( 'Sulje', 'dude' ) : __( 'Avaa', 'dude' ) }
              >
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M.666.667l8 8 8-8" stroke="#7EFFE1" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </span>
          </div>
        </div>
        { isExpanded && (
          <div className="accordion-panel">
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
        ) }
      </div>
    </>
  );
}
