import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import './style.scss';

registerBlockType( 'dude/pricing-faq', {
  edit: Edit,
  save: () => null,
} );
