/* eslint-disable no-param-reassign, no-unused-expressions, max-len */
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-10-06 17:02:37
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-10 15:39:25
 */

const initdarkModeFooterToggle = () => {
  const { body } = document;
  const colorMode = localStorage.getItem('data-color-scheme');

  // Force dark mode if petrol gradient background or force-dark-mode is active
  const forceDarkMode = body.classList.contains('has-petrol-gradient-background') || body.classList.contains('force-dark-mode');

  // Get toggles
  if (document.querySelector('input[name="colorModeToggle"]')) {
    document
      .querySelectorAll('input[name="colorModeToggle"]')
      .forEach((colorModeToggle) => {
        if (forceDarkMode) {
          // Force dark mode when gradient is active
          body.setAttribute('data-color-scheme', 'dark');
        } else if (colorMode !== null) {
          body.setAttribute('data-color-scheme', colorMode);
          colorModeToggle.value.includes(colorMode)
            ? (colorModeToggle.checked = true)
            : (colorModeToggle.checked = false);
          colorModeToggle.value.includes(colorMode)
            ? colorModeToggle.setAttribute('tabindex', '0')
            : colorModeToggle.setAttribute('tabindex', '-1');
        }

        // On radio button change
        colorModeToggle.addEventListener('change', (event) => {
          // Don't allow changing if gradient is active
          if (forceDarkMode) {
            body.setAttribute('data-color-scheme', 'dark');
            return;
          }

          const colorModeButtonState = event.target.value;

          // Set body attribute
          body.setAttribute('data-color-scheme', colorModeButtonState);

          // Set all other radio buttons to unchecked
          document
            .querySelectorAll('input[name="colorModeToggle"]')
            .forEach((othercolorModeToggle) => {
              othercolorModeToggle.value !== colorModeButtonState
                ? (othercolorModeToggle.checked = false)
                : (othercolorModeToggle.checked = true);
              othercolorModeToggle.value !== colorModeButtonState
                ? othercolorModeToggle.setAttribute('tabindex', '-1')
                : othercolorModeToggle.setAttribute('tabindex', '0');
            });

          // Set this radio button attributes
          event.target.setAttribute('tabindex', '0');
          event.target.checked = true;

          // Set local storage value
          localStorage.setItem('data-color-scheme', colorModeButtonState);

          // console.log(`Clicked: ${colorModeButtonState}`);
        });
      });
  }
};

export default initdarkModeFooterToggle;
