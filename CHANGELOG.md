### 7.0.13: 2026-01-27

* Fix editor accordion link colors and text styles to match frontend (mint instead of petrol), Ref: DEV-701
* Allow Composer plugin for PHPCS installer in GitHub workflow, Ref: DEV-701
* Fix GitHub workflow to install PHPCS globally instead of requiring full composer install, Ref: DEV-701
* Add composer.lock to version control for reproducible CI builds, Ref: DEV-701
* Add package-lock.json files to version control for reproducible CI builds, Ref: DEV-701
* Remove maybe_show_error_block function and all calls (rely on ACF required fields instead), Ref: DEV-701
* Refactor pricing-faq block to use RichText for inline editing of questions and answers, Ref: DEV-701
* Add swup handler to reload native block styles on page transitions, Ref: DEV-701
* Fix 404 error by excluding pricing-item from swup style loader (styles inherited from pricing-category), Ref: DEV-701

### 7.0.12: 2026-01-26

* Refactor pricing-item block to use InnerBlocks with core/group templates for inline editing, Ref: DEV-701
* Fix v2 block validation by handling both object and string feature formats in deprecation, Ref: DEV-701
* Add default content to pricing-item template blocks for better initial UX, Ref: DEV-701
* Set gradient box to show by default when adding new pricing-item block, Ref: DEV-701
* Add CSS rules to hide gradient box when toggle is off in both editor and frontend, Ref: DEV-701
* Add isEligible check to v2 deprecation to properly match old blocks with content/features attributes, Ref: DEV-701
* Fix v2 deprecation default for showGradientBox to match old blocks (false), Ref: DEV-701
* Update pricing-item template with specific default content and links for panel-main and gradient box, Ref: DEV-701
* Split pricing-category styles into separate style.scss and editor.scss files for better maintainability, Ref: DEV-701
* Add grid layout to block-editor-block-list__layout for two-column editor display of gradient box, Ref: DEV-701
* Override global has-petrol-gradient-background rules to preserve text colors and backgrounds in pricing blocks, Ref: DEV-701
* Fix has-global-padding causing incorrect padding on wp-block-group elements in editor, Ref: DEV-701
* Add is-style-mint button hover states with correct colors and box-shadow to gradient box buttons, Ref: DEV-701
* Fix inconsistent list padding and margins between editor and frontend views, Ref: DEV-701
* Update npm lint:styles script to fail on warnings with max-warnings=0 flag for CI reliability, Ref: DEV-701
* Fix has-global-padding removing gradient box padding in both editor and frontend, Ref: DEV-701

### 7.0.11: 2026-01-23

* Replace custom gradient box controls with WordPress core blocks (InnerBlocks), Ref: DEV-701
* Use core/list and core/button blocks in gradient box for better inline editing UX, Ref: DEV-701
* Fix accordion icon rotation in editor by adding override for -315deg transform, Ref: DEV-701
* Add bold, italic, and link formatting support to all pricing-item RichText fields, Ref: DEV-701
* Fix pricing-item block crash by adding missing v2 attributes to block.json, Ref: DEV-701
* Add __nextHasNoMarginBottom prop to ToggleControl components to fix deprecation warnings, Ref: DEV-701
* Add __next40pxDefaultSize and __nextHasNoMarginBottom props to TextControl components, Ref: DEV-701
* Fix GitHub Actions workflow npm cache error by using actions/cache instead of setup-node cache, Ref: DEV-701
* Fix accordion chevron rotation with !important to override global editor styles, Ref: DEV-701
* Update gradient box button styles (28px border-radius, 10px 20px padding, 14px medium font), Ref: DEV-701
* Replace checkmark text character with SVG icon in gradient box list items, Ref: DEV-701
* Add simpler .block-pricing-category selector with !important for chevron rotation, Ref: DEV-701

### 7.0.10: 2026-01-21

* Add two-column layout with optional gradient box to pricing-item block, Ref: DEV-567
* Add RichText support with links to pricing-item content and features, Ref: DEV-567
* Add optional features title field to pricing-item block, Ref: DEV-567
* Add gradient box with heading, list (bullet/checkbox), and CTA button to pricing-item, Ref: DEV-567
* Add deprecation system to pricing-item block for backward compatibility with v1 format, Ref: DEV-567
* Update pricing-category styles with gradient box and two-column responsive layout, Ref: DEV-567
* Fix stylelint warnings by reducing selector nesting depth and adding focus states, Ref: DEV-567
* Add GitHub Actions workflow for linting (ESLint, Stylelint, PHPCS), Ref: DEV-567
* Format all block files with ESLint/Prettier to fix code style inconsistencies, Ref: DEV-567
* Configure Prettier with WordPress standards and override `parenSpacing` to false for 2-space indents, Ref: DEV-567
* Add WordPress blocks eslint config with JSX support, Ref: DEV-567

### 7.0.9: 2026-01-20

