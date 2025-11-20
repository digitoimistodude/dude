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

      .contact-form-modal__alternative-contacts {
        margin: 0 0 2rem;
        font-size: 16px;
        color: #fff;
        line-height: 1.8;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .contact-form-modal__alternative-contacts a {
        color: #7effe1;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: opacity 0.2s ease;
      }

      .contact-form-modal__alternative-contacts a:hover {
        opacity: 0.8;
      }

      .contact-form-modal__alternative-contacts svg {
        flex-shrink: 0;
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
        <h2 id="contact-modal-heading" class="contact-form-modal__heading">Jätä yhteydenottopyyntö</h2>
        <p class="contact-form-modal__alternative-contacts">
          <a href="tel:0400443221">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="transparent" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Soita Juhalle 0400 443 221
          </a>
          <a href="https://wa.me/358400443221" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="transparent" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            Lähetä WhatsAppia
          </a>
          <a href="mailto:moro@dude.fi">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="transparent" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Lähetä sähköpostia moro@dude.fi
          </a>
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
      const focusableSelectors = ['a[href]', 'button:not([disabled])', 'textarea:not([disabled])', 'input:not([disabled])', 'select:not([disabled])', '[tabindex]:not([tabindex="-1"])'];
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

    // Log statistics to console (dev only)
    fetchStats().then((stats) => {
      if (stats && stats.visitors) {
        console.log(`Contact form modal opened - Opening rate: ${stats.click_rate}% (${stats.clicks} clicks / ${stats.visitors} homepage views)`);
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
