import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, RichText } from '@wordpress/block-editor';
import './style.scss';

const TEMPLATE = [
  [
    'core/heading',
    {
      level: 2,
      content: 'Kiinnostuitko? Ota yhteyttä!',
      placeholder: __( 'Kirjoita otsikko…', 'dude' ),
    },
  ],
  [
    'core/paragraph',
    {
      content: 'Kerro meille projektistasi, niin palataan asiaan pikimmiten.',
      placeholder: __( 'Kirjoita kuvaus…', 'dude' ),
    },
  ],
  [
    'core/image',
    {
      id: 14859,
      url: 'https://www.dude.fi/media/juha-2023.png',
      className: 'cta-image',
    },
  ],
];

export default function Edit( { attributes, setAttributes } ) {
  const { phoneText, emailText, formText } = attributes;

  const blockProps = useBlockProps( {
    className: 'block block-pricing-cta',
  } );

  const innerBlocksProps = useInnerBlocksProps(
    { className: 'cta-inner' },
    {
      template: TEMPLATE,
      templateLock: false,
    }
  );

  return (
    <section { ...blockProps }>
      <div className="container">
        <div className="cta-box">
          <div className="cta-content">
            <div className="cta-text">
              <div { ...innerBlocksProps } />
            </div>
            <ul className="contact-methods">
              <li>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <RichText tagName="span" value={ phoneText } onChange={ ( value ) => setAttributes( { phoneText: value } ) } placeholder={ __( 'Puhelinteksti…', 'dude' ) } allowedFormats={ [ 'core/link', 'core/bold' ] } />
              </li>
              <li>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <RichText tagName="span" value={ emailText } onChange={ ( value ) => setAttributes( { emailText: value } ) } placeholder={ __( 'Sähköpostiteksti…', 'dude' ) } allowedFormats={ [ 'core/link', 'core/bold' ] } />
              </li>
              <li>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                </svg>
                <RichText tagName="span" value={ formText } onChange={ ( value ) => setAttributes( { formText: value } ) } placeholder={ __( 'Lomaketeksti…', 'dude' ) } allowedFormats={ [ 'core/link', 'core/bold' ] } />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
