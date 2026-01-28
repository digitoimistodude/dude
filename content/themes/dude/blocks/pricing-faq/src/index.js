import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import deprecated from './deprecated';
import './style.scss';

registerBlockType( 'dude/pricing-faq', {
  edit: Edit,
  save,
  deprecated,
} );
