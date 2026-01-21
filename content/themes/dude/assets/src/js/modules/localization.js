export default function getLocalization(stringKey) {
  if (
    typeof window.dude_screenReaderText === 'undefined'
    || typeof window.dude_screenReaderText[stringKey] === 'undefined'
  ) {
    // eslint-disable-next-line no-console
    console.error(`Missing translation for ${stringKey}`);
    return '';
  }
  return window.dude_screenReaderText[stringKey];
}
