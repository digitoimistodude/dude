import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import './style.scss';

registerBlockType( 'dude/pricing-cta', {
  edit: Edit,
  save: () => null,
} );
