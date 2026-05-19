function convertDropdownMenuItems(items) {
  items.forEach((li) => {
  // Get dropdown toggle button
    const dropdownToggle = li.querySelector('.dropdown-toggle');

    // If no dropdown toggle, skip this item
    if (!dropdownToggle) {
      return;
    }

    // Set tabindex -1 on all submenu links to prevent tab focus when closed
    const subMenuLinks = li.querySelectorAll('.sub-menu a, .sub-menu button');
    subMenuLinks.forEach(link => {
      link.setAttribute('tabindex', '-1');
    });

    // Get dropdown menu item data
    const menuItemSpan = li.querySelector('a > span');
    const menuItemLinkElement = li.querySelector('a');

    // If no span or link element, skip this item
    if (!menuItemSpan || !menuItemLinkElement) {
      return;
    }

    const menuItemTitle = menuItemSpan.innerHTML;
    const menuItemLink = menuItemLinkElement.href;

    // Remove dropdown menu item link
    menuItemLinkElement.remove();

    // Add dropdown menu item title to dropdown toggle button
    dropdownToggle.innerHTML = menuItemTitle;

    // Disabled automatic main link creation
    // This was creating duplicate links in the dropdown menu
    /*
    // Create new nav element
    const navElement = document.createElement('li');
    navElement.classList.add('menu-item');

    // Add dropdown menu item data to nav element
    // Create elements
    const navElementLink = document.createElement('a');
    const navElementLinkSpan = document.createElement('span');

    // Add data to elements
    // Span
    navElementLinkSpan.innerHTML = menuItemTitle;
    navElementLinkSpan.setAttribute('itemprop', 'name');
    // Link
    navElementLink.setAttribute('itemprop', 'url');
    navElementLink.href = menuItemLink;
    navElementLink.classList.add('dropdown-item');

    // Append elements
    navElementLink.appendChild(navElementLinkSpan);
    navElement.appendChild(navElementLink);

    // Get the sub menu first child and add the new nav element before it
    const subMenuFirstChild = li.querySelector('.sub-menu > li');
    const subMenu = li.querySelector('.sub-menu');

    // If no submenu, skip the insertion
    if (!subMenu) {
      return;
    }

    subMenu.insertBefore(navElement, subMenuFirstChild);
    */
  });
}

export default convertDropdownMenuItems;