/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
let stylesInjected = false;
let popupTimeout = null;

// Configuration constants
const ENABLED = true; // Set to false to disable the lead popup
const POPUP_VARIANT = 'survey'; // 'classic' for original popup, 'survey' for brand survey popup
const MIN_DELAY = 10000; // 10 seconds
const MAX_DELAY = 15000; // 15 seconds
const STORAGE_KEY = 'dude-lead-popup-dismissed';
const DAYS_TO_HIDE = 14; // 2 weeks
const HOURS_TO_HIDE = 14 * 24; // 2 weeks (in hours)
const REACTION_HIDE_DAYS = 60; // 2 months

// Track if popup has been shown this session (persists across swup navigations)
let popupShownThisSession = false;

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

// Check if we're on a page where popup should be skipped
const shouldSkipPopup = () => {
  return document.body.classList.contains('page-id-7') || // Front page
         document.body.classList.contains('page-id-4487'); // Contact page
};

const initLeadPopup = () => {
  // Check if popup is enabled
  if (!ENABLED) return;

  // Remove popup if it's currently visible (page changed while popup was open)
  const existingPopup = document.getElementById('lead-popup');
  if (existingPopup) {
    existingPopup.remove();
    document.body.style.overflow = '';
  }

  // Don't show if user dismissed
  if (!shouldShowPopup()) {
    // eslint-disable-next-line no-console
    console.log('[Lead Popup] blocked: user has dismissed it');
    return;
  }

  // Don't show on excluded pages, but don't cancel the timer - it will check again when it fires
  if (shouldSkipPopup()) {
    const pageType = document.body.classList.contains('page-id-7') ? 'front page' : 'contact page';
    // eslint-disable-next-line no-console
    console.log(`[Lead Popup] on ${pageType}, popupTimeout:`, popupTimeout ? 'exists - returning' : 'null - will start timer');
    // Don't return - let the timer keep running so popup shows when user navigates to valid page
    // Only skip starting a NEW timer if one already exists
    if (popupTimeout) {
      return;
    }
  }

  // If a timer is already running, don't reset it (preserves timer across swup navigations)
  if (popupTimeout) {
    // eslint-disable-next-line no-console
    console.log('[Lead Popup] timer already running, not resetting');
    return;
  }

  // Inject styles (only once)
  const injectStyles = () => {
    if (stylesInjected) return;
    stylesInjected = true;

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

      /* Survey variant styles */
      .lead-popup--survey .lead-popup__content {
        max-width: 626px;
        overflow: hidden;
        border-radius: 10px;
        padding: 55px 50px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
        background: linear-gradient(138.4deg, #1e4348 0%, #1c1e26 62.5%);
      }

      .lead-popup--survey .lead-popup__content::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('/content/themes/dude/img/popup-bg.jpg') center / cover no-repeat;
        border-radius: 10px;
        pointer-events: none;
      }

      @media (max-width: 767px) {
        .lead-popup--survey .lead-popup__content {
          padding: 40px 30px;
        }
      }

      .lead-popup--survey .lead-popup__close {
        top: 24px;
        right: 24px;
        width: 14px;
        height: 14px;
        padding: 0;
        font-size: 14px;
        color: #fff;
        z-index: 1;
      }

      .lead-popup--survey .lead-popup__close:hover,
      .lead-popup--survey .lead-popup__close:focus {
        color: #7effe1;
        background-color: transparent;
      }

      .lead-popup--survey .lead-popup__close:focus-visible {
        outline-color: #7effe1;
        outline-offset: 4px;
        background-color: transparent;
      }

      .lead-popup--survey .lead-popup__text {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 25px;
        color: #fff;
        z-index: 1;
      }

      .lead-popup--survey .lead-popup__heading {
        margin: 0;
        padding-right: 30px;
        font-family: var(--font-heading);
        font-size: 32px;
        font-weight: 500;
        line-height: 1.4;
        letter-spacing: 0.64px;
        color: #fff;
      }

      @media (max-width: 767px) {
        .lead-popup--survey .lead-popup__heading {
          font-size: 24px;
        }
      }

      .lead-popup--survey .lead-popup__body {
        margin-bottom: 0;
        color: #fff;
      }

      .lead-popup--survey .lead-popup__body p {
        margin: 0;
        font-family: var(--font-paragraph);
        font-weight: 500;
        line-height: 1.7;
        font-size: 16px;
        color: #fff;
      }

      .lead-popup--survey .lead-popup__cta {
        position: relative;
        display: flex;
        margin-top: 40px;
        z-index: 1;
      }

      .lead-popup--survey .lead-popup__cta-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 15px 32px;
        background-color: #7effe1;
        border: none;
        border-radius: 40px;
        font-family: var(--font-heading);
        font-size: 20px;
        font-weight: 500;
        line-height: 34px;
        color: #000;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .lead-popup--survey .lead-popup__cta-button svg {
        width: 15px;
        height: 13px;
        flex-shrink: 0;
        transform: rotate(-45deg);
      }

      .lead-popup--survey .lead-popup__cta-button:hover,
      .lead-popup--survey .lead-popup__cta-button:focus {
        background-color: #7effe1;
        box-shadow: 0 0 0 3px #7effe1;
        color: #000;
      }

      .lead-popup--survey .lead-popup__cta-button:focus-visible {
        outline: 2px solid #fff;
        outline-offset: 2px;
      }

      .lead-popup--survey .lead-popup__cta-button:focus:not(:focus-visible) {
        outline: none;
      }

      @media (max-width: 767px) {
        .lead-popup--survey .lead-popup__cta-button {
          font-size: 18px;
          padding: 12px 24px;
        }
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
    popup.id = 'lead-popup';
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
        <button type="button" class="lead-popup__trash" data-action="dismiss" aria-label="Älä näytä enää">
          <span class="lead-popup__trash-text">Älä näytä enää</span>
          🗑️
        </button>
      </div>
    `;

    return popup;
  };

  // Create survey popup HTML (new brand survey variant)
  const createSurveyPopup = () => {
    const popup = document.createElement('div');
    popup.id = 'lead-popup';
    popup.className = 'lead-popup lead-popup--survey';
    popup.setAttribute('role', 'dialog');
    popup.setAttribute('aria-labelledby', 'popup-heading');
    popup.setAttribute('aria-modal', 'true');

    popup.innerHTML = `
      <div class="lead-popup__overlay"></div>
      <div class="lead-popup__content" tabindex="-1">
        <button type="button" class="lead-popup__close" aria-label="Sulje" data-action="close-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" aria-hidden="true" width="14" height="14" fill="currentColor">
            <path d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7z"/>
          </svg>
        </button>
        <div class="lead-popup__text">
          <h2 id="popup-heading" class="lead-popup__heading">Vastaa brändikyselyymme ja tue mielenterveystyötä!</h2>
          <div class="lead-popup__body">
            <p>Millaisena näet Duden tällä hetkellä? Voisiko jokin olla toisin? Onko menty metsään vai onnistuttu? Kerro meille vastaamalla kyselyyn! Lahjoitamme jokaisesta vastauksesta euron MIELI ry:lle.</p>
          </div>
        </div>
        <div class="lead-popup__cta">
          <a href="https://www.dude.fi/duden-brandikysely" class="lead-popup__cta-button no-external-link-indicator" data-action="cta" target="_blank" rel="noopener noreferrer" aria-label="Siirry kyselyyn (avautuu uuteen ikkunaan)">Siirry kyselyyn <svg width="15" height="13" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 13" aria-hidden="true"><path d="M1 5.75a.75.75 0 000 1.5v-1.5zm13.53 1.28a.75.75 0 000-1.06L9.757 1.197a.75.75 0 10-1.06 1.06L12.939 6.5l-4.242 4.243a.75.75 0 001.06 1.06L14.53 7.03zM1 7.25h13v-1.5H1v1.5z" fill="currentColor"/></svg></a>
        </div>
      </div>
    `;

    return popup;
  };

  // Show popup
  const showPopup = () => {
    // eslint-disable-next-line no-console
    console.log('[Lead Popup] showPopup() called');

    // Check if contact modal is currently open (visible)
    const contactModal = document.getElementById('contact-form-modal');
    if (contactModal && contactModal.classList.contains('contact-form-modal--visible')) {
      // eslint-disable-next-line no-console
      console.log('[Lead Popup] Contact modal is visible, aborting');
      return;
    }

    // eslint-disable-next-line no-console
    console.log('[Lead Popup] Creating popup element');
    const popup = POPUP_VARIANT === 'survey' ? createSurveyPopup() : createPopup();
    // eslint-disable-next-line no-console
    console.log('[Lead Popup] Appending popup to body');
    document.body.appendChild(popup);
    // eslint-disable-next-line no-console
    console.log('[Lead Popup] Popup appended, element:', popup);

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
    const ctaBtn = popup.querySelector('[data-action="cta"]');
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
    const closePopup = (dismissType = 'reopen') => {
      popup.classList.remove('lead-popup--visible');
      document.body.style.overflow = '';
      content.removeEventListener('keydown', handleTabKey);

      setTimeout(() => {
        popup.remove();
      }, 300);

      const now = new Date().getTime();

      if (dismissType === 'days') {
        const expiryTime = now + DAYS_TO_HIDE * 24 * 60 * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, expiryTime.toString());
        // Dev logging
        if (window.location.hostname.includes('.test') || window.location.hostname === 'localhost') {
          console.log(`Lead popup dismissed for ${DAYS_TO_HIDE} days`);
        }
      } else if (dismissType === 'hours') {
        const expiryTime = now + HOURS_TO_HIDE * 60 * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, expiryTime.toString());
        // Dev logging
        if (window.location.hostname.includes('.test') || window.location.hostname === 'localhost') {
          console.log(`Lead popup dismissed for ${HOURS_TO_HIDE} hour`);
        }
      } else {
        // If just closing via overlay/escape, show again after a new random delay
        const newDelay = Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY;
        // Dev logging
        if (window.location.hostname.includes('.test') || window.location.hostname === 'localhost') {
          console.log(`Lead popup closed, will reappear in ${(newDelay / 1000).toFixed(1)} seconds`);
        }
        popupTimeout = setTimeout(() => {
          if (shouldShowPopup() && !shouldSkipPopup()) {
            showPopup();
          }
        }, newDelay);
      }
    };

    // Close icon button - hides for 1 hour
    if (closeIconBtn) {
      closeIconBtn.addEventListener('click', () => closePopup('hours'));
    }

    // Trash button - hides for 2 days
    if (dismissBtn) {
      dismissBtn.addEventListener('click', () => closePopup('days'));
    }

    // CTA button (survey variant) - hides for 2 days when user clicks to go to survey
    if (ctaBtn) {
      ctaBtn.addEventListener('click', () => closePopup('days'));
    }

    // Close on overlay click - reopens after delay
    overlay.addEventListener('click', () => closePopup('reopen'));

    // Close popup when contact form link is clicked
    const contactFormLink = popup.querySelector('a[href*="ota-yhteytta"]');
    if (contactFormLink) {
      contactFormLink.addEventListener('click', () => {
        closePopup('days'); // Dismiss for 2 days since they're going to contact page
      });
    }

    // Load and display reactions
    const updateReactionCounts = (reactions) => {
      Object.keys(reactions).forEach((key) => {
        const countEl = popup.querySelector(`[data-count="${key}"]`);
        if (countEl) {
          countEl.textContent = reactions[key];
        }
      });
    };

    // Classic variant: Fetch initial reaction counts
    if (POPUP_VARIANT === 'classic') {
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

          // Hide popup for 2 months after any reaction
          const now = new Date().getTime();
          const expiryTime = now + REACTION_HIDE_DAYS * 24 * 60 * 60 * 1000;
          localStorage.setItem(STORAGE_KEY, expiryTime.toString());

          // Close popup after reaction
          setTimeout(() => {
            closePopup('days');
          }, 500);
        }
      });
    });
    }

    // Close on Escape key - reopens after delay
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closePopup(false);
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);
  };

  // Inject styles
  injectStyles();

  // Trigger popup after random delay
  const delay = Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY;

  // Dev logging
  if (window.location.hostname.includes('.test') || window.location.hostname === 'localhost') {
    console.log(`Lead popup will trigger in ${(delay / 1000).toFixed(1)} seconds`);
  }

  // eslint-disable-next-line no-console
  console.log(`[Lead Popup] Starting timer for ${(delay / 1000).toFixed(1)} seconds`);

  popupTimeout = setTimeout(() => {
    // eslint-disable-next-line no-console
    console.log('[Lead Popup] Timer fired!');
    // Clear the timeout reference since it's now firing
    popupTimeout = null;

    // Check conditions again at the moment of showing
    if (!shouldShowPopup()) {
      // eslint-disable-next-line no-console
      console.log('[Lead Popup] Timer fired but popup was dismissed in the meantime');
      return;
    }

    if (shouldSkipPopup()) {
      // On excluded page, set a new timer to check again soon
      // eslint-disable-next-line no-console
      console.log('[Lead Popup] Timer fired on excluded page, will retry in 5 seconds');
      popupTimeout = setTimeout(() => {
        popupTimeout = null;
        if (shouldShowPopup() && !shouldSkipPopup()) {
          // eslint-disable-next-line no-console
          console.log('[Lead Popup] Retry timer fired, showing popup');
          showPopup();
        }
      }, 5000);
      return;
    }

    // eslint-disable-next-line no-console
    console.log('[Lead Popup] Showing popup now');
    showPopup();
  }, delay);
};

export default initLeadPopup;
