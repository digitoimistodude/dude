const init100vhMobileFix = () => {
  // Set vh variable
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export default init100vhMobileFix;

window.addEventListener('resize', init100vhMobileFix);
