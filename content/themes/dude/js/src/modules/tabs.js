/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-02-10 18:16:29
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-06-24 13:02:35
 */
/* eslint-disable no-use-before-define, no-inner-declarations, no-undef, no-plusplus, default-case, func-names, max-len, no-shadow, no-param-reassign, consistent-return */
/*
* This content is licensed according to the W3C Software License at
* https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*
* @source https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html
*/
const initTabs = () => {
  // Find all tablists
  const tabLists = document.querySelectorAll('[role="tablist"]');

  if (typeof tabLists !== 'undefined') {
    let tabs;
    let panels;
    const delay = determineDelay();

    function generateArrays() {
      const tabLists = document.querySelectorAll('[role="tablist"]');

      // Loop through
      tabLists.forEach((tabList) => {
        // First let's check if they exist
        if (typeof tabLists !== 'undefined') {
          tabs = tabList.querySelectorAll('[role="tab"]');

          if (tabList.nextElementSibling) {
            panels = tabList.nextElementSibling.querySelectorAll('[role="tabpanel"]');
          }
        }
      });
    }

    generateArrays();

    // For easy reference
    const keys = {
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      delete: 46,
    };

    // Add or substract depending on key pressed
    const direction = {
      37: -1,
      38: -1,
      39: 1,
      40: 1,
    };

    // Loop through
    tabLists.forEach((tabList) => {
      // First let's check if they exist
      if (typeof tabLists !== 'undefined') {
        tabs = tabList.querySelectorAll('[role="tab"]');

        if (tabList.nextElementSibling) {
          panels = tabList.nextElementSibling.querySelectorAll('[role="tabpanel"]');
        }

        // Bind listeners
        for (let i = 0; i < tabs.length; i++) {
          addListeners(i);
        }
      }
    });

    function addListeners(index) {
      tabs[index].addEventListener('click', clickEventListener);
      tabs[index].addEventListener('keydown', keydownEventListener);
      tabs[index].addEventListener('keyup', keyupEventListener);

      // Build an array with all tabs (<button>s) in it
      tabs[index].index = index;
    }

    // When a tab is clicked, activateTab is fired to activate it
    function clickEventListener(event) {
      const tab = event.target;

      activateTab(tab, false);
    }

    // Handle keydown on tabs
    function keydownEventListener(event) {
      const key = event.keyCode;

      switch (key) {
      case keys.end:
        event.preventDefault();
        // Activate last tab
        activateTab(tabs[tabs.length - 1]);
        break;
      case keys.home:
        event.preventDefault();
        // Activate first tab
        activateTab(tabs[0]);
        break;

      // Up and down are in keydown
      // because we need to prevent page scroll >:)
      case keys.up:
      case keys.down:
        determineOrientation(event);
        break;
      }
    }

    // Handle keyup on tabs
    function keyupEventListener(event) {
      const key = event.keyCode;

      switch (key) {
      case keys.left:
      case keys.right:
        determineOrientation(event);
        break;
      case keys.delete:
        determineDeletable(event);
        break;
      }
    }

    // When a tablist's aria-orientation is set to vertical,
    // only up and down arrow should function.
    // In all other cases only left and right arrow function.
    function determineOrientation(event) {
      const key = event.keyCode;

      // Loop through
      tabLists.forEach((tabList) => {
        // First let's check if they exist
        if (typeof tabLists !== 'undefined') {
          const vertical = tabList.getAttribute('aria-orientation') === 'vertical';

          let proceed = false;

          if (vertical) {
            if (key === keys.up || key === keys.down) {
              event.preventDefault();
              proceed = true;
            }
          } else if (key === keys.left || key === keys.right) {
            proceed = true;
          }

          if (proceed) {
            switchTabOnArrowPress(event);
          }
        }
      });
    }

    // Either focus the next, previous, first, or last tab
    // depening on key pressed
    function switchTabOnArrowPress(event) {
      const pressed = event.keyCode;

      for (let x = 0; x < tabs.length; x++) {
        tabs[x].addEventListener('focus', focusEventHandler);
      }

      if (direction[pressed]) {
        const { target } = event;
        if (target.index !== undefined) {
          if (tabs[target.index + direction[pressed]]) {
            tabs[target.index + direction[pressed]].focus();
          } else if (pressed === keys.left || pressed === keys.up) {
            focusLastTab();
          } else if (pressed === keys.right || pressed === keys.down) {
            focusFirstTab();
          }
        }
      }
    }

    // Activates any given tab panel
    function activateTab(tab, setFocus) {
      setFocus = setFocus || true;
      // Deactivate all other tabs
      tabs = tab.parentNode.querySelectorAll('[role="tab"]');
      panels = tab.parentNode.parentNode.nextElementSibling.querySelectorAll('[role="tabpanel"]');

      for (let t = 0; t < tabs.length; t++) {
        tabs[t].setAttribute('tabindex', '-1');
        tabs[t].setAttribute('aria-selected', 'false');
        tabs[t].removeEventListener('focus', focusEventHandler);
      }

      for (let p = 0; p < panels.length; p++) {
        panels[p].setAttribute('hidden', 'hidden');
      }

      // Remove tabindex attribute
      tab.removeAttribute('tabindex');

      // Set the tab as selected
      tab.setAttribute('aria-selected', 'true');

      // Get the value of aria-controls (which is an ID)
      const controls = tab.getAttribute('aria-controls');

      // Remove hidden attribute from tab panel to make it visible
      document.getElementById(controls).removeAttribute('hidden');

      // Set focus when required
      if (setFocus) {
        tab.focus();
      }
    }

    // Make a guess
    function focusFirstTab() {
      tabs[0].focus();
    }

    // Make a guess
    function focusLastTab() {
      tabs[tabs.length - 1].focus();
    }

    // Detect if a tab is deletable
    function determineDeletable(event) {
      target = event.target;

      if (target.getAttribute('data-deletable') !== null) {
        // Delete target tab
        deleteTab(event, target);

        // Update arrays related to tabs widget
        generateArrays();

        // Activate the closest tab to the one that was just deleted
        if (target.index - 1 < 0) {
          activateTab(tabs[0]);
        } else {
          activateTab(tabs[target.index - 1]);
        }
      }
    }

    // Deletes a tab and its panel
    function deleteTab(event) {
      const { target } = event;
      const panel = document.getElementById(target.getAttribute('aria-controls'));

      target.parentElement.removeChild(target);
      panel.parentElement.removeChild(panel);
    }

    // Determine whether there should be a delay
    // when user navigates with the arrow keys
    function determineDelay() {
      // Loop through
      tabLists.forEach((tabList) => {
        // First let's check if they exist
        if (typeof tabLists !== 'undefined') {
          const hasDelay = tabList.hasAttribute('data-delay');
          let delay = 0;

          if (hasDelay) {
            const delayValue = tabList.getAttribute('data-delay');
            if (delayValue) {
              delay = delayValue;
            } else {
              // If no value is specified, default to 300ms
              delay = 300;
            }
          }

          return delay;
        }
      });
    }

    function focusEventHandler(event) {
      const { target } = event;

      setTimeout(checkTabFocus, delay, target);
    }

    // Only activate tab on focus if it still has focus after the delay
    function checkTabFocus(target) {
      focused = document.activeElement;

      if (target === focused) {
        activateTab(target, false);
      }
    }
  }
};

export default initTabs;
