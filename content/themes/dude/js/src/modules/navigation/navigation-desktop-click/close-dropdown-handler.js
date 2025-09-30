import closeDropdown from './close-dropdown';

function closeDropdownHandler(menuItems) {
  // Close open dropdowns when clicking outside of the menu
  const page = document.getElementById('page');
  page.addEventListener('click', (e) => {
    // If the click is inside the menu, bail
    if (e.target.closest('.menu-items')) {
      return;
    }

    menuItems.forEach((menuItem) => {
      closeDropdown(menuItem);
    });
  });


  // Add basic dropdown toggle functionality
  menuItems.forEach((menuItem) => {
    if (!menuItem.classList.contains('menu-item-has-children')) {
      return;
    }

    const dropdownToggle = menuItem.querySelector('.dropdown-toggle');
    if (!dropdownToggle) return;

    // Basic click toggle functionality
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();

      const subMenu = menuItem.querySelector('.sub-menu');
      const isExpanded = dropdownToggle.getAttribute('aria-expanded') === 'true';

      // Close other dropdowns first
      menuItems.forEach((otherMenuItem) => {
        if (otherMenuItem !== menuItem && otherMenuItem.classList.contains('menu-item-has-children')) {
          closeDropdown(otherMenuItem);
        }
      });

      // Toggle current dropdown
      dropdownToggle.setAttribute('aria-expanded', !isExpanded);
      dropdownToggle.classList.toggle('toggled-on', !isExpanded);

      if (subMenu) {
        subMenu.classList.toggle('toggled-on', !isExpanded);
      }
    });
  });
}

export default closeDropdownHandler;