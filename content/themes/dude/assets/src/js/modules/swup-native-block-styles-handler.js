/**
 * Swup block styles handler
 * Syncs WordPress block styles (core and custom) between pages during swup navigation.
 * WordPress conditionally loads block styles, but swup only replaces #page content,
 * so <head> styles from the previous page persist and new ones are missing.
 */

/**
 * Sync block style tags from the new page's <head> into the current <head>.
 * Adds missing styles, updates changed ones, and removes ones no longer needed.
 *
 * @param {Document} newDocument - The parsed document from swup's visit.to.document
 */
export default function syncBlockStyles(newDocument) {
  if (!newDocument) {
    return;
  }

  const currentHead = document.head;
  const newHead = newDocument.head;

  // Selector for style elements with IDs ending in -css (WordPress convention)
  const sel = 'style[id$="-css"], link[id$="-css"][rel="stylesheet"]';

  const currentStyles = currentHead.querySelectorAll(sel);
  const newStyles = newHead.querySelectorAll(sel);

  // Build maps of ID -> element for both documents
  const currentMap = new Map();
  currentStyles.forEach((el) => {
    if (el.id) {
      currentMap.set(el.id, el);
    }
  });

  const newMap = new Map();
  newStyles.forEach((el) => {
    if (el.id) {
      newMap.set(el.id, el);
    }
  });

  // Add missing styles and update changed ones
  newMap.forEach((newEl, id) => {
    const currentEl = currentMap.get(id);

    if (!currentEl) {
      // Style missing from current page — add it
      currentHead.appendChild(newEl.cloneNode(true));
    } else if (
      currentEl.tagName === 'STYLE'
      && newEl.tagName === 'STYLE'
      && currentEl.textContent !== newEl.textContent
    ) {
      // Same ID but different content (e.g. core-block-supports-inline-css) — replace
      currentEl.textContent = newEl.textContent;
    }
  });

  // Remove block-specific styles no longer needed on the new page
  currentMap.forEach((el, id) => {
    if (!newMap.has(id) && isBlockStyle(id)) {
      el.remove();
    }
  });
}

/**
 * Check if a style element ID belongs to a WordPress block style
 */
function isBlockStyle(id) {
  // Core WordPress block styles (wp-block-gallery-inline-css, etc.)
  if (id.startsWith('wp-block-')) {
    return true;
  }

  // Our custom native block styles (dude-pricing-hero-style-css, etc.)
  if (id.startsWith('dude-')) {
    return true;
  }

  // Core block supports (core-block-supports-inline-css)
  if (id.startsWith('core-block-')) {
    return true;
  }

  return false;
}
