/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-12-31 00:27:10
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2024-02-19 13:58:29
 */
// Import required modules
import addMultipleEventListeners from './add-multiple-event-listeners';

// Accessible keyboard navigation for dropdown menus
function a11yDropdownMenuKeyboardNavigationClick(items, focusableElements) {
  focusableElements.forEach((item) => {
    item.addEventListener('keyup', (e) => {
      // Get this item
      const thisElement = e.target;

      // Get this menu-item
      // eslint-disable-next-line no-unused-vars
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

              // Change toggle button aria-label
              // eslint-disable-next-line camelcase, no-undef
              previousItemDropdownToggle.setAttribute('aria-label', `${dude_screenReaderText.expand_for} ${previousItemDropdownToggle.innerText}`);

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

            // Change toggle button aria-label
            // eslint-disable-next-line camelcase, no-undef
            previousItemDropdownToggle.setAttribute('aria-label', `${dude_screenReaderText.expand_for} ${previousItemDropdownToggle.innerText}`);

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

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${dude_screenReaderText.collapse_for} ${linkLabel}`);
        } else {
          // Set aria-expanded to false
          thisElement.setAttribute('aria-expanded', 'false');

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${dude_screenReaderText.expand_for} ${linkLabel}`);
        }

        // Toggle the dropdown
        if (thisDropdown && !thisDropdown.classList.contains('toggled-on')) {
          // Add toggled-on class to this dropdown
          thisDropdown.classList.add('toggled-on');
        } else {
          // Remove toggled-on class from this dropdown
          // eslint-disable-next-line no-lonely-if
          if (thisDropdown) {
            thisDropdown.classList.remove('toggled-on');
          }
        }
      }

      // Close navigation on Escape
      if (e.key === 'Escape' || e.keyCode === 27) {
        // Close mobile nav if no sub-menu is open
        if (thisElement.parentNode.parentNode.id === 'main-menu' && !thisElement.parentNode.classList.contains('toggled-on')) {
          document.body.classList.remove('js-nav-active');

          // Move focus back to nav-toggle
          document.getElementById('nav-toggle').focus();
        }

        // Remove toggled-on classes from this dropdown
        firstDropdown.classList.remove('toggled-on');

        // Set aria expanded attribute to false
        dropdownToggleButton.setAttribute('aria-expanded', 'false');

        // Remove toggled-on
        dropdownToggleButton.classList.remove('toggled-on');

        // Get the link label of dropdown link
        const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

        // Set aria label attribute
        // eslint-disable-next-line camelcase, no-undef
        dropdownToggleButton.setAttribute('aria-label', `${dude_screenReaderText.expand_for} ${linkLabel}`);

        // If we're on button, add aria-expanded to false
        if (thisElement.classList.contains('dropdown-toggle')) {
          thisElement.setAttribute('aria-expanded', 'false');

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${dude_screenReaderText.expand_for} ${linkLabel}`);
        }

        // Move focus back to previous .dropdown-toggle, but only if we're not on main level
        if (thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Delay toggling for NVDA for 100 ms
          setTimeout(() => {
            dropdownToggleButton.focus();
          }, 100);
        }
      }

      // If no arrow keys used, do not continue
      if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
        return;
      }

      // Arrow keys
      switch (e.code) {
      // ArrowUp
      case 'ArrowUp':

        // Stop propagation
        e.stopPropagation();

        // Stop scrolling
        e.preventDefault();

        // If we're on the sub-menu, move up
        if (thisElement.parentNode.parentNode.previousElementSibling && thisElement.parentNode.parentNode.previousElementSibling.classList.contains('dropdown-toggle')) {
          // Focus to the previous link
          thisElement.parentNode.parentNode.previousElementSibling.focus();
        }

        // If this is a .dropdown-toggle button and aria-expanded is true, close the dropdown
        if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true') {
          // Remove toggled-on class from this dropdown
          thisDropdown.classList.remove('toggled-on');
          thisElement.classList.remove('toggled-on');

          // Set aria-expanded attribute to false
          thisElement.setAttribute('aria-expanded', 'false');

          // Get the link label of .dropdown link
          const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${dude_screenReaderText.expand_for} ${linkLabel}`);

          // Move focus back to previous .dropdown-toggle
          dropdownToggleButton.focus();
        }

        // If this is a correct element, focus to the previous link
        if (thisElement.tagName === 'A' || thisElement.tagName === 'BUTTON') {
          // If there is no previous items, bail
          if (!thisElement.parentNode.previousElementSibling) {
            return;
          }

          // Get the previous link
          const previousLink = thisElement.parentNode.previousElementSibling.querySelector('a');

          // Get .dropdown-toggle element
          const previousToggle = thisElement.parentNode.previousElementSibling.querySelector('.dropdown-toggle');

          // If previous element is .dropdown-toggle element, focus to it
          if (previousToggle && !thisElement.querySelector('.dropdown-toggle')) {
            previousToggle.focus();
          } else {
            // If previous element is a link, focus to it
            previousLink.focus();
          }
        }

        break;

      // ArrowDown
      case 'ArrowDown':
        // Stop propagation
        e.stopPropagation();

        // Stop scrolling
        e.preventDefault();

        // If we're on the sub-menu, move down
        if (thisElement.parentNode.parentNode.nextElementSibling && thisElement.parentNode.parentNode.nextElementSibling.classList.contains('dropdown-toggle')) {
          // Focus to the next link
          thisElement.parentNode.parentNode.nextElementSibling.focus();
        }

        // If this is a .dropdown-toggle button and aria-expanded is true, move down
        if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true') {
          // Focus to the next link
          thisElement.parentNode.querySelector('.sub-menu').querySelector('li:first-child').querySelector('a').focus();
        }

        // If this is a .dropdown-toggle button and aria-expanded is false, open sub-menu
        // (if we are not inside sub-menu)
        if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'false' && !thisElement.parentNode.parentNode.classList.contains('sub-menu')) {
          // Open sub-menu
          thisElement.click();

          // Focus to the next link under sub-menu
          thisElement.parentNode.querySelector('.sub-menu').querySelector('li:first-child').querySelector('a').focus();

          // Don't do anything else
          return;
        }

        // If we are in fact in sub menu, move to next link
        if (thisElement.parentNode.parentNode.classList.contains('sub-menu')) {
          // Focus to the next link or .dropdown-toggle
          // Generally focus the next link
          if (thisElement.parentNode.nextElementSibling.querySelector(':scope > a')) {
            thisElement.parentNode.nextElementSibling.querySelector(':scope > a').focus();
          } else {
            // If there is no next link, focus to the next .dropdown-toggle
            thisElement.parentNode.nextElementSibling.querySelector('.dropdown-toggle').focus();
          }
        }

        // If this is a correct element, focus to the next link
        if ((thisElement.tagName === 'A' || thisElement.tagName === 'BUTTON') && !thisElement.classList.contains('dropdown-toggle')) {
          // If there is no next items, bail
          if (!thisElement.parentNode.nextElementSibling) {
            return;
          }

          // Get the next link
          const nextLink = thisElement.parentNode.nextElementSibling.querySelector('a');

          // Get .dropdown-toggle element
          let nextToggle = thisElement.parentNode.nextElementSibling.querySelector('.dropdown-toggle');

          // If this has class .dropdown-item, jump to the next .dropdown-toggle
          if (thisElement.classList.contains('dropdown-item')) {
          // If there is a toggle
            if (thisElement.nextElementSibling) {
            // Get the dropdown-toggle element
              nextToggle = thisElement.nextElementSibling;

              // If next element is .dropdown-toggle element, focus to it
              if (nextToggle) {
                nextToggle.focus();
              }
            }
          }

          // If next element is .dropdown-toggle element, focus to it
          if (nextToggle && !thisElement.querySelector('.dropdown-toggle')) {
            nextToggle.focus();
          } else {
            // If next element is a link, focus to it
            nextLink.focus();
          }
        }

        break;

        // ArrowLeft
      case 'ArrowLeft':

        // Stop propagation
        e.stopPropagation();

        // Stop scrolling
        e.preventDefault();

        // If we are on the first link, move to the dropdown-toggle and close menu
        if (thisElement.parentNode.previousElementSibling === null && thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Focus to the previous link
          thisElement.parentNode.parentNode.parentNode.querySelector('.dropdown-toggle').focus();

          // Close the dropdown
          thisElement.parentNode.parentNode.parentNode.querySelector('.dropdown-toggle').click();

          // Don't do anything else
          return;
        }

        // If this is a .dropdown-toggle button and aria-expanded is true, move left
        if (thisElement.parentNode.previousElementSibling && thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true' && thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Focus to the previous link
          thisElement.parentNode.previousElementSibling.querySelector('a').focus();
        }

        // If this is a .dropdown-toggle button and aria-expanded is false, close the dropdown
        if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'false' && thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Remove toggled-on class from this dropdown
          thisDropdown.classList.remove('toggled-on');

          // Set aria-expanded attribute to false
          thisElement.setAttribute('aria-expanded', 'false');

          // Get the link label of .dropdown link
          const linkLabel = thisElement.parentNode.querySelector('.dropdown-item').innerText;

          // Set aria-label of the dropdown button
          // eslint-disable-next-line camelcase, no-undef
          thisElement.setAttribute('aria-label', `${dude_screenReaderText.expand_for} ${linkLabel}`);

          // Move focus back to previous .dropdown-toggle
          dropdownToggleButton.focus();
        }

        // If this is a correct element, focus to the previous link
        if (thisElement.tagName === 'A' || thisElement.tagName === 'BUTTON') {
          // If this is a .dropdown-toggle button and aria-expanded is false,
          // move to the link directly before it
          if (thisElement.previousElementSibling && thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'false') {
            // Focus to the previous link
            thisElement.previousElementSibling.focus();

            // Don't do anything else
            return;
          }

          // If there is no previous items, bail
          if (!thisElement.parentNode.previousElementSibling) {
            return;
          }

          // Get the previous link
          const previousLink = thisElement.parentNode.previousElementSibling.querySelector('a');

          // Get .dropdown-toggle element
          const previousToggle = thisElement.parentNode.previousElementSibling.querySelector('.dropdown-toggle');

          // If previous element is .dropdown-toggle element, focus to it
          if (previousToggle) {
            previousToggle.focus();
          } else {
            // If previous element is a link, focus to it
            previousLink.focus();
          }
        }

        break;

        // ArrowRight
      case 'ArrowRight':

        // Stop propagation
        e.stopPropagation();

        // Stop scrolling
        e.preventDefault();

        // If this is a .dropdown-toggle button and aria-expanded is true, move right
        if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true' && thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Focus to the next link
          thisElement.parentNode.querySelector('.sub-menu').querySelector('li:first-child').querySelector('a').focus();
        }

        // If this has class .dropdown-item, jump to the next .dropdown-toggle
        if (thisElement.nextElementSibling) {
          thisElement.nextElementSibling.focus();

          // Disable other actions if this is a .dropdown-item
          if (thisElement.classList.contains('dropdown-item')) {
            return;
          }
        }

        // If this is a .dropdown-toggle button and aria-expanded is false, open sub-menu
        if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'false' && thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Open sub-menu
          thisElement.click();

          // Do nothing else
          return;
        }

        // If this is a dropdown-toggle button and aria-expanded is true, move right
        if (thisElement.classList.contains('dropdown-toggle') && thisElement.getAttribute('aria-expanded') === 'true' && thisElement.parentNode.parentNode.id !== 'main-menu') {
          // Focus to the next link
          thisElement.parentNode.querySelector('.sub-menu').querySelector('li:first-child').querySelector('a').focus();

          // Don't do anything else
          return;
        }

        // If this is a correct element, focus to the previous link
        if (thisElement.tagName === 'A' || thisElement.tagName === 'BUTTON') {
          // If there is no next items, bail
          if (!thisElement.parentNode.nextElementSibling) {
            return;
          }

          // Get the next link
          const nextLink = thisElement.parentNode.nextElementSibling.querySelector('a');

          // Get .dropdown-toggle element
          const nextToggle = thisElement.parentNode.nextElementSibling.querySelector('.dropdown-toggle');

          // If next element is .dropdown-toggle element, focus to it
          if (nextToggle) {
            nextToggle.focus();
          } else {
            // If next element is a link, focus to it
            nextLink.focus();
          }
        }

        break;

      default:
        break;
      }
    });
  });
}

export default a11yDropdownMenuKeyboardNavigationClick;
