/* eslint-disable no-plusplus, brace-style, max-len */
const initUpKeepLanding = () => {
  // Check if elements exist before proceeding
  const carousel = document.getElementById('carousel');
  const track = document.getElementById('carousel-track');

  if (!carousel || !track) {
    // eslint-disable-next-line
    console.warn('Carousel elements not found');
    return;
  }

  const gap = parseInt(getComputedStyle(track).gap, 10) || 64;

  // Add hardware acceleration hints for smoother animation
  track.style.willChange = 'transform';
  track.style.backfaceVisibility = 'hidden';
  track.style.webkitBackfaceVisibility = 'hidden';
  track.style.perspective = '1000px';
  track.style.webkitPerspective = '1000px';

  // Store initial children
  const originals = Array.from(track.children);
  if (originals.length === 0) {
    // eslint-disable-next-line
    console.warn('No carousel items found');
    return;
  }

  // Fill carousel with a reasonable limit - fixed to prevent stack overflow
  const fillCarousel = () => {
    const minWidth = carousel.getBoundingClientRect().width * 2;
    let iterations = 0;
    const maxIterations = 20; // Reduced to prevent stack overflow

    // Clear any existing clones first
    while (track.children.length > originals.length) {
      track.removeChild(track.lastChild);
    }

    // Add clones in batches to prevent stack overflow
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

  // Calculate total width of original items
  const totalOriginalWidth = originals.reduce((total, item) => total + item.offsetWidth + gap, 0);

  // Calculate animation duration based on content width and device
  // Faster on mobile (iOS Safari)
  const duration = window.innerWidth < 768
    ? (totalOriginalWidth / 100) // Faster on mobile
    : (totalOriginalWidth / 50); // Slower on desktop

  // Create CSS animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes scroll {
      0% {
        transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(-${totalOriginalWidth}px, 0, 0);
        -webkit-transform: translate3d(-${totalOriginalWidth}px, 0, 0);
      }
    }
    #carousel-track {
      animation: scroll ${duration}s linear infinite;
      -webkit-animation: scroll ${duration}s linear infinite;
    }
    #carousel-track.paused {
      animation-play-state: paused;
      -webkit-animation-play-state: paused;
    }
  `;
  document.head.appendChild(style);

  // Add pause on hover
  carousel.addEventListener('mouseenter', () => {
    track.classList.add('paused');
  });
  carousel.addEventListener('mouseleave', () => {
    track.classList.remove('paused');
  });

  // Cleanup on page unload/destroy
  const cleanup = () => {
    style.remove();
  };

  window.addEventListener('unload', cleanup);
  window.addEventListener('beforeunload', cleanup);
};

// Auto-initialize when loaded for iOS Safari
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initUpKeepLanding);
} else {
  // If already loaded, initialize immediately
  initUpKeepLanding();
}

// Expose the function globally
window.initUpKeepLanding = initUpKeepLanding;

export default initUpKeepLanding;
