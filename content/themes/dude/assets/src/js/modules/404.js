const init404 = () => {
  // Get 404 container
  const notFoundContainer = document.querySelectorAll('.block-error-404');

  // If container is not found, do not continue with init
  if (!notFoundContainer) {
    return;
  }

  function keyAction(e) {
    if ((e.which || e.keyCode) === 116) {
      e.preventDefault();

      // eslint-disable-next-line camelcase, no-undef
      window.location.href = dude_screenReaderText.homeurl;
    }
  }

  document.addEventListener('keydown', keyAction);
};

export default init404;
