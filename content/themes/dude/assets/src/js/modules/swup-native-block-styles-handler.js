/**
 * Swup native block styles handler
 * Ensures WordPress native block styles are loaded when navigating with swup
 */

/**
 * Check if native pricing blocks exist on page and load their styles if missing
 * WordPress conditionally loads block styles, but swup doesn't trigger the reload
 */
export default function reloadNativeBlockStyles() {
  // Define our native blocks that have stylesheets
  // Note: pricing-item doesn't have its own stylesheet (styles inherited from pricing-category)
  const blockChecks = [
    {
      selector: '.wp-block-dude-pricing-hero, .block-pricing-hero',
      handle: 'dude-pricing-hero-style',
      block: 'pricing-hero',
    },
    {
      selector: '.wp-block-dude-pricing-category, .block-pricing-category',
      handle: 'dude-pricing-category-style',
      block: 'pricing-category',
    },
    {
      selector: '.wp-block-dude-pricing-cta, .block-pricing-cta',
      handle: 'dude-pricing-cta-style',
      block: 'pricing-cta',
    },
    {
      selector: '.wp-block-dude-pricing-faq, .block-pricing-faq',
      handle: 'dude-pricing-faq-style',
      block: 'pricing-faq',
    },
  ];

  blockChecks.forEach(({ selector, handle, block }) => {
    // Check if block exists on page
    if (document.querySelector(selector)) {
      // Check if stylesheet is already loaded
      const existingLink = document.querySelector(`link[id*="${handle}"]`);

      if (!existingLink) {
        // Get theme URL from existing stylesheets or body class
        const themeUrl = window.location.origin + '/content/themes/dude';
        const styleUrl = `${themeUrl}/blocks/${block}/build/style-index.css`;

        // Create and append stylesheet
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.id = `${handle}-css`;
        link.href = styleUrl;
        link.media = 'all';
        document.head.appendChild(link);
      }
    }
  });
}
