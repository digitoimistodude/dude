function convertDropdownMenuItems(menuItems) {
  menuItems.forEach((menuItem) => {
    // Get dropdown toggle button
    const dropdownToggle = menuItem.querySelector('.dropdown-toggle');

    if (!dropdownToggle) return;

    // Get dropdown menu item data
    const menuItemTitle = menuItem.querySelector('a > span')?.innerHTML || menuItem.querySelector('a').textContent;
    const menuItemLinkElement = menuItem.querySelector('a');

    // Remove dropdown menu item link
    menuItemLinkElement.remove();

    // Add dropdown menu item title to dropdown toggle button
    dropdownToggle.innerHTML = menuItemTitle;
  });
}

export default convertDropdownMenuItems;