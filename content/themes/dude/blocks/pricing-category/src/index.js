import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import './style.scss';

registerBlockType( 'dude/pricing-category', {
  edit: Edit,
  save: () => null,
} );
