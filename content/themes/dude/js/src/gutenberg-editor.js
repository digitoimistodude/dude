/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-05-09 08:52:26
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-11-25 11:35:27
 */
/* eslint-disable camelcase, prefer-arrow-callback, no-unused-vars, no-undef, vars-on-top, no-var, func-names, max-len, import/no-unresolved */
import {
  setFigureWidths,
  setLazyLoadedFigureWidth,
} from './modules/gutenberg-helpers';
import initCarousels from './modules/carousels';

// Declare the block you'd like to style.
wp.blocks.registerBlockStyle('core/paragraph', {
  name: 'boxed',
  label: 'Laatikko',
});

// When document is ready as in when blocks are fully loaded
window.addEventListener('load', function () {
  /**
   * initializeBlock
   *
   * Adds custom JavaScript to the block HTML.
   *
   * @date    15/4/19
   * @since   1.0.0
   *
   * @param   object $block The block jQuery element.
   * @param   object attributes The block attributes (only available when editing).
   * @return  void
   *
   * @source https://www.advancedcustomfields.com/resources/acf_register_block_type/
   */
  var initializeBlock = function ($block) {
    // Init carousels
    initCarousels();
  };

  // Init carousels
  initCarousels();

  // Set non-lazyloaded figures width so captions in aligned images will be same width as image
  const figures = document.querySelectorAll('figure');
  setFigureWidths(figures);

  // Initialize dynamic block preview (editor).
  if (window.acf) {
    window.acf.addAction('render_block_preview', initializeBlock);
  }
});
