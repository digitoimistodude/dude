import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';

const metadata = {
  name: 'dude/pricing-cta',
  title: 'Hinnasto: CTA-laatikko',
  category: 'dude',
  attributes: {
    title: { type: 'string', default: 'Kiinnostuitko? Ota yhteyttä!' },
    description: { type: 'string', default: 'Kerro meille projektistasi, niin palataan asiaan pikimmiten.' },
    phoneText: { type: 'string', default: 'Soita Juhalle <a href="tel:+358400443221">0400 443 221</a> tai lähetä WhatsAppia' },
    emailText: { type: 'string', default: 'Lähetä sähköpostia <a href="mailto:moro@dude.fi">moro@dude.fi</a>' },
    formText: { type: 'string', default: 'Täytä yhteydenottolomake →' },
  },
};

registerBlockType( metadata.name, {
  ...metadata,
  edit: Edit,
  save: () => null,
} );
