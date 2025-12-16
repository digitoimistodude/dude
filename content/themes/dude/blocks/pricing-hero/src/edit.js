import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
  ToggleControl,
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
  const { prefix, title, ingress, showButton, buttonText } = attributes;

  const blockProps = useBlockProps( {
    className: 'block block-pricing-hero has-unified-padding-if-stacked',
  } );

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'Asetukset', 'dude' ) }>
          <TextControl
            label={ __( 'Etuliite', 'dude' ) }
            value={ prefix }
            onChange={ ( value ) => setAttributes( { prefix: value } ) }
          />
          <ToggleControl
            label={ __( 'Näytä painike', 'dude' ) }
            checked={ showButton }
            onChange={ ( value ) => setAttributes( { showButton: value } ) }
          />
          { showButton && (
            <TextControl
              label={ __( 'Painikkeen teksti', 'dude' ) }
              value={ buttonText }
              onChange={ ( value ) => setAttributes( { buttonText: value } ) }
            />
          ) }
        </PanelBody>
      </InspectorControls>

      <section { ...blockProps }>
        <div className="container">
          <div className="content">
            <h1 className="prefix">{ prefix }</h1>
            <RichText
              tagName="h2"
              value={ title }
              onChange={ ( value ) => setAttributes( { title: value } ) }
              placeholder={ __( 'Kirjoita otsikko...', 'dude' ) }
              allowedFormats={ [ 'core/bold', 'core/italic' ] }
            />
            <RichText
              tagName="p"
              className="ingress"
              value={ ingress }
              onChange={ ( value ) => setAttributes( { ingress: value } ) }
              placeholder={ __( 'Kirjoita ingressi...', 'dude' ) }
            />
            { showButton && (
              <p className="button-wrapper">
                <span className="button button-mint button-huge">{ buttonText }</span>
              </p>
            ) }
          </div>
        </div>
      </section>
    </>
  );
}
