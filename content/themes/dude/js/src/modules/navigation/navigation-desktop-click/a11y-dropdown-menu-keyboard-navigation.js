// Import required modules
import addMultipleEventListeners from '../add-multiple-event-listeners';

// Accessible keyboard navigation for dropdown menus
function a11yDropdownMenuKeyboardNavigationClick(focusableElements) {
  focusableElements.forEach((item) => {
    item.addEventListener('keyup', (e) => {
      // Get this item
      const thisElement = e.target;

      // Get this menu-item
      const thisMenuItem = thisElement.parentNode;

      // Close previous dropdown if this parent contains id main-menu
      if (thisElement.parentNode.parentNode.id === 'main-menu' || (thisElement.classList.contains('button-nav') && thisElement.parentNode.parentNode.id === 'main-menu')) {
        // If we have previous item
        if (thisElement.parentNode.previousElementSibling) {
          // Get the previous item
          const previousItem = thisElement.parentNode.previousElementSibling;
          // Get main level sub-menu
          const mainLevelSubMenu = previousItem.querySelector('.sub-menu');

          // If sub-menu found, close nested sub-menus first
          if (mainLevelSubMenu && mainLevelSubMenu.querySelectorAll('.menu-item-has-children')) {
            mainLevelSubMenu.querySelectorAll('.menu-item-has-children').forEach((subMenu) => {
              // Get the previous item's dropdown
              const previousItemDropdownToggle = subMenu.querySelector('.dropdown-toggle');
              const previousItemDropdown = subMenu.querySelector('.sub-menu');

              // Remove toggled-on class from previous item button
              previousItemDropdownToggle.classList.remove('toggled-on');

              // Remove toggled-on class from previous sibling
              previousItemDropdown.classList.remove('toggled-on');

              // Change toggle button aria-expanded
              previousItemDropdownToggle.setAttribute('aria-expanded', 'false');
            });
          }

          // Close main level sub-menu
          const previousItemDropdownToggle = previousItem.querySelector('.dropdown-toggle');
          const previousItemDropdown = previousItem.querySelector('.sub-menu');

          if (previousItemDropdownToggle && previousItemDropdown) {
            // Remove toggled-on class from previous item button
            previousItemDropdownToggle.classList.remove('toggled-on');

            // Remove toggled-on class from previous sibling
            previousItemDropdown.classList.remove('toggled-on');

            // Change toggle button aria-expanded
            previousItemDropdownToggle.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });

    // NVDA supported keyboard navigation (NVDA and mobile need click event to work)
    addMultipleEventListeners(item, ['click', 'keydown', 'keypress'], (e) => {
      // Get this link or button
      const thisElement = e.target;

      // Define the elements of this dropdown
      const firstDropdown = thisElement.parentNode.parentNode.parentNode.querySelector('.sub-menu');
      const thisDropdown = thisElement.nextElementSibling;
      const dropdownToggleButton = thisElement.parentNode.parentNode.parentNode.querySelector('.dropdown-toggle');

      // Open navigation on Enter, e.type click is for NVDA
      if (e.key === 'Enter' || e.type === 'click') {
        // If this item is a hyperlink, do nothing. We want to use Enter only with buttons
        if (thisElement.tagName === 'A') {
          return;
        }

        // Get the text of button
        const linkLabel = thisElement.innerText;

        // Toggle toggled-on class
        thisElement.classList.toggle('toggled-on');

        // If aria-expanded is false, set it to true
        if (thisElement.getAttribute('aria-expanded') === 'false') {
          // Set aria-expanded to true
          thisElement.setAttribute('aria-expanded', 'true');
        } else {
          // Set aria-expanded to false
          thisElement.setAttribute('aria-expanded', 'false');
        }

        // Toggle the dropdown
        if (thisDropdown && !thisDropdown.classList.contains('toggled-on')) {
          // Add toggled-on class to this dropdown
          thisDropdown.classList.add('toggled-on');
        } else {
          // Remove toggled-on class from this dropdown
          if (thisDropdown) {
            thisDropdown.classList.remove('toggled-on');
          }
        }
      }

      // Close navigation on Escape
      if (e.key === 'Escape') {
        // Close mobile nav if no sub-menu is open
        if (thisElement.parentNode.parentNode.id === 'main-menu' && !thisElement.parentNode.classList.contains('toggled-on')) {
          document.body.classList.remove('js-nav-active');

          // Move focus back to nav-toggle
          const navToggle = document.getElementById('nav-toggle');
          if (navToggle) {
            navToggle.focus();
          }
        }

        // If we're on main level and nav item is not open, do nothing
        if (thisElement.parentNode.parentNode.id === 'main-menu' && !thisElement.parentNode.classList.contains('toggled-on')) {
          return;
        }

        // Remove toggled-on classes from this dropdown
        if (firstDropdown) {
          firstDropdown.classList.remove('toggled-on');
        }

        // Set aria expanded attribute to false
        if (dropdownToggleButton) {
          dropdownToggleButton.setAttribute('aria-expanded', 'false');

          // Remove toggled-on
          dropdownToggleButton.classList.remove('toggled-on');
        }

        // If we're on button, add aria-expanded to false
        if (thisElement.classList.contains('dropdown-toggle')) {
          thisElement.setAttribute('aria-expanded', 'false');
        }

        // Move focus back to previous .dropdown-toggle, but only if we're not on main level
        if (thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Delay toggling for NVDA for 100 ms
          setTimeout(() => {
            if (dropdownToggleButton) {
              dropdownToggleButton.focus();
            }
          }, 100);
        }
      }
    });
  });
}

export default a11yDropdownMenuKeyboardNavigationClick;