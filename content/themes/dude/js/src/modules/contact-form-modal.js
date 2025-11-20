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
        list-style: none;
        margin: 0 0 2rem;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }

      .contact-form-modal__alternative-contacts li {
        margin: 0;
        padding: 0;
      }

      .contact-form-modal__alternative-contacts a {
        color: #dcdde0;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 16px;
        transition: opacity 0.2s ease;
      }

      .contact-form-modal__alternative-contacts a:hover {
        opacity: 0.8;
      }

      .contact-form-modal__alternative-contacts svg {
        flex-shrink: 0;
        color: #7effe1;
      }

      .contact-form-modal__form {
        margin-top: 2rem;
        position: relative;
      }

      .contact-form-modal__form-loader {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3rem 0;
        gap: 1rem;
        color: #dcdde0;
        font-size: 16px;
      }

      .contact-form-modal__form-loader--hidden {
        display: none;
      }

      .contact-form-modal__form-loader-spinner {
        width: 40px;
        height: 40px;
        border: 3px solid rgba(126, 255, 225, 0.2);
        border-top-color: #7effe1;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .contact-form-modal__form .pipedriveWebForms {
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
        padding: 0 !important;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .contact-form-modal__form .pipedriveWebForms--loaded {
        opacity: 1;
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
        <ul class="contact-form-modal__alternative-contacts">
          <li>
            <a href="tel:0400443221">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="transparent" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Soita Juhalle 0400 443 221</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/358400443221" target="_blank" rel="noopener noreferrer">
              <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"/></svg>
              <span>Lähetä WhatsAppia Juhalle</span>
            </a>
          </li>
          <li>
            <a href="mailto:moro@dude.fi">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="transparent" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>Lähetä sähköpostia moro@dude.fi</span>
            </a>
          </li>
        </ul>
        <div class="contact-form-modal__form">
          <div class="contact-form-modal__form-loader">
            <div class="contact-form-modal__form-loader-spinner"></div>
            <p>Ladataan lomaketta...</p>
          </div>
          <div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/1C922tUo90oeWhck1VhXZFdy1KWojGVSTwWxvxu5eswakOcepyDnWl7MtQDYOBcBl"><script src="https://webforms.pipedrive.com/f/loader"></script></div>
        </div>
      </div>
    `;

    return modal;
  };

  // Pre-created modal reference
  let preCreatedModal = null;

  // Show modal
  const showModal = () => {
    // Use pre-created modal if available, otherwise create new one
    let modal;
    if (preCreatedModal) {
      modal = preCreatedModal;
      preCreatedModal = null; // Clear reference after use
    } else {
      // Remove existing modal if present
      const existingModal = document.getElementById(MODAL_ID);
      if (existingModal) {
        existingModal.remove();
      }

      modal = createModal();
      document.body.appendChild(modal);
    }

    // Store the currently focused element to return focus later
    const previouslyFocusedElement = document.activeElement;

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Add show class after a brief delay for animation
    setTimeout(() => {
      modal.classList.add('contact-form-modal--visible');
    }, 10);

    // Focus trap implementation
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

    // Handle form loading, Ref: DEV-619
    const formContainer = modal.querySelector('.pipedriveWebForms');
    const loader = modal.querySelector('.contact-form-modal__form-loader');

    // Check if form iframe already exists (from pre-creation)
    const existingIframe = formContainer.querySelector('iframe');
    if (existingIframe) {
      // Form already loaded, hide loader immediately
      if (loader) {
        loader.classList.add('contact-form-modal__form-loader--hidden');
      }
      formContainer.classList.add('pipedriveWebForms--loaded');
      // eslint-disable-next-line no-console
      console.log('Pipedrive form already loaded from pre-creation');
    } else if (formContainer) {
      // Form not loaded yet, remove any existing script to force reload
      const existingScripts = formContainer.querySelectorAll('script');
      existingScripts.forEach(s => s.remove());

      // Create new script element
      const script = document.createElement('script');
      script.src = 'https://webforms.pipedrive.com/f/loader';
      script.async = true;

      // Add error handling
      script.onerror = () => {
        // eslint-disable-next-line no-console
        console.error('Failed to load Pipedrive form script');
      };

      formContainer.appendChild(script);

      // Wait for iframe with timeout
      const checkIframe = setInterval(() => {
        const iframe = formContainer.querySelector('iframe');
        if (iframe) {
          clearInterval(checkIframe);

          // Hide loader and show form with fade in
          if (loader) {
            loader.classList.add('contact-form-modal__form-loader--hidden');
          }
          formContainer.classList.add('pipedriveWebForms--loaded');

          // eslint-disable-next-line no-console
          console.log('Pipedrive form iframe loaded successfully');
        }
      }, 100);

      // Timeout after 10 seconds
      setTimeout(() => {
        clearInterval(checkIframe);
        const iframe = formContainer.querySelector('iframe');
        if (!iframe) {
          // eslint-disable-next-line no-console
          console.error('Pipedrive form failed to load within 10 seconds');
          if (loader && !formContainer.classList.contains('pipedriveWebForms--loaded')) {
            loader.innerHTML = '<p style="color: #dcdde0;">Lomakkeen lataus epäonnistui. Yritä uudelleen tai ota yhteyttä suoraan.</p>';
          }
        }
      }, 10000);
    }
  };

  // Pre-create modal immediately for instant loading on click
  const preCreateModal = () => {
    // Only pre-create once and if not already created
    if (preCreatedModal || document.getElementById(MODAL_ID)) return;

    // Create modal but don't show it (don't add visible class)
    preCreatedModal = createModal();
    document.body.appendChild(preCreatedModal);

    // Start loading the Pipedrive form in the background
    const formContainer = preCreatedModal.querySelector('.pipedriveWebForms');
    if (formContainer) {
      const script = document.createElement('script');
      script.src = 'https://webforms.pipedrive.com/f/loader';
      script.async = true;
      formContainer.appendChild(script);

      // eslint-disable-next-line no-console
      console.log('Modal pre-created on page load, Pipedrive form loading in background');
    }
  };

  // Pre-create modal immediately when page loads (works with Swup.js)
  preCreateModal();

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
