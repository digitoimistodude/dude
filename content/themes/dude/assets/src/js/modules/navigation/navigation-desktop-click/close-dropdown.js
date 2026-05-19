function closeDropdown(menuItemHasChildren) {
  const dropdownButton = menuItemHasChildren.querySelector('.dropdown-toggle');
  const subMenu = menuItemHasChildren.querySelector('.sub-menu');

  if (!dropdownButton) {
    return;
  }

  dropdownButton.setAttribute('aria-expanded', 'false');
  dropdownButton.classList.remove('toggled-on');

  if (subMenu) {
    subMenu.classList.remove('toggled-on');
  }
}

export default closeDropdown;