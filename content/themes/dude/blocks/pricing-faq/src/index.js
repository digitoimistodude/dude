import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';

registerBlockType( 'dude/pricing-faq', {
  edit: Edit,
  save: () => null,
} );
