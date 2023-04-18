/* eslint-disable max-len, no-underscore-dangle, no-param-reassign, no-unused-vars, no-new, new-cap */
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-04-23 13:44:09
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-04-18 18:57:20
 */

// Import modules
import reframe from 'reframe.js';
import Swup from 'swup';
import SwupScriptsPlugin from '@swup/scripts-plugin';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
// eslint-disable-next-line no-unused-vars
import whatInput from 'what-input';
import getLocalization from './modules/localization';
import { styleExternalLinks, initExternalLinkLabels, getChildAltText } from './modules/external-link';
import initCarousels from './modules/carousels';
import initAnchors from './modules/anchors';
import initBackToTop from './modules/top';
import initMoveToTop from './modules/move-to-top';
import initAccordions from './modules/accordion';
import initNavigation from './modules/navigation';
import initTabs from './modules/tabs';
import initEmbeds from './modules/embeds';
import initScrollableDivs from './modules/scrollable-div-shadows';
import initdarkModeFooterToggle from './modules/dark-mode-footer-toggle';
import initTrain from './modules/train';
import initShowreel from './modules/showreel';
import init100vhMobileFix from './modules/100vh';
import init404 from './modules/404';
import initSwupHelpers from './modules/swup-helpers';
import initFormHelpers from './modules/form-helpers';
import initA11ySkipLink from './modules/a11y-skip-link';

// Init Swup SPA-like transitions
const swup = new Swup({
  containers: ['#page'],
  animationSelector: '[class*="has-transition-"]',
  plugins: [
    new SwupScriptsPlugin({
      head: true,
      body: true,
      optin: true,
    }),
    new SwupBodyClassPlugin(),
  ],
});

function init(target, args) {
  // Define Javascript is active by changing the body class
  document.body.classList.remove('no-js');
  document.body.classList.add('js');

  // Init move to top on page change
  initMoveToTop();

  // Init site navigation
  initNavigation();

  // Init carousels for testimonials and image galleries
  // Timeout needed for Firefox and iOS Safari
  setTimeout(() => {
    initCarousels();
  }, 1000);

  // Init all possible anchor links
  initAnchors();

  // Init accordions
  initAccordions();

  // Init tabs
  initTabs();

  // Init scrollable divs
  initScrollableDivs();

  // Init showreel
  initShowreel();

  // Init dark mode toggle
  initdarkModeFooterToggle();

  // Init auto scrolling train
  initTrain();

  // Init back to top button
  initBackToTop();

  // Init external link labels
  initExternalLinkLabels();

  // Init 100vh mobile fix
  init100vhMobileFix();

  // Style external links automatically based on their content
  styleExternalLinks();

  // Init 404 easter egg
  init404();

  // Init Swup helpers
  initSwupHelpers();

  // Init form helpers
  initFormHelpers();

  // Init skip links
  initA11ySkipLink();

  // Init Twitter and Instagram embeds in blog posts
  initEmbeds();

  // Fit video embeds to container
  if (window.innerWidth < 768) {
    reframe('.wp-has-aspect-ratio iframe, .article-content iframe');
  }

  // Responsive reference video
  reframe('.reference-iframe');
}

// When document has been completely loaded
document.addEventListener('DOMContentLoaded', init);

// Do things when content is replaced via Swup
swup.on('contentReplaced', init);