* Remove `fit=cover` from carousel images to prevent cropping, Ref: KVLT-161
* Fix CTA image positioning in editor by resetting position context on parent wrappers, Ref: DEV-567
* Add separate "Pakota dark mode" admin setting for forcing dark mode without gradient, Ref: DEV-567
* Rename `pricing-gradient-toggle.js` to `gradient-toggle.js`, Ref: DEV-567
* Fix button text color in editor by narrowing span selector, Ref: DEV-567
* Force dark mode in JS when petrol gradient is active and prevent toggle from switching, Ref: DEV-567
* Connect pricing gradient toggle to front-end by using `has-petrol-gradient-background` body class based on post meta, Ref: DEV-567
* Fix editor text visibility by adding dark theme color overrides for `is-dark-theme` body class, Ref: DEV-567
* Restore `carousel-style-alt` scroll carousel code that was accidentally removed during asset restructure, Ref: DEV-567
* Add editor-specific white color overrides to pricing blocks (fixes grey text in WP 6.9 editor), Ref: DEV-567

### 7.0.8: 2026-01-19

- Fix pricing-cta image positioning (move outside cta-content for correct absolute positioning), Ref: DEV-567

### 7.0.7: 2026-01-16

- Refactor pricing-cta block for inline editing with core/image inner block, Ref: DEV-567
- Add theme.json with 1400px content size for native block widths, Ref: DEV-567
- Update `$width-grid-base` from 1440px to 1400px, Ref: DEV-567
- Fix pricing page background gradient to match Figma (linear from top-left), Ref: DEV-567
- Fix accordion click handler to work with nested elements using `closest()`, Ref: DEV-567

### 7.0.6: 2026-01-15

- Restructure pricing-category with proper wrapper elements (category-info, category-items), Ref: DEV-567
- Align pricing-item editor HTML structure with front-end output, Ref: DEV-567

### 7.0.5: 2026-01-14

- Fix button styles to prevent global style interference, Ref: DEV-567
- Fix all stylelint warnings across codebase, Ref: DEV-567
- Silence Sass deprecation warnings and fix placeholder pseudo-element, Ref: DEV-567
- Fix pricing-category save function to include section wrapper, Ref: DEV-567
- Add blocks SCSS to stylelint scope, Ref: DEV-567
- Update pricing-category grid layout (470px/65px gap), Ref: DEV-567
- Implement accessible accordion pattern for pricing blocks, Ref: DEV-567
- Fix all stylelint warnings across codebase, Ref: DEV-567
- Silence Sass deprecation warnings and fix placeholder pseudo-element, Ref: DEV-567

### 7.0.4: 2026-01-13

- Fix pricing-hero h2 font-size and add editor styles, Ref: DEV-567

### 7.0.3: 2026-01-12

- Convert pricing blocks to static and fix editor/front-end style consistency, Ref: DEV-567

### 7.0.2: 2026-01-09

- Set up husky pre-commit hooks for dudestack, Ref: DEV-567
- Fix pricing gradient toggle JS path after assets restructure, Ref: DEV-567
- Update WordPress to 6.9
- Add example attributes to pricing blocks for editor previews, Ref: DEV-567
- Fix pricing blocks structure for front-end rendering, Ref: DEV-567
- Fix editor paragraph styles to match front-end, Ref: DEV-567
- Add dude-coding-standards for phpcs, Ref: DEV-567
- Update code-quality-checks to 2.1.2, Ref: DEV-567
- Add consolidated editor typography overrides for headings and lists, Ref: DEV-567
- Fix editor vs front-end margin consistency in pricing blocks, Ref: DEV-567
- Remove redundant autoprefixer from postcss.config.js, Ref: DEV-567
- Fix pricing-category button styles overridden by global form styles, Ref: DEV-567
- Update stylelint-config to 1.0.2 with auto-detect global.css path, Ref: DEV-567

* Set up husky pre-commit hooks for dudestack, Ref: DEV-567
* Fix pricing gradient toggle JS path after assets restructure, Ref: DEV-567
* Update WordPress to 6.9
* Add example attributes to pricing blocks for editor previews, Ref: DEV-567
* Fix pricing blocks structure for front-end rendering, Ref: DEV-567
* Fix editor paragraph styles to match front-end, Ref: DEV-567
* Add dude-coding-standards for phpcs, Ref: DEV-567
* Update code-quality-checks to 2.1.2, Ref: DEV-567
* Add consolidated editor typography overrides for headings and lists, Ref: DEV-567
* Fix editor vs front-end margin consistency in pricing blocks, Ref: DEV-567
* Remove redundant autoprefixer from postcss.config.js, Ref: DEV-567
* Fix pricing-category button styles overridden by global form styles, Ref: DEV-567
* Update stylelint-config to 1.0.2 with auto-detect global.css path, Ref: DEV-567

### 7.0.1: 2026-01-08

- Set up husky pre-commit hooks for code quality checks, Ref: DEV-567
- Implement @digitoimistodude/code-quality-checks package, Ref: DEV-567
- Move npm config from root to theme directory, Ref: DEV-567
- Restructure assets to src/ and dist/ structure, Ref: DEV-567
- Fix SVG paths in PHP files after assets restructure, Ref: DEV-567
- Fix Swup v4 API compatibility (hooks.on instead of on), Ref: DEV-567
- Add native Gutenberg blocks for pricing page, Ref: DEV-567
- Downgrade stylelint to v15 for compatibility, Ref: DEV-567

### 7.0.0: 2025-09-17

- Open dude.fi CHANGELOG.md
- Caniuse-lite: Update browserslist db to @latest
- New reference filtering, Ref: KVLT-2
- Change reference main page slug to 'referenssit', Ref: DEV-496
