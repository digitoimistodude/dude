/* eslint-disable no-plusplus, brace-style, max-len */
const initUpKeepLanding = function initUpKeepLanding() {
  // Check if elements exist before proceeding
  const carousel = document.getElementById('carousel');
  const track = document.getElementById('carousel-track');
  const debug = document.getElementById('debug');

  // Add more detailed debug info
  if (debug) {
    debug.innerHTML = `
      <p>Debug Info:</p>
      <p>Carousel element: ${carousel ? 'Found' : 'Not found'}</p>
      <p>Track element: ${track ? 'Found' : 'Not found'}</p>
      <p>Carousel width: ${carousel ? carousel.offsetWidth : 'N/A'}px</p>
      <p>Track width: ${track ? track.offsetWidth : 'N/A'}px</p>
      <p>Track scrollWidth: ${track ? track.scrollWidth : 'N/A'}px</p>
      <p>Track children: ${track ? track.children.length : 'N/A'}</p>
      <p>Window width: ${window.innerWidth}px</p>
      <p>Is mobile: ${window.innerWidth < 768 ? 'Yes' : 'No'}</p>
    `;
  }

  if (!carousel || !track) {
    // eslint-disable-next-line
    console.warn('Carousel elements not found');
    return;
  }

  const gap = parseInt(getComputedStyle(track).gap, 10) || 64;
  let scrollPos = 0;
  const speed = 2;
  let isPaused = false;
  let animationId;
  let isDestroyed = false;

  const getItemWidth = () => {
    const first = track.firstElementChild;
    return first ? first.offsetWidth + gap : 0;
  };

  // Store initial children
  const originals = Array.from(track.children);
  if (originals.length === 0) {
    // eslint-disable-next-line
    console.warn('No carousel items found');
    return;
  }

  // Fill carousel with a reasonable limit
  const fillCarousel = () => {
    const minWidth = carousel.getBoundingClientRect().width * 2;
    let iterations = 0;
    const maxIterations = 100; // Prevent infinite loops

    while (track.scrollWidth < minWidth && originals.length > 0 && iterations < maxIterations) {
      // Add one complete set of originals
      originals.forEach((item) => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
      });
      // eslint-disable-next-line
      iterations++;
    }
  };

  try {
    fillCarousel();
  } catch (error) {
    // eslint-disable-next-line
    console.error('Error filling carousel:', error);
    return;
  }

  carousel.addEventListener('mouseenter', () => {
    isPaused = true;
  });
  carousel.addEventListener('mouseleave', () => {
    isPaused = false;
  });

  function animate() {
    if (isDestroyed) return;

    try {
      if (!isPaused) {
        scrollPos += speed;
        track.style.transform = `translateX(-${scrollPos}px)`;

        const firstItem = track.firstElementChild;
        if (firstItem && scrollPos >= getItemWidth()) {
          scrollPos -= getItemWidth();
          track.appendChild(firstItem);
          track.style.transform = `translateX(-${scrollPos}px)`;
        }
      }
      animationId = requestAnimationFrame(animate);
    } catch (error) {
      // eslint-disable-next-line
      console.error('Animation error:', error);
      cancelAnimationFrame(animationId);
    }
  }

  // Start animation with error handling
  try {
    animate();
  } catch (error) {
    // eslint-disable-next-line
    console.error('Failed to start animation:', error);
  }

  // Cleanup on page unload/destroy
  const cleanup = () => {
    isDestroyed = true;
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  };

  window.addEventListener('unload', cleanup);
  window.addEventListener('beforeunload', cleanup);
};

// Auto-initialize when loaded for iOS Safari
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initUpKeepLanding);
} else {
  initUpKeepLanding();
}

// Expose the function globally
window.initUpKeepLanding = initUpKeepLanding;

export default initUpKeepLanding;
