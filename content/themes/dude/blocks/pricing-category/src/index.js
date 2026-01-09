import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import Edit from './edit';
import './style.scss';

registerBlockType( 'dude/pricing-category', {
  edit: Edit,
  save: () => <InnerBlocks.Content />,
} );
