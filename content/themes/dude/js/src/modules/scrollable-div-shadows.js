/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-05-17 11:54:40
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-08 12:20:41
 */
const initScrollableDivs = () => {
  function scrolled(event, left, right) {
    const width = event.target.scrollWidth - event.target.clientWidth;
    const scroll = event.target.scrollLeft;

    if (scroll === 0) {
      left.classList.remove('visible');
    } else {
      left.classList.add('visible');
    }

    if (scroll === width) {
      right.classList.remove('visible');
    } else {
      right.classList.add('visible');
    }
  }

  // Find all scrollable elements
  const scrollableElements = document.querySelectorAll(
    '.has-horizontal-scroll'
  );

  if (typeof scrollableElements !== 'undefined') {
    scrollableElements.forEach((container) => {
      const left = container.querySelector('.fade-left');
      const right = container.querySelector('.fade-right');
      const list = container.querySelector('.horizontal-list');

      // Init right fade on load
      right.classList.add('visible');

      if (typeof list !== 'undefined') {
        list.addEventListener('scroll', (event) =>
          scrolled(event, left, right)
        );
      }
    });
  }
};

export default initScrollableDivs;
