import closeSubMenu from './close-sub-menu';

function closeSubMenuHandler(items) {
  // Close open dropdowns when clicking outside of the menu
  const page = document.getElementById('page');
  page.addEventListener('click', (e) => {
    // If the click is inside the menu, bail
    if (e.target.closest('.menu-items')) {
      return;
    }

    items.forEach((li) => {
      closeSubMenu(li);
    });
  });

  // Close open dropdown when pressing escape
  items.forEach((li) => {
    li.addEventListener('keydown', (keydownMouseoverEvent) => {
      if (keydownMouseoverEvent.key === 'Escape') {
        closeSubMenu(li);
      }
    });
  });

  // Close other dropdowns when opening a new one
  items.forEach((li) => {
    // Bail if no dropdown
    if (!li.classList.contains('menu-item-has-children')) {
      return;
    }

    const dropdownToggle = li.querySelector('.menu-item-clickable');
    const sameLevelDropdowns = li.parentNode.querySelectorAll(':scope > .menu-item-has-children');

    // If no dropdown toggle found, skip this item
    if (!dropdownToggle) {
      return;
    }

    // Add event listener to dropdown toggle
    dropdownToggle.addEventListener('click', () => {
      // We want to close other dropdowns only when a new one is opened
      if (!dropdownToggle.classList.contains('toggled-on')) {
        return;
      }

      // Enable tab focus for submenu links when opened
      const subMenuLinks = li.querySelectorAll('.sub-menu a, .sub-menu button');
      subMenuLinks.forEach(link => {
        link.setAttribute('tabindex', '0');
      });

      sameLevelDropdowns.forEach((sameLevelDropdown) => {
        if (sameLevelDropdown !== li) {
          // Close all other sub level dropdowns
          sameLevelDropdown.querySelectorAll('.menu-item').forEach((subLi) => {
            closeSubMenu(subLi);
          });
          // Close other same level dropdowns
          closeSubMenu(sameLevelDropdown);
        }
      });
    });
  });
}
export default closeSubMenuHandler;