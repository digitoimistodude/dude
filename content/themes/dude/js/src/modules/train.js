/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-06-27 09:11:28
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-13 13:55:03
 */
/* eslint-disable max-len, no-plusplus */
function isTouchDevice() {
  // eslint-disable-next-line no-mixed-operators, no-undef
  return (
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)) === true
  );
}

const initTrain = () => {
  // Use grab/drag to scroll only on desktop
  if (isTouchDevice() === false) {
    // Drag to scroll
    const trainListElement = document.getElementById('list');

    // If ID is not found, stop script
    if (!trainListElement) {
      return;
    }

    trainListElement.style.cursor = 'grab';

    let pos = {
      top: 0,
      left: 0,
      x: 0,
      y: 0,
    };

    // eslint-disable-next-line func-names
    const mouseDownHandler = function (e) {
      trainListElement.style.cursor = 'grabbing';
      trainListElement.style.userSelect = 'none';

      // Stop scrolling
      // eslint-disable-next-line no-use-before-define
      pauseScrolling();

      pos = {
        left: trainListElement.scrollLeft,
        top: trainListElement.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };

      // eslint-disable-next-line no-use-before-define
      document.addEventListener('mousemove', mouseMoveHandler);
      // eslint-disable-next-line no-use-before-define
      document.addEventListener('mouseup', mouseUpHandler);
    };

    // eslint-disable-next-line func-names
    const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      trainListElement.scrollTop = pos.top - dy;
      trainListElement.scrollLeft = pos.left - dx;
    };

    // eslint-disable-next-line func-names
    const mouseUpHandler = function () {
      trainListElement.style.cursor = 'grab';
      trainListElement.style.removeProperty('user-select');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    trainListElement.addEventListener('mousedown', mouseDownHandler);
  }

  // Get scrollable element
  const listElem = document.getElementById('list');

  // Scroll naturally
  // eslint-disable-next-line no-inner-declarations
  function animationLoop() {
    // The part that keeps it all going
    listElem.scrollBy({
      left: 1,
    });
  }

  // Kick off for the animation function
  let scrollingInt = null;

  // eslint-disable-next-line no-use-before-define
  startScrolling();

  function startScrolling() {
    if (!scrollingInt) {
      scrollingInt = window.setInterval(animationLoop, 15);
    }
  }

  function pauseScrolling() {
    if (scrollingInt) {
      clearInterval(scrollingInt);
      scrollingInt = null;

      setTimeout(startScrolling, 3000);
    }
  }

  // Clear interval on touch event
  listElem.addEventListener('touchstart', pauseScrolling, { passive: true });
};

export default initTrain;
