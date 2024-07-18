import initShowreel from './modules/showreel';

function init() {
  // Init showreel
  initShowreel();
}

// When document has been completely loaded
document.addEventListener('DOMContentLoaded', init);

// Do things when content is replaced via Swup
if (window._dude_swup) window._dude_swup.on('contentReplaced', init); // eslint-disable-line no-underscore-dangle
