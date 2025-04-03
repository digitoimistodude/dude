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
  let scrollPos = 0;
  // Faster speed for mobile
  const speed = window.innerWidth < 768 ? 1.5 : 0.8;
  let isPaused = false;
  let animationId;
  let isDestroyed = false;

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

  carousel.addEventListener('mouseenter', () => {
    isPaused = true;
  });
  carousel.addEventListener('mouseleave', () => {
    isPaused = false;
  });

  // Calculate total width of original items
  const totalOriginalWidth = originals.reduce((total, item) => total + item.offsetWidth + gap, 0);

  function animate() {
    if (isDestroyed) return;

    try {
      if (!isPaused) {
        scrollPos += speed;

        // When we've scrolled past the width of original items, reset position
        // but keep the visual position the same to avoid jumping
        if (scrollPos >= totalOriginalWidth) {
          scrollPos %= totalOriginalWidth;
        }

        track.style.transform = `translate3d(-${scrollPos}px, 0, 0)`;
        track.style.webkitTransform = `translate3d(-${scrollPos}px, 0, 0)`;
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
    // Force a reflow before starting animation to ensure proper rendering
    // eslint-disable-next-line no-unused-expressions
    track.offsetHeight;
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
  // If already loaded, initialize immediately
  initUpKeepLanding();
}

// Expose the function globally
window.initUpKeepLanding = initUpKeepLanding;

export default initUpKeepLanding;
