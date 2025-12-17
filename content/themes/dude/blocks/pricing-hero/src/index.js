import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import './style.scss';

registerBlockType( 'dude/pricing-hero', {
  edit: Edit,
  save: () => null,
} );
