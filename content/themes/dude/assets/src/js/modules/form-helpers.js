/* eslint-disable camelcase, no-unused-vars, no-undef, func-names, no-param-reassign */
/**
 * Toggle the "Haluan kertoa tarkemmin / vähemmän" label + open-state class on
 * the WPForms 11358 conditional-trigger checkbox.
 *
 * Reads the checkbox's own `checked` state (the browser updates that before
 * any handler runs) instead of inspecting a sibling element's class. The
 * previous approach raced WPForms's own conditional-logic JS and crashed when
 * the sibling happened to be a whitespace text node, leaving the toggle stuck.
 */
const initFormHelpers = () => {
  const formTriggers = document.querySelectorAll(
    '#wpforms-form-11358 .wpforms-conditional-trigger',
  );

  formTriggers.forEach((formTrigger) => {
    const checkbox = formTrigger.querySelector('input[type="checkbox"]');
    const label = formTrigger.querySelector('.wpforms-field-label-inline');
    const wrapper = formTrigger.closest('.wpforms-container');

    if (!checkbox || !label) {
      return;
    }

    const sync = () => {
      if (checkbox.checked) {
        label.textContent = 'Haluan kertoa vähemmän';
        if (wrapper) wrapper.classList.add('is-open');
      } else {
        label.textContent = 'Haluan kertoa tarkemmin';
        if (wrapper) wrapper.classList.remove('is-open');
      }
    };

    checkbox.addEventListener('change', sync);
    sync(); // initial state on load (e.g. browser autofill / back-button)
  });
};

export default initFormHelpers;
