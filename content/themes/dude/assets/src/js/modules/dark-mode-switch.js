/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-09-13 13:10:11
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-06 17:28:46
 */
/* eslint-disable no-new, max-len, no-new-func, no-shadow, func-names, no-underscore-dangle, no-unused-vars */
const supportsES6 = (function () {
  try {
    new Function('(a=0)=>a');
    return true;
  } catch (err) {
    // console.log('No ES6');
    return false;
  }
}());

const supportsLocalStorage = (function () {
  try {
    const m = `${new Date().valueOf()}`;
    localStorage.setItem(m, m);
    localStorage.removeItem(m);
    return true;
  } catch (e) {
    // console.log('localStorage unavailable');
    return false;
  }
}());

const initdarkModeToggle = () => {
  // Define toggle
  const darkmodeToggle = document.querySelector('.menu-item-dark-mode-switch');
  const menuItems = document.querySelector('.menu-items');

  function darkmodeToggleOver() {
    menuItems.classList.add('js-keep-opacity');
  }

  function darkmodeToggleOut() {
    menuItems.classList.remove('js-keep-opacity');
  }

  // Keep opacity of the navigation when hovering the toggle button
  darkmodeToggle.addEventListener('mouseover', darkmodeToggleOver, false);
  darkmodeToggle.addEventListener('mouseout', darkmodeToggleOut, false);

  const darkLightModeToggleButton = (function (
    window,
    document,
    supportsES6,
    supportsLocalStorage,
  ) {
    if (!supportsES6) return;

    const name = 'mode';
    const btnClass = `toggle-mode-button-${name}`;
    const svgClass = `toggle-mode-button-actions-svg-${name}`;
    const [light, dark] = ['light', 'dark'];
    const { body } = document;
    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');

    let mode;

    const _setAttr = (obj, attr, value) => obj.setAttribute(attr, value);
    const _modeText = (bool) => (bool ? light : dark);

    const _clicked = (_) => {
      // Don't allow switching if petrol gradient is active (must stay dark)
      if (body.classList.contains('has-petrol-gradient-background')) {
        return;
      }

      // Note: aria-clicked state is purposefully not linked to the mode setting.
      // Initially: The mode may be light or dark, but aria-clicked state is always false.
      _setAttr(
        btn,
        'aria-clicked',
        btn.getAttribute('aria-clicked') === 'false',
      );

      mode = mode === false;

      // Note: color-scheme cannot be set with CSS variables
      // This setting is ignored where unsupported
      body.style.colorScheme = _modeText(mode);

      _setAttr(body, 'data-color-scheme', _modeText(mode));

      if (_modeText === 'dark') {
        _setAttr(btn, 'aria-label', 'Vaihda vaaleaan teemaan');
      } else {
        _setAttr(btn, 'aria-label', 'Vaihda tummaan teemaan');
      }
      // eslint-disable-next-line no-unused-expressions
      supportsLocalStorage && localStorage.setItem('mode', _modeText(mode));
    };

    // Utilising symbol defs in the HTML
    // [Optionally embed the full SVG here]
    const getToggleMarkup = (_) => `
  <span class="toggle-slot" class="${svgClass}" aria-hidden="true">
  <span class="sun-icon-wrapper">
    <svg focusable="false" xlink:href="#icon-${name}-${dark}" class="sun-icon ${name}-${light}" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
  </span>
  <span class="toggle-button"></span>
  <span class="moon-icon-wrapper">
    <svg focusable="false" xlink:href="#icon-${name}-${light}" class="moon-icon ${name}-${dark}" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
  </span>
  </span>`;

    const _getMode = (_) => {
      // Get the OS mode setting
      mode = !(
        window.matchMedia
        && window.matchMedia('(prefers-color-scheme: dark)').matches
      );

      // Override OS mode with the locally stored value.
      // Caters to state persistence across pages and visits.
      if (supportsLocalStorage && 'mode' in localStorage) {
        mode = localStorage.getItem('mode') === 'light';
      }
    };

    const _init = (_) => {
      // Force dark mode if petrol gradient background is active
      const forceDarkMode = body.classList.contains('has-petrol-gradient-background');

      _getMode();

      // Override mode if gradient is active
      if (forceDarkMode) {
        mode = false; // false = dark mode
      }

      // Note: color-scheme cannot be set with CSS variables
      // This setting is ignored where unsupported
      body.style.colorScheme = _modeText(mode);

      _setAttr(body, 'data-color-scheme', _modeText(mode));
      _setAttr(btn, 'class', btnClass);
      _setAttr(btn, 'aria-clicked', false);

      if (_modeText === 'dark') {
        _setAttr(btn, 'aria-label', 'Vaihda vaaleaan teemaan');
      } else {
        _setAttr(btn, 'aria-label', 'Vaihda tummaan teemaan');
      }

      btn.innerHTML = getToggleMarkup();
      btn.addEventListener('click', _clicked);

      // Note: Button should be added at the end of the HTML to avoid preceding an accessibility skip-to-content link.
      // Skip-to-content links should always be the first actionable asset on a web page.
      // body.appendChild(btn);
      const darkModeToggle = document.getElementById('dark-mode-toggle');
      if (darkModeToggle) {
        darkModeToggle.appendChild(btn);
      }
    };

    _init();
  }(window, document, supportsES6, supportsLocalStorage));
};

export default initdarkModeToggle;
