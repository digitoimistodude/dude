/**
 * Swup native block styles handler
 * Ensures WordPress native block styles are loaded when navigating with swup
 * and removed when no longer needed to prevent style leaks between pages
 */

/**
 * Check if native pricing blocks exist on page and load/remove their styles
 * WordPress conditionally loads block styles, but swup doesn't trigger the reload
 * WordPress may use <link> or <style> tags for block styles depending on version
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
    const blockExists = document.querySelector(selector);

    // Find any stylesheet element (link or inline style) matching this handle
    const existingStyles = document.querySelectorAll(
      `link[id*="${handle}"], style[id*="${handle}"]`,
    );

    if (blockExists && existingStyles.length === 0) {
      // Block exists but stylesheet is missing — load it
      const themeUrl = window.location.origin + '/content/themes/dude';
      const styleUrl = `${themeUrl}/blocks/${block}/build/style-index.css`;

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.id = `${handle}-css`;
      link.href = styleUrl;
      link.media = 'all';
      document.head.appendChild(link);
    } else if (!blockExists && existingStyles.length > 0) {
      // Block no longer on page — remove leaked stylesheets
      existingStyles.forEach((el) => el.remove());
    }
  });
}
