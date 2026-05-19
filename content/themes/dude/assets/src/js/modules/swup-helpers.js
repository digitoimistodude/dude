import MoveTo from 'moveto';

const initSwupHelpers = () => {
  // Always move scroll position to up when clicking a link
  const moveToSwup = new MoveTo({
    tolerance: 0,
    duration: 0,
    easing: 'easeOutQuart',
    container: window,
  });

  const target = document.getElementById('page');
  moveToSwup.move(target);
};

export default initSwupHelpers;
