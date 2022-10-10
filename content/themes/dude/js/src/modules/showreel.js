/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-06-28 15:20:10
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-10 15:32:02
 */
import MoveTo from 'moveto';

/* eslint-disable no-console */
const initShowreel = () => {
  // Video elements
  const autoplayplayers = document.querySelectorAll('.vimeo-player');

  // If videos not found, don't continue
  if (!autoplayplayers) {
    return;
  }

  // Timestamps for short video
  const startSeconds = 4;
  const endSeconds = 11;

  // Loop through all players
  autoplayplayers.forEach((autoplayplayer) => {
    // eslint-disable-next-line new-cap
    // Player options
    const options = {
      height: autoplayplayer.dataset.height ? autoplayplayer.dataset.height : 680,
      width: autoplayplayer.dataset.width ? autoplayplayer.dataset.width : 1208,
      id: autoplayplayer.dataset.videoId ? autoplayplayer.dataset.videoId : false,
      loop: 1,
      controls: 1,
      autoplay: 1,
      byline: 1,
      portrait: 0,
      title: 0,
      background: 1,
      muted: 1,
      dnt: 1,
      transparent: 1,
    };

    // Construct player
    // eslint-disable-next-line no-undef
    const player = new Vimeo.Player(autoplayplayer, options);

    // Find the play button
    const playButton = autoplayplayer.dataset.playButton
      ? document.getElementById(autoplayplayer.dataset.playButton)
      : null;

    // Do not continue if play button cannot be found
    if (!playButton) {
      return;
    }

    // Get play button
    const vimeoPlayButton = playButton;

    // Get play button label
    const vimeoPlayButtonLabel = playButton.getElementsByClassName('play-label')[0];

    // Play state function
    // eslint-disable-next-line func-names
    const onPlayStateFunction = function () {
      // If showreel, poll every 1 seconds to get the current time
      // eslint-disable-next-line no-undef
      const handle = window.setInterval(() => {
        // Check if play button has not been clicked
        if (!player.element.parentNode.parentNode.classList.contains('playing')) {
          // Ensure CTA is removed
          player.element.parentNode.parentNode.parentNode.parentNode.classList.remove('is-cta');

          player.getCurrentTime().then((currentTime) => {
            if (currentTime < 1) {
              player.setCurrentTime(startSeconds);
            }

            if (currentTime > endSeconds) {
              player.setCurrentTime(startSeconds);
            }
          });
        }

        // If we have the full player theatre on
        if (player.element.parentNode.parentNode.classList.contains('playing')) {
          // Get ended and add CTA
          player.getEnded().then((ended) => {
            if (ended) {
              // Show CTA in place of the player
              player.element.parentNode.parentNode.parentNode.parentNode.classList.add('is-cta');

              // Change button text
              vimeoPlayButtonLabel.innerHTML = 'Sulje showreel';

              // Stop counting the ending from now on
              clearInterval(handle);
            }
          });
        }
      }, 1000);
    };

    // Start polling when video is playing
    player.on('play', onPlayStateFunction);

    // Function for short video loop
    function setShortVideoLoop() {
      // Enable loop
      player.setLoop(true);

      // Enable mute
      player.setMuted(true);

      // Start playing from start position
      player.setCurrentTime(startSeconds);

      // Start playing
      player.play();

      // Remove needed classes to play button
      vimeoPlayButton.classList.remove('playing');

      // Change button text
      vimeoPlayButtonLabel.innerHTML = 'Katso showreel';

      // Remove needed classes from elements
      player.element.parentNode.parentNode.classList.remove('playing');
      player.element.parentNode.parentNode.parentNode.classList.remove('playing');
      player.element.parentNode.parentNode.parentNode.parentNode.classList.remove('playing');
      player.element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove('playing');
      player.element.parentNode.parentNode.parentNode.parentNode.classList.remove('is-cta');
    }

    // Function for full player presentation
    function setFullPlayingTheatre() {
      // Start from the beginning
      player.setCurrentTime(0);

      // Disable loop
      player.setLoop(false);

      // Disable mute
      player.setMuted(false);

      // Start playing
      player.play();

      // Add needed classes to play button
      vimeoPlayButton.classList.add('playing');

      // Change button text
      vimeoPlayButtonLabel.innerHTML = 'Pysäytä showreel';

      // Add needed classes to elements
      player.element.parentNode.parentNode.classList.add('playing');
      player.element.parentNode.parentNode.parentNode.classList.add('playing');
      player.element.parentNode.parentNode.parentNode.parentNode.classList.add('playing');
      player.element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('playing');

      // Quit showreel when pressing esc key
      document.addEventListener('keydown', (keydownMouseoverEvent) => {
        if (keydownMouseoverEvent.key === 'Escape') {
          setShortVideoLoop();
        }
      });
    }

    // When player is ready
    player.ready().then(() => {
      // Add loaded class to the wrapper around the iframe
      player.element.parentNode.classList.add('loaded');

      // Start playing from start position
      player.setCurrentTime(startSeconds);
    });

    playButton.addEventListener('click', () => {
      // Set moveTo
      const moveToTop = new MoveTo({ duration: 300, easing: 'easeOutQuart' });

      // Scroll to the top of the page
      moveToTop.move(document.getElementById('page'));

      // Start from the beginning
      player.setCurrentTime(0);

      // Check if play button has been clicked
      if (vimeoPlayButton.classList.contains('playing')) {
        setShortVideoLoop();
      } else {
        setFullPlayingTheatre();
      }
    });
  });
};

export default initShowreel;
