/* eslint-disable max-len */
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-05-07 12:20:13
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-06 22:40:54
 */
import MoveTo from 'moveto';

const initMoveToTop = () => {
  // Always move scroll position to up when clicking a link
  const swupMoveToTop = new MoveTo({
    tolerance: 0,
    duration: 0,
    easing: 'easeOutQuart',
    container: window,
  });

  const target = document.getElementById('page');
  swupMoveToTop.move(target);
};

export default initMoveToTop;
