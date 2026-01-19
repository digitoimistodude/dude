/* eslint-disable no-unused-vars, no-continue, max-len, no-param-reassign, no-use-before-define, implicit-arrow-linebreak, no-shadow, wrap-iife, func-names, no-plusplus */
/**
 * Reference filtering functionality
 */

const initReferenceFilters = () => {
  // Base URLs
  const archiveBaseUrl = `${window.location.origin}/referenssit`;
  const currentUrl = window.location.origin + window.location.pathname;

  const referenceItems = document.querySelectorAll('.col-reference');
  const targetGroupButtons = document.querySelectorAll('.filter-target-group');
  const solutionCheckboxes = document.querySelectorAll('input[name="solution"]');
  const searchInput = document.getElementById('reference-search');
  const advancedToggle = document.querySelector('.filter-toggle-advanced');
  const advancedContent = document.getElementById('advanced-filters-content');
  const advancedSection = document.getElementById('advanced-filters');

  const parseQueryParams = function (queryString) {
    const params = {};

    if (!queryString) {
      return params;
    }

    const query = queryString.charAt(0) === '?' ? queryString.slice(1) : queryString;

    if (!query) {
      return params;
    }

    const pairs = query.split('&');
    for (let i = 0; i < pairs.length; i += 1) {
      const pair = pairs[i];
      if (!pair) {
        continue;
      }

      const equalIndex = pair.indexOf('=');
      let rawKey;
      let rawValue;

      if (equalIndex === -1) {
        rawKey = pair;
        rawValue = '';
      } else {
        rawKey = pair.substring(0, equalIndex);
        rawValue = pair.substring(equalIndex + 1);
      }

      if (!rawKey) {
        continue;
      }

      const key = decodeURIComponent(rawKey);
      const value = decodeURIComponent((rawValue || '').replace(/\+/g, ' '));

      params[key] = value;
    }

    return params;
  };

  const buildQueryString = (params) =>
    Object.keys(params)
      .map((key) => {
        const value = params[key];

        if (value === undefined || value === null || value === '') {
          return '';
        }

        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .filter(Boolean)
      .join('&');

  // Initialize filters from URL parameters and current page
  const getFiltersFromUrl = () => {
    const urlParams = parseQueryParams(window.location.search);

    // Check if we're on a taxonomy archive and get the current target group
    let currentTargetGroup = 'all';
    const activeButton = document.querySelector('.filter-target-group.active');
    if (activeButton) {
      currentTargetGroup = activeButton.dataset.value;
    }

    // Override with URL parameters if present
    const urlTargetGroup = urlParams.toimiala;
    if (urlTargetGroup) {
      currentTargetGroup = urlTargetGroup;
    }

    const solutionsFromUrl = urlParams.ratkaisut ? urlParams.ratkaisut.split(',') : ['all'];
    const searchTermFromUrl = urlParams.haku ? urlParams.haku : '';

    return {
      targetGroup: currentTargetGroup,
      solutions: solutionsFromUrl,
      searchTerm: searchTermFromUrl,
    };
  };

  // State management
  let activeFilters = getFiltersFromUrl();

  // Toggle advanced filters - using document.body event delegation for iOS Safari 17.4.1+ compatibility
  if (advancedToggle && advancedContent) {
    // Remove any existing listeners first
    document.body.addEventListener('click', (e) => {
      if (e.target === advancedToggle || advancedToggle.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();

        const isExpanded = advancedToggle.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
          advancedToggle.setAttribute('aria-expanded', 'false');
          advancedSection.setAttribute('aria-expanded', 'false');
          advancedContent.hidden = true;
        } else {
          advancedToggle.setAttribute('aria-expanded', 'true');
          advancedSection.setAttribute('aria-expanded', 'true');
          advancedContent.hidden = false;
        }
      }
    });
  }

  // Target group filtering - direct event attachment for iOS Safari compatibility
  const handleTargetGroupClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const button = e.currentTarget;

    // Check if this button has an archive link and we're not on the main archive
    const archiveLink = button.querySelector('.archive-link');
    if (archiveLink && button.dataset.value !== 'all' && !document.body.classList.contains('post-type-archive-reference')) {
      // Navigate to the taxonomy archive
      const { archiveUrl } = archiveLink.dataset;
      if (archiveUrl) {
        window.location.href = archiveUrl;
        return;
      }
    } else if (button.dataset.value === 'all' && !document.body.classList.contains('post-type-archive-reference')) {
      // Navigate to main archive for "all"
      const archiveLink = button.querySelector('.archive-link');
      if (archiveLink) {
        window.location.href = archiveLink.dataset.archiveUrl;
        return;
      }
    }

    // For real-time filtering (on main archive or same taxonomy page)
    // Remove active class from all buttons
    for (let i = 0; i < targetGroupButtons.length; i += 1) {
      const btn = targetGroupButtons[i];
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }

    // Add active class to clicked button
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');

    // Update active filter
    activeFilters.targetGroup = button.dataset.value;

    // Update URL and apply filters
    updateUrlAndApplyFilters();
  };

  // Ultra-simple target group buttons for iOS Safari compatibility
  for (let i = 0; i < targetGroupButtons.length; i += 1) {
    const button = targetGroupButtons[i];
    button.style.cursor = 'pointer';

    // Use closure to capture the button reference
    (function (btn) {
      btn.onclick = function () {
        handleTargetGroupClick({ currentTarget: btn, preventDefault() {}, stopPropagation() {} });
      };
    })(button);
  }

  // Solution/category filtering with multi-select - direct attachment for iOS Safari compatibility
  const handleCheckboxChange = function (e) {
    const checkbox = e.target;
    const allCheckbox = document.querySelector('input[name="solution"][value="all"]');

    if (checkbox.value === 'all' && checkbox.checked) {
      for (let i = 0; i < solutionCheckboxes.length; i += 1) {
        const cb = solutionCheckboxes[i];
        if (cb.value !== 'all') {
          cb.checked = false;
        }
      }
      activeFilters.solutions = ['all'];
    } else if (checkbox.value !== 'all') {
      if (checkbox.checked) {
        if (allCheckbox) {
          allCheckbox.checked = false;
        }

        const allIndex = activeFilters.solutions.indexOf('all');
        if (allIndex > -1) {
          activeFilters.solutions.splice(allIndex, 1);
        }

        if (activeFilters.solutions.indexOf(checkbox.value) === -1) {
          activeFilters.solutions.push(checkbox.value);
        }
      } else {
        const index = activeFilters.solutions.indexOf(checkbox.value);
        if (index > -1) {
          activeFilters.solutions.splice(index, 1);
        }

        if (activeFilters.solutions.length === 0) {
          if (allCheckbox) {
            allCheckbox.checked = true;
          }
          activeFilters.solutions = ['all'];
        }
      }
    }

    updateUrlAndApplyFilters();
  };

  // Attach change events directly to each checkbox for iOS Safari compatibility
  for (let i = 0; i < solutionCheckboxes.length; i += 1) {
    const checkbox = solutionCheckboxes[i];
    checkbox.addEventListener('change', handleCheckboxChange);
  }

  // Search functionality with debounce
  let searchTimeout;
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        activeFilters.searchTerm = searchInput.value.toLowerCase().trim();
        updateUrlAndApplyFilters();
      }, 300);
    });
  }

  // Apply filters and update URL with pushState
  const updateUrlAndApplyFilters = () => {
    let baseUrl = currentUrl;
    const params = {};

    // Get the appropriate base URL from the target group button
    const targetButton = document.querySelector(`[data-value="${activeFilters.targetGroup}"]`);
    const archiveLink = targetButton ? targetButton.querySelector('.archive-link') : null;
    if (archiveLink && archiveLink.dataset.archiveUrl) {
      baseUrl = archiveLink.dataset.archiveUrl;
    }

    // Add remaining filter parameters as query params
    if (activeFilters.solutions.indexOf('all') === -1 && activeFilters.solutions.length > 0) {
      params.ratkaisut = activeFilters.solutions.join(',');
    }

    if (activeFilters.searchTerm) {
      params.haku = activeFilters.searchTerm;
    }

    // Build final URL
    const queryString = buildQueryString(params);
    const newUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;
    const stateFilters = {
      targetGroup: activeFilters.targetGroup,
      solutions: [...activeFilters.solutions],
      searchTerm: activeFilters.searchTerm,
    };
    window.history.pushState({ filters: stateFilters }, '', newUrl);

    // Apply the filters
    applyFilters();
  };

  // Reset all filters to default state
  const resetAllFilters = () => {
    // Reset filter state
    activeFilters = {
      targetGroup: 'all',
      solutions: ['all'],
      searchTerm: '',
    };

    // Reset UI
    // Target group buttons
    for (let i = 0; i < targetGroupButtons.length; i += 1) {
      const btn = targetGroupButtons[i];
      if (btn.dataset.value === 'all') {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    }

    // Solution checkboxes
    for (let i = 0; i < solutionCheckboxes.length; i += 1) {
      const checkbox = solutionCheckboxes[i];
      checkbox.checked = checkbox.value === 'all';
    }

    // Search input
    if (searchInput) {
      searchInput.value = '';
    }

    // Update URL and apply filters
    updateUrlAndApplyFilters();
  };

  // Search from all categories and target groups (keep only search term)
  const searchAllFilters = () => {
    // Reset both target group and categories to 'all', keep only search term
    activeFilters.targetGroup = 'all';
    activeFilters.solutions = ['all'];

    // Update target group buttons UI
    for (let i = 0; i < targetGroupButtons.length; i += 1) {
      const btn = targetGroupButtons[i];
      if (btn.dataset.value === 'all') {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    }

    // Update solution checkboxes UI
    for (let i = 0; i < solutionCheckboxes.length; i += 1) {
      const checkbox = solutionCheckboxes[i];
      checkbox.checked = checkbox.value === 'all';
    }

    // Apply filters (keeping only search term)
    applyFilters();
  };

  // Apply all active filters
  const applyFilters = () => {
    let visibleCount = 0;

    for (let i = 0; i < referenceItems.length; i += 1) {
      const item = referenceItems[i];
      let shouldShow = true;

      // Target group filter
      if (activeFilters.targetGroup !== 'all') {
        const itemTargetGroup = item.dataset.targetGroup || '';
        if (itemTargetGroup !== activeFilters.targetGroup) {
          shouldShow = false;
        }
      }

      // Category/solution filter
      if (shouldShow && activeFilters.solutions.indexOf('all') === -1) {
        const categoriesString = item.dataset.categories || '';
        const itemCategories = [];
        const categoriesArray = categoriesString.split(' ');
        // Manual filter instead of .filter(Boolean)
        for (let j = 0; j < categoriesArray.length; j += 1) {
          if (categoriesArray[j] && categoriesArray[j].length > 0) {
            itemCategories.push(categoriesArray[j]);
          }
        }

        let hasMatchingCategory = false;
        for (let k = 0; k < activeFilters.solutions.length; k += 1) {
          if (itemCategories.indexOf(activeFilters.solutions[k]) !== -1) {
            hasMatchingCategory = true;
            break;
          }
        }

        if (!hasMatchingCategory) {
          shouldShow = false;
        }
      }

      // Search filter
      if (shouldShow && activeFilters.searchTerm) {
        const searchableText = item.dataset.searchable || '';
        if (searchableText.indexOf(activeFilters.searchTerm) === -1) {
          shouldShow = false;
        }
      }

      // Show/hide item with animation
      if (shouldShow) {
        item.style.display = '';
        item.classList.remove('filtered-out');
        setTimeout(() => {
          item.classList.add('filtered-in');
        }, 10);
        visibleCount++;
      } else {
        item.classList.add('filtered-out');
        item.classList.remove('filtered-in');
        setTimeout(() => {
          if (item.classList.contains('filtered-out')) {
            item.style.display = 'none';
          }
        }, 300);
      }
    }

    // Check for cross-filter results if no current results and we have any filters applied
    let crossFilterCount = 0;
    if (visibleCount === 0 && (activeFilters.targetGroup !== 'all' || activeFilters.solutions.indexOf('all') === -1 || activeFilters.searchTerm)) {
      crossFilterCount = countCrossFilterResults();
    }

    // Show message if no results
    handleNoResults(visibleCount, crossFilterCount);
  };

  // Count results that would show if we ignored restrictive filters
  const countCrossFilterResults = () => {
    let count = 0;

    for (let i = 0; i < referenceItems.length; i += 1) {
      const item = referenceItems[i];
      let shouldShow = true;

      // For cross-filter search, we relax the most restrictive filters:
      // - If target group is restricted, ignore it
      // - If categories are restricted, ignore them
      // - Keep search term filter as it's less restrictive

      // Only apply search filter for cross-filter search
      if (activeFilters.searchTerm) {
        const searchableText = item.dataset.searchable || '';
        if (searchableText.indexOf(activeFilters.searchTerm) === -1) {
          shouldShow = false;
        }
      }

      if (shouldShow) {
        count++;
      }
    }

    return count;
  };

  // Handle no results message
  const handleNoResults = function (count, crossFilterCount) {
    if (typeof crossFilterCount === 'undefined') {
      crossFilterCount = 0;
    }
    const container = document.querySelector('.cols.cols-two');
    let noResultsMessage = document.getElementById('no-results-message');

    if (count === 0) {
      // Remove existing message if it exists
      if (noResultsMessage) {
        noResultsMessage.remove();
      }

      // Create new message
      noResultsMessage = document.createElement('div');
      noResultsMessage.id = 'no-results-message';
      noResultsMessage.className = 'no-results-message';

      let content = '<h2>Tyhjää täynnä</h2>';

      if (crossFilterCount > 0) {
        // Show cross-filter results message - be more specific about what was found
        let messageText = '';
        if (activeFilters.targetGroup !== 'all' && activeFilters.solutions.indexOf('all') === -1) {
          messageText = `${crossFilterCount} hakutulosta löytyi muilta toimialoilta ja kategorioilta, haetaanko kaikista?`;
        } else if (activeFilters.targetGroup !== 'all') {
          messageText = `${crossFilterCount} hakutulosta löytyi muilta toimialoilta, haetaanko kaikista?`;
        } else if (activeFilters.solutions.indexOf('all') === -1) {
          messageText = `${crossFilterCount} hakutulosta löytyi muista kategorioista, haetaanko kaikista?`;
        } else {
          messageText = `${crossFilterCount} hakutulosta löytyi, haetaanko kaikista?`;
        }

        content += `
          <p>${messageText}</p>
          <div class="button-wrapper">
            <button type="button" class="button" id="search-all-filters">Hae uudelleen kaikista</button>
            <button type="button" class="button" id="reset-filters">Nollaa haku</button>
          </div>
        `;
      } else {
        // Show default no results message
        content += `
          <p>Hakuasi vastaavia referenssejä ei löydy.</p>
          <div class="button-wrapper">
            <button type="button" class="button" id="reset-filters">Nollaa haku</button>
          </div>
        `;
      }

      noResultsMessage.innerHTML = content;

      // Event listeners are handled by document.body delegation below

      if (container) {
        container.appendChild(noResultsMessage);
      }
    } else if (noResultsMessage) {
      noResultsMessage.remove();
    }
  };

  // Initialize UI with URL state
  const initializeFromUrl = () => {
    // Set target group button states based on activeFilters
    for (let i = 0; i < targetGroupButtons.length; i += 1) {
      const btn = targetGroupButtons[i];
      if (btn.dataset.value === activeFilters.targetGroup) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    }

    // Set solution checkboxes state based on activeFilters
    for (let i = 0; i < solutionCheckboxes.length; i += 1) {
      const checkbox = solutionCheckboxes[i];
      if (activeFilters.solutions.indexOf('all') !== -1) {
        checkbox.checked = checkbox.value === 'all';
      } else {
        checkbox.checked = activeFilters.solutions.indexOf(checkbox.value) !== -1;
      }
    }

    // Set search input state
    if (searchInput && activeFilters.searchTerm) {
      searchInput.value = activeFilters.searchTerm;
    }

    // Apply filters based on current state
    applyFilters();
  };

  // Handle browser back/forward navigation
  window.addEventListener('popstate', (event) => {
    if (event.state && event.state.filters) {
      activeFilters = event.state.filters;
    } else {
      activeFilters = getFiltersFromUrl();
    }
    initializeFromUrl();
  });

  // Event delegation for dynamically created buttons
  document.body.addEventListener('click', (e) => {
    // Handle reset filters button
    if (e.target.matches('#reset-filters')) {
      e.preventDefault();
      e.stopPropagation();
      resetAllFilters();
      return;
    }

    // Handle search all filters button
    if (e.target.matches('#search-all-filters')) {
      e.preventDefault();
      e.stopPropagation();
      searchAllFilters();
    }
  });

  // Initialize with URL state
  initializeFromUrl();
};

export default initReferenceFilters;
