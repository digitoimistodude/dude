/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
let popupInitialized = false;
let popupTimeout = null;

const initLeadPopup = () => {
  // Prevent multiple initializations (for Swup.js page transitions)
  if (popupInitialized) return;
  popupInitialized = true;

  // Configuration
  const TRIGGER_DELAY = 10000;
  const STORAGE_KEY = 'dude-lead-popup-dismissed';
  const DAYS_TO_HIDE = 2;

  // Check if popup should be shown
  const shouldShowPopup = () => {
    const dismissedUntil = localStorage.getItem(STORAGE_KEY);
    if (!dismissedUntil) return true;

    const now = new Date().getTime();
    if (now > parseInt(dismissedUntil, 10)) {
      // Storage expired, remove it
      localStorage.removeItem(STORAGE_KEY);
      return true;
    }
    return false;
  };

  // Don't show if user dismissed for 2 days
  if (!shouldShowPopup()) return;

  // Inject styles
  const injectStyles = () => {
    if (document.getElementById('lead-popup-styles')) return;

    const style = document.createElement('style');
    style.id = 'lead-popup-styles';
    style.textContent = `
      .lead-popup {
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

      .lead-popup--visible {
        opacity: 1;
        pointer-events: all;
      }

      .lead-popup--visible .lead-popup__content {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }

      .lead-popup__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(30, 67, 72, 0.5);
        cursor: pointer;
      }

      .lead-popup__content {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.9);
        max-width: 600px;
        width: calc(100% - 2rem);
        max-height: calc(100vh - 2rem);
        overflow-y: auto;
        background-color: #fff;
        border-radius: 12px;
        padding: 4rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        opacity: 0;
      }

      .lead-popup__content:focus {
        outline: none;
      }

      @media (max-width: 767px) {
        .lead-popup__content {
          padding: 3rem;
        }
      }

      .lead-popup__close {
        position: absolute;
        top: 2rem;
        right: 2rem;
        background: transparent;
        border: none;
        font-size: 32px;
        line-height: 1;
        color: #2e2f38;
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

      .lead-popup__close:hover {
        background-color: rgba(0, 0, 0, 0.05);
        transform: scale(1.1);
      }

      .lead-popup__close:focus-visible {
        background-color: rgba(0, 0, 0, 0.05);
        transform: scale(1.1);
        outline: 2px solid #1e4348;
        outline-offset: 2px;
      }

      .lead-popup__close:focus:not(:focus-visible) {
        outline: none;
      }

      [data-color-scheme='dark'] .lead-popup__close {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__close {
          color: #fff;
        }
      }

      [data-color-scheme='dark'] .lead-popup__close:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      [data-color-scheme='dark'] .lead-popup__close:focus-visible {
        background-color: rgba(255, 255, 255, 0.1);
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__close:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        body:not([data-color-scheme='light']) .lead-popup__close:focus-visible {
          background-color: rgba(255, 255, 255, 0.1);
        }
      }

      [data-color-scheme='dark'] .lead-popup__close:focus-visible {
        outline-color: #7effe1;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__close:focus-visible {
          outline-color: #7effe1;
        }
      }

      .lead-popup__heading {
        margin: 0 0 3rem;
        padding-right: 2rem;
        font-size: 32px;
        font-weight: 700;
        line-height: 1.32;
        color: #1e4348;
      }

      @media (max-width: 767px) {
        .lead-popup__heading {
          font-size: 22px;
        }
      }

      .lead-popup__body {
        margin-bottom: 2rem;
        color: #2e2f38;
        font-size: 16px;
      }

      .lead-popup__body p {
        margin: 0 0 1rem;
        line-height: 1.6;
        font-size: 16px;
        color: #2e2f38;
      }

      .lead-popup__body p:last-child {
        margin-bottom: 0;
      }

      .lead-popup__body a {
        color: #1e4348;
        text-decoration: underline;
      }

      .lead-popup__body a:hover,
      .lead-popup__body a:focus {
        color: #000;
      }

      .lead-popup__body strong {
        color: #2e2f38;
        font-weight: 600;
      }

      [data-color-scheme='light'] .lead-popup__content {
        background-color: #fff;
      }

      [data-color-scheme='light'] .lead-popup__heading {
        color: #1e4348;
      }

      [data-color-scheme='light'] .lead-popup__body {
        color: #2e2f38;
      }

      [data-color-scheme='light'] .lead-popup__body p {
        color: #2e2f38;
      }

      [data-color-scheme='light'] .lead-popup__body a {
        color: #1e4348;
      }

      [data-color-scheme='light'] .lead-popup__body a:hover,
      [data-color-scheme='light'] .lead-popup__body a:focus {
        color: #000;
      }

      [data-color-scheme='light'] .lead-popup__body strong {
        color: #2e2f38;
      }

      [data-color-scheme='dark'] .lead-popup__content {
        background-color: #1c1e26;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__content {
          background-color: #1c1e26;
        }
      }

      [data-color-scheme='dark'] .lead-popup__heading {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__heading {
          color: #fff;
        }
      }

      [data-color-scheme='dark'] .lead-popup__body {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__body {
          color: #fff;
        }
      }

      [data-color-scheme='dark'] .lead-popup__body p {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__body p {
          color: #fff;
        }
      }

      [data-color-scheme='dark'] .lead-popup__body a {
        color: #7effe1;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__body a {
          color: #7effe1;
        }
      }

      [data-color-scheme='dark'] .lead-popup__body a:hover,
      [data-color-scheme='dark'] .lead-popup__body a:focus {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__body a:hover,
        body:not([data-color-scheme='light']) .lead-popup__body a:focus {
          color: #fff;
        }
      }

      [data-color-scheme='dark'] .lead-popup__body strong {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__body strong {
          color: #fff;
        }
      }

      .lead-popup__buttons {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }

      .lead-popup__button {
        background: none;
        border: none;
        padding: 0;
        font-size: 16px;
        font-weight: 400;
        color: #2e2f38;
        text-decoration: underline;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
        outline: none;
      }

      .lead-popup__button:hover,
      .lead-popup__button:focus {
        color: #000;
        text-decoration: none;
      }

      .lead-popup__button:focus-visible {
        outline: 2px solid #1e4348;
        outline-offset: 2px;
        border-radius: 2px;
      }

      .lead-popup__button--primary {
        font-weight: 600;
        color: #1e4348;
      }

      .lead-popup__button--primary:hover,
      .lead-popup__button--primary:focus {
        color: #000;
      }

      [data-color-scheme='dark'] .lead-popup__button {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__button {
          color: #fff;
        }
      }

      [data-color-scheme='dark'] .lead-popup__button:hover,
      [data-color-scheme='dark'] .lead-popup__button:focus {
        color: #7effe1;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__button:hover,
        body:not([data-color-scheme='light']) .lead-popup__button:focus {
          color: #7effe1;
        }
      }

      [data-color-scheme='dark'] .lead-popup__button--primary {
        color: #7effe1;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__button--primary {
          color: #7effe1;
        }
      }

      [data-color-scheme='dark'] .lead-popup__button--primary:hover,
      [data-color-scheme='dark'] .lead-popup__button--primary:focus {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__button--primary:hover,
        body:not([data-color-scheme='light']) .lead-popup__button--primary:focus {
          color: #fff;
        }
      }

      [data-color-scheme='dark'] .lead-popup__button:focus-visible {
        outline-color: #7effe1;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__button:focus-visible {
          outline-color: #7effe1;
        }
      }

      .lead-popup__trash {
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        gap: 1.2rem;
        transition: all 0.2s ease;
        outline: none;
      }

      .lead-popup__trash:hover,
      .lead-popup__trash:focus {
        transform: scale(1.1) translateX(-15px);
      }

      @media (max-width: 1024px) {
        .lead-popup__trash:hover,
        .lead-popup__trash:focus {
          transform: scale(1.1);
        }
      }

      .lead-popup__trash:focus-visible {
        outline: 2px solid #1e4348;
        outline-offset: 2px;
        border-radius: 4px;
      }

      [data-color-scheme='dark'] .lead-popup__trash:focus-visible {
        outline-color: #7effe1;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__trash:focus-visible {
          outline-color: #7effe1;
        }
      }

      .lead-popup__trash-text {
        font-size: 14px;
        color: #2e2f38;
        white-space: nowrap;
        opacity: 0;
        transform: translateX(10px);
        transition: all 0.3s ease;
        pointer-events: none;
      }

      @media (max-width: 1024px) {
        .lead-popup__trash-text {
          display: none;
        }
      }

      .lead-popup__trash:hover .lead-popup__trash-text,
      .lead-popup__trash:focus .lead-popup__trash-text {
        opacity: 0.5;
        transform: translateX(0);
      }

      [data-color-scheme='dark'] .lead-popup__trash-text {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__trash-text {
          color: #fff;
        }
      }

      .lead-popup__reactions {
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(46, 47, 56, 0.1);
      }

      [data-color-scheme='dark'] .lead-popup__reactions {
        border-top-color: rgba(255, 255, 255, 0.1);
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__reactions {
          border-top-color: rgba(255, 255, 255, 0.1);
        }
      }

      .lead-popup__reactions-title {
        font-size: 16px;
        margin: 0 0 0.75rem;
        color: #5f5f5f;
        font-weight: 500;
      }

      [data-color-scheme='dark'] .lead-popup__reactions-title {
        color: #aeafbc;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__reactions-title {
          color: #aeafbc;
        }
      }

      .lead-popup__reactions-buttons {
        display: flex;
        gap: 0.8rem;
        flex-wrap: wrap;
      }

      .lead-popup__reaction {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.4rem 0.75rem;
        border: 1px solid rgba(46, 47, 56, 0.1);
        border-radius: 24px;
        background: transparent;
        font-size: 12px;
        color: #2e2f38 !important;
        cursor: pointer;
        outline: none;
      }

      [data-color-scheme='dark'] .lead-popup__reaction {
        border-color: rgba(255, 255, 255, 0.1);
        color: #fff !important;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__reaction {
          border-color: rgba(255, 255, 255, 0.1);
          color: #fff !important;
        }
      }

      .lead-popup__reaction:hover,
      .lead-popup__reaction:focus {
        border-color: #1e4348;
        color: #1e4348 !important;
      }

      .lead-popup__reaction:focus-visible {
        outline: 2px solid #1e4348;
        outline-offset: 2px;
      }

      [data-color-scheme='dark'] .lead-popup__reaction:hover,
      [data-color-scheme='dark'] .lead-popup__reaction:focus {
        border-color: #7effe1;
        color: #7effe1 !important;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__reaction:hover,
        body:not([data-color-scheme='light']) .lead-popup__reaction:focus {
          border-color: #7effe1;
          color: #7effe1 !important;
        }
      }

      .lead-popup__reaction--active {
        background-color: #5e8085 !important;
        border-color: #5e8085 !important;
        color: #fff !important;
      }

      [data-color-scheme='light'] .lead-popup__reaction--active {
        background-color: #5e8085 !important;
        border-color: #5e8085 !important;
        color: #fff !important;
      }

      [data-color-scheme='dark'] .lead-popup__reaction--active {
        background-color: #1e4348 !important;
        border-color: #1e4348 !important;
        color: #fff !important;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__reaction--active {
          background-color: #1e4348 !important;
          border-color: #1e4348 !important;
          color: #fff !important;
        }
      }

      [data-color-scheme='dark'] .lead-popup__reaction:focus-visible {
        outline-color: #7effe1;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__reaction:focus-visible {
          outline-color: #7effe1;
        }
      }

      .lead-popup__reaction-count {
        font-size: 12px;
        font-weight: 600;
        color: #2e2f38 !important;
        min-width: 1.5rem;
        text-align: center;
      }

      [data-color-scheme='dark'] .lead-popup__reaction-count {
        color: #fff !important;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__reaction-count {
          color: #fff !important;
        }
      }

      .lead-popup__reaction--active .lead-popup__reaction-count {
        color: #fff !important;
      }
    `;
    document.head.appendChild(style);
  };

  injectStyles();

  // Fetch reaction counts from API
  const fetchReactions = async () => {
    try {
      const response = await fetch('/wp-json/dude/v1/popup-reactions');
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to fetch reactions:', error);
    }
    return {
      thumbs_up: 0,
      thumbs_down: 0,
      laugh: 0,
      heart: 0,
      lots_of_laughs: 0,
      fire: 0,
    };
  };

  // Add or remove reaction via API
  const modifyReaction = async (reaction, action) => {
    try {
      const response = await fetch('/wp-json/dude/v1/popup-reactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reaction, action }),
      });
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to modify reaction:', error);
    }
    return null;
  };

  // Get user's reactions from localStorage
  const getUserReactions = () => {
    const stored = localStorage.getItem('dude-popup-reactions');
    return stored ? JSON.parse(stored) : [];
  };

  // Save user's reactions to localStorage
  const saveUserReaction = (reaction) => {
    const reactions = getUserReactions();
    if (!reactions.includes(reaction)) {
      reactions.push(reaction);
      localStorage.setItem('dude-popup-reactions', JSON.stringify(reactions));
    }
  };

  // Remove user's reaction from localStorage
  const removeUserReaction = (reaction) => {
    const reactions = getUserReactions();
    const index = reactions.indexOf(reaction);
    if (index > -1) {
      reactions.splice(index, 1);
      localStorage.setItem('dude-popup-reactions', JSON.stringify(reactions));
    }
  };

  // Create popup HTML
  const createPopup = () => {
    const popup = document.createElement('div');
    popup.className = 'lead-popup';
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-labelledby', 'popup-heading');
    popup.setAttribute('aria-modal', 'true');

    popup.innerHTML = `
      <div class="lead-popup__overlay"></div>
      <div class="lead-popup__content" tabindex="-1">
        <button type="button" class="lead-popup__close" aria-label="Sulje" data-action="close-icon">
          ×
        </button>
        <h2 id="popup-heading" class="lead-popup__heading">Terve! Onpa ärsyttävä ponnahdusikkuna!</h2>
        <div class="lead-popup__body">
          <p>Nämä tällaiset ovat netin syöpää, eikö niin? Mutta nyt kun saimme huomiosi... me osataan tehdä tällaisia(kin) verkkosivuille ihan omin pikku kätösin, ilman että tarvitaan mitään jäätäviä sivustoja hidastavia WordPress-lisäosia. Tämä popup vie ihan muutaman kilotavun verran tilaa ja toimii kivasti ja nopeasti.</p>
          <p>Osataan me muutakin, on tehty pienempien yhdistysten verkkosivuista isojen korporaatioiden verkkopalveluihin.</p>
          <p><strong>Laita viestiä <a href="mailto:moro@dude.fi">moro@dude.fi</a>, <a href="https://www.dude.fi/ota-yhteytta">ota yhteyttä lomakkeella</a> tai soita Juhalle <a href="tel:+358400443221">0400 443 221</a> niin katsotaan mitä voidaan tehdä teidän sivustolle?</strong></p>
        </div>
        <div class="lead-popup__reactions">
          <p class="lead-popup__reactions-title">Mitä mieltä olet tästä popupista?</p>
          <div class="lead-popup__reactions-buttons">
            <button type="button" class="lead-popup__reaction" data-reaction="thumbs_up">
              👍 <span class="lead-popup__reaction-count" data-count="thumbs_up">0</span>
            </button>
            <button type="button" class="lead-popup__reaction" data-reaction="thumbs_down">
              👎 <span class="lead-popup__reaction-count" data-count="thumbs_down">0</span>
            </button>
            <button type="button" class="lead-popup__reaction" data-reaction="laugh">
              😄 <span class="lead-popup__reaction-count" data-count="laugh">0</span>
            </button>
            <button type="button" class="lead-popup__reaction" data-reaction="heart">
              ❤️ <span class="lead-popup__reaction-count" data-count="heart">0</span>
            </button>
            <button type="button" class="lead-popup__reaction" data-reaction="lots_of_laughs">
              😂 <span class="lead-popup__reaction-count" data-count="lots_of_laughs">0</span>
            </button>
            <button type="button" class="lead-popup__reaction" data-reaction="fire">
              🔥 <span class="lead-popup__reaction-count" data-count="fire">0</span>
            </button>
          </div>
        </div>
        <button type="button" class="lead-popup__trash" data-action="dismiss" aria-label="Roskiin tämmöset!">
          <span class="lead-popup__trash-text">Roskiin tämmöset!</span>
          🗑️
        </button>
      </div>
    `;

    return popup;
  };

  // Show popup
  const showPopup = () => {
    // Check if contact modal is currently open
    if (document.getElementById('contact-form-modal')) {
      return;
    }

    const popup = createPopup();
    document.body.appendChild(popup);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Add show class after a brief delay for animation
    setTimeout(() => {
      popup.classList.add('lead-popup--visible');
    }, 10);

    // Focus trap implementation
    const content = popup.querySelector('.lead-popup__content');
    const focusableElements = content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    // Get button references
    const closeIconBtn = popup.querySelector('[data-action="close-icon"]');
    const dismissBtn = popup.querySelector('[data-action="dismiss"]');
    const overlay = popup.querySelector('.lead-popup__overlay');

    // Focus the container to move focus into the popup (no visible focus ring)
    setTimeout(() => {
      content.focus();
    }, 100);

    // Trap focus within modal
    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    };

    content.addEventListener('keydown', handleTabKey);

    // Handle button clicks
    const closePopup = (shouldDismissForDays = false) => {
      popup.classList.remove('lead-popup--visible');
      document.body.style.overflow = '';
      content.removeEventListener('keydown', handleTabKey);

      setTimeout(() => {
        popup.remove();
      }, 300);

      if (shouldDismissForDays) {
        const now = new Date().getTime();
        const expiryTime = now + DAYS_TO_HIDE * 24 * 60 * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, expiryTime.toString());
      } else {
        // If just closing, show again after the trigger delay
        setTimeout(() => {
          if (shouldShowPopup()) {
            showPopup();
          }
        }, TRIGGER_DELAY);
      }
    };

    // Close icon button - reopens after delay
    if (closeIconBtn) {
      closeIconBtn.addEventListener('click', () => closePopup(false));
    }

    // Trash button - hides for 2 days
    if (dismissBtn) {
      dismissBtn.addEventListener('click', () => closePopup(true));
    }

    // Close on overlay click - reopens after delay
    overlay.addEventListener('click', () => closePopup(false));

    // Load and display reactions
    const updateReactionCounts = (reactions) => {
      Object.keys(reactions).forEach((key) => {
        const countEl = popup.querySelector(`[data-count="${key}"]`);
        if (countEl) {
          countEl.textContent = reactions[key];
        }
      });
    };

    // Fetch initial reaction counts
    fetchReactions().then((reactions) => {
      updateReactionCounts(reactions);
    });

    // Mark user's previous reactions as active
    const userReactions = getUserReactions();
    userReactions.forEach((reaction) => {
      const btn = popup.querySelector(`[data-reaction="${reaction}"]`);
      if (btn) {
        btn.classList.add('lead-popup__reaction--active');
      }
    });

    // Handle reaction clicks
    const reactionButtons = popup.querySelectorAll('.lead-popup__reaction');
    reactionButtons.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const reaction = btn.getAttribute('data-reaction');
        const isActive = btn.classList.contains('lead-popup__reaction--active');

        if (isActive) {
          // Remove reaction
          btn.classList.remove('lead-popup__reaction--active');
          removeUserReaction(reaction);

          // Send remove to API
          const result = await modifyReaction(reaction, 'remove');
          if (result && result.reactions) {
            updateReactionCounts(result.reactions);
          }
        } else {
          // Add reaction
          btn.classList.add('lead-popup__reaction--active');
          saveUserReaction(reaction);

          // Send add to API
          const result = await modifyReaction(reaction, 'add');
          if (result && result.reactions) {
            updateReactionCounts(result.reactions);
          }
        }
      });
    });

    // Close on Escape key - reopens after delay
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closePopup(false);
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);
  };

  // Trigger popup after delay
  popupTimeout = setTimeout(() => {
    showPopup();
  }, TRIGGER_DELAY);
};

export default initLeadPopup;
