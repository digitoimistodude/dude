/* eslint-disable max-len, no-underscore-dangle, no-param-reassign, no-unused-vars, no-new, new-cap */

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
import initShowreel from './modules/showreel'; // Note: Reference videos also use this module
import init100vhMobileFix from './modules/100vh';
import init404 from './modules/404';
import initSwupHelpers from './modules/swup-helpers';
import initFormHelpers from './modules/form-helpers';
import initA11ySkipLink from './modules/a11y-skip-link';
import initUpKeepLanding from './modules/upkeep-landing';
import initReferenceFilters from './modules/reference-filters';
import initLeadPopup from './modules/lead-popup';
import initContactFormModal from './modules/contact-form-modal';

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
  // Timeout needed for Firefox and iOS Safari for some modules
  setTimeout(() => {
    initCarousels();

    // Init upkeep landing page
    initUpKeepLanding();

    // Init reference filters
    initReferenceFilters();
  }, 1000);

  // Init all possible anchor links
  initAnchors();

  // Init accordions
  initAccordions();

  // Init tabs
  initTabs();

  // Init scrollable divs
  initScrollableDivs();

  // Init showreel (also handles reference videos)
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

  // Init lead generation popup
  initLeadPopup();

  // Init contact form modal
  initContactFormModal();

  // Fit video embeds to container
  if (window.innerWidth < 768) {
    reframe('.wp-has-aspect-ratio iframe, .article-content iframe');
  }
}

// When document has been completely loaded
document.addEventListener('DOMContentLoaded', init);

// Do things when content is replaced via Swup
swup.on('contentReplaced', init);

// Do things after page has loaded
