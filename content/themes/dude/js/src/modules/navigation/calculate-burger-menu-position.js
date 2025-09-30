function calculateBurgerMenuPosition() {
  // If nav-toggle, site-header or main-menu not found, bail
  if (!document.getElementById('nav-toggle') || !document.querySelector('.site-header')) {
    console.log('Warning: No nav-toggle or site-header found.');
    return;
  }

  // Set viewport
  let viewportWidth = window.innerWidth;

  // Reinit for resize function
  viewportWidth = viewportWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Get the height of .site-header and #nav-toggle
  // Calculate the top position of the toggle to be exactly in the center vertically
  const siteHeaderHeight = document.querySelector('.site-header').offsetHeight;
  const navToggleHeight = document.getElementById('nav-toggle').offsetHeight;

  // Set the top position of the toggle
  document.getElementById('nav-toggle').style.top = `${(siteHeaderHeight - navToggleHeight) / 2}px`;
}

export default calculateBurgerMenuPosition;