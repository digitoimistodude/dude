import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, InspectorControls, RichText } from '@wordpress/block-editor';
import { PanelBody, Button, RangeControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './style.scss';

const TEMPLATE = [
  [
    'core/heading',
    {
      level: 2,
      content: 'Hyvä tietää',
      placeholder: __( 'Osion otsikko…', 'dude' ),
    },
  ],
  [
    'core/paragraph',
    {
      content: 'Paljonko maksaa? Kauanko kestää? Lue ohesta usein kysytyt kysymykset.',
      placeholder: __( 'Osion kuvaus…', 'dude' ),
    },
  ],
];

export default function Edit( { attributes, setAttributes } ) {
  const { items, paddingTopDesktop, paddingBottomDesktop, paddingTopMobile, paddingBottomMobile } = attributes;
  const [ expandedPreviewItem, setExpandedPreviewItem ] = useState( null );

  const blockProps = useBlockProps( {
    className: 'block block-pricing-faq block-upkeep-faq',
    style: {
      '--padding-top-desktop': `${ paddingTopDesktop }px`,
      '--padding-bottom-desktop': `${ paddingBottomDesktop }px`,
      '--padding-top-mobile': `${ paddingTopMobile }px`,
      '--padding-bottom-mobile': `${ paddingBottomMobile }px`,
    },
  } );

  const innerBlocksProps = useInnerBlocksProps(
    {},
    {
      template: TEMPLATE,
      templateLock: 'all',
    }
  );

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
    if ( newIndex < 0 || newIndex >= items.length ) {
      return;
    }
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
          <p style={ { color: '#757575', fontSize: '12px', marginBottom: '16px' } }>{ __( 'Muokkaa osion otsikkoa ja kuvausta suoraan lohkossa. Klikkaa kysymyksiä ja vastauksia muokataksesi niitä suoraan.', 'dude' ) }</p>
          <Button variant="primary" onClick={ addItem } style={ { width: '100%' } }>
            { __( '+ Lisää kysymys', 'dude' ) }
          </Button>
        </PanelBody>
        <PanelBody title={ __( 'Padding settings', 'dude' ) } initialOpen={ false }>
          <RangeControl label={ __( 'Padding top (desktop)', 'dude' ) } value={ paddingTopDesktop } onChange={ ( value ) => setAttributes( { paddingTopDesktop: value } ) } min={ 0 } max={ 200 } step={ 1 } />
          <RangeControl label={ __( 'Padding bottom (desktop)', 'dude' ) } value={ paddingBottomDesktop } onChange={ ( value ) => setAttributes( { paddingBottomDesktop: value } ) } min={ 0 } max={ 200 } step={ 1 } />
          <RangeControl label={ __( 'Padding top (mobile)', 'dude' ) } value={ paddingTopMobile } onChange={ ( value ) => setAttributes( { paddingTopMobile: value } ) } min={ 0 } max={ 200 } step={ 1 } />
          <RangeControl label={ __( 'Padding bottom (mobile)', 'dude' ) } value={ paddingBottomMobile } onChange={ ( value ) => setAttributes( { paddingBottomMobile: value } ) } min={ 0 } max={ 200 } step={ 1 } />
        </PanelBody>
      </InspectorControls>

      <div { ...blockProps }>
        <div className="container">
          <div className="faq-layout">
            <div className="faq-intro">
              <div { ...innerBlocksProps } />
            </div>
            <div className="faq-items">
              <div className="accordion">
                { items.length === 0 && <p style={ { color: '#999', fontStyle: 'italic' } }>{ __( 'Lisää kysymyksiä sivupalkista.', 'dude' ) }</p> }
                { items.map( ( item, index ) => {
                  const isExpanded = expandedPreviewItem === index;
                  return (
                    <div key={ item.id || index } className="accordion-item" style={ { position: 'relative' } }>
                      <div
                        style={ {
                          position: 'absolute',
                          top: '10px',
                          right: '10px',
                          display: 'flex',
                          gap: '4px',
                          zIndex: 10,
                        } }
                      >
                        <Button icon="arrow-up" onClick={ () => moveItem( index, -1 ) } disabled={ index === 0 } size="small" label={ __( 'Siirrä ylös', 'dude' ) } />
                        <Button icon="arrow-down" onClick={ () => moveItem( index, 1 ) } disabled={ index === items.length - 1 } size="small" label={ __( 'Siirrä alas', 'dude' ) } />
                        <Button icon="trash" onClick={ () => removeItem( index ) } isDestructive size="small" label={ __( 'Poista', 'dude' ) } />
                      </div>
                      <h3>
                        <button
                          className="accordion-trigger"
                          aria-expanded={ isExpanded ? 'true' : 'false' }
                          onClick={ ( e ) => {
                            e.preventDefault();
                            togglePreviewItem( index );
                          } }
                          type="button"
                          style={ { cursor: 'pointer' } }
                        >
                          <span className="accordion-title">
                            <RichText tagName="span" value={ item.question } onChange={ ( value ) => updateItem( index, 'question', value ) } placeholder={ __( 'Kirjoita kysymys…', 'dude' ) } allowedFormats={ [ 'core/bold', 'core/italic' ] } />
                            <span className="accordion-icon"></span>
                          </span>
                        </button>
                      </h3>
                      <div className="accordion-panel" style={ { display: isExpanded ? 'block' : 'none' } }>
                        <div>
                          <RichText tagName="p" value={ item.answer } onChange={ ( value ) => updateItem( index, 'answer', value ) } placeholder={ __( 'Kirjoita vastaus…', 'dude' ) } allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] } />
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
