import initShowreel from './modules/showreel';

function init() {
  // Init showreel
  initShowreel();
}

// When document has been completely loaded
document.addEventListener('DOMContentLoaded', init);

// Do things when content is replaced via Swup
if (window._dude_swup) window._dude_swup.on('contentReplaced', init); // eslint-disable-line no-underscore-dangle

// If this was from the swup lazy loader, run
// eslint-disable-next-line
if (window._dude_swup_run_video_player) init();