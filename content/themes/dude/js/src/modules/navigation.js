/**
 * Navigation.js module
 * The original, accessible navigation module for Air-light
 */

// Import functions needed for the navigation module
import addMultipleEventListeners from './navigation/add-multiple-event-listeners';
import calculateBurgerMenuPosition from './navigation/calculate-burger-menu-position';
import a11yFocusTrap from './navigation/a11y-focus-trap';
import calculateDropdownToggleHeight from './navigation/calculate-dropdown-toggle-height';
import checkForSubmenuOverflow from './navigation/check-for-submenu-overflow';
import dropdownMenuOnHover from './navigation/dropdown-menu-on-hover';
import a11yAddDropdownToggleLabels from './navigation/a11y-add-dropdown-toggle-labels';
import a11yDropdownMenuKeyboardNavigation from './navigation/a11y-dropdown-menu-keyboard-navigation';

// Navigation desktop click functions
import convertDropdownMenuItems from './navigation/convert-dropdown-menu-items';
import closeSubMenuHandler from './navigation/close-sub-menu-handler';
import a11yAddDropdownToggleLabelsClick from './navigation/a11y-add-dropdown-toggle-labels-click';
import a11yDropdownMenuKeyboardNavigationClick from './navigation/a11y-dropdown-menu-keyboard-navigation-click';

const navDesktop = () => {
  const navPrimary = document.querySelector('.nav-primary');

  // If .nav-primary doesn't exist, don't continue
  if (!navPrimary) {
    return;
  }

  // Define globals
  const menuItems = navPrimary.querySelectorAll('.menu-item');

  // Define focusable elements on sub-menu (.menu-item a, .dropdown button)
  const focusableElementsforDropdown = document.querySelectorAll(
    '.menu-item a, .dropdown button, .button-nav',
  );

  // If main-menu is not found, bail
  if (!document.getElementById('main-menu')) {
    return;
  }

  // Dropdown menus
  a11yAddDropdownToggleLabels(menuItems);
  a11yDropdownMenuKeyboardNavigation(menuItems, focusableElementsforDropdown);

  // Dropdown on mouse hover
  dropdownMenuOnHover(menuItems);

  // Check for submenu overflow
  checkForSubmenuOverflow(menuItems);
};

const navClick = () => {
  // If main-menu is not found, bail
  if (!document.getElementById('main-menu')) {
    return;
  }
  // Search for all menu items that have submenus
  const dropdownMenuItems = document.querySelectorAll('.menu-item-has-children');

  // Convert submenus to clickable elements
  convertDropdownMenuItems(dropdownMenuItems);

  // Set tabindex -1 on hidden submenu links to prevent tab focus
  document.querySelectorAll('.js .sub-menu:not(.toggled-on) a, .js .sub-menu:not(.toggled-on) button').forEach(link => {
    link.setAttribute('tabindex', '-1');
  });

  // Define globals
  const menuItems = document.querySelectorAll('.menu-item');
  // Define focusable elements on sub-menu (.menu-item a, .dropdown button)
  const focusableElementsforDropdown = document.querySelectorAll('.menu-item a, .dropdown button, .button-nav');

  // Dropdown menus
  a11yAddDropdownToggleLabelsClick(menuItems);
  a11yDropdownMenuKeyboardNavigationClick(menuItems, focusableElementsforDropdown);

  // Handle different scenarios when menus should be closed
  closeSubMenuHandler(menuItems);
};

const navMobile = () => {
  // If burger toggle is not found, bail
  if (!document.getElementById('nav-toggle')) {
    // eslint-disable-next-line no-console
    console.log('Warning: No nav-toggle found.');

    return;
  }

  function navToggle(e) {
    // If clicked with mouse or enter key
    if (e.type === 'click' || e.keyCode === 13) {
      // Activate nav
      document.body.classList.toggle('js-nav-active');

      // Scroll to top when triggering mobile navigation
      // to ensure no gaps are between header and navigation
      // Please note, if you use sticky-nav, comment out the next line
      window.scrollTo(0, 0);

      // Toggle aria-expanded attribute, if it's false, change to true and vice versa
      if (document.getElementById('nav-toggle').getAttribute('aria-expanded') === 'false') {
        document.getElementById('nav-toggle').setAttribute('aria-expanded', 'true');
      } else {
        document.getElementById('nav-toggle').setAttribute('aria-expanded', 'false');
      }

      // Center vertically the absolute positioned mobile dropdown toggles by setting fixed height
      calculateDropdownToggleHeight();

      // Focusable elements
      const navContainer = document.getElementById('nav');
      const focusableElements = [
        ...navContainer.querySelectorAll(
          'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
        ),
      ]
        .filter((el) => !el.hasAttribute('disabled'))
        .filter((el) => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length));

      focusableElements.forEach((menuItem) => {
        menuItem.addEventListener('keydown', a11yFocusTrap);
      });
    }
  }

  // When clicking #nav-toggle, add .js-nav-active body class
  addMultipleEventListeners(
    document.getElementById('nav-toggle'),
    ['click', 'keydown', 'keypress'],
    navToggle,
  );

  // Get all dropdown-toggles
  const dropdownToggles = document.querySelectorAll('.menu-item-clickable');

  // Loop through dropdown-toggles
  dropdownToggles.forEach((dropdownToggle) => {
    // When clicking a dropdown-toggle, add .js-dropdown-active class to the parent .menu-item
    addMultipleEventListeners(
      dropdownToggle,
      ['click', 'keydown', 'keypress'],
      calculateDropdownToggleHeight,
    );
  });

  // Calculate mobile nav-toggle position
  calculateBurgerMenuPosition();
};

// Export different navigation functions
export {
  navDesktop, navClick, navMobile,
};

// Initialize navigation
const initNavigation = () => {
  navClick();
  navMobile();
};

export default initNavigation;

// Reinit some things
window.addEventListener('resize', () => {
  // Center vertically the absolute positioned burger
  calculateBurgerMenuPosition();

  // Center vertically the absolute positioned mobile dropdown toggles by setting fixed height
  calculateDropdownToggleHeight();

  // Check for submenu overflow
  checkForSubmenuOverflow(document.querySelectorAll('.menu-item'));
});