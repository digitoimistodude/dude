/* eslint-disable no-plusplus */
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-04-23 16:13:56
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-06-15 16:09:52
 */
// Gradient animation on mouse move (hero)
document.addEventListener('mousemove', (event) => {
  const mouseXpercentage = Math.round((event.pageX / window.innerWidth) * 100);
  const mouseYpercentage = Math.round((event.pageY / window.innerHeight) * 100);

  // Get all radial-gradient elements
  const backgroundElement = document.getElementsByClassName(
    'radial-gradient-absolute'
  );

  if (backgroundElement.length > 0) {
    // Loop through elements
    for (let i = 0; i < backgroundElement.length; i++) {
      // Get CSS vars
      const colorGradientStart = getComputedStyle(
        backgroundElement[i]
      ).getPropertyValue('--color-gradient-start');
      const colorGradientEnd = getComputedStyle(
        backgroundElement[i]
      ).getPropertyValue('--color-gradient-end');

      // Set colors on hover
      backgroundElement[i].style.backgroundImage =
        `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, ${colorGradientStart}, ${colorGradientEnd})`;
    }
  }
});
