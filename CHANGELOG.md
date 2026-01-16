### 7.0.7: 2026-01-16

* Update pricing page background gradient to match Figma (linear + radial layers), Ref: DEV-567
* Fix accordion click handler to work with nested elements using `closest()`, Ref: DEV-567

### 7.0.6: 2026-01-15

* Restructure pricing-category with proper wrapper elements (category-info, category-items), Ref: DEV-567
* Align pricing-item editor HTML structure with front-end output, Ref: DEV-567

### 7.0.5: 2026-01-14

* Fix button styles to prevent global style interference, Ref: DEV-567
* Fix all stylelint warnings across codebase, Ref: DEV-567
* Silence Sass deprecation warnings and fix placeholder pseudo-element, Ref: DEV-567
* Fix pricing-category save function to include section wrapper, Ref: DEV-567
* Add blocks SCSS to stylelint scope, Ref: DEV-567
* Update pricing-category grid layout (470px/65px gap), Ref: DEV-567
* Implement accessible accordion pattern for pricing blocks, Ref: DEV-567

### 7.0.4: 2026-01-13

* Fix pricing-hero h2 font-size and add editor styles, Ref: DEV-567

### 7.0.3: 2026-01-12

* Convert pricing blocks to static and fix editor/front-end style consistency, Ref: DEV-567

### 7.0.2: 2026-01-09

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

* Set up husky pre-commit hooks for code quality checks, Ref: DEV-567
* Implement @digitoimistodude/code-quality-checks package, Ref: DEV-567
* Move npm config from root to theme directory, Ref: DEV-567
* Restructure assets to src/ and dist/ structure, Ref: DEV-567
* Fix SVG paths in PHP files after assets restructure, Ref: DEV-567
* Fix Swup v4 API compatibility (hooks.on instead of on), Ref: DEV-567
* Add native Gutenberg blocks for pricing page, Ref: DEV-567
* Downgrade stylelint to v15 for compatibility, Ref: DEV-567

### 7.0.0: 2025-09-17

* Open dude.fi CHANGELOG.md
* Caniuse-lite: Update browserslist db to @latest
* New reference filtering, Ref: KVLT-2
* Change reference main page slug to 'referenssit', Ref: DEV-496
