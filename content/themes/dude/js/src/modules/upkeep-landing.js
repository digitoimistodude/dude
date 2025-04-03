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

  // Add hardware acceleration hints for smoother animation
  track.style.willChange = 'transform';
  track.style.backfaceVisibility = 'hidden';
  track.style.webkitBackfaceVisibility = 'hidden';
  track.style.perspective = '1000px';
  track.style.webkitPerspective = '1000px';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Calculate duration based on number of items
  const originalItems = Array.from(track.children).filter((item) => !item.classList.contains('clone'));
  const itemCount = originalItems.length;
  // Base duration of 30s for 10 items, scale up for more items
  const duration = Math.max(30, Math.round((itemCount / 10) * 30));

  // Create and add styles
  const style = document.createElement('style');
  style.textContent = `
    #carousel {
      overflow: hidden;
      width: 100%;
      position: relative;
    }

    #carousel-track {
      display: flex;
      gap: 70px;
      width: fit-content;
      position: relative;
      transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
      will-change: transform;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      perspective: 1000px;
      -webkit-perspective: 1000px;
    }

    #carousel-track[data-animated="true"] {
      animation: scroll ${duration}s linear infinite;
      -webkit-animation: scroll ${duration}s linear infinite;
    }

    #carousel-track.paused {
      animation-play-state: paused;
      -webkit-animation-play-state: paused;
    }

    @keyframes scroll {
      0% {
        transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(-50%, 0, 0);
        -webkit-transform: translate3d(-50%, 0, 0);
      }
    }

    @media (max-width: 768px) {
      #carousel-track {
        gap: 40px;
      }
    }
  `;
  document.head.appendChild(style);

  // Function to handle carousel animation state
  const handleCarouselState = (shouldReduce) => {
    if (shouldReduce) {
      track.removeAttribute('data-animated');
      const clonedItems = track.querySelectorAll('.clone');
      clonedItems.forEach((item) => item.remove());
    } else {
      track.setAttribute('data-animated', true);
      // Clear any existing clones
      const existingClones = track.querySelectorAll('.clone');
      existingClones.forEach((clone) => clone.remove());

      // Clone original items
      Array.from(track.children)
        .filter((item) => !item.classList.contains('clone'))
        .forEach((item) => {
          const clone = item.cloneNode(true);
          clone.setAttribute('aria-hidden', true);
          clone.classList.add('clone');
          track.appendChild(clone);
        });
    }
  };

  // Initial setup
  handleCarouselState(prefersReducedMotion.matches);

  // Listen for preference changes
  prefersReducedMotion.addEventListener('change', (e) => handleCarouselState(e.matches));

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
    prefersReducedMotion.removeEventListener('change', handleCarouselState);
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
