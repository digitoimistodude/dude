/* eslint-disable no-param-reassign, no-unused-vars */
/**
 * Reference filtering functionality
 */

const initReferenceFilters = () => {
  // Run on both main archive and taxonomy archives
  if (
    !document.body.classList.contains('post-type-archive-reference') &&
    !document.body.classList.contains('tax-reference-target-group')
  ) {
    return;
  }

  // Base URLs
  const archiveBaseUrl = `${window.location.origin}/referenssit`;
  const currentUrl = window.location.origin + window.location.pathname;

  const referenceItems = document.querySelectorAll('.col-reference');
  const targetGroupButtons = document.querySelectorAll('.filter-target-group');
  const solutionCheckboxes = document.querySelectorAll(
    'input[name="solution"]'
  );
  const searchInput = document.getElementById('reference-search');
  const advancedToggle = document.querySelector('.filter-toggle-advanced');
  const advancedContent = document.getElementById('advanced-filters-content');
  const advancedSection = document.getElementById('advanced-filters');

  // Initialize filters from URL parameters and current page
  const getFiltersFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);

    // Check if we're on a taxonomy archive and get the current target group
    let currentTargetGroup = 'all';
    const activeButton = document.querySelector('.filter-target-group.active');
    if (activeButton) {
      currentTargetGroup = activeButton.dataset.value;
    }

    // Override with URL parameters if present
    const urlTargetGroup = urlParams.get('toimiala');
    if (urlTargetGroup) {
      currentTargetGroup = urlTargetGroup;
    }

    return {
      targetGroup: currentTargetGroup,
      solutions: urlParams.get('ratkaisut')
        ? urlParams.get('ratkaisut').split(',')
        : ['all'],
      searchTerm: urlParams.get('haku') || '',
    };
  };

  // State management
  let activeFilters = getFiltersFromUrl();

  // Toggle advanced filters
  if (advancedToggle && advancedContent) {
    advancedToggle.addEventListener('click', () => {
      const isExpanded =
        advancedToggle.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        advancedToggle.setAttribute('aria-expanded', 'false');
        advancedSection.setAttribute('aria-expanded', 'false');
        advancedContent.hidden = true;
      } else {
        advancedToggle.setAttribute('aria-expanded', 'true');
        advancedSection.setAttribute('aria-expanded', 'true');
        advancedContent.hidden = false;
      }
    });
  }

  // Target group filtering - real-time filtering
  targetGroupButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      // Check if this button has an archive link and we're not on the main archive
      const archiveLink = button.querySelector('.archive-link');
      if (
        archiveLink &&
        button.dataset.value !== 'all' &&
        !document.body.classList.contains('post-type-archive-reference')
      ) {
        // Navigate to the taxonomy archive
        const { archiveUrl } = archiveLink.dataset;
        if (archiveUrl) {
          window.location.href = archiveUrl;
          return;
        }
      } else if (
        button.dataset.value === 'all' &&
        !document.body.classList.contains('post-type-archive-reference')
      ) {
        // Navigate to main archive for "all"
        const archiveLink = button.querySelector('.archive-link');
        if (archiveLink) {
          window.location.href = archiveLink.dataset.archiveUrl;
          return;
        }
      }

      // For real-time filtering (on main archive or same taxonomy page)
      // Remove active class from all buttons
      targetGroupButtons.forEach((btn) => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });

      // Add active class to clicked button
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');

      // Update active filter
      activeFilters.targetGroup = button.dataset.value;

      // Update URL and apply filters
      updateUrlAndApplyFilters();
    });
  });

  // Solution/category filtering with multi-select
  solutionCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const allCheckbox = document.querySelector(
        'input[name="solution"][value="all"]'
      );

      if (checkbox.value === 'all' && checkbox.checked) {
        // If "All" is checked, uncheck all others
        solutionCheckboxes.forEach((cb) => {
          if (cb.value !== 'all') {
            cb.checked = false;
          }
        });
        activeFilters.solutions = ['all'];
      } else if (checkbox.value !== 'all') {
        // If any other checkbox is changed
        if (checkbox.checked) {
          // Uncheck "All" when selecting specific categories
          if (allCheckbox) {
            allCheckbox.checked = false;
          }

          // Remove 'all' from active filters if present
          const allIndex = activeFilters.solutions.indexOf('all');
          if (allIndex > -1) {
            activeFilters.solutions.splice(allIndex, 1);
          }

          // Add the selected category
          if (!activeFilters.solutions.includes(checkbox.value)) {
            activeFilters.solutions.push(checkbox.value);
          }
        } else {
          // Remove unchecked category
          const index = activeFilters.solutions.indexOf(checkbox.value);
          if (index > -1) {
            activeFilters.solutions.splice(index, 1);
          }

          // If no categories are selected, select "All"
          if (activeFilters.solutions.length === 0) {
            if (allCheckbox) {
              allCheckbox.checked = true;
            }
            activeFilters.solutions = ['all'];
          }
        }
      }

      updateUrlAndApplyFilters();
    });
  });

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
    const params = new URLSearchParams();

    // Get the appropriate base URL from the target group button
    const targetButton = document.querySelector(
      `[data-value="${activeFilters.targetGroup}"]`
    );
    const archiveLink = targetButton?.querySelector('.archive-link');
    if (archiveLink && archiveLink.dataset.archiveUrl) {
      baseUrl = archiveLink.dataset.archiveUrl;
    }

    // Add remaining filter parameters as query params
    if (
      !activeFilters.solutions.includes('all') &&
      activeFilters.solutions.length > 0
    ) {
      params.set('ratkaisut', activeFilters.solutions.join(','));
    }

    if (activeFilters.searchTerm) {
      params.set('haku', activeFilters.searchTerm);
    }

    // Build final URL
    const newUrl = params.toString()
      ? `${baseUrl}?${params.toString()}`
      : baseUrl;
    window.history.pushState({ filters: activeFilters }, '', newUrl);

    // Apply the filters
    applyFilters();
  };

  // Reset all filters to default state
  const resetAllFilters = () => {
    // Reset filter state
    activeFilters = getDefaultFilters();

    // Reset UI
    // Target group buttons
    targetGroupButtons.forEach((btn) => {
      if (btn.dataset.value === 'all') {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Solution checkboxes
    solutionCheckboxes.forEach((checkbox) => {
      checkbox.checked = checkbox.value === 'all';
    });

    // Search input
    if (searchInput) {
      searchInput.value = '';
    }

    // Apply filters
    applyFilters();
  };

  // Search from all categories and target groups (keep only search term)
  const searchAllFilters = () => {
    // Reset both target group and categories to 'all', keep only search term
    activeFilters.targetGroup = 'all';
    activeFilters.solutions = ['all'];

    // Update target group buttons UI
    targetGroupButtons.forEach((btn) => {
      if (btn.dataset.value === 'all') {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Update solution checkboxes UI
    solutionCheckboxes.forEach((checkbox) => {
      checkbox.checked = checkbox.value === 'all';
    });

    // Apply filters (keeping only search term)
    applyFilters();
  };

  // Apply all active filters
  const applyFilters = () => {
    let visibleCount = 0;

    referenceItems.forEach((item) => {
      let shouldShow = true;

      // Target group filter
      if (activeFilters.targetGroup !== 'all') {
        const itemTargetGroup = item.dataset.targetGroup || '';
        if (itemTargetGroup !== activeFilters.targetGroup) {
          shouldShow = false;
        }
      }

      // Category/solution filter
      if (shouldShow && !activeFilters.solutions.includes('all')) {
        const itemCategories = (item.dataset.categories || '')
          .split(' ')
          .filter(Boolean);
        const hasMatchingCategory = activeFilters.solutions.some((solution) =>
          itemCategories.includes(solution)
        );

        if (!hasMatchingCategory) {
          shouldShow = false;
        }
      }

      // Search filter
      if (shouldShow && activeFilters.searchTerm) {
        const searchableText = item.dataset.searchable || '';
        if (!searchableText.includes(activeFilters.searchTerm)) {
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
    });

    // Check for cross-filter results if no current results and we have any filters applied
    let crossFilterCount = 0;
    if (
      visibleCount === 0 &&
      (activeFilters.targetGroup !== 'all' ||
        !activeFilters.solutions.includes('all') ||
        activeFilters.searchTerm)
    ) {
      crossFilterCount = countCrossFilterResults();
    }

    // Show message if no results
    handleNoResults(visibleCount, crossFilterCount);
  };

  // Count results that would show if we ignored restrictive filters
  const countCrossFilterResults = () => {
    let count = 0;

    referenceItems.forEach((item) => {
      let shouldShow = true;

      // For cross-filter search, we relax the most restrictive filters:
      // - If target group is restricted, ignore it
      // - If categories are restricted, ignore them
      // - Keep search term filter as it's less restrictive

      // Only apply search filter for cross-filter search
      if (activeFilters.searchTerm) {
        const searchableText = item.dataset.searchable || '';
        if (!searchableText.includes(activeFilters.searchTerm)) {
          shouldShow = false;
        }
      }

      if (shouldShow) {
        count++;
      }
    });

    return count;
  };

  // Handle no results message
  const handleNoResults = (count, crossFilterCount = 0) => {
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

      console.log('Cross filter count:', crossFilterCount); // Debug

      if (crossFilterCount > 0) {
        // Show cross-filter results message - be more specific about what was found
        let messageText = '';
        if (
          activeFilters.targetGroup !== 'all' &&
          !activeFilters.solutions.includes('all')
        ) {
          messageText = `${crossFilterCount} hakutulosta löytyi muilta toimialoilta ja kategorioilta, haetaanko kaikista?`;
        } else if (activeFilters.targetGroup !== 'all') {
          messageText = `${crossFilterCount} hakutulosta löytyi muilta toimialoilta, haetaanko kaikista?`;
        } else if (!activeFilters.solutions.includes('all')) {
          messageText = `${crossFilterCount} hakutulosta löytyi muista kategorioista, haetaanko kaikista?`;
        } else {
          messageText = `${crossFilterCount} hakutulosta löytyi, haetaanko kaikista?`;
        }

        content += `
          <p>${messageText}</p>
          <button type="button" class="search-all-button" id="search-all-filters">Hae uudelleen kaikista</button>
          <button type="button" class="button" id="reset-filters">Nollaa haku</button>
        `;
      } else {
        // Show default no results message
        content += `
          <p>Hakuasi vastaavia referenssejä ei löydy.</p>
          <button type="button" class="button" id="reset-filters">Nollaa haku</button>
        `;
      }

      noResultsMessage.innerHTML = content;

      // Add event listeners
      const resetButton = noResultsMessage.querySelector('#reset-filters');
      if (resetButton) {
        resetButton.addEventListener('click', resetAllFilters);
      }

      const searchAllButton = noResultsMessage.querySelector(
        '#search-all-filters'
      );
      if (searchAllButton) {
        searchAllButton.addEventListener('click', searchAllFilters);
      }

      container.appendChild(noResultsMessage);
    } else if (noResultsMessage) {
      noResultsMessage.remove();
    }
  };

  // Initialize UI with URL state
  const initializeFromUrl = () => {
    // Set target group button states based on activeFilters
    targetGroupButtons.forEach((btn) => {
      if (btn.dataset.value === activeFilters.targetGroup) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Set solution checkboxes state based on activeFilters
    solutionCheckboxes.forEach((checkbox) => {
      if (activeFilters.solutions.includes('all')) {
        checkbox.checked = checkbox.value === 'all';
      } else {
        checkbox.checked = activeFilters.solutions.includes(checkbox.value);
      }
    });

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

  // Initialize with URL state
  initializeFromUrl();
};

export default initReferenceFilters;
