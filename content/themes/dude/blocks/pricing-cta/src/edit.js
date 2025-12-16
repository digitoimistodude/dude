import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  RichText,
  InspectorControls,
} from '@wordpress/block-editor';
import {
  PanelBody,
  TextControl,
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
  const { title, description, phoneText, emailText, formText } = attributes;

  const blockProps = useBlockProps( {
    className: 'block block-pricing-cta has-unified-padding-if-stacked',
  } );

  return (
    <>
      <InspectorControls>
        <PanelBody title={ __( 'Yhteystiedot', 'dude' ) }>
          <TextControl
            label={ __( 'Puhelinteksti (HTML sallittu)', 'dude' ) }
            value={ phoneText }
            onChange={ ( value ) => setAttributes( { phoneText: value } ) }
            help={ __( 'Voit käyttää <a> -tageja linkeille', 'dude' ) }
          />
          <TextControl
            label={ __( 'Sähköpostiteksti (HTML sallittu)', 'dude' ) }
            value={ emailText }
            onChange={ ( value ) => setAttributes( { emailText: value } ) }
          />
          <TextControl
            label={ __( 'Lomaketeksti', 'dude' ) }
            value={ formText }
            onChange={ ( value ) => setAttributes( { formText: value } ) }
          />
        </PanelBody>
      </InspectorControls>

      <section { ...blockProps }>
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <RichText
                tagName="h2"
                value={ title }
                onChange={ ( value ) => setAttributes( { title: value } ) }
                placeholder={ __( 'Otsikko...', 'dude' ) }
                allowedFormats={ [ 'core/bold', 'core/italic' ] }
              />
              <RichText
                tagName="p"
                value={ description }
                onChange={ ( value ) => setAttributes( { description: value } ) }
                placeholder={ __( 'Kuvaus...', 'dude' ) }
              />
              <ul className="contact-methods">
                <li>
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span dangerouslySetInnerHTML={ { __html: phoneText } } />
                </li>
                <li>
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span dangerouslySetInnerHTML={ { __html: emailText } } />
                </li>
                <li>
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
                  <span>{ formText }</span>
                </li>
              </ul>
            </div>
            <div className="cta-image" aria-hidden="true">
              <span style={ { color: '#999', fontSize: '14px' } }>{ __( 'Kuva ladataan asetuksista', 'dude' ) }</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
