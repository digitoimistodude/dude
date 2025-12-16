import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';

const metadata = {
  name: 'dude/pricing-hero',
  title: 'Hinnasto: Hero',
  category: 'dude',
  attributes: {
    prefix: { type: 'string', default: 'Hinnasto' },
    title: { type: 'string', default: 'Investoi parempaan<br>digitaaliseen läsnäoloon' },
    ingress: { type: 'string', default: 'Kaikki palvelumme ovat räätälöityjä ja suunniteltu kestämään aikaa. Teemme ratkaisuja, jotka toimivat useita vuosia ja tukevat liiketoimintasi kasvua. Investointi, joka maksaa itsensä takaisin päivä päivältä.' },
    showButton: { type: 'boolean', default: true },
    buttonText: { type: 'string', default: 'Ota yhteyttä' },
  },
};

registerBlockType( metadata.name, {
  ...metadata,
  edit: Edit,
  save: () => null,
} );
