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
} from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit( { attributes, setAttributes } ) {
  const { sectionTitle, sectionDescription, items } = attributes;
  const [ expandedSidebarItem, setExpandedSidebarItem ] = useState( null );
  const [ expandedPreviewItem, setExpandedPreviewItem ] = useState( null );

  const blockProps = useBlockProps( {
    className: 'block block-pricing-faq block-upkeep-faq has-unified-padding-if-stacked',
  } );

  const addItem = () => {
    const newItems = [
      ...items,
      {
        id: Date.now(),
        question: 'Uusi kysymys?',
        answer: 'Vastaus kysymykseen.',
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

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'UKK-asetukset', 'dude' ) }>
          <p style={ { color: '#757575', fontSize: '12px' } }>
            { __( 'Muokkaa osion otsikkoa ja kuvausta suoraan lohkossa. Lisää ja muokkaa kysymyksiä alla. Klikkaa kysymystä lohkossa nähdäksesi vastauksen.', 'dude' ) }
          </p>
        </PanelBody>

        { items.map( ( item, index ) => (
          <PanelBody
            key={ item.id || index }
            title={ item.question || `Kysymys ${ index + 1 }` }
            initialOpen={ expandedSidebarItem === index }
            onToggle={ () => setExpandedSidebarItem( expandedSidebarItem === index ? null : index ) }
          >
            <TextControl
              label={ __( 'Kysymys', 'dude' ) }
              value={ item.question }
              onChange={ ( value ) => updateItem( index, 'question', value ) }
            />
            <TextareaControl
              label={ __( 'Vastaus', 'dude' ) }
              value={ item.answer }
              onChange={ ( value ) => updateItem( index, 'answer', value ) }
              rows={ 4 }
            />

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
                { __( 'Poista', 'dude' ) }
              </Button>
            </div>
          </PanelBody>
        ) ) }

        <PanelBody>
          <Button
            variant="primary"
            onClick={ addItem }
          >
            { __( '+ Lisää kysymys', 'dude' ) }
          </Button>
        </PanelBody>
      </InspectorControls>

      <div { ...blockProps }>
        <div className="container">
          <div className="faq-layout">
            <div className="faq-intro">
              <RichText
                tagName="h2"
                value={ sectionTitle }
                onChange={ ( value ) => setAttributes( { sectionTitle: value } ) }
                placeholder={ __( 'Osion otsikko...', 'dude' ) }
              />
              <RichText
                tagName="p"
                value={ sectionDescription }
                onChange={ ( value ) => setAttributes( { sectionDescription: value } ) }
                placeholder={ __( 'Osion kuvaus...', 'dude' ) }
              />
            </div>
            <div className="faq-items">
              <div className="accordion">
                { items.length === 0 && (
                  <p style={ { color: '#999', fontStyle: 'italic' } }>
                    { __( 'Lisää kysymyksiä sivupalkista.', 'dude' ) }
                  </p>
                ) }
                { items.map( ( item, index ) => {
                  const isExpanded = expandedPreviewItem === index;
                  return (
                    <div key={ item.id || index } className="accordion-item">
                      <h3>
                        <button
                          className="accordion-trigger"
                          aria-expanded={ isExpanded ? 'true' : 'false' }
                          onClick={ ( e ) => {
                            e.preventDefault();
                            togglePreviewItem( index );
                          } }
                          type="button"
                        >
                          <span className="accordion-title">
                            { item.question }
                            <span className="accordion-icon"></span>
                          </span>
                        </button>
                      </h3>
                      <div
                        className="accordion-panel"
                        style={ { display: isExpanded ? 'block' : 'none' } }
                      >
                        <div>
                          <p>{ item.answer }</p>
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
    </>
  );
}
