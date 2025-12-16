import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';

registerBlockType( 'dude/pricing-category', {
  edit: Edit,
  save: () => null,
} );
