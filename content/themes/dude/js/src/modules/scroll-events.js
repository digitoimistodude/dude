/* eslint-disable no-plusplus, func-names */
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-04-23 17:23:01
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-06-15 15:50:18
 */
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;

  // Get all radial-gradient elements
  const backgroundElement = document.getElementsByClassName(
    'has-radial-gradient'
  );

  if (backgroundElement.length > 0) {
    if (scrollPosition > 200) {
      document.body.classList.remove('has-dark-bg');
      document.body.classList.add('has-light-bg');

      // Loop through elements
      for (let i = 0; i < backgroundElement.length; i++) {
        backgroundElement[i].classList.remove('radial-gradient');
        backgroundElement[i].style.removeProperty('background');
      }
    } else {
      document.body.classList.add('has-dark-bg');
      document.body.classList.remove('has-light-bg');

      // Loop through elements
      for (let i = 0; i < backgroundElement.length; i++) {
        backgroundElement[i].classList.add('radial-gradient');
      }
    }
  }
});

// Fix scroll position on refresh
document.addEventListener('DOMContentLoaded', () => {
  const scrollpos = localStorage.getItem('scrollpos');
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function () {
  localStorage.setItem('scrollpos', window.scrollY);
};
