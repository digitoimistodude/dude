/* eslint-disable camelcase, no-unused-vars, no-undef, func-names, no-param-reassign */
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-08-09 18:01:38
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-12 15:05:50
 */
const initFormHelpers = () => {
  // Find all form triggers
  const formTriggers = document.querySelectorAll('#wpforms-form-11358 .wpforms-conditional-trigger');

  if (typeof formTriggers !== 'undefined') {
    // Loop through
    formTriggers.forEach((formTrigger) => {
      // When trigger is clicked

      formTrigger.addEventListener('click', () => {
        // Find first label inside form trigger
        const formTriggerLabel = formTrigger.querySelectorAll('.wpforms-field-label-inline')[0];

        if (formTrigger.nextSibling.classList.contains('wpforms-conditional-hide')) {
          formTriggerLabel.innerHTML = 'Haluan kertoa vähemmän projektista';
          formTrigger.parentNode.parentNode.parentNode.classList.add('is-open');
        } else {
          formTriggerLabel.innerHTML = 'Haluan kertoa tarkemmin projektista';
          formTrigger.parentNode.parentNode.parentNode.classList.remove('is-open');
        }
      });
    });
  }
};

export default initFormHelpers;
