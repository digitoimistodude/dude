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
  const { categoryTitle, categoryDescription, items } = attributes;
  const [ expandedSidebarItem, setExpandedSidebarItem ] = useState( null );
  const [ expandedPreviewItem, setExpandedPreviewItem ] = useState( null );

  const blockProps = useBlockProps( {
    className: 'block block-pricing-category has-unified-padding-if-stacked',
  } );

  const addItem = () => {
    const newItems = [
      ...items,
      {
        id: Date.now(),
        title: 'Uusi tuote',
        isPopular: false,
        price: '0 €',
        shortDescription: 'Lyhyt kuvaus',
        content: 'Pidempi kuvaus tuotteesta.',
        features: [ 'Ominaisuus 1', 'Ominaisuus 2' ],
      },
    ];
    setAttributes( { items: newItems } );
  };

  const updateItem = ( index, field, value ) => {
    const newItems = [ ...items ];
    newItems[ index ] = { ...newItems[ index ], [ field ]: value };
    setAttributes( { items: newItems } );
  };

  const removeItem = ( index ) => {
    const newItems = items.filter( ( _, i ) => i !== index );
    setAttributes( { items: newItems } );
  };

  const moveItem = ( index, direction ) => {
    const newItems = [ ...items ];
    const newIndex = index + direction;
    if ( newIndex < 0 || newIndex >= items.length ) return;
    [ newItems[ index ], newItems[ newIndex ] ] = [ newItems[ newIndex ], newItems[ index ] ];
    setAttributes( { items: newItems } );
  };

  const togglePreviewItem = ( index ) => {
    setExpandedPreviewItem( expandedPreviewItem === index ? null : index );
  };

  const updateFeature = ( itemIndex, featureIndex, value ) => {
    const newItems = [ ...items ];
    const newFeatures = [ ...newItems[ itemIndex ].features ];
    newFeatures[ featureIndex ] = value;
    newItems[ itemIndex ] = { ...newItems[ itemIndex ], features: newFeatures };
    setAttributes( { items: newItems } );
  };

  const addFeature = ( itemIndex ) => {
    const newItems = [ ...items ];
    const newFeatures = [ ...( newItems[ itemIndex ].features || [] ), 'Uusi ominaisuus' ];
    newItems[ itemIndex ] = { ...newItems[ itemIndex ], features: newFeatures };
    setAttributes( { items: newItems } );
  };

  const removeFeature = ( itemIndex, featureIndex ) => {
    const newItems = [ ...items ];
    const newFeatures = newItems[ itemIndex ].features.filter( ( _, i ) => i !== featureIndex );
    newItems[ itemIndex ] = { ...newItems[ itemIndex ], features: newFeatures };
    setAttributes( { items: newItems } );
  };

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'Kategorian asetukset', 'dude' ) }>
          <p style={ { color: '#757575', fontSize: '12px' } }>
            { __( 'Muokkaa kategorian otsikkoa ja kuvausta suoraan lohkossa. Lisää ja muokkaa tuotteita alla.', 'dude' ) }
          </p>
        </PanelBody>

        { items.map( ( item, index ) => (
          <PanelBody
            key={ item.id || index }
            title={ item.title || `Tuote ${ index + 1 }` }
            initialOpen={ expandedSidebarItem === index }
            onToggle={ () => setExpandedSidebarItem( expandedSidebarItem === index ? null : index ) }
          >
            <TextControl
              label={ __( 'Otsikko', 'dude' ) }
              value={ item.title }
              onChange={ ( value ) => updateItem( index, 'title', value ) }
            />
            <ToggleControl
              label={ __( 'Suosituin', 'dude' ) }
              checked={ item.isPopular }
              onChange={ ( value ) => updateItem( index, 'isPopular', value ) }
            />
            <TextControl
              label={ __( 'Hinta', 'dude' ) }
              value={ item.price }
              onChange={ ( value ) => updateItem( index, 'price', value ) }
            />
            <TextControl
              label={ __( 'Lyhyt kuvaus', 'dude' ) }
              value={ item.shortDescription }
              onChange={ ( value ) => updateItem( index, 'shortDescription', value ) }
            />
            <TextareaControl
              label={ __( 'Sisältö (avattu)', 'dude' ) }
              value={ item.content }
              onChange={ ( value ) => updateItem( index, 'content', value ) }
            />

            <p><strong>{ __( 'Ominaisuudet', 'dude' ) }</strong></p>
            { ( item.features || [] ).map( ( feature, fIndex ) => (
              <div key={ fIndex } style={ { display: 'flex', gap: '8px', marginBottom: '8px' } }>
                <TextControl
                  value={ feature }
                  onChange={ ( value ) => updateFeature( index, fIndex, value ) }
                  style={ { flex: 1 } }
                />
                <Button
                  isDestructive
                  variant="secondary"
                  onClick={ () => removeFeature( index, fIndex ) }
                  style={ { flexShrink: 0 } }
                >
                  { __( 'Poista', 'dude' ) }
                </Button>
              </div>
            ) ) }
            <Button
              variant="secondary"
              onClick={ () => addFeature( index ) }
              style={ { marginBottom: '16px' } }
            >
              { __( '+ Lisää ominaisuus', 'dude' ) }
            </Button>

            <div style={ { display: 'flex', gap: '8px', marginTop: '16px', borderTop: '1px solid #ddd', paddingTop: '16px' } }>
              <Button
                variant="secondary"
                onClick={ () => moveItem( index, -1 ) }
                disabled={ index === 0 }
              >
                { __( 'Ylös', 'dude' ) }
              </Button>
              <Button
                variant="secondary"
                onClick={ () => moveItem( index, 1 ) }
                disabled={ index === items.length - 1 }
              >
                { __( 'Alas', 'dude' ) }
              </Button>
              <Button
                isDestructive
                onClick={ () => removeItem( index ) }
              >
                { __( 'Poista tuote', 'dude' ) }
              </Button>
            </div>
          </PanelBody>
        ) ) }

        <PanelBody>
          <Button
            variant="primary"
            onClick={ addItem }
          >
            { __( '+ Lisää tuote', 'dude' ) }
          </Button>
        </PanelBody>
      </InspectorControls>

      <section { ...blockProps }>
        <div className="container">
          <div className="pricing-category">
            <div className="category-info">
              <RichText
                tagName="h2"
                value={ categoryTitle }
                onChange={ ( value ) => setAttributes( { categoryTitle: value } ) }
                placeholder={ __( 'Kategorian otsikko...', 'dude' ) }
              />
              <RichText
                tagName="p"
                value={ categoryDescription }
                onChange={ ( value ) => setAttributes( { categoryDescription: value } ) }
                placeholder={ __( 'Kategorian kuvaus...', 'dude' ) }
              />
            </div>
            <div className="category-items">
              <div className="pricing-accordion">
                { items.length === 0 && (
                  <p style={ { color: '#999', fontStyle: 'italic' } }>
                    { __( 'Lisää tuotteita sivupalkista.', 'dude' ) }
                  </p>
                ) }
                { items.map( ( item, index ) => {
                  const isExpanded = expandedPreviewItem === index;
                  return (
                    <div
                      key={ item.id || index }
                      className={ `pricing-accordion-item${ item.isPopular ? ' is-popular' : '' }` }
                      aria-expanded={ isExpanded ? 'true' : 'false' }
                      onClick={ () => togglePreviewItem( index ) }
                      onKeyDown={ ( e ) => {
                        if ( e.key === 'Enter' || e.key === ' ' ) {
                          e.preventDefault();
                          togglePreviewItem( index );
                        }
                      } }
                      role="button"
                      tabIndex={ 0 }
                    >
                      <div className="item-main">
                        <div className="item-content">
                          <div className="item-header">
                            <h3>{ item.title }</h3>
                            { item.isPopular && <span className="badge">Suosituin</span> }
                          </div>
                          <div className="item-meta">
                            <span className="price">{ item.price }</span>
                            <span className="description">{ item.shortDescription }</span>
                          </div>
                        </div>
                        <span className="icon" aria-hidden="true"></span>
                      </div>
                      { isExpanded && (
                        <div className="accordion-content">
                          <p>{ item.content }</p>
                          { item.features && item.features.length > 0 && (
                            <ul>
                              { item.features.map( ( feature, fIndex ) => (
                                <li key={ fIndex }>{ feature }</li>
                              ) ) }
                            </ul>
                          ) }
                        </div>
                      ) }
                    </div>
                  );
                } ) }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
