/* eslint-disable max-len */
import confetti from 'canvas-confetti';

const initContactFormModal = () => {
  // Configuration
  const MODAL_ID = 'contact-form-modal';

  // Check if we're on front page with the button
  const contactLink = document.querySelector('.button-mint.button-huge');
  if (!contactLink) return;

  // Replace link with button for better semantics and accessibility
  const contactButton = document.createElement('button');
  contactButton.type = 'button';
  contactButton.className = contactLink.className;
  contactButton.textContent = contactLink.textContent;
  contactButton.setAttribute('aria-label', 'Avaa yhteydenottolomake');
  contactLink.parentNode.replaceChild(contactButton, contactLink);

  // Inject modal styles
  const injectStyles = () => {
    if (document.getElementById('contact-form-modal-styles')) return;

    const style = document.createElement('style');
    style.id = 'contact-form-modal-styles';
    style.textContent = `
      .contact-form-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2147483647 !important;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
      }

      .contact-form-modal--visible {
        opacity: 1;
        pointer-events: all;
      }

      .contact-form-modal--visible .contact-form-modal__content {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }

      .contact-form-modal__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #2e2f38c7;
        cursor: pointer;
      }

      .contact-form-modal__content {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.9);
        max-width: 500px;
        width: calc(100% - 2rem);
        max-height: calc(100vh - 2rem);
        overflow-y: auto;
        background-color: #1c1e26;
        border-radius: 12px;
        padding: 4rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        opacity: 0;
      }

      .contact-form-modal__content:focus {
        outline: none;
      }

      @media (max-width: 767px) {
        .contact-form-modal__content {
          padding: 3rem;
        }
      }

      .contact-form-modal__close {
        position: absolute;
        top: 2rem;
        right: 2rem;
        background: transparent;
        border: none;
        font-size: 32px;
        line-height: 1;
        color: #fff;
        cursor: pointer;
        padding: 0.5rem;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        border-radius: 4px;
      }

      .contact-form-modal__close:hover {
        background-color: rgba(255, 255, 255, 0.1);
        transform: scale(1.1);
      }

      .contact-form-modal__close:focus-visible {
        background-color: rgba(255, 255, 255, 0.1);
        transform: scale(1.1);
        outline: 2px solid #7effe1;
        outline-offset: 2px;
      }

      .contact-form-modal__close:focus:not(:focus-visible) {
        outline: none;
      }

      .contact-form-modal__heading {
        margin: 0 0 2rem;
        padding-right: 2rem;
        font-size: 32px;
        font-weight: 700;
        line-height: 1.32;
        color: #fff;
      }

      @media (max-width: 767px) {
        .contact-form-modal__heading {
          font-size: 22px;
        }
      }

      .contact-form-modal__stats {
        margin: 0 0 2rem;
        font-size: 16px;
        color: #fff;
        line-height: 1.6;
      }

      .contact-form-modal__stats strong {
        color: #7effe1;
        font-weight: 600;
      }

      .contact-form-modal__stats--loading {
        opacity: 0.6;
      }

      .contact-form-modal__form {
        margin-top: 2rem;
      }

      .contact-form-modal__form .pipedriveWebForms {
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
        padding: 0 !important;
      }

      .contact-form-modal__form .pipedriveWebForms > div {
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
      }

      .contact-form-modal__form .pipedriveWebForms iframe {
        width: 100% !important;
        max-width: none !important;
        border: none !important;
        display: block !important;
      }

    `;
    document.head.appendChild(style);
  };

  injectStyles();

  // Confetti effect
  const fireConfetti = () => {
    const count = 400;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 2147483648,
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    fire(0.15, {
      spread: 90,
      startVelocity: 35,
      scalar: 1.5,
    });

    fire(0.2, {
      spread: 150,
      startVelocity: 50,
      decay: 0.95,
    });
  };

  // Track button click
  const trackClick = async () => {
    try {
      await fetch('/wp-json/dude/v1/contact-form-click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to track click:', error);
    }
  };

  // Fetch statistics
  const fetchStats = async () => {
    try {
      const response = await fetch('/wp-json/dude/v1/contact-form-stats');
      if (response.ok) {
        const data = await response.json();
        // eslint-disable-next-line no-console
        console.log('Stats received:', data);
        return data;
      }
      // eslint-disable-next-line no-console
      console.error('Stats request failed:', response.status, response.statusText);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to fetch stats:', error);
    }
    return null;
  };

  // Create modal HTML
  const createModal = () => {
    const modal = document.createElement('div');
    modal.id = MODAL_ID;
    modal.className = 'contact-form-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-labelledby', 'contact-modal-heading');
    modal.setAttribute('aria-modal', 'true');

    modal.innerHTML = `
      <div class="contact-form-modal__overlay"></div>
      <div class="contact-form-modal__content" tabindex="-1">
        <button type="button" class="contact-form-modal__close" aria-label="Sulje">
          ×
        </button>
        <h2 id="contact-modal-heading" class="contact-form-modal__heading">Ota yhteyttä</h2>
        <p class="contact-form-modal__stats contact-form-modal__stats--loading">
          Ladataan tilastoja...
        </p>
        <div class="contact-form-modal__form">
          <div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/1C922tUo90oeWhck1VhXZFdy1KWojGVSTwWxvxu5eswakOcepyDnWl7MtQDYOBcBl"><script src="https://webforms.pipedrive.com/f/loader"></script></div>
        </div>
      </div>
    `;

    return modal;
  };

  // Show modal
  const showModal = () => {
    // Remove existing modal if present
    const existingModal = document.getElementById(MODAL_ID);
    if (existingModal) {
      existingModal.remove();
    }

    // Store the currently focused element to return focus later
    const previouslyFocusedElement = document.activeElement;

    const modal = createModal();
    document.body.appendChild(modal);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Add show class after a brief delay for animation
    setTimeout(() => {
      modal.classList.add('contact-form-modal--visible');
    }, 10);

    // Focus trap implementation
    const content = modal.querySelector('.contact-form-modal__content');
    const closeBtn = modal.querySelector('.contact-form-modal__close');
    const overlay = modal.querySelector('.contact-form-modal__overlay');

    // Focus the close button to start with a focusable element
    setTimeout(() => {
      closeBtn.focus();
    }, 100);

    // Get all focusable elements within the modal
    const getFocusableElements = () => {
      const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ];
      return modal.querySelectorAll(focusableSelectors.join(','));
    };

    // Focus trap handler
    const handleFocusTrap = (e) => {
      if (e.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Shift + Tab: if on first element, move to last
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
      // Tab: if on last element, move to first
      else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleFocusTrap);

    // Load and display statistics
    const statsContainer = modal.querySelector('.contact-form-modal__stats');
    fetchStats().then((stats) => {
      if (stats && stats.visitors) {
        statsContainer.classList.remove('contact-form-modal__stats--loading');
        statsContainer.innerHTML = `
          Tämän lomakkeen avaamisprosentti on <strong>${stats.click_rate}%</strong> kaikista verkkosivustomme uniikeista kävijöistä.
        `;
      } else {
        statsContainer.style.display = 'none';
      }
    });

    // Close modal function
    const closeModal = () => {
      modal.classList.remove('contact-form-modal--visible');
      document.body.style.overflow = '';

      // Remove focus trap listener
      document.removeEventListener('keydown', handleFocusTrap);

      setTimeout(() => {
        modal.remove();
        // Return focus to the element that opened the modal
        if (previouslyFocusedElement) {
          previouslyFocusedElement.focus();
        }
      }, 300);
    };

    // Close button click
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    // Close on overlay click
    overlay.addEventListener('click', closeModal);

    // Close on Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);

    // Reload Pipedrive form script
    const formContainer = modal.querySelector('.pipedriveWebForms');
    if (formContainer) {
      const script = document.createElement('script');
      script.src = 'https://webforms.pipedrive.com/f/loader';
      script.async = true;
      formContainer.appendChild(script);

      // Log when iframe loads
      const checkIframe = setInterval(() => {
        const iframe = formContainer.querySelector('iframe');
        if (iframe) {
          clearInterval(checkIframe);
          // eslint-disable-next-line no-console
          console.log('Pipedrive form iframe loaded');
        }
      }, 100);
    }
  };

  // Handle button click
  contactButton.addEventListener('click', () => {
    trackClick();
    showModal();

    // Fire confetti after modal animation (300ms delay)
    setTimeout(() => {
      fireConfetti();
    }, 350);
  });
};

export default initContactFormModal;
