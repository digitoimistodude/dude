// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"9r0qo":[function(require,module,exports,__globalThis) {
/* eslint-disable max-len, no-underscore-dangle, no-param-reassign, no-unused-vars, no-new, new-cap */ // Import modules
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _reframeJs = require("reframe.js");
var _reframeJsDefault = parcelHelpers.interopDefault(_reframeJs);
var _swup = require("swup");
var _swupDefault = parcelHelpers.interopDefault(_swup);
var _scriptsPlugin = require("@swup/scripts-plugin");
var _scriptsPluginDefault = parcelHelpers.interopDefault(_scriptsPlugin);
var _bodyClassPlugin = require("@swup/body-class-plugin");
var _bodyClassPluginDefault = parcelHelpers.interopDefault(_bodyClassPlugin);
// eslint-disable-next-line no-unused-vars
var _whatInput = require("what-input");
var _whatInputDefault = parcelHelpers.interopDefault(_whatInput);
var _localization = require("./modules/localization");
var _localizationDefault = parcelHelpers.interopDefault(_localization);
var _externalLink = require("./modules/external-link");
var _carousels = require("./modules/carousels");
var _carouselsDefault = parcelHelpers.interopDefault(_carousels);
var _anchors = require("./modules/anchors");
var _anchorsDefault = parcelHelpers.interopDefault(_anchors);
var _top = require("./modules/top");
var _topDefault = parcelHelpers.interopDefault(_top);
var _moveToTop = require("./modules/move-to-top");
var _moveToTopDefault = parcelHelpers.interopDefault(_moveToTop);
var _accordion = require("./modules/accordion");
var _accordionDefault = parcelHelpers.interopDefault(_accordion);
var _navigation = require("./modules/navigation");
var _navigationDefault = parcelHelpers.interopDefault(_navigation);
var _tabs = require("./modules/tabs");
var _tabsDefault = parcelHelpers.interopDefault(_tabs);
var _embeds = require("./modules/embeds");
var _embedsDefault = parcelHelpers.interopDefault(_embeds);
var _scrollableDivShadows = require("./modules/scrollable-div-shadows");
var _scrollableDivShadowsDefault = parcelHelpers.interopDefault(_scrollableDivShadows);
var _darkModeFooterToggle = require("./modules/dark-mode-footer-toggle");
var _darkModeFooterToggleDefault = parcelHelpers.interopDefault(_darkModeFooterToggle);
var _train = require("./modules/train");
var _trainDefault = parcelHelpers.interopDefault(_train);
var _showreel = require("./modules/showreel"); // Note: Reference videos also use this module
var _showreelDefault = parcelHelpers.interopDefault(_showreel);
var _100Vh = require("./modules/100vh");
var _100VhDefault = parcelHelpers.interopDefault(_100Vh);
var _404 = require("./modules/404");
var _404Default = parcelHelpers.interopDefault(_404);
var _swupHelpers = require("./modules/swup-helpers");
var _swupHelpersDefault = parcelHelpers.interopDefault(_swupHelpers);
var _formHelpers = require("./modules/form-helpers");
var _formHelpersDefault = parcelHelpers.interopDefault(_formHelpers);
var _a11YSkipLink = require("./modules/a11y-skip-link");
var _a11YSkipLinkDefault = parcelHelpers.interopDefault(_a11YSkipLink);
var _upkeepLanding = require("./modules/upkeep-landing");
var _upkeepLandingDefault = parcelHelpers.interopDefault(_upkeepLanding);
var _referenceFilters = require("./modules/reference-filters");
var _referenceFiltersDefault = parcelHelpers.interopDefault(_referenceFilters);
var _leadPopup = require("./modules/lead-popup");
var _leadPopupDefault = parcelHelpers.interopDefault(_leadPopup);
var _contactFormModal = require("./modules/contact-form-modal");
var _contactFormModalDefault = parcelHelpers.interopDefault(_contactFormModal);
var _swupNativeBlockStylesHandler = require("./modules/swup-native-block-styles-handler");
var _swupNativeBlockStylesHandlerDefault = parcelHelpers.interopDefault(_swupNativeBlockStylesHandler);
// Init Swup SPA-like transitions
const swup = new (0, _swupDefault.default)({
    containers: [
        '#page'
    ],
    animationSelector: '[class*="has-transition-"]',
    plugins: [
        new (0, _scriptsPluginDefault.default)({
            head: true,
            body: true,
            optin: true
        }),
        new (0, _bodyClassPluginDefault.default)()
    ]
});
function init(target, args) {
    // Define Javascript is active by changing the body class
    document.body.classList.remove('no-js');
    document.body.classList.add('js');
    // Init move to top on page change
    (0, _moveToTopDefault.default)();
    // Init site navigation
    (0, _navigationDefault.default)();
    // Init carousels for testimonials and image galleries
    // Timeout needed for Firefox and iOS Safari for some modules
    setTimeout(()=>{
        (0, _carouselsDefault.default)();
        // Init upkeep landing page
        (0, _upkeepLandingDefault.default)();
        // Init reference filters
        (0, _referenceFiltersDefault.default)();
    }, 1000);
    // Init all possible anchor links
    (0, _anchorsDefault.default)();
    // Init accordions
    (0, _accordionDefault.default)();
    // Init tabs
    (0, _tabsDefault.default)();
    // Init scrollable divs
    (0, _scrollableDivShadowsDefault.default)();
    // Init showreel (also handles reference videos)
    (0, _showreelDefault.default)();
    // Init dark mode toggle
    (0, _darkModeFooterToggleDefault.default)();
    // Init auto scrolling train
    (0, _trainDefault.default)();
    // Init back to top button
    (0, _topDefault.default)();
    // Init external link labels
    (0, _externalLink.initExternalLinkLabels)();
    // Init 100vh mobile fix
    (0, _100VhDefault.default)();
    // Style external links automatically based on their content
    (0, _externalLink.styleExternalLinks)();
    // Init 404 easter egg
    (0, _404Default.default)();
    // Init Swup helpers
    (0, _swupHelpersDefault.default)();
    // Init form helpers
    (0, _formHelpersDefault.default)();
    // Init skip links
    (0, _a11YSkipLinkDefault.default)();
    // Init Twitter and Instagram embeds in blog posts
    (0, _embedsDefault.default)();
    // Init lead generation popup
    (0, _leadPopupDefault.default)();
    // Init contact form modal
    (0, _contactFormModalDefault.default)();
    // Fit video embeds to container
    if (window.innerWidth < 768) (0, _reframeJsDefault.default)('.wp-has-aspect-ratio iframe, .article-content iframe');
}
// When document has been completely loaded
document.addEventListener('DOMContentLoaded', init);
// Reload native block styles before content replacement
swup.hooks.on('content:replace', ()=>{
    (0, _swupNativeBlockStylesHandlerDefault.default)();
    init();
}); // Do things after page has loaded

},{"reframe.js":"hEZAB","swup":"iRdVJ","@swup/scripts-plugin":"iagUj","@swup/body-class-plugin":"iFEn1","what-input":"h3dfI","./modules/localization":"u9PGe","./modules/external-link":"bBmcu","./modules/carousels":"iQ5qa","./modules/anchors":"ii0ro","./modules/top":"3c6Rk","./modules/move-to-top":"gdxwz","./modules/accordion":"l5cLh","./modules/navigation":"ar197","./modules/tabs":"aOjaF","./modules/embeds":"at2Oa","./modules/scrollable-div-shadows":"jOwXU","./modules/dark-mode-footer-toggle":"dvG9i","./modules/train":"1GSMc","./modules/showreel":"15rhE","./modules/100vh":"ddxgX","./modules/404":"fcn3C","./modules/swup-helpers":"5uM78","./modules/form-helpers":"8ih9q","./modules/a11y-skip-link":"bp0dL","./modules/upkeep-landing":"4v9Yg","./modules/reference-filters":"fubJG","./modules/lead-popup":"gEwzs","./modules/contact-form-modal":"3C50E","./modules/swup-native-block-styles-handler":"cpx8h","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"hEZAB":[function(require,module,exports,__globalThis) {
/**
  reframe.js - Reframe.js: responsive iframes for embedded content
  @version v4.0.2
  @link https://github.com/yowainwright/reframe.ts#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (http://jeffry.in)
  @license MIT
**/ /**
 * REFRAME.TS 🖼
 * ---
 * @param target
 * @param cName
 * @summary defines the height/width ratio of the targeted <element>
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>reframe);
function reframe(target, cName) {
    var _a, _b;
    var frames = typeof target === 'string' ? document.querySelectorAll(target) : target;
    var c = cName || 'js-reframe';
    if (!('length' in frames)) frames = [
        frames
    ];
    for(var i = 0; i < frames.length; i += 1){
        var frame = frames[i];
        var hasClass = frame.className.split(' ').indexOf(c) !== -1;
        if (hasClass || frame.style.width.indexOf('%') > -1) return;
        // get height width attributes
        var height = frame.getAttribute('height') || frame.offsetHeight;
        var width = frame.getAttribute('width') || frame.offsetWidth;
        var heightNumber = typeof height === 'string' ? parseInt(height) : height;
        var widthNumber = typeof width === 'string' ? parseInt(width) : width;
        // general targeted <element> sizes
        var padding = heightNumber / widthNumber * 100;
        // created element <wrapper> of general reframed item
        // => set necessary styles of created element <wrapper>
        var div = document.createElement('div');
        div.className = c;
        var divStyles = div.style;
        divStyles.position = 'relative';
        divStyles.width = '100%';
        divStyles.paddingTop = "".concat(padding, "%");
        // set necessary styles of targeted <element>
        var frameStyle = frame.style;
        frameStyle.position = 'absolute';
        frameStyle.width = '100%';
        frameStyle.height = '100%';
        frameStyle.left = '0';
        frameStyle.top = '0';
        // reframe targeted <element>
        (_a = frame.parentNode) === null || _a === void 0 || _a.insertBefore(div, frame);
        (_b = frame.parentNode) === null || _b === void 0 || _b.removeChild(frame);
        div.appendChild(frame);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"j7FRh":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iRdVJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Location", ()=>a);
parcelHelpers.export(exports, "classify", ()=>n);
parcelHelpers.export(exports, "createHistoryRecord", ()=>r);
parcelHelpers.export(exports, "default", ()=>z);
parcelHelpers.export(exports, "delegateEvent", ()=>s);
parcelHelpers.export(exports, "forceReflow", ()=>g);
parcelHelpers.export(exports, "getContextualAttr", ()=>w);
parcelHelpers.export(exports, "getCurrentUrl", ()=>o);
parcelHelpers.export(exports, "isPromise", ()=>p);
parcelHelpers.export(exports, "matchPath", ()=>c);
parcelHelpers.export(exports, "nextTick", ()=>f);
parcelHelpers.export(exports, "query", ()=>d);
parcelHelpers.export(exports, "queryAll", ()=>m);
parcelHelpers.export(exports, "runAsPromise", ()=>v);
parcelHelpers.export(exports, "updateHistoryRecord", ()=>i);
var _delegateIt = require("delegate-it");
var _delegateItDefault = parcelHelpers.interopDefault(_delegateIt);
var _pathToRegexp = require("path-to-regexp");
const n = (t, e)=>String(t).toLowerCase().replace(/[\s/_.]+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+|-+$/g, "") || e || "", o = ({ hash: t } = {})=>window.location.pathname + window.location.search + (t ? window.location.hash : ""), r = (t, e = {})=>{
    const n = {
        url: t = t || o({
            hash: !0
        }),
        random: Math.random(),
        source: "swup",
        ...e
    };
    window.history.pushState(n, "", t);
}, i = (t = null, e = {})=>{
    t = t || o({
        hash: !0
    });
    const n = {
        ...window.history.state || {},
        url: t,
        random: Math.random(),
        source: "swup",
        ...e
    };
    window.history.replaceState(n, "", t);
}, s = (e, n, o, r)=>{
    const i = new AbortController;
    return r = {
        ...r,
        signal: i.signal
    }, (0, _delegateItDefault.default)(e, n, o, r), {
        destroy: ()=>i.abort()
    };
};
class a extends URL {
    constructor(t, e = document.baseURI){
        super(t.toString(), e), Object.setPrototypeOf(this, a.prototype);
    }
    get url() {
        return this.pathname + this.search;
    }
    static fromElement(t) {
        const e = t.getAttribute("href") || t.getAttribute("xlink:href") || "";
        return new a(e);
    }
    static fromUrl(t) {
        return new a(t);
    }
}
const c = (t, n)=>{
    Array.isArray(t) && !t.length && (t = "");
    try {
        return (0, _pathToRegexp.match)(t, n);
    } catch (e) {
        throw new Error(`[swup] Error parsing path "${String(t)}":\n${String(e)}`);
    }
}, l = function(t, e = {}) {
    try {
        const o = this;
        function n(n) {
            const { status: i, url: s } = u;
            return Promise.resolve(u.text()).then(function(n) {
                if (500 === i) throw o.hooks.call("fetch:error", r, {
                    status: i,
                    response: u,
                    url: s
                }), new h(`Server error: ${s}`, {
                    status: i,
                    url: s
                });
                if (!n) throw new h(`Empty response: ${s}`, {
                    status: i,
                    url: s
                });
                const { url: c } = a.fromUrl(s), l = {
                    url: c,
                    html: n
                };
                return !r.cache.write || e.method && "GET" !== e.method || t !== c || o.cache.set(l.url, l), l;
            });
        }
        t = a.fromUrl(t).url;
        const { visit: r = o.visit } = e, i = {
            ...o.options.requestHeaders,
            ...e.headers
        }, s = e.timeout ?? o.options.timeout, c = new AbortController, { signal: l } = c;
        e = {
            ...e,
            headers: i,
            signal: l
        };
        let u, d = !1, m = null;
        s && s > 0 && (m = setTimeout(()=>{
            d = !0, c.abort("timeout");
        }, s));
        const f = function(n, i) {
            try {
                var s = Promise.resolve(o.hooks.call("fetch:request", r, {
                    url: t,
                    options: e
                }, (t, { url: e, options: n })=>fetch(e, n))).then(function(t) {
                    u = t, m && clearTimeout(m);
                });
            } catch (t) {
                return i(t);
            }
            return s && s.then ? s.then(void 0, i) : s;
        }(0, function(e) {
            if (d) throw o.hooks.call("fetch:timeout", r, {
                url: t
            }), new h(`Request timed out: ${t}`, {
                url: t,
                timedOut: d
            });
            if ("AbortError" === e?.name || l.aborted) throw new h(`Request aborted: ${t}`, {
                url: t,
                aborted: !0
            });
            throw e;
        });
        return Promise.resolve(f && f.then ? f.then(n) : n());
    } catch (p) {
        return Promise.reject(p);
    }
};
class h extends Error {
    constructor(t, e){
        super(t), this.url = void 0, this.status = void 0, this.aborted = void 0, this.timedOut = void 0, this.name = "FetchError", this.url = e.url, this.status = e.status, this.aborted = e.aborted || !1, this.timedOut = e.timedOut || !1;
    }
}
class u {
    constructor(t){
        this.swup = void 0, this.pages = new Map, this.swup = t;
    }
    get size() {
        return this.pages.size;
    }
    get all() {
        const t = new Map;
        return this.pages.forEach((e, n)=>{
            t.set(n, {
                ...e
            });
        }), t;
    }
    has(t) {
        return this.pages.has(this.resolve(t));
    }
    get(t) {
        const e = this.pages.get(this.resolve(t));
        return e ? {
            ...e
        } : e;
    }
    set(t, e) {
        t = this.resolve(t), e = {
            ...e,
            url: t
        }, this.pages.set(t, e), this.swup.hooks.callSync("cache:set", void 0, {
            page: e
        });
    }
    update(t, e) {
        t = this.resolve(t);
        const n = {
            ...this.get(t),
            ...e,
            url: t
        };
        this.pages.set(t, n);
    }
    delete(t) {
        this.pages.delete(this.resolve(t));
    }
    clear() {
        this.pages.clear(), this.swup.hooks.callSync("cache:clear", void 0, void 0);
    }
    prune(t) {
        this.pages.forEach((e, n)=>{
            t(n, e) && this.delete(n);
        });
    }
    resolve(t) {
        const { url: e } = a.fromUrl(t);
        return this.swup.resolveUrl(e);
    }
}
const d = (t, e = document)=>e.querySelector(t), m = (t, e = document)=>Array.from(e.querySelectorAll(t)), f = ()=>new Promise((t)=>{
        requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                t();
            });
        });
    });
function p(t) {
    return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then;
}
function v(t, e = []) {
    return new Promise((n, o)=>{
        const r = t(...e);
        p(r) ? r.then(n, o) : n(r);
    });
}
function g(t) {
    t = t || document.body, t?.getBoundingClientRect();
}
function w(t, e) {
    const n = t?.closest(`[${e}]`);
    return n?.hasAttribute(e) ? n?.getAttribute(e) || !0 : void 0;
}
class y {
    constructor(t){
        this.swup = void 0, this.swupClasses = [
            "to-",
            "is-changing",
            "is-rendering",
            "is-popstate",
            "is-animating",
            "is-leaving"
        ], this.swup = t;
    }
    get selectors() {
        const { scope: t } = this.swup.visit.animation;
        return "containers" === t ? this.swup.visit.containers : "html" === t ? [
            "html"
        ] : Array.isArray(t) ? t : [];
    }
    get selector() {
        return this.selectors.join(",");
    }
    get targets() {
        return this.selector.trim() ? m(this.selector) : [];
    }
    add() {
        this.targets.forEach((t)=>t.classList.add(...[].slice.call(arguments)));
    }
    remove() {
        this.targets.forEach((t)=>t.classList.remove(...[].slice.call(arguments)));
    }
    clear() {
        this.targets.forEach((t)=>{
            const e = t.className.split(" ").filter((t)=>this.isSwupClass(t));
            t.classList.remove(...e);
        });
    }
    isSwupClass(t) {
        return this.swupClasses.some((e)=>t.startsWith(e));
    }
}
class k {
    constructor(t, e){
        this.id = void 0, this.state = void 0, this.from = void 0, this.to = void 0, this.containers = void 0, this.animation = void 0, this.trigger = void 0, this.cache = void 0, this.history = void 0, this.scroll = void 0, this.meta = void 0;
        const { to: n, from: o, hash: r, el: i, event: s } = e;
        this.id = Math.random(), this.state = 1, this.from = {
            url: o ?? t.location.url,
            hash: t.location.hash
        }, this.to = {
            url: n,
            hash: r
        }, this.containers = t.options.containers, this.animation = {
            animate: !0,
            wait: !1,
            name: void 0,
            native: t.options.native,
            scope: t.options.animationScope,
            selector: t.options.animationSelector
        }, this.trigger = {
            el: i,
            event: s
        }, this.cache = {
            read: t.options.cache,
            write: t.options.cache
        }, this.history = {
            action: "push",
            popstate: !1,
            direction: void 0
        }, this.scroll = {
            reset: !0,
            target: void 0
        }, this.meta = {};
    }
    advance(t) {
        this.state < t && (this.state = t);
    }
    abort() {
        this.state = 8;
    }
    get done() {
        return this.state >= 7;
    }
}
function P(t) {
    return new k(this, t);
}
const b = "undefined" != typeof Symbol ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
function S(t, e, n) {
    if (!t.s) {
        if (n instanceof E) {
            if (!n.s) return void (n.o = S.bind(null, t, e));
            1 & e && (e = n.s), n = n.v;
        }
        if (n && n.then) return void n.then(S.bind(null, t, e), S.bind(null, t, 2));
        t.s = e, t.v = n;
        const o = t.o;
        o && o(t);
    }
}
const E = /*#__PURE__*/ function() {
    function t() {}
    return t.prototype.then = function(e, n) {
        const o = new t, r = this.s;
        if (r) {
            const t = 1 & r ? e : n;
            if (t) {
                try {
                    S(o, 1, t(this.v));
                } catch (t) {
                    S(o, 2, t);
                }
                return o;
            }
            return this;
        }
        return this.o = function(t) {
            try {
                const r = t.v;
                1 & t.s ? S(o, 1, e ? e(r) : r) : n ? S(o, 1, n(r)) : S(o, 2, r);
            } catch (t) {
                S(o, 2, t);
            }
        }, o;
    }, t;
}();
function C(t) {
    return t instanceof E && 1 & t.s;
}
class U {
    constructor(t){
        this.swup = void 0, this.registry = new Map, this.hooks = [
            "animation:out:start",
            "animation:out:await",
            "animation:out:end",
            "animation:in:start",
            "animation:in:await",
            "animation:in:end",
            "animation:skip",
            "cache:clear",
            "cache:set",
            "content:replace",
            "content:scroll",
            "enable",
            "disable",
            "fetch:request",
            "fetch:error",
            "fetch:timeout",
            "history:popstate",
            "link:click",
            "link:self",
            "link:anchor",
            "link:newtab",
            "page:load",
            "page:view",
            "scroll:top",
            "scroll:anchor",
            "visit:start",
            "visit:transition",
            "visit:abort",
            "visit:end"
        ], this.swup = t, this.init();
    }
    init() {
        this.hooks.forEach((t)=>this.create(t));
    }
    create(t) {
        this.registry.has(t) || this.registry.set(t, new Map);
    }
    exists(t) {
        return this.registry.has(t);
    }
    get(t) {
        const e = this.registry.get(t);
        if (e) return e;
        console.error(`Unknown hook '${t}'`);
    }
    clear() {
        this.registry.forEach((t)=>t.clear());
    }
    on(t, e, n = {}) {
        const o = this.get(t);
        if (!o) return console.warn(`Hook '${t}' not found.`), ()=>{};
        const r = {
            ...n,
            id: o.size + 1,
            hook: t,
            handler: e
        };
        return o.set(e, r), ()=>this.off(t, e);
    }
    before(t, e, n = {}) {
        return this.on(t, e, {
            ...n,
            before: !0
        });
    }
    replace(t, e, n = {}) {
        return this.on(t, e, {
            ...n,
            replace: !0
        });
    }
    once(t, e, n = {}) {
        return this.on(t, e, {
            ...n,
            once: !0
        });
    }
    off(t, e) {
        const n = this.get(t);
        n && e ? n.delete(e) || console.warn(`Handler for hook '${t}' not found.`) : n && n.clear();
    }
    call(t, e, n, o) {
        try {
            const r = this, [i, s, a] = r.parseCallArgs(t, e, n, o), { before: c, handler: l, after: h } = r.getHandlers(t, a);
            return Promise.resolve(r.run(c, i, s)).then(function() {
                return Promise.resolve(r.run(l, i, s, !0)).then(function([e]) {
                    return Promise.resolve(r.run(h, i, s)).then(function() {
                        return r.dispatchDomEvent(t, i, s), e;
                    });
                });
            });
        } catch (t) {
            return Promise.reject(t);
        }
    }
    callSync(t, e, n, o) {
        const [r, i, s] = this.parseCallArgs(t, e, n, o), { before: a, handler: c, after: l } = this.getHandlers(t, s);
        this.runSync(a, r, i);
        const [h] = this.runSync(c, r, i, !0);
        return this.runSync(l, r, i), this.dispatchDomEvent(t, r, i), h;
    }
    parseCallArgs(t, e, n, o) {
        return e instanceof k || "object" != typeof e && "function" != typeof n ? [
            e,
            n,
            o
        ] : [
            void 0,
            e,
            n
        ];
    }
    run(t, e, n, o = !1) {
        try {
            let r;
            const i = this;
            void 0 === e && (e = i.swup.visit);
            const s = [], a = function(t, e, n) {
                if ("function" == typeof t[b]) {
                    var o, r, i, s = t[b]();
                    if (function t(a) {
                        try {
                            for(; !((o = s.next()).done || n && n());)if ((a = e(o.value)) && a.then) {
                                if (!C(a)) return void a.then(t, i || (i = S.bind(null, r = new E, 2)));
                                a = a.v;
                            }
                            r ? S(r, 1, a) : r = a;
                        } catch (t) {
                            S(r || (r = new E), 2, t);
                        }
                    }(), s.return) {
                        var a = function(t) {
                            try {
                                o.done || s.return();
                            } catch (t) {}
                            return t;
                        };
                        if (r && r.then) return r.then(a, function(t) {
                            throw a(t);
                        });
                        a();
                    }
                    return r;
                }
                if (!("length" in t)) throw new TypeError("Object is not iterable");
                for(var c = [], l = 0; l < t.length; l++)c.push(t[l]);
                return function(t, e, n) {
                    var o, r, i = -1;
                    return function s(a) {
                        try {
                            for(; ++i < t.length && (!n || !n());)if ((a = e(i)) && a.then) {
                                if (!C(a)) return void a.then(s, r || (r = S.bind(null, o = new E, 2)));
                                a = a.v;
                            }
                            o ? S(o, 1, a) : o = a;
                        } catch (t) {
                            S(o || (o = new E), 2, t);
                        }
                    }(), o;
                }(c, function(t) {
                    return e(c[t]);
                }, n);
            }(t, function({ hook: t, handler: r, defaultHandler: a, once: c }) {
                if (!e?.done) return c && i.off(t, r), function(t, o) {
                    try {
                        var i = Promise.resolve(v(r, [
                            e,
                            n,
                            a
                        ])).then(function(t) {
                            s.push(t);
                        });
                    } catch (t) {
                        return o(t);
                    }
                    return i && i.then ? i.then(void 0, o) : i;
                }(0, function(e) {
                    if (o) throw e;
                    console.error(`Error in hook '${t}':`, e);
                });
            }, function() {
                return r;
            });
            return Promise.resolve(a && a.then ? a.then(function(t) {
                return r ? t : s;
            }) : r ? a : s);
        } catch (t) {
            return Promise.reject(t);
        }
    }
    runSync(t, e = this.swup.visit, n, o = !1) {
        const r = [];
        for (const { hook: i, handler: s, defaultHandler: a, once: c } of t)if (!e?.done) {
            c && this.off(i, s);
            try {
                const t = s(e, n, a);
                r.push(t), p(t) && console.warn(`Swup will not await Promises in handler for synchronous hook '${i}'.`);
            } catch (t) {
                if (o) throw t;
                console.error(`Error in hook '${i}':`, t);
            }
        }
        return r;
    }
    getHandlers(t, e) {
        const n = this.get(t);
        if (!n) return {
            found: !1,
            before: [],
            handler: [],
            after: [],
            replaced: !1
        };
        const o = Array.from(n.values()), r = this.sortRegistrations, i = o.filter(({ before: t, replace: e })=>t && !e).sort(r), s = o.filter(({ replace: t })=>t).filter((t)=>!0).sort(r), a = o.filter(({ before: t, replace: e })=>!t && !e).sort(r), c = s.length > 0;
        let l = [];
        if (e && (l = [
            {
                id: 0,
                hook: t,
                handler: e
            }
        ], c)) {
            const n = s.length - 1, { handler: o, once: r } = s[n], i = (t)=>{
                const n = s[t - 1];
                return n ? (e, o)=>n.handler(e, o, i(t - 1)) : e;
            };
            l = [
                {
                    id: 0,
                    hook: t,
                    once: r,
                    handler: o,
                    defaultHandler: i(n)
                }
            ];
        }
        return {
            found: !0,
            before: i,
            handler: l,
            after: a,
            replaced: c
        };
    }
    sortRegistrations(t, e) {
        return (t.priority ?? 0) - (e.priority ?? 0) || t.id - e.id || 0;
    }
    dispatchDomEvent(t, e, n) {
        if (e?.done) return;
        const o = {
            hook: t,
            args: n,
            visit: e || this.swup.visit
        };
        document.dispatchEvent(new CustomEvent("swup:any", {
            detail: o,
            bubbles: !0
        })), document.dispatchEvent(new CustomEvent(`swup:${t}`, {
            detail: o,
            bubbles: !0
        }));
    }
    parseName(t) {
        const [e, ...n] = t.split(".");
        return [
            e,
            n.reduce((t, e)=>({
                    ...t,
                    [e]: !0
                }), {})
        ];
    }
}
const $ = (t)=>{
    if (t && "#" === t.charAt(0) && (t = t.substring(1)), !t) return null;
    const e = decodeURIComponent(t);
    let n = document.getElementById(t) || document.getElementById(e) || d(`a[name='${CSS.escape(t)}']`) || d(`a[name='${CSS.escape(e)}']`);
    return n || "top" !== t || (n = document.body), n;
}, x = function({ selector: t, elements: e }) {
    try {
        if (!1 === t && !e) return Promise.resolve();
        let n = [];
        if (e) n = Array.from(e);
        else if (t && (n = m(t, document.body), !n.length)) return console.warn(`[swup] No elements found matching animationSelector \`${t}\``), Promise.resolve();
        const o = n.map((t)=>(function(t) {
                const { type: e, timeout: n, propCount: o } = function(t) {
                    const e = window.getComputedStyle(t), n = j(e, `${A}Delay`), o = j(e, `${A}Duration`), r = V(n, o), i = j(e, `${H}Delay`), s = j(e, `${H}Duration`), a = V(i, s), c = Math.max(r, a), l = c > 0 ? r > a ? A : H : null;
                    return {
                        type: l,
                        timeout: c,
                        propCount: l ? l === A ? o.length : s.length : 0
                    };
                }(t);
                return !(!e || !n) && new Promise((r)=>{
                    const i = `${e}end`, s = performance.now();
                    let a = 0;
                    const c = ()=>{
                        t.removeEventListener(i, l), r();
                    }, l = (e)=>{
                        e.target === t && ((performance.now() - s) / 1e3 < e.elapsedTime || ++a >= o && c());
                    };
                    setTimeout(()=>{
                        a < o && c();
                    }, n + 1), t.addEventListener(i, l);
                });
            })(t));
        return o.filter(Boolean).length > 0 ? Promise.resolve(Promise.all(o)).then(function() {}) : (t && console.warn(`[swup] No CSS animation duration defined on elements matching \`${t}\``), Promise.resolve());
    } catch (t) {
        return Promise.reject(t);
    }
}, A = "transition", H = "animation";
function j(t, e) {
    return (t[e] || "").split(", ");
}
function V(t, e) {
    for(; t.length < e.length;)t = t.concat(t);
    return Math.max(...e.map((e, n)=>I(e) + I(t[n])));
}
function I(t) {
    return 1e3 * parseFloat(t);
}
const L = function(t, e = {}) {
    try {
        let s;
        const c = this;
        function o(o) {
            if (s) return o;
            c.navigating = !0, c.visit = t;
            const { el: l } = t.trigger;
            e.referrer = e.referrer || c.location.url, !1 === e.animate && (t.animation.animate = !1), t.animation.animate || c.classes.clear();
            const h = e.history || w(l, "data-swup-history");
            "string" == typeof h && [
                "push",
                "replace"
            ].includes(h) && (t.history.action = h);
            const u = e.animation || w(l, "data-swup-animation");
            return "string" == typeof u && (t.animation.name = u), t.meta = e.meta || {}, "object" == typeof e.cache ? (t.cache.read = e.cache.read ?? t.cache.read, t.cache.write = e.cache.write ?? t.cache.write) : void 0 !== e.cache && (t.cache = {
                read: !!e.cache,
                write: !!e.cache
            }), delete e.cache, function(o, s) {
                try {
                    var l = function(o, s) {
                        try {
                            var l = Promise.resolve(c.hooks.call("visit:start", t, void 0)).then(function() {
                                function o() {
                                    if (!t.done) return Promise.resolve(c.hooks.call("visit:transition", t, void 0, function() {
                                        try {
                                            let n;
                                            function e(e) {
                                                return n ? e : (t.advance(4), Promise.resolve(c.animatePageOut(t)).then(function() {
                                                    function e() {
                                                        return Promise.resolve(c.animatePageIn(t)).then(function() {});
                                                    }
                                                    const n = function() {
                                                        if (t.animation.native && document.startViewTransition) return Promise.resolve(document.startViewTransition(function() {
                                                            try {
                                                                const e = c.renderPage;
                                                                return Promise.resolve(s).then(function(n) {
                                                                    return Promise.resolve(e.call(c, t, n));
                                                                });
                                                            } catch (t) {
                                                                return Promise.reject(t);
                                                            }
                                                        }).finished).then(function() {});
                                                        {
                                                            const e = c.renderPage;
                                                            return Promise.resolve(s).then(function(n) {
                                                                return Promise.resolve(e.call(c, t, n)).then(function() {});
                                                            });
                                                        }
                                                    }();
                                                    return n && n.then ? n.then(e) : e();
                                                }));
                                            }
                                            const o = function() {
                                                if (!t.animation.animate) return Promise.resolve(c.hooks.call("animation:skip", void 0)).then(function() {
                                                    const e = c.renderPage;
                                                    return Promise.resolve(s).then(function(o) {
                                                        return Promise.resolve(e.call(c, t, o)).then(function() {
                                                            n = 1;
                                                        });
                                                    });
                                                });
                                            }();
                                            return Promise.resolve(o && o.then ? o.then(e) : e(o));
                                        } catch (r) {
                                            return Promise.reject(r);
                                        }
                                    })).then(function() {
                                        if (!t.done) return Promise.resolve(c.hooks.call("visit:end", t, void 0, ()=>c.classes.clear())).then(function() {
                                            t.state = 7, c.navigating = !1, c.onVisitEnd && (c.onVisitEnd(), c.onVisitEnd = void 0);
                                        });
                                    });
                                }
                                t.state = 3;
                                const s = c.hooks.call("page:load", t, {
                                    options: e
                                }, function(t, e) {
                                    try {
                                        function n(t) {
                                            return e.page = t, e.cache = !!o, e.page;
                                        }
                                        let o;
                                        return t.cache.read && (o = c.cache.get(t.to.url)), Promise.resolve(o ? n(o) : Promise.resolve(c.fetchPage(t.to.url, e.options)).then(n));
                                    } catch (r) {
                                        return Promise.reject(r);
                                    }
                                });
                                s.then(({ html: e })=>{
                                    t.advance(5), t.to.html = e, t.to.document = (new DOMParser).parseFromString(e, "text/html");
                                });
                                const l = t.to.url + t.to.hash;
                                t.history.popstate || ("replace" === t.history.action || t.to.url === c.location.url ? i(l) : (c.currentHistoryIndex++, r(l, {
                                    index: c.currentHistoryIndex
                                }))), c.location = a.fromUrl(l), t.history.popstate && c.classes.add("is-popstate"), t.animation.name && c.classes.add(`to-${n(t.animation.name)}`);
                                const h = function() {
                                    if (t.animation.wait) return Promise.resolve(s).then(function() {});
                                }();
                                return h && h.then ? h.then(o) : o();
                            });
                        } catch (t) {
                            return s(t);
                        }
                        return l && l.then ? l.then(void 0, s) : l;
                    }(0, function(e) {
                        e && !e?.aborted ? (t.state = 9, console.error(e), c.options.skipPopStateHandling = ()=>(window.location.assign(t.to.url + t.to.hash), !0), window.history.back()) : t.state = 8;
                    });
                } catch (t) {
                    return s(!0, t);
                }
                return l && l.then ? l.then(s.bind(null, !1), s.bind(null, !0)) : s(!1, l);
            }(0, function(e, n) {
                if (delete t.to.document, e) throw n;
                return n;
            });
        }
        const l = function() {
            if (c.navigating) return function() {
                if (!(c.visit.state >= 6)) return Promise.resolve(c.hooks.call("visit:abort", c.visit, void 0)).then(function() {
                    delete c.visit.to.document, c.visit.state = 8;
                });
                t.state = 2, c.onVisitEnd = ()=>c.performNavigation(t, e), s = 1;
            }();
        }();
        return Promise.resolve(l && l.then ? l.then(o) : o(l));
    } catch (h) {
        return Promise.reject(h);
    }
};
function T(t, e = {}, n = {}) {
    if ("string" != typeof t) throw new Error("swup.navigate() requires a URL parameter");
    if (this.shouldIgnoreVisit(t, {
        el: n.el,
        event: n.event
    })) return void window.location.assign(t);
    const { url: o, hash: r } = a.fromUrl(t), i = this.createVisit({
        ...n,
        to: o,
        hash: r
    });
    this.performNavigation(i, e);
}
const q = function(t) {
    try {
        const e = this;
        return Promise.resolve(e.hooks.call("animation:out:start", t, void 0, ()=>{
            e.classes.add("is-changing", "is-animating", "is-leaving");
        })).then(function() {
            return Promise.resolve(e.hooks.call("animation:out:await", t, {
                skip: !1
            }, (t, { skip: n })=>{
                if (!n) return e.awaitAnimations({
                    selector: t.animation.selector
                });
            })).then(function() {
                return Promise.resolve(e.hooks.call("animation:out:end", t, void 0)).then(function() {});
            });
        });
    } catch (t) {
        return Promise.reject(t);
    }
}, R = function(t) {
    const e = t.to.document;
    if (!e) return !1;
    const n = e.querySelector("title")?.innerText || "";
    document.title = n;
    const o = m('[data-swup-persist]:not([data-swup-persist=""])'), r = t.containers.map((t)=>{
        const n = document.querySelector(t), o = e.querySelector(t);
        return n && o ? (n.replaceWith(o.cloneNode(!0)), !0) : (n || console.warn(`[swup] Container missing in current document: ${t}`), o || console.warn(`[swup] Container missing in incoming document: ${t}`), !1);
    }).filter(Boolean);
    return o.forEach((t)=>{
        const e = t.getAttribute("data-swup-persist"), n = d(`[data-swup-persist="${e}"]`);
        n && n !== t && n.replaceWith(t);
    }), r.length === t.containers.length;
}, N = function(t) {
    const e = {
        behavior: "auto"
    }, { target: n, reset: o } = t.scroll, r = n ?? t.to.hash;
    let i = !1;
    return r && (i = this.hooks.callSync("scroll:anchor", t, {
        hash: r,
        options: e
    }, (t, { hash: e, options: n })=>{
        const o = this.getAnchorElement(e);
        return o && o.scrollIntoView(n), !!o;
    })), o && !i && (i = this.hooks.callSync("scroll:top", t, {
        options: e
    }, (t, { options: e })=>(window.scrollTo({
            top: 0,
            left: 0,
            ...e
        }), !0))), i;
}, D = function(t) {
    try {
        const e = this;
        if (t.done) return Promise.resolve();
        const n = e.hooks.call("animation:in:await", t, {
            skip: !1
        }, (t, { skip: n })=>{
            if (!n) return e.awaitAnimations({
                selector: t.animation.selector
            });
        });
        return Promise.resolve(f()).then(function() {
            return Promise.resolve(e.hooks.call("animation:in:start", t, void 0, ()=>{
                e.classes.remove("is-animating");
            })).then(function() {
                return Promise.resolve(n).then(function() {
                    return Promise.resolve(e.hooks.call("animation:in:end", t, void 0)).then(function() {});
                });
            });
        });
    } catch (t) {
        return Promise.reject(t);
    }
}, O = function(t, e) {
    try {
        const r = this;
        if (t.done) return Promise.resolve();
        t.advance(6);
        const { url: s } = e;
        return r.isSameResolvedUrl(o(), s) || (i(s), r.location = a.fromUrl(s), t.to.url = r.location.url, t.to.hash = r.location.hash), Promise.resolve(r.hooks.call("content:replace", t, {
            page: e
        }, (t, {})=>{
            if (r.classes.remove("is-leaving"), t.animation.animate && r.classes.add("is-rendering"), !r.replaceContent(t)) throw new Error("[swup] Container mismatch, aborting");
            t.animation.animate && (r.classes.add("is-changing", "is-animating", "is-rendering"), t.animation.name && r.classes.add(`to-${n(t.animation.name)}`));
        })).then(function() {
            return Promise.resolve(r.hooks.call("content:scroll", t, void 0, ()=>r.scrollToContent(t))).then(function() {
                return Promise.resolve(r.hooks.call("page:view", t, {
                    url: r.location.url,
                    title: document.title
                })).then(function() {});
            });
        });
    } catch (t) {
        return Promise.reject(t);
    }
}, M = function(t) {
    var e;
    if (e = t, Boolean(e?.isSwupPlugin)) {
        if (t.swup = this, !t._checkRequirements || t._checkRequirements()) return t._beforeMount && t._beforeMount(), t.mount(), this.plugins.push(t), this.plugins;
    } else console.error("Not a swup plugin instance", t);
};
function W(t) {
    const e = this.findPlugin(t);
    if (e) return e.unmount(), e._afterUnmount && e._afterUnmount(), this.plugins = this.plugins.filter((t)=>t !== e), this.plugins;
    console.error("No such plugin", e);
}
function B(t) {
    return this.plugins.find((e)=>e === t || e.name === t || e.name === `Swup${String(t)}`);
}
function _(t) {
    if ("function" != typeof this.options.resolveUrl) return console.warn("[swup] options.resolveUrl expects a callback function."), t;
    const e = this.options.resolveUrl(t);
    return e && "string" == typeof e ? e.startsWith("//") || e.startsWith("http") ? (console.warn("[swup] options.resolveUrl needs to return a relative url"), t) : e : (console.warn("[swup] options.resolveUrl needs to return a url"), t);
}
function F(t, e) {
    return this.resolveUrl(t) === this.resolveUrl(e);
}
const K = {
    animateHistoryBrowsing: !1,
    animationSelector: '[class*="transition-"]',
    animationScope: "html",
    cache: !0,
    containers: [
        "#swup"
    ],
    hooks: {},
    ignoreVisit: (t, { el: e } = {})=>!!e?.closest("[data-no-swup]"),
    linkSelector: "a[href]",
    linkToSelf: "scroll",
    native: !1,
    plugins: [],
    resolveUrl: (t)=>t,
    requestHeaders: {
        "X-Requested-With": "swup",
        Accept: "text/html, application/xhtml+xml"
    },
    skipPopStateHandling: (t)=>"swup" !== t.state?.source,
    timeout: 0
};
class z {
    get currentPageUrl() {
        return this.location.url;
    }
    constructor(t = {}){
        this.version = "4.8.2", this.options = void 0, this.defaults = K, this.plugins = [], this.visit = void 0, this.cache = void 0, this.hooks = void 0, this.classes = void 0, this.location = a.fromUrl(window.location.href), this.currentHistoryIndex = void 0, this.clickDelegate = void 0, this.navigating = !1, this.onVisitEnd = void 0, this.use = M, this.unuse = W, this.findPlugin = B, this.log = ()=>{}, this.navigate = T, this.performNavigation = L, this.createVisit = P, this.delegateEvent = s, this.fetchPage = l, this.awaitAnimations = x, this.renderPage = O, this.replaceContent = R, this.animatePageIn = D, this.animatePageOut = q, this.scrollToContent = N, this.getAnchorElement = $, this.getCurrentUrl = o, this.resolveUrl = _, this.isSameResolvedUrl = F, this.options = {
            ...this.defaults,
            ...t
        }, this.handleLinkClick = this.handleLinkClick.bind(this), this.handlePopState = this.handlePopState.bind(this), this.cache = new u(this), this.classes = new y(this), this.hooks = new U(this), this.visit = this.createVisit({
            to: ""
        }), this.currentHistoryIndex = window.history.state?.index ?? 1, this.enable();
    }
    enable() {
        try {
            const t = this, { linkSelector: e } = t.options;
            t.clickDelegate = t.delegateEvent(e, "click", t.handleLinkClick), window.addEventListener("popstate", t.handlePopState), t.options.animateHistoryBrowsing && (window.history.scrollRestoration = "manual"), t.options.native = t.options.native && !!document.startViewTransition, t.options.plugins.forEach((e)=>t.use(e));
            for (const [e, n] of Object.entries(t.options.hooks)){
                const [o, r] = t.hooks.parseName(e);
                t.hooks.on(o, n, r);
            }
            return "swup" !== window.history.state?.source && i(null, {
                index: t.currentHistoryIndex
            }), Promise.resolve(f()).then(function() {
                return Promise.resolve(t.hooks.call("enable", void 0, void 0, ()=>{
                    const e = document.documentElement;
                    e.classList.add("swup-enabled"), e.classList.toggle("swup-native", t.options.native);
                })).then(function() {});
            });
        } catch (t) {
            return Promise.reject(t);
        }
    }
    destroy() {
        try {
            const t = this;
            return t.clickDelegate.destroy(), window.removeEventListener("popstate", t.handlePopState), t.cache.clear(), t.options.plugins.forEach((e)=>t.unuse(e)), Promise.resolve(t.hooks.call("disable", void 0, void 0, ()=>{
                const t = document.documentElement;
                t.classList.remove("swup-enabled"), t.classList.remove("swup-native");
            })).then(function() {
                t.hooks.clear();
            });
        } catch (t) {
            return Promise.reject(t);
        }
    }
    shouldIgnoreVisit(t, { el: e, event: n } = {}) {
        const { origin: o, url: r, hash: i } = a.fromUrl(t);
        return o !== window.location.origin || !(!e || !this.triggerWillOpenNewWindow(e)) || !!this.options.ignoreVisit(r + i, {
            el: e,
            event: n
        });
    }
    handleLinkClick(t) {
        const e = t.delegateTarget, { href: n, url: o, hash: r } = a.fromElement(e);
        if (this.shouldIgnoreVisit(n, {
            el: e,
            event: t
        })) return;
        if (this.navigating && o === this.visit.to.url) return void t.preventDefault();
        const s = this.createVisit({
            to: o,
            hash: r,
            el: e,
            event: t
        });
        t.metaKey || t.ctrlKey || t.shiftKey || t.altKey ? this.hooks.callSync("link:newtab", s, {
            href: n
        }) : 0 === t.button && this.hooks.callSync("link:click", s, {
            el: e,
            event: t
        }, ()=>{
            const e = s.from.url ?? "";
            t.preventDefault(), o && o !== e ? this.isSameResolvedUrl(o, e) || this.performNavigation(s) : r ? this.hooks.callSync("link:anchor", s, {
                hash: r
            }, ()=>{
                i(o + r), this.scrollToContent(s);
            }) : this.hooks.callSync("link:self", s, void 0, ()=>{
                "navigate" === this.options.linkToSelf ? this.performNavigation(s) : (i(o), this.scrollToContent(s));
            });
        });
    }
    handlePopState(t) {
        const e = t.state?.url ?? window.location.href;
        if (this.options.skipPopStateHandling(t)) return;
        if (this.isSameResolvedUrl(o(), this.location.url)) return;
        const { url: n, hash: r } = a.fromUrl(e), i = this.createVisit({
            to: n,
            hash: r,
            event: t
        });
        i.history.popstate = !0;
        const s = t.state?.index ?? 0;
        s && s !== this.currentHistoryIndex && (i.history.direction = s - this.currentHistoryIndex > 0 ? "forwards" : "backwards", this.currentHistoryIndex = s), i.animation.animate = !1, i.scroll.reset = !1, i.scroll.target = !1, this.options.animateHistoryBrowsing && (i.animation.animate = !0, i.scroll.reset = !0), this.hooks.callSync("history:popstate", i, {
            event: t
        }, ()=>{
            this.performNavigation(i);
        });
    }
    triggerWillOpenNewWindow(t) {
        return !!t.matches('[download], [target="_blank"]');
    }
}

},{"delegate-it":"5yPCR","path-to-regexp":"3VLfd","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"5yPCR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _delegateJsDefault.default));
parcelHelpers.export(exports, "oneEvent", ()=>(0, _oneEventJsDefault.default));
var _delegateJs = require("./delegate.js");
parcelHelpers.exportAll(_delegateJs, exports);
var _delegateJsDefault = parcelHelpers.interopDefault(_delegateJs);
var _oneEventJs = require("./one-event.js");
var _oneEventJsDefault = parcelHelpers.interopDefault(_oneEventJs);

},{"./delegate.js":"2MdC0","./one-event.js":"6UKhP","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"2MdC0":[function(require,module,exports,__globalThis) {
/** Keeps track of raw listeners added to the base elements to avoid duplication */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const ledger = new WeakMap();
function editLedger(wanted, baseElement, callback, setup) {
    if (!wanted && !ledger.has(baseElement)) return false;
    const elementMap = ledger.get(baseElement) ?? new WeakMap();
    ledger.set(baseElement, elementMap);
    const setups = elementMap.get(callback) ?? new Set();
    elementMap.set(callback, setups);
    const existed = setups.has(setup);
    if (wanted) setups.add(setup);
    else setups.delete(setup);
    return existed && wanted;
}
function safeClosest(event, selector) {
    let target = event.target;
    if (target instanceof Text) target = target.parentElement;
    // The currentTarget could be an Element or e.g. a ShadowRoot
    if (target instanceof Element && event.currentTarget instanceof Node) {
        // `.closest()` may match ancestors of `currentTarget` but we only need its children
        const closest = target.closest(selector);
        if (closest && event.currentTarget.contains(closest)) return closest;
    }
}
// This type isn't exported as a declaration, so it needs to be duplicated above
function delegate(selector, type, callback, options = {}) {
    const { signal, base = document } = options;
    if (signal?.aborted) return;
    // Don't pass `once` to `addEventListener` because it needs to be handled in `delegate-it`
    const { once, ...nativeListenerOptions } = options;
    // `document` should never be the base, it's just an easy way to define "global event listeners"
    const baseElement = base instanceof Document ? base.documentElement : base;
    // Handle the regular Element usage
    const capture = Boolean(typeof options === 'object' ? options.capture : options);
    const listenerFunction = (event)=>{
        const delegateTarget = safeClosest(event, String(selector));
        if (delegateTarget) {
            const delegateEvent = Object.assign(event, {
                delegateTarget
            });
            callback.call(baseElement, delegateEvent);
            if (once) {
                baseElement.removeEventListener(type, listenerFunction, nativeListenerOptions);
                editLedger(false, baseElement, callback, setup);
            }
        }
    };
    const setup = JSON.stringify({
        selector,
        type,
        capture
    });
    const isAlreadyListening = editLedger(true, baseElement, callback, setup);
    if (!isAlreadyListening) baseElement.addEventListener(type, listenerFunction, nativeListenerOptions);
    signal?.addEventListener('abort', ()=>{
        editLedger(false, baseElement, callback, setup);
    });
}
exports.default = delegate;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"6UKhP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _delegateJs = require("./delegate.js");
var _delegateJsDefault = parcelHelpers.interopDefault(_delegateJs);
// This type isn't exported as a declaration, so it needs to be duplicated above
async function oneEvent(selector, type, options = {}) {
    return new Promise((resolve)=>{
        options.once = true;
        if (options.signal?.aborted) resolve(undefined);
        options.signal?.addEventListener('abort', ()=>{
            resolve(undefined);
        });
        (0, _delegateJsDefault.default)(selector, type, resolve, options);
    });
}
exports.default = oneEvent;

},{"./delegate.js":"2MdC0","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"3VLfd":[function(require,module,exports,__globalThis) {
/**
 * Tokenize input string.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Parse a string for the raw tokens.
 */ parcelHelpers.export(exports, "parse", ()=>parse);
/**
 * Compile a string to a template function for the path.
 */ parcelHelpers.export(exports, "compile", ()=>compile);
/**
 * Expose a method for transforming tokens into the path function.
 */ parcelHelpers.export(exports, "tokensToFunction", ()=>tokensToFunction);
/**
 * Create path match function from `path-to-regexp` spec.
 */ parcelHelpers.export(exports, "match", ()=>match);
/**
 * Create a path match function from `path-to-regexp` output.
 */ parcelHelpers.export(exports, "regexpToFunction", ()=>regexpToFunction);
/**
 * Expose a function for taking tokens and returning a RegExp.
 */ parcelHelpers.export(exports, "tokensToRegexp", ()=>tokensToRegexp);
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */ parcelHelpers.export(exports, "pathToRegexp", ()=>pathToRegexp);
function lexer(str) {
    var tokens = [];
    var i = 0;
    while(i < str.length){
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({
                type: "MODIFIER",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "\\") {
            tokens.push({
                type: "ESCAPED_CHAR",
                index: i++,
                value: str[i++]
            });
            continue;
        }
        if (char === "{") {
            tokens.push({
                type: "OPEN",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === "}") {
            tokens.push({
                type: "CLOSE",
                index: i,
                value: str[i++]
            });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while(j < str.length){
                var code = str.charCodeAt(j);
                if (// `0-9`
                code >= 48 && code <= 57 || // `A-Z`
                code >= 65 && code <= 90 || // `a-z`
                code >= 97 && code <= 122 || // `_`
                code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name) throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({
                type: "NAME",
                index: i,
                value: name
            });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            while(j < str.length){
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                } else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") throw new TypeError("Capturing groups are not allowed at ".concat(j));
                }
                pattern += str[j++];
            }
            if (count) throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern) throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({
                type: "PATTERN",
                index: i,
                value: pattern
            });
            i = j;
            continue;
        }
        tokens.push({
            type: "CHAR",
            index: i,
            value: str[i++]
        });
    }
    tokens.push({
        type: "END",
        index: i,
        value: ""
    });
    return tokens;
}
function parse(str, options) {
    if (options === void 0) options = {};
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function(type) {
        if (i < tokens.length && tokens[i].type === type) return tokens[i++].value;
    };
    var mustConsume = function(type) {
        var value = tryConsume(type);
        if (value !== undefined) return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function() {
        var result = "";
        var value;
        while(value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))result += value;
        return result;
    };
    var isSafe = function(value) {
        for(var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++){
            var char = delimiter_1[_i];
            if (value.indexOf(char) > -1) return true;
        }
        return false;
    };
    var safePattern = function(prefix) {
        var prev = result[result.length - 1];
        var prevText = prefix || (prev && typeof prev === "string" ? prev : "");
        if (prev && !prevText) throw new TypeError("Must have text between two parameters, missing text after \"".concat(prev.name, "\""));
        if (!prevText || isSafe(prevText)) return "[^".concat(escapeString(delimiter), "]+?");
        return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
    };
    while(i < tokens.length){
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || safePattern(prefix),
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
function tokensToFunction(tokens, options) {
    if (options === void 0) options = {};
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
    } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function(token) {
        if (typeof token === "object") return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    });
    return function(data) {
        var path = "";
        for(var i = 0; i < tokens.length; i++){
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                if (value.length === 0) {
                    if (optional) continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for(var j = 0; j < value.length; j++){
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional) continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
function regexpToFunction(re, keys, options) {
    if (options === void 0) options = {};
    var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
    } : _a;
    return function(pathname) {
        var m = re.exec(pathname);
        if (!m) return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function(i) {
            if (m[i] === undefined) return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") params[key.name] = m[i].split(key.prefix + key.suffix).map(function(value) {
                return decode(value, key);
            });
            else params[key.name] = decode(m[i], key);
        };
        for(var i = 1; i < m.length; i++)_loop_1(i);
        return {
            path: path,
            index: index,
            params: params
        };
    };
}
/**
 * Escape a regular expression string.
 */ function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */ function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */ function regexpToRegexp(path, keys) {
    if (!keys) return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while(execResult){
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */ function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function(path) {
        return pathToRegexp(path, keys, options).source;
    });
    return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
/**
 * Create a path regexp from string input.
 */ function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) options = {};
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
    } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
    var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
    var delimiterRe = "[".concat(escapeString(delimiter), "]");
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for(var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++){
        var token = tokens_1[_i];
        if (typeof token === "string") route += escapeString(encode(token));
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys) keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
                    } else route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
                } else {
                    if (token.modifier === "+" || token.modifier === "*") throw new TypeError("Can not repeat \"".concat(token.name, "\" without a prefix and suffix"));
                    route += "(".concat(token.pattern, ")").concat(token.modifier);
                }
            } else route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
        }
    }
    if (end) {
        if (!strict) route += "".concat(delimiterRe, "?");
        route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
    } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === undefined;
        if (!strict) route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        if (!isEndDelimited) route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
    return new RegExp(route, flags(options));
}
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp) return regexpToRegexp(path, keys);
    if (Array.isArray(path)) return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"iagUj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>e);
var _plugin = require("@swup/plugin");
var _pluginDefault = parcelHelpers.interopDefault(_plugin);
class e extends (0, _pluginDefault.default) {
    constructor(t){
        void 0 === t && (t = {}), super(), this.name = "SwupScriptsPlugin", this.requires = {
            swup: ">=4"
        }, this.defaults = {
            head: !0,
            body: !0,
            optin: !1
        }, this.options = void 0, this.options = {
            ...this.defaults,
            ...t
        };
    }
    mount() {
        this.on("content:replace", this.runScripts);
    }
    runScripts() {
        const { head: t, body: e, optin: s } = this.options, o = this.getScope({
            head: t,
            body: e
        });
        if (!o) return;
        const r = Array.from(o.querySelectorAll(s ? "script[data-swup-reload-script]" : "script:not([data-swup-ignore-script])"));
        r.forEach((t)=>this.runScript(t)), this.swup.log(`Executed ${r.length} scripts.`);
    }
    runScript(t) {
        const e = document.createElement("script");
        for (const { name: s, value: o } of t.attributes)e.setAttribute(s, o);
        return e.textContent = t.textContent, t.replaceWith(e), e;
    }
    getScope(t) {
        let { head: e, body: s } = t;
        return e && s ? document : e ? document.head : s ? document.body : null;
    }
}

},{"@swup/plugin":"flRlV","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"flRlV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>e);
const r = (r)=>String(r).split(".").map((r)=>String(parseInt(r || "0", 10))).concat([
        "0",
        "0"
    ]).slice(0, 3).join(".");
class e {
    constructor(){
        this.isSwupPlugin = !0, this.swup = void 0, this.version = void 0, this.requires = {}, this.handlersToUnregister = [];
    }
    mount() {}
    unmount() {
        this.handlersToUnregister.forEach((r)=>r()), this.handlersToUnregister = [];
    }
    _beforeMount() {
        if (!this.name) throw new Error("You must define a name of plugin when creating a class.");
    }
    _afterUnmount() {}
    _checkRequirements() {
        return "object" != typeof this.requires || Object.entries(this.requires).forEach((e)=>{
            let [t, n] = e;
            if (n = Array.isArray(n) ? n : [
                n
            ], !function(e, t, n) {
                const s = function(r, e) {
                    if ("swup" === r) return e.version ?? "";
                    {
                        const t = e.findPlugin(r);
                        return t?.version ?? "";
                    }
                }(e, n);
                return !!s && ((e, t)=>t.every((t)=>{
                        const [, n, s] = t.match(/^([\D]+)?(.*)$/) || [];
                        var o, i;
                        return ((r, e)=>{
                            const t = {
                                "": (r)=>0 === r,
                                ">": (r)=>r > 0,
                                ">=": (r)=>r >= 0,
                                "<": (r)=>r < 0,
                                "<=": (r)=>r <= 0
                            };
                            return (t[e] || t[""])(r);
                        })((i = s, o = r(o = e), i = r(i), o.localeCompare(i, void 0, {
                            numeric: !0
                        })), n || ">=");
                    }))(s, t);
            }(t, n, this.swup)) {
                const r = `${t} ${n.join(", ")}`;
                throw new Error(`Plugin version mismatch: ${this.name} requires ${r}`);
            }
        }), !0;
    }
    on(r, e, t) {
        var n;
        void 0 === t && (t = {}), e = !(n = e).name.startsWith("bound ") || n.hasOwnProperty("prototype") ? e.bind(this) : e;
        const s = this.swup.hooks.on(r, e, t);
        return this.handlersToUnregister.push(s), s;
    }
    once(r, e, t) {
        return void 0 === t && (t = {}), this.on(r, e, {
            ...t,
            once: !0
        });
    }
    before(r, e, t) {
        return void 0 === t && (t = {}), this.on(r, e, {
            ...t,
            before: !0
        });
    }
    replace(r, e, t) {
        return void 0 === t && (t = {}), this.on(r, e, {
            ...t,
            replace: !0
        });
    }
    off(r, e) {
        return this.swup.hooks.off(r, e);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"iFEn1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>o);
var _plugin = require("@swup/plugin");
var _pluginDefault = parcelHelpers.interopDefault(_plugin);
function s(t, { prefix: s1 = "" } = {}) {
    return !!t && t.startsWith(s1);
}
function e(t, s = []) {
    const e1 = Array.from(t.attributes);
    return s.length ? e1.filter(({ name: t })=>s.some((s)=>s instanceof RegExp ? s.test(t) : t === s)) : e1;
}
class o extends (0, _pluginDefault.default) {
    constructor(t = {}){
        super(), this.name = "SwupBodyClassPlugin", this.requires = {
            swup: ">=4.6"
        }, this.defaults = {
            prefix: "",
            attributes: []
        }, this.options = void 0, this.update = (t)=>{
            const { prefix: o, attributes: i } = this.options;
            !function(t, e, { prefix: o = "" } = {}) {
                const i = [
                    ...t.classList
                ].filter((t)=>s(t, {
                        prefix: o
                    })), n = [
                    ...e.classList
                ].filter((t)=>s(t, {
                        prefix: o
                    }));
                t.classList.remove(...i), t.classList.add(...n);
            }(document.body, t.to.document.body, {
                prefix: o
            }), i?.length && function(t, s, o = []) {
                const i = new Set;
                for (const { name: n, value: r } of e(s, o))t.setAttribute(n, r), i.add(n);
                for (const { name: s } of e(t, o))i.has(s) || t.removeAttribute(s);
            }(document.body, t.to.document.body, i);
        }, this.options = {
            ...this.defaults,
            ...t
        };
    }
    mount() {
        this.on("content:replace", this.update);
    }
}

},{"@swup/plugin":"flRlV","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"h3dfI":[function(require,module,exports,__globalThis) {
/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.12
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(this, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ exports: {},
                /******/ id: moduleId,
                /******/ loaded: false
            };
            /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ // Flag the module as loaded
            /******/ module1.loaded = true;
            /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "";
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(0);
    /******/ }([
        /* 0 */ /***/ function(module1, exports) {
            'use strict';
            module1.exports = function() {
                /*
	   * bail out if there is no document or window
	   * (i.e. in a node/non-DOM environment)
	   *
	   * Return a stubbed API instead
	   */ if (typeof document === 'undefined' || typeof window === 'undefined') return {
                    // always return "initial" because no interaction will ever be detected
                    ask: function ask() {
                        return 'initial';
                    },
                    // always return null
                    element: function element() {
                        return null;
                    },
                    // no-op
                    ignoreKeys: function ignoreKeys() {},
                    // no-op
                    specificKeys: function specificKeys() {},
                    // no-op
                    registerOnChange: function registerOnChange() {},
                    // no-op
                    unRegisterOnChange: function unRegisterOnChange() {}
                };
                /*
	   * variables
	   */ // cache document.documentElement
                var docElem = document.documentElement;
                // currently focused dom element
                var currentElement = null;
                // last used input type
                var currentInput = 'initial';
                // last used input intent
                var currentIntent = currentInput;
                // UNIX timestamp of current event
                var currentTimestamp = Date.now();
                // check for a `data-whatpersist` attribute on either the `html` or `body` elements, defaults to `true`
                var shouldPersist = false;
                // form input types
                var formInputs = [
                    'button',
                    'input',
                    'select',
                    'textarea'
                ];
                // empty array for holding callback functions
                var functionList = [];
                // list of modifier keys commonly used with the mouse and
                // can be safely ignored to prevent false keyboard detection
                var ignoreMap = [
                    16,
                    17,
                    18,
                    91,
                    93 // Windows menu / right Apple cmd
                ];
                var specificMap = [];
                // mapping of events to input types
                var inputMap = {
                    keydown: 'keyboard',
                    keyup: 'keyboard',
                    mousedown: 'mouse',
                    mousemove: 'mouse',
                    MSPointerDown: 'pointer',
                    MSPointerMove: 'pointer',
                    pointerdown: 'pointer',
                    pointermove: 'pointer',
                    touchstart: 'touch',
                    touchend: 'touch'
                };
                var isScrolling = false;
                // store current mouse position
                var mousePos = {
                    x: null,
                    y: null
                };
                var pointerMap = {
                    2: 'touch',
                    3: 'touch',
                    4: 'mouse'
                };
                var supportsPassive = false;
                try {
                    var opts = Object.defineProperty({}, 'passive', {
                        get: function get() {
                            supportsPassive = true;
                        }
                    });
                    window.addEventListener('test', null, opts);
                } catch (e) {}
                // fail silently
                /*
	   * set up
	   */ var setUp = function setUp() {
                    // add correct mouse wheel event mapping to `inputMap`
                    inputMap[detectWheel()] = 'mouse';
                    addListeners();
                };
                /*
	   * events
	   */ var addListeners = function addListeners() {
                    // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
                    // can only demonstrate potential, but not actual, interaction
                    // and are treated separately
                    var options = supportsPassive ? {
                        passive: true,
                        capture: true
                    } : true;
                    document.addEventListener('DOMContentLoaded', setPersist, true);
                    // pointer events (mouse, pen, touch)
                    if (window.PointerEvent) {
                        window.addEventListener('pointerdown', setInput, true);
                        window.addEventListener('pointermove', setIntent, true);
                    } else if (window.MSPointerEvent) {
                        window.addEventListener('MSPointerDown', setInput, true);
                        window.addEventListener('MSPointerMove', setIntent, true);
                    } else {
                        // mouse events
                        window.addEventListener('mousedown', setInput, true);
                        window.addEventListener('mousemove', setIntent, true);
                        // touch events
                        if ('ontouchstart' in window) {
                            window.addEventListener('touchstart', setInput, options);
                            window.addEventListener('touchend', setInput, true);
                        }
                    }
                    // mouse wheel
                    window.addEventListener(detectWheel(), setIntent, options);
                    // keyboard events
                    window.addEventListener('keydown', setInput, true);
                    window.addEventListener('keyup', setInput, true);
                    // focus events
                    window.addEventListener('focusin', setElement, true);
                    window.addEventListener('focusout', clearElement, true);
                };
                // checks if input persistence should happen and
                // get saved state from session storage if true (defaults to `false`)
                var setPersist = function setPersist() {
                    shouldPersist = !(docElem.getAttribute('data-whatpersist') === 'false' || document.body.getAttribute('data-whatpersist') === 'false');
                    if (shouldPersist) // check for session variables and use if available
                    try {
                        if (window.sessionStorage.getItem('what-input')) currentInput = window.sessionStorage.getItem('what-input');
                        if (window.sessionStorage.getItem('what-intent')) currentIntent = window.sessionStorage.getItem('what-intent');
                    } catch (e) {
                    // fail silently
                    }
                    // always run these so at least `initial` state is set
                    doUpdate('input');
                    doUpdate('intent');
                };
                // checks conditions before updating new input
                var setInput = function setInput(event) {
                    var eventKey = event.which;
                    var value = inputMap[event.type];
                    if (value === 'pointer') value = pointerType(event);
                    var ignoreMatch = !specificMap.length && ignoreMap.indexOf(eventKey) === -1;
                    var specificMatch = specificMap.length && specificMap.indexOf(eventKey) !== -1;
                    var shouldUpdate = value === 'keyboard' && eventKey && (ignoreMatch || specificMatch) || value === 'mouse' || value === 'touch';
                    // prevent touch detection from being overridden by event execution order
                    if (validateTouch(value)) shouldUpdate = false;
                    if (shouldUpdate && currentInput !== value) {
                        currentInput = value;
                        persistInput('input', currentInput);
                        doUpdate('input');
                    }
                    if (shouldUpdate && currentIntent !== value) {
                        // preserve intent for keyboard interaction with form fields
                        var activeElem = document.activeElement;
                        var notFormInput = activeElem && activeElem.nodeName && (formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1 || activeElem.nodeName.toLowerCase() === 'button' && !checkClosest(activeElem, 'form'));
                        if (notFormInput) {
                            currentIntent = value;
                            persistInput('intent', currentIntent);
                            doUpdate('intent');
                        }
                    }
                };
                // updates the doc and `inputTypes` array with new input
                var doUpdate = function doUpdate(which) {
                    docElem.setAttribute('data-what' + which, which === 'input' ? currentInput : currentIntent);
                    fireFunctions(which);
                };
                // updates input intent for `mousemove` and `pointermove`
                var setIntent = function setIntent(event) {
                    var value = inputMap[event.type];
                    if (value === 'pointer') value = pointerType(event);
                    // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove
                    detectScrolling(event);
                    // only execute if scrolling isn't happening
                    if ((!isScrolling && !validateTouch(value) || isScrolling && event.type === 'wheel' || event.type === 'mousewheel' || event.type === 'DOMMouseScroll') && currentIntent !== value) {
                        currentIntent = value;
                        persistInput('intent', currentIntent);
                        doUpdate('intent');
                    }
                };
                var setElement = function setElement(event) {
                    if (!event.target.nodeName) {
                        // If nodeName is undefined, clear the element
                        // This can happen if click inside an <svg> element.
                        clearElement();
                        return;
                    }
                    currentElement = event.target.nodeName.toLowerCase();
                    docElem.setAttribute('data-whatelement', currentElement);
                    if (event.target.classList && event.target.classList.length) docElem.setAttribute('data-whatclasses', event.target.classList.toString().replace(' ', ','));
                };
                var clearElement = function clearElement() {
                    currentElement = null;
                    docElem.removeAttribute('data-whatelement');
                    docElem.removeAttribute('data-whatclasses');
                };
                var persistInput = function persistInput(which, value) {
                    if (shouldPersist) try {
                        window.sessionStorage.setItem('what-' + which, value);
                    } catch (e) {
                    // fail silently
                    }
                };
                /*
	   * utilities
	   */ var pointerType = function pointerType(event) {
                    if (typeof event.pointerType === 'number') return pointerMap[event.pointerType];
                    else // treat pen like touch
                    return event.pointerType === 'pen' ? 'touch' : event.pointerType;
                };
                // prevent touch detection from being overridden by event execution order
                var validateTouch = function validateTouch(value) {
                    var timestamp = Date.now();
                    var touchIsValid = value === 'mouse' && currentInput === 'touch' && timestamp - currentTimestamp < 200;
                    currentTimestamp = timestamp;
                    return touchIsValid;
                };
                // detect version of mouse wheel event to use
                // via https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event
                var detectWheel = function detectWheel() {
                    var wheelType = null;
                    // Modern browsers support "wheel"
                    if ('onwheel' in document.createElement('div')) wheelType = 'wheel';
                    else // Webkit and IE support at least "mousewheel"
                    // or assume that remaining browsers are older Firefox
                    wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
                    return wheelType;
                };
                // runs callback functions
                var fireFunctions = function fireFunctions(type) {
                    for(var i = 0, len = functionList.length; i < len; i++)if (functionList[i].type === type) functionList[i].fn.call(undefined, type === 'input' ? currentInput : currentIntent);
                };
                // finds matching element in an object
                var objPos = function objPos(match) {
                    for(var i = 0, len = functionList.length; i < len; i++){
                        if (functionList[i].fn === match) return i;
                    }
                };
                var detectScrolling = function detectScrolling(event) {
                    if (mousePos.x !== event.screenX || mousePos.y !== event.screenY) {
                        isScrolling = false;
                        mousePos.x = event.screenX;
                        mousePos.y = event.screenY;
                    } else isScrolling = true;
                };
                // manual version of `closest()`
                var checkClosest = function checkClosest(elem, tag) {
                    var ElementPrototype = window.Element.prototype;
                    if (!ElementPrototype.matches) ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.webkitMatchesSelector;
                    if (!ElementPrototype.closest) {
                        do {
                            if (elem.matches(tag)) return elem;
                            elem = elem.parentElement || elem.parentNode;
                        }while (elem !== null && elem.nodeType === 1);
                        return null;
                    } else return elem.closest(tag);
                };
                /*
	   * init
	   */ // don't start script unless browser cuts the mustard
                // (also passes if polyfills are used)
                if ('addEventListener' in window && Array.prototype.indexOf) setUp();
                /*
	   * api
	   */ return {
                    // returns string: the current input type
                    // opt: 'intent'|'input'
                    // 'input' (default): returns the same value as the `data-whatinput` attribute
                    // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
                    ask: function ask(opt) {
                        return opt === 'intent' ? currentIntent : currentInput;
                    },
                    // returns string: the currently focused element or null
                    element: function element() {
                        return currentElement;
                    },
                    // overwrites ignored keys with provided array
                    ignoreKeys: function ignoreKeys(arr) {
                        ignoreMap = arr;
                    },
                    // overwrites specific char keys to update on
                    specificKeys: function specificKeys(arr) {
                        specificMap = arr;
                    },
                    // attach functions to input and intent "events"
                    // funct: function to fire on change
                    // eventType: 'input'|'intent'
                    registerOnChange: function registerOnChange(fn, eventType) {
                        functionList.push({
                            fn: fn,
                            type: eventType || 'input'
                        });
                    },
                    unRegisterOnChange: function unRegisterOnChange(fn) {
                        var position = objPos(fn);
                        if (position || position === 0) functionList.splice(position, 1);
                    },
                    clearStorage: function clearStorage() {
                        window.sessionStorage.clear();
                    }
                };
            }();
        /***/ }
    ]);
});

},{}],"u9PGe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getLocalization);
function getLocalization(stringKey) {
    if (typeof window.dude_screenReaderText === 'undefined' || typeof window.dude_screenReaderText[stringKey] === 'undefined') {
        // eslint-disable-next-line no-console
        console.error(`Missing translation for ${stringKey}`);
        return '';
    }
    return window.dude_screenReaderText[stringKey];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"bBmcu":[function(require,module,exports,__globalThis) {
/* eslint-disable no-param-reassign */ /**
 * @Author: Roni Laukkarinen
 * @Date:   2021-09-01 11:55:37
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-06 16:49:16
 */ /**
 * Style external links
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Try to get image alt texts from inside a link
 * to use in aria-label, when only elements inside
 * of link are images
 * @param {*} link DOM link element
 * @returns string
 */ parcelHelpers.export(exports, "getChildAltText", ()=>getChildAltText);
parcelHelpers.export(exports, "styleExternalLinks", ()=>styleExternalLinks);
parcelHelpers.export(exports, "initExternalLinkLabels", ()=>initExternalLinkLabels);
var _localization = require("./localization");
var _localizationDefault = parcelHelpers.interopDefault(_localization);
function isLinkExternal(link, localDomains) {
    // Empty links are not external
    if (!link.length) return false;
    const exceptions = [
        '#',
        'tel:',
        'mailto:',
        '/'
    ];
    // Check if the url starts with some of the exceptions
    const isException = exceptions.some((exception)=>{
        const compare = new RegExp(`^${exception}`, 'g');
        return compare.test(link);
    });
    if (isException) return false;
    let linkUrl;
    try {
        linkUrl = new URL(link);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(`Invalid URL: ${link}`);
        return false;
    }
    // Check if host is one of the local domains
    return !localDomains.some((domain)=>linkUrl.host === domain);
}
function getChildAltText(link) {
    const children = [
        ...link.children
    ];
    if (children.length === 0) return '';
    const childImgs = children.filter((child)=>child.tagName.toLowerCase() === 'img');
    // If there are other elements than img elements, no need to add aria-label
    if (children.length !== childImgs.length) return '';
    // Find alt texts and add to array
    const altTexts = childImgs.filter((child)=>child.alt && child.alt !== '').map((child)=>child.alt);
    // If there is no alt texts,
    if (!altTexts.length) return '';
    return altTexts.join(', ');
}
function styleExternalLinks() {
    let localDomains = [
        window.location.host
    ];
    if (typeof window.dude_externalLinkDomains !== 'undefined') localDomains = localDomains.concat(window.dude_externalLinkDomains);
    const links = document.querySelectorAll('a');
    const externalLinks = [
        ...links
    ].filter((link)=>isLinkExternal(link.href, localDomains));
    // eslint-disable-next-line consistent-return
    externalLinks.forEach((externalLink)=>{
        // Abort mission if there is only img element inside of link
        if (externalLink.childElementCount === 1 && externalLink.children[0].tagName.toLowerCase() === 'img') return false;
        if (!externalLink.classList.contains('no-external-link-label')) {
            const textContent = externalLink.textContent.trim().length ? externalLink.textContent.trim() : getChildAltText(externalLink);
            const ariaLabel = externalLink.target === '_blank' ? `${textContent}: ${(0, _localizationDefault.default)('external_link')}, ${(0, _localizationDefault.default)('target_blank')}` : `${textContent}: ${(0, _localizationDefault.default)('external_link')}`;
            externalLink.setAttribute('aria-label', ariaLabel);
        }
        // Arrow icon won't be added if one of these classes is defined for the link
        const classExceptions = [
            'no-external-link-indicator',
            'global-link',
            'button'
        ];
        if (!classExceptions.some((className)=>externalLink.classList.contains(className))) // Add SVG arrow icon
        externalLink.insertAdjacentHTML('beforeend', '<svg class="external-link-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 9 9"><path d="M4.499 1.497h4v4m0-4l-7 7" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
    });
}
function initExternalLinkLabels() {
    // Add aria-labels to links without text or aria-labels and contain image with alt text
    const links = [
        ...document.querySelectorAll('a')
    ];
    // eslint-disable-next-line no-unused-vars
    const linksWithImgChildren = links.forEach((link)=>{
        // If link already has text content or an aria label no need to add aria-label
        if (link.textContent.trim() !== '' || link.ariaLabel) return;
        const ariaLabel = getChildAltText(link);
        if (ariaLabel !== '') link.ariaLabel = ariaLabel;
    });
}

},{"./localization":"u9PGe","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"iQ5qa":[function(require,module,exports,__globalThis) {
/* eslint-disable no-param-reassign, no-unused-vars, import/no-unresolved, no-plusplus */ /**
 * @Author: Roni Laukkarinen
 * @Date:   2022-05-07 12:03:42
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-03-13 15:29:45
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _swiper = require("swiper");
var _swiperDefault = parcelHelpers.interopDefault(_swiper);
var _localization = require("./localization");
var _localizationDefault = parcelHelpers.interopDefault(_localization);
(0, _swiperDefault.default).use([
    (0, _swiper.Navigation),
    (0, _swiper.Pagination),
    (0, _swiper.A11y)
]);
const initCarousels = ()=>{
    // Init carousels
    const Carousels = document.querySelectorAll('.swiper-container');
    // Add skip links if not in admin
    if (!document.body.classList.contains('wp-admin')) {
        const allCarouselBlocks = document.querySelectorAll('.is-carousel');
        // Loop through all blocks
        for(let i = 0; i < allCarouselBlocks.length; i++){
            // Get carousel block class nam (second, because first is 'block')
            const carouselClass = allCarouselBlocks[i].classList[1];
            const carouselBlock = allCarouselBlocks[i];
            const nextBlock = carouselBlock.nextElementSibling;
            if (allCarouselBlocks[i].nextElementSibling) {
                // Set ID to next block
                const nextBlockId = `anchor-${carouselClass}`;
                nextBlock.setAttribute('id', nextBlockId);
                // Skip link markup
                const skipLinkContent = `<a class="skip-link screen-reader-text-dude js-trigger" href="#${nextBlockId}">${(0, _localizationDefault.default)('skip_slider')}</a>`;
                // Add skiplink right before container
                const skipLinkWrapper = document.createElement('div');
                skipLinkWrapper.classList.add('block');
                skipLinkWrapper.classList.add('block-reset-styles');
                skipLinkWrapper.classList.add('has-unified-padding-if-stacked');
                skipLinkWrapper.classList.add('is-skip-link');
                skipLinkWrapper.innerHTML = skipLinkContent;
                if (carouselBlock.parentNode) carouselBlock.parentNode.insertBefore(skipLinkWrapper, carouselBlock);
            }
        }
    }
    // Init swipers
    for(let i = 0; i < Carousels.length; i++){
        Carousels[i].classList.add(`swiper-container-${i}`);
        // Add classes to navigation buttons if they exist
        const prevButton = Carousels[i].querySelector('.swiper-button-prev');
        if (prevButton) prevButton.classList.add(`swiper-button-prev-${i}`);
        const nextButton = Carousels[i].querySelector('.swiper-button-next');
        if (nextButton) nextButton.classList.add(`swiper-button-next-${i}`);
        if (Carousels[i].querySelector('.swiper-pagination')) Carousels[i].querySelector('.swiper-pagination').classList.add(`swiper-pagination-${i}`);
        // Parameters for different kind of carousels
        let CarouselParams;
        if (Carousels[i].classList.contains('is-reference-quotes')) // Reference quote carousel
        CarouselParams = {
            slidesPerView: 1,
            spaceBetween: 150,
            autoHeight: true
        };
        else if (Carousels[i].classList.contains('is-full-width')) // Full width carousel
        CarouselParams = {
            slidesPerView: 1,
            spaceBetween: 40,
            autoHeight: true,
            loop: true
        };
        else // Process carousel
        CarouselParams = {
            watchSlidesProgress: true,
            slideToClickedSlide: true,
            spaceBetween: 0,
            centeredSlides: false,
            loop: false,
            // Responsive breakpoints
            breakpoints: {
                // When window width is >= 0px
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // When window width is >= 700px
                700: {
                    slidesPerView: 2,
                    spaceBetween: 40
                }
            }
        };
        const swiper = new (0, _swiperDefault.default)(`.swiper-container-${i}`, {
            ...CarouselParams,
            slideClass: 'swiper-slide',
            wrapperClass: 'swiper-wrapper',
            centeredSlides: false,
            speed: 200,
            autoHeight: true,
            on: {
                // https://github.com/nolimits4web/swiper/issues/3108
                reachEnd () {
                    this.snapGrid = [
                        ...this.slidesGrid
                    ];
                    setTimeout(()=>{
                        document.querySelector(`.swiper-button-next-${i}`).click();
                        clearTimeout();
                    }, 1);
                },
                snapGridLengthChange () {
                    if (this.snapGrid.length !== this.slidesGrid.length) this.snapGrid = this.slidesGrid.slice(0);
                },
                init () {
                    const swiperElement = this.$el[0];
                    const activeSlide = swiperElement.querySelectorAll('.swiper-slide-active')[0];
                    const allSlides = swiperElement.querySelectorAll('.swiper-slide');
                    // Hide all slides except active for screen readers
                    allSlides.forEach((aSlide)=>{
                        aSlide.ariaHidden = 'true';
                    });
                    // Show active slide for screen readers
                    activeSlide.ariaHidden = 'false';
                },
                slideChangeTransitionEnd () {
                    // Run the same thing when slide changes
                    const swiperElement = this.$el[0];
                    const activeSlide = swiperElement.querySelectorAll('.swiper-slide-active')[0];
                    const allSlides = swiperElement.querySelectorAll('.swiper-slide');
                    // Hide all slides except active for screen readers
                    allSlides.forEach((aSlide)=>{
                        aSlide.ariaHidden = 'true';
                    });
                    // Show active slide for screen readers
                    activeSlide.ariaHidden = 'false';
                }
            },
            keyboard: {
                enabled: true
            },
            a11y: {
                enabled: true,
                lastSlideMessage: (0, _localizationDefault.default)('last_slide'),
                prevSlideMessage: (0, _localizationDefault.default)('previous_slide'),
                nextSlideMessage: (0, _localizationDefault.default)('next_slide'),
                slideLabelMessage: null,
                slideRole: 'group'
            },
            navigation: {
                prevEl: `.swiper-button-prev-${i}`,
                nextEl: `.swiper-button-next-${i}`
            },
            pagination: {
                el: `.swiper-pagination-${i}`,
                type: 'custom',
                // Custom pagination
                renderCustom (swiper, current, total) {
                    // If process slider, make total as 9
                    if (swiper.$el[0].classList.contains('is-process')) total = 9;
                    return `<span class="swiper-pagination-current">${current}</span> / <span class="swiper-pagination-total">${total}</span>`;
                }
            }
        });
    }
    // Init scroll carousels (alt style - no Swiper)
    const scrollCarousels = document.querySelectorAll('.carousel-style-alt .scroll-carousel');
    scrollCarousels.forEach((carousel)=>{
        const container = carousel.closest('.carousel-style-alt');
        const prevBtn = container.querySelector('.scroll-carousel-prev');
        const nextBtn = container.querySelector('.scroll-carousel-next');
        const items = carousel.querySelectorAll('.scroll-carousel-item');
        if (!prevBtn || !nextBtn || !items.length) return;
        // Prevent image dragging
        carousel.querySelectorAll('img').forEach((img)=>{
            img.setAttribute('draggable', 'false');
        });
        // Find current visible item index based on scroll position
        const getCurrentIndex = ()=>{
            const { scrollLeft } = carousel;
            let currentIndex = 0;
            let accumulatedWidth = 0;
            for(let i = 0; i < items.length; i++){
                if (scrollLeft < accumulatedWidth + items[i].offsetWidth / 2) {
                    currentIndex = i;
                    break;
                }
                accumulatedWidth += items[i].offsetWidth + 40; // 40 = gap
                currentIndex = i;
            }
            return currentIndex;
        };
        // Scroll to specific item with fast animation
        const scrollToItem = (index)=>{
            if (index < 0) index = 0;
            if (index >= items.length) index = items.length - 1;
            let targetScroll = 0;
            for(let i = 0; i < index; i++)targetScroll += items[i].offsetWidth + 40;
            // Fast 150ms animation
            const start = carousel.scrollLeft;
            const distance = targetScroll - start;
            const duration = 150;
            const startTime = performance.now();
            const animate = (currentTime)=>{
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const ease = progress * (2 - progress);
                carousel.scrollLeft = start + distance * ease;
                if (progress < 1) requestAnimationFrame(animate);
            };
            requestAnimationFrame(animate);
        };
        prevBtn.addEventListener('click', ()=>{
            const current = getCurrentIndex();
            scrollToItem(current - 1);
        });
        nextBtn.addEventListener('click', ()=>{
            const current = getCurrentIndex();
            scrollToItem(current + 1);
        });
        // Mouse drag support
        let isDown = false;
        let startX;
        let scrollLeft;
        carousel.style.cursor = 'grab';
        carousel.addEventListener('mousedown', (e)=>{
            isDown = true;
            carousel.style.cursor = 'grabbing';
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
            e.preventDefault();
        });
        carousel.addEventListener('mouseleave', ()=>{
            isDown = false;
            carousel.style.cursor = 'grab';
        });
        carousel.addEventListener('mouseup', ()=>{
            isDown = false;
            carousel.style.cursor = 'grab';
        });
        carousel.addEventListener('mousemove', (e)=>{
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 1.5;
            carousel.scrollLeft = scrollLeft - walk;
        });
    });
};
exports.default = initCarousels;

},{"swiper":"3ktAm","./localization":"u9PGe","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"3ktAm":[function(require,module,exports,__globalThis) {
/**
 * Swiper 8.4.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: January 30, 2023
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Swiper", ()=>(0, _coreJsDefault.default));
parcelHelpers.export(exports, "default", ()=>(0, _coreJsDefault.default));
parcelHelpers.export(exports, "Virtual", ()=>(0, _virtualJsDefault.default));
parcelHelpers.export(exports, "Keyboard", ()=>(0, _keyboardJsDefault.default));
parcelHelpers.export(exports, "Mousewheel", ()=>(0, _mousewheelJsDefault.default));
parcelHelpers.export(exports, "Navigation", ()=>(0, _navigationJsDefault.default));
parcelHelpers.export(exports, "Pagination", ()=>(0, _paginationJsDefault.default));
parcelHelpers.export(exports, "Scrollbar", ()=>(0, _scrollbarJsDefault.default));
parcelHelpers.export(exports, "Parallax", ()=>(0, _parallaxJsDefault.default));
parcelHelpers.export(exports, "Zoom", ()=>(0, _zoomJsDefault.default));
parcelHelpers.export(exports, "Lazy", ()=>(0, _lazyJsDefault.default));
parcelHelpers.export(exports, "Controller", ()=>(0, _controllerJsDefault.default));
parcelHelpers.export(exports, "A11y", ()=>(0, _a11YJsDefault.default));
parcelHelpers.export(exports, "History", ()=>(0, _historyJsDefault.default));
parcelHelpers.export(exports, "HashNavigation", ()=>(0, _hashNavigationJsDefault.default));
parcelHelpers.export(exports, "Autoplay", ()=>(0, _autoplayJsDefault.default));
parcelHelpers.export(exports, "Thumbs", ()=>(0, _thumbsJsDefault.default));
parcelHelpers.export(exports, "FreeMode", ()=>(0, _freeModeJsDefault.default));
parcelHelpers.export(exports, "Grid", ()=>(0, _gridJsDefault.default));
parcelHelpers.export(exports, "Manipulation", ()=>(0, _manipulationJsDefault.default));
parcelHelpers.export(exports, "EffectFade", ()=>(0, _effectFadeJsDefault.default));
parcelHelpers.export(exports, "EffectCube", ()=>(0, _effectCubeJsDefault.default));
parcelHelpers.export(exports, "EffectFlip", ()=>(0, _effectFlipJsDefault.default));
parcelHelpers.export(exports, "EffectCoverflow", ()=>(0, _effectCoverflowJsDefault.default));
parcelHelpers.export(exports, "EffectCreative", ()=>(0, _effectCreativeJsDefault.default));
parcelHelpers.export(exports, "EffectCards", ()=>(0, _effectCardsJsDefault.default));
var _coreJs = require("./core/core.js");
var _coreJsDefault = parcelHelpers.interopDefault(_coreJs);
var _virtualJs = require("./modules/virtual/virtual.js");
var _virtualJsDefault = parcelHelpers.interopDefault(_virtualJs);
var _keyboardJs = require("./modules/keyboard/keyboard.js");
var _keyboardJsDefault = parcelHelpers.interopDefault(_keyboardJs);
var _mousewheelJs = require("./modules/mousewheel/mousewheel.js");
var _mousewheelJsDefault = parcelHelpers.interopDefault(_mousewheelJs);
var _navigationJs = require("./modules/navigation/navigation.js");
var _navigationJsDefault = parcelHelpers.interopDefault(_navigationJs);
var _paginationJs = require("./modules/pagination/pagination.js");
var _paginationJsDefault = parcelHelpers.interopDefault(_paginationJs);
var _scrollbarJs = require("./modules/scrollbar/scrollbar.js");
var _scrollbarJsDefault = parcelHelpers.interopDefault(_scrollbarJs);
var _parallaxJs = require("./modules/parallax/parallax.js");
var _parallaxJsDefault = parcelHelpers.interopDefault(_parallaxJs);
var _zoomJs = require("./modules/zoom/zoom.js");
var _zoomJsDefault = parcelHelpers.interopDefault(_zoomJs);
var _lazyJs = require("./modules/lazy/lazy.js");
var _lazyJsDefault = parcelHelpers.interopDefault(_lazyJs);
var _controllerJs = require("./modules/controller/controller.js");
var _controllerJsDefault = parcelHelpers.interopDefault(_controllerJs);
var _a11YJs = require("./modules/a11y/a11y.js");
var _a11YJsDefault = parcelHelpers.interopDefault(_a11YJs);
var _historyJs = require("./modules/history/history.js");
var _historyJsDefault = parcelHelpers.interopDefault(_historyJs);
var _hashNavigationJs = require("./modules/hash-navigation/hash-navigation.js");
var _hashNavigationJsDefault = parcelHelpers.interopDefault(_hashNavigationJs);
var _autoplayJs = require("./modules/autoplay/autoplay.js");
var _autoplayJsDefault = parcelHelpers.interopDefault(_autoplayJs);
var _thumbsJs = require("./modules/thumbs/thumbs.js");
var _thumbsJsDefault = parcelHelpers.interopDefault(_thumbsJs);
var _freeModeJs = require("./modules/free-mode/free-mode.js");
var _freeModeJsDefault = parcelHelpers.interopDefault(_freeModeJs);
var _gridJs = require("./modules/grid/grid.js");
var _gridJsDefault = parcelHelpers.interopDefault(_gridJs);
var _manipulationJs = require("./modules/manipulation/manipulation.js");
var _manipulationJsDefault = parcelHelpers.interopDefault(_manipulationJs);
var _effectFadeJs = require("./modules/effect-fade/effect-fade.js");
var _effectFadeJsDefault = parcelHelpers.interopDefault(_effectFadeJs);
var _effectCubeJs = require("./modules/effect-cube/effect-cube.js");
var _effectCubeJsDefault = parcelHelpers.interopDefault(_effectCubeJs);
var _effectFlipJs = require("./modules/effect-flip/effect-flip.js");
var _effectFlipJsDefault = parcelHelpers.interopDefault(_effectFlipJs);
var _effectCoverflowJs = require("./modules/effect-coverflow/effect-coverflow.js");
var _effectCoverflowJsDefault = parcelHelpers.interopDefault(_effectCoverflowJs);
var _effectCreativeJs = require("./modules/effect-creative/effect-creative.js");
var _effectCreativeJsDefault = parcelHelpers.interopDefault(_effectCreativeJs);
var _effectCardsJs = require("./modules/effect-cards/effect-cards.js");
var _effectCardsJsDefault = parcelHelpers.interopDefault(_effectCardsJs);

},{"./core/core.js":"dxQSC","./modules/virtual/virtual.js":"6u53y","./modules/keyboard/keyboard.js":"7AjEs","./modules/mousewheel/mousewheel.js":"j4uiT","./modules/navigation/navigation.js":"dRmpf","./modules/pagination/pagination.js":"9Tgv2","./modules/scrollbar/scrollbar.js":"4DkLc","./modules/parallax/parallax.js":"5K6oK","./modules/zoom/zoom.js":"jZiSp","./modules/lazy/lazy.js":"4efs7","./modules/controller/controller.js":"5ctoV","./modules/a11y/a11y.js":"2SnLS","./modules/history/history.js":"8fpEM","./modules/hash-navigation/hash-navigation.js":"h6maS","./modules/autoplay/autoplay.js":"75AFh","./modules/thumbs/thumbs.js":"k6hjz","./modules/free-mode/free-mode.js":"ip0Dy","./modules/grid/grid.js":"dOf1v","./modules/manipulation/manipulation.js":"7BHUV","./modules/effect-fade/effect-fade.js":"7shH7","./modules/effect-cube/effect-cube.js":"itohZ","./modules/effect-flip/effect-flip.js":"dlwe1","./modules/effect-coverflow/effect-coverflow.js":"lrjJG","./modules/effect-creative/effect-creative.js":"67vWL","./modules/effect-cards/effect-cards.js":"cs8o6","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"dxQSC":[function(require,module,exports,__globalThis) {
/* eslint no-param-reassign: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _domJs = require("../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../shared/utils.js");
var _getSupportJs = require("../shared/get-support.js");
var _getDeviceJs = require("../shared/get-device.js");
var _getBrowserJs = require("../shared/get-browser.js");
var _resizeJs = require("./modules/resize/resize.js");
var _resizeJsDefault = parcelHelpers.interopDefault(_resizeJs);
var _observerJs = require("./modules/observer/observer.js");
var _observerJsDefault = parcelHelpers.interopDefault(_observerJs);
var _eventsEmitterJs = require("./events-emitter.js");
var _eventsEmitterJsDefault = parcelHelpers.interopDefault(_eventsEmitterJs);
var _indexJs = require("./update/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);
var _indexJs1 = require("./translate/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs1);
var _indexJs2 = require("./transition/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./slide/index.js");
var _indexJsDefault3 = parcelHelpers.interopDefault(_indexJs3);
var _indexJs4 = require("./loop/index.js");
var _indexJsDefault4 = parcelHelpers.interopDefault(_indexJs4);
var _indexJs5 = require("./grab-cursor/index.js");
var _indexJsDefault5 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("./events/index.js");
var _indexJsDefault6 = parcelHelpers.interopDefault(_indexJs6);
var _indexJs7 = require("./breakpoints/index.js");
var _indexJsDefault7 = parcelHelpers.interopDefault(_indexJs7);
var _indexJs8 = require("./classes/index.js");
var _indexJsDefault8 = parcelHelpers.interopDefault(_indexJs8);
var _indexJs9 = require("./images/index.js");
var _indexJsDefault9 = parcelHelpers.interopDefault(_indexJs9);
var _indexJs10 = require("./check-overflow/index.js");
var _indexJsDefault10 = parcelHelpers.interopDefault(_indexJs10);
var _defaultsJs = require("./defaults.js");
var _defaultsJsDefault = parcelHelpers.interopDefault(_defaultsJs);
var _moduleExtendParamsJs = require("./moduleExtendParams.js");
var _moduleExtendParamsJsDefault = parcelHelpers.interopDefault(_moduleExtendParamsJs);
const prototypes = {
    eventsEmitter: (0, _eventsEmitterJsDefault.default),
    update: (0, _indexJsDefault.default),
    translate: (0, _indexJsDefault1.default),
    transition: (0, _indexJsDefault2.default),
    slide: (0, _indexJsDefault3.default),
    loop: (0, _indexJsDefault4.default),
    grabCursor: (0, _indexJsDefault5.default),
    events: (0, _indexJsDefault6.default),
    breakpoints: (0, _indexJsDefault7.default),
    checkOverflow: (0, _indexJsDefault10.default),
    classes: (0, _indexJsDefault8.default),
    images: (0, _indexJsDefault9.default)
};
const extendedDefaults = {};
class Swiper {
    constructor(...args){
        let el;
        let params;
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') params = args[0];
        else [el, params] = args;
        if (!params) params = {};
        params = (0, _utilsJs.extend)({}, params);
        if (el && !params.el) params.el = el;
        if (params.el && (0, _domJsDefault.default)(params.el).length > 1) {
            const swipers = [];
            (0, _domJsDefault.default)(params.el).each((containerEl)=>{
                const newParams = (0, _utilsJs.extend)({}, params, {
                    el: containerEl
                });
                swipers.push(new Swiper(newParams));
            }); // eslint-disable-next-line no-constructor-return
            return swipers;
        } // Swiper Instance
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = (0, _getSupportJs.getSupport)();
        swiper.device = (0, _getDeviceJs.getDevice)({
            userAgent: params.userAgent
        });
        swiper.browser = (0, _getBrowserJs.getBrowser)();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
        swiper.modules = [
            ...swiper.__modules__
        ];
        if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
        const allModulesParams = {};
        swiper.modules.forEach((mod)=>{
            mod({
                swiper,
                extendParams: (0, _moduleExtendParamsJsDefault.default)(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper)
            });
        }); // Extend defaults with modules params
        const swiperParams = (0, _utilsJs.extend)({}, (0, _defaultsJsDefault.default), allModulesParams); // Extend defaults with passed params
        swiper.params = (0, _utilsJs.extend)({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = (0, _utilsJs.extend)({}, swiper.params);
        swiper.passedParams = (0, _utilsJs.extend)({}, params); // add event listeners
        if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName)=>{
            swiper.on(eventName, swiper.params.on[eventName]);
        });
        if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
         // Save Dom lib
        swiper.$ = (0, _domJsDefault.default); // Extend Swiper
        Object.assign(swiper, {
            enabled: swiper.params.enabled,
            el,
            // Classes
            classNames: [],
            // Slides
            slides: (0, _domJsDefault.default)(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal () {
                return swiper.params.direction === 'horizontal';
            },
            isVertical () {
                return swiper.params.direction === 'vertical';
            },
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEvents: function touchEvents() {
                const touch = [
                    'touchstart',
                    'touchmove',
                    'touchend',
                    'touchcancel'
                ];
                const desktop = [
                    'pointerdown',
                    'pointermove',
                    'pointerup'
                ];
                swiper.touchEventsTouch = {
                    start: touch[0],
                    move: touch[1],
                    end: touch[2],
                    cancel: touch[3]
                };
                swiper.touchEventsDesktop = {
                    start: desktop[0],
                    move: desktop[1],
                    end: desktop[2]
                };
                return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
            }(),
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: (0, _utilsJs.now)(),
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                isTouchEvent: undefined,
                startMoving: undefined
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0
        });
        swiper.emit('_swiper'); // Init
        if (swiper.params.init) swiper.init();
         // Return app instance
        // eslint-disable-next-line no-constructor-return
        return swiper;
    }
    enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) swiper.setGrabCursor();
        swiper.emit('enable');
    }
    disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) swiper.unsetGrabCursor();
        swiper.emit('disable');
    }
    setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(' ').filter((className)=>{
            return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', cls.join(' '));
    }
    getSlideClasses(slideEl) {
        const swiper = this;
        if (swiper.destroyed) return '';
        return slideEl.className.split(' ').filter((className)=>{
            return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
    }
    emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.each((slideEl)=>{
            const classNames = swiper.getSlideClasses(slideEl);
            updates.push({
                slideEl,
                classNames
            });
            swiper.emit('_slideClass', slideEl, classNames);
        });
        swiper.emit('_slideClasses', updates);
    }
    slidesPerViewDynamic(view = 'current', exact = false) {
        const swiper = this;
        const { params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex } = swiper;
        let spv = 1;
        if (params.centeredSlides) {
            let slideSize = slides[activeIndex].swiperSlideSize;
            let breakLoop;
            for(let i = activeIndex + 1; i < slides.length; i += 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
            for(let i = activeIndex - 1; i >= 0; i -= 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
        } else {
            // eslint-disable-next-line
            if (view === 'current') for(let i = activeIndex + 1; i < slides.length; i += 1){
                const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                if (slideInView) spv += 1;
            }
            else // previous
            for(let i = activeIndex - 1; i >= 0; i -= 1){
                const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                if (slideInView) spv += 1;
            }
        }
        return spv;
    }
    update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const { snapGrid, params } = swiper; // Breakpoints
        if (params.breakpoints) swiper.setBreakpoint();
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
            const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        let translated;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
            setTranslate();
            if (swiper.params.autoHeight) swiper.updateAutoHeight();
        } else {
            if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (!translated) setTranslate();
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        swiper.emit('update');
    }
    changeDirection(newDirection, needUpdate = true) {
        const swiper = this;
        const currentDirection = swiper.params.direction;
        if (!newDirection) // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') return swiper;
        swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.each((slideEl)=>{
            if (newDirection === 'vertical') slideEl.style.width = '';
            else slideEl.style.height = '';
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
    }
    changeLanguageDirection(direction) {
        const swiper = this;
        if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
        swiper.rtl = direction === 'rtl';
        swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
        if (swiper.rtl) {
            swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = 'rtl';
        } else {
            swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
            swiper.el.dir = 'ltr';
        }
        swiper.update();
    }
    mount(el) {
        const swiper = this;
        if (swiper.mounted) return true; // Find el
        const $el = (0, _domJsDefault.default)(el || swiper.params.el);
        el = $el[0];
        if (!el) return false;
        el.swiper = swiper;
        const getWrapperSelector = ()=>{
            return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
        };
        const getWrapper = ()=>{
            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                const res = (0, _domJsDefault.default)(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items
                res.children = (options)=>$el.children(options);
                return res;
            }
            if (!$el.children) return (0, _domJsDefault.default)($el).children(getWrapperSelector());
            return $el.children(getWrapperSelector());
        }; // Find Wrapper
        let $wrapperEl = getWrapper();
        if ($wrapperEl.length === 0 && swiper.params.createElements) {
            const document = (0, _ssrWindow.getDocument)();
            const wrapper = document.createElement('div');
            $wrapperEl = (0, _domJsDefault.default)(wrapper);
            wrapper.className = swiper.params.wrapperClass;
            $el.append(wrapper);
            $el.children(`.${swiper.params.slideClass}`).each((slideEl)=>{
                $wrapperEl.append(slideEl);
            });
        }
        Object.assign(swiper, {
            $el,
            el,
            $wrapperEl,
            wrapperEl: $wrapperEl[0],
            mounted: true,
            // RTL
            rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
            rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
            wrongRTL: $wrapperEl.css('display') === '-webkit-box'
        });
        return true;
    }
    init(el) {
        const swiper = this;
        if (swiper.initialized) return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit('beforeInit'); // Set breakpoint
        if (swiper.params.breakpoints) swiper.setBreakpoint();
         // Add Classes
        swiper.addClasses(); // Create loop
        if (swiper.params.loop) swiper.loopCreate();
         // Update size
        swiper.updateSize(); // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) swiper.checkOverflow();
         // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
        if (swiper.params.preloadImages) swiper.preloadImages();
         // Slide To Initial Slide
        if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
        else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
         // Attach events
        swiper.attachEvents(); // Init Flag
        swiper.initialized = true; // Emit
        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
    }
    destroy(deleteInstance = true, cleanStyles = true) {
        const swiper = this;
        const { params, $el, $wrapperEl, slides } = swiper;
        if (typeof swiper.params === 'undefined' || swiper.destroyed) return null;
        swiper.emit('beforeDestroy'); // Init Flag
        swiper.initialized = false; // Detach events
        swiper.detachEvents(); // Destroy loop
        if (params.loop) swiper.loopDestroy();
         // Cleanup styles
        if (cleanStyles) {
            swiper.removeClasses();
            $el.removeAttr('style');
            $wrapperEl.removeAttr('style');
            if (slides && slides.length) slides.removeClass([
                params.slideVisibleClass,
                params.slideActiveClass,
                params.slideNextClass,
                params.slidePrevClass
            ].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
        }
        swiper.emit('destroy'); // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach((eventName)=>{
            swiper.off(eventName);
        });
        if (deleteInstance !== false) {
            swiper.$el[0].swiper = null;
            (0, _utilsJs.deleteProps)(swiper);
        }
        swiper.destroyed = true;
        return null;
    }
    static extendDefaults(newDefaults) {
        (0, _utilsJs.extend)(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
        return extendedDefaults;
    }
    static get defaults() {
        return 0, _defaultsJsDefault.default;
    }
    static installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        const modules = Swiper.prototype.__modules__;
        if (typeof mod === 'function' && modules.indexOf(mod) < 0) modules.push(mod);
    }
    static use(module) {
        if (Array.isArray(module)) {
            module.forEach((m)=>Swiper.installModule(m));
            return Swiper;
        }
        Swiper.installModule(module);
        return Swiper;
    }
}
Object.keys(prototypes).forEach((prototypeGroup)=>{
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod)=>{
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
});
Swiper.use([
    (0, _resizeJsDefault.default),
    (0, _observerJsDefault.default)
]);
exports.default = Swiper;

},{"ssr-window":"d3jFK","../shared/dom.js":"fSctW","../shared/utils.js":"hr9mL","../shared/get-support.js":"hc4YA","../shared/get-device.js":"7D5UL","../shared/get-browser.js":"gGygP","./modules/resize/resize.js":"jmpPC","./modules/observer/observer.js":"gMwdx","./events-emitter.js":"hT26z","./update/index.js":"gRjYx","./translate/index.js":"hptMS","./transition/index.js":"aegTm","./slide/index.js":"a5vJi","./loop/index.js":"8FnLv","./grab-cursor/index.js":"jmzNi","./events/index.js":"7tVEy","./breakpoints/index.js":"4ystW","./classes/index.js":"cVRTi","./images/index.js":"dXTAC","./check-overflow/index.js":"iOuBv","./defaults.js":"hQOza","./moduleExtendParams.js":"2Uajx","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"d3jFK":[function(require,module,exports,__globalThis) {
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */ /* eslint-disable no-param-reassign */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "getDocument", ()=>getDocument);
parcelHelpers.export(exports, "getWindow", ()=>getWindow);
parcelHelpers.export(exports, "ssrDocument", ()=>ssrDocument);
parcelHelpers.export(exports, "ssrWindow", ()=>ssrWindow);
function isObject(obj) {
    return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target = {}, src = {}) {
    Object.keys(src).forEach((key)=>{
        if (typeof target[key] === 'undefined') target[key] = src[key];
        else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
    });
}
const ssrDocument = {
    body: {},
    addEventListener () {},
    removeEventListener () {},
    activeElement: {
        blur () {},
        nodeName: ''
    },
    querySelector () {
        return null;
    },
    querySelectorAll () {
        return [];
    },
    getElementById () {
        return null;
    },
    createEvent () {
        return {
            initEvent () {}
        };
    },
    createElement () {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute () {},
            getElementsByTagName () {
                return [];
            }
        };
    },
    createElementNS () {
        return {};
    },
    importNode () {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    }
};
function getDocument() {
    const doc = typeof document !== 'undefined' ? document : {};
    extend(doc, ssrDocument);
    return doc;
}
const ssrWindow = {
    document: ssrDocument,
    navigator: {
        userAgent: ''
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    },
    history: {
        replaceState () {},
        pushState () {},
        go () {},
        back () {}
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener () {},
    removeEventListener () {},
    getComputedStyle () {
        return {
            getPropertyValue () {
                return '';
            }
        };
    },
    Image () {},
    Date () {},
    screen: {},
    setTimeout () {},
    clearTimeout () {},
    matchMedia () {
        return {};
    },
    requestAnimationFrame (callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame (id) {
        if (typeof setTimeout === 'undefined') return;
        clearTimeout(id);
    }
};
function getWindow() {
    const win = typeof window !== 'undefined' ? window : {};
    extend(win, ssrWindow);
    return win;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"fSctW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dom7 = require("dom7");
const Methods = {
    addClass: (0, _dom7.addClass),
    removeClass: (0, _dom7.removeClass),
    hasClass: (0, _dom7.hasClass),
    toggleClass: (0, _dom7.toggleClass),
    attr: (0, _dom7.attr),
    removeAttr: (0, _dom7.removeAttr),
    transform: (0, _dom7.transform),
    transition: (0, _dom7.transition),
    on: (0, _dom7.on),
    off: (0, _dom7.off),
    trigger: (0, _dom7.trigger),
    transitionEnd: (0, _dom7.transitionEnd),
    outerWidth: (0, _dom7.outerWidth),
    outerHeight: (0, _dom7.outerHeight),
    styles: (0, _dom7.styles),
    offset: (0, _dom7.offset),
    css: (0, _dom7.css),
    each: (0, _dom7.each),
    html: (0, _dom7.html),
    text: (0, _dom7.text),
    is: (0, _dom7.is),
    index: (0, _dom7.index),
    eq: (0, _dom7.eq),
    append: (0, _dom7.append),
    prepend: (0, _dom7.prepend),
    next: (0, _dom7.next),
    nextAll: (0, _dom7.nextAll),
    prev: (0, _dom7.prev),
    prevAll: (0, _dom7.prevAll),
    parent: (0, _dom7.parent),
    parents: (0, _dom7.parents),
    closest: (0, _dom7.closest),
    find: (0, _dom7.find),
    children: (0, _dom7.children),
    filter: (0, _dom7.filter),
    remove: (0, _dom7.remove)
};
Object.keys(Methods).forEach((methodName)=>{
    Object.defineProperty((0, _dom7.$).fn, methodName, {
        value: Methods[methodName],
        writable: true
    });
});
exports.default = (0, _dom7.$);

},{"dom7":"gSoAp","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"gSoAp":[function(require,module,exports,__globalThis) {
/**
 * Dom7 4.0.6
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * https://framework7.io/docs/dom7.html
 *
 * Copyright 2023, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: February 2, 2023
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "$", ()=>$);
parcelHelpers.export(exports, "add", ()=>add);
parcelHelpers.export(exports, "addClass", ()=>addClass);
parcelHelpers.export(exports, "animate", ()=>animate);
parcelHelpers.export(exports, "animationEnd", ()=>animationEnd);
parcelHelpers.export(exports, "append", ()=>append);
parcelHelpers.export(exports, "appendTo", ()=>appendTo);
parcelHelpers.export(exports, "attr", ()=>attr);
parcelHelpers.export(exports, "blur", ()=>blur);
parcelHelpers.export(exports, "change", ()=>change);
parcelHelpers.export(exports, "children", ()=>children);
parcelHelpers.export(exports, "click", ()=>click);
parcelHelpers.export(exports, "closest", ()=>closest);
parcelHelpers.export(exports, "css", ()=>css);
parcelHelpers.export(exports, "data", ()=>data);
parcelHelpers.export(exports, "dataset", ()=>dataset);
parcelHelpers.export(exports, "detach", ()=>detach);
parcelHelpers.export(exports, "each", ()=>each);
parcelHelpers.export(exports, "empty", ()=>empty);
parcelHelpers.export(exports, "eq", ()=>eq);
parcelHelpers.export(exports, "filter", ()=>filter);
parcelHelpers.export(exports, "find", ()=>find);
parcelHelpers.export(exports, "focus", ()=>focus);
parcelHelpers.export(exports, "focusin", ()=>focusin);
parcelHelpers.export(exports, "focusout", ()=>focusout);
parcelHelpers.export(exports, "hasClass", ()=>hasClass);
parcelHelpers.export(exports, "height", ()=>height);
parcelHelpers.export(exports, "hide", ()=>hide);
parcelHelpers.export(exports, "html", ()=>html);
parcelHelpers.export(exports, "index", ()=>index);
parcelHelpers.export(exports, "insertAfter", ()=>insertAfter);
parcelHelpers.export(exports, "insertBefore", ()=>insertBefore);
parcelHelpers.export(exports, "is", ()=>is);
parcelHelpers.export(exports, "keydown", ()=>keydown);
parcelHelpers.export(exports, "keypress", ()=>keypress);
parcelHelpers.export(exports, "keyup", ()=>keyup);
parcelHelpers.export(exports, "mousedown", ()=>mousedown);
parcelHelpers.export(exports, "mouseenter", ()=>mouseenter);
parcelHelpers.export(exports, "mouseleave", ()=>mouseleave);
parcelHelpers.export(exports, "mousemove", ()=>mousemove);
parcelHelpers.export(exports, "mouseout", ()=>mouseout);
parcelHelpers.export(exports, "mouseover", ()=>mouseover);
parcelHelpers.export(exports, "mouseup", ()=>mouseup);
parcelHelpers.export(exports, "next", ()=>next);
parcelHelpers.export(exports, "nextAll", ()=>nextAll);
parcelHelpers.export(exports, "off", ()=>off);
parcelHelpers.export(exports, "offset", ()=>offset);
parcelHelpers.export(exports, "on", ()=>on);
parcelHelpers.export(exports, "once", ()=>once);
parcelHelpers.export(exports, "outerHeight", ()=>outerHeight);
parcelHelpers.export(exports, "outerWidth", ()=>outerWidth);
parcelHelpers.export(exports, "parent", ()=>parent);
parcelHelpers.export(exports, "parents", ()=>parents);
parcelHelpers.export(exports, "prepend", ()=>prepend);
parcelHelpers.export(exports, "prependTo", ()=>prependTo);
parcelHelpers.export(exports, "prev", ()=>prev);
parcelHelpers.export(exports, "prevAll", ()=>prevAll);
parcelHelpers.export(exports, "prop", ()=>prop);
parcelHelpers.export(exports, "remove", ()=>remove);
parcelHelpers.export(exports, "removeAttr", ()=>removeAttr);
parcelHelpers.export(exports, "removeClass", ()=>removeClass);
parcelHelpers.export(exports, "removeData", ()=>removeData);
parcelHelpers.export(exports, "resize", ()=>resize);
parcelHelpers.export(exports, "scroll", ()=>scroll);
parcelHelpers.export(exports, "scrollLeft", ()=>scrollLeft);
parcelHelpers.export(exports, "scrollTo", ()=>scrollTo);
parcelHelpers.export(exports, "scrollTop", ()=>scrollTop);
parcelHelpers.export(exports, "show", ()=>show);
parcelHelpers.export(exports, "siblings", ()=>siblings);
parcelHelpers.export(exports, "stop", ()=>stop);
parcelHelpers.export(exports, "styles", ()=>styles);
parcelHelpers.export(exports, "submit", ()=>submit);
parcelHelpers.export(exports, "text", ()=>text);
parcelHelpers.export(exports, "toggleClass", ()=>toggleClass);
parcelHelpers.export(exports, "touchend", ()=>touchend);
parcelHelpers.export(exports, "touchmove", ()=>touchmove);
parcelHelpers.export(exports, "touchstart", ()=>touchstart);
parcelHelpers.export(exports, "transform", ()=>transform);
parcelHelpers.export(exports, "transition", ()=>transition);
parcelHelpers.export(exports, "transitionEnd", ()=>transitionEnd);
parcelHelpers.export(exports, "transitionStart", ()=>transitionStart);
parcelHelpers.export(exports, "trigger", ()=>trigger);
parcelHelpers.export(exports, "val", ()=>val);
parcelHelpers.export(exports, "value", ()=>value);
parcelHelpers.export(exports, "width", ()=>width);
var _ssrWindow = require("ssr-window");
/* eslint-disable no-proto */ function makeReactive(obj) {
    const proto = obj.__proto__;
    Object.defineProperty(obj, '__proto__', {
        get () {
            return proto;
        },
        set (value) {
            proto.__proto__ = value;
        }
    });
}
class Dom7 extends Array {
    constructor(items){
        if (typeof items === 'number') super(items);
        else {
            super(...items || []);
            makeReactive(this);
        }
    }
}
function arrayFlat(arr = []) {
    const res = [];
    arr.forEach((el)=>{
        if (Array.isArray(el)) res.push(...arrayFlat(el));
        else res.push(el);
    });
    return res;
}
function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
}
function arrayUnique(arr) {
    const uniqueArray = [];
    for(let i = 0; i < arr.length; i += 1)if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    return uniqueArray;
}
function toCamelCase(string) {
    return string.toLowerCase().replace(/-(.)/g, (match, group)=>group.toUpperCase());
}
// eslint-disable-next-line
function qsa(selector, context) {
    if (typeof selector !== 'string') return [
        selector
    ];
    const a = [];
    const res = context.querySelectorAll(selector);
    for(let i = 0; i < res.length; i += 1)a.push(res[i]);
    return a;
}
function $(selector, context) {
    const window = (0, _ssrWindow.getWindow)();
    const document = (0, _ssrWindow.getDocument)();
    let arr = [];
    if (!context && selector instanceof Dom7) return selector;
    if (!selector) return new Dom7(arr);
    if (typeof selector === 'string') {
        const html = selector.trim();
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
            let toCreate = 'div';
            if (html.indexOf('<li') === 0) toCreate = 'ul';
            if (html.indexOf('<tr') === 0) toCreate = 'tbody';
            if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
            if (html.indexOf('<tbody') === 0) toCreate = 'table';
            if (html.indexOf('<option') === 0) toCreate = 'select';
            const tempParent = document.createElement(toCreate);
            tempParent.innerHTML = html;
            for(let i = 0; i < tempParent.childNodes.length; i += 1)arr.push(tempParent.childNodes[i]);
        } else arr = qsa(selector.trim(), context || document);
         // arr = qsa(selector, document);
    } else if (selector.nodeType || selector === window || selector === document) arr.push(selector);
    else if (Array.isArray(selector)) {
        if (selector instanceof Dom7) return selector;
        arr = selector;
    }
    return new Dom7(arrayUnique(arr));
}
$.fn = Dom7.prototype;
// eslint-disable-next-line
function addClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(' ')));
    this.forEach((el)=>{
        el.classList.add(...classNames);
    });
    return this;
}
function removeClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(' ')));
    this.forEach((el)=>{
        el.classList.remove(...classNames);
    });
    return this;
}
function toggleClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(' ')));
    this.forEach((el)=>{
        classNames.forEach((className)=>{
            el.classList.toggle(className);
        });
    });
}
function hasClass(...classes) {
    const classNames = arrayFlat(classes.map((c)=>c.split(' ')));
    return arrayFilter(this, (el)=>{
        return classNames.filter((className)=>el.classList.contains(className)).length > 0;
    }).length > 0;
}
function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
    } // Set attrs
    for(let i = 0; i < this.length; i += 1){
        if (arguments.length === 2) // String
        this[i].setAttribute(attrs, value);
        else // Object
        for(const attrName in attrs){
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
        }
    }
    return this;
}
function removeAttr(attr) {
    for(let i = 0; i < this.length; i += 1)this[i].removeAttribute(attr);
    return this;
}
function prop(props, value) {
    if (arguments.length === 1 && typeof props === 'string') {
        // Get prop
        if (this[0]) return this[0][props];
    } else {
        // Set props
        for(let i = 0; i < this.length; i += 1){
            if (arguments.length === 2) // String
            this[i][props] = value;
            else // Object
            for(const propName in props)this[i][propName] = props[propName];
        }
        return this;
    }
    return this;
}
function data(key, value) {
    let el;
    if (typeof value === 'undefined') {
        el = this[0];
        if (!el) return undefined; // Get value
        if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) return el.dom7ElementDataStorage[key];
        const dataKey = el.getAttribute(`data-${key}`);
        if (dataKey) return dataKey;
        return undefined;
    } // Set value
    for(let i = 0; i < this.length; i += 1){
        el = this[i];
        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
        el.dom7ElementDataStorage[key] = value;
    }
    return this;
}
function removeData(key) {
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
            el.dom7ElementDataStorage[key] = null;
            delete el.dom7ElementDataStorage[key];
        }
    }
}
function dataset() {
    const el = this[0];
    if (!el) return undefined;
    const dataset = {}; // eslint-disable-line
    if (el.dataset) for(const dataKey in el.dataset)dataset[dataKey] = el.dataset[dataKey];
    else for(let i = 0; i < el.attributes.length; i += 1){
        const attr = el.attributes[i];
        if (attr.name.indexOf('data-') >= 0) dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value;
    }
    for(const key in dataset){
        if (dataset[key] === 'false') dataset[key] = false;
        else if (dataset[key] === 'true') dataset[key] = true;
        else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
    }
    return dataset;
}
function val(value) {
    if (typeof value === 'undefined') {
        // get value
        const el = this[0];
        if (!el) return undefined;
        if (el.multiple && el.nodeName.toLowerCase() === 'select') {
            const values = [];
            for(let i = 0; i < el.selectedOptions.length; i += 1)values.push(el.selectedOptions[i].value);
            return values;
        }
        return el.value;
    } // set value
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') for(let j = 0; j < el.options.length; j += 1)el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
        else el.value = value;
    }
    return this;
}
function value(value) {
    return this.val(value);
}
function transform(transform) {
    for(let i = 0; i < this.length; i += 1)this[i].style.transform = transform;
    return this;
}
function transition(duration) {
    for(let i = 0; i < this.length; i += 1)this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
    return this;
}
function on(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
    }
    if (!capture) capture = false;
    function handleLiveEvent(e) {
        const target = e.target;
        if (!target) return;
        const eventData = e.target.dom7EventData || [];
        if (eventData.indexOf(e) < 0) eventData.unshift(e);
        if ($(target).is(targetSelector)) listener.apply(target, eventData);
        else {
            const parents = $(target).parents(); // eslint-disable-line
            for(let k = 0; k < parents.length; k += 1)if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
        }
    }
    function handleEvent(e) {
        const eventData = e && e.target ? e.target.dom7EventData || [] : [];
        if (eventData.indexOf(e) < 0) eventData.unshift(e);
        listener.apply(this, eventData);
    }
    const events = eventType.split(' ');
    let j;
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (!targetSelector) for(j = 0; j < events.length; j += 1){
            const event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {};
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
                listener,
                proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
        }
        else // Live events
        for(j = 0; j < events.length; j += 1){
            const event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
            if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
            el.dom7LiveListeners[event].push({
                listener,
                proxyListener: handleLiveEvent
            });
            el.addEventListener(event, handleLiveEvent, capture);
        }
    }
    return this;
}
function off(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
    }
    if (!capture) capture = false;
    const events = eventType.split(' ');
    for(let i = 0; i < events.length; i += 1){
        const event = events[i];
        for(let j = 0; j < this.length; j += 1){
            const el = this[j];
            let handlers;
            if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event];
            else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
            if (handlers && handlers.length) for(let k = handlers.length - 1; k >= 0; k -= 1){
                const handler = handlers[k];
                if (listener && handler.listener === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                } else if (!listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                }
            }
        }
    }
    return this;
}
function once(...args) {
    const dom = this;
    let [eventName, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
        [eventName, listener, capture] = args;
        targetSelector = undefined;
    }
    function onceHandler(...eventArgs) {
        listener.apply(this, eventArgs);
        dom.off(eventName, targetSelector, onceHandler, capture);
        if (onceHandler.dom7proxy) delete onceHandler.dom7proxy;
    }
    onceHandler.dom7proxy = listener;
    return dom.on(eventName, targetSelector, onceHandler, capture);
}
function trigger(...args) {
    const window = (0, _ssrWindow.getWindow)();
    const events = args[0].split(' ');
    const eventData = args[1];
    for(let i = 0; i < events.length; i += 1){
        const event = events[i];
        for(let j = 0; j < this.length; j += 1){
            const el = this[j];
            if (window.CustomEvent) {
                const evt = new window.CustomEvent(event, {
                    detail: eventData,
                    bubbles: true,
                    cancelable: true
                });
                el.dom7EventData = args.filter((data, dataIndex)=>dataIndex > 0);
                el.dispatchEvent(evt);
                el.dom7EventData = [];
                delete el.dom7EventData;
            }
        }
    }
    return this;
}
function transitionStart(callback) {
    const dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('transitionstart', fireCallBack);
    }
    if (callback) dom.on('transitionstart', fireCallBack);
    return this;
}
function transitionEnd(callback) {
    const dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('transitionend', fireCallBack);
    }
    if (callback) dom.on('transitionend', fireCallBack);
    return this;
}
function animationEnd(callback) {
    const dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('animationend', fireCallBack);
    }
    if (callback) dom.on('animationend', fireCallBack);
    return this;
}
function width() {
    const window = (0, _ssrWindow.getWindow)();
    if (this[0] === window) return window.innerWidth;
    if (this.length > 0) return parseFloat(this.css('width'));
    return null;
}
function outerWidth(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            const styles = this.styles();
            return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
        }
        return this[0].offsetWidth;
    }
    return null;
}
function height() {
    const window = (0, _ssrWindow.getWindow)();
    if (this[0] === window) return window.innerHeight;
    if (this.length > 0) return parseFloat(this.css('height'));
    return null;
}
function outerHeight(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            const styles = this.styles();
            return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
        }
        return this[0].offsetHeight;
    }
    return null;
}
function offset() {
    if (this.length > 0) {
        const window = (0, _ssrWindow.getWindow)();
        const document = (0, _ssrWindow.getDocument)();
        const el = this[0];
        const box = el.getBoundingClientRect();
        const body = document.body;
        const clientTop = el.clientTop || body.clientTop || 0;
        const clientLeft = el.clientLeft || body.clientLeft || 0;
        const scrollTop = el === window ? window.scrollY : el.scrollTop;
        const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
            top: box.top + scrollTop - clientTop,
            left: box.left + scrollLeft - clientLeft
        };
    }
    return null;
}
function hide() {
    for(let i = 0; i < this.length; i += 1)this[i].style.display = 'none';
    return this;
}
function show() {
    const window = (0, _ssrWindow.getWindow)();
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.style.display === 'none') el.style.display = '';
        if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') // Still not visible
        el.style.display = 'block';
    }
    return this;
}
function styles() {
    const window = (0, _ssrWindow.getWindow)();
    if (this[0]) return window.getComputedStyle(this[0], null);
    return {};
}
function css(props, value) {
    const window = (0, _ssrWindow.getWindow)();
    let i;
    if (arguments.length === 1) {
        if (typeof props === 'string') {
            // .css('width')
            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
            // .css({ width: '100px' })
            for(i = 0; i < this.length; i += 1)for(const prop in props)this[i].style[prop] = props[prop];
            return this;
        }
    }
    if (arguments.length === 2 && typeof props === 'string') {
        // .css('width', '100px')
        for(i = 0; i < this.length; i += 1)this[i].style[props] = value;
        return this;
    }
    return this;
}
function each(callback) {
    if (!callback) return this;
    this.forEach((el, index)=>{
        callback.apply(el, [
            el,
            index
        ]);
    });
    return this;
}
function filter(callback) {
    const result = arrayFilter(this, callback);
    return $(result);
}
function html(html) {
    if (typeof html === 'undefined') return this[0] ? this[0].innerHTML : null;
    for(let i = 0; i < this.length; i += 1)this[i].innerHTML = html;
    return this;
}
function text(text) {
    if (typeof text === 'undefined') return this[0] ? this[0].textContent.trim() : null;
    for(let i = 0; i < this.length; i += 1)this[i].textContent = text;
    return this;
}
function is(selector) {
    const window = (0, _ssrWindow.getWindow)();
    const document = (0, _ssrWindow.getDocument)();
    const el = this[0];
    let compareWith;
    let i;
    if (!el || typeof selector === 'undefined') return false;
    if (typeof selector === 'string') {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $(selector);
        for(i = 0; i < compareWith.length; i += 1){
            if (compareWith[i] === el) return true;
        }
        return false;
    }
    if (selector === document) return el === document;
    if (selector === window) return el === window;
    if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [
            selector
        ] : selector;
        for(i = 0; i < compareWith.length; i += 1){
            if (compareWith[i] === el) return true;
        }
        return false;
    }
    return false;
}
function index() {
    let child = this[0];
    let i;
    if (child) {
        i = 0; // eslint-disable-next-line
        while((child = child.previousSibling) !== null)if (child.nodeType === 1) i += 1;
        return i;
    }
    return undefined;
}
function eq(index) {
    if (typeof index === 'undefined') return this;
    const length = this.length;
    if (index > length - 1) return $([]);
    if (index < 0) {
        const returnIndex = length + index;
        if (returnIndex < 0) return $([]);
        return $([
            this[returnIndex]
        ]);
    }
    return $([
        this[index]
    ]);
}
function append(...els) {
    let newChild;
    const document = (0, _ssrWindow.getDocument)();
    for(let k = 0; k < els.length; k += 1){
        newChild = els[k];
        for(let i = 0; i < this.length; i += 1){
            if (typeof newChild === 'string') {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newChild;
                while(tempDiv.firstChild)this[i].appendChild(tempDiv.firstChild);
            } else if (newChild instanceof Dom7) for(let j = 0; j < newChild.length; j += 1)this[i].appendChild(newChild[j]);
            else this[i].appendChild(newChild);
        }
    }
    return this;
}
function appendTo(parent) {
    $(parent).append(this);
    return this;
}
function prepend(newChild) {
    const document = (0, _ssrWindow.getDocument)();
    let i;
    let j;
    for(i = 0; i < this.length; i += 1){
        if (typeof newChild === 'string') {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;
            for(j = tempDiv.childNodes.length - 1; j >= 0; j -= 1)this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        } else if (newChild instanceof Dom7) for(j = 0; j < newChild.length; j += 1)this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        else this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
    return this;
}
function prependTo(parent) {
    $(parent).prepend(this);
    return this;
}
function insertBefore(selector) {
    const before = $(selector);
    for(let i = 0; i < this.length; i += 1){
        if (before.length === 1) before[0].parentNode.insertBefore(this[i], before[0]);
        else if (before.length > 1) for(let j = 0; j < before.length; j += 1)before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
    }
}
function insertAfter(selector) {
    const after = $(selector);
    for(let i = 0; i < this.length; i += 1){
        if (after.length === 1) after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
        else if (after.length > 1) for(let j = 0; j < after.length; j += 1)after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
    }
}
function next(selector) {
    if (this.length > 0) {
        if (selector) {
            if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) return $([
                this[0].nextElementSibling
            ]);
            return $([]);
        }
        if (this[0].nextElementSibling) return $([
            this[0].nextElementSibling
        ]);
        return $([]);
    }
    return $([]);
}
function nextAll(selector) {
    const nextEls = [];
    let el = this[0];
    if (!el) return $([]);
    while(el.nextElementSibling){
        const next = el.nextElementSibling; // eslint-disable-line
        if (selector) {
            if ($(next).is(selector)) nextEls.push(next);
        } else nextEls.push(next);
        el = next;
    }
    return $(nextEls);
}
function prev(selector) {
    if (this.length > 0) {
        const el = this[0];
        if (selector) {
            if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) return $([
                el.previousElementSibling
            ]);
            return $([]);
        }
        if (el.previousElementSibling) return $([
            el.previousElementSibling
        ]);
        return $([]);
    }
    return $([]);
}
function prevAll(selector) {
    const prevEls = [];
    let el = this[0];
    if (!el) return $([]);
    while(el.previousElementSibling){
        const prev = el.previousElementSibling; // eslint-disable-line
        if (selector) {
            if ($(prev).is(selector)) prevEls.push(prev);
        } else prevEls.push(prev);
        el = prev;
    }
    return $(prevEls);
}
function siblings(selector) {
    return this.nextAll(selector).add(this.prevAll(selector));
}
function parent(selector) {
    const parents = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1)if (this[i].parentNode !== null) {
        if (selector) {
            if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
        } else parents.push(this[i].parentNode);
    }
    return $(parents);
}
function parents(selector) {
    const parents = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1){
        let parent = this[i].parentNode; // eslint-disable-line
        while(parent){
            if (selector) {
                if ($(parent).is(selector)) parents.push(parent);
            } else parents.push(parent);
            parent = parent.parentNode;
        }
    }
    return $(parents);
}
function closest(selector) {
    let closest = this; // eslint-disable-line
    if (typeof selector === 'undefined') return $([]);
    if (!closest.is(selector)) closest = closest.parents(selector).eq(0);
    return closest;
}
function find(selector) {
    const foundElements = [];
    for(let i = 0; i < this.length; i += 1){
        const found = this[i].querySelectorAll(selector);
        for(let j = 0; j < found.length; j += 1)foundElements.push(found[j]);
    }
    return $(foundElements);
}
function children(selector) {
    const children = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1){
        const childNodes = this[i].children;
        for(let j = 0; j < childNodes.length; j += 1)if (!selector || $(childNodes[j]).is(selector)) children.push(childNodes[j]);
    }
    return $(children);
}
function remove() {
    for(let i = 0; i < this.length; i += 1)if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
    return this;
}
function detach() {
    return this.remove();
}
function add(...els) {
    const dom = this;
    let i;
    let j;
    for(i = 0; i < els.length; i += 1){
        const toAdd = $(els[i]);
        for(j = 0; j < toAdd.length; j += 1)dom.push(toAdd[j]);
    }
    return dom;
}
function empty() {
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.nodeType === 1) {
            for(let j = 0; j < el.childNodes.length; j += 1)if (el.childNodes[j].parentNode) el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
            el.textContent = '';
        }
    }
    return this;
}
// eslint-disable-next-line
function scrollTo(...args) {
    const window = (0, _ssrWindow.getWindow)();
    let [left, top, duration, easing, callback] = args;
    if (args.length === 4 && typeof easing === 'function') {
        callback = easing;
        [left, top, duration, callback, easing] = args;
    }
    if (typeof easing === 'undefined') easing = 'swing';
    return this.each(function animate() {
        const el = this;
        let currentTop;
        let currentLeft;
        let maxTop;
        let maxLeft;
        let newTop;
        let newLeft;
        let scrollTop; // eslint-disable-line
        let scrollLeft; // eslint-disable-line
        let animateTop = top > 0 || top === 0;
        let animateLeft = left > 0 || left === 0;
        if (typeof easing === 'undefined') easing = 'swing';
        if (animateTop) {
            currentTop = el.scrollTop;
            if (!duration) el.scrollTop = top;
        }
        if (animateLeft) {
            currentLeft = el.scrollLeft;
            if (!duration) el.scrollLeft = left;
        }
        if (!duration) return;
        if (animateTop) {
            maxTop = el.scrollHeight - el.offsetHeight;
            newTop = Math.max(Math.min(top, maxTop), 0);
        }
        if (animateLeft) {
            maxLeft = el.scrollWidth - el.offsetWidth;
            newLeft = Math.max(Math.min(left, maxLeft), 0);
        }
        let startTime = null;
        if (animateTop && newTop === currentTop) animateTop = false;
        if (animateLeft && newLeft === currentLeft) animateLeft = false;
        function render(time = new Date().getTime()) {
            if (startTime === null) startTime = time;
            const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
            const easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
            let done;
            if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
            if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);
            if (animateTop && newTop > currentTop && scrollTop >= newTop) {
                el.scrollTop = newTop;
                done = true;
            }
            if (animateTop && newTop < currentTop && scrollTop <= newTop) {
                el.scrollTop = newTop;
                done = true;
            }
            if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
                el.scrollLeft = newLeft;
                done = true;
            }
            if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
                el.scrollLeft = newLeft;
                done = true;
            }
            if (done) {
                if (callback) callback();
                return;
            }
            if (animateTop) el.scrollTop = scrollTop;
            if (animateLeft) el.scrollLeft = scrollLeft;
            window.requestAnimationFrame(render);
        }
        window.requestAnimationFrame(render);
    });
} // scrollTop(top, duration, easing, callback) {
function scrollTop(...args) {
    let [top, duration, easing, callback] = args;
    if (args.length === 3 && typeof easing === 'function') [top, duration, callback, easing] = args;
    const dom = this;
    if (typeof top === 'undefined') {
        if (dom.length > 0) return dom[0].scrollTop;
        return null;
    }
    return dom.scrollTo(undefined, top, duration, easing, callback);
}
function scrollLeft(...args) {
    let [left, duration, easing, callback] = args;
    if (args.length === 3 && typeof easing === 'function') [left, duration, callback, easing] = args;
    const dom = this;
    if (typeof left === 'undefined') {
        if (dom.length > 0) return dom[0].scrollLeft;
        return null;
    }
    return dom.scrollTo(left, undefined, duration, easing, callback);
}
// eslint-disable-next-line
function animate(initialProps, initialParams) {
    const window = (0, _ssrWindow.getWindow)();
    const els = this;
    const a = {
        props: Object.assign({}, initialProps),
        params: Object.assign({
            duration: 300,
            easing: 'swing' // or 'linear'
        }, initialParams),
        elements: els,
        animating: false,
        que: [],
        easingProgress (easing, progress) {
            if (easing === 'swing') return 0.5 - Math.cos(progress * Math.PI) / 2;
            if (typeof easing === 'function') return easing(progress);
            return progress;
        },
        stop () {
            if (a.frameId) window.cancelAnimationFrame(a.frameId);
            a.animating = false;
            a.elements.each((el)=>{
                const element = el;
                delete element.dom7AnimateInstance;
            });
            a.que = [];
        },
        done (complete) {
            a.animating = false;
            a.elements.each((el)=>{
                const element = el;
                delete element.dom7AnimateInstance;
            });
            if (complete) complete(els);
            if (a.que.length > 0) {
                const que = a.que.shift();
                a.animate(que[0], que[1]);
            }
        },
        animate (props, params) {
            if (a.animating) {
                a.que.push([
                    props,
                    params
                ]);
                return a;
            }
            const elements = []; // Define & Cache Initials & Units
            a.elements.each((el, index)=>{
                let initialFullValue;
                let initialValue;
                let unit;
                let finalValue;
                let finalFullValue;
                if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
                elements[index] = {
                    container: el
                };
                Object.keys(props).forEach((prop)=>{
                    initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
                    initialValue = parseFloat(initialFullValue);
                    unit = initialFullValue.replace(initialValue, '');
                    finalValue = parseFloat(props[prop]);
                    finalFullValue = props[prop] + unit;
                    elements[index][prop] = {
                        initialFullValue,
                        initialValue,
                        unit,
                        finalValue,
                        finalFullValue,
                        currentValue: initialValue
                    };
                });
            });
            let startTime = null;
            let time;
            let elementsDone = 0;
            let propsDone = 0;
            let done;
            let began = false;
            a.animating = true;
            function render() {
                time = new Date().getTime();
                let progress;
                let easeProgress; // let el;
                if (!began) {
                    began = true;
                    if (params.begin) params.begin(els);
                }
                if (startTime === null) startTime = time;
                if (params.progress) // eslint-disable-next-line
                params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
                elements.forEach((element)=>{
                    const el = element;
                    if (done || el.done) return;
                    Object.keys(props).forEach((prop)=>{
                        if (done || el.done) return;
                        progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
                        easeProgress = a.easingProgress(params.easing, progress);
                        const { initialValue, finalValue, unit } = el[prop];
                        el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
                        const currentValue = el[prop].currentValue;
                        if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
                            el.container.style[prop] = finalValue + unit;
                            propsDone += 1;
                            if (propsDone === Object.keys(props).length) {
                                el.done = true;
                                elementsDone += 1;
                            }
                            if (elementsDone === elements.length) done = true;
                        }
                        if (done) {
                            a.done(params.complete);
                            return;
                        }
                        el.container.style[prop] = currentValue + unit;
                    });
                });
                if (done) return; // Then call
                a.frameId = window.requestAnimationFrame(render);
            }
            a.frameId = window.requestAnimationFrame(render);
            return a;
        }
    };
    if (a.elements.length === 0) return els;
    let animateInstance;
    for(let i = 0; i < a.elements.length; i += 1)if (a.elements[i].dom7AnimateInstance) animateInstance = a.elements[i].dom7AnimateInstance;
    else a.elements[i].dom7AnimateInstance = a;
    if (!animateInstance) animateInstance = a;
    if (initialProps === 'stop') animateInstance.stop();
    else animateInstance.animate(a.props, a.params);
    return els;
}
function stop() {
    const els = this;
    for(let i = 0; i < els.length; i += 1)if (els[i].dom7AnimateInstance) els[i].dom7AnimateInstance.stop();
}
const noTrigger = 'resize scroll'.split(' ');
function shortcut(name) {
    function eventHandler(...args) {
        if (typeof args[0] === 'undefined') {
            for(let i = 0; i < this.length; i += 1)if (noTrigger.indexOf(name) < 0) {
                if (name in this[i]) this[i][name]();
                else $(this[i]).trigger(name);
            }
            return this;
        }
        return this.on(name, ...args);
    }
    return eventHandler;
}
const click = shortcut('click');
const blur = shortcut('blur');
const focus = shortcut('focus');
const focusin = shortcut('focusin');
const focusout = shortcut('focusout');
const keyup = shortcut('keyup');
const keydown = shortcut('keydown');
const keypress = shortcut('keypress');
const submit = shortcut('submit');
const change = shortcut('change');
const mousedown = shortcut('mousedown');
const mousemove = shortcut('mousemove');
const mouseup = shortcut('mouseup');
const mouseenter = shortcut('mouseenter');
const mouseleave = shortcut('mouseleave');
const mouseout = shortcut('mouseout');
const mouseover = shortcut('mouseover');
const touchstart = shortcut('touchstart');
const touchend = shortcut('touchend');
const touchmove = shortcut('touchmove');
const resize = shortcut('resize');
const scroll = shortcut('scroll');
exports.default = $;

},{"ssr-window":"d3jFK","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"hr9mL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateCSSModeScroll", ()=>animateCSSModeScroll);
parcelHelpers.export(exports, "deleteProps", ()=>deleteProps);
parcelHelpers.export(exports, "nextTick", ()=>nextTick);
parcelHelpers.export(exports, "now", ()=>now);
parcelHelpers.export(exports, "getTranslate", ()=>getTranslate);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "extend", ()=>extend);
parcelHelpers.export(exports, "getComputedStyle", ()=>getComputedStyle);
parcelHelpers.export(exports, "setCSSProperty", ()=>setCSSProperty);
var _ssrWindow = require("ssr-window");
function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key)=>{
        try {
            object[key] = null;
        } catch (e) {}
        try {
            delete object[key];
        } catch (e) {}
    });
}
function nextTick(callback, delay = 0) {
    return setTimeout(callback, delay);
}
function now() {
    return Date.now();
}
function getComputedStyle(el) {
    const window1 = (0, _ssrWindow.getWindow)();
    let style;
    if (window1.getComputedStyle) style = window1.getComputedStyle(el, null);
    if (!style && el.currentStyle) style = el.currentStyle;
    if (!style) style = el.style;
    return style;
}
function getTranslate(el, axis = 'x') {
    const window1 = (0, _ssrWindow.getWindow)();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle(el, null);
    if (window1.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) curTransform = curTransform.split(', ').map((a)=>a.replace(',', '.')).join(', ');
         // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new window1.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
    }
    if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window1.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
}
function isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') return node instanceof HTMLElement;
    return node && (node.nodeType === 1 || node.nodeType === 11);
}
function extend(...args) {
    const to = Object(args[0]);
    const noExtend = [
        '__proto__',
        'constructor',
        'prototype'
    ];
    for(let i = 1; i < args.length; i += 1){
        const nextSource = args[i];
        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
            const keysArray = Object.keys(Object(nextSource)).filter((key)=>noExtend.indexOf(key) < 0);
            for(let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) {
                    if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                        to[nextKey] = {};
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else extend(to[nextKey], nextSource[nextKey]);
                    } else to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll({ swiper, targetPosition, side }) {
    const window1 = (0, _ssrWindow.getWindow)();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = 'none';
    window1.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? 'next' : 'prev';
    const isOutOfBound = (current, target)=>{
        return dir === 'next' && current >= target || dir === 'prev' && current <= target;
    };
    const animate = ()=>{
        time = new Date().getTime();
        if (startTime === null) startTime = time;
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
        swiper.wrapperEl.scrollTo({
            [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
            swiper.wrapperEl.style.overflow = 'hidden';
            swiper.wrapperEl.style.scrollSnapType = '';
            setTimeout(()=>{
                swiper.wrapperEl.style.overflow = '';
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
            });
            window1.cancelAnimationFrame(swiper.cssModeFrameID);
            return;
        }
        swiper.cssModeFrameID = window1.requestAnimationFrame(animate);
    };
    animate();
}

},{"ssr-window":"d3jFK","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"hc4YA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSupport", ()=>getSupport);
var _ssrWindow = require("ssr-window");
let support;
function calcSupport() {
    const window = (0, _ssrWindow.getWindow)();
    const document = (0, _ssrWindow.getDocument)();
    return {
        smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
        touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        passiveListener: function checkPassiveListener() {
            let supportsPassive = false;
            try {
                const opts = Object.defineProperty({}, 'passive', {
                    // eslint-disable-next-line
                    get () {
                        supportsPassive = true;
                    }
                });
                window.addEventListener('testPassiveListener', null, opts);
            } catch (e) {}
            return supportsPassive;
        }(),
        gestures: function checkGestures() {
            return 'ongesturestart' in window;
        }()
    };
}
function getSupport() {
    if (!support) support = calcSupport();
    return support;
}

},{"ssr-window":"d3jFK","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"7D5UL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDevice", ()=>getDevice);
var _ssrWindow = require("ssr-window");
var _getSupportJs = require("./get-support.js");
let deviceCached;
function calcDevice({ userAgent } = {}) {
    const support = (0, _getSupportJs.getSupport)();
    const window = (0, _ssrWindow.getWindow)();
    const platform = window.navigator.platform;
    const ua = userAgent || window.navigator.userAgent;
    const device = {
        ios: false,
        android: false
    };
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === 'Win32';
    let macos = platform === 'MacIntel'; // iPadOs 13 fix
    const iPadScreens = [
        '1024x1366',
        '1366x1024',
        '834x1194',
        '1194x834',
        '834x1112',
        '1112x834',
        '768x1024',
        '1024x768',
        '820x1180',
        '1180x820',
        '810x1080',
        '1080x810'
    ];
    if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [
            0,
            1,
            '13_0_0'
        ];
        macos = false;
    } // Android
    if (android && !windows) {
        device.os = 'android';
        device.android = true;
    }
    if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
    } // Export object
    return device;
}
function getDevice(overrides = {}) {
    if (!deviceCached) deviceCached = calcDevice(overrides);
    return deviceCached;
}

},{"ssr-window":"d3jFK","./get-support.js":"hc4YA","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"gGygP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBrowser", ()=>getBrowser);
var _ssrWindow = require("ssr-window");
let browser;
function calcBrowser() {
    const window = (0, _ssrWindow.getWindow)();
    function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }
    return {
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
    };
}
function getBrowser() {
    if (!browser) browser = calcBrowser();
    return browser;
}

},{"ssr-window":"d3jFK","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"jmpPC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Resize);
var _ssrWindow = require("ssr-window");
function Resize({ swiper, on, emit }) {
    const window = (0, _ssrWindow.getWindow)();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('beforeResize');
        emit('resize');
    };
    const createObserver = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver((entries)=>{
            animationFrame = window.requestAnimationFrame(()=>{
                const { width, height } = swiper;
                let newWidth = width;
                let newHeight = height;
                entries.forEach(({ contentBoxSize, contentRect, target })=>{
                    if (target && target !== swiper.el) return;
                    newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                    newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                });
                if (newWidth !== width || newHeight !== height) resizeHandler();
            });
        });
        observer.observe(swiper.el);
    };
    const removeObserver = ()=>{
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
        if (observer && observer.unobserve && swiper.el) {
            observer.unobserve(swiper.el);
            observer = null;
        }
    };
    const orientationChangeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('orientationchange');
    };
    on('init', ()=>{
        if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
            createObserver();
            return;
        }
        window.addEventListener('resize', resizeHandler);
        window.addEventListener('orientationchange', orientationChangeHandler);
    });
    on('destroy', ()=>{
        removeObserver();
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('orientationchange', orientationChangeHandler);
    });
}

},{"ssr-window":"d3jFK","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"gMwdx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Observer);
var _ssrWindow = require("ssr-window");
function Observer({ swiper, extendParams, on, emit }) {
    const observers = [];
    const window = (0, _ssrWindow.getWindow)();
    const attach = (target, options = {})=>{
        const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        const observer = new ObserverFunc((mutations)=>{
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (mutations.length === 1) {
                emit('observerUpdate', mutations[0]);
                return;
            }
            const observerUpdate = function observerUpdate() {
                emit('observerUpdate', mutations[0]);
            };
            if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate);
            else window.setTimeout(observerUpdate, 0);
        });
        observer.observe(target, {
            attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
            childList: typeof options.childList === 'undefined' ? true : options.childList,
            characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        observers.push(observer);
    };
    const init = ()=>{
        if (!swiper.params.observer) return;
        if (swiper.params.observeParents) {
            const containerParents = swiper.$el.parents();
            for(let i = 0; i < containerParents.length; i += 1)attach(containerParents[i]);
        } // Observe container
        attach(swiper.$el[0], {
            childList: swiper.params.observeSlideChildren
        }); // Observe wrapper
        attach(swiper.$wrapperEl[0], {
            attributes: false
        });
    };
    const destroy = ()=>{
        observers.forEach((observer)=>{
            observer.disconnect();
        });
        observers.splice(0, observers.length);
    };
    extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
    });
    on('init', init);
    on('destroy', destroy);
}

},{"ssr-window":"d3jFK","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"hT26z":[function(require,module,exports,__globalThis) {
/* eslint-disable no-underscore-dangle */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    on (events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        events.split(' ').forEach((event)=>{
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    },
    once (events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        function onceHandler(...args) {
            self.off(events, onceHandler);
            if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
            handler.apply(self, args);
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
    },
    onAny (handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
        return self;
    },
    offAny (handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) self.eventsAnyListeners.splice(index, 1);
        return self;
    },
    off (events, handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        events.split(' ').forEach((event)=>{
            if (typeof handler === 'undefined') self.eventsListeners[event] = [];
            else if (self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler, index)=>{
                if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
            });
        });
        return self;
    },
    emit (...args) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach((event)=>{
            if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler)=>{
                eventHandler.apply(context, [
                    event,
                    ...data
                ]);
            });
            if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler)=>{
                eventHandler.apply(context, data);
            });
        });
        return self;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"gRjYx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _updateSizeJs = require("./updateSize.js");
var _updateSizeJsDefault = parcelHelpers.interopDefault(_updateSizeJs);
var _updateSlidesJs = require("./updateSlides.js");
var _updateSlidesJsDefault = parcelHelpers.interopDefault(_updateSlidesJs);
var _updateAutoHeightJs = require("./updateAutoHeight.js");
var _updateAutoHeightJsDefault = parcelHelpers.interopDefault(_updateAutoHeightJs);
var _updateSlidesOffsetJs = require("./updateSlidesOffset.js");
var _updateSlidesOffsetJsDefault = parcelHelpers.interopDefault(_updateSlidesOffsetJs);
var _updateSlidesProgressJs = require("./updateSlidesProgress.js");
var _updateSlidesProgressJsDefault = parcelHelpers.interopDefault(_updateSlidesProgressJs);
var _updateProgressJs = require("./updateProgress.js");
var _updateProgressJsDefault = parcelHelpers.interopDefault(_updateProgressJs);
var _updateSlidesClassesJs = require("./updateSlidesClasses.js");
var _updateSlidesClassesJsDefault = parcelHelpers.interopDefault(_updateSlidesClassesJs);
var _updateActiveIndexJs = require("./updateActiveIndex.js");
var _updateActiveIndexJsDefault = parcelHelpers.interopDefault(_updateActiveIndexJs);
var _updateClickedSlideJs = require("./updateClickedSlide.js");
var _updateClickedSlideJsDefault = parcelHelpers.interopDefault(_updateClickedSlideJs);
exports.default = {
    updateSize: (0, _updateSizeJsDefault.default),
    updateSlides: (0, _updateSlidesJsDefault.default),
    updateAutoHeight: (0, _updateAutoHeightJsDefault.default),
    updateSlidesOffset: (0, _updateSlidesOffsetJsDefault.default),
    updateSlidesProgress: (0, _updateSlidesProgressJsDefault.default),
    updateProgress: (0, _updateProgressJsDefault.default),
    updateSlidesClasses: (0, _updateSlidesClassesJsDefault.default),
    updateActiveIndex: (0, _updateActiveIndexJsDefault.default),
    updateClickedSlide: (0, _updateClickedSlideJsDefault.default)
};

},{"./updateSize.js":"2Spd0","./updateSlides.js":"kIvSc","./updateAutoHeight.js":"b5ojz","./updateSlidesOffset.js":"9kwd5","./updateSlidesProgress.js":"c5AX4","./updateProgress.js":"eHtUe","./updateSlidesClasses.js":"7Hwdv","./updateActiveIndex.js":"12g9j","./updateClickedSlide.js":"cdkzr","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"2Spd0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateSize);
function updateSize() {
    const swiper = this;
    let width;
    let height;
    const $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) width = swiper.params.width;
    else width = $el[0].clientWidth;
    if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) height = swiper.params.height;
    else height = $el[0].clientHeight;
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
     // Subtract paddings
    width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
    height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"kIvSc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateSlides);
var _utilsJs = require("../../shared/utils.js");
function updateSlides() {
    const swiper = this;
    function getDirectionLabel(property) {
        if (swiper.isHorizontal()) return property;
         // prettier-ignore
        return ({
            'width': 'height',
            'margin-top': 'margin-left',
            'margin-bottom ': 'margin-right',
            'margin-left': 'margin-top',
            'margin-right': 'margin-bottom',
            'padding-left': 'padding-top',
            'padding-right': 'padding-bottom',
            'marginRight': 'marginBottom'
        })[property];
    }
    function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const { $wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') offsetBefore = params.slidesOffsetBefore.call(swiper);
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') offsetAfter = params.slidesOffsetAfter.call(swiper);
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === 'undefined') return;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
    swiper.virtualSize = -spaceBetween; // reset margins
    if (rtl) slides.css({
        marginLeft: '',
        marginBottom: '',
        marginTop: ''
    });
    else slides.css({
        marginRight: '',
        marginBottom: '',
        marginTop: ''
    }); // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
        (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-before', '');
        (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-after', '');
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) swiper.grid.initSlides(slidesLength);
     // Calc slides
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter((key)=>{
        return typeof params.breakpoints[key].slidesPerView !== 'undefined';
    }).length > 0;
    for(let i = 0; i < slidesLength; i += 1){
        slideSize = 0;
        const slide = slides.eq(i);
        if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
        if (slide.css('display') === 'none') continue; // eslint-disable-line
        if (params.slidesPerView === 'auto') {
            if (shouldResetSlideSize) slides[i].style[getDirectionLabel('width')] = ``;
            const slideStyles = getComputedStyle(slide[0]);
            const currentTransform = slide[0].style.transform;
            const currentWebKitTransform = slide[0].style.webkitTransform;
            if (currentTransform) slide[0].style.transform = 'none';
            if (currentWebKitTransform) slide[0].style.webkitTransform = 'none';
            if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
            else {
                // eslint-disable-next-line
                const width = getDirectionPropertyValue(slideStyles, 'width');
                const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                const boxSizing = slideStyles.getPropertyValue('box-sizing');
                if (boxSizing && boxSizing === 'border-box') slideSize = width + marginLeft + marginRight;
                else {
                    const { clientWidth, offsetWidth } = slide[0];
                    slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                }
            }
            if (currentTransform) slide[0].style.transform = currentTransform;
            if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
            slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
            if (slides[i]) slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
        }
        if (slides[i]) slides[i].swiperSlideSize = slideSize;
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 0.001) slidePosition = 0;
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        } else {
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) $wrapperEl.css({
        width: `${swiper.virtualSize + params.spaceBetween}px`
    });
    if (params.setWrapperSize) $wrapperEl.css({
        [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
    });
    if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
     // Remove last grid elements depending on width
    if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for(let i = 0; i < snapGrid.length; i += 1){
            let slidesGridItem = snapGrid[i];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
    }
    if (snapGrid.length === 0) snapGrid = [
        0
    ];
    if (params.spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
        slides.filter((_, slideIndex)=>{
            if (!params.cssMode) return true;
            if (slideIndex === slides.length - 1) return false;
            return true;
        }).css({
            [key]: `${spaceBetween}px`
        });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map((snap)=>{
            if (snap < 0) return -offsetBefore;
            if (snap > maxSnap) return maxSnap + offsetAfter;
            return snap;
        });
    }
    if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        if (allSlidesSize < swiperSize) {
            const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
            snapGrid.forEach((snap, snapIndex)=>{
                snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach((snap, snapIndex)=>{
                slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
    }
    Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
        (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map((v)=>v + addToSnapGrid);
        swiper.slidesGrid = swiper.slidesGrid.map((v)=>v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) swiper.emit('slidesLengthChange');
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) swiper.emit('slidesGridLengthChange');
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
    if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
        const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
        if (slidesLength <= params.maxBackfaceHiddenSlides) {
            if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
        } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
    }
}

},{"../../shared/utils.js":"hr9mL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"b5ojz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateAutoHeight);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === 'number') swiper.setTransition(speed);
    else if (speed === true) swiper.setTransition(swiper.params.speed);
    const getSlideByIndex = (index)=>{
        if (isVirtual) return swiper.slides.filter((el)=>parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
        return swiper.slides.eq(index)[0];
    }; // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) (swiper.visibleSlides || (0, _domJsDefault.default)([])).each((slide)=>{
            activeSlides.push(slide);
        });
        else for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
        }
    } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
     // Find new height from highest slide in view
    for(i = 0; i < activeSlides.length; i += 1)if (typeof activeSlides[i] !== 'undefined') {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
    }
     // Update Height
    if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);
}

},{"../../shared/dom.js":"fSctW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"9kwd5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateSlidesOffset);
function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    for(let i = 0; i < slides.length; i += 1)slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"c5AX4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateSlidesProgress);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function updateSlidesProgress(translate = this && this.translate || 0) {
    const swiper = this;
    const params = swiper.params;
    const { slides, rtlTranslate: rtl, snapGrid } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate; // Visible Slides
    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for(let i = 0; i < slides.length; i += 1){
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
            slides.eq(i).addClass(params.slideVisibleClass);
        }
        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
    swiper.visibleSlides = (0, _domJsDefault.default)(swiper.visibleSlides);
}

},{"../../shared/dom.js":"fSctW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"eHtUe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateProgress);
function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === 'undefined') {
        const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress, isBeginning, isEnd } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
    }
    Object.assign(swiper, {
        progress,
        isBeginning,
        isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) swiper.emit('reachBeginning toEdge');
    if (isEnd && !wasEnd) swiper.emit('reachEnd toEdge');
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit('fromEdge');
    swiper.emit('progress', progress);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"7Hwdv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateSlidesClasses);
function updateSlidesClasses() {
    const swiper = this;
    const { slides, params, $wrapperEl, activeIndex, realIndex } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
    let activeSlide;
    if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
    else activeSlide = slides.eq(activeIndex);
     // Active classes
    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } // Next Slide
    let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
    } // Prev Slide
    let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    }
    swiper.emitSlidesClasses();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"12g9j":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateActiveIndex);
function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const { slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    if (typeof activeIndex === 'undefined') {
        for(let i = 0; i < slidesGrid.length; i += 1){
            if (typeof slidesGrid[i + 1] !== 'undefined') {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
                else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
        } // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
    }
    if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
    else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit('snapIndexChange');
        }
        return;
    } // Get real index
    const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
    Object.assign(swiper, {
        snapIndex,
        realIndex,
        previousIndex,
        activeIndex
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) swiper.emit('realIndexChange');
    if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit('slideChange');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"cdkzr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>updateClickedSlide);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function updateClickedSlide(e) {
    const swiper = this;
    const params = swiper.params;
    const slide = (0, _domJsDefault.default)(e).closest(`.${params.slideClass}`)[0];
    let slideFound = false;
    let slideIndex;
    if (slide) {
        for(let i = 0; i < swiper.slides.length; i += 1)if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
        }
    }
    if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt((0, _domJsDefault.default)(slide).attr('data-swiper-slide-index'), 10);
        else swiper.clickedIndex = slideIndex;
    } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
}

},{"../../shared/dom.js":"fSctW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"hptMS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getTranslateJs = require("./getTranslate.js");
var _getTranslateJsDefault = parcelHelpers.interopDefault(_getTranslateJs);
var _setTranslateJs = require("./setTranslate.js");
var _setTranslateJsDefault = parcelHelpers.interopDefault(_setTranslateJs);
var _minTranslateJs = require("./minTranslate.js");
var _minTranslateJsDefault = parcelHelpers.interopDefault(_minTranslateJs);
var _maxTranslateJs = require("./maxTranslate.js");
var _maxTranslateJsDefault = parcelHelpers.interopDefault(_maxTranslateJs);
var _translateToJs = require("./translateTo.js");
var _translateToJsDefault = parcelHelpers.interopDefault(_translateToJs);
exports.default = {
    getTranslate: (0, _getTranslateJsDefault.default),
    setTranslate: (0, _setTranslateJsDefault.default),
    minTranslate: (0, _minTranslateJsDefault.default),
    maxTranslate: (0, _maxTranslateJsDefault.default),
    translateTo: (0, _translateToJsDefault.default)
};

},{"./getTranslate.js":"45PCR","./setTranslate.js":"3nm1U","./minTranslate.js":"lThZi","./maxTranslate.js":"lPtLZ","./translateTo.js":"lTrlM","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"45PCR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getSwiperTranslate);
var _utilsJs = require("../../shared/utils.js");
function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
    const swiper = this;
    const { params, rtlTranslate: rtl, translate, $wrapperEl } = swiper;
    if (params.virtualTranslate) return rtl ? -translate : translate;
    if (params.cssMode) return translate;
    let currentTranslate = (0, _utilsJs.getTranslate)($wrapperEl[0], axis);
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}

},{"../../shared/utils.js":"hr9mL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"3nm1U":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setTranslate);
function setTranslate(translate, byController) {
    const swiper = this;
    const { rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) x = rtl ? -translate : translate;
    else y = translate;
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }
    if (params.cssMode) wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== progress) swiper.updateProgress(translate);
    swiper.emit('setTranslate', swiper.translate, byController);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"lThZi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>minTranslate);
function minTranslate() {
    return -this.snapGrid[0];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"lPtLZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>maxTranslate);
function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"lTrlM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>translateTo);
var _utilsJs = require("../../shared/utils.js");
function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
    const swiper = this;
    const { params, wrapperEl } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) return false;
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
    else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
    else newTranslate = translate; // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        if (speed === 0) wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        else {
            if (!swiper.support.smoothScroll) {
                (0, _utilsJs.animateCSSModeScroll)({
                    swiper,
                    targetPosition: -newTranslate,
                    side: isH ? 'left' : 'top'
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: -newTranslate,
                behavior: 'smooth'
            });
        }
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionEnd');
        }
    } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionStart');
        }
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                swiper.onTranslateToWrapperTransitionEnd = null;
                delete swiper.onTranslateToWrapperTransitionEnd;
                if (runCallbacks) swiper.emit('transitionEnd');
            };
            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
        }
    }
    return true;
}

},{"../../shared/utils.js":"hr9mL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"aegTm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setTransitionJs = require("./setTransition.js");
var _setTransitionJsDefault = parcelHelpers.interopDefault(_setTransitionJs);
var _transitionStartJs = require("./transitionStart.js");
var _transitionStartJsDefault = parcelHelpers.interopDefault(_transitionStartJs);
var _transitionEndJs = require("./transitionEnd.js");
var _transitionEndJsDefault = parcelHelpers.interopDefault(_transitionEndJs);
exports.default = {
    setTransition: (0, _setTransitionJsDefault.default),
    transitionStart: (0, _transitionStartJsDefault.default),
    transitionEnd: (0, _transitionEndJsDefault.default)
};

},{"./setTransition.js":"8Bqyc","./transitionStart.js":"3ebLG","./transitionEnd.js":"cLZgE","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8Bqyc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setTransition);
function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
    swiper.emit('setTransition', duration, byController);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"3ebLG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transitionStart);
var _transitionEmitJs = require("./transitionEmit.js");
var _transitionEmitJsDefault = parcelHelpers.interopDefault(_transitionEmitJs);
function transitionStart(runCallbacks = true, direction) {
    const swiper = this;
    const { params } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) swiper.updateAutoHeight();
    (0, _transitionEmitJsDefault.default)({
        swiper,
        runCallbacks,
        direction,
        step: 'Start'
    });
}

},{"./transitionEmit.js":"gVqPe","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"gVqPe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transitionEmit);
function transitionEmit({ swiper, runCallbacks, direction, step }) {
    const { activeIndex, previousIndex } = swiper;
    let dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';
        else if (activeIndex < previousIndex) dir = 'prev';
        else dir = 'reset';
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
            swiper.emit(`slideResetTransition${step}`);
            return;
        }
        swiper.emit(`slideChangeTransition${step}`);
        if (dir === 'next') swiper.emit(`slideNextTransition${step}`);
        else swiper.emit(`slidePrevTransition${step}`);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"cLZgE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>transitionEnd);
var _transitionEmitJs = require("./transitionEmit.js");
var _transitionEmitJsDefault = parcelHelpers.interopDefault(_transitionEmitJs);
function transitionEnd(runCallbacks = true, direction) {
    const swiper = this;
    const { params } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    (0, _transitionEmitJsDefault.default)({
        swiper,
        runCallbacks,
        direction,
        step: 'End'
    });
}

},{"./transitionEmit.js":"gVqPe","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"a5vJi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _slideToJs = require("./slideTo.js");
var _slideToJsDefault = parcelHelpers.interopDefault(_slideToJs);
var _slideToLoopJs = require("./slideToLoop.js");
var _slideToLoopJsDefault = parcelHelpers.interopDefault(_slideToLoopJs);
var _slideNextJs = require("./slideNext.js");
var _slideNextJsDefault = parcelHelpers.interopDefault(_slideNextJs);
var _slidePrevJs = require("./slidePrev.js");
var _slidePrevJsDefault = parcelHelpers.interopDefault(_slidePrevJs);
var _slideResetJs = require("./slideReset.js");
var _slideResetJsDefault = parcelHelpers.interopDefault(_slideResetJs);
var _slideToClosestJs = require("./slideToClosest.js");
var _slideToClosestJsDefault = parcelHelpers.interopDefault(_slideToClosestJs);
var _slideToClickedSlideJs = require("./slideToClickedSlide.js");
var _slideToClickedSlideJsDefault = parcelHelpers.interopDefault(_slideToClickedSlideJs);
exports.default = {
    slideTo: (0, _slideToJsDefault.default),
    slideToLoop: (0, _slideToLoopJsDefault.default),
    slideNext: (0, _slideNextJsDefault.default),
    slidePrev: (0, _slidePrevJsDefault.default),
    slideReset: (0, _slideResetJsDefault.default),
    slideToClosest: (0, _slideToClosestJsDefault.default),
    slideToClickedSlide: (0, _slideToClickedSlideJsDefault.default)
};

},{"./slideTo.js":"cKukx","./slideToLoop.js":"aNbvL","./slideNext.js":"2JCH7","./slidePrev.js":"9hrN2","./slideReset.js":"dyB0y","./slideToClosest.js":"01X2I","./slideToClickedSlide.js":"dDHpD","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"cKukx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideTo);
var _utilsJs = require("../../shared/utils.js");
function slideTo(index = 0, speed = this.params.speed, runCallbacks = true, internal, initial) {
    if (typeof index !== 'number' && typeof index !== 'string') throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
    if (typeof index === 'string') {
        /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */ const indexAsNumber = parseInt(index, 10);
        /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */ const isValidNumber = isFinite(indexAsNumber);
        if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
         // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.
        index = indexAsNumber;
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const { params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate = -snapGrid[snapIndex]; // Normalize slideIndex
    if (params.normalizeSlideIndex) for(let i = 0; i < slidesGrid.length; i += 1){
        const normalizedTranslate = -Math.floor(translate * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
            else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
        } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
    }
     // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) return false;
        }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit('beforeSlideChangeStart');
     // Update progress
    swiper.updateProgress(translate);
    let direction;
    if (slideIndex > activeIndex) direction = 'next';
    else if (slideIndex < activeIndex) direction = 'prev';
    else direction = 'reset'; // Update Index
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex); // Update Height
        if (params.autoHeight) swiper.updateAutoHeight();
        swiper.updateSlidesClasses();
        if (params.effect !== 'slide') swiper.setTranslate(translate);
        if (direction !== 'reset') {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;
        if (speed === 0) {
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            if (isVirtual) {
                swiper.wrapperEl.style.scrollSnapType = 'none';
                swiper._immediateVirtual = true;
            }
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
            if (isVirtual) requestAnimationFrame(()=>{
                swiper.wrapperEl.style.scrollSnapType = '';
                swiper._swiperImmediateVirtual = false;
            });
        } else {
            if (!swiper.support.smoothScroll) {
                (0, _utilsJs.animateCSSModeScroll)({
                    swiper,
                    targetPosition: t,
                    side: isH ? 'left' : 'top'
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: t,
                behavior: 'smooth'
            });
        }
        return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) swiper.transitionEnd(runCallbacks, direction);
    else if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
        };
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
}

},{"../../shared/utils.js":"hr9mL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"aNbvL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideToLoop);
function slideToLoop(index = 0, speed = this.params.speed, runCallbacks = true, internal) {
    if (typeof index === 'string') {
        /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */ const indexAsNumber = parseInt(index, 10);
        /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */ const isValidNumber = isFinite(indexAsNumber);
        if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
         // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.
        index = indexAsNumber;
    }
    const swiper = this;
    let newIndex = index;
    if (swiper.params.loop) newIndex += swiper.loopedSlides;
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"2JCH7":[function(require,module,exports,__globalThis) {
/* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideNext);
function slideNext(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const { animating, enabled, params } = swiper;
    if (!enabled) return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"9hrN2":[function(require,module,exports,__globalThis) {
/* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slidePrev);
function slidePrev(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    const { params, animating, snapGrid, slidesGrid, rtlTranslate, enabled } = swiper;
    if (!enabled) return swiper;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val)=>normalize(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === 'undefined' && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex)=>{
            if (normalizedTranslate >= snap) // prevSnap = snap;
            prevSnapIndex = snapIndex;
        });
        if (typeof prevSnapIndex !== 'undefined') prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
    let prevIndex = 0;
    if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
            prevIndex = Math.max(prevIndex, 0);
        }
    }
    if (params.rewind && swiper.isBeginning) {
        const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"dyB0y":[function(require,module,exports,__globalThis) {
/* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideReset);
function slideReset(speed = this.params.speed, runCallbacks = true, internal) {
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"01X2I":[function(require,module,exports,__globalThis) {
/* eslint no-unused-vars: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideToClosest);
function slideToClosest(speed = this.params.speed, runCallbacks = true, internal, threshold = 0.5) {
    const swiper = this;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
    } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];
        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"dDHpD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>slideToClickedSlide);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function slideToClickedSlide() {
    const swiper = this;
    const { params, $wrapperEl } = swiper;
    const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt((0, _domJsDefault.default)(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        if (params.centeredSlides) {
            if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix();
                slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                (0, _utilsJs.nextTick)(()=>{
                    swiper.slideTo(slideToIndex);
                });
            } else swiper.slideTo(slideToIndex);
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
            (0, _utilsJs.nextTick)(()=>{
                swiper.slideTo(slideToIndex);
            });
        } else swiper.slideTo(slideToIndex);
    } else swiper.slideTo(slideToIndex);
}

},{"../../shared/dom.js":"fSctW","../../shared/utils.js":"hr9mL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8FnLv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loopCreateJs = require("./loopCreate.js");
var _loopCreateJsDefault = parcelHelpers.interopDefault(_loopCreateJs);
var _loopFixJs = require("./loopFix.js");
var _loopFixJsDefault = parcelHelpers.interopDefault(_loopFixJs);
var _loopDestroyJs = require("./loopDestroy.js");
var _loopDestroyJsDefault = parcelHelpers.interopDefault(_loopDestroyJs);
exports.default = {
    loopCreate: (0, _loopCreateJsDefault.default),
    loopFix: (0, _loopFixJsDefault.default),
    loopDestroy: (0, _loopDestroyJsDefault.default)
};

},{"./loopCreate.js":"hjvfp","./loopFix.js":"iMlm2","./loopDestroy.js":"26MRM","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"hjvfp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>loopCreate);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function loopCreate() {
    const swiper = this;
    const document = (0, _ssrWindow.getDocument)();
    const { params, $wrapperEl } = swiper; // Remove duplicated slides
    const $selector = $wrapperEl.children().length > 0 ? (0, _domJsDefault.default)($wrapperEl.children()[0].parentNode) : $wrapperEl;
    $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
    let slides = $selector.children(`.${params.slideClass}`);
    if (params.loopFillGroupWithBlank) {
        const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
        if (blankSlidesNum !== params.slidesPerGroup) {
            for(let i = 0; i < blankSlidesNum; i += 1){
                const blankNode = (0, _domJsDefault.default)(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                $selector.append(blankNode);
            }
            slides = $selector.children(`.${params.slideClass}`);
        }
    }
    if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length && swiper.params.loopedSlidesLimit) swiper.loopedSlides = slides.length;
    const prependSlides = [];
    const appendSlides = [];
    slides.each((el, index)=>{
        const slide = (0, _domJsDefault.default)(el);
        slide.attr('data-swiper-slide-index', index);
    });
    for(let i = 0; i < swiper.loopedSlides; i += 1){
        const index = i - Math.floor(i / slides.length) * slides.length;
        appendSlides.push(slides.eq(index)[0]);
        prependSlides.unshift(slides.eq(slides.length - index - 1)[0]);
    }
    for(let i = 0; i < appendSlides.length; i += 1)$selector.append((0, _domJsDefault.default)(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
    for(let i = prependSlides.length - 1; i >= 0; i -= 1)$selector.prepend((0, _domJsDefault.default)(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
}

},{"ssr-window":"d3jFK","../../shared/dom.js":"fSctW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"iMlm2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>loopFix);
function loopFix() {
    const swiper = this;
    swiper.emit('beforeLoopFix');
    const { activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl } = swiper;
    let newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    const snapTranslate = -snapGrid[activeIndex];
    const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"26MRM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>loopDestroy);
function loopDestroy() {
    const swiper = this;
    const { $wrapperEl, params, slides } = swiper;
    $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
    slides.removeAttr('data-swiper-slide-index');
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"jmzNi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setGrabCursorJs = require("./setGrabCursor.js");
var _setGrabCursorJsDefault = parcelHelpers.interopDefault(_setGrabCursorJs);
var _unsetGrabCursorJs = require("./unsetGrabCursor.js");
var _unsetGrabCursorJsDefault = parcelHelpers.interopDefault(_unsetGrabCursorJs);
exports.default = {
    setGrabCursor: (0, _setGrabCursorJsDefault.default),
    unsetGrabCursor: (0, _unsetGrabCursorJsDefault.default)
};

},{"./setGrabCursor.js":"dyT5z","./unsetGrabCursor.js":"ajpay","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"dyT5z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setGrabCursor);
function setGrabCursor(moving) {
    const swiper = this;
    if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
    el.style.cursor = 'move';
    el.style.cursor = moving ? 'grabbing' : 'grab';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"ajpay":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>unsetGrabCursor);
function unsetGrabCursor() {
    const swiper = this;
    if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"7tVEy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _ssrWindow = require("ssr-window");
var _onTouchStartJs = require("./onTouchStart.js");
var _onTouchStartJsDefault = parcelHelpers.interopDefault(_onTouchStartJs);
var _onTouchMoveJs = require("./onTouchMove.js");
var _onTouchMoveJsDefault = parcelHelpers.interopDefault(_onTouchMoveJs);
var _onTouchEndJs = require("./onTouchEnd.js");
var _onTouchEndJsDefault = parcelHelpers.interopDefault(_onTouchEndJs);
var _onResizeJs = require("./onResize.js");
var _onResizeJsDefault = parcelHelpers.interopDefault(_onResizeJs);
var _onClickJs = require("./onClick.js");
var _onClickJsDefault = parcelHelpers.interopDefault(_onClickJs);
var _onScrollJs = require("./onScroll.js");
var _onScrollJsDefault = parcelHelpers.interopDefault(_onScrollJs);
let dummyEventAttached = false;
function dummyEventListener() {}
const events = (swiper, method)=>{
    const document = (0, _ssrWindow.getDocument)();
    const { params, touchEvents, el, wrapperEl, device, support } = swiper;
    const capture = !!params.nested;
    const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    const swiperMethod = method; // Touch Events
    if (!support.touch) {
        el[domMethod](touchEvents.start, swiper.onTouchStart, false);
        document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
        document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
    } else {
        const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
        el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
            passive: false,
            capture
        } : capture);
        el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    } // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) el[domMethod]('click', swiper.onClick, true);
    if (params.cssMode) wrapperEl[domMethod]('scroll', swiper.onScroll);
     // Resize handler
    if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', (0, _onResizeJsDefault.default), true);
    else swiper[swiperMethod]('observerUpdate', (0, _onResizeJsDefault.default), true);
};
function attachEvents() {
    const swiper = this;
    const document = (0, _ssrWindow.getDocument)();
    const { params, support } = swiper;
    swiper.onTouchStart = (0, _onTouchStartJsDefault.default).bind(swiper);
    swiper.onTouchMove = (0, _onTouchMoveJsDefault.default).bind(swiper);
    swiper.onTouchEnd = (0, _onTouchEndJsDefault.default).bind(swiper);
    if (params.cssMode) swiper.onScroll = (0, _onScrollJsDefault.default).bind(swiper);
    swiper.onClick = (0, _onClickJsDefault.default).bind(swiper);
    if (support.touch && !dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
    }
    events(swiper, 'on');
}
function detachEvents() {
    const swiper = this;
    events(swiper, 'off');
}
exports.default = {
    attachEvents,
    detachEvents
};

},{"ssr-window":"d3jFK","./onTouchStart.js":"LOSU4","./onTouchMove.js":"kFU5Z","./onTouchEnd.js":"8yCvB","./onResize.js":"dYhob","./onClick.js":"jmaI7","./onScroll.js":"eEwnK","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"LOSU4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onTouchStart);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js"); // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base = this) {
    function __closestFrom(el) {
        if (!el || el === (0, _ssrWindow.getDocument)() || el === (0, _ssrWindow.getWindow)()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);
        if (!found && !el.getRootNode) return null;
        return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
}
function onTouchStart(event) {
    const swiper = this;
    const document = (0, _ssrWindow.getDocument)();
    const window = (0, _ssrWindow.getWindow)();
    const data = swiper.touchEventsData;
    const { params, touches, enabled } = swiper;
    if (!enabled) return;
    if (swiper.animating && params.preventInteractionOnTransition) return;
    if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    let $targetEl = (0, _domJsDefault.default)(e.target);
    if (params.touchEventsTarget === 'wrapper') {
        if (!$targetEl.closest(swiper.wrapperEl).length) return;
    }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
    if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return; // change target el for shadow root component
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== ''; // eslint-disable-next-line
    const eventPath = event.composedPath ? event.composedPath() : event.path;
    if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) $targetEl = (0, _domJsDefault.default)(eventPath[0]);
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
        swiper.allowClick = true;
        return;
    }
    if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) return;
    }
    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
    const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === 'prevent') event.preventDefault();
        else return;
    }
    Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = (0, _utilsJs.now)();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    if (e.type !== 'touchstart') {
        let preventDefault = true;
        if ($targetEl.is(data.focusableElements)) {
            preventDefault = false;
            if ($targetEl[0].nodeName === 'SELECT') data.isTouched = false;
        }
        if (document.activeElement && (0, _domJsDefault.default)(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
        const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
    }
    if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
    swiper.emit('touchStart', e);
}

},{"ssr-window":"d3jFK","../../shared/dom.js":"fSctW","../../shared/utils.js":"hr9mL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"kFU5Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onTouchMove);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function onTouchMove(event) {
    const document = (0, _ssrWindow.getDocument)();
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params, touches, rtlTranslate: rtl, enabled } = swiper;
    if (!enabled) return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) swiper.emit('touchMoveOpposite', e);
        return;
    }
    if (data.isTouchEvent && e.type !== 'touchmove') return;
    const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
    const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
    }
    if (!swiper.allowTouchMove) {
        if (!(0, _domJsDefault.default)(e.target).is(data.focusableElements)) swiper.allowClick = false;
        if (data.isTouched) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY
            });
            data.touchStartTime = (0, _utilsJs.now)();
        }
        return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) // Vertical
        {
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
    }
    if (data.isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && (0, _domJsDefault.default)(e.target).is(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
    }
    if (data.allowTouchCallbacks) swiper.emit('touchMove', e);
    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === 'undefined') {
        let touchAngle;
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
        else // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
    }
    if (data.isScrolling) swiper.emit('touchMoveOpposite', e);
    if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
    }
    if (data.isScrolling) {
        data.isTouched = false;
        return;
    }
    if (!data.startMoving) return;
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
    if (!data.isMoved) {
        if (params.loop && !params.cssMode) swiper.loopFix();
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        data.allowMomentumBounce = false; // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
        swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;
    let diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) diff = -diff;
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) resistanceRatio = 0;
    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
    }
    if (disableParentSwiper) e.preventedByNestedSwiper = true;
     // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
     // Threshold
    if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        } else {
            data.currentTranslate = data.startTranslate;
            return;
        }
    }
    if (!params.followFinger || params.cssMode) return; // Update active index in free mode
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
     // Update progress
    swiper.updateProgress(data.currentTranslate); // Update translate
    swiper.setTranslate(data.currentTranslate);
}

},{"ssr-window":"d3jFK","../../shared/dom.js":"fSctW","../../shared/utils.js":"hr9mL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8yCvB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onTouchEnd);
var _utilsJs = require("../../shared/utils.js");
function onTouchEnd(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params, touches, rtlTranslate: rtl, slidesGrid, enabled } = swiper;
    if (!enabled) return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (data.allowTouchCallbacks) swiper.emit('touchEnd', e);
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
        data.isMoved = false;
        data.startMoving = false;
        return;
    } // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
     // Time diff
    const touchEndTime = (0, _utilsJs.now)();
    const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click
    if (swiper.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
        swiper.emit('tap click', e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit('doubleTap doubleClick', e);
    }
    data.lastClickTime = (0, _utilsJs.now)();
    (0, _utilsJs.nextTick)(()=>{
        if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
    else currentPos = -data.currentTranslate;
    if (params.cssMode) return;
    if (swiper.params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
            currentPos
        });
        return;
    } // Find current slide
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for(let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment] !== 'undefined') {
            if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                stopIndex = i;
                groupSize = slidesGrid[i + increment] - slidesGrid[i];
            }
        } else if (currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
        if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        else if (swiper.isEnd) rewindFirstIndex = 0;
    } // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === 'next') {
            if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === 'prev') {
            if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex);
            else swiper.slideTo(stopIndex);
        }
    } else {
        // Short swipes
        if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
            if (swiper.swipeDirection === 'next') swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
            if (swiper.swipeDirection === 'prev') swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
    }
}

},{"../../shared/utils.js":"hr9mL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"dYhob":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onResize);
function onResize() {
    const swiper = this;
    const { params, el } = swiper;
    if (el && el.offsetWidth === 0) return; // Breakpoints
    if (params.breakpoints) swiper.setBreakpoint();
     // Save locks
    const { allowSlideNext, allowSlidePrev, snapGrid } = swiper; // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    else swiper.slideTo(swiper.activeIndex, 0, false, true);
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
     // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"jmaI7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onClick);
function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"eEwnK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>onScroll);
function onScroll() {
    const swiper = this;
    const { wrapperEl, rtlTranslate, enabled } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
    else swiper.translate = -wrapperEl.scrollTop;
     // eslint-disable-next-line
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    swiper.emit('setTranslate', swiper.translate, false);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"4ystW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setBreakpointJs = require("./setBreakpoint.js");
var _setBreakpointJsDefault = parcelHelpers.interopDefault(_setBreakpointJs);
var _getBreakpointJs = require("./getBreakpoint.js");
var _getBreakpointJsDefault = parcelHelpers.interopDefault(_getBreakpointJs);
exports.default = {
    setBreakpoint: (0, _setBreakpointJsDefault.default),
    getBreakpoint: (0, _getBreakpointJsDefault.default)
};

},{"./setBreakpoint.js":"lesJy","./getBreakpoint.js":"1cC8m","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"lesJy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setBreakpoint);
var _utilsJs = require("../../shared/utils.js");
const isGridEnabled = (swiper, params)=>{
    return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
    const swiper = this;
    const { activeIndex, initialized, loopedSlides = 0, params, $el } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters
    const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
        $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') $el.addClass(`${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } // Toggle navigation, pagination, scrollbar
    [
        'navigation',
        'pagination',
        'scrollbar'
    ].forEach((prop)=>{
        const wasModuleEnabled = params[prop] && params[prop].enabled;
        const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
        if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
        if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) swiper.changeDirection();
    (0, _utilsJs.extend)(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) swiper.disable();
    else if (!wasEnabled && isEnabled) swiper.enable();
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);
    if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }
    swiper.emit('breakpoint', breakpointParams);
}

},{"../../shared/utils.js":"hr9mL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"1cC8m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>getBreakpoint);
var _ssrWindow = require("ssr-window");
function getBreakpoint(breakpoints, base = 'window', containerEl) {
    if (!breakpoints || base === 'container' && !containerEl) return undefined;
    let breakpoint = false;
    const window = (0, _ssrWindow.getWindow)();
    const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map((point)=>{
        if (typeof point === 'string' && point.indexOf('@') === 0) {
            const minRatio = parseFloat(point.substr(1));
            const value = currentHeight * minRatio;
            return {
                value,
                point
            };
        }
        return {
            value: point,
            point
        };
    });
    points.sort((a, b)=>parseInt(a.value, 10) - parseInt(b.value, 10));
    for(let i = 0; i < points.length; i += 1){
        const { point, value } = points[i];
        if (base === 'window') {
            if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
        } else if (value <= containerEl.clientWidth) breakpoint = point;
    }
    return breakpoint || 'max';
}

},{"ssr-window":"d3jFK","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"cVRTi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _addClassesJs = require("./addClasses.js");
var _addClassesJsDefault = parcelHelpers.interopDefault(_addClassesJs);
var _removeClassesJs = require("./removeClasses.js");
var _removeClassesJsDefault = parcelHelpers.interopDefault(_removeClassesJs);
exports.default = {
    addClasses: (0, _addClassesJsDefault.default),
    removeClasses: (0, _removeClassesJsDefault.default)
};

},{"./addClasses.js":"8HCtQ","./removeClasses.js":"8Occm","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8HCtQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addClasses);
function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item)=>{
        if (typeof item === 'object') Object.keys(item).forEach((classNames)=>{
            if (item[classNames]) resultClasses.push(prefix + classNames);
        });
        else if (typeof item === 'string') resultClasses.push(prefix + item);
    });
    return resultClasses;
}
function addClasses() {
    const swiper = this;
    const { classNames, params, rtl, $el, device, support } = swiper; // prettier-ignore
    const suffixes = prepareClasses([
        'initialized',
        params.direction,
        {
            'pointer-events': !support.touch
        },
        {
            'free-mode': swiper.params.freeMode && params.freeMode.enabled
        },
        {
            'autoheight': params.autoHeight
        },
        {
            'rtl': rtl
        },
        {
            'grid': params.grid && params.grid.rows > 1
        },
        {
            'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
        },
        {
            'android': device.android
        },
        {
            'ios': device.ios
        },
        {
            'css-mode': params.cssMode
        },
        {
            'centered': params.cssMode && params.centeredSlides
        },
        {
            'watch-progress': params.watchSlidesProgress
        }
    ], params.containerModifierClass);
    classNames.push(...suffixes);
    $el.addClass([
        ...classNames
    ].join(' '));
    swiper.emitContainerClasses();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8Occm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>removeClasses);
function removeClasses() {
    const swiper = this;
    const { $el, classNames } = swiper;
    $el.removeClass(classNames.join(' '));
    swiper.emitContainerClasses();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"dXTAC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _loadImageJs = require("./loadImage.js");
var _loadImageJsDefault = parcelHelpers.interopDefault(_loadImageJs);
var _preloadImagesJs = require("./preloadImages.js");
var _preloadImagesJsDefault = parcelHelpers.interopDefault(_preloadImagesJs);
exports.default = {
    loadImage: (0, _loadImageJsDefault.default),
    preloadImages: (0, _preloadImagesJsDefault.default)
};

},{"./loadImage.js":"bx2Bx","./preloadImages.js":"03dYu","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"bx2Bx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>loadImage);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    const window = (0, _ssrWindow.getWindow)();
    let image;
    function onReady() {
        if (callback) callback();
    }
    const isPicture = (0, _domJsDefault.default)(imageEl).parent('picture')[0];
    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
            image = new window.Image();
            image.onload = onReady;
            image.onerror = onReady;
            if (sizes) image.sizes = sizes;
            if (srcset) image.srcset = srcset;
            if (src) image.src = src;
        } else onReady();
    } else // image already loaded...
    onReady();
}

},{"ssr-window":"d3jFK","../../shared/dom.js":"fSctW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"03dYu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>preloadImages);
function preloadImages() {
    const swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
        if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
            if (swiper.params.updateOnImagesReady) swiper.update();
            swiper.emit('imagesReady');
        }
    }
    for(let i = 0; i < swiper.imagesToLoad.length; i += 1){
        const imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"iOuBv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function checkOverflow() {
    const swiper = this;
    const { isLocked: wasLocked, params } = swiper;
    const { slidesOffsetBefore } = params;
    if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else swiper.isLocked = swiper.snapGrid.length === 1;
    if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
    if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
    if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
    if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
}
exports.default = {
    checkOverflow
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"hQOza":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    enabled: true,
    focusableElements: 'input, select, option, textarea, button, video, label',
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: 'window',
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: true,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: 'swiper-',
    // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"2Uajx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>moduleExtendParams);
var _utilsJs = require("../shared/utils.js");
function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj = {}) {
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) {
            (0, _utilsJs.extend)(allModulesParams, obj);
            return;
        }
        if ([
            'navigation',
            'pagination',
            'scrollbar'
        ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
            auto: true
        };
        if (!(moduleParamName in params && 'enabled' in moduleParams)) {
            (0, _utilsJs.extend)(allModulesParams, obj);
            return;
        }
        if (params[moduleParamName] === true) params[moduleParamName] = {
            enabled: true
        };
        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) params[moduleParamName].enabled = true;
        if (!params[moduleParamName]) params[moduleParamName] = {
            enabled: false
        };
        (0, _utilsJs.extend)(allModulesParams, obj);
    };
}

},{"../shared/utils.js":"hr9mL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"6u53y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Virtual);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function Virtual({ swiper, extendParams, on, emit }) {
    extendParams({
        virtual: {
            enabled: false,
            slides: [],
            cache: true,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: true,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    let cssModeTimeout;
    swiper.virtual = {
        cache: {},
        from: undefined,
        to: undefined,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    function renderSlide(slide, index) {
        const params = swiper.params.virtual;
        if (params.cache && swiper.virtual.cache[index]) return swiper.virtual.cache[index];
        const $slideEl = params.renderSlide ? (0, _domJsDefault.default)(params.renderSlide.call(swiper, slide, index)) : (0, _domJsDefault.default)(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
        if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
        if (params.cache) swiper.virtual.cache[index] = $slideEl;
        return $slideEl;
    }
    function update(force) {
        const { slidesPerView, slidesPerGroup, centeredSlides } = swiper.params;
        const { addSlidesBefore, addSlidesAfter } = swiper.params.virtual;
        const { from: previousFrom, to: previousTo, slides, slidesGrid: previousSlidesGrid, offset: previousOffset } = swiper.virtual;
        if (!swiper.params.cssMode) swiper.updateActiveIndex();
        const activeIndex = swiper.activeIndex || 0;
        let offsetProp;
        if (swiper.rtlTranslate) offsetProp = 'right';
        else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
        let slidesAfter;
        let slidesBefore;
        if (centeredSlides) {
            slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
            slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
            slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
            slidesBefore = slidesPerGroup + addSlidesBefore;
        }
        const from = Math.max((activeIndex || 0) - slidesBefore, 0);
        const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        Object.assign(swiper.virtual, {
            from,
            to,
            offset,
            slidesGrid: swiper.slidesGrid
        });
        function onRendered() {
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            if (swiper.lazy && swiper.params.lazy.enabled) swiper.lazy.load();
            emit('virtualUpdate');
        }
        if (previousFrom === from && previousTo === to && !force) {
            if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) swiper.slides.css(offsetProp, `${offset}px`);
            swiper.updateProgress();
            emit('virtualUpdate');
            return;
        }
        if (swiper.params.virtual.renderExternal) {
            swiper.params.virtual.renderExternal.call(swiper, {
                offset,
                from,
                to,
                slides: function getSlides() {
                    const slidesToRender = [];
                    for(let i = from; i <= to; i += 1)slidesToRender.push(slides[i]);
                    return slidesToRender;
                }()
            });
            if (swiper.params.virtual.renderExternalUpdate) onRendered();
            else emit('virtualUpdate');
            return;
        }
        const prependIndexes = [];
        const appendIndexes = [];
        if (force) swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
        else {
            for(let i = previousFrom; i <= previousTo; i += 1)if (i < from || i > to) swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
        for(let i = 0; i < slides.length; i += 1)if (i >= from && i <= to) {
            if (typeof previousTo === 'undefined' || force) appendIndexes.push(i);
            else {
                if (i > previousTo) appendIndexes.push(i);
                if (i < previousFrom) prependIndexes.push(i);
            }
        }
        appendIndexes.forEach((index)=>{
            swiper.$wrapperEl.append(renderSlide(slides[index], index));
        });
        prependIndexes.sort((a, b)=>b - a).forEach((index)=>{
            swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
        swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
        onRendered();
    }
    function appendSlide(slides) {
        if (typeof slides === 'object' && 'length' in slides) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.push(slides[i]);
        } else swiper.virtual.slides.push(slides);
        update(true);
    }
    function prependSlide(slides) {
        const activeIndex = swiper.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;
        if (Array.isArray(slides)) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
            newActiveIndex = activeIndex + slides.length;
            numberOfNewSlides = slides.length;
        } else swiper.virtual.slides.unshift(slides);
        if (swiper.params.virtual.cache) {
            const cache = swiper.virtual.cache;
            const newCache = {};
            Object.keys(cache).forEach((cachedIndex)=>{
                const $cachedEl = cache[cachedIndex];
                const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
                if (cachedElIndex) $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
                newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
            });
            swiper.virtual.cache = newCache;
        }
        update(true);
        swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
        let activeIndex = swiper.activeIndex;
        if (Array.isArray(slidesIndexes)) for(let i = slidesIndexes.length - 1; i >= 0; i -= 1){
            swiper.virtual.slides.splice(slidesIndexes[i], 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes[i]];
            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        else {
            swiper.virtual.slides.splice(slidesIndexes, 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes];
            if (slidesIndexes < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        update(true);
        swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides() {
        swiper.virtual.slides = [];
        if (swiper.params.virtual.cache) swiper.virtual.cache = {};
        update(true);
        swiper.slideTo(0, 0);
    }
    on('beforeInit', ()=>{
        if (!swiper.params.virtual.enabled) return;
        swiper.virtual.slides = swiper.params.virtual.slides;
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
        if (!swiper.params.initialSlide) update();
    });
    on('setTranslate', ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode && !swiper._immediateVirtual) {
            clearTimeout(cssModeTimeout);
            cssModeTimeout = setTimeout(()=>{
                update();
            }, 100);
        } else update();
    });
    on('init update resize', ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode) (0, _utilsJs.setCSSProperty)(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    });
    Object.assign(swiper.virtual, {
        appendSlide,
        prependSlide,
        removeSlide,
        removeAllSlides,
        update
    });
}

},{"../../shared/dom.js":"fSctW","../../shared/utils.js":"hr9mL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"7AjEs":[function(require,module,exports,__globalThis) {
/* eslint-disable consistent-return */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Keyboard);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Keyboard({ swiper, extendParams, on, emit }) {
    const document = (0, _ssrWindow.getDocument)();
    const window = (0, _ssrWindow.getWindow)();
    swiper.keyboard = {
        enabled: false
    };
    extendParams({
        keyboard: {
            enabled: false,
            onlyInViewport: true,
            pageUpDown: true
        }
    });
    function handle(event) {
        if (!swiper.enabled) return;
        const { rtlTranslate: rtl } = swiper;
        let e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        const kc = e.keyCode || e.charCode;
        const pageUpDown = swiper.params.keyboard.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40; // Directions locks
        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return undefined;
        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) return undefined;
        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
            let inView = false; // Check that swiper should be inside of visible area of window
            if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) return undefined;
            const $el = swiper.$el;
            const swiperWidth = $el[0].clientWidth;
            const swiperHeight = $el[0].clientHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const swiperOffset = swiper.$el.offset();
            if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
            const swiperCoord = [
                [
                    swiperOffset.left,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left,
                    swiperOffset.top + swiperHeight
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top + swiperHeight
                ]
            ];
            for(let i = 0; i < swiperCoord.length; i += 1){
                const point = swiperCoord[i];
                if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                    if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                    inView = true;
                }
            }
            if (!inView) return undefined;
        }
        if (swiper.isHorizontal()) {
            if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
            if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
            if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (isPageDown || isArrowDown) swiper.slideNext();
            if (isPageUp || isArrowUp) swiper.slidePrev();
        }
        emit('keyPress', kc);
        return undefined;
    }
    function enable() {
        if (swiper.keyboard.enabled) return;
        (0, _domJsDefault.default)(document).on('keydown', handle);
        swiper.keyboard.enabled = true;
    }
    function disable() {
        if (!swiper.keyboard.enabled) return;
        (0, _domJsDefault.default)(document).off('keydown', handle);
        swiper.keyboard.enabled = false;
    }
    on('init', ()=>{
        if (swiper.params.keyboard.enabled) enable();
    });
    on('destroy', ()=>{
        if (swiper.keyboard.enabled) disable();
    });
    Object.assign(swiper.keyboard, {
        enable,
        disable
    });
}

},{"ssr-window":"d3jFK","../../shared/dom.js":"fSctW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"j4uiT":[function(require,module,exports,__globalThis) {
/* eslint-disable consistent-return */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Mousewheel);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function Mousewheel({ swiper, extendParams, on, emit }) {
    const window = (0, _ssrWindow.getWindow)();
    extendParams({
        mousewheel: {
            enabled: false,
            releaseOnEdges: false,
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            eventsTarget: 'container',
            thresholdDelta: null,
            thresholdTime: null
        }
    });
    swiper.mousewheel = {
        enabled: false
    };
    let timeout;
    let lastScrollTime = (0, _utilsJs.now)();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0; // spinX, spinY
        let pX = 0;
        let pY = 0; // pixelX, pixelY
        // Legacy
        if ('detail' in e) sY = e.detail;
        if ('wheelDelta' in e) sY = -e.wheelDelta / 120;
        if ('wheelDeltaY' in e) sY = -e.wheelDeltaY / 120;
        if ('wheelDeltaX' in e) sX = -e.wheelDeltaX / 120;
         // side scrolling on FF with DOMMouseScroll
        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if ('deltaY' in e) pY = e.deltaY;
        if ('deltaX' in e) pX = e.deltaX;
        if (e.shiftKey && !pX) {
            // if user scrolls with shift he wants horizontal scroll
            pX = pY;
            pY = 0;
        }
        if ((pX || pY) && e.deltaMode) {
            if (e.deltaMode === 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
            } else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
            }
        } // Fall-back if spin cannot be determined
        if (pX && !sX) sX = pX < 1 ? -1 : 1;
        if (pY && !sY) sY = pY < 1 ? -1 : 1;
        return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY
        };
    }
    function handleMouseEnter() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
        if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
        if (swiper.params.mousewheel.thresholdTime && (0, _utilsJs.now)() - lastScrollTime < swiper.params.mousewheel.thresholdTime) // Prevent if time between scrolls is below configured threshold
        return false;
         // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
        if (newEvent.delta >= 6 && (0, _utilsJs.now)() - lastScrollTime < 60) // Return false as a default
        return true;
         // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.
        if (newEvent.direction < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                swiper.slideNext();
                emit('scroll', newEvent.raw);
            }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            emit('scroll', newEvent.raw);
        } // If you got here is because an animation has been triggered so store the current time
        lastScrollTime = new window.Date().getTime(); // Return false as a default
        return false;
    }
    function releaseScroll(newEvent) {
        const params = swiper.params.mousewheel;
        if (newEvent.direction < 0) {
            if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
            return true;
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
        return true;
        return false;
    }
    function handle(event1) {
        let e = event1;
        let disableParentSwiper = true;
        if (!swiper.enabled) return;
        const params = swiper.params.mousewheel;
        if (swiper.params.cssMode) e.preventDefault();
        let target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') target = (0, _domJsDefault.default)(swiper.params.mousewheel.eventsTarget);
        if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        let delta = 0;
        const rtlFactor = swiper.rtlTranslate ? -1 : 1;
        const data = normalize(e);
        if (params.forceToAxis) {
            if (swiper.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                else return true;
            } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
            else return true;
        } else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        if (delta === 0) return true;
        if (params.invert) delta = -delta; // Get the scroll positions
        let positions = swiper.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.
        disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
        if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
            // Register the new event in a variable which stores the relevant data
            const newEvent = {
                time: (0, _utilsJs.now)(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
                raw: event1
            }; // Keep the most recent events
            if (recentWheelEvents.length >= 2) recentWheelEvents.shift(); // only store the last N events
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
            //   If direction has changed or
            //   if the scroll is quicker than the previous one:
            //     Animate the slider.
            // Else (this is the first time the wheel is moved):
            //     Animate the slider.
            if (prevEvent) {
                if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
            } else animateSlider(newEvent);
             // If it's time to release the scroll:
            //   Return now so you don't hit the preventDefault.
            if (releaseScroll(newEvent)) return true;
        } else {
            // Freemode or scrollContainer:
            // If we recently snapped after a momentum scroll, then ignore wheel events
            // to give time for the deceleration to finish. Stop ignoring after 500 msecs
            // or if it's a new scroll (larger delta or inverse sign as last event before
            // an end-of-momentum snap).
            const newEvent = {
                time: (0, _utilsJs.now)(),
                delta: Math.abs(delta),
                direction: Math.sign(delta)
            };
            const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
            if (!ignoreWheelEvents) {
                lastEventBeforeSnap = undefined;
                if (swiper.params.loop) swiper.loopFix();
                let position = swiper.getTranslate() + delta * params.sensitivity;
                const wasBeginning = swiper.isBeginning;
                const wasEnd = swiper.isEnd;
                if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
                if (swiper.params.freeMode.sticky) {
                    // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                    // the end of a momentum scroll by storing recent (N=15?) wheel events.
                    // 1. do all N events have decreasing or same (absolute value) delta?
                    // 2. did all N events arrive in the last M (M=500?) msecs?
                    // 3. does the earliest event have an (absolute value) delta that's
                    //    at least P (P=1?) larger than the most recent event's delta?
                    // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                    // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                    // Snap immediately and ignore remaining wheel events in this scroll.
                    // See comment above for "remaining wheel events in this scroll" determination.
                    // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                    clearTimeout(timeout);
                    timeout = undefined;
                    if (recentWheelEvents.length >= 15) recentWheelEvents.shift(); // only store the last N events
                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                    const firstEvent = recentWheelEvents[0];
                    recentWheelEvents.push(newEvent);
                    if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                    recentWheelEvents.splice(0);
                    else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                        // We're at the end of the deceleration of a momentum scroll, so there's no need
                        // to wait for more events. Snap ASAP on the next tick.
                        // Also, because there's some remaining momentum we'll bias the snap in the
                        // direction of the ongoing scroll because it's better UX for the scroll to snap
                        // in the same direction as the scroll instead of reversing to snap.  Therefore,
                        // if it's already scrolled more than 20% in the current direction, keep going.
                        const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        timeout = (0, _utilsJs.nextTick)(()=>{
                            swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 0); // no delay; move on next tick
                    }
                    if (!timeout) // if we get here, then we haven't detected the end of a momentum scroll, so
                    // we'll consider a scroll "complete" when there haven't been any wheel events
                    // for 500ms.
                    timeout = (0, _utilsJs.nextTick)(()=>{
                        const snapToThreshold = 0.5;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                    }, 500);
                } // Emit event
                if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay
                if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions
                if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
            }
        }
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return false;
    }
    function events(method) {
        let target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') target = (0, _domJsDefault.default)(swiper.params.mousewheel.eventsTarget);
        target[method]('mouseenter', handleMouseEnter);
        target[method]('mouseleave', handleMouseLeave);
        target[method]('wheel', handle);
    }
    function enable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.removeEventListener('wheel', handle);
            return true;
        }
        if (swiper.mousewheel.enabled) return false;
        events('on');
        swiper.mousewheel.enabled = true;
        return true;
    }
    function disable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.addEventListener(event, handle);
            return true;
        }
        if (!swiper.mousewheel.enabled) return false;
        events('off');
        swiper.mousewheel.enabled = false;
        return true;
    }
    on('init', ()=>{
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) disable();
        if (swiper.params.mousewheel.enabled) enable();
    });
    on('destroy', ()=>{
        if (swiper.params.cssMode) enable();
        if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
        enable,
        disable
    });
}

},{"ssr-window":"d3jFK","../../shared/dom.js":"fSctW","../../shared/utils.js":"hr9mL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"dRmpf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Navigation);
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Navigation({ swiper, extendParams, on, emit }) {
    extendParams({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: false,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
            navigationDisabledClass: 'swiper-navigation-disabled'
        }
    });
    swiper.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
    };
    function getEl(el) {
        let $el;
        if (el) {
            $el = (0, _domJsDefault.default)(el);
            if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) $el = swiper.$el.find(el);
        }
        return $el;
    }
    function toggleEl($el, disabled) {
        const params = swiper.params.navigation;
        if ($el && $el.length > 0) {
            $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
            if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
            if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
    }
    function update() {
        // Update Navigation Buttons
        if (swiper.params.loop) return;
        const { $nextEl, $prevEl } = swiper.navigation;
        toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
        toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slidePrev();
        emit('navigationPrev');
    }
    function onNextClick(e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slideNext();
        emit('navigationNext');
    }
    function init() {
        const params = swiper.params.navigation;
        swiper.params.navigation = (0, _createElementIfNotDefinedJsDefault.default)(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-prev'
        });
        if (!(params.nextEl || params.prevEl)) return;
        const $nextEl = getEl(params.nextEl);
        const $prevEl = getEl(params.prevEl);
        if ($nextEl && $nextEl.length > 0) $nextEl.on('click', onNextClick);
        if ($prevEl && $prevEl.length > 0) $prevEl.on('click', onPrevClick);
        Object.assign(swiper.navigation, {
            $nextEl,
            nextEl: $nextEl && $nextEl[0],
            $prevEl,
            prevEl: $prevEl && $prevEl[0]
        });
        if (!swiper.enabled) {
            if ($nextEl) $nextEl.addClass(params.lockClass);
            if ($prevEl) $prevEl.addClass(params.lockClass);
        }
    }
    function destroy() {
        const { $nextEl, $prevEl } = swiper.navigation;
        if ($nextEl && $nextEl.length) {
            $nextEl.off('click', onNextClick);
            $nextEl.removeClass(swiper.params.navigation.disabledClass);
        }
        if ($prevEl && $prevEl.length) {
            $prevEl.off('click', onPrevClick);
            $prevEl.removeClass(swiper.params.navigation.disabledClass);
        }
    }
    on('init', ()=>{
        if (swiper.params.navigation.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            update();
        }
    });
    on('toEdge fromEdge lock unlock', ()=>{
        update();
    });
    on('destroy', ()=>{
        destroy();
    });
    on('enable disable', ()=>{
        const { $nextEl, $prevEl } = swiper.navigation;
        if ($nextEl) $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
        if ($prevEl) $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    });
    on('click', (_s, e)=>{
        const { $nextEl, $prevEl } = swiper.navigation;
        const targetEl = e.target;
        if (swiper.params.navigation.hideOnClick && !(0, _domJsDefault.default)(targetEl).is($prevEl) && !(0, _domJsDefault.default)(targetEl).is($nextEl)) {
            if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
            let isHidden;
            if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
            else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
            if (isHidden === true) emit('navigationShow');
            else emit('navigationHide');
            if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
            if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
    });
    const enable = ()=>{
        swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
        init();
        update();
    };
    const disable = ()=>{
        swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
        destroy();
    };
    Object.assign(swiper.navigation, {
        enable,
        disable,
        update,
        init,
        destroy
    });
}

},{"../../shared/create-element-if-not-defined.js":"9uZbO","../../shared/dom.js":"fSctW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"9uZbO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createElementIfNotDefined);
var _ssrWindow = require("ssr-window");
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    const document = (0, _ssrWindow.getDocument)();
    if (swiper.params.createElements) Object.keys(checkProps).forEach((key)=>{
        if (!params[key] && params.auto === true) {
            let element = swiper.$el.children(`.${checkProps[key]}`)[0];
            if (!element) {
                element = document.createElement('div');
                element.className = checkProps[key];
                swiper.$el.append(element);
            }
            params[key] = element;
            originalParams[key] = element;
        }
    });
    return params;
}

},{"ssr-window":"d3jFK","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"9Tgv2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Pagination);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _classesToSelectorJs = require("../../shared/classes-to-selector.js");
var _classesToSelectorJsDefault = parcelHelpers.interopDefault(_classesToSelectorJs);
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
function Pagination({ swiper, extendParams, on, emit }) {
    const pfx = 'swiper-pagination';
    extendParams({
        pagination: {
            el: null,
            bulletElement: 'span',
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: 'bullets',
            // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: (number)=>number,
            formatFractionTotal: (number)=>number,
            bulletClass: `${pfx}-bullet`,
            bulletActiveClass: `${pfx}-bullet-active`,
            modifierClass: `${pfx}-`,
            currentClass: `${pfx}-current`,
            totalClass: `${pfx}-total`,
            hiddenClass: `${pfx}-hidden`,
            progressbarFillClass: `${pfx}-progressbar-fill`,
            progressbarOppositeClass: `${pfx}-progressbar-opposite`,
            clickableClass: `${pfx}-clickable`,
            lockClass: `${pfx}-lock`,
            horizontalClass: `${pfx}-horizontal`,
            verticalClass: `${pfx}-vertical`,
            paginationDisabledClass: `${pfx}-disabled`
        }
    });
    swiper.pagination = {
        el: null,
        $el: null,
        bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
        return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
    }
    function setSideBullets($bulletEl, position) {
        const { bulletActiveClass } = swiper.params.pagination;
        $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
    }
    function update() {
        // Render || Update Pagination bullets/items
        const rtl = swiper.rtl;
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el; // Current/Total
        let current;
        const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.loop) {
            current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
            if (current > slidesLength - 1 - swiper.loopedSlides * 2) current -= slidesLength - swiper.loopedSlides * 2;
            if (current > total - 1) current -= total;
            if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
        } else if (typeof swiper.snapIndex !== 'undefined') current = swiper.snapIndex;
        else current = swiper.activeIndex || 0;
         // Types
        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
            const bullets = swiper.pagination.bullets;
            let firstIndex;
            let lastIndex;
            let midIndex;
            if (params.dynamicBullets) {
                bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                    dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                    if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1;
                    else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                }
                firstIndex = Math.max(current - dynamicBulletIndex, 0);
                lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                midIndex = (lastIndex + firstIndex) / 2;
            }
            bullets.removeClass([
                '',
                '-next',
                '-next-next',
                '-prev',
                '-prev-prev',
                '-main'
            ].map((suffix)=>`${params.bulletActiveClass}${suffix}`).join(' '));
            if ($el.length > 1) bullets.each((bullet)=>{
                const $bullet = (0, _domJsDefault.default)(bullet);
                const bulletIndex = $bullet.index();
                if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                if (params.dynamicBullets) {
                    if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                    if (bulletIndex === firstIndex) setSideBullets($bullet, 'prev');
                    if (bulletIndex === lastIndex) setSideBullets($bullet, 'next');
                }
            });
            else {
                const $bullet = bullets.eq(current);
                const bulletIndex = $bullet.index();
                $bullet.addClass(params.bulletActiveClass);
                if (params.dynamicBullets) {
                    const $firstDisplayedBullet = bullets.eq(firstIndex);
                    const $lastDisplayedBullet = bullets.eq(lastIndex);
                    for(let i = firstIndex; i <= lastIndex; i += 1)bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                    if (swiper.params.loop) {
                        if (bulletIndex >= bullets.length) {
                            for(let i = params.dynamicMainBullets; i >= 0; i -= 1)bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                            bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                        } else {
                            setSideBullets($firstDisplayedBullet, 'prev');
                            setSideBullets($lastDisplayedBullet, 'next');
                        }
                    } else {
                        setSideBullets($firstDisplayedBullet, 'prev');
                        setSideBullets($lastDisplayedBullet, 'next');
                    }
                }
            }
            if (params.dynamicBullets) {
                const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                const offsetProp = rtl ? 'right' : 'left';
                bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
            }
        }
        if (params.type === 'fraction') {
            $el.find((0, _classesToSelectorJsDefault.default)(params.currentClass)).text(params.formatFractionCurrent(current + 1));
            $el.find((0, _classesToSelectorJsDefault.default)(params.totalClass)).text(params.formatFractionTotal(total));
        }
        if (params.type === 'progressbar') {
            let progressbarDirection;
            if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
            else progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
            const scale = (current + 1) / total;
            let scaleX = 1;
            let scaleY = 1;
            if (progressbarDirection === 'horizontal') scaleX = scale;
            else scaleY = scale;
            $el.find((0, _classesToSelectorJsDefault.default)(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
        }
        if (params.type === 'custom' && params.renderCustom) {
            $el.html(params.renderCustom(swiper, current + 1, total));
            emit('paginationRender', $el[0]);
        } else emit('paginationUpdate', $el[0]);
        if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
    function render() {
        // Render Container
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el;
        let paginationHTML = '';
        if (params.type === 'bullets') {
            let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
            for(let i = 0; i < numberOfBullets; i += 1)if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
            $el.html(paginationHTML);
            swiper.pagination.bullets = $el.find((0, _classesToSelectorJsDefault.default)(params.bulletClass));
        }
        if (params.type === 'fraction') {
            if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
            else paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
            $el.html(paginationHTML);
        }
        if (params.type === 'progressbar') {
            if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
            else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
            $el.html(paginationHTML);
        }
        if (params.type !== 'custom') emit('paginationRender', swiper.pagination.$el[0]);
    }
    function init() {
        swiper.params.pagination = (0, _createElementIfNotDefinedJsDefault.default)(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
            el: 'swiper-pagination'
        });
        const params = swiper.params.pagination;
        if (!params.el) return;
        let $el = (0, _domJsDefault.default)(params.el);
        if ($el.length === 0) return;
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
            $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper
            if ($el.length > 1) $el = $el.filter((el)=>{
                if ((0, _domJsDefault.default)(el).parents('.swiper')[0] !== swiper.el) return false;
                return true;
            });
        }
        if (params.type === 'bullets' && params.clickable) $el.addClass(params.clickableClass);
        $el.addClass(params.modifierClass + params.type);
        $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.type === 'bullets' && params.dynamicBullets) {
            $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
            dynamicBulletIndex = 0;
            if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
        }
        if (params.type === 'progressbar' && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
        if (params.clickable) $el.on('click', (0, _classesToSelectorJsDefault.default)(params.bulletClass), function onClick(e) {
            e.preventDefault();
            let index = (0, _domJsDefault.default)(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) index += swiper.loopedSlides;
            swiper.slideTo(index);
        });
        Object.assign(swiper.pagination, {
            $el,
            el: $el[0]
        });
        if (!swiper.enabled) $el.addClass(params.lockClass);
    }
    function destroy() {
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const $el = swiper.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
        if (params.clickable) $el.off('click', (0, _classesToSelectorJsDefault.default)(params.bulletClass));
    }
    on('init', ()=>{
        if (swiper.params.pagination.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            render();
            update();
        }
    });
    on('activeIndexChange', ()=>{
        if (swiper.params.loop) update();
        else if (typeof swiper.snapIndex === 'undefined') update();
    });
    on('snapIndexChange', ()=>{
        if (!swiper.params.loop) update();
    });
    on('slidesLengthChange', ()=>{
        if (swiper.params.loop) {
            render();
            update();
        }
    });
    on('snapGridLengthChange', ()=>{
        if (!swiper.params.loop) {
            render();
            update();
        }
    });
    on('destroy', ()=>{
        destroy();
    });
    on('enable disable', ()=>{
        const { $el } = swiper.pagination;
        if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
    });
    on('lock unlock', ()=>{
        update();
    });
    on('click', (_s, e)=>{
        const targetEl = e.target;
        const { $el } = swiper.pagination;
        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !(0, _domJsDefault.default)(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
            if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
            const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
            if (isHidden === true) emit('paginationShow');
            else emit('paginationHide');
            $el.toggleClass(swiper.params.pagination.hiddenClass);
        }
    });
    const enable = ()=>{
        swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
        if (swiper.pagination.$el) swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
        init();
        render();
        update();
    };
    const disable = ()=>{
        swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);
        if (swiper.pagination.$el) swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
        destroy();
    };
    Object.assign(swiper.pagination, {
        enable,
        disable,
        render,
        update,
        init,
        destroy
    });
}

},{"../../shared/dom.js":"fSctW","../../shared/classes-to-selector.js":"99TL7","../../shared/create-element-if-not-defined.js":"9uZbO","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"99TL7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>classesToSelector);
function classesToSelector(classes = '') {
    return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
    .replace(/ /g, '.')}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"4DkLc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Scrollbar);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
var _createElementIfNotDefinedJs = require("../../shared/create-element-if-not-defined.js");
var _createElementIfNotDefinedJsDefault = parcelHelpers.interopDefault(_createElementIfNotDefinedJs);
function Scrollbar({ swiper, extendParams, on, emit }) {
    const document = (0, _ssrWindow.getDocument)();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
        scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
            scrollbarDisabledClass: 'swiper-scrollbar-disabled',
            horizontalClass: `swiper-scrollbar-horizontal`,
            verticalClass: `swiper-scrollbar-vertical`
        }
    });
    swiper.scrollbar = {
        el: null,
        dragEl: null,
        $el: null,
        $dragEl: null
    };
    function setTranslate() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar, rtlTranslate: rtl, progress } = swiper;
        const { $dragEl, $el } = scrollbar;
        const params = swiper.params.scrollbar;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;
        if (rtl) {
            newPos = -newPos;
            if (newPos > 0) {
                newSize = dragSize - newPos;
                newPos = 0;
            } else if (-newPos + dragSize > trackSize) newSize = trackSize + newPos;
        } else if (newPos < 0) {
            newSize = dragSize + newPos;
            newPos = 0;
        } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos;
        if (swiper.isHorizontal()) {
            $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
            $dragEl[0].style.width = `${newSize}px`;
        } else {
            $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
            $dragEl[0].style.height = `${newSize}px`;
        }
        if (params.hide) {
            clearTimeout(timeout);
            $el[0].style.opacity = 1;
            timeout = setTimeout(()=>{
                $el[0].style.opacity = 0;
                $el.transition(400);
            }, 1000);
        }
    }
    function setTransition(duration) {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.$dragEl.transition(duration);
    }
    function updateSize() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar } = swiper;
        const { $dragEl, $el } = scrollbar;
        $dragEl[0].style.width = '';
        $dragEl[0].style.height = '';
        trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
        if (swiper.params.scrollbar.dragSize === 'auto') dragSize = trackSize * divider;
        else dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        if (swiper.isHorizontal()) $dragEl[0].style.width = `${dragSize}px`;
        else $dragEl[0].style.height = `${dragSize}px`;
        if (divider >= 1) $el[0].style.display = 'none';
        else $el[0].style.display = '';
        if (swiper.params.scrollbar.hide) $el[0].style.opacity = 0;
        if (swiper.params.watchOverflow && swiper.enabled) scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    }
    function getPointerPosition(e) {
        if (swiper.isHorizontal()) return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
    }
    function setDragPosition(e) {
        const { scrollbar, rtlTranslate: rtl } = swiper;
        const { $el } = scrollbar;
        let positionRatio;
        positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) positionRatio = 1 - positionRatio;
        const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar, $wrapperEl } = swiper;
        const { $el, $dragEl } = scrollbar;
        isTouched = true;
        dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        setDragPosition(e);
        clearTimeout(dragTimeout);
        $el.transition(0);
        if (params.hide) $el.css('opacity', 1);
        if (swiper.params.cssMode) swiper.$wrapperEl.css('scroll-snap-type', 'none');
        emit('scrollbarDragStart', e);
    }
    function onDragMove(e) {
        const { scrollbar, $wrapperEl } = swiper;
        const { $el, $dragEl } = scrollbar;
        if (!isTouched) return;
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        emit('scrollbarDragMove', e);
    }
    function onDragEnd(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar, $wrapperEl } = swiper;
        const { $el } = scrollbar;
        if (!isTouched) return;
        isTouched = false;
        if (swiper.params.cssMode) {
            swiper.$wrapperEl.css('scroll-snap-type', '');
            $wrapperEl.transition('');
        }
        if (params.hide) {
            clearTimeout(dragTimeout);
            dragTimeout = (0, _utilsJs.nextTick)(()=>{
                $el.css('opacity', 0);
                $el.transition(400);
            }, 1000);
        }
        emit('scrollbarDragEnd', e);
        if (params.snapOnRelease) swiper.slideToClosest();
    }
    function events(method) {
        const { scrollbar, touchEventsTouch, touchEventsDesktop, params, support } = swiper;
        const $el = scrollbar.$el;
        if (!$el) return;
        const target = $el[0];
        const activeListener = support.passiveListener && params.passiveListeners ? {
            passive: false,
            capture: false
        } : false;
        const passiveListener = support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (!target) return;
        const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
        if (!support.touch) {
            target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
            document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
            document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
        } else {
            target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
            target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
            target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
        }
    }
    function enableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events('on');
    }
    function disableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events('off');
    }
    function init() {
        const { scrollbar, $el: $swiperEl } = swiper;
        swiper.params.scrollbar = (0, _createElementIfNotDefinedJsDefault.default)(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
            el: 'swiper-scrollbar'
        });
        const params = swiper.params.scrollbar;
        if (!params.el) return;
        let $el = (0, _domJsDefault.default)(params.el);
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) $el = $swiperEl.find(params.el);
        $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
        if ($dragEl.length === 0) {
            $dragEl = (0, _domJsDefault.default)(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
            $el.append($dragEl);
        }
        Object.assign(scrollbar, {
            $el,
            el: $el[0],
            $dragEl,
            dragEl: $dragEl[0]
        });
        if (params.draggable) enableDraggable();
        if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
    function destroy() {
        const params = swiper.params.scrollbar;
        const $el = swiper.scrollbar.$el;
        if ($el) $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        disableDraggable();
    }
    on('init', ()=>{
        if (swiper.params.scrollbar.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            updateSize();
            setTranslate();
        }
    });
    on('update resize observerUpdate lock unlock', ()=>{
        updateSize();
    });
    on('setTranslate', ()=>{
        setTranslate();
    });
    on('setTransition', (_s, duration)=>{
        setTransition(duration);
    });
    on('enable disable', ()=>{
        const { $el } = swiper.scrollbar;
        if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    });
    on('destroy', ()=>{
        destroy();
    });
    const enable = ()=>{
        swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
        if (swiper.scrollbar.$el) swiper.scrollbar.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
        init();
        updateSize();
        setTranslate();
    };
    const disable = ()=>{
        swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
        if (swiper.scrollbar.$el) swiper.scrollbar.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
        destroy();
    };
    Object.assign(swiper.scrollbar, {
        enable,
        disable,
        updateSize,
        setTranslate,
        init,
        destroy
    });
}

},{"ssr-window":"d3jFK","../../shared/dom.js":"fSctW","../../shared/utils.js":"hr9mL","../../shared/create-element-if-not-defined.js":"9uZbO","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"5K6oK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Parallax);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Parallax({ swiper, extendParams, on }) {
    extendParams({
        parallax: {
            enabled: false
        }
    });
    const setTransform = (el, progress)=>{
        const { rtl } = swiper;
        const $el = (0, _domJsDefault.default)(el);
        const rtlFactor = rtl ? -1 : 1;
        const p = $el.attr('data-swiper-parallax') || '0';
        let x = $el.attr('data-swiper-parallax-x');
        let y = $el.attr('data-swiper-parallax-y');
        const scale = $el.attr('data-swiper-parallax-scale');
        const opacity = $el.attr('data-swiper-parallax-opacity');
        if (x || y) {
            x = x || '0';
            y = y || '0';
        } else if (swiper.isHorizontal()) {
            x = p;
            y = '0';
        } else {
            y = p;
            x = '0';
        }
        if (x.indexOf('%') >= 0) x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        else x = `${x * progress * rtlFactor}px`;
        if (y.indexOf('%') >= 0) y = `${parseInt(y, 10) * progress}%`;
        else y = `${y * progress}px`;
        if (typeof opacity !== 'undefined' && opacity !== null) {
            const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
            $el[0].style.opacity = currentOpacity;
        }
        if (typeof scale === 'undefined' || scale === null) $el.transform(`translate3d(${x}, ${y}, 0px)`);
        else {
            const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
            $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
        }
    };
    const setTranslate = ()=>{
        const { $el, slides, progress, snapGrid } = swiper;
        $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((el)=>{
            setTransform(el, progress);
        });
        slides.each((slideEl, slideIndex)=>{
            let slideProgress = slideEl.progress;
            if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
            slideProgress = Math.min(Math.max(slideProgress, -1), 1);
            (0, _domJsDefault.default)(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((el)=>{
                setTransform(el, slideProgress);
            });
        });
    };
    const setTransition = (duration = swiper.params.speed)=>{
        const { $el } = swiper;
        $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((parallaxEl)=>{
            const $parallaxEl = (0, _domJsDefault.default)(parallaxEl);
            let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
            if (duration === 0) parallaxDuration = 0;
            $parallaxEl.transition(parallaxDuration);
        });
    };
    on('beforeInit', ()=>{
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
    });
    on('init', ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on('setTranslate', ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on('setTransition', (_swiper, duration)=>{
        if (!swiper.params.parallax.enabled) return;
        setTransition(duration);
    });
}

},{"../../shared/dom.js":"fSctW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"jZiSp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Zoom);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _utilsJs = require("../../shared/utils.js");
function Zoom({ swiper, extendParams, on, emit }) {
    const window = (0, _ssrWindow.getWindow)();
    extendParams({
        zoom: {
            enabled: false,
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed'
        }
    });
    swiper.zoom = {
        enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let gesturesEnabled;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const gesture = {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3
    };
    const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
    };
    const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
        get () {
            return scale;
        },
        set (value) {
            if (scale !== value) {
                const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
                const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
                emit('zoomChange', value, imageEl, slideEl);
            }
            scale = value;
        }
    });
    function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        const x1 = e.targetTouches[0].pageX;
        const y1 = e.targetTouches[0].pageY;
        const x2 = e.targetTouches[1].pageX;
        const y2 = e.targetTouches[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
    } // Events
    function onGestureStart(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        if (!support.gestures) {
            if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) return;
            fakeGestureTouched = true;
            gesture.scaleStart = getDistanceBetweenTouches(e);
        }
        if (!gesture.$slideEl || !gesture.$slideEl.length) {
            gesture.$slideEl = (0, _domJsDefault.default)(e.target).closest(`.${swiper.params.slideClass}`);
            if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
            gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            if (gesture.$imageWrapEl.length === 0) {
                gesture.$imageEl = undefined;
                return;
            }
        }
        if (gesture.$imageEl) gesture.$imageEl.transition(0);
        isScaling = true;
    }
    function onGestureChange(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        if (!support.gestures) {
            if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) return;
            fakeGestureMoved = true;
            gesture.scaleMove = getDistanceBetweenTouches(e);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
            if (e.type === 'gesturechange') onGestureStart(e);
            return;
        }
        if (support.gestures) zoom.scale = e.scale * currentScale;
        else zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
        if (zoom.scale > gesture.maxRatio) zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        if (zoom.scale < params.minRatio) zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
        gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    }
    function onGestureEnd(e) {
        const device = swiper.device;
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        if (!support.gestures) {
            if (!fakeGestureTouched || !fakeGestureMoved) return;
            if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) return;
            fakeGestureTouched = false;
            fakeGestureMoved = false;
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale === 1) gesture.$slideEl = undefined;
    }
    function onTouchStart(e) {
        const device = swiper.device;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    }
    function onTouchMove(e) {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        swiper.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl) return;
        if (!image.isMoved) {
            image.width = gesture.$imageEl[0].offsetWidth;
            image.height = gesture.$imageEl[0].offsetHeight;
            image.startX = (0, _utilsJs.getTranslate)(gesture.$imageWrapEl[0], 'x') || 0;
            image.startY = (0, _utilsJs.getTranslate)(gesture.$imageWrapEl[0], 'y') || 0;
            gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
            gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
            gesture.$imageWrapEl.transition(0);
        } // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        if (!image.isMoved && !isScaling) {
            if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                image.isTouched = false;
                return;
            }
            if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                image.isTouched = false;
                return;
            }
        }
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        image.isMoved = true;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
        if (image.currentX < image.minX) image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        if (image.currentX > image.maxX) image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        if (image.currentY < image.minY) image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        if (image.currentY > image.maxY) image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
         // Velocity
        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    }
    function onTouchEnd() {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (!image.isTouched || !image.isMoved) {
            image.isTouched = false;
            image.isMoved = false;
            return;
        }
        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const momentumDistanceX = velocity.x * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocity.y * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY; // Fix duration
        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY; // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    }
    function onTransitionEnd() {
        const zoom = swiper.zoom;
        if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
            if (gesture.$imageEl) gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
            if (gesture.$imageWrapEl) gesture.$imageWrapEl.transform('translate3d(0,0,0)');
            zoom.scale = 1;
            currentScale = 1;
            gesture.$slideEl = undefined;
            gesture.$imageEl = undefined;
            gesture.$imageWrapEl = undefined;
        }
    }
    function zoomIn(e) {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.$slideEl) {
            if (e && e.target) gesture.$slideEl = (0, _domJsDefault.default)(e.target).closest(`.${swiper.params.slideClass}`);
            if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            }
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = 'hidden';
            swiper.wrapperEl.style.touchAction = 'none';
        }
        gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;
        if (typeof image.touchesStart.x === 'undefined' && e) {
            touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
            touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
        } else {
            touchX = image.touchesStart.x;
            touchY = image.touchesStart.y;
        }
        zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (e) {
            slideWidth = gesture.$slideEl[0].offsetWidth;
            slideHeight = gesture.$slideEl[0].offsetHeight;
            offsetX = gesture.$slideEl.offset().left + window.scrollX;
            offsetY = gesture.$slideEl.offset().top + window.scrollY;
            diffX = offsetX + slideWidth / 2 - touchX;
            diffY = offsetY + slideHeight / 2 - touchY;
            imageWidth = gesture.$imageEl[0].offsetWidth;
            imageHeight = gesture.$imageEl[0].offsetHeight;
            scaledWidth = imageWidth * zoom.scale;
            scaledHeight = imageHeight * zoom.scale;
            translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
            translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
            translateMaxX = -translateMinX;
            translateMaxY = -translateMinY;
            translateX = diffX * zoom.scale;
            translateY = diffY * zoom.scale;
            if (translateX < translateMinX) translateX = translateMinX;
            if (translateX > translateMaxX) translateX = translateMaxX;
            if (translateY < translateMinY) translateY = translateMinY;
            if (translateY > translateMaxY) translateY = translateMaxY;
        } else {
            translateX = 0;
            translateY = 0;
        }
        gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
        gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    }
    function zoomOut() {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.$slideEl) {
            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
            else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = '';
            swiper.wrapperEl.style.touchAction = '';
        }
        zoom.scale = 1;
        currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
        gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
        gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
        gesture.$slideEl = undefined;
    } // Toggle Zoom
    function zoomToggle(e) {
        const zoom = swiper.zoom;
        if (zoom.scale && zoom.scale !== 1) // Zoom Out
        zoomOut();
        else // Zoom In
        zoomIn(e);
    }
    function getListeners() {
        const support = swiper.support;
        const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        const activeListenerWithCapture = support.passiveListener ? {
            passive: false,
            capture: true
        } : true;
        return {
            passiveListener,
            activeListenerWithCapture
        };
    }
    function getSlideSelector() {
        return `.${swiper.params.slideClass}`;
    }
    function toggleGestures(method) {
        const { passiveListener } = getListeners();
        const slideSelector = getSlideSelector();
        swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
        swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
        swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
    }
    function enableGestures() {
        if (gesturesEnabled) return;
        gesturesEnabled = true;
        toggleGestures('on');
    }
    function disableGestures() {
        if (!gesturesEnabled) return;
        gesturesEnabled = false;
        toggleGestures('off');
    } // Attach/Detach Events
    function enable() {
        const zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        const support = swiper.support;
        const { passiveListener, activeListenerWithCapture } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image
        if (support.gestures) {
            swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
            swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
            swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
            if (swiper.touchEvents.cancel) swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
        } // Move image
        swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
    }
    function disable() {
        const zoom = swiper.zoom;
        if (!zoom.enabled) return;
        const support = swiper.support;
        zoom.enabled = false;
        const { passiveListener, activeListenerWithCapture } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image
        if (support.gestures) {
            swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
            swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
            swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
            if (swiper.touchEvents.cancel) swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
        } // Move image
        swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
    }
    on('init', ()=>{
        if (swiper.params.zoom.enabled) enable();
    });
    on('destroy', ()=>{
        disable();
    });
    on('touchStart', (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchStart(e);
    });
    on('touchEnd', (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchEnd(e);
    });
    on('doubleTap', (_s, e)=>{
        if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) zoomToggle(e);
    });
    on('transitionEnd', ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) onTransitionEnd();
    });
    on('slideChange', ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) onTransitionEnd();
    });
    Object.assign(swiper.zoom, {
        enable,
        disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle
    });
}

},{"ssr-window":"d3jFK","../../shared/dom.js":"fSctW","../../shared/utils.js":"hr9mL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"4efs7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Lazy);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Lazy({ swiper, extendParams, on, emit }) {
    extendParams({
        lazy: {
            checkInView: false,
            enabled: false,
            loadPrevNext: false,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: false,
            scrollingElement: '',
            elementClass: 'swiper-lazy',
            loadingClass: 'swiper-lazy-loading',
            loadedClass: 'swiper-lazy-loaded',
            preloaderClass: 'swiper-lazy-preloader'
        }
    });
    swiper.lazy = {};
    let scrollHandlerAttached = false;
    let initialImageLoaded = false;
    function loadInSlide(index, loadInDuplicate = true) {
        const params = swiper.params.lazy;
        if (typeof index === 'undefined') return;
        if (swiper.slides.length === 0) return;
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
        const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
        if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) $images.push($slideEl[0]);
        if ($images.length === 0) return;
        $images.each((imageEl)=>{
            const $imageEl = (0, _domJsDefault.default)(imageEl);
            $imageEl.addClass(params.loadingClass);
            const background = $imageEl.attr('data-background');
            const src = $imageEl.attr('data-src');
            const srcset = $imageEl.attr('data-srcset');
            const sizes = $imageEl.attr('data-sizes');
            const $pictureEl = $imageEl.parent('picture');
            swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, ()=>{
                if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
                if (background) {
                    $imageEl.css('background-image', `url("${background}")`);
                    $imageEl.removeAttr('data-background');
                } else {
                    if (srcset) {
                        $imageEl.attr('srcset', srcset);
                        $imageEl.removeAttr('data-srcset');
                    }
                    if (sizes) {
                        $imageEl.attr('sizes', sizes);
                        $imageEl.removeAttr('data-sizes');
                    }
                    if ($pictureEl.length) $pictureEl.children('source').each((sourceEl)=>{
                        const $source = (0, _domJsDefault.default)(sourceEl);
                        if ($source.attr('data-srcset')) {
                            $source.attr('srcset', $source.attr('data-srcset'));
                            $source.removeAttr('data-srcset');
                        }
                    });
                    if (src) {
                        $imageEl.attr('src', src);
                        $imageEl.removeAttr('data-src');
                    }
                }
                $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                $slideEl.find(`.${params.preloaderClass}`).remove();
                if (swiper.params.loop && loadInDuplicate) {
                    const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
                    if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                        const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                        loadInSlide(originalSlide.index(), false);
                    } else {
                        const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                        loadInSlide(duplicatedSlide.index(), false);
                    }
                }
                emit('lazyImageReady', $slideEl[0], $imageEl[0]);
                if (swiper.params.autoHeight) swiper.updateAutoHeight();
            });
            emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
        });
    }
    function load() {
        const { $wrapperEl, params: swiperParams, slides, activeIndex } = swiper;
        const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
        const params = swiperParams.lazy;
        let slidesPerView = swiperParams.slidesPerView;
        if (slidesPerView === 'auto') slidesPerView = 0;
        function slideExist(index) {
            if (isVirtual) {
                if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) return true;
            } else if (slides[index]) return true;
            return false;
        }
        function slideIndex(slideEl) {
            if (isVirtual) return (0, _domJsDefault.default)(slideEl).attr('data-swiper-slide-index');
            return (0, _domJsDefault.default)(slideEl).index();
        }
        if (!initialImageLoaded) initialImageLoaded = true;
        if (swiper.params.watchSlidesProgress) $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((slideEl)=>{
            const index = isVirtual ? (0, _domJsDefault.default)(slideEl).attr('data-swiper-slide-index') : (0, _domJsDefault.default)(slideEl).index();
            loadInSlide(index);
        });
        else if (slidesPerView > 1) {
            for(let i = activeIndex; i < activeIndex + slidesPerView; i += 1)if (slideExist(i)) loadInSlide(i);
        } else loadInSlide(activeIndex);
        if (params.loadPrevNext) {
            if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                const amount = params.loadPrevNextAmount;
                const spv = Math.ceil(slidesPerView);
                const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides
                for(let i = activeIndex + spv; i < maxIndex; i += 1)if (slideExist(i)) loadInSlide(i);
                 // Prev Slides
                for(let i = minIndex; i < activeIndex; i += 1)if (slideExist(i)) loadInSlide(i);
            } else {
                const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
                if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
                const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
                if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
            }
        }
    }
    function checkInViewOnLoad() {
        const window = (0, _ssrWindow.getWindow)();
        if (!swiper || swiper.destroyed) return;
        const $scrollElement = swiper.params.lazy.scrollingElement ? (0, _domJsDefault.default)(swiper.params.lazy.scrollingElement) : (0, _domJsDefault.default)(window);
        const isWindow = $scrollElement[0] === window;
        const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
        const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
        const swiperOffset = swiper.$el.offset();
        const { rtlTranslate: rtl } = swiper;
        let inView = false;
        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
        const swiperCoord = [
            [
                swiperOffset.left,
                swiperOffset.top
            ],
            [
                swiperOffset.left + swiper.width,
                swiperOffset.top
            ],
            [
                swiperOffset.left,
                swiperOffset.top + swiper.height
            ],
            [
                swiperOffset.left + swiper.width,
                swiperOffset.top + swiper.height
            ]
        ];
        for(let i = 0; i < swiperCoord.length; i += 1){
            const point = swiperCoord[i];
            if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                inView = true;
            }
        }
        const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (inView) {
            load();
            $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
        } else if (!scrollHandlerAttached) {
            scrollHandlerAttached = true;
            $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
        }
    }
    on('beforeInit', ()=>{
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) swiper.params.preloadImages = false;
    });
    on('init', ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on('scroll', ()=>{
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) load();
    });
    on('scrollbarDragMove resize _freeModeNoMomentumRelease', ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on('transitionStart', ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
                if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                else load();
            }
        }
    });
    on('transitionEnd', ()=>{
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on('slideChange', ()=>{
        const { lazy, cssMode, watchSlidesProgress, touchReleaseOnEdges, resistanceRatio } = swiper.params;
        if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) load();
    });
    on('destroy', ()=>{
        if (!swiper.$el) return;
        swiper.$el.find(`.${swiper.params.lazy.loadingClass}`).removeClass(swiper.params.lazy.loadingClass);
    });
    Object.assign(swiper.lazy, {
        load,
        loadInSlide
    });
}

},{"ssr-window":"d3jFK","../../shared/dom.js":"fSctW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"5ctoV":[function(require,module,exports,__globalThis) {
/* eslint no-bitwise: ["error", { "allow": [">>"] }] */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Controller);
var _utilsJs = require("../../shared/utils.js");
function Controller({ swiper, extendParams, on }) {
    extendParams({
        controller: {
            control: undefined,
            inverse: false,
            by: 'slide' // or 'container'
        }
    });
    swiper.controller = {
        control: undefined
    };
    function LinearSpline(x, y) {
        const binarySearch = function search() {
            let maxIndex;
            let minIndex;
            let guess;
            return (array, val)=>{
                minIndex = -1;
                maxIndex = array.length;
                while(maxIndex - minIndex > 1){
                    guess = maxIndex + minIndex >> 1;
                    if (array[guess] <= val) minIndex = guess;
                    else maxIndex = guess;
                }
                return maxIndex;
            };
        }();
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
        let i1;
        let i3;
        this.interpolate = function interpolate(x2) {
            if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):
            i3 = binarySearch(this.x, x2);
            i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
            // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
            return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };
        return this;
    } // xxx: for now i will just save one spline function to to
    function getInterpolateFunction(c) {
        if (!swiper.controller.spline) swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
    function setTranslate(_t, byController) {
        const controlled = swiper.controller.control;
        let multiplier;
        let controlledTranslate;
        const Swiper = swiper.constructor;
        function setControlledTranslate(c) {
            // this will create an Interpolate function based on the snapGrids
            // x is the Grid of the scrolled scroller and y will be the controlled scroller
            // it makes sense to create this only once and recall it for the interpolation
            // the function does a lot of value caching for performance
            const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
            if (swiper.params.controller.by === 'slide') {
                getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out
                controlledTranslate = -swiper.controller.spline.interpolate(-translate);
            }
            if (!controlledTranslate || swiper.params.controller.by === 'container') {
                multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
            }
            if (swiper.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
            c.updateProgress(controlledTranslate);
            c.setTranslate(controlledTranslate, swiper);
            c.updateActiveIndex();
            c.updateSlidesClasses();
        }
        if (Array.isArray(controlled)) {
            for(let i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTranslate(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTranslate(controlled);
    }
    function setTransition(duration, byController) {
        const Swiper = swiper.constructor;
        const controlled = swiper.controller.control;
        let i;
        function setControlledTransition(c) {
            c.setTransition(duration, swiper);
            if (duration !== 0) {
                c.transitionStart();
                if (c.params.autoHeight) (0, _utilsJs.nextTick)(()=>{
                    c.updateAutoHeight();
                });
                c.$wrapperEl.transitionEnd(()=>{
                    if (!controlled) return;
                    if (c.params.loop && swiper.params.controller.by === 'slide') c.loopFix();
                    c.transitionEnd();
                });
            }
        }
        if (Array.isArray(controlled)) {
            for(i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTransition(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTransition(controlled);
    }
    function removeSpline() {
        if (!swiper.controller.control) return;
        if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
        }
    }
    on('beforeInit', ()=>{
        swiper.controller.control = swiper.params.controller.control;
    });
    on('update', ()=>{
        removeSpline();
    });
    on('resize', ()=>{
        removeSpline();
    });
    on('observerUpdate', ()=>{
        removeSpline();
    });
    on('setTranslate', (_s, translate, byController)=>{
        if (!swiper.controller.control) return;
        swiper.controller.setTranslate(translate, byController);
    });
    on('setTransition', (_s, duration, byController)=>{
        if (!swiper.controller.control) return;
        swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
        setTranslate,
        setTransition
    });
}

},{"../../shared/utils.js":"hr9mL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"2SnLS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>A11y);
var _classesToSelectorJs = require("../../shared/classes-to-selector.js");
var _classesToSelectorJsDefault = parcelHelpers.interopDefault(_classesToSelectorJs);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function A11y({ swiper, extendParams, on }) {
    extendParams({
        a11y: {
            enabled: true,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            slideLabelMessage: '{{index}} / {{slidesLength}}',
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: 'group',
            id: null
        }
    });
    swiper.a11y = {
        clicked: false
    };
    let liveRegion = null;
    function notify(message) {
        const notification = liveRegion;
        if (notification.length === 0) return;
        notification.html('');
        notification.html(message);
    }
    function getRandomNumber(size = 16) {
        const randomChar = ()=>Math.round(16 * Math.random()).toString(16);
        return 'x'.repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable($el) {
        $el.attr('tabIndex', '0');
    }
    function makeElNotFocusable($el) {
        $el.attr('tabIndex', '-1');
    }
    function addElRole($el, role) {
        $el.attr('role', role);
    }
    function addElRoleDescription($el, description) {
        $el.attr('aria-roledescription', description);
    }
    function addElControls($el, controls) {
        $el.attr('aria-controls', controls);
    }
    function addElLabel($el, label) {
        $el.attr('aria-label', label);
    }
    function addElId($el, id) {
        $el.attr('id', id);
    }
    function addElLive($el, live) {
        $el.attr('aria-live', live);
    }
    function disableEl($el) {
        $el.attr('aria-disabled', true);
    }
    function enableEl($el) {
        $el.attr('aria-disabled', false);
    }
    function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const params = swiper.params.a11y;
        const $targetEl = (0, _domJsDefault.default)(e.target);
        if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
            if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
            if (swiper.isEnd) notify(params.lastSlideMessage);
            else notify(params.nextSlideMessage);
        }
        if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
            if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
            if (swiper.isBeginning) notify(params.firstSlideMessage);
            else notify(params.prevSlideMessage);
        }
        if (swiper.pagination && $targetEl.is((0, _classesToSelectorJsDefault.default)(swiper.params.pagination.bulletClass))) $targetEl[0].click();
    }
    function updateNavigation() {
        if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
        const { $nextEl, $prevEl } = swiper.navigation;
        if ($prevEl && $prevEl.length > 0) {
            if (swiper.isBeginning) {
                disableEl($prevEl);
                makeElNotFocusable($prevEl);
            } else {
                enableEl($prevEl);
                makeElFocusable($prevEl);
            }
        }
        if ($nextEl && $nextEl.length > 0) {
            if (swiper.isEnd) {
                disableEl($nextEl);
                makeElNotFocusable($nextEl);
            } else {
                enableEl($nextEl);
                makeElFocusable($nextEl);
            }
        }
    }
    function hasPagination() {
        return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
        return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
        const params = swiper.params.a11y;
        if (!hasPagination()) return;
        swiper.pagination.bullets.each((bulletEl)=>{
            const $bulletEl = (0, _domJsDefault.default)(bulletEl);
            if (swiper.params.pagination.clickable) {
                makeElFocusable($bulletEl);
                if (!swiper.params.pagination.renderBullet) {
                    addElRole($bulletEl, 'button');
                    addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
                }
            }
            if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) $bulletEl.attr('aria-current', 'true');
            else $bulletEl.removeAttr('aria-current');
        });
    }
    const initNavEl = ($el, wrapperId, message)=>{
        makeElFocusable($el);
        if ($el[0].tagName !== 'BUTTON') {
            addElRole($el, 'button');
            $el.on('keydown', onEnterOrSpaceKey);
        }
        addElLabel($el, message);
        addElControls($el, wrapperId);
    };
    const handlePointerDown = ()=>{
        swiper.a11y.clicked = true;
    };
    const handlePointerUp = ()=>{
        requestAnimationFrame(()=>{
            requestAnimationFrame(()=>{
                if (!swiper.destroyed) swiper.a11y.clicked = false;
            });
        });
    };
    const handleFocus = (e)=>{
        if (swiper.a11y.clicked) return;
        const slideEl = e.target.closest(`.${swiper.params.slideClass}`);
        if (!slideEl || !swiper.slides.includes(slideEl)) return;
        const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
        const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
        if (isActive || isVisible) return;
        if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
        if (swiper.isHorizontal()) swiper.el.scrollLeft = 0;
        else swiper.el.scrollTop = 0;
        swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
    };
    const initSlides = ()=>{
        const params = swiper.params.a11y;
        if (params.itemRoleDescriptionMessage) addElRoleDescription((0, _domJsDefault.default)(swiper.slides), params.itemRoleDescriptionMessage);
        if (params.slideRole) addElRole((0, _domJsDefault.default)(swiper.slides), params.slideRole);
        const slidesLength = swiper.params.loop ? swiper.slides.filter((el)=>!el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;
        if (params.slideLabelMessage) swiper.slides.each((slideEl, index)=>{
            const $slideEl = (0, _domJsDefault.default)(slideEl);
            const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
            const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
            addElLabel($slideEl, ariaLabelMessage);
        });
    };
    const init = ()=>{
        const params = swiper.params.a11y;
        swiper.$el.append(liveRegion); // Container
        const $containerEl = swiper.$el;
        if (params.containerRoleDescriptionMessage) addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
        if (params.containerMessage) addElLabel($containerEl, params.containerMessage);
         // Wrapper
        const $wrapperEl = swiper.$wrapperEl;
        const wrapperId = params.id || $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
        const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
        addElId($wrapperEl, wrapperId);
        addElLive($wrapperEl, live); // Slide
        initSlides(); // Navigation
        let $nextEl;
        let $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
        if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
        if ($nextEl && $nextEl.length) initNavEl($nextEl, wrapperId, params.nextSlideMessage);
        if ($prevEl && $prevEl.length) initNavEl($prevEl, wrapperId, params.prevSlideMessage);
         // Pagination
        if (hasClickablePagination()) swiper.pagination.$el.on('keydown', (0, _classesToSelectorJsDefault.default)(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
         // Tab focus
        swiper.$el.on('focus', handleFocus, true);
        swiper.$el.on('pointerdown', handlePointerDown, true);
        swiper.$el.on('pointerup', handlePointerUp, true);
    };
    function destroy() {
        if (liveRegion && liveRegion.length > 0) liveRegion.remove();
        let $nextEl;
        let $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
        if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
        if ($nextEl) $nextEl.off('keydown', onEnterOrSpaceKey);
        if ($prevEl) $prevEl.off('keydown', onEnterOrSpaceKey);
         // Pagination
        if (hasClickablePagination()) swiper.pagination.$el.off('keydown', (0, _classesToSelectorJsDefault.default)(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
         // Tab focus
        swiper.$el.off('focus', handleFocus, true);
        swiper.$el.off('pointerdown', handlePointerDown, true);
        swiper.$el.off('pointerup', handlePointerUp, true);
    }
    on('beforeInit', ()=>{
        liveRegion = (0, _domJsDefault.default)(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
    });
    on('afterInit', ()=>{
        if (!swiper.params.a11y.enabled) return;
        init();
    });
    on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', ()=>{
        if (!swiper.params.a11y.enabled) return;
        initSlides();
    });
    on('fromEdge toEdge afterInit lock unlock', ()=>{
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
    });
    on('paginationUpdate', ()=>{
        if (!swiper.params.a11y.enabled) return;
        updatePagination();
    });
    on('destroy', ()=>{
        if (!swiper.params.a11y.enabled) return;
        destroy();
    });
}

},{"../../shared/classes-to-selector.js":"99TL7","../../shared/dom.js":"fSctW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8fpEM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>History);
var _ssrWindow = require("ssr-window");
function History({ swiper, extendParams, on }) {
    extendParams({
        history: {
            enabled: false,
            root: '',
            replaceState: false,
            key: 'slides',
            keepQuery: false
        }
    });
    let initialized = false;
    let paths = {};
    const slugify = (text)=>{
        return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    };
    const getPathValues = (urlOverride)=>{
        const window = (0, _ssrWindow.getWindow)();
        let location;
        if (urlOverride) location = new URL(urlOverride);
        else location = window.location;
        const pathArray = location.pathname.slice(1).split('/').filter((part)=>part !== '');
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return {
            key,
            value
        };
    };
    const setHistory = (key, index)=>{
        const window = (0, _ssrWindow.getWindow)();
        if (!initialized || !swiper.params.history.enabled) return;
        let location;
        if (swiper.params.url) location = new URL(swiper.params.url);
        else location = window.location;
        const slide = swiper.slides.eq(index);
        let value = slugify(slide.attr('data-history'));
        if (swiper.params.history.root.length > 0) {
            let root = swiper.params.history.root;
            if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
            value = `${root}/${key}/${value}`;
        } else if (!location.pathname.includes(key)) value = `${key}/${value}`;
        if (swiper.params.history.keepQuery) value += location.search;
        const currentState = window.history.state;
        if (currentState && currentState.value === value) return;
        if (swiper.params.history.replaceState) window.history.replaceState({
            value
        }, null, value);
        else window.history.pushState({
            value
        }, null, value);
    };
    const scrollToSlide = (speed, value, runCallbacks)=>{
        if (value) for(let i = 0, length = swiper.slides.length; i < length; i += 1){
            const slide = swiper.slides.eq(i);
            const slideHistory = slugify(slide.attr('data-history'));
            if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                const index = slide.index();
                swiper.slideTo(index, speed, runCallbacks);
            }
        }
        else swiper.slideTo(0, speed, runCallbacks);
    };
    const setHistoryPopState = ()=>{
        paths = getPathValues(swiper.params.url);
        scrollToSlide(swiper.params.speed, paths.value, false);
    };
    const init = ()=>{
        const window = (0, _ssrWindow.getWindow)();
        if (!swiper.params.history) return;
        if (!window.history || !window.history.pushState) {
            swiper.params.history.enabled = false;
            swiper.params.hashNavigation.enabled = true;
            return;
        }
        initialized = true;
        paths = getPathValues(swiper.params.url);
        if (!paths.key && !paths.value) return;
        scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
        if (!swiper.params.history.replaceState) window.addEventListener('popstate', setHistoryPopState);
    };
    const destroy = ()=>{
        const window = (0, _ssrWindow.getWindow)();
        if (!swiper.params.history.replaceState) window.removeEventListener('popstate', setHistoryPopState);
    };
    on('init', ()=>{
        if (swiper.params.history.enabled) init();
    });
    on('destroy', ()=>{
        if (swiper.params.history.enabled) destroy();
    });
    on('transitionEnd _freeModeNoMomentumRelease', ()=>{
        if (initialized) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
    on('slideChange', ()=>{
        if (initialized && swiper.params.cssMode) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
}

},{"ssr-window":"d3jFK","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"h6maS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HashNavigation);
var _ssrWindow = require("ssr-window");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function HashNavigation({ swiper, extendParams, emit, on }) {
    let initialized = false;
    const document = (0, _ssrWindow.getDocument)();
    const window = (0, _ssrWindow.getWindow)();
    extendParams({
        hashNavigation: {
            enabled: false,
            replaceState: false,
            watchState: false
        }
    });
    const onHashChange = ()=>{
        emit('hashChange');
        const newHash = document.location.hash.replace('#', '');
        const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
        if (newHash !== activeSlideHash) {
            const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
            if (typeof newIndex === 'undefined') return;
            swiper.slideTo(newIndex);
        }
    };
    const setHash = ()=>{
        if (!initialized || !swiper.params.hashNavigation.enabled) return;
        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
            window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
            emit('hashSet');
        } else {
            const slide = swiper.slides.eq(swiper.activeIndex);
            const hash = slide.attr('data-hash') || slide.attr('data-history');
            document.location.hash = hash || '';
            emit('hashSet');
        }
    };
    const init = ()=>{
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        initialized = true;
        const hash = document.location.hash.replace('#', '');
        if (hash) {
            const speed = 0;
            for(let i = 0, length = swiper.slides.length; i < length; i += 1){
                const slide = swiper.slides.eq(i);
                const slideHash = slide.attr('data-hash') || slide.attr('data-history');
                if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                    const index = slide.index();
                    swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                }
            }
        }
        if (swiper.params.hashNavigation.watchState) (0, _domJsDefault.default)(window).on('hashchange', onHashChange);
    };
    const destroy = ()=>{
        if (swiper.params.hashNavigation.watchState) (0, _domJsDefault.default)(window).off('hashchange', onHashChange);
    };
    on('init', ()=>{
        if (swiper.params.hashNavigation.enabled) init();
    });
    on('destroy', ()=>{
        if (swiper.params.hashNavigation.enabled) destroy();
    });
    on('transitionEnd _freeModeNoMomentumRelease', ()=>{
        if (initialized) setHash();
    });
    on('slideChange', ()=>{
        if (initialized && swiper.params.cssMode) setHash();
    });
}

},{"ssr-window":"d3jFK","../../shared/dom.js":"fSctW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"75AFh":[function(require,module,exports,__globalThis) {
/* eslint no-underscore-dangle: "off" */ /* eslint no-use-before-define: "off" */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Autoplay);
var _ssrWindow = require("ssr-window");
var _utilsJs = require("../../shared/utils.js");
function Autoplay({ swiper, extendParams, on, emit }) {
    let timeout;
    swiper.autoplay = {
        running: false,
        paused: false
    };
    extendParams({
        autoplay: {
            enabled: false,
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: true,
            stopOnLastSlide: false,
            reverseDirection: false,
            pauseOnMouseEnter: false
        }
    });
    function run() {
        if (!swiper.size) {
            swiper.autoplay.running = false;
            swiper.autoplay.paused = false;
            return;
        }
        const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
        let delay = swiper.params.autoplay.delay;
        if ($activeSlideEl.attr('data-swiper-autoplay')) delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
        clearTimeout(timeout);
        timeout = (0, _utilsJs.nextTick)(()=>{
            let autoplayResult;
            if (swiper.params.autoplay.reverseDirection) {
                if (swiper.params.loop) {
                    swiper.loopFix();
                    autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                    emit('autoplay');
                } else if (!swiper.isBeginning) {
                    autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                    emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                    emit('autoplay');
                } else stop();
            } else if (swiper.params.loop) {
                swiper.loopFix();
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                emit('autoplay');
            } else if (!swiper.isEnd) {
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                emit('autoplay');
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
                autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                emit('autoplay');
            } else stop();
            if (swiper.params.cssMode && swiper.autoplay.running) run();
            else if (autoplayResult === false) run();
        }, delay);
    }
    function start() {
        if (typeof timeout !== 'undefined') return false;
        if (swiper.autoplay.running) return false;
        swiper.autoplay.running = true;
        emit('autoplayStart');
        run();
        return true;
    }
    function stop() {
        if (!swiper.autoplay.running) return false;
        if (typeof timeout === 'undefined') return false;
        if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
        }
        swiper.autoplay.running = false;
        emit('autoplayStop');
        return true;
    }
    function pause(speed) {
        if (!swiper.autoplay.running) return;
        if (swiper.autoplay.paused) return;
        if (timeout) clearTimeout(timeout);
        swiper.autoplay.paused = true;
        if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
            swiper.autoplay.paused = false;
            run();
        } else [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach((event)=>{
            swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
        });
    }
    function onVisibilityChange() {
        const document = (0, _ssrWindow.getDocument)();
        if (document.visibilityState === 'hidden' && swiper.autoplay.running) pause();
        if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
            run();
            swiper.autoplay.paused = false;
        }
    }
    function onTransitionEnd(e) {
        if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
        if (e.target !== swiper.$wrapperEl[0]) return;
        [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach((event)=>{
            swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
        swiper.autoplay.paused = false;
        if (!swiper.autoplay.running) stop();
        else run();
    }
    function onMouseEnter() {
        if (swiper.params.autoplay.disableOnInteraction) stop();
        else {
            emit('autoplayPause');
            pause();
        }
        [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach((event)=>{
            swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
    }
    function onMouseLeave() {
        if (swiper.params.autoplay.disableOnInteraction) return;
        swiper.autoplay.paused = false;
        emit('autoplayResume');
        run();
    }
    function attachMouseEvents() {
        if (swiper.params.autoplay.pauseOnMouseEnter) {
            swiper.$el.on('mouseenter', onMouseEnter);
            swiper.$el.on('mouseleave', onMouseLeave);
        }
    }
    function detachMouseEvents() {
        swiper.$el.off('mouseenter', onMouseEnter);
        swiper.$el.off('mouseleave', onMouseLeave);
    }
    on('init', ()=>{
        if (swiper.params.autoplay.enabled) {
            start();
            const document = (0, _ssrWindow.getDocument)();
            document.addEventListener('visibilitychange', onVisibilityChange);
            attachMouseEvents();
        }
    });
    on('beforeTransitionStart', (_s, speed, internal)=>{
        if (swiper.autoplay.running) {
            if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed);
            else stop();
        }
    });
    on('sliderFirstMove', ()=>{
        if (swiper.autoplay.running) {
            if (swiper.params.autoplay.disableOnInteraction) stop();
            else pause();
        }
    });
    on('touchEnd', ()=>{
        if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) run();
    });
    on('destroy', ()=>{
        detachMouseEvents();
        if (swiper.autoplay.running) stop();
        const document = (0, _ssrWindow.getDocument)();
        document.removeEventListener('visibilitychange', onVisibilityChange);
    });
    Object.assign(swiper.autoplay, {
        pause,
        run,
        start,
        stop
    });
}

},{"ssr-window":"d3jFK","../../shared/utils.js":"hr9mL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"k6hjz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Thumb);
var _utilsJs = require("../../shared/utils.js");
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function Thumb({ swiper, extendParams, on }) {
    extendParams({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: true,
            autoScrollOffset: 0,
            slideThumbActiveClass: 'swiper-slide-thumb-active',
            thumbsContainerClass: 'swiper-thumbs'
        }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
        swiper: null
    };
    function onThumbClick() {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && (0, _domJsDefault.default)(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
        let slideToIndex;
        if (thumbsSwiper.params.loop) slideToIndex = parseInt((0, _domJsDefault.default)(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        else slideToIndex = clickedIndex;
        if (swiper.params.loop) {
            let currentIndex = swiper.activeIndex;
            if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                swiper.loopFix(); // eslint-disable-next-line
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                currentIndex = swiper.activeIndex;
            }
            const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
            const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
            if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;
            else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;
            else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
            else slideToIndex = prevIndex;
        }
        swiper.slideTo(slideToIndex);
    }
    function init() {
        const { thumbs: thumbsParams } = swiper.params;
        if (initialized) return false;
        initialized = true;
        const SwiperClass = swiper.constructor;
        if (thumbsParams.swiper instanceof SwiperClass) {
            swiper.thumbs.swiper = thumbsParams.swiper;
            Object.assign(swiper.thumbs.swiper.originalParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            Object.assign(swiper.thumbs.swiper.params, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
        } else if ((0, _utilsJs.isObject)(thumbsParams.swiper)) {
            const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
            Object.assign(thumbsSwiperParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
            swiperCreated = true;
        }
        swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on('tap', onThumbClick);
        return true;
    }
    function update(initial) {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView; // Activate thumbs
        let thumbsToActivate = 1;
        const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
        if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.removeClass(thumbActiveClass);
        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for(let i = 0; i < thumbsToActivate; i += 1)thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
        else for(let i = 0; i < thumbsToActivate; i += 1)thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
        const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
            let currentThumbsIndex = thumbsSwiper.activeIndex;
            let newThumbsIndex;
            let direction;
            if (thumbsSwiper.params.loop) {
                if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                    thumbsSwiper.loopFix(); // eslint-disable-next-line
                    thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                    currentThumbsIndex = thumbsSwiper.activeIndex;
                } // Find actual thumbs index to slide to
                const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;
                else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;
                else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
                else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
                else newThumbsIndex = prevThumbsIndex;
                direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
            } else {
                newThumbsIndex = swiper.realIndex;
                direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
            }
            if (useOffset) newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
            if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                if (thumbsSwiper.params.centeredSlides) {
                    if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                    else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                } else newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup;
                thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
            }
        }
    }
    on('beforeInit', ()=>{
        const { thumbs } = swiper.params;
        if (!thumbs || !thumbs.swiper) return;
        init();
        update(true);
    });
    on('slideChange update resize observerUpdate', ()=>{
        update();
    });
    on('setTransition', (_s, duration)=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        thumbsSwiper.setTransition(duration);
    });
    on('beforeDestroy', ()=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        if (swiperCreated) thumbsSwiper.destroy();
    });
    Object.assign(swiper.thumbs, {
        init,
        update
    });
}

},{"../../shared/utils.js":"hr9mL","../../shared/dom.js":"fSctW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"ip0Dy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>freeMode);
var _utilsJs = require("../../shared/utils.js");
function freeMode({ swiper, extendParams, emit, once }) {
    extendParams({
        freeMode: {
            enabled: false,
            momentum: true,
            momentumRatio: 1,
            momentumBounce: true,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: false,
            minimumVelocity: 0.02
        }
    });
    function onTouchStart() {
        const translate = swiper.getTranslate();
        swiper.setTranslate(translate);
        swiper.setTransition(0);
        swiper.touchEventsData.velocities.length = 0;
        swiper.freeMode.onTouchEnd({
            currentPos: swiper.rtl ? swiper.translate : -swiper.translate
        });
    }
    function onTouchMove() {
        const { touchEventsData: data, touches } = swiper; // Velocity
        if (data.velocities.length === 0) data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
        });
        data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
            time: (0, _utilsJs.now)()
        });
    }
    function onTouchEnd({ currentPos }) {
        const { params, $wrapperEl, rtlTranslate: rtl, snapGrid, touchEventsData: data } = swiper; // Time diff
        const touchEndTime = (0, _utilsJs.now)();
        const timeDiff = touchEndTime - data.touchStartTime;
        if (currentPos < -swiper.minTranslate()) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (currentPos > -swiper.maxTranslate()) {
            if (swiper.slides.length < snapGrid.length) swiper.slideTo(snapGrid.length - 1);
            else swiper.slideTo(swiper.slides.length - 1);
            return;
        }
        if (params.freeMode.momentum) {
            if (data.velocities.length > 1) {
                const lastMoveEvent = data.velocities.pop();
                const velocityEvent = data.velocities.pop();
                const distance = lastMoveEvent.position - velocityEvent.position;
                const time = lastMoveEvent.time - velocityEvent.time;
                swiper.velocity = distance / time;
                swiper.velocity /= 2;
                if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) swiper.velocity = 0;
                 // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
                if (time > 150 || (0, _utilsJs.now)() - lastMoveEvent.time > 300) swiper.velocity = 0;
            } else swiper.velocity = 0;
            swiper.velocity *= params.freeMode.momentumVelocityRatio;
            data.velocities.length = 0;
            let momentumDuration = 1000 * params.freeMode.momentumRatio;
            const momentumDistance = swiper.velocity * momentumDuration;
            let newPosition = swiper.translate + momentumDistance;
            if (rtl) newPosition = -newPosition;
            let doBounce = false;
            let afterBouncePosition;
            const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
            let needsLoopFix;
            if (newPosition < swiper.maxTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition + swiper.maxTranslate() < -bounceAmount) newPosition = swiper.maxTranslate() - bounceAmount;
                    afterBouncePosition = swiper.maxTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.maxTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (newPosition > swiper.minTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition - swiper.minTranslate() > bounceAmount) newPosition = swiper.minTranslate() + bounceAmount;
                    afterBouncePosition = swiper.minTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.minTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (params.freeMode.sticky) {
                let nextSlide;
                for(let j = 0; j < snapGrid.length; j += 1)if (snapGrid[j] > -newPosition) {
                    nextSlide = j;
                    break;
                }
                if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') newPosition = snapGrid[nextSlide];
                else newPosition = snapGrid[nextSlide - 1];
                newPosition = -newPosition;
            }
            if (needsLoopFix) once('transitionEnd', ()=>{
                swiper.loopFix();
            });
             // Fix duration
            if (swiper.velocity !== 0) {
                if (rtl) momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                else momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                if (params.freeMode.sticky) {
                    // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                    // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                    // It's easy to see this when simulating touch with mouse events. To fix this,
                    // limit single-slide swipes to the default slide duration. This also has the
                    // nice side effect of matching slide speed if the user stopped moving before
                    // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                    // For faster swipes, also apply limits (albeit higher ones).
                    const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                    const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                    if (moveDistance < currentSlideSize) momentumDuration = params.speed;
                    else if (moveDistance < 2 * currentSlideSize) momentumDuration = params.speed * 1.5;
                    else momentumDuration = params.speed * 2.5;
                }
            } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
            }
            if (params.freeMode.momentumBounce && doBounce) {
                swiper.updateProgress(afterBouncePosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                swiper.animating = true;
                $wrapperEl.transitionEnd(()=>{
                    if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                    emit('momentumBounce');
                    swiper.setTransition(params.speed);
                    setTimeout(()=>{
                        swiper.setTranslate(afterBouncePosition);
                        $wrapperEl.transitionEnd(()=>{
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }, 0);
                });
            } else if (swiper.velocity) {
                emit('_freeModeNoMomentumRelease');
                swiper.updateProgress(newPosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                if (!swiper.animating) {
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(()=>{
                        if (!swiper || swiper.destroyed) return;
                        swiper.transitionEnd();
                    });
                }
            } else swiper.updateProgress(newPosition);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        } else if (params.freeMode.sticky) {
            swiper.slideToClosest();
            return;
        } else if (params.freeMode) emit('_freeModeNoMomentumRelease');
        if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
    }
    Object.assign(swiper, {
        freeMode: {
            onTouchStart,
            onTouchMove,
            onTouchEnd
        }
    });
}

},{"../../shared/utils.js":"hr9mL","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"dOf1v":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Grid);
function Grid({ swiper, extendParams }) {
    extendParams({
        grid: {
            rows: 1,
            fill: 'column'
        }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    const initSlides = (slidesLength)=>{
        const { slidesPerView } = swiper.params;
        const { rows, fill } = swiper.params.grid;
        slidesPerRow = slidesNumberEvenToRows / rows;
        numFullColumns = Math.floor(slidesLength / rows);
        if (Math.floor(slidesLength / rows) === slidesLength / rows) slidesNumberEvenToRows = slidesLength;
        else slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        if (slidesPerView !== 'auto' && fill === 'row') slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    };
    const updateSlide = (i, slide, slidesLength, getDirectionLabel)=>{
        const { slidesPerGroup, spaceBetween } = swiper.params;
        const { rows, fill } = swiper.params.grid; // Set slides order
        let newSlideOrderIndex;
        let column;
        let row;
        if (fill === 'row' && slidesPerGroup > 1) {
            const groupIndex = Math.floor(i / (slidesPerGroup * rows));
            const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
            const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
            slide.css({
                '-webkit-order': newSlideOrderIndex,
                order: newSlideOrderIndex
            });
        } else if (fill === 'column') {
            column = Math.floor(i / rows);
            row = i - column * rows;
            if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                row += 1;
                if (row >= rows) {
                    row = 0;
                    column += 1;
                }
            }
        } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
        }
        slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');
    };
    const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel)=>{
        const { spaceBetween, centeredSlides, roundLengths } = swiper.params;
        const { rows } = swiper.params.grid;
        swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
        swiper.$wrapperEl.css({
            [getDirectionLabel('width')]: `${swiper.virtualSize + spaceBetween}px`
        });
        if (centeredSlides) {
            snapGrid.splice(0, snapGrid.length);
            const newSlidesGrid = [];
            for(let i = 0; i < snapGrid.length; i += 1){
                let slidesGridItem = snapGrid[i];
                if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
            }
            snapGrid.push(...newSlidesGrid);
        }
    };
    swiper.grid = {
        initSlides,
        updateSlide,
        updateWrapperSize
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"7BHUV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Manipulation);
var _appendSlideJs = require("./methods/appendSlide.js");
var _appendSlideJsDefault = parcelHelpers.interopDefault(_appendSlideJs);
var _prependSlideJs = require("./methods/prependSlide.js");
var _prependSlideJsDefault = parcelHelpers.interopDefault(_prependSlideJs);
var _addSlideJs = require("./methods/addSlide.js");
var _addSlideJsDefault = parcelHelpers.interopDefault(_addSlideJs);
var _removeSlideJs = require("./methods/removeSlide.js");
var _removeSlideJsDefault = parcelHelpers.interopDefault(_removeSlideJs);
var _removeAllSlidesJs = require("./methods/removeAllSlides.js");
var _removeAllSlidesJsDefault = parcelHelpers.interopDefault(_removeAllSlidesJs);
function Manipulation({ swiper }) {
    Object.assign(swiper, {
        appendSlide: (0, _appendSlideJsDefault.default).bind(swiper),
        prependSlide: (0, _prependSlideJsDefault.default).bind(swiper),
        addSlide: (0, _addSlideJsDefault.default).bind(swiper),
        removeSlide: (0, _removeSlideJsDefault.default).bind(swiper),
        removeAllSlides: (0, _removeAllSlidesJsDefault.default).bind(swiper)
    });
}

},{"./methods/appendSlide.js":"37wdO","./methods/prependSlide.js":"4LeEL","./methods/addSlide.js":"1uGI5","./methods/removeSlide.js":"5YE9K","./methods/removeAllSlides.js":"76vYk","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"37wdO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>appendSlide);
function appendSlide(slides) {
    const swiper = this;
    const { $wrapperEl, params } = swiper;
    if (params.loop) swiper.loopDestroy();
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
    } else $wrapperEl.append(slides);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"4LeEL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>prependSlide);
function prependSlide(slides) {
    const swiper = this;
    const { params, $wrapperEl, activeIndex } = swiper;
    if (params.loop) swiper.loopDestroy();
    let newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.prepend(slides[i]);
        newActiveIndex = activeIndex + slides.length;
    } else $wrapperEl.prepend(slides);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    swiper.slideTo(newActiveIndex, 0, false);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"1uGI5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>addSlide);
function addSlide(index, slides) {
    const swiper = this;
    const { $wrapperEl, params, activeIndex } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
        swiper.prependSlide(slides);
        return;
    }
    if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for(let i = baseLength - 1; i >= index; i -= 1){
        const currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else $wrapperEl.append(slides);
    for(let i = 0; i < slidesBuffer.length; i += 1)$wrapperEl.append(slidesBuffer[i]);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"5YE9K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>removeSlide);
function removeSlide(slidesIndexes) {
    const swiper = this;
    const { params, $wrapperEl, activeIndex } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for(let i = 0; i < slidesIndexes.length; i += 1){
            indexToRemove = slidesIndexes[i];
            if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
    }
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"76vYk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>removeAllSlides);
function removeAllSlides() {
    const swiper = this;
    const slidesIndexes = [];
    for(let i = 0; i < swiper.slides.length; i += 1)slidesIndexes.push(i);
    swiper.removeSlide(slidesIndexes);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"7shH7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectFade);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectFade({ swiper, extendParams, on }) {
    extendParams({
        fadeEffect: {
            crossFade: false,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { slides } = swiper;
        const params = swiper.params.fadeEffect;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = swiper.slides.eq(i);
            const offset = $slideEl[0].swiperSlideOffset;
            let tx = -offset;
            if (!swiper.params.virtualTranslate) tx -= swiper.translate;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
            }
            const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
            const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
            $targetEl.css({
                opacity: slideOpacity
            }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl } = swiper.params.fadeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration);
        (0, _effectVirtualTransitionEndJsDefault.default)({
            swiper,
            duration,
            transformEl,
            allSlides: true
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: 'fade',
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

},{"../../shared/effect-init.js":"2Lp1D","../../shared/effect-target.js":"drZTC","../../shared/effect-virtual-transition-end.js":"1OpVh","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"2Lp1D":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>effectInit);
function effectInit(params) {
    const { effect, swiper, on, setTranslate, setTransition, overwriteParams, perspective, recreateShadows, getEffectParams } = params;
    on('beforeInit', ()=>{
        if (swiper.params.effect !== effect) return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
        if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
        Object.assign(swiper.params, overwriteParamsResult);
        Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on('setTranslate', ()=>{
        if (swiper.params.effect !== effect) return;
        setTranslate();
    });
    on('setTransition', (_s, duration)=>{
        if (swiper.params.effect !== effect) return;
        setTransition(duration);
    });
    on('transitionEnd', ()=>{
        if (swiper.params.effect !== effect) return;
        if (recreateShadows) {
            if (!getEffectParams || !getEffectParams().slideShadows) return; // remove shadows
            swiper.slides.each((slideEl)=>{
                const $slideEl = swiper.$(slideEl);
                $slideEl.find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').remove();
            }); // create new one
            recreateShadows();
        }
    });
    let requireUpdateOnVirtual;
    on('virtualUpdate', ()=>{
        if (swiper.params.effect !== effect) return;
        if (!swiper.slides.length) requireUpdateOnVirtual = true;
        requestAnimationFrame(()=>{
            if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                setTranslate();
                requireUpdateOnVirtual = false;
            }
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"drZTC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>effectTarget);
function effectTarget(effectParams, $slideEl) {
    if (effectParams.transformEl) return $slideEl.find(effectParams.transformEl).css({
        'backface-visibility': 'hidden',
        '-webkit-backface-visibility': 'hidden'
    });
    return $slideEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"1OpVh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>effectVirtualTransitionEnd);
function effectVirtualTransitionEnd({ swiper, duration, transformEl, allSlides }) {
    const { slides, activeIndex, $wrapperEl } = swiper;
    if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let $transitionEndTarget;
        if (allSlides) $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
        else $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
        $transitionEndTarget.transitionEnd(()=>{
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = [
                'webkitTransitionEnd',
                'transitionend'
            ];
            for(let i = 0; i < triggerEvents.length; i += 1)$wrapperEl.trigger(triggerEvents[i]);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"itohZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCube);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
function EffectCube({ swiper, extendParams, on }) {
    extendParams({
        cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });
    const createSlideShadows = ($slideEl, progress, isHorizontal)=>{
        let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
            shadowBefore = (0, _domJsDefault.default)(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
            $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
            shadowAfter = (0, _domJsDefault.default)(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
            $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = ()=>{
        // create new ones
        const isHorizontal = swiper.isHorizontal();
        swiper.slides.each((slideEl)=>{
            const progress = Math.max(Math.min(slideEl.progress, 1), -1);
            createSlideShadows((0, _domJsDefault.default)(slideEl), progress, isHorizontal);
        });
    };
    const setTranslate = ()=>{
        const { $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize, browser } = swiper;
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let $cubeShadowEl;
        if (params.shadow) {
            if (isHorizontal) {
                $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = (0, _domJsDefault.default)('<div class="swiper-cube-shadow"></div>');
                    $wrapperEl.append($cubeShadowEl);
                }
                $cubeShadowEl.css({
                    height: `${swiperWidth}px`
                });
            } else {
                $cubeShadowEl = $el.find('.swiper-cube-shadow');
                if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = (0, _domJsDefault.default)('<div class="swiper-cube-shadow"></div>');
                    $el.append($cubeShadowEl);
                }
            }
        }
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            let slideIndex = i;
            if (isVirtual) slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
            let slideAngle = slideIndex * 90;
            let round = Math.floor(slideAngle / 360);
            if (rtl) {
                slideAngle = -slideAngle;
                round = Math.floor(-slideAngle / 360);
            }
            const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            let tx = 0;
            let ty = 0;
            let tz = 0;
            if (slideIndex % 4 === 0) {
                tx = -round * 4 * swiperSize;
                tz = 0;
            } else if ((slideIndex - 1) % 4 === 0) {
                tx = 0;
                tz = -round * 4 * swiperSize;
            } else if ((slideIndex - 2) % 4 === 0) {
                tx = swiperSize + round * 4 * swiperSize;
                tz = swiperSize;
            } else if ((slideIndex - 3) % 4 === 0) {
                tx = -swiperSize;
                tz = 3 * swiperSize + swiperSize * 4 * round;
            }
            if (rtl) tx = -tx;
            if (!isHorizontal) {
                ty = tx;
                tx = 0;
            }
            const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
            if (progress <= 1 && progress > -1) {
                wrapperRotate = slideIndex * 90 + progress * 90;
                if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
            }
            $slideEl.transform(transform);
            if (params.slideShadows) createSlideShadows($slideEl, progress, isHorizontal);
        }
        $wrapperEl.css({
            '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
            'transform-origin': `50% 50% -${swiperSize / 2}px`
        });
        if (params.shadow) {
            if (isHorizontal) $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
            else {
                const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                const scale1 = params.shadowScale;
                const scale2 = params.shadowScale / multiplier;
                const offset = params.shadowOffset;
                $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
            }
        }
        const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
        $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
        $wrapperEl[0].style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
    };
    const setTransition = (duration)=>{
        const { $el, slides } = swiper;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) $el.find('.swiper-cube-shadow').transition(duration);
    };
    (0, _effectInitJsDefault.default)({
        effect: 'cube',
        swiper,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: ()=>swiper.params.cubeEffect,
        perspective: ()=>true,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
            })
    });
}

},{"../../shared/dom.js":"fSctW","../../shared/effect-init.js":"2Lp1D","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"dlwe1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectFlip);
var _domJs = require("../../shared/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectFlip({ swiper, extendParams, on }) {
    extendParams({
        flipEffect: {
            slideShadows: true,
            limitRotation: true,
            transformEl: null
        }
    });
    const createSlideShadows = ($slideEl, progress, params)=>{
        let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) shadowBefore = (0, _createShadowJsDefault.default)(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
        if (shadowAfter.length === 0) shadowAfter = (0, _createShadowJsDefault.default)(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = ()=>{
        // Set shadows
        const params = swiper.params.flipEffect;
        swiper.slides.each((slideEl)=>{
            const $slideEl = (0, _domJsDefault.default)(slideEl);
            let progress = $slideEl[0].progress;
            if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min(slideEl.progress, 1), -1);
            createSlideShadows($slideEl, progress, params);
        });
    };
    const setTranslate = ()=>{
        const { slides, rtlTranslate: rtl } = swiper;
        const params = swiper.params.flipEffect;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            let progress = $slideEl[0].progress;
            if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            const offset = $slideEl[0].swiperSlideOffset;
            const rotate = -180 * progress;
            let rotateY = rotate;
            let rotateX = 0;
            let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
                rotateX = -rotateY;
                rotateY = 0;
            } else if (rtl) rotateY = -rotateY;
            $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
            if (params.slideShadows) createSlideShadows($slideEl, progress, params);
            const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
            $targetEl.transform(transform);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl } = swiper.params.flipEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        (0, _effectVirtualTransitionEndJsDefault.default)({
            swiper,
            duration,
            transformEl
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: 'flip',
        swiper,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: ()=>swiper.params.flipEffect,
        perspective: ()=>true,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

},{"../../shared/dom.js":"fSctW","../../shared/create-shadow.js":"4B12q","../../shared/effect-init.js":"2Lp1D","../../shared/effect-target.js":"drZTC","../../shared/effect-virtual-transition-end.js":"1OpVh","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"4B12q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createShadow);
var _domJs = require("./dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
function createShadow(params, $slideEl, side) {
    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
    const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
    let $shadowEl = $shadowContainer.children(`.${shadowClass}`);
    if (!$shadowEl.length) {
        $shadowEl = (0, _domJsDefault.default)(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
        $shadowContainer.append($shadowEl);
    }
    return $shadowEl;
}

},{"./dom.js":"fSctW","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"lrjJG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCoverflow);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
function EffectCoverflow({ swiper, extendParams, on }) {
    extendParams({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: true,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { width: swiperWidth, height: swiperHeight, slides, slidesSizesGrid } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform = swiper.translate;
        const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth; // Each slide offset from center
        for(let i = 0, length = slides.length; i < length; i += 1){
            const $slideEl = slides.eq(i);
            const slideSize = slidesSizesGrid[i];
            const slideOffset = $slideEl[0].swiperSlideOffset;
            const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
            const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
            let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
            let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0
            let translateZ = -translate * Math.abs(offsetMultiplier);
            let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders
            if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) stretch = parseFloat(params.stretch) / 100 * slideSize;
            let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
            let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
            let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values
            if (Math.abs(translateX) < 0.001) translateX = 0;
            if (Math.abs(translateY) < 0.001) translateY = 0;
            if (Math.abs(translateZ) < 0.001) translateZ = 0;
            if (Math.abs(rotateY) < 0.001) rotateY = 0;
            if (Math.abs(rotateX) < 0.001) rotateX = 0;
            if (Math.abs(scale) < 0.001) scale = 0;
            const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
            const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
            $targetEl.transform(slideTransform);
            $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
            if (params.slideShadows) {
                // Set shadows
                let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                if ($shadowBeforeEl.length === 0) $shadowBeforeEl = (0, _createShadowJsDefault.default)(params, $slideEl, isHorizontal ? 'left' : 'top');
                if ($shadowAfterEl.length === 0) $shadowAfterEl = (0, _createShadowJsDefault.default)(params, $slideEl, isHorizontal ? 'right' : 'bottom');
                if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
            }
        }
    };
    const setTransition = (duration)=>{
        const { transformEl } = swiper.params.coverflowEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    };
    (0, _effectInitJsDefault.default)({
        effect: 'coverflow',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                watchSlidesProgress: true
            })
    });
}

},{"../../shared/create-shadow.js":"4B12q","../../shared/effect-init.js":"2Lp1D","../../shared/effect-target.js":"drZTC","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"67vWL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCreative);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectCreative({ swiper, extendParams, on }) {
    extendParams({
        creativeEffect: {
            transformEl: null,
            limitProgress: 1,
            shadowPerProgress: false,
            progressMultiplier: 1,
            perspective: true,
            prev: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            }
        }
    });
    const getTranslateValue = (value)=>{
        if (typeof value === 'string') return value;
        return `${value}px`;
    };
    const setTranslate = ()=>{
        const { slides, $wrapperEl, slidesSizesGrid } = swiper;
        const params = swiper.params.creativeEffect;
        const { progressMultiplier: multiplier } = params;
        const isCenteredSlides = swiper.params.centeredSlides;
        if (isCenteredSlides) {
            const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
            $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
        }
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            const slideProgress = $slideEl[0].progress;
            const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
            let originalProgress = progress;
            if (!isCenteredSlides) originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
            const offset = $slideEl[0].swiperSlideOffset;
            const t = [
                swiper.params.cssMode ? -offset - swiper.translate : -offset,
                0,
                0
            ];
            const r = [
                0,
                0,
                0
            ];
            let custom = false;
            if (!swiper.isHorizontal()) {
                t[1] = t[0];
                t[0] = 0;
            }
            let data = {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                scale: 1,
                opacity: 1
            };
            if (progress < 0) {
                data = params.next;
                custom = true;
            } else if (progress > 0) {
                data = params.prev;
                custom = true;
            } // set translate
            t.forEach((value, index)=>{
                t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
            }); // set rotates
            r.forEach((value, index)=>{
                r[index] = data.rotate[index] * Math.abs(progress * multiplier);
            });
            $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const translateString = t.join(', ');
            const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
            const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
            const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
            const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows
            if (custom && data.shadow || !custom) {
                let $shadowEl = $slideEl.children('.swiper-slide-shadow');
                if ($shadowEl.length === 0 && data.shadow) $shadowEl = (0, _createShadowJsDefault.default)(params, $slideEl);
                if ($shadowEl.length) {
                    const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                    $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                }
            }
            const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
            $targetEl.transform(transform).css({
                opacity: opacityString
            });
            if (data.origin) $targetEl.css('transform-origin', data.origin);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl } = swiper.params.creativeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        (0, _effectVirtualTransitionEndJsDefault.default)({
            swiper,
            duration,
            transformEl,
            allSlides: true
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: 'creative',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>swiper.params.creativeEffect.perspective,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

},{"../../shared/create-shadow.js":"4B12q","../../shared/effect-init.js":"2Lp1D","../../shared/effect-target.js":"drZTC","../../shared/effect-virtual-transition-end.js":"1OpVh","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"cs8o6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>EffectCards);
var _createShadowJs = require("../../shared/create-shadow.js");
var _createShadowJsDefault = parcelHelpers.interopDefault(_createShadowJs);
var _effectInitJs = require("../../shared/effect-init.js");
var _effectInitJsDefault = parcelHelpers.interopDefault(_effectInitJs);
var _effectTargetJs = require("../../shared/effect-target.js");
var _effectTargetJsDefault = parcelHelpers.interopDefault(_effectTargetJs);
var _effectVirtualTransitionEndJs = require("../../shared/effect-virtual-transition-end.js");
var _effectVirtualTransitionEndJsDefault = parcelHelpers.interopDefault(_effectVirtualTransitionEndJs);
function EffectCards({ swiper, extendParams, on }) {
    extendParams({
        cardsEffect: {
            slideShadows: true,
            transformEl: null,
            rotate: true,
            perSlideRotate: 2,
            perSlideOffset: 8
        }
    });
    const setTranslate = ()=>{
        const { slides, activeIndex } = swiper;
        const params = swiper.params.cardsEffect;
        const { startTranslate, isTouched } = swiper.touchEventsData;
        const currentTranslate = swiper.translate;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            const slideProgress = $slideEl[0].progress;
            const progress = Math.min(Math.max(slideProgress, -4), 4);
            let offset = $slideEl[0].swiperSlideOffset;
            if (swiper.params.centeredSlides && !swiper.params.cssMode) swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
            if (swiper.params.centeredSlides && swiper.params.cssMode) offset -= slides[0].swiperSlideOffset;
            let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let tY = 0;
            const tZ = -100 * Math.abs(progress);
            let scale = 1;
            let rotate = -params.perSlideRotate * progress;
            let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
            const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
            const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
            const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
            if (isSwipeToNext || isSwipeToPrev) {
                const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                rotate += -28 * progress * subProgress;
                scale += -0.5 * subProgress;
                tXAdd += 96 * subProgress;
                tY = `${-25 * subProgress * Math.abs(progress)}%`;
            }
            if (progress < 0) // next
            tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
            else if (progress > 0) // prev
            tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
            else tX = `${tX}px`;
            if (!swiper.isHorizontal()) {
                const prevY = tY;
                tY = tX;
                tX = prevY;
            }
            const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
            const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rotate : 0}deg)
        scale(${scaleString})
      `;
            if (params.slideShadows) {
                // Set shadows
                let $shadowEl = $slideEl.find('.swiper-slide-shadow');
                if ($shadowEl.length === 0) $shadowEl = (0, _createShadowJsDefault.default)(params, $slideEl);
                if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
            }
            $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const $targetEl = (0, _effectTargetJsDefault.default)(params, $slideEl);
            $targetEl.transform(transform);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl } = swiper.params.cardsEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        (0, _effectVirtualTransitionEndJsDefault.default)({
            swiper,
            duration,
            transformEl
        });
    };
    (0, _effectInitJsDefault.default)({
        effect: 'cards',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: ()=>true,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

},{"../../shared/create-shadow.js":"4B12q","../../shared/effect-init.js":"2Lp1D","../../shared/effect-target.js":"drZTC","../../shared/effect-virtual-transition-end.js":"1OpVh","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"ii0ro":[function(require,module,exports,__globalThis) {
/* eslint-disable no-param-reassign, no-undef */ /**
 * @Author: Roni Laukkarinen
 * @Date:   2022-05-07 12:20:13
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-05-07 12:22:07
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _moveto = require("moveto");
var _movetoDefault = parcelHelpers.interopDefault(_moveto);
const initAnchors = ()=>{
    const easeFunctions = {
        easeInQuad (t, b, c, d) {
            t /= d;
            return c * t * t + b;
        },
        easeOutQuad (t, b, c, d) {
            t /= d;
            return -c * t * (t - 2) + b;
        }
    };
    const moveTo = new (0, _movetoDefault.default)({
        ease: 'easeInQuad'
    }, easeFunctions);
    const triggers = document.getElementsByClassName('js-trigger');
    // eslint-disable-next-line no-plusplus
    for(let i = 0; i < triggers.length; i++)moveTo.registerTrigger(triggers[i]);
};
exports.default = initAnchors;

},{"moveto":"cphqU","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"cphqU":[function(require,module,exports,__globalThis) {
/*!
 * MoveTo - A lightweight scroll animation javascript library without any dependency.
 * Version 1.8.2 (28-06-2019 14:30)
 * Licensed under MIT
 * Copyright 2019 Hasan Aydoğdu <hsnaydd@gmail.com>
 */ "use strict";
var MoveTo = function() {
    /**
   * Defaults
   * @type {object}
   */ var defaults = {
        tolerance: 0,
        duration: 800,
        easing: 'easeOutQuart',
        container: window,
        callback: function callback() {}
    };
    /**
   * easeOutQuart Easing Function
   * @param  {number} t - current time
   * @param  {number} b - start value
   * @param  {number} c - change in value
   * @param  {number} d - duration
   * @return {number} - calculated value
   */ function easeOutQuart(t, b, c, d) {
        t /= d;
        t--;
        return -c * (t * t * t * t - 1) + b;
    }
    /**
   * Merge two object
   *
   * @param  {object} obj1
   * @param  {object} obj2
   * @return {object} merged object
   */ function mergeObject(obj1, obj2) {
        var obj3 = {};
        Object.keys(obj1).forEach(function(propertyName) {
            obj3[propertyName] = obj1[propertyName];
        });
        Object.keys(obj2).forEach(function(propertyName) {
            obj3[propertyName] = obj2[propertyName];
        });
        return obj3;
    }
    /**
   * Converts camel case to kebab case
   * @param  {string} val the value to be converted
   * @return {string} the converted value
   */ function kebabCase(val) {
        return val.replace(/([A-Z])/g, function($1) {
            return '-' + $1.toLowerCase();
        });
    }
    /**
   * Count a number of item scrolled top
   * @param  {Window|HTMLElement} container
   * @return {number}
   */ function countScrollTop(container) {
        if (container instanceof HTMLElement) return container.scrollTop;
        return container.pageYOffset;
    }
    /**
   * MoveTo Constructor
   * @param {object} options Options
   * @param {object} easeFunctions Custom ease functions
   */ function MoveTo() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var easeFunctions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.options = mergeObject(defaults, options);
        this.easeFunctions = mergeObject({
            easeOutQuart: easeOutQuart
        }, easeFunctions);
    }
    /**
   * Register a dom element as trigger
   * @param  {HTMLElement} dom Dom trigger element
   * @param  {function} callback Callback function
   * @return {function|void} unregister function
   */ MoveTo.prototype.registerTrigger = function(dom, callback) {
        var _this = this;
        if (!dom) return;
        var href = dom.getAttribute('href') || dom.getAttribute('data-target'); // The element to be scrolled
        var target = href && href !== '#' ? document.getElementById(href.substring(1)) : document.body;
        var options = mergeObject(this.options, _getOptionsFromTriggerDom(dom, this.options));
        if (typeof callback === 'function') options.callback = callback;
        var listener = function listener(e) {
            e.preventDefault();
            _this.move(target, options);
        };
        dom.addEventListener('click', listener, false);
        return function() {
            return dom.removeEventListener('click', listener, false);
        };
    };
    /**
   * Move
   * Scrolls to given element by using easeOutQuart function
   * @param  {HTMLElement|number} target Target element to be scrolled or target position
   * @param  {object} options Custom options
   */ MoveTo.prototype.move = function(target) {
        var _this2 = this;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (target !== 0 && !target) return;
        options = mergeObject(this.options, options);
        var distance = typeof target === 'number' ? target : target.getBoundingClientRect().top;
        var from = countScrollTop(options.container);
        var startTime = null;
        var lastYOffset;
        distance -= options.tolerance; // rAF loop
        var loop = function loop(currentTime) {
            var currentYOffset = countScrollTop(_this2.options.container);
            if (!startTime) // To starts time from 1, we subtracted 1 from current time
            // If time starts from 1 The first loop will not do anything,
            // because easing value will be zero
            startTime = currentTime - 1;
            var timeElapsed = currentTime - startTime;
            if (lastYOffset) {
                if (distance > 0 && lastYOffset > currentYOffset || distance < 0 && lastYOffset < currentYOffset) return options.callback(target);
            }
            lastYOffset = currentYOffset;
            var val = _this2.easeFunctions[options.easing](timeElapsed, from, distance, options.duration);
            options.container.scroll(0, val);
            if (timeElapsed < options.duration) window.requestAnimationFrame(loop);
            else {
                options.container.scroll(0, distance + from);
                options.callback(target);
            }
        };
        window.requestAnimationFrame(loop);
    };
    /**
   * Adds custom ease function
   * @param {string}   name Ease function name
   * @param {function} fn   Ease function
   */ MoveTo.prototype.addEaseFunction = function(name, fn) {
        this.easeFunctions[name] = fn;
    };
    /**
   * Returns options which created from trigger dom element
   * @param  {HTMLElement} dom Trigger dom element
   * @param  {object} options The instance's options
   * @return {object} The options which created from trigger dom element
   */ function _getOptionsFromTriggerDom(dom, options) {
        var domOptions = {};
        Object.keys(options).forEach(function(key) {
            var value = dom.getAttribute("data-mt-".concat(kebabCase(key)));
            if (value) domOptions[key] = isNaN(value) ? value : parseInt(value, 10);
        });
        return domOptions;
    }
    return MoveTo;
}();
module.exports = MoveTo;

},{}],"3c6Rk":[function(require,module,exports,__globalThis) {
/* eslint-disable max-len */ /**
 * @Author: Roni Laukkarinen
 * @Date:   2022-05-07 12:20:13
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-06 22:50:33
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _moveto = require("moveto");
var _movetoDefault = parcelHelpers.interopDefault(_moveto);
const initBackToTop = ()=>{
    // Back to top button
    const moveToTop = new (0, _movetoDefault.default)({
        duration: 300,
        easing: 'easeOutQuart'
    });
    const topButton = document.getElementById('top');
    const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    function trackScroll() {
        const scrolled = window.pageYOffset;
        const scrollAmount = document.documentElement.clientHeight;
        if (scrolled > scrollAmount) topButton.classList.add('is-visible');
        if (scrolled < scrollAmount) topButton.classList.remove('is-visible');
    }
    if (topButton) {
        topButton.addEventListener('click', (event)=>{
            // Don't add hash in the end of the url
            event.preventDefault();
            // Focus to the first focusable element on the page
            moveToTop.move(focusableElements[0]);
        });
        // Focus too, if on keyboard
        topButton.addEventListener('keydown', ()=>{
            focusableElements[0].focus();
        });
    }
    window.addEventListener('scroll', trackScroll);
};
exports.default = initBackToTop;

},{"moveto":"cphqU","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"gdxwz":[function(require,module,exports,__globalThis) {
/* eslint-disable max-len */ /**
 * @Author: Roni Laukkarinen
 * @Date:   2022-05-07 12:20:13
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-06 22:40:54
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _moveto = require("moveto");
var _movetoDefault = parcelHelpers.interopDefault(_moveto);
const initMoveToTop = ()=>{
    // Always move scroll position to up when clicking a link
    const swupMoveToTop = new (0, _movetoDefault.default)({
        tolerance: 0,
        duration: 0,
        easing: 'easeOutQuart',
        container: window
    });
    const target = document.getElementById('page');
    swupMoveToTop.move(target);
};
exports.default = initMoveToTop;

},{"moveto":"cphqU","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"l5cLh":[function(require,module,exports,__globalThis) {
/**
 * @Author: Tuomas Marttila
 * @Date:   2021-11-11 10:22:26
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-06-24 12:49:18
 */ /* eslint-disable */ /*
 * This content is licensed according to the W3C Software License at
 * https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 * Simple accordion pattern example
 *
 * @source https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const initAccordions = ()=>{
    Array.prototype.slice.call(document.querySelectorAll('.accordion')).forEach((accordion)=>{
        // Allow for multiple accordion sections to be expanded at the same time
        const allowMultiple = accordion.hasAttribute('data-allow-multiple');
        // Allow for each toggle to both open and close individually
        const allowToggle = allowMultiple || accordion.hasAttribute('data-allow-toggle');
        // Create the array of toggle elements for the accordion group
        const triggers = Array.prototype.slice.call(accordion.querySelectorAll('.accordion-trigger'));
        const panels = Array.prototype.slice.call(accordion.querySelectorAll('.accordion-panel'));
        accordion.addEventListener('click', (event)=>{
            const trigger = event.target.closest('.accordion-trigger');
            if (trigger) {
                // Check if the current toggle is expanded.
                const isExpanded = trigger.getAttribute('aria-expanded') == 'true';
                const active = accordion.querySelector('[aria-expanded="true"]');
                // without allowMultiple, close the open accordion
                if (!allowMultiple && active && active !== trigger) {
                    // Set the expanded state on the triggering element
                    active.setAttribute('aria-expanded', 'false');
                    // Hide the accordion sections, using aria-controls to specify the desired section
                    document.getElementById(active.getAttribute('aria-controls')).setAttribute('hidden', '');
                    // When toggling is not allowed, clean up disabled state
                    if (!allowToggle) active.removeAttribute('aria-disabled');
                }
                if (!isExpanded) {
                    // Set the expanded state on the triggering element
                    trigger.setAttribute('aria-expanded', 'true');
                    // Hide the accordion sections, using aria-controls to specify the desired section
                    document.getElementById(trigger.getAttribute('aria-controls')).removeAttribute('hidden');
                    // If toggling is not allowed, set disabled state on trigger
                    if (!allowToggle) trigger.setAttribute('aria-disabled', 'true');
                } else if (allowToggle && isExpanded) {
                    // Set the expanded state on the triggering element
                    trigger.setAttribute('aria-expanded', 'false');
                    // Hide the accordion sections, using aria-controls to specify the desired section
                    document.getElementById(trigger.getAttribute('aria-controls')).setAttribute('hidden', '');
                }
                event.preventDefault();
            }
        });
        // Bind keyboard behaviors on the main accordion container
        accordion.addEventListener('keydown', (event)=>{
            const trigger = event.target.closest('.accordion-trigger');
            const key = event.which.toString();
            // 33 = Page Up, 34 = Page Down
            const ctrlModifier = event.ctrlKey && key.match(/33|34/);
            // Is this coming from an accordion header?
            if (trigger) {
                // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
                // 38 = Up, 40 = Down
                if (key.match(/38|40/) || ctrlModifier) {
                    const index = triggers.indexOf(trigger);
                    const direction = key.match(/34|40/) ? 1 : -1;
                    const { length } = triggers;
                    const newIndex = (index + length + direction) % length;
                    triggers[newIndex].focus();
                    event.preventDefault();
                } else if (key.match(/35|36/)) {
                    // 35 = End, 36 = Home keyboard operations
                    switch(key){
                        // Go to first accordion
                        case '36':
                            triggers[0].focus();
                            break;
                        // Go to last accordion
                        case '35':
                            triggers[triggers.length - 1].focus();
                            break;
                    }
                    event.preventDefault();
                }
            }
        });
        // These are used to style the accordion when one of the buttons has focus
        accordion.querySelectorAll('.accordion-trigger').forEach((trigger)=>{
            trigger.addEventListener('focus', (event)=>{
                accordion.classList.add('focus');
            });
            trigger.addEventListener('blur', (event)=>{
                accordion.classList.remove('focus');
            });
        });
        // Minor setup: will set disabled state, via aria-disabled, to an
        // expanded/ active accordion which is not allowed to be toggled close
        if (!allowToggle) {
            // Get the first expanded/ active accordion
            const expanded = accordion.querySelector('[aria-expanded="true"]');
            // If an expanded/ active accordion is found, disable
            if (expanded) expanded.setAttribute('aria-disabled', 'true');
        }
    });
};
exports.default = initAccordions;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"ar197":[function(require,module,exports,__globalThis) {
/**
 * @Author: Roni Laukkarinen
 * @Date:   2021-04-23 13:10:51
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-05 18:34:43
 */ // TODO: Refactor file
/* eslint-disable camelcase, default-case, eqeqeq, no-restricted-globals, no-undef, no-var, vars-on-top, max-len, prefer-destructuring, no-redeclare, no-plusplus, no-use-before-define, no-unused-vars, block-scoped-var, func-names */ /*
An accessible menu for WordPress

https://github.com/theme-smith/accessible-nav-wp
Kirsten Smith (kirsten@themesmith.co.uk)
Licensed GPL v.2 (http://www.gnu.org/licenses/gpl-2.0.html)

This work derived from:
https://github.com/WordPress/twentysixteen (GPL v.2)
https://github.com/wpaccessibility/a11ythemepatterns/tree/master/menu-keyboard-arrow-nav (GPL v.2)
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const initNavigation = ()=>{
    // Navigation.js start
    (function($) {
        // Responsive nav width
        var responsivenav = 1260;
        var html;
        var body;
        var container;
        var button;
        var menu;
        var menuWrapper;
        var links;
        var subMenus;
        var i;
        var len;
        var focusableElements;
        var firstFocusableElement;
        var lastFocusableElement;
        // Define menu items
        var menuContainer = $('.nav-container');
        var menuToggle = menuContainer.find('#nav-toggle');
        var siteHeaderMenu = menuContainer.find('#main-navigation-wrapper');
        var siteNavigation = menuContainer.find('#nav');
        // Close focused dropdowns when pressing esc
        $('.menu-item a, .dropdown button').on('keyup', function(e) {
            // Checking are menu items open or not
            const isSubMenuDropdownOpen = $(this).parent().parent().parent().find('.sub-menu').prev('.dropdown-toggle').attr('aria-expanded');
            const isMainMenuDropdownOpen = $(this).closest('.menu-item').find('.dropdown-toggle').attr('aria-expanded');
            const areWeInDropdown = $(this).parent().parent().hasClass('sub-menu');
            if (isSubMenuDropdownOpen === 'true' || isMainMenuDropdownOpen === 'true') {
                if ($('.dropdown').find(':focus').length !== 0) // Close menu using Esc key but only if dropdown is open
                {
                    if (e.code === 'Escape') {
                        // Close the dropdown menu
                        var thisDropdown = $(this).parent().parent().parent();
                        var screenReaderSpan = thisDropdown.find('.screen-reader-text-dude');
                        var dropdownToggle = thisDropdown.find('.dropdown-toggle');
                        thisDropdown.find('.sub-menu').removeClass('toggled-on');
                        thisDropdown.find('.dropdown-toggle').removeClass('toggled-on');
                        thisDropdown.find('.dropdown').removeClass('toggled-on');
                        dropdownToggle.attr('aria-expanded', 'false');
                        // jscs:enable
                        screenReaderSpan.text(dude_screenReaderText.expand);
                        // Move focus back to previous dropdown select
                        // But only if we are not already in the toggle of the first dropdown menu
                        if (areWeInDropdown === true) thisDropdown.find('.dropdown-toggle:first').trigger('focus');
                    }
                }
            }
            if (window.innerWidth > responsivenav) {
                // Close previous dropdown if we are on main level
                var prevDropdown = $(this).parent().prev();
                var screenReaderSpanPrev = prevDropdown.find('.screen-reader-text-dude');
                var dropdownTogglePrev = prevDropdown.find('.dropdown-toggle');
                prevDropdown.find('.sub-menu').removeClass('toggled-on');
                prevDropdown.find('.dropdown-toggle').removeClass('toggled-on');
                prevDropdown.find('.dropdown').removeClass('toggled-on');
                dropdownTogglePrev.attr('aria-expanded', 'false');
                screenReaderSpanPrev.text(dude_screenReaderText.expand);
                // Close next dropdown if we are on main level
                var nextDropdown = $(this).parent().next();
                var screenReaderSpanNext = nextDropdown.find('.screen-reader-text-dude');
                var dropdownToggleNext = nextDropdown.find('.dropdown-toggle');
                nextDropdown.find('.sub-menu').removeClass('toggled-on');
                nextDropdown.find('.dropdown-toggle').removeClass('toggled-on');
                nextDropdown.find('.dropdown').removeClass('toggled-on');
                dropdownToggleNext.attr('aria-expanded', 'false');
                screenReaderSpanNext.text(dude_screenReaderText.expand);
            }
        });
        // Adds aria attribute
        siteHeaderMenu.find('.menu-item-has-children').attr('aria-haspopup', 'true');
        // Add default dropdown-toggle label
        $('.dropdown-toggle').each(function() {
            $(this).attr('aria-label', `${dude_screenReaderText.expand_for} ${$(this).prev().text()}`);
        });
        // Toggles the sub-menu when dropdown toggle button accessed
        siteHeaderMenu.find('.dropdown-toggle').on('click', function(e) {
            var dropdownMenu = $(this).nextAll('.sub-menu');
            $(this).toggleClass('toggled-on');
            dropdownMenu.toggleClass('toggled-on');
            // jscs:disable
            $(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'false' ? 'true' : 'false');
            // jscs:enable
            // Change screen reader open/close labels
            $(this).attr('aria-label', $(this).attr('aria-label') === `${dude_screenReaderText.collapse_for} ${$(this).prev().text()}` ? `${dude_screenReaderText.expand_for} ${$(this).prev().text()}` : `${dude_screenReaderText.collapse_for} ${$(this).prev().text()}`);
        });
        // Adds a class to sub-menus for styling
        $('.sub-menu .menu-item-has-children').parent('.sub-menu').addClass('has-sub-menu');
        // Keyboard navigation
        $('.menu-item a, button.dropdown-toggle').on('keydown', function(e) {
            if ([
                'ArrowUp',
                'ArrowDown',
                'ArrowLeft',
                'ArrowRight'
            ].indexOf(e.code) == -1) return;
            switch(e.code){
                case 'ArrowLeft':
                    e.stopPropagation();
                    if ($(this).hasClass('dropdown-toggle')) $(this).prev('a').trigger('focus');
                    else if ($(this).parent().prev().children('button.dropdown-toggle').length) $(this).parent().prev().children('button.dropdown-toggle').trigger('focus');
                    else $(this).parent().prev().children('a').trigger('focus');
                    if ($(this).is('ul ul ul.sub-menu.toggled-on li:first-child a')) $(this).parents('ul.sub-menu.toggled-on li').children('button.dropdown-toggle').trigger('focus');
                    break;
                case 'ArrowRight':
                    e.stopPropagation();
                    if ($(this).next('button.dropdown-toggle').length) $(this).next('button.dropdown-toggle').trigger('focus');
                    else if ($(this).parent().next().find('input').length) $(this).parent().next().find('input').trigger('focus');
                    else $(this).parent().next().children('a').trigger('focus');
                    if ($(this).is('ul.sub-menu .dropdown-toggle.toggled-on')) $(this).parent().find('ul.sub-menu li:first-child a').trigger('focus');
                    break;
                case 'ArrowDown':
                    e.stopPropagation();
                    if ($(this).next().length) $(this).next().find('li:first-child a').first().trigger('focus');
                    else if ($(this).parent().next().find('input').length) $(this).parent().next().find('input').trigger('focus');
                    else $(this).parent().next().children('a').trigger('focus');
                    if ($(this).is('ul.sub-menu a') && $(this).next('button.dropdown-toggle').length) $(this).parent().next().children('a').trigger('focus');
                    if ($(this).is('ul.sub-menu .dropdown-toggle') && $(this).parent().next().children('.dropdown-toggle').length) $(this).parent().next().children('.dropdown-toggle').trigger('focus');
                    break;
                case 'ArrowUp':
                    e.stopPropagation();
                    if ($(this).parent().prev().length) $(this).parent().prev().children('a').trigger('focus');
                    else $(this).parents('ul').first().prev('.dropdown-toggle.toggled-on').trigger('focus');
                    if ($(this).is('ul.sub-menu .dropdown-toggle') && $(this).parent().prev().children('.dropdown-toggle').length) $(this).parent().prev().children('.dropdown-toggle').trigger('focus');
                    break;
            }
        });
        container = document.getElementById('nav');
        if (!container) return;
        button = document.getElementById('nav-toggle');
        if (typeof button === 'undefined') return;
        // Set vars.
        html = document.getElementsByTagName('html')[0];
        body = document.getElementsByTagName('body')[0];
        menu = container.getElementsByTagName('ul')[0];
        menuWrapper = document.getElementById('main-navigation-wrapper');
        function mobileNav() {
            var mobileNavInstance;
            // Toggles the menu button
            if (!menuToggle.length) return;
            // Do not set aria-expanded false on desktop
            if (window.innerWidth < responsivenav) menuToggle.add(siteNavigation).attr('aria-expanded', 'false');
            menuToggle.on('click', function() {
                $(this).add(siteHeaderMenu).toggleClass('toggled-on');
                // Change screen reader expanded state
                $(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'false' ? 'true' : 'false');
                // Change screen reader open/close labels
                $('#nav-toggle-label').text(// eslint-disable-next-line no-undef
                $('#nav-toggle-label').text() === dude_screenReaderText.expand_toggle ? dude_screenReaderText.collapse_toggle : dude_screenReaderText.expand_toggle);
                $(this).attr('aria-label', $(this).attr('aria-label') === dude_screenReaderText.expand_toggle ? dude_screenReaderText.collapse_toggle : dude_screenReaderText.expand_toggle);
                // jscs:disable
                $(this).add(siteNavigation).attr('aria-expanded', $(this).add(siteNavigation).attr('aria-expanded') === 'false' ? 'true' : 'false');
            // jscs:enable
            });
            // Hide menu toggle button if menu is empty and return early.
            if (typeof menu === 'undefined') {
                button.style.display = 'none';
                return;
            }
            // Do not set aria-expanded false on desktop
            if (window.innerWidth < responsivenav) menu.setAttribute('aria-expanded', 'false');
            if (menu.className.indexOf('nav-menu') === -1) menu.className += ' nav-menu';
            // Focus trap for mobile navigation
            if (window.innerWidth < responsivenav) {
                firstFocusableElement = null;
                lastFocusableElement = null;
                // Select nav items
                var navElements = container.querySelectorAll([
                    '.nav-primary a[href]',
                    '.nav-primary button'
                ]);
                // Listen for key events on nav elements and the toggle button
                // to trigger focus trap
                for(var ii = 0; ii < navElements.length; ii++)navElements[ii].addEventListener('keydown', focusTrap);
            }
            // What happens when clicking menu toggle
            button.onclick = function() {
                if (container.className.indexOf('is-active') !== -1) closeMenu(); // Close menu.
                else {
                    html.className += ' disable-scroll';
                    body.className += ' js-nav-active';
                    container.className += ' is-active';
                    button.className += ' is-active';
                    button.setAttribute('aria-expanded', 'true');
                    menu.setAttribute('aria-expanded', 'true');
                    // Add focus trap when menu open
                    button.addEventListener('keydown', focusTrap, false);
                }
            };
            // Close menu using Esc key.
            document.addEventListener('keyup', (event)=>{
                if (event.code == 'Escape' || event.code == 'Esc') {
                    if (container.className.indexOf('is-active') !== -1) closeMenu(); // Close menu.
                }
            });
            // Close menu clicking menu wrapper area.
            menuWrapper.onclick = function(e) {
                if (e.target == menuWrapper && container.className.indexOf('is-active') !== -1) closeMenu(); // Close menu.
            };
        }
        if (window.innerWidth < responsivenav) mobileNav(); // fire right away for mobile devices
        // Close menu function.
        function closeMenu() {
            button.removeEventListener('keydown', focusTrap, false);
            html.className = html.className.replace(' disable-scroll', '');
            body.className = body.className.replace(' js-nav-active', '');
            container.className = container.className.replace(' is-active', '');
            button.className = button.className.replace(' is-active', '');
            button.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-expanded', 'false');
            $('#nav-toggle-label').text(dude_screenReaderText.expand_toggle);
            // Return focus to nav-toggle
            button.focus();
        }
        // Get all the link elements within the menu.
        links = menu.getElementsByTagName('a');
        subMenus = menu.getElementsByTagName('ul');
        // Each time a menu link is focused or blurred, toggle focus.
        for(i = 0, len = links.length; i < len; i++){
            links[i].addEventListener('focus', toggleFocus, true);
            links[i].addEventListener('blur', toggleFocus, true);
        }
        /**
     * Sets or removes .focus class on an element.
     */ function toggleFocus() {
            var self = this;
            // Move up through the ancestors of the current link until we hit .nav-menu.
            while(self.className.indexOf('nav-menu') === -1){
                // On li elements toggle the class .focus.
                if (self.tagName.toLowerCase() === 'li') {
                    if (self.className.indexOf('focus') !== -1) self.className = self.className.replace(' focus', '');
                    else self.className += ' focus';
                }
                self = self.parentElement;
            }
        }
        function focusTrap(e) {
            // Set focusable elements inside main navigation.
            focusableElements = [
                ...container.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')
            ].filter((el)=>!el.hasAttribute('disabled')).filter((el)=>!!(el.offsetWidth || el.offsetHeight || el.getClientRects().length));
            firstFocusableElement = focusableElements[0];
            lastFocusableElement = focusableElements[focusableElements.length - 1];
            // Redirect last Tab to first focusable element.
            if (lastFocusableElement === e.target && e.code === 'Tab' && !e.shiftKey) button.focus(); // Set focus on first element - that's actually close menu button.
            // Redirect first Shift+Tab to toggle button element.
            if (firstFocusableElement === e.target && e.code === 'Tab' && e.shiftKey) button.focus(); // Set focus on last element.
            // Redirect Shift+Tab from the toggle button to last focusable element.
            if (button === e.target && e.code === 'Tab' && e.shiftKey) lastFocusableElement.focus(); // Set focus on last element.
        }
        $(window).on('resize', ()=>{
            if (window.innerWidth > responsivenav && body.className.indexOf('js-nav-active') !== -1) closeMenu(); // Close menu.
            else if (window.innerWidth < responsivenav && typeof window.mobileNavInstance == 'undefined') mobileNav();
        });
    })(jQuery);
};
exports.default = initNavigation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"aOjaF":[function(require,module,exports,__globalThis) {
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-02-10 18:16:29
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-11-24 15:38:37
 */ /* eslint-disable no-use-before-define, no-inner-declarations, no-undef, no-plusplus, default-case, func-names, max-len, no-shadow, no-param-reassign, consistent-return */ /*
 * This content is licensed according to the W3C Software License at
 * https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 * @source https://www.w3.org/TR/wai-aria-practices/examples/tabs/tabs-1/tabs.html
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const initTabs = ()=>{
    // Find all tablists
    const tabLists = document.querySelectorAll('[role="tablist"]');
    if (typeof tabLists !== 'undefined') {
        let tabs;
        let panels;
        const delay = determineDelay();
        function generateArrays() {
            const tabLists = document.querySelectorAll('[role="tablist"]');
            // Loop through
            tabLists.forEach((tabList)=>{
                // First let's check if they exist
                if (typeof tabLists !== 'undefined') {
                    tabs = tabList.querySelectorAll('[role="tab"]');
                    if (tabList.nextElementSibling) panels = tabList.nextElementSibling.querySelectorAll('[role="tabpanel"]');
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
            delete: 46
        };
        // Add or substract depending on key pressed
        const direction = {
            37: -1,
            38: -1,
            39: 1,
            40: 1
        };
        // Loop through
        tabLists.forEach((tabList)=>{
            // First let's check if they exist
            if (typeof tabLists !== 'undefined') {
                tabs = tabList.querySelectorAll('[role="tab"]');
                if (tabList.nextElementSibling) panels = tabList.nextElementSibling.querySelectorAll('[role="tabpanel"]');
                // Bind listeners
                for(let i = 0; i < tabs.length; i++)addListeners(i);
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
            switch(key){
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
            switch(key){
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
            tabLists.forEach((tabList)=>{
                // First let's check if they exist
                if (typeof tabLists !== 'undefined') {
                    const vertical = tabList.getAttribute('aria-orientation') === 'vertical';
                    let proceed = false;
                    if (vertical) {
                        if (key === keys.up || key === keys.down) {
                            event.preventDefault();
                            proceed = true;
                        }
                    } else if (key === keys.left || key === keys.right) proceed = true;
                    if (proceed) switchTabOnArrowPress(event);
                }
            });
        }
        // Either focus the next, previous, first, or last tab
        // depening on key pressed
        function switchTabOnArrowPress(event) {
            const pressed = event.keyCode;
            for(let x = 0; x < tabs.length; x++)tabs[x].addEventListener('focus', focusEventHandler);
            if (direction[pressed]) {
                const { target: target1 } = event;
                if (target1.index !== undefined) {
                    if (tabs[target1.index + direction[pressed]]) tabs[target1.index + direction[pressed]].focus();
                    else if (pressed === keys.left || pressed === keys.up) focusLastTab();
                    else if (pressed === keys.right || pressed === keys.down) focusFirstTab();
                }
            }
        }
        // Activates any given tab panel
        function activateTab(tab, setFocus) {
            setFocus = setFocus || true;
            // If panels not found, bail
            if (!tab.parentNode.parentNode || !tab.parentNode.parentNode.nextElementSibling) return;
            // Deactivate all other tabs
            tabs = tab.parentNode.querySelectorAll('[role="tab"]');
            panels = tab.parentNode.parentNode.nextElementSibling.querySelectorAll('[role="tabpanel"]');
            for(let t = 0; t < tabs.length; t++){
                tabs[t].setAttribute('tabindex', '-1');
                tabs[t].setAttribute('aria-selected', 'false');
                tabs[t].removeEventListener('focus', focusEventHandler);
            }
            // Get the value of aria-controls (which is an ID)
            const controls = tab.getAttribute('aria-controls');
            // Check for controls
            if (!document.getElementById(controls)) return;
            for(let p = 0; p < panels.length; p++){
                panels[p].setAttribute('hidden', 'hidden');
                // Remove hidden attribute from tab panel to make it visible
                if (panels[p].getAttribute('id') === controls) panels[p].removeAttribute('hidden');
            }
            // Remove tabindex attribute
            tab.removeAttribute('tabindex');
            // Set the tab as selected
            tab.setAttribute('aria-selected', 'true');
            // Set focus when required
            if (setFocus) tab.focus();
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
                if (target.index - 1 < 0) activateTab(tabs[0]);
                else activateTab(tabs[target.index - 1]);
            }
        }
        // Deletes a tab and its panel
        function deleteTab(event) {
            const { target: target1 } = event;
            const panel = document.getElementById(target1.getAttribute('aria-controls'));
            target1.parentElement.removeChild(target1);
            panel.parentElement.removeChild(panel);
        }
        // Determine whether there should be a delay
        // when user navigates with the arrow keys
        function determineDelay() {
            // Loop through
            tabLists.forEach((tabList)=>{
                // First let's check if they exist
                if (typeof tabLists !== 'undefined') {
                    const hasDelay = tabList.hasAttribute('data-delay');
                    let delay = 0;
                    if (hasDelay) {
                        const delayValue = tabList.getAttribute('data-delay');
                        if (delayValue) delay = delayValue;
                        else // If no value is specified, default to 300ms
                        delay = 300;
                    }
                    return delay;
                }
            });
        }
        function focusEventHandler(event) {
            const { target: target1 } = event;
            setTimeout(checkTabFocus, delay, target1);
        }
        // Only activate tab on focus if it still has focus after the delay
        function checkTabFocus(target1) {
            focused = document.activeElement;
            if (target1 === focused) activateTab(target1, false);
        }
    }
};
exports.default = initTabs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"at2Oa":[function(require,module,exports,__globalThis) {
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-02-10 18:16:29
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-01-10 19:31:34
 */ /* eslint-disable no-use-before-define, no-inner-declarations, no-undef, no-plusplus, default-case, func-names, max-len, no-shadow, no-param-reassign, consistent-return */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const initEmbeds = ()=>{
    // Load Mastodon embed script
    const loadMastodonAPI = ()=>{
        const tagMastodon = document.createElement('script');
        tagMastodon.src = 'https://mementomori.social/embed.js';
        const firstScriptTagMastodon = document.getElementsByTagName('script')[0];
        if (firstScriptTagMastodon && firstScriptTagMastodon.parentNode) {
            firstScriptTagMastodon.parentNode.insertBefore(tagMastodon, firstScriptTagMastodon);
            window.isMastodonIframeAPILoaded = true;
        }
    };
    loadMastodonAPI();
};
exports.default = initEmbeds;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"jOwXU":[function(require,module,exports,__globalThis) {
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-05-17 11:54:40
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-08 12:20:41
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const initScrollableDivs = ()=>{
    function scrolled(event, left, right) {
        const width = event.target.scrollWidth - event.target.clientWidth;
        const scroll = event.target.scrollLeft;
        if (scroll === 0) left.classList.remove('visible');
        else left.classList.add('visible');
        if (scroll === width) right.classList.remove('visible');
        else right.classList.add('visible');
    }
    // Find all scrollable elements
    const scrollableElements = document.querySelectorAll('.has-horizontal-scroll');
    if (typeof scrollableElements !== 'undefined') scrollableElements.forEach((container)=>{
        const left = container.querySelector('.fade-left');
        const right = container.querySelector('.fade-right');
        const list = container.querySelector('.horizontal-list');
        // Init right fade on load
        right.classList.add('visible');
        if (typeof list !== 'undefined') list.addEventListener('scroll', (event)=>scrolled(event, left, right));
    });
};
exports.default = initScrollableDivs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"dvG9i":[function(require,module,exports,__globalThis) {
/* eslint-disable no-param-reassign, no-unused-expressions, max-len */ /**
 * @Author: Roni Laukkarinen
 * @Date:   2022-10-06 17:02:37
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-10 15:39:25
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const initdarkModeFooterToggle = ()=>{
    const { body } = document;
    const colorMode = localStorage.getItem('data-color-scheme');
    // Force dark mode if petrol gradient background or force-dark-mode is active
    const forceDarkMode = body.classList.contains('has-petrol-gradient-background') || body.classList.contains('force-dark-mode');
    // Get toggles
    if (document.querySelector('input[name="colorModeToggle"]')) document.querySelectorAll('input[name="colorModeToggle"]').forEach((colorModeToggle)=>{
        if (forceDarkMode) // Force dark mode when gradient is active
        body.setAttribute('data-color-scheme', 'dark');
        else if (colorMode !== null) {
            body.setAttribute('data-color-scheme', colorMode);
            colorModeToggle.value.includes(colorMode) ? colorModeToggle.checked = true : colorModeToggle.checked = false;
            colorModeToggle.value.includes(colorMode) ? colorModeToggle.setAttribute('tabindex', '0') : colorModeToggle.setAttribute('tabindex', '-1');
        }
        // On radio button change
        colorModeToggle.addEventListener('change', (event)=>{
            // Don't allow changing if gradient is active
            if (forceDarkMode) {
                body.setAttribute('data-color-scheme', 'dark');
                return;
            }
            const colorModeButtonState = event.target.value;
            // Set body attribute
            body.setAttribute('data-color-scheme', colorModeButtonState);
            // Set all other radio buttons to unchecked
            document.querySelectorAll('input[name="colorModeToggle"]').forEach((othercolorModeToggle)=>{
                othercolorModeToggle.value !== colorModeButtonState ? othercolorModeToggle.checked = false : othercolorModeToggle.checked = true;
                othercolorModeToggle.value !== colorModeButtonState ? othercolorModeToggle.setAttribute('tabindex', '-1') : othercolorModeToggle.setAttribute('tabindex', '0');
            });
            // Set this radio button attributes
            event.target.setAttribute('tabindex', '0');
            event.target.checked = true;
            // Set local storage value
            localStorage.setItem('data-color-scheme', colorModeButtonState);
        // console.log(`Clicked: ${colorModeButtonState}`);
        });
    });
};
exports.default = initdarkModeFooterToggle;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"1GSMc":[function(require,module,exports,__globalThis) {
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-06-27 09:11:28
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-13 13:55:03
 */ /* eslint-disable max-len, no-plusplus */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isTouchDevice() {
    // eslint-disable-next-line no-mixed-operators, no-undef
    return ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) === true;
}
const initTrain = ()=>{
    // Use grab/drag to scroll only on desktop
    if (isTouchDevice() === false) {
        // Drag to scroll
        const trainListElement = document.getElementById('list');
        // If ID is not found, stop script
        if (!trainListElement) return;
        trainListElement.style.cursor = 'grab';
        let pos = {
            top: 0,
            left: 0,
            x: 0,
            y: 0
        };
        // eslint-disable-next-line func-names
        const mouseDownHandler = function(e) {
            trainListElement.style.cursor = 'grabbing';
            trainListElement.style.userSelect = 'none';
            // Stop scrolling
            // eslint-disable-next-line no-use-before-define
            pauseScrolling();
            pos = {
                left: trainListElement.scrollLeft,
                top: trainListElement.scrollTop,
                // Get the current mouse position
                x: e.clientX,
                y: e.clientY
            };
            // eslint-disable-next-line no-use-before-define
            document.addEventListener('mousemove', mouseMoveHandler);
            // eslint-disable-next-line no-use-before-define
            document.addEventListener('mouseup', mouseUpHandler);
        };
        // eslint-disable-next-line func-names
        const mouseMoveHandler = function(e) {
            // How far the mouse has been moved
            const dx = e.clientX - pos.x;
            const dy = e.clientY - pos.y;
            // Scroll the element
            trainListElement.scrollTop = pos.top - dy;
            trainListElement.scrollLeft = pos.left - dx;
        };
        // eslint-disable-next-line func-names
        const mouseUpHandler = function() {
            trainListElement.style.cursor = 'grab';
            trainListElement.style.removeProperty('user-select');
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };
        // Attach the handler
        trainListElement.addEventListener('mousedown', mouseDownHandler);
    }
    // Get scrollable element
    const listElem = document.getElementById('list');
    // Scroll naturally
    // eslint-disable-next-line no-inner-declarations
    function animationLoop() {
        // The part that keeps it all going
        listElem.scrollBy({
            left: 1
        });
    }
    // Kick off for the animation function
    let scrollingInt = null;
    // eslint-disable-next-line no-use-before-define
    startScrolling();
    function startScrolling() {
        if (!scrollingInt) scrollingInt = window.setInterval(animationLoop, 15);
    }
    function pauseScrolling() {
        if (scrollingInt) {
            clearInterval(scrollingInt);
            scrollingInt = null;
            setTimeout(startScrolling, 3000);
        }
    }
    // Clear interval on touch event
    listElem.addEventListener('touchstart', pauseScrolling, {
        passive: true
    });
};
exports.default = initTrain;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"15rhE":[function(require,module,exports,__globalThis) {
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-06-28 15:20:10
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2023-04-18 20:03:05
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _moveto = require("moveto");
var _movetoDefault = parcelHelpers.interopDefault(_moveto);
var _player = require("@vimeo/player");
var _playerDefault = parcelHelpers.interopDefault(_player);
/* eslint-disable no-console */ const initShowreel = ()=>{
    // Video elements
    const autoplayplayers = document.querySelectorAll('.vimeo-player');
    // If videos not found, don't continue
    if (!autoplayplayers) return;
    // Timestamps for short video
    const startSeconds = 4;
    const endSeconds = 11;
    // Timestamps for short video in reference
    const startSecondsReference = 48;
    const endSecondsReference = 64;
    // Loop through all players
    autoplayplayers.forEach((autoplayplayer)=>{
        // eslint-disable-next-line new-cap
        // Player options
        const options = {
            height: autoplayplayer.dataset.height ? autoplayplayer.dataset.height : 680,
            width: autoplayplayer.dataset.width ? autoplayplayer.dataset.width : 1208,
            id: autoplayplayer.dataset.videoId ? autoplayplayer.dataset.videoId : false,
            loop: 1,
            controls: 1,
            autoplay: 1,
            byline: 1,
            portrait: 0,
            title: 0,
            background: 1,
            playsinline: 1,
            muted: 1,
            dnt: 1,
            transparent: 1
        };
        // Construct player
        // eslint-disable-next-line no-undef
        const player = new (0, _playerDefault.default)(autoplayplayer, options);
        // Find the play button
        const playButton = autoplayplayer.dataset.playButton ? document.getElementById(autoplayplayer.dataset.playButton) : null;
        // Do not continue if play button cannot be found
        if (!playButton) return;
        // Get play button
        const vimeoPlayButton = playButton;
        // Get play button label
        const vimeoPlayButtonLabel = playButton.getElementsByClassName('play-label')[0];
        // Play state function
        // eslint-disable-next-line func-names
        const onPlayStateFunctionReference = function() {
            // If reference video, poll every 1 seconds to get the current time
            // eslint-disable-next-line no-undef
            const handle = window.setInterval(()=>{
                // Check if play button has not been clicked
                if (!player.element.parentNode.parentNode.classList.contains('playing')) {
                    // Ensure CTA is removed
                    player.element.parentNode.parentNode.parentNode.parentNode.classList.remove('is-cta');
                    player.getCurrentTime().then((currentTime)=>{
                        if (currentTime < 10) player.setCurrentTime(startSecondsReference);
                        if (currentTime > endSecondsReference) player.setCurrentTime(startSecondsReference);
                    });
                }
                // If we have the full player theatre on
                if (player.element.parentNode.parentNode.classList.contains('playing')) // Get ended and add CTA
                player.getEnded().then((ended)=>{
                    if (ended) {
                        // Show CTA in place of the player
                        player.element.parentNode.parentNode.parentNode.parentNode.classList.add('is-cta');
                        // Change button text
                        vimeoPlayButtonLabel.innerHTML = 'Sulje showreel';
                        // Stop counting the ending from now on
                        clearInterval(handle);
                    }
                });
            }, 1000);
        };
        // Play state function
        // eslint-disable-next-line func-names
        const onPlayStateFunction = function() {
            // If showreel, poll every 1 seconds to get the current time
            // eslint-disable-next-line no-undef
            const handle = window.setInterval(()=>{
                // Check if play button has not been clicked
                if (!player.element.parentNode.parentNode.classList.contains('playing')) {
                    // Ensure CTA is removed
                    player.element.parentNode.parentNode.parentNode.parentNode.classList.remove('is-cta');
                    player.getCurrentTime().then((currentTime)=>{
                        if (currentTime < 1) player.setCurrentTime(startSeconds);
                        if (currentTime > endSeconds) player.setCurrentTime(startSeconds);
                    });
                }
                // If we have the full player theatre on
                if (player.element.parentNode.parentNode.classList.contains('playing')) // Get ended and add CTA
                player.getEnded().then((ended)=>{
                    if (ended) {
                        // Show CTA in place of the player
                        player.element.parentNode.parentNode.parentNode.parentNode.classList.add('is-cta');
                        // Change button text
                        vimeoPlayButtonLabel.innerHTML = 'Sulje showreel';
                        // Stop counting the ending from now on
                        clearInterval(handle);
                    }
                });
            }, 1000);
        };
        // Start polling when video is playing
        // If is reference
        if (player.element.parentNode.parentNode.parentNode.classList.contains('col-reference')) player.on('play', onPlayStateFunctionReference);
        else player.on('play', onPlayStateFunction);
        // Function for short video loop
        function setShortVideoLoop() {
            // Enable loop
            player.setLoop(true);
            // Enable mute
            player.setMuted(true);
            // Start playing from start position
            player.setCurrentTime(startSeconds);
            // Start playing
            player.play();
            // Remove needed classes to play button
            vimeoPlayButton.classList.remove('playing');
            // Change button text
            if (vimeoPlayButton.classList.contains('play-reference-video')) vimeoPlayButtonLabel.innerHTML = 'Katso video';
            else vimeoPlayButtonLabel.innerHTML = 'Katso showreel';
            // Remove needed classes from elements
            player.element.parentNode.parentNode.classList.remove('playing');
            player.element.parentNode.parentNode.parentNode.classList.remove('playing');
            player.element.parentNode.parentNode.parentNode.parentNode.classList.remove('playing');
            player.element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove('playing');
            player.element.parentNode.parentNode.parentNode.parentNode.classList.remove('is-cta');
            // If reference video is playing, add class to body
            if (vimeoPlayButton.classList.contains('play-reference-video')) document.body.classList.remove('is-playing-reference');
        }
        // Function for full player presentation
        function setFullPlayingTheatre() {
            // Start from the beginning
            player.setCurrentTime(0);
            // Disable loop
            player.setLoop(false);
            // Disable mute
            player.setMuted(false);
            // Start playing
            player.play();
            // Add needed classes to play button
            vimeoPlayButton.classList.add('playing');
            // Change button text
            if (vimeoPlayButton.classList.contains('play-reference-video')) vimeoPlayButtonLabel.innerHTML = "Pys\xe4yt\xe4 video";
            else vimeoPlayButtonLabel.innerHTML = "Pys\xe4yt\xe4 showreel";
            // Add needed classes to elements
            player.element.parentNode.parentNode.classList.add('playing');
            player.element.parentNode.parentNode.parentNode.classList.add('playing');
            player.element.parentNode.parentNode.parentNode.parentNode.classList.add('playing');
            player.element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('playing');
            // If reference video is playing, add class to body
            if (vimeoPlayButton.classList.contains('play-reference-video')) document.body.classList.add('is-playing-reference');
            // Quit showreel when pressing esc key
            document.addEventListener('keydown', (keydownMouseoverEvent)=>{
                if (keydownMouseoverEvent.key === 'Escape') setShortVideoLoop();
            });
        }
        // When player is ready
        player.ready().then(()=>{
            // Add loaded class to the wrapper around the iframe
            player.element.parentNode.classList.add('loaded');
            player.element.parentNode.parentNode.parentNode.classList.add('is-ready');
            // If is reference
            if (player.element.parentNode.parentNode.parentNode.parentNode.classList.contains('col-reference')) // Start playing from start position
            player.setCurrentTime(startSecondsReference);
            else // Start playing from start position
            player.setCurrentTime(startSeconds);
        });
        playButton.addEventListener('click', ()=>{
            // If this button is not related to the reference-video
            // Set moveTo
            const moveToTop = new (0, _movetoDefault.default)({
                duration: 300,
                easing: 'easeOutQuart'
            });
            if (!playButton.classList.contains('play-reference-video')) // Scroll to the top of the page
            moveToTop.move(document.getElementById('page'));
            else // Wait animation to load up
            setTimeout(()=>{
                // Get reference wrapper
                const moveToElement = playButton.closest('.cols-two');
                moveToTop.move(moveToElement);
            }, 250);
            // Start from the beginning
            player.setCurrentTime(0);
            // Check if play button has been clicked
            if (vimeoPlayButton.classList.contains('playing')) setShortVideoLoop();
            else setFullPlayingTheatre();
        });
    });
};
exports.default = initShowreel;

},{"moveto":"cphqU","@vimeo/player":"4X9En","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"4X9En":[function(require,module,exports,__globalThis) {
/*! @vimeo/player v2.30.1 | (c) 2025 Vimeo | MIT License | https://github.com/vimeo/player.js */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var global = arguments[3];
function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
        var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
        try {
            if (_x = (_i = _i.call(arr)).next, 0 === i) {
                if (Object(_i) !== _i) return;
                _n = !1;
            } else for(; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
        } catch (err) {
            _d = !0, _e = err;
        } finally{
            try {
                if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _regeneratorRuntime() {
    _regeneratorRuntime = function() {
        return exports;
    };
    var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        return Object.defineProperty(obj, key, {
            value: value,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), obj[key];
    }
    try {
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self1, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
        return defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self1, context)
        }), generator;
    }
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" !== record.type) {
                var result = record.arg, value = result.value;
                return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                }) : PromiseImpl.resolve(value).then(function(unwrapped) {
                    result.value = unwrapped, resolve(result);
                }, function(error) {
                    return invoke("throw", error, resolve, reject);
                });
            }
            reject(record.arg);
        }
        var previousPromise;
        defineProperty(this, "_invoke", {
            value: function(method, arg) {
                function callInvokeWithMethodAndArg() {
                    return new PromiseImpl(function(resolve, reject) {
                        invoke(method, arg, resolve, reject);
                    });
                }
                return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(innerFn, self1, context) {
        var state = "suspendedStart";
        return function(method, arg) {
            if ("executing" === state) throw new Error("Generator is already running");
            if ("completed" === state) {
                if ("throw" === method) throw arg;
                return doneResult();
            }
            for(context.method = method, context.arg = arg;;){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if ("next" === context.method) context.sent = context._sent = context.arg;
                else if ("throw" === context.method) {
                    if ("suspendedStart" === state) throw state = "completed", context.arg;
                    context.dispatchException(context.arg);
                } else "return" === context.method && context.abrupt("return", context.arg);
                state = "executing";
                var record = tryCatch(innerFn, self1, context);
                if ("normal" === record.type) {
                    if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                }
                "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
            }
        };
    }
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method, method = delegate.iterator[methodName];
        if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
        var record = tryCatch(method, delegate.iterator, context.arg);
        if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
        var info = record.arg;
        return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    for(; ++i < iterable.length;)if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                    return next.value = undefined, next.done = !0, next;
                };
                return next.next = next;
            }
        }
        return {
            next: doneResult
        };
    }
    function doneResult() {
        return {
            value: undefined,
            done: !0
        };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
        var ctor = "function" == typeof genFun && genFun.constructor;
        return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function(genFun) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function(arg) {
        return {
            __await: arg
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self1, tryLocsList, PromiseImpl) {
        void 0 === PromiseImpl && (PromiseImpl = Promise);
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self1, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
        return this;
    }), define(Gp, "toString", function() {
        return "[object Generator]";
    }), exports.keys = function(val) {
        var object = Object(val), keys = [];
        for(var key in object)keys.push(key);
        return keys.reverse(), function next() {
            for(; keys.length;){
                var key = keys.pop();
                if (key in object) return next.value = key, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, exports.values = values, Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for(var name in this)"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
        },
        stop: function() {
            this.done = !0;
            var rootRecord = this.tryEntries[0].completion;
            if ("throw" === rootRecord.type) throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i], record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    } else {
                        if (!hasFinally) throw new Error("try statement without catch or finally");
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    }
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
            var record = finallyEntry ? finallyEntry.completion : {};
            return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
        },
        complete: function(record, afterLoc) {
            if ("throw" === record.type) throw record.arg;
            return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
            }
        },
        catch: function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if ("throw" === record.type) {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            return this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
        }
    }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function _asyncToGenerator(fn) {
    return function() {
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    Object.defineProperty(subClass, "prototype", {
        writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) _construct = Reflect.construct.bind();
    else _construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _assertThisInitialized(self1) {
    if (self1 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self1;
}
function _possibleConstructorReturn(self1, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(self1);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
}
/**
 * @module lib/functions
 */ /**
 * Check to see this is a Node environment.
 * @type {boolean}
 */ /* global global */ var isNode = typeof global !== 'undefined' && ({}).toString.call(global) === '[object global]';
/**
 * Check to see if this is a Bun environment.
 * @see https://bun.sh/guides/util/detect-bun
 * @type {boolean}
 */ var isBun = typeof Bun !== 'undefined';
/**
 * Check to see if this is a Deno environment.
 * @see https://docs.deno.com/api/deno/~/Deno
 * @type {boolean}
 */ var isDeno = typeof Deno !== 'undefined';
/**
 * Check if this is a server runtime
 * @type {boolean}
 */ var isServerRuntime = isNode || isBun || isDeno;
/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */ function getMethodName(prop, type) {
    if (prop.indexOf(type.toLowerCase()) === 0) return prop;
    return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
}
/**
 * Check to see if the object is a DOM Element.
 *
 * @param {*} element The object to check.
 * @return {boolean}
 */ function isDomElement(element) {
    return Boolean(element && element.nodeType === 1 && 'nodeName' in element && element.ownerDocument && element.ownerDocument.defaultView);
}
/**
 * Check to see whether the value is a number.
 *
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */ function isInteger(value) {
    // eslint-disable-next-line eqeqeq
    return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
}
/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */ function isVimeoUrl(url) {
    return /^(https?:)?\/\/((((player|www)\.)?vimeo\.com)|((player\.)?[a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))(?=$|\/)/.test(url);
}
/**
 * Check to see if the URL is for a Vimeo embed.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */ function isVimeoEmbed(url) {
    var expr = /^https:\/\/player\.((vimeo\.com)|([a-zA-Z0-9-]+\.(videoji\.(hk|cn)|vimeo\.work)))\/video\/\d+/;
    return expr.test(url);
}
function getOembedDomain(url) {
    var match = (url || '').match(/^(?:https?:)?(?:\/\/)?([^/?]+)/);
    var domain = (match && match[1] || '').replace('player.', '');
    var customDomains = [
        '.videoji.hk',
        '.vimeo.work',
        '.videoji.cn'
    ];
    for(var _i = 0, _customDomains = customDomains; _i < _customDomains.length; _i++){
        var customDomain = _customDomains[_i];
        if (domain.endsWith(customDomain)) return domain;
    }
    return 'vimeo.com';
}
/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */ function getVimeoUrl() {
    var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var id = oEmbedParameters.id;
    var url = oEmbedParameters.url;
    var idOrUrl = id || url;
    if (!idOrUrl) throw new Error('An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.');
    if (isInteger(idOrUrl)) return "https://vimeo.com/".concat(idOrUrl);
    if (isVimeoUrl(idOrUrl)) return idOrUrl.replace('http:', 'https:');
    if (id) throw new TypeError("\u201C".concat(id, "\u201D is not a valid video id."));
    throw new TypeError("\u201C".concat(idOrUrl, "\u201D is not a vimeo.com url."));
}
/* eslint-disable max-params */ /**
 * A utility method for attaching and detaching event handlers
 *
 * @param {EventTarget} target
 * @param {string | string[]} eventName
 * @param {function} callback
 * @param {'addEventListener' | 'on'} onName
 * @param {'removeEventListener' | 'off'} offName
 * @return {{cancel: (function(): void)}}
 */ var subscribe = function subscribe(target, eventName, callback) {
    var onName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'addEventListener';
    var offName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'removeEventListener';
    var eventNames = typeof eventName === 'string' ? [
        eventName
    ] : eventName;
    eventNames.forEach(function(evName) {
        target[onName](evName, callback);
    });
    return {
        cancel: function cancel() {
            return eventNames.forEach(function(evName) {
                return target[offName](evName, callback);
            });
        }
    };
};
/**
 * Find the iframe element that contains a specific source window
 *
 * @param {Window} sourceWindow The source window to find the iframe for
 * @param {Document} [doc=document] The document to search within
 * @return {HTMLIFrameElement|null} The iframe element if found, otherwise null
 */ function findIframeBySourceWindow(sourceWindow) {
    var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    if (!sourceWindow || !doc || typeof doc.querySelectorAll !== 'function') return null;
    var iframes = doc.querySelectorAll('iframe');
    for(var i = 0; i < iframes.length; i++){
        if (iframes[i] && iframes[i].contentWindow === sourceWindow) return iframes[i];
    }
    return null;
}
var arrayIndexOfSupport = typeof Array.prototype.indexOf !== 'undefined';
var postMessageSupport = typeof window !== 'undefined' && typeof window.postMessage !== 'undefined';
if (!isServerRuntime && (!arrayIndexOfSupport || !postMessageSupport)) throw new Error('Sorry, the Vimeo Player API is not available in this browser.');
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
function createCommonjsModule(fn, module) {
    return module = {
        exports: {}
    }, fn(module, module.exports), module.exports;
}
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */ (function(self1) {
    if (self1.WeakMap) return;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasDefine = Object.defineProperty && function() {
        try {
            // Avoid IE8's broken Object.defineProperty
            return Object.defineProperty({}, 'x', {
                value: 1
            }).x === 1;
        } catch (e) {}
    }();
    var defineProperty = function(object, name, value) {
        if (hasDefine) Object.defineProperty(object, name, {
            configurable: true,
            writable: true,
            value: value
        });
        else object[name] = value;
    };
    self1.WeakMap = function() {
        // ECMA-262 23.3 WeakMap Objects
        function WeakMap1() {
            if (this === void 0) throw new TypeError("Constructor WeakMap requires 'new'");
            defineProperty(this, '_id', genId('_WeakMap'));
            // ECMA-262 23.3.1.1 WeakMap([iterable])
            if (arguments.length > 0) // Currently, WeakMap `iterable` argument is not supported
            throw new TypeError('WeakMap iterable is not supported');
        }
        // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)
        defineProperty(WeakMap1.prototype, 'delete', function(key) {
            checkInstance(this, 'delete');
            if (!isObject(key)) return false;
            var entry = key[this._id];
            if (entry && entry[0] === key) {
                delete key[this._id];
                return true;
            }
            return false;
        });
        // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)
        defineProperty(WeakMap1.prototype, 'get', function(key) {
            checkInstance(this, 'get');
            if (!isObject(key)) return void 0;
            var entry = key[this._id];
            if (entry && entry[0] === key) return entry[1];
            return void 0;
        });
        // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)
        defineProperty(WeakMap1.prototype, 'has', function(key) {
            checkInstance(this, 'has');
            if (!isObject(key)) return false;
            var entry = key[this._id];
            if (entry && entry[0] === key) return true;
            return false;
        });
        // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)
        defineProperty(WeakMap1.prototype, 'set', function(key, value) {
            checkInstance(this, 'set');
            if (!isObject(key)) throw new TypeError('Invalid value used as weak map key');
            var entry = key[this._id];
            if (entry && entry[0] === key) {
                entry[1] = value;
                return this;
            }
            defineProperty(key, this._id, [
                key,
                value
            ]);
            return this;
        });
        function checkInstance(x, methodName) {
            if (!isObject(x) || !hasOwnProperty.call(x, '_id')) throw new TypeError(methodName + ' method called on incompatible receiver ' + typeof x);
        }
        function genId(prefix) {
            return prefix + '_' + rand() + '.' + rand();
        }
        function rand() {
            return Math.random().toString().substring(2);
        }
        defineProperty(WeakMap1, '_polyfill', true);
        return WeakMap1;
    }();
    function isObject(x) {
        return Object(x) === x;
    }
})(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : commonjsGlobal);
var npo_src = createCommonjsModule(function(module) {
    /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function UMD(name, context, definition) {
        // special form of UMD for polyfilling across evironments
        context[name] = context[name] || definition();
        if (module.exports) module.exports = context[name];
    })("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {
        var builtInProp, cycle, scheduling_queue, ToString = Object.prototype.toString, timer = typeof setImmediate != "undefined" ? function timer(fn) {
            return setImmediate(fn);
        } : setTimeout;
        // dammit, IE8.
        try {
            Object.defineProperty({}, "x", {});
            builtInProp = function builtInProp(obj, name, val, config) {
                return Object.defineProperty(obj, name, {
                    value: val,
                    writable: true,
                    configurable: config !== false
                });
            };
        } catch (err) {
            builtInProp = function builtInProp(obj, name, val) {
                obj[name] = val;
                return obj;
            };
        }
        // Note: using a queue instead of array for efficiency
        scheduling_queue = function Queue() {
            var first, last, item;
            function Item(fn, self1) {
                this.fn = fn;
                this.self = self1;
                this.next = void 0;
            }
            return {
                add: function add(fn, self1) {
                    item = new Item(fn, self1);
                    if (last) last.next = item;
                    else first = item;
                    last = item;
                    item = void 0;
                },
                drain: function drain() {
                    var f = first;
                    first = last = cycle = void 0;
                    while(f){
                        f.fn.call(f.self);
                        f = f.next;
                    }
                }
            };
        }();
        function schedule(fn, self1) {
            scheduling_queue.add(fn, self1);
            if (!cycle) cycle = timer(scheduling_queue.drain);
        }
        // promise duck typing
        function isThenable(o) {
            var _then, o_type = typeof o;
            if (o != null && (o_type == "object" || o_type == "function")) _then = o.then;
            return typeof _then == "function" ? _then : false;
        }
        function notify() {
            for(var i = 0; i < this.chain.length; i++)notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
            this.chain.length = 0;
        }
        // NOTE: This is a separate function to isolate
        // the `try..catch` so that other code can be
        // optimized better
        function notifyIsolated(self1, cb, chain) {
            var ret, _then;
            try {
                if (cb === false) chain.reject(self1.msg);
                else {
                    if (cb === true) ret = self1.msg;
                    else ret = cb.call(void 0, self1.msg);
                    if (ret === chain.promise) chain.reject(TypeError("Promise-chain cycle"));
                    else if (_then = isThenable(ret)) _then.call(ret, chain.resolve, chain.reject);
                    else chain.resolve(ret);
                }
            } catch (err) {
                chain.reject(err);
            }
        }
        function resolve(msg) {
            var _then, self1 = this;
            // already triggered?
            if (self1.triggered) return;
            self1.triggered = true;
            // unwrap
            if (self1.def) self1 = self1.def;
            try {
                if (_then = isThenable(msg)) schedule(function() {
                    var def_wrapper = new MakeDefWrapper(self1);
                    try {
                        _then.call(msg, function $resolve$() {
                            resolve.apply(def_wrapper, arguments);
                        }, function $reject$() {
                            reject.apply(def_wrapper, arguments);
                        });
                    } catch (err) {
                        reject.call(def_wrapper, err);
                    }
                });
                else {
                    self1.msg = msg;
                    self1.state = 1;
                    if (self1.chain.length > 0) schedule(notify, self1);
                }
            } catch (err) {
                reject.call(new MakeDefWrapper(self1), err);
            }
        }
        function reject(msg) {
            var self1 = this;
            // already triggered?
            if (self1.triggered) return;
            self1.triggered = true;
            // unwrap
            if (self1.def) self1 = self1.def;
            self1.msg = msg;
            self1.state = 2;
            if (self1.chain.length > 0) schedule(notify, self1);
        }
        function iteratePromises(Constructor, arr, resolver, rejecter) {
            for(var idx = 0; idx < arr.length; idx++)(function IIFE(idx) {
                Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
                    resolver(idx, msg);
                }, rejecter);
            })(idx);
        }
        function MakeDefWrapper(self1) {
            this.def = self1;
            this.triggered = false;
        }
        function MakeDef(self1) {
            this.promise = self1;
            this.state = 0;
            this.triggered = false;
            this.chain = [];
            this.msg = void 0;
        }
        function Promise1(executor) {
            if (typeof executor != "function") throw TypeError("Not a function");
            if (this.__NPO__ !== 0) throw TypeError("Not a promise");
            // instance shadowing the inherited "brand"
            // to signal an already "initialized" promise
            this.__NPO__ = 1;
            var def = new MakeDef(this);
            this["then"] = function then(success, failure) {
                var o = {
                    success: typeof success == "function" ? success : true,
                    failure: typeof failure == "function" ? failure : false
                };
                // Note: `then(..)` itself can be borrowed to be used against
                // a different promise constructor for making the chained promise,
                // by substituting a different `this` binding.
                o.promise = new this.constructor(function extractChain(resolve, reject) {
                    if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                    o.resolve = resolve;
                    o.reject = reject;
                });
                def.chain.push(o);
                if (def.state !== 0) schedule(notify, def);
                return o.promise;
            };
            this["catch"] = function $catch$(failure) {
                return this.then(void 0, failure);
            };
            try {
                executor.call(void 0, function publicResolve(msg) {
                    resolve.call(def, msg);
                }, function publicReject(msg) {
                    reject.call(def, msg);
                });
            } catch (err) {
                reject.call(def, err);
            }
        }
        var PromisePrototype = builtInProp({}, "constructor", Promise1, /*configurable=*/ false);
        // Note: Android 4 cannot use `Object.defineProperty(..)` here
        Promise1.prototype = PromisePrototype;
        // built-in "brand" to signal an "uninitialized" promise
        builtInProp(PromisePrototype, "__NPO__", 0, /*configurable=*/ false);
        builtInProp(Promise1, "resolve", function Promise$resolve(msg) {
            var Constructor = this;
            // spec mandated checks
            // note: best "isPromise" check that's practical for now
            if (msg && typeof msg == "object" && msg.__NPO__ === 1) return msg;
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                resolve(msg);
            });
        });
        builtInProp(Promise1, "reject", function Promise$reject(msg) {
            return new this(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                reject(msg);
            });
        });
        builtInProp(Promise1, "all", function Promise$all(arr) {
            var Constructor = this;
            // spec mandated checks
            if (ToString.call(arr) != "[object Array]") return Constructor.reject(TypeError("Not an array"));
            if (arr.length === 0) return Constructor.resolve([]);
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                var len = arr.length, msgs = Array(len), count = 0;
                iteratePromises(Constructor, arr, function resolver(idx, msg) {
                    msgs[idx] = msg;
                    if (++count === len) resolve(msgs);
                }, reject);
            });
        });
        builtInProp(Promise1, "race", function Promise$race(arr) {
            var Constructor = this;
            // spec mandated checks
            if (ToString.call(arr) != "[object Array]") return Constructor.reject(TypeError("Not an array"));
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                iteratePromises(Constructor, arr, function resolver(idx, msg) {
                    resolve(msg);
                }, reject);
            });
        });
        return Promise1;
    });
});
/**
 * @module lib/callbacks
 */ var callbackMap = new WeakMap();
/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */ function storeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    if (!(name in playerCallbacks)) playerCallbacks[name] = [];
    playerCallbacks[name].push(callback);
    callbackMap.set(player.element, playerCallbacks);
}
/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */ function getCallbacks(player, name) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    return playerCallbacks[name] || [];
}
/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */ function removeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    if (!playerCallbacks[name]) return true;
    // If no callback is passed, remove all callbacks for the event
    if (!callback) {
        playerCallbacks[name] = [];
        callbackMap.set(player.element, playerCallbacks);
        return true;
    }
    var index = playerCallbacks[name].indexOf(callback);
    if (index !== -1) playerCallbacks[name].splice(index, 1);
    callbackMap.set(player.element, playerCallbacks);
    return playerCallbacks[name] && playerCallbacks[name].length === 0;
}
/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */ function shiftCallbacks(player, name) {
    var playerCallbacks = getCallbacks(player, name);
    if (playerCallbacks.length < 1) return false;
    var callback = playerCallbacks.shift();
    removeCallback(player, name, callback);
    return callback;
}
/**
 * Move callbacks associated with an element to another element.
 *
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */ function swapCallbacks(oldElement, newElement) {
    var playerCallbacks = callbackMap.get(oldElement);
    callbackMap.set(newElement, playerCallbacks);
    callbackMap.delete(oldElement);
}
/**
 * @module lib/postmessage
 */ /**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */ function parseMessageData(data) {
    if (typeof data === 'string') try {
        data = JSON.parse(data);
    } catch (error) {
        // If the message cannot be parsed, throw the error as a warning
        console.warn(error);
        return {};
    }
    return data;
}
/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {string|number|object|Array|undefined} params The parameters to send to the player.
 * @return {void}
 */ function postMessage(player, method, params) {
    if (!player.element.contentWindow || !player.element.contentWindow.postMessage) return;
    var message = {
        method: method
    };
    if (params !== undefined) message.value = params;
    // IE 8 and 9 do not support passing messages, so stringify them
    var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, '$1'));
    if (ieVersion >= 8 && ieVersion < 10) message = JSON.stringify(message);
    player.element.contentWindow.postMessage(message, player.origin);
}
/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */ function processData(player, data) {
    data = parseMessageData(data);
    var callbacks = [];
    var param;
    if (data.event) {
        if (data.event === 'error') {
            var promises = getCallbacks(player, data.data.method);
            promises.forEach(function(promise) {
                var error = new Error(data.data.message);
                error.name = data.data.name;
                promise.reject(error);
                removeCallback(player, data.data.method, promise);
            });
        }
        callbacks = getCallbacks(player, "event:".concat(data.event));
        param = data.data;
    } else if (data.method) {
        var callback = shiftCallbacks(player, data.method);
        if (callback) {
            callbacks.push(callback);
            param = data.value;
        }
    }
    callbacks.forEach(function(callback) {
        try {
            if (typeof callback === 'function') {
                callback.call(player, param);
                return;
            }
            callback.resolve(param);
        } catch (e) {
        // empty
        }
    });
}
/**
 * @module lib/embed
 */ var oEmbedParameters = [
    'airplay',
    'audio_tracks',
    'audiotrack',
    'autopause',
    'autoplay',
    'background',
    'byline',
    'cc',
    'chapter_id',
    'chapters',
    'chromecast',
    'color',
    'colors',
    'controls',
    'dnt',
    'end_time',
    'fullscreen',
    'height',
    'id',
    'initial_quality',
    'interactive_params',
    'keyboard',
    'loop',
    'maxheight',
    'max_quality',
    'maxwidth',
    'min_quality',
    'muted',
    'play_button_position',
    'playsinline',
    'portrait',
    'preload',
    'progress_bar',
    'quality',
    'quality_selector',
    'responsive',
    'skipping_forward',
    'speed',
    'start_time',
    'texttrack',
    'thumbnail_id',
    'title',
    'transcript',
    'transparent',
    'unmute_button',
    'url',
    'vimeo_logo',
    'volume',
    'watch_full_video',
    'width'
];
/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */ function getOEmbedParameters(element) {
    var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return oEmbedParameters.reduce(function(params, param) {
        var value = element.getAttribute("data-vimeo-".concat(param));
        if (value || value === '') params[param] = value === '' ? 1 : value;
        return params;
    }, defaults);
}
/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */ function createEmbed(_ref, element) {
    var html = _ref.html;
    if (!element) throw new TypeError('An element must be provided');
    if (element.getAttribute('data-vimeo-initialized') !== null) return element.querySelector('iframe');
    var div = document.createElement('div');
    div.innerHTML = html;
    element.appendChild(div.firstChild);
    element.setAttribute('data-vimeo-initialized', 'true');
    return element.querySelector('iframe');
}
/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */ function getOEmbedData(videoUrl) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var element = arguments.length > 2 ? arguments[2] : undefined;
    return new Promise(function(resolve, reject) {
        if (!isVimeoUrl(videoUrl)) throw new TypeError("\u201C".concat(videoUrl, "\u201D is not a vimeo.com url."));
        var domain = getOembedDomain(videoUrl);
        var url = "https://".concat(domain, "/api/oembed.json?url=").concat(encodeURIComponent(videoUrl));
        for(var param in params)if (params.hasOwnProperty(param)) url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
        var xhr = 'XDomainRequest' in window ? new XDomainRequest() : new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (xhr.status === 404) {
                reject(new Error("\u201C".concat(videoUrl, "\u201D was not found.")));
                return;
            }
            if (xhr.status === 403) {
                reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
                return;
            }
            try {
                var json = JSON.parse(xhr.responseText);
                // Check api response for 403 on oembed
                if (json.domain_status_code === 403) {
                    // We still want to create the embed to give users visual feedback
                    createEmbed(json, element);
                    reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
                    return;
                }
                resolve(json);
            } catch (error) {
                reject(error);
            }
        };
        xhr.onerror = function() {
            var status = xhr.status ? " (".concat(xhr.status, ")") : '';
            reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
        };
        xhr.send();
    });
}
/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function initializeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    var elements = [].slice.call(parent.querySelectorAll('[data-vimeo-id], [data-vimeo-url]'));
    var handleError = function handleError(error) {
        if ('console' in window && console.error) console.error("There was an error creating an embed: ".concat(error));
    };
    elements.forEach(function(element) {
        try {
            // Skip any that have data-vimeo-defer
            if (element.getAttribute('data-vimeo-defer') !== null) return;
            var params = getOEmbedParameters(element);
            var url = getVimeoUrl(params);
            getOEmbedData(url, params, element).then(function(data) {
                return createEmbed(data, element);
            }).catch(handleError);
        } catch (error) {
            handleError(error);
        }
    });
}
/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function resizeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    // Prevent execution if users include the player.js script multiple times.
    if (window.VimeoPlayerResizeEmbeds_) return;
    window.VimeoPlayerResizeEmbeds_ = true;
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) return;
        // 'spacechange' is fired only on embeds with cards
        if (!event.data || event.data.event !== 'spacechange') return;
        var senderIFrame = event.source ? findIframeBySourceWindow(event.source, parent) : null;
        if (senderIFrame) {
            // Change padding-bottom of the enclosing div to accommodate
            // card carousel without distorting aspect ratio
            var space = senderIFrame.parentElement;
            space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
        }
    };
    window.addEventListener('message', onMessage);
}
/**
 * Add chapters to existing metadata for Google SEO
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function initAppendVideoMetadata() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    //  Prevent execution if users include the player.js script multiple times.
    if (window.VimeoSeoMetadataAppended) return;
    window.VimeoSeoMetadataAppended = true;
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) return;
        var data = parseMessageData(event.data);
        if (!data || data.event !== 'ready') return;
        var senderIFrame = event.source ? findIframeBySourceWindow(event.source, parent) : null;
        // Initiate appendVideoMetadata if iframe is a Vimeo embed
        if (senderIFrame && isVimeoEmbed(senderIFrame.src)) {
            var player = new Player(senderIFrame);
            player.callMethod('appendVideoMetadata', window.location.href);
        }
    };
    window.addEventListener('message', onMessage);
}
/**
 * Seek to time indicated by vimeo_t query parameter if present in URL
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function checkUrlTimeParam() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    //  Prevent execution if users include the player.js script multiple times.
    if (window.VimeoCheckedUrlTimeParam) return;
    window.VimeoCheckedUrlTimeParam = true;
    var handleError = function handleError(error) {
        if ('console' in window && console.error) console.error("There was an error getting video Id: ".concat(error));
    };
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) return;
        var data = parseMessageData(event.data);
        if (!data || data.event !== 'ready') return;
        var senderIFrame = event.source ? findIframeBySourceWindow(event.source, parent) : null;
        if (senderIFrame && isVimeoEmbed(senderIFrame.src)) {
            var player = new Player(senderIFrame);
            player.getVideoId().then(function(videoId) {
                var matches = new RegExp("[?&]vimeo_t_".concat(videoId, "=([^&#]*)")).exec(window.location.href);
                if (matches && matches[1]) {
                    var sec = decodeURI(matches[1]);
                    player.setCurrentTime(sec);
                }
                return;
            }).catch(handleError);
        }
    };
    window.addEventListener('message', onMessage);
}
/**
 * Updates iframe embeds to support DRM content playback by adding the 'encrypted-media' permission
 * to the iframe's allow attribute when DRM initialization fails. This function acts as a fallback
 * mechanism to enable playback of DRM-protected content in embeds that weren't properly configured.
 *
 * @return {void}
 */ function updateDRMEmbeds() {
    if (window.VimeoDRMEmbedsUpdated) return;
    window.VimeoDRMEmbedsUpdated = true;
    /**
   * Handle message events for DRM initialization failures
   * @param {MessageEvent} event - The message event from the iframe
   */ var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) return;
        var data = parseMessageData(event.data);
        if (!data || data.event !== 'drminitfailed') return;
        var senderIFrame = event.source ? findIframeBySourceWindow(event.source) : null;
        if (!senderIFrame) return;
        var currentAllow = senderIFrame.getAttribute('allow') || '';
        var allowSupportsDRM = currentAllow.includes('encrypted-media');
        if (!allowSupportsDRM) {
            // For DRM playback to successfully occur, the iframe `allow` attribute must include 'encrypted-media'.
            // If the video requires DRM but doesn't have the attribute, we try to add on behalf of the embed owner
            // as a temporary measure to enable playback until they're able to update their embeds.
            senderIFrame.setAttribute('allow', "".concat(currentAllow, "; encrypted-media"));
            var currentUrl = new URL(senderIFrame.getAttribute('src'));
            // Adding this forces the embed to reload once `allow` has been updated with `encrypted-media`.
            currentUrl.searchParams.set('forcereload', 'drm');
            senderIFrame.setAttribute('src', currentUrl.toString());
            return;
        }
    };
    window.addEventListener('message', onMessage);
}
/* MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Terms */ function initializeScreenfull() {
    var fn = function() {
        var val;
        var fnMap = [
            [
                'requestFullscreen',
                'exitFullscreen',
                'fullscreenElement',
                'fullscreenEnabled',
                'fullscreenchange',
                'fullscreenerror'
            ],
            // New WebKit
            [
                'webkitRequestFullscreen',
                'webkitExitFullscreen',
                'webkitFullscreenElement',
                'webkitFullscreenEnabled',
                'webkitfullscreenchange',
                'webkitfullscreenerror'
            ],
            // Old WebKit
            [
                'webkitRequestFullScreen',
                'webkitCancelFullScreen',
                'webkitCurrentFullScreenElement',
                'webkitCancelFullScreen',
                'webkitfullscreenchange',
                'webkitfullscreenerror'
            ],
            [
                'mozRequestFullScreen',
                'mozCancelFullScreen',
                'mozFullScreenElement',
                'mozFullScreenEnabled',
                'mozfullscreenchange',
                'mozfullscreenerror'
            ],
            [
                'msRequestFullscreen',
                'msExitFullscreen',
                'msFullscreenElement',
                'msFullscreenEnabled',
                'MSFullscreenChange',
                'MSFullscreenError'
            ]
        ];
        var i = 0;
        var l = fnMap.length;
        var ret = {};
        for(; i < l; i++){
            val = fnMap[i];
            if (val && val[1] in document) {
                for(i = 0; i < val.length; i++)ret[fnMap[0][i]] = val[i];
                return ret;
            }
        }
        return false;
    }();
    var eventNameMap = {
        fullscreenchange: fn.fullscreenchange,
        fullscreenerror: fn.fullscreenerror
    };
    var screenfull = {
        request: function request(element) {
            return new Promise(function(resolve, reject) {
                var onFullScreenEntered = function onFullScreenEntered() {
                    screenfull.off('fullscreenchange', onFullScreenEntered);
                    resolve();
                };
                screenfull.on('fullscreenchange', onFullScreenEntered);
                element = element || document.documentElement;
                var returnPromise = element[fn.requestFullscreen]();
                if (returnPromise instanceof Promise) returnPromise.then(onFullScreenEntered).catch(reject);
            });
        },
        exit: function exit() {
            return new Promise(function(resolve, reject) {
                if (!screenfull.isFullscreen) {
                    resolve();
                    return;
                }
                var onFullScreenExit = function onFullScreenExit() {
                    screenfull.off('fullscreenchange', onFullScreenExit);
                    resolve();
                };
                screenfull.on('fullscreenchange', onFullScreenExit);
                var returnPromise = document[fn.exitFullscreen]();
                if (returnPromise instanceof Promise) returnPromise.then(onFullScreenExit).catch(reject);
            });
        },
        on: function on(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) document.addEventListener(eventName, callback);
        },
        off: function off(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) document.removeEventListener(eventName, callback);
        }
    };
    Object.defineProperties(screenfull, {
        isFullscreen: {
            get: function get() {
                return Boolean(document[fn.fullscreenElement]);
            }
        },
        element: {
            enumerable: true,
            get: function get() {
                return document[fn.fullscreenElement];
            }
        },
        isEnabled: {
            enumerable: true,
            get: function get() {
                // Coerce to boolean in case of old WebKit
                return Boolean(document[fn.fullscreenEnabled]);
            }
        }
    });
    return screenfull;
}
/** @typedef {import('./timing-src-connector.types').PlayerControls} PlayerControls */ /** @typedef {import('timing-object').ITimingObject} TimingObject */ /** @typedef {import('./timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions */ /** @typedef {(msg: string) => any} Logger */ /** @typedef {import('timing-object').TConnectionState} TConnectionState */ /**
 * @type {TimingSrcConnectorOptions}
 *
 * For details on these properties and their effects, see the typescript definition referenced above.
 */ var defaultOptions = {
    role: 'viewer',
    autoPlayMuted: true,
    allowedDrift: 0.3,
    maxAllowedDrift: 1,
    minCheckInterval: 0.1,
    maxRateAdjustment: 0.2,
    maxTimeToCatchUp: 1
};
/**
 * There's a proposed W3C spec for the Timing Object which would introduce a new set of APIs that would simplify time-synchronization tasks for browser applications.
 *
 * Proposed spec: https://webtiming.github.io/timingobject/
 * V3 Spec: https://timingsrc.readthedocs.io/en/latest/
 * Demuxed talk: https://www.youtube.com/watch?v=cZSjDaGDmX8
 *
 * This class makes it easy to connect Vimeo.Player to a provided TimingObject via Vimeo.Player.setTimingSrc(myTimingObject, options) and the synchronization will be handled automatically.
 *
 * There are 5 general responsibilities in TimingSrcConnector:
 *
 * 1. `updatePlayer()` which sets the player's currentTime, playbackRate and pause/play state based on current state of the TimingObject.
 * 2. `updateTimingObject()` which sets the TimingObject's position and velocity from the player's state.
 * 3. `playerUpdater` which listens for change events on the TimingObject and will respond by calling updatePlayer.
 * 4. `timingObjectUpdater` which listens to the player events of seeked, play and pause and will respond by calling `updateTimingObject()`.
 * 5. `maintainPlaybackPosition` this is code that constantly monitors the player to make sure it's always in sync with the TimingObject. This is needed because videos will generally not play with precise time accuracy and there will be some drift which becomes more noticeable over longer periods (as noted in the timing-object spec). More details on this method below.
 */ var TimingSrcConnector = /*#__PURE__*/ function(_EventTarget) {
    _inherits(TimingSrcConnector, _EventTarget);
    var _super = _createSuper(TimingSrcConnector);
    /**
   * @param {PlayerControls} player
   * @param {TimingObject} timingObject
   * @param {TimingSrcConnectorOptions} options
   * @param {Logger} logger
   */ function TimingSrcConnector(_player, timingObject) {
        var _this;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var logger = arguments.length > 3 ? arguments[3] : undefined;
        _classCallCheck(this, TimingSrcConnector);
        _this = _super.call(this);
        _defineProperty(_assertThisInitialized(_this), "logger", void 0);
        _defineProperty(_assertThisInitialized(_this), "speedAdjustment", 0);
        /**
     * @param {PlayerControls} player
     * @param {number} newAdjustment
     * @return {Promise<void>}
     */ _defineProperty(_assertThisInitialized(_this), "adjustSpeed", /*#__PURE__*/ function() {
            var _ref = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee(player, newAdjustment) {
                var newPlaybackRate;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while(true)switch(_context.prev = _context.next){
                        case 0:
                            if (!(_this.speedAdjustment === newAdjustment)) {
                                _context.next = 2;
                                break;
                            }
                            return _context.abrupt("return");
                        case 2:
                            _context.next = 4;
                            return player.getPlaybackRate();
                        case 4:
                            _context.t0 = _context.sent;
                            _context.t1 = _this.speedAdjustment;
                            _context.t2 = _context.t0 - _context.t1;
                            _context.t3 = newAdjustment;
                            newPlaybackRate = _context.t2 + _context.t3;
                            _this.log("New playbackRate:  ".concat(newPlaybackRate));
                            _context.next = 12;
                            return player.setPlaybackRate(newPlaybackRate);
                        case 12:
                            _this.speedAdjustment = newAdjustment;
                        case 13:
                        case "end":
                            return _context.stop();
                    }
                }, _callee);
            }));
            return function(_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }());
        _this.logger = logger;
        _this.init(timingObject, _player, _objectSpread2(_objectSpread2({}, defaultOptions), options));
        return _this;
    }
    _createClass(TimingSrcConnector, [
        {
            key: "disconnect",
            value: function disconnect() {
                this.dispatchEvent(new Event('disconnect'));
            }
        },
        {
            key: "init",
            value: function() {
                var _init = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(timingObject, player, options) {
                    var _this2 = this;
                    var playerUpdater, positionSync, timingObjectUpdater;
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                        while(true)switch(_context2.prev = _context2.next){
                            case 0:
                                _context2.next = 2;
                                return this.waitForTOReadyState(timingObject, 'open');
                            case 2:
                                if (!(options.role === 'viewer')) {
                                    _context2.next = 10;
                                    break;
                                }
                                _context2.next = 5;
                                return this.updatePlayer(timingObject, player, options);
                            case 5:
                                playerUpdater = subscribe(timingObject, 'change', function() {
                                    return _this2.updatePlayer(timingObject, player, options);
                                });
                                positionSync = this.maintainPlaybackPosition(timingObject, player, options);
                                this.addEventListener('disconnect', function() {
                                    positionSync.cancel();
                                    playerUpdater.cancel();
                                });
                                _context2.next = 14;
                                break;
                            case 10:
                                _context2.next = 12;
                                return this.updateTimingObject(timingObject, player);
                            case 12:
                                timingObjectUpdater = subscribe(player, [
                                    'seeked',
                                    'play',
                                    'pause',
                                    'ratechange'
                                ], function() {
                                    return _this2.updateTimingObject(timingObject, player);
                                }, 'on', 'off');
                                this.addEventListener('disconnect', function() {
                                    return timingObjectUpdater.cancel();
                                });
                            case 14:
                            case "end":
                                return _context2.stop();
                        }
                    }, _callee2, this);
                }));
                function init(_x3, _x4, _x5) {
                    return _init.apply(this, arguments);
                }
                return init;
            }()
        },
        {
            key: "updateTimingObject",
            value: function() {
                var _updateTimingObject = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(timingObject, player) {
                    var _yield$Promise$all, _yield$Promise$all2, position, isPaused, playbackRate;
                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                        while(true)switch(_context3.prev = _context3.next){
                            case 0:
                                _context3.next = 2;
                                return Promise.all([
                                    player.getCurrentTime(),
                                    player.getPaused(),
                                    player.getPlaybackRate()
                                ]);
                            case 2:
                                _yield$Promise$all = _context3.sent;
                                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
                                position = _yield$Promise$all2[0];
                                isPaused = _yield$Promise$all2[1];
                                playbackRate = _yield$Promise$all2[2];
                                timingObject.update({
                                    position: position,
                                    velocity: isPaused ? 0 : playbackRate
                                });
                            case 8:
                            case "end":
                                return _context3.stop();
                        }
                    }, _callee3);
                }));
                function updateTimingObject(_x6, _x7) {
                    return _updateTimingObject.apply(this, arguments);
                }
                return updateTimingObject;
            }()
        },
        {
            key: "updatePlayer",
            value: function() {
                var _updatePlayer = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee5(timingObject, player, options) {
                    var _timingObject$query, position, velocity;
                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                        while(true)switch(_context5.prev = _context5.next){
                            case 0:
                                _timingObject$query = timingObject.query(), position = _timingObject$query.position, velocity = _timingObject$query.velocity;
                                if (typeof position === 'number') player.setCurrentTime(position);
                                if (!(typeof velocity === 'number')) {
                                    _context5.next = 25;
                                    break;
                                }
                                if (!(velocity === 0)) {
                                    _context5.next = 11;
                                    break;
                                }
                                _context5.next = 6;
                                return player.getPaused();
                            case 6:
                                _context5.t0 = _context5.sent;
                                if (!(_context5.t0 === false)) {
                                    _context5.next = 9;
                                    break;
                                }
                                player.pause();
                            case 9:
                                _context5.next = 25;
                                break;
                            case 11:
                                if (!(velocity > 0)) {
                                    _context5.next = 25;
                                    break;
                                }
                                _context5.next = 14;
                                return player.getPaused();
                            case 14:
                                _context5.t1 = _context5.sent;
                                if (!(_context5.t1 === true)) {
                                    _context5.next = 19;
                                    break;
                                }
                                _context5.next = 18;
                                return player.play().catch(/*#__PURE__*/ function() {
                                    var _ref2 = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee4(err) {
                                        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                                            while(true)switch(_context4.prev = _context4.next){
                                                case 0:
                                                    if (!(err.name === 'NotAllowedError' && options.autoPlayMuted)) {
                                                        _context4.next = 5;
                                                        break;
                                                    }
                                                    _context4.next = 3;
                                                    return player.setMuted(true);
                                                case 3:
                                                    _context4.next = 5;
                                                    return player.play().catch(function(err2) {
                                                        return console.error('Couldn\'t play the video from TimingSrcConnector. Error:', err2);
                                                    });
                                                case 5:
                                                case "end":
                                                    return _context4.stop();
                                            }
                                        }, _callee4);
                                    }));
                                    return function(_x11) {
                                        return _ref2.apply(this, arguments);
                                    };
                                }());
                            case 18:
                                this.updatePlayer(timingObject, player, options);
                            case 19:
                                _context5.next = 21;
                                return player.getPlaybackRate();
                            case 21:
                                _context5.t2 = _context5.sent;
                                _context5.t3 = velocity;
                                if (!(_context5.t2 !== _context5.t3)) {
                                    _context5.next = 25;
                                    break;
                                }
                                player.setPlaybackRate(velocity);
                            case 25:
                            case "end":
                                return _context5.stop();
                        }
                    }, _callee5, this);
                }));
                function updatePlayer(_x8, _x9, _x10) {
                    return _updatePlayer.apply(this, arguments);
                }
                return updatePlayer;
            }()
        },
        {
            key: "maintainPlaybackPosition",
            value: function maintainPlaybackPosition(timingObject, player, options) {
                var _this3 = this;
                var allowedDrift = options.allowedDrift, maxAllowedDrift = options.maxAllowedDrift, minCheckInterval = options.minCheckInterval, maxRateAdjustment = options.maxRateAdjustment, maxTimeToCatchUp = options.maxTimeToCatchUp;
                var syncInterval = Math.min(maxTimeToCatchUp, Math.max(minCheckInterval, maxAllowedDrift)) * 1000;
                var check = /*#__PURE__*/ function() {
                    var _ref3 = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee6() {
                        var diff, diffAbs, min, max, adjustment;
                        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                            while(true)switch(_context6.prev = _context6.next){
                                case 0:
                                    _context6.t0 = timingObject.query().velocity === 0;
                                    if (_context6.t0) {
                                        _context6.next = 6;
                                        break;
                                    }
                                    _context6.next = 4;
                                    return player.getPaused();
                                case 4:
                                    _context6.t1 = _context6.sent;
                                    _context6.t0 = _context6.t1 === true;
                                case 6:
                                    if (!_context6.t0) {
                                        _context6.next = 8;
                                        break;
                                    }
                                    return _context6.abrupt("return");
                                case 8:
                                    _context6.t2 = timingObject.query().position;
                                    _context6.next = 11;
                                    return player.getCurrentTime();
                                case 11:
                                    _context6.t3 = _context6.sent;
                                    diff = _context6.t2 - _context6.t3;
                                    diffAbs = Math.abs(diff);
                                    _this3.log("Drift: ".concat(diff));
                                    if (!(diffAbs > maxAllowedDrift)) {
                                        _context6.next = 22;
                                        break;
                                    }
                                    _context6.next = 18;
                                    return _this3.adjustSpeed(player, 0);
                                case 18:
                                    player.setCurrentTime(timingObject.query().position);
                                    _this3.log('Resync by currentTime');
                                    _context6.next = 29;
                                    break;
                                case 22:
                                    if (!(diffAbs > allowedDrift)) {
                                        _context6.next = 29;
                                        break;
                                    }
                                    min = diffAbs / maxTimeToCatchUp;
                                    max = maxRateAdjustment;
                                    adjustment = min < max ? (max - min) / 2 : max;
                                    _context6.next = 28;
                                    return _this3.adjustSpeed(player, adjustment * Math.sign(diff));
                                case 28:
                                    _this3.log('Resync by playbackRate');
                                case 29:
                                case "end":
                                    return _context6.stop();
                            }
                        }, _callee6);
                    }));
                    return function check() {
                        return _ref3.apply(this, arguments);
                    };
                }();
                var interval = setInterval(function() {
                    return check();
                }, syncInterval);
                return {
                    cancel: function cancel() {
                        return clearInterval(interval);
                    }
                };
            }
        },
        {
            key: "log",
            value: function log(msg) {
                var _this$logger;
                (_this$logger = this.logger) === null || _this$logger === void 0 || _this$logger.call(this, "TimingSrcConnector: ".concat(msg));
            }
        },
        {
            key: "waitForTOReadyState",
            value: /**
     * @param {TimingObject} timingObject
     * @param {TConnectionState} state
     * @return {Promise<void>}
     */ function waitForTOReadyState(timingObject, state) {
                return new Promise(function(resolve) {
                    var check = function check() {
                        if (timingObject.readyState === state) resolve();
                        else timingObject.addEventListener('readystatechange', check, {
                            once: true
                        });
                    };
                    check();
                });
            }
        }
    ]);
    return TimingSrcConnector;
}(/*#__PURE__*/ _wrapNativeSuper(EventTarget));
var playerMap = new WeakMap();
var readyMap = new WeakMap();
var screenfull = {};
var Player = /*#__PURE__*/ function() {
    /**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */ function Player(element) {
        var _this = this;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        _classCallCheck(this, Player);
        /* global jQuery */ if (window.jQuery && element instanceof jQuery) {
            if (element.length > 1 && window.console && console.warn) console.warn('A jQuery object with multiple elements was passed, using the first element.');
            element = element[0];
        }
        // Find an element by ID
        if (typeof document !== 'undefined' && typeof element === 'string') element = document.getElementById(element);
        // Not an element!
        if (!isDomElement(element)) throw new TypeError('You must pass either a valid element or a valid id.');
        // Already initialized an embed in this div, so grab the iframe
        if (element.nodeName !== 'IFRAME') {
            var iframe = element.querySelector('iframe');
            if (iframe) element = iframe;
        }
        // iframe url is not a Vimeo url
        if (element.nodeName === 'IFRAME' && !isVimeoUrl(element.getAttribute('src') || '')) throw new Error("The player element passed isn\u2019t a Vimeo embed.");
        // If there is already a player object in the map, return that
        if (playerMap.has(element)) return playerMap.get(element);
        this._window = element.ownerDocument.defaultView;
        this.element = element;
        this.origin = '*';
        var readyPromise = new npo_src(function(resolve, reject) {
            _this._onMessage = function(event) {
                if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) return;
                if (_this.origin === '*') _this.origin = event.origin;
                var data = parseMessageData(event.data);
                var isError = data && data.event === 'error';
                var isReadyError = isError && data.data && data.data.method === 'ready';
                if (isReadyError) {
                    var error = new Error(data.data.message);
                    error.name = data.data.name;
                    reject(error);
                    return;
                }
                var isReadyEvent = data && data.event === 'ready';
                var isPingResponse = data && data.method === 'ping';
                if (isReadyEvent || isPingResponse) {
                    _this.element.setAttribute('data-ready', 'true');
                    resolve();
                    return;
                }
                processData(_this, data);
            };
            _this._window.addEventListener('message', _this._onMessage);
            if (_this.element.nodeName !== 'IFRAME') {
                var params = getOEmbedParameters(element, options);
                var url = getVimeoUrl(params);
                getOEmbedData(url, params, element).then(function(data) {
                    var iframe = createEmbed(data, element);
                    // Overwrite element with the new iframe,
                    // but store reference to the original element
                    _this.element = iframe;
                    _this._originalElement = element;
                    swapCallbacks(element, iframe);
                    playerMap.set(_this.element, _this);
                    return data;
                }).catch(reject);
            }
        });
        // Store a copy of this Player in the map
        readyMap.set(this, readyPromise);
        playerMap.set(this.element, this);
        // Send a ping to the iframe so the ready promise will be resolved if
        // the player is already ready.
        if (this.element.nodeName === 'IFRAME') postMessage(this, 'ping');
        if (screenfull.isEnabled) {
            var exitFullscreen = function exitFullscreen() {
                return screenfull.exit();
            };
            this.fullscreenchangeHandler = function() {
                if (screenfull.isFullscreen) storeCallback(_this, 'event:exitFullscreen', exitFullscreen);
                else removeCallback(_this, 'event:exitFullscreen', exitFullscreen);
                // eslint-disable-next-line
                _this.ready().then(function() {
                    postMessage(_this, 'fullscreenchange', screenfull.isFullscreen);
                });
            };
            screenfull.on('fullscreenchange', this.fullscreenchangeHandler);
        }
        return this;
    }
    /**
   * Check to see if the URL is a Vimeo URL.
   *
   * @param {string} url The URL string.
   * @return {boolean}
   */ _createClass(Player, [
        {
            key: "callMethod",
            value: /**
     * Get a promise for a method.
     *
     * @param {string} name The API method to call.
     * @param {...(string|number|object|Array)} args Arguments to send via postMessage.
     * @return {Promise}
     */ function callMethod(name) {
                var _this2 = this;
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
                if (name === undefined || name === null) throw new TypeError('You must pass a method name.');
                return new npo_src(function(resolve, reject) {
                    // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    return _this2.ready().then(function() {
                        storeCallback(_this2, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        if (args.length === 0) args = {};
                        else if (args.length === 1) args = args[0];
                        postMessage(_this2, name, args);
                    }).catch(reject);
                });
            }
        },
        {
            key: "get",
            value: function get(name) {
                var _this3 = this;
                return new npo_src(function(resolve, reject) {
                    name = getMethodName(name, 'get');
                    // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    return _this3.ready().then(function() {
                        storeCallback(_this3, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        postMessage(_this3, name);
                    }).catch(reject);
                });
            }
        },
        {
            key: "set",
            value: function set(name, value) {
                var _this4 = this;
                return new npo_src(function(resolve, reject) {
                    name = getMethodName(name, 'set');
                    if (value === undefined || value === null) throw new TypeError('There must be a value to set.');
                    // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    return _this4.ready().then(function() {
                        storeCallback(_this4, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        postMessage(_this4, name, value);
                    }).catch(reject);
                });
            }
        },
        {
            key: "on",
            value: function on(eventName, callback) {
                if (!eventName) throw new TypeError('You must pass an event name.');
                if (!callback) throw new TypeError('You must pass a callback function.');
                if (typeof callback !== 'function') throw new TypeError('The callback must be a function.');
                var callbacks = getCallbacks(this, "event:".concat(eventName));
                if (callbacks.length === 0) this.callMethod('addEventListener', eventName).catch(function() {
                // Ignore the error. There will be an error event fired that
                // will trigger the error callback if they are listening.
                });
                storeCallback(this, "event:".concat(eventName), callback);
            }
        },
        {
            key: "off",
            value: function off(eventName, callback) {
                if (!eventName) throw new TypeError('You must pass an event name.');
                if (callback && typeof callback !== 'function') throw new TypeError('The callback must be a function.');
                var lastCallback = removeCallback(this, "event:".concat(eventName), callback);
                // If there are no callbacks left, remove the listener
                if (lastCallback) this.callMethod('removeEventListener', eventName).catch(function(e) {
                // Ignore the error. There will be an error event fired that
                // will trigger the error callback if they are listening.
                });
            }
        },
        {
            key: "loadVideo",
            value: function loadVideo(options) {
                return this.callMethod('loadVideo', options);
            }
        },
        {
            key: "ready",
            value: function ready() {
                var readyPromise = readyMap.get(this) || new npo_src(function(resolve, reject) {
                    reject(new Error('Unknown player. Probably unloaded.'));
                });
                return npo_src.resolve(readyPromise);
            }
        },
        {
            key: "addCuePoint",
            value: function addCuePoint(time) {
                var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.callMethod('addCuePoint', {
                    time: time,
                    data: data
                });
            }
        },
        {
            key: "removeCuePoint",
            value: function removeCuePoint(id) {
                return this.callMethod('removeCuePoint', id);
            }
        },
        {
            key: "enableTextTrack",
            value: function enableTextTrack(language) {
                var kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var showing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                if (!language) throw new TypeError('You must pass a language.');
                return this.callMethod('enableTextTrack', {
                    language: language,
                    kind: kind,
                    showing: showing
                });
            }
        },
        {
            key: "disableTextTrack",
            value: function disableTextTrack() {
                return this.callMethod('disableTextTrack');
            }
        },
        {
            key: "selectAudioTrack",
            value: function selectAudioTrack(language, kind) {
                if (!language) throw new TypeError('You must pass a language.');
                return this.callMethod('selectAudioTrack', {
                    language: language,
                    kind: kind
                });
            }
        },
        {
            key: "selectDefaultAudioTrack",
            value: function selectDefaultAudioTrack() {
                return this.callMethod('selectDefaultAudioTrack');
            }
        },
        {
            key: "pause",
            value: function pause() {
                return this.callMethod('pause');
            }
        },
        {
            key: "play",
            value: function play() {
                return this.callMethod('play');
            }
        },
        {
            key: "requestFullscreen",
            value: function requestFullscreen() {
                if (screenfull.isEnabled) return screenfull.request(this.element);
                return this.callMethod('requestFullscreen');
            }
        },
        {
            key: "exitFullscreen",
            value: function exitFullscreen() {
                if (screenfull.isEnabled) return screenfull.exit();
                return this.callMethod('exitFullscreen');
            }
        },
        {
            key: "getFullscreen",
            value: function getFullscreen() {
                if (screenfull.isEnabled) return npo_src.resolve(screenfull.isFullscreen);
                return this.get('fullscreen');
            }
        },
        {
            key: "requestPictureInPicture",
            value: function requestPictureInPicture() {
                return this.callMethod('requestPictureInPicture');
            }
        },
        {
            key: "exitPictureInPicture",
            value: function exitPictureInPicture() {
                return this.callMethod('exitPictureInPicture');
            }
        },
        {
            key: "getPictureInPicture",
            value: function getPictureInPicture() {
                return this.get('pictureInPicture');
            }
        },
        {
            key: "remotePlaybackPrompt",
            value: function remotePlaybackPrompt() {
                return this.callMethod('remotePlaybackPrompt');
            }
        },
        {
            key: "unload",
            value: function unload() {
                return this.callMethod('unload');
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this5 = this;
                return new npo_src(function(resolve) {
                    readyMap.delete(_this5);
                    playerMap.delete(_this5.element);
                    if (_this5._originalElement) {
                        playerMap.delete(_this5._originalElement);
                        _this5._originalElement.removeAttribute('data-vimeo-initialized');
                    }
                    if (_this5.element && _this5.element.nodeName === 'IFRAME' && _this5.element.parentNode) {
                        // If we've added an additional wrapper div, remove that from the DOM.
                        // If not, just remove the iframe element.
                        if (_this5.element.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== _this5.element.parentNode) _this5.element.parentNode.parentNode.removeChild(_this5.element.parentNode);
                        else _this5.element.parentNode.removeChild(_this5.element);
                    }
                    // If the clip is private there is a case where the element stays the
                    // div element. Destroy should reset the div and remove the iframe child.
                    if (_this5.element && _this5.element.nodeName === 'DIV' && _this5.element.parentNode) {
                        _this5.element.removeAttribute('data-vimeo-initialized');
                        var iframe = _this5.element.querySelector('iframe');
                        if (iframe && iframe.parentNode) {
                            // If we've added an additional wrapper div, remove that from the DOM.
                            // If not, just remove the iframe element.
                            if (iframe.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== iframe.parentNode) iframe.parentNode.parentNode.removeChild(iframe.parentNode);
                            else iframe.parentNode.removeChild(iframe);
                        }
                    }
                    _this5._window.removeEventListener('message', _this5._onMessage);
                    if (screenfull.isEnabled) screenfull.off('fullscreenchange', _this5.fullscreenchangeHandler);
                    resolve();
                });
            }
        },
        {
            key: "getAutopause",
            value: function getAutopause() {
                return this.get('autopause');
            }
        },
        {
            key: "setAutopause",
            value: function setAutopause(autopause) {
                return this.set('autopause', autopause);
            }
        },
        {
            key: "getBuffered",
            value: function getBuffered() {
                return this.get('buffered');
            }
        },
        {
            key: "getCameraProps",
            value: function getCameraProps() {
                return this.get('cameraProps');
            }
        },
        {
            key: "setCameraProps",
            value: function setCameraProps(camera) {
                return this.set('cameraProps', camera);
            }
        },
        {
            key: "getChapters",
            value: function getChapters() {
                return this.get('chapters');
            }
        },
        {
            key: "getCurrentChapter",
            value: function getCurrentChapter() {
                return this.get('currentChapter');
            }
        },
        {
            key: "getColor",
            value: function getColor() {
                return this.get('color');
            }
        },
        {
            key: "getColors",
            value: function getColors() {
                return npo_src.all([
                    this.get('colorOne'),
                    this.get('colorTwo'),
                    this.get('colorThree'),
                    this.get('colorFour')
                ]);
            }
        },
        {
            key: "setColor",
            value: function setColor(color) {
                return this.set('color', color);
            }
        },
        {
            key: "setColors",
            value: function setColors(colors) {
                if (!Array.isArray(colors)) return new npo_src(function(resolve, reject) {
                    return reject(new TypeError('Argument must be an array.'));
                });
                var nullPromise = new npo_src(function(resolve) {
                    return resolve(null);
                });
                var colorPromises = [
                    colors[0] ? this.set('colorOne', colors[0]) : nullPromise,
                    colors[1] ? this.set('colorTwo', colors[1]) : nullPromise,
                    colors[2] ? this.set('colorThree', colors[2]) : nullPromise,
                    colors[3] ? this.set('colorFour', colors[3]) : nullPromise
                ];
                return npo_src.all(colorPromises);
            }
        },
        {
            key: "getCuePoints",
            value: function getCuePoints() {
                return this.get('cuePoints');
            }
        },
        {
            key: "getCurrentTime",
            value: function getCurrentTime() {
                return this.get('currentTime');
            }
        },
        {
            key: "setCurrentTime",
            value: function setCurrentTime(currentTime) {
                return this.set('currentTime', currentTime);
            }
        },
        {
            key: "getDuration",
            value: function getDuration() {
                return this.get('duration');
            }
        },
        {
            key: "getEnded",
            value: function getEnded() {
                return this.get('ended');
            }
        },
        {
            key: "getLoop",
            value: function getLoop() {
                return this.get('loop');
            }
        },
        {
            key: "setLoop",
            value: function setLoop(loop) {
                return this.set('loop', loop);
            }
        },
        {
            key: "setMuted",
            value: function setMuted(muted) {
                return this.set('muted', muted);
            }
        },
        {
            key: "getMuted",
            value: function getMuted() {
                return this.get('muted');
            }
        },
        {
            key: "getPaused",
            value: function getPaused() {
                return this.get('paused');
            }
        },
        {
            key: "getPlaybackRate",
            value: function getPlaybackRate() {
                return this.get('playbackRate');
            }
        },
        {
            key: "setPlaybackRate",
            value: function setPlaybackRate(playbackRate) {
                return this.set('playbackRate', playbackRate);
            }
        },
        {
            key: "getPlayed",
            value: function getPlayed() {
                return this.get('played');
            }
        },
        {
            key: "getQualities",
            value: function getQualities() {
                return this.get('qualities');
            }
        },
        {
            key: "getQuality",
            value: function getQuality() {
                return this.get('quality');
            }
        },
        {
            key: "setQuality",
            value: function setQuality(quality) {
                return this.set('quality', quality);
            }
        },
        {
            key: "getRemotePlaybackAvailability",
            value: function getRemotePlaybackAvailability() {
                return this.get('remotePlaybackAvailability');
            }
        },
        {
            key: "getRemotePlaybackState",
            value: function getRemotePlaybackState() {
                return this.get('remotePlaybackState');
            }
        },
        {
            key: "getSeekable",
            value: function getSeekable() {
                return this.get('seekable');
            }
        },
        {
            key: "getSeeking",
            value: function getSeeking() {
                return this.get('seeking');
            }
        },
        {
            key: "getTextTracks",
            value: function getTextTracks() {
                return this.get('textTracks');
            }
        },
        {
            key: "getAudioTracks",
            value: function getAudioTracks() {
                return this.get('audioTracks');
            }
        },
        {
            key: "getEnabledAudioTrack",
            value: function getEnabledAudioTrack() {
                return this.get('enabledAudioTrack');
            }
        },
        {
            key: "getDefaultAudioTrack",
            value: function getDefaultAudioTrack() {
                return this.get('defaultAudioTrack');
            }
        },
        {
            key: "getVideoEmbedCode",
            value: function getVideoEmbedCode() {
                return this.get('videoEmbedCode');
            }
        },
        {
            key: "getVideoId",
            value: function getVideoId() {
                return this.get('videoId');
            }
        },
        {
            key: "getVideoTitle",
            value: function getVideoTitle() {
                return this.get('videoTitle');
            }
        },
        {
            key: "getVideoWidth",
            value: function getVideoWidth() {
                return this.get('videoWidth');
            }
        },
        {
            key: "getVideoHeight",
            value: function getVideoHeight() {
                return this.get('videoHeight');
            }
        },
        {
            key: "getVideoUrl",
            value: function getVideoUrl() {
                return this.get('videoUrl');
            }
        },
        {
            key: "getVolume",
            value: function getVolume() {
                return this.get('volume');
            }
        },
        {
            key: "setVolume",
            value: function setVolume(volume) {
                return this.set('volume', volume);
            }
        },
        {
            key: "setTimingSrc",
            value: function() {
                var _setTimingSrc = _asyncToGenerator(/*#__PURE__*/ _regeneratorRuntime().mark(function _callee(timingObject, options) {
                    var _this6 = this;
                    var connector;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while(true)switch(_context.prev = _context.next){
                            case 0:
                                if (timingObject) {
                                    _context.next = 2;
                                    break;
                                }
                                throw new TypeError('A Timing Object must be provided.');
                            case 2:
                                _context.next = 4;
                                return this.ready();
                            case 4:
                                connector = new TimingSrcConnector(this, timingObject, options);
                                postMessage(this, 'notifyTimingObjectConnect');
                                connector.addEventListener('disconnect', function() {
                                    return postMessage(_this6, 'notifyTimingObjectDisconnect');
                                });
                                return _context.abrupt("return", connector);
                            case 8:
                            case "end":
                                return _context.stop();
                        }
                    }, _callee, this);
                }));
                function setTimingSrc(_x, _x2) {
                    return _setTimingSrc.apply(this, arguments);
                }
                return setTimingSrc;
            }()
        }
    ], [
        {
            key: "isVimeoUrl",
            value: function isVimeoUrl$1(url) {
                return isVimeoUrl(url);
            }
        }
    ]);
    return Player;
}(); // Setup embed only if this is not a server runtime
if (!isServerRuntime) {
    screenfull = initializeScreenfull();
    initializeEmbeds();
    resizeEmbeds();
    initAppendVideoMetadata();
    checkUrlTimeParam();
    updateDRMEmbeds();
}
exports.default = Player;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"ddxgX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const init100vhMobileFix = ()=>{
    // Set vh variable
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};
exports.default = init100vhMobileFix;
window.addEventListener('resize', init100vhMobileFix);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"fcn3C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const init404 = ()=>{
    // Get 404 container
    const notFoundContainer = document.querySelectorAll('.block-error-404');
    // If container is not found, do not continue with init
    if (!notFoundContainer) return;
    function keyAction(e) {
        if ((e.which || e.keyCode) === 116) {
            e.preventDefault();
            // eslint-disable-next-line camelcase, no-undef
            window.location.href = dude_screenReaderText.homeurl;
        }
    }
    document.addEventListener('keydown', keyAction);
};
exports.default = init404;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"5uM78":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _moveto = require("moveto");
var _movetoDefault = parcelHelpers.interopDefault(_moveto);
const initSwupHelpers = ()=>{
    // Always move scroll position to up when clicking a link
    const moveToSwup = new (0, _movetoDefault.default)({
        tolerance: 0,
        duration: 0,
        easing: 'easeOutQuart',
        container: window
    });
    const target = document.getElementById('page');
    moveToSwup.move(target);
};
exports.default = initSwupHelpers;

},{"moveto":"cphqU","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"8ih9q":[function(require,module,exports,__globalThis) {
/* eslint-disable camelcase, no-unused-vars, no-undef, func-names, no-param-reassign */ /**
 * @Author: Roni Laukkarinen
 * @Date:   2022-08-09 18:01:38
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-12 15:05:50
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const initFormHelpers = ()=>{
    // Find all form triggers
    const formTriggers = document.querySelectorAll('#wpforms-form-11358 .wpforms-conditional-trigger');
    if (typeof formTriggers !== 'undefined') // Loop through
    formTriggers.forEach((formTrigger)=>{
        // When trigger is clicked
        formTrigger.addEventListener('click', ()=>{
            // Find first label inside form trigger
            const formTriggerLabel = formTrigger.querySelectorAll('.wpforms-field-label-inline')[0];
            if (formTrigger.nextSibling.classList.contains('wpforms-conditional-hide')) {
                formTriggerLabel.innerHTML = "Haluan kertoa v\xe4hemm\xe4n";
                formTrigger.parentNode.parentNode.parentNode.classList.add('is-open');
            } else {
                formTriggerLabel.innerHTML = 'Haluan kertoa tarkemmin';
                formTrigger.parentNode.parentNode.parentNode.classList.remove('is-open');
            }
        });
    });
};
exports.default = initFormHelpers;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"bp0dL":[function(require,module,exports,__globalThis) {
/**
 * @Author: Roni Laukkarinen
 * @Date:   2022-05-12 17:32:43
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2022-10-12 15:06:27
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _moveto = require("moveto");
var _movetoDefault = parcelHelpers.interopDefault(_moveto);
const initA11ySkipLink = ()=>{
    // Go through all the headings of the page and select the first one
    const a11ySkipLinkTarget = document.querySelectorAll('h1, h2, h3, h4, h5, h6')[0];
    const a11ySkipLink = document.querySelectorAll('.skip-link')[0];
    // Register trigger element
    // eslint-disable-next-line no-unused-vars, no-restricted-globals
    const moveTo = new (0, _movetoDefault.default)();
    // When clicked, move focus to the target element
    if (a11ySkipLink) a11ySkipLink.addEventListener('click', ()=>{
        a11ySkipLinkTarget.setAttribute('tabindex', '-1');
        a11ySkipLinkTarget.focus();
        moveTo.move(a11ySkipLinkTarget);
    });
};
exports.default = initA11ySkipLink;

},{"moveto":"cphqU","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"4v9Yg":[function(require,module,exports,__globalThis) {
/* eslint-disable no-plusplus, brace-style, max-len */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const initUpKeepLanding = ()=>{
    // Check if elements exist before proceeding
    const carousel = document.getElementById('carousel');
    const track = document.getElementById('carousel-track');
    if (!carousel || !track) return;
    // Add hardware acceleration hints for smoother animation
    track.style.willChange = 'transform';
    track.style.backfaceVisibility = 'hidden';
    track.style.webkitBackfaceVisibility = 'hidden';
    track.style.perspective = '1000px';
    track.style.webkitPerspective = '1000px';
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    // Calculate duration based on number of items
    const originalItems = Array.from(track.children).filter((item)=>!item.classList.contains('clone'));
    const itemCount = originalItems.length;
    // Base duration of 30s for 10 items, scale up for more items
    const duration = Math.max(30, Math.round(itemCount / 10 * 30));
    // Create and add styles
    const style = document.createElement('style');
    style.textContent = `
    #carousel {
      overflow: hidden;
      width: 100%;
      position: relative;
    }

    #carousel-track {
      display: flex;
      gap: 70px;
      width: fit-content;
      position: relative;
      transform: translate3d(0, 0, 0);
      -webkit-transform: translate3d(0, 0, 0);
      will-change: transform;
      backface-visibility: hidden;
      -webkit-backface-visibility: hidden;
      perspective: 1000px;
      -webkit-perspective: 1000px;
    }

    #carousel-track[data-animated="true"] {
      animation: scroll ${duration}s linear infinite;
      -webkit-animation: scroll ${duration}s linear infinite;
    }

    #carousel-track.paused {
      animation-play-state: paused;
      -webkit-animation-play-state: paused;
    }

    @keyframes scroll {
      0% {
        transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
      }
      100% {
        transform: translate3d(-50%, 0, 0);
        -webkit-transform: translate3d(-50%, 0, 0);
      }
    }

    @media (max-width: 768px) {
      #carousel-track {
        gap: 40px;
      }
    }
  `;
    document.head.appendChild(style);
    // Function to handle carousel animation state
    const handleCarouselState = (shouldReduce)=>{
        if (shouldReduce) {
            track.removeAttribute('data-animated');
            const clonedItems = track.querySelectorAll('.clone');
            clonedItems.forEach((item)=>item.remove());
        } else {
            track.setAttribute('data-animated', true);
            // Clear any existing clones
            const existingClones = track.querySelectorAll('.clone');
            existingClones.forEach((clone)=>clone.remove());
            // Clone original items
            Array.from(track.children).filter((item)=>!item.classList.contains('clone')).forEach((item)=>{
                const clone = item.cloneNode(true);
                clone.setAttribute('aria-hidden', true);
                clone.classList.add('clone');
                track.appendChild(clone);
            });
        }
    };
    // Initial setup
    handleCarouselState(prefersReducedMotion.matches);
    // Listen for preference changes
    prefersReducedMotion.addEventListener('change', (e)=>handleCarouselState(e.matches));
    // Add pause on hover
    carousel.addEventListener('mouseenter', ()=>{
        track.classList.add('paused');
    });
    carousel.addEventListener('mouseleave', ()=>{
        track.classList.remove('paused');
    });
    // Cleanup on page unload/destroy
    const cleanup = ()=>{
        style.remove();
        prefersReducedMotion.removeEventListener('change', handleCarouselState);
    };
    window.addEventListener('unload', cleanup);
    window.addEventListener('beforeunload', cleanup);
};
// Auto-initialize when loaded for iOS Safari
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initUpKeepLanding);
else // If already loaded, initialize immediately
initUpKeepLanding();
// Expose the function globally
window.initUpKeepLanding = initUpKeepLanding;
exports.default = initUpKeepLanding;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"fubJG":[function(require,module,exports,__globalThis) {
/* eslint-disable no-unused-vars, no-continue, max-len, no-param-reassign, no-use-before-define, implicit-arrow-linebreak, no-shadow, wrap-iife, func-names, no-plusplus */ /**
 * Reference filtering functionality
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const initReferenceFilters = ()=>{
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
    const parseQueryParams = function(queryString) {
        const params = {};
        if (!queryString) return params;
        const query = queryString.charAt(0) === '?' ? queryString.slice(1) : queryString;
        if (!query) return params;
        const pairs = query.split('&');
        for(let i = 0; i < pairs.length; i += 1){
            const pair = pairs[i];
            if (!pair) continue;
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
            if (!rawKey) continue;
            const key = decodeURIComponent(rawKey);
            const value = decodeURIComponent((rawValue || '').replace(/\+/g, ' '));
            params[key] = value;
        }
        return params;
    };
    const buildQueryString = (params)=>Object.keys(params).map((key)=>{
            const value = params[key];
            if (value === undefined || value === null || value === '') return '';
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
        }).filter(Boolean).join('&');
    // Initialize filters from URL parameters and current page
    const getFiltersFromUrl = ()=>{
        const urlParams = parseQueryParams(window.location.search);
        // Check if we're on a taxonomy archive and get the current target group
        let currentTargetGroup = 'all';
        const activeButton = document.querySelector('.filter-target-group.active');
        if (activeButton) currentTargetGroup = activeButton.dataset.value;
        // Override with URL parameters if present
        const urlTargetGroup = urlParams.toimiala;
        if (urlTargetGroup) currentTargetGroup = urlTargetGroup;
        const solutionsFromUrl = urlParams.ratkaisut ? urlParams.ratkaisut.split(',') : [
            'all'
        ];
        const searchTermFromUrl = urlParams.haku ? urlParams.haku : '';
        return {
            targetGroup: currentTargetGroup,
            solutions: solutionsFromUrl,
            searchTerm: searchTermFromUrl
        };
    };
    // State management
    let activeFilters = getFiltersFromUrl();
    // Toggle advanced filters - using document.body event delegation for iOS Safari 17.4.1+ compatibility
    if (advancedToggle && advancedContent) // Remove any existing listeners first
    document.body.addEventListener('click', (e)=>{
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
    // Target group filtering - direct event attachment for iOS Safari compatibility
    const handleTargetGroupClick = (e)=>{
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
        for(let i = 0; i < targetGroupButtons.length; i += 1){
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
    for(let i = 0; i < targetGroupButtons.length; i += 1){
        const button = targetGroupButtons[i];
        button.style.cursor = 'pointer';
        // Use closure to capture the button reference
        (function(btn) {
            btn.onclick = function() {
                handleTargetGroupClick({
                    currentTarget: btn,
                    preventDefault () {},
                    stopPropagation () {}
                });
            };
        })(button);
    }
    // Solution/category filtering with multi-select - direct attachment for iOS Safari compatibility
    const handleCheckboxChange = function(e) {
        const checkbox = e.target;
        const allCheckbox = document.querySelector('input[name="solution"][value="all"]');
        if (checkbox.value === 'all' && checkbox.checked) {
            for(let i = 0; i < solutionCheckboxes.length; i += 1){
                const cb = solutionCheckboxes[i];
                if (cb.value !== 'all') cb.checked = false;
            }
            activeFilters.solutions = [
                'all'
            ];
        } else if (checkbox.value !== 'all') {
            if (checkbox.checked) {
                if (allCheckbox) allCheckbox.checked = false;
                const allIndex = activeFilters.solutions.indexOf('all');
                if (allIndex > -1) activeFilters.solutions.splice(allIndex, 1);
                if (activeFilters.solutions.indexOf(checkbox.value) === -1) activeFilters.solutions.push(checkbox.value);
            } else {
                const index = activeFilters.solutions.indexOf(checkbox.value);
                if (index > -1) activeFilters.solutions.splice(index, 1);
                if (activeFilters.solutions.length === 0) {
                    if (allCheckbox) allCheckbox.checked = true;
                    activeFilters.solutions = [
                        'all'
                    ];
                }
            }
        }
        updateUrlAndApplyFilters();
    };
    // Attach change events directly to each checkbox for iOS Safari compatibility
    for(let i = 0; i < solutionCheckboxes.length; i += 1){
        const checkbox = solutionCheckboxes[i];
        checkbox.addEventListener('change', handleCheckboxChange);
    }
    // Search functionality with debounce
    let searchTimeout;
    if (searchInput) searchInput.addEventListener('input', ()=>{
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(()=>{
            activeFilters.searchTerm = searchInput.value.toLowerCase().trim();
            updateUrlAndApplyFilters();
        }, 300);
    });
    // Apply filters and update URL with pushState
    const updateUrlAndApplyFilters = ()=>{
        let baseUrl = currentUrl;
        const params = {};
        // Get the appropriate base URL from the target group button
        const targetButton = document.querySelector(`[data-value="${activeFilters.targetGroup}"]`);
        const archiveLink = targetButton ? targetButton.querySelector('.archive-link') : null;
        if (archiveLink && archiveLink.dataset.archiveUrl) baseUrl = archiveLink.dataset.archiveUrl;
        // Add remaining filter parameters as query params
        if (activeFilters.solutions.indexOf('all') === -1 && activeFilters.solutions.length > 0) params.ratkaisut = activeFilters.solutions.join(',');
        if (activeFilters.searchTerm) params.haku = activeFilters.searchTerm;
        // Build final URL
        const queryString = buildQueryString(params);
        const newUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;
        const stateFilters = {
            targetGroup: activeFilters.targetGroup,
            solutions: [
                ...activeFilters.solutions
            ],
            searchTerm: activeFilters.searchTerm
        };
        window.history.pushState({
            filters: stateFilters
        }, '', newUrl);
        // Apply the filters
        applyFilters();
    };
    // Reset all filters to default state
    const resetAllFilters = ()=>{
        // Reset filter state
        activeFilters = {
            targetGroup: 'all',
            solutions: [
                'all'
            ],
            searchTerm: ''
        };
        // Reset UI
        // Target group buttons
        for(let i = 0; i < targetGroupButtons.length; i += 1){
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
        for(let i = 0; i < solutionCheckboxes.length; i += 1){
            const checkbox = solutionCheckboxes[i];
            checkbox.checked = checkbox.value === 'all';
        }
        // Search input
        if (searchInput) searchInput.value = '';
        // Update URL and apply filters
        updateUrlAndApplyFilters();
    };
    // Search from all categories and target groups (keep only search term)
    const searchAllFilters = ()=>{
        // Reset both target group and categories to 'all', keep only search term
        activeFilters.targetGroup = 'all';
        activeFilters.solutions = [
            'all'
        ];
        // Update target group buttons UI
        for(let i = 0; i < targetGroupButtons.length; i += 1){
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
        for(let i = 0; i < solutionCheckboxes.length; i += 1){
            const checkbox = solutionCheckboxes[i];
            checkbox.checked = checkbox.value === 'all';
        }
        // Apply filters (keeping only search term)
        applyFilters();
    };
    // Apply all active filters
    const applyFilters = ()=>{
        let visibleCount = 0;
        for(let i = 0; i < referenceItems.length; i += 1){
            const item = referenceItems[i];
            let shouldShow = true;
            // Target group filter
            if (activeFilters.targetGroup !== 'all') {
                const itemTargetGroup = item.dataset.targetGroup || '';
                if (itemTargetGroup !== activeFilters.targetGroup) shouldShow = false;
            }
            // Category/solution filter
            if (shouldShow && activeFilters.solutions.indexOf('all') === -1) {
                const categoriesString = item.dataset.categories || '';
                const itemCategories = [];
                const categoriesArray = categoriesString.split(' ');
                // Manual filter instead of .filter(Boolean)
                for(let j = 0; j < categoriesArray.length; j += 1)if (categoriesArray[j] && categoriesArray[j].length > 0) itemCategories.push(categoriesArray[j]);
                let hasMatchingCategory = false;
                for(let k = 0; k < activeFilters.solutions.length; k += 1)if (itemCategories.indexOf(activeFilters.solutions[k]) !== -1) {
                    hasMatchingCategory = true;
                    break;
                }
                if (!hasMatchingCategory) shouldShow = false;
            }
            // Search filter
            if (shouldShow && activeFilters.searchTerm) {
                const searchableText = item.dataset.searchable || '';
                if (searchableText.indexOf(activeFilters.searchTerm) === -1) shouldShow = false;
            }
            // Show/hide item with animation
            if (shouldShow) {
                item.style.display = '';
                item.classList.remove('filtered-out');
                setTimeout(()=>{
                    item.classList.add('filtered-in');
                }, 10);
                visibleCount++;
            } else {
                item.classList.add('filtered-out');
                item.classList.remove('filtered-in');
                setTimeout(()=>{
                    if (item.classList.contains('filtered-out')) item.style.display = 'none';
                }, 300);
            }
        }
        // Check for cross-filter results if no current results and we have any filters applied
        let crossFilterCount = 0;
        if (visibleCount === 0 && (activeFilters.targetGroup !== 'all' || activeFilters.solutions.indexOf('all') === -1 || activeFilters.searchTerm)) crossFilterCount = countCrossFilterResults();
        // Show message if no results
        handleNoResults(visibleCount, crossFilterCount);
    };
    // Count results that would show if we ignored restrictive filters
    const countCrossFilterResults = ()=>{
        let count = 0;
        for(let i = 0; i < referenceItems.length; i += 1){
            const item = referenceItems[i];
            let shouldShow = true;
            // For cross-filter search, we relax the most restrictive filters:
            // - If target group is restricted, ignore it
            // - If categories are restricted, ignore them
            // - Keep search term filter as it's less restrictive
            // Only apply search filter for cross-filter search
            if (activeFilters.searchTerm) {
                const searchableText = item.dataset.searchable || '';
                if (searchableText.indexOf(activeFilters.searchTerm) === -1) shouldShow = false;
            }
            if (shouldShow) count++;
        }
        return count;
    };
    // Handle no results message
    const handleNoResults = function(count, crossFilterCount) {
        if (typeof crossFilterCount === 'undefined') crossFilterCount = 0;
        const container = document.querySelector('.cols.cols-two');
        let noResultsMessage = document.getElementById('no-results-message');
        if (count === 0) {
            // Remove existing message if it exists
            if (noResultsMessage) noResultsMessage.remove();
            // Create new message
            noResultsMessage = document.createElement('div');
            noResultsMessage.id = 'no-results-message';
            noResultsMessage.className = 'no-results-message';
            let content = "<h2>Tyhj\xe4\xe4 t\xe4ynn\xe4</h2>";
            if (crossFilterCount > 0) {
                // Show cross-filter results message - be more specific about what was found
                let messageText = '';
                if (activeFilters.targetGroup !== 'all' && activeFilters.solutions.indexOf('all') === -1) messageText = `${crossFilterCount} hakutulosta l\xf6ytyi muilta toimialoilta ja kategorioilta, haetaanko kaikista?`;
                else if (activeFilters.targetGroup !== 'all') messageText = `${crossFilterCount} hakutulosta l\xf6ytyi muilta toimialoilta, haetaanko kaikista?`;
                else if (activeFilters.solutions.indexOf('all') === -1) messageText = `${crossFilterCount} hakutulosta l\xf6ytyi muista kategorioista, haetaanko kaikista?`;
                else messageText = `${crossFilterCount} hakutulosta l\xf6ytyi, haetaanko kaikista?`;
                content += `
          <p>${messageText}</p>
          <div class="button-wrapper">
            <button type="button" class="button" id="search-all-filters">Hae uudelleen kaikista</button>
            <button type="button" class="button" id="reset-filters">Nollaa haku</button>
          </div>
        `;
            } else // Show default no results message
            content += `
          <p>Hakuasi vastaavia referenssej\xe4 ei l\xf6ydy.</p>
          <div class="button-wrapper">
            <button type="button" class="button" id="reset-filters">Nollaa haku</button>
          </div>
        `;
            noResultsMessage.innerHTML = content;
            // Event listeners are handled by document.body delegation below
            if (container) container.appendChild(noResultsMessage);
        } else if (noResultsMessage) noResultsMessage.remove();
    };
    // Initialize UI with URL state
    const initializeFromUrl = ()=>{
        // Set target group button states based on activeFilters
        for(let i = 0; i < targetGroupButtons.length; i += 1){
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
        for(let i = 0; i < solutionCheckboxes.length; i += 1){
            const checkbox = solutionCheckboxes[i];
            if (activeFilters.solutions.indexOf('all') !== -1) checkbox.checked = checkbox.value === 'all';
            else checkbox.checked = activeFilters.solutions.indexOf(checkbox.value) !== -1;
        }
        // Set search input state
        if (searchInput && activeFilters.searchTerm) searchInput.value = activeFilters.searchTerm;
        // Apply filters based on current state
        applyFilters();
    };
    // Handle browser back/forward navigation
    window.addEventListener('popstate', (event)=>{
        if (event.state && event.state.filters) activeFilters = event.state.filters;
        else activeFilters = getFiltersFromUrl();
        initializeFromUrl();
    });
    // Event delegation for dynamically created buttons
    document.body.addEventListener('click', (e)=>{
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
exports.default = initReferenceFilters;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"gEwzs":[function(require,module,exports,__globalThis) {
/* eslint-disable no-unused-vars */ /* eslint-disable max-len */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let stylesInjected = false;
let popupTimeout = null;
// Configuration constants
const ENABLED = true; // Set to false to disable the lead popup
const POPUP_VARIANT = 'survey'; // 'classic' for original popup, 'survey' for brand survey popup
const MIN_DELAY = 5000; // 5 seconds
const MAX_DELAY = 12000; // 12 seconds
const STORAGE_KEY = 'dude-lead-popup-dismissed';
const DAYS_TO_HIDE = 14; // 2 weeks
const HOURS_TO_HIDE = 336; // 2 weeks (in hours)
const REACTION_HIDE_DAYS = 60; // 2 months
// Track if popup has been shown this session (persists across swup navigations)
const popupShownThisSession = false;
// Check if popup should be shown
const shouldShowPopup = ()=>{
    const dismissedUntil = localStorage.getItem(STORAGE_KEY);
    if (!dismissedUntil) return true;
    const now = new Date().getTime();
    if (now > parseInt(dismissedUntil, 10)) {
        // Storage expired, remove it
        localStorage.removeItem(STORAGE_KEY);
        return true;
    }
    return false;
};
// Check if we're on a page where popup should be skipped
const shouldSkipPopup = ()=>document.body.classList.contains('page-id-7') // Front page
     || document.body.classList.contains('page-id-4487') // Contact page
;
const initLeadPopup = ()=>{
    // Check if popup is enabled
    if (!ENABLED) return;
    // Remove popup if it's currently visible (page changed while popup was open)
    const existingPopup = document.getElementById('lead-popup');
    if (existingPopup) {
        existingPopup.remove();
        document.body.style.overflow = '';
    }
    // Don't show if user dismissed
    if (!shouldShowPopup()) {
        // eslint-disable-next-line no-console
        console.log('[Lead Popup] blocked: user has dismissed it');
        return;
    }
    // Don't show on excluded pages, but don't cancel the timer - it will check again when it fires
    if (shouldSkipPopup()) {
        const pageType = document.body.classList.contains('page-id-7') ? 'front page' : 'contact page';
        // eslint-disable-next-line no-console
        console.log(`[Lead Popup] on ${pageType}, popupTimeout:`, popupTimeout ? 'exists - returning' : 'null - will start timer');
        // Don't return - let the timer keep running so popup shows when user navigates to valid page
        // Only skip starting a NEW timer if one already exists
        if (popupTimeout) return;
    }
    // If a timer is already running, don't reset it (preserves timer across swup navigations)
    if (popupTimeout) {
        // eslint-disable-next-line no-console
        console.log('[Lead Popup] timer already running, not resetting');
        return;
    }
    // Inject styles (only once)
    const injectStyles = ()=>{
        if (stylesInjected) return;
        stylesInjected = true;
        const style = document.createElement('style');
        style.id = 'lead-popup-styles';
        style.textContent = `
      .lead-popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2147483647 !important;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
      }

      .lead-popup--visible {
        opacity: 1;
        pointer-events: all;
      }

      .lead-popup--visible .lead-popup__content {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }

      .lead-popup__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(30, 67, 72, 0.5);
        cursor: pointer;
      }

      .lead-popup__content {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.9);
        max-width: 600px;
        width: calc(100% - 2rem);
        max-height: calc(100vh - 2rem);
        overflow-y: auto;
        background-color: #fff;
        border-radius: 12px;
        padding: 4rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        opacity: 0;
      }

      .lead-popup__content:focus {
        outline: none;
      }

      @media (max-width: 767px) {
        .lead-popup__content {
          padding: 3rem;
        }
      }

      .lead-popup__close {
        position: absolute;
        top: 2rem;
        right: 2rem;
        background: transparent;
        border: none;
        font-size: 32px;
        line-height: 1;
        color: #2e2f38;
        cursor: pointer;
        padding: 0.5rem;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        border-radius: 4px;
      }

      .lead-popup__close:hover {
        background-color: rgba(0, 0, 0, 0.05);
        transform: scale(1.1);
      }

      .lead-popup__close:focus-visible {
        background-color: rgba(0, 0, 0, 0.05);
        transform: scale(1.1);
        outline: 2px solid #1e4348;
        outline-offset: 2px;
      }

      .lead-popup__close:focus:not(:focus-visible) {
        outline: none;
      }

      [data-color-scheme='dark'] .lead-popup__close {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__close {
          color: #fff;
        }
      }

      [data-color-scheme='dark'] .lead-popup__close:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      [data-color-scheme='dark'] .lead-popup__close:focus-visible {
        background-color: rgba(255, 255, 255, 0.1);
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__close:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        body:not([data-color-scheme='light']) .lead-popup__close:focus-visible {
          background-color: rgba(255, 255, 255, 0.1);
        }
      }

      [data-color-scheme='dark'] .lead-popup__close:focus-visible {
        outline-color: #7effe1;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__close:focus-visible {
          outline-color: #7effe1;
        }
      }

      .lead-popup__heading {
        margin: 0 0 3rem;
        padding-right: 2rem;
        font-size: 32px;
        font-weight: 700;
        line-height: 1.32;
        color: #1e4348;
      }

      @media (max-width: 767px) {
        .lead-popup__heading {
          font-size: 22px;
        }
      }

      .lead-popup__body {
        margin-bottom: 2rem;
        color: #2e2f38;
        font-size: 16px;
      }

      .lead-popup__body p {
        margin: 0 0 1rem;
        line-height: 1.6;
        font-size: 16px;
        color: #2e2f38;
      }

      .lead-popup__body p:last-child {
        margin-bottom: 0;
      }

      .lead-popup__body a {
        color: #1e4348;
        text-decoration: underline;
      }

      .lead-popup__body a:hover,
      .lead-popup__body a:focus {
        color: #000;
      }

      .lead-popup__body strong {
        color: #2e2f38;
        font-weight: 600;
      }

      [data-color-scheme='light'] .lead-popup__content {
        background-color: #fff;
      }

      [data-color-scheme='light'] .lead-popup__heading {
        color: #1e4348;
      }

      [data-color-scheme='light'] .lead-popup__body {
        color: #2e2f38;
      }

      [data-color-scheme='light'] .lead-popup__body p {
        color: #2e2f38;
      }

      [data-color-scheme='light'] .lead-popup__body a {
        color: #1e4348;
      }

      [data-color-scheme='light'] .lead-popup__body a:hover,
      [data-color-scheme='light'] .lead-popup__body a:focus {
        color: #000;
      }

      [data-color-scheme='light'] .lead-popup__body strong {
        color: #2e2f38;
      }

      [data-color-scheme='dark'] .lead-popup__content {
        background-color: #1c1e26;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__content {
          background-color: #1c1e26;
        }
      }

      [data-color-scheme='dark'] .lead-popup__heading {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__heading {
          color: #fff;
        }
      }

      [data-color-scheme='dark'] .lead-popup__body {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__body {
          color: #fff;
        }
      }

      [data-color-scheme='dark'] .lead-popup__body p {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__body p {
          color: #fff;
        }
      }

      [data-color-scheme='dark'] .lead-popup__body a {
        color: #7effe1;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__body a {
          color: #7effe1;
        }
      }

      [data-color-scheme='dark'] .lead-popup__body a:hover,
      [data-color-scheme='dark'] .lead-popup__body a:focus {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__body a:hover,
        body:not([data-color-scheme='light']) .lead-popup__body a:focus {
          color: #fff;
        }
      }

      [data-color-scheme='dark'] .lead-popup__body strong {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__body strong {
          color: #fff;
        }
      }

      .lead-popup__buttons {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }

      .lead-popup__button {
        background: none;
        border: none;
        padding: 0;
        font-size: 16px;
        font-weight: 400;
        color: #2e2f38;
        text-decoration: underline;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
        outline: none;
      }

      .lead-popup__button:hover,
      .lead-popup__button:focus {
        color: #000;
        text-decoration: none;
      }

      .lead-popup__button:focus-visible {
        outline: 2px solid #1e4348;
        outline-offset: 2px;
        border-radius: 2px;
      }

      .lead-popup__button--primary {
        font-weight: 600;
        color: #1e4348;
      }

      .lead-popup__button--primary:hover,
      .lead-popup__button--primary:focus {
        color: #000;
      }

      [data-color-scheme='dark'] .lead-popup__button {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__button {
          color: #fff;
        }
      }

      [data-color-scheme='dark'] .lead-popup__button:hover,
      [data-color-scheme='dark'] .lead-popup__button:focus {
        color: #7effe1;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__button:hover,
        body:not([data-color-scheme='light']) .lead-popup__button:focus {
          color: #7effe1;
        }
      }

      [data-color-scheme='dark'] .lead-popup__button--primary {
        color: #7effe1;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__button--primary {
          color: #7effe1;
        }
      }

      [data-color-scheme='dark'] .lead-popup__button--primary:hover,
      [data-color-scheme='dark'] .lead-popup__button--primary:focus {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__button--primary:hover,
        body:not([data-color-scheme='light']) .lead-popup__button--primary:focus {
          color: #fff;
        }
      }

      [data-color-scheme='dark'] .lead-popup__button:focus-visible {
        outline-color: #7effe1;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__button:focus-visible {
          outline-color: #7effe1;
        }
      }

      .lead-popup__trash {
        position: absolute;
        bottom: 2rem;
        right: 2rem;
        background: transparent;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 0.5rem;
        display: flex;
        align-items: center;
        gap: 1.2rem;
        transition: all 0.2s ease;
        outline: none;
      }

      .lead-popup__trash:hover,
      .lead-popup__trash:focus {
        transform: scale(1.1) translateX(-15px);
      }

      @media (max-width: 1024px) {
        .lead-popup__trash:hover,
        .lead-popup__trash:focus {
          transform: scale(1.1);
        }
      }

      .lead-popup__trash:focus-visible {
        outline: 2px solid #1e4348;
        outline-offset: 2px;
        border-radius: 4px;
      }

      [data-color-scheme='dark'] .lead-popup__trash:focus-visible {
        outline-color: #7effe1;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__trash:focus-visible {
          outline-color: #7effe1;
        }
      }

      .lead-popup__trash-text {
        font-size: 14px;
        color: #2e2f38;
        white-space: nowrap;
        opacity: 0;
        transform: translateX(10px);
        transition: all 0.3s ease;
        pointer-events: none;
      }

      @media (max-width: 1024px) {
        .lead-popup__trash-text {
          display: none;
        }
      }

      .lead-popup__trash:hover .lead-popup__trash-text,
      .lead-popup__trash:focus .lead-popup__trash-text {
        opacity: 0.5;
        transform: translateX(0);
      }

      [data-color-scheme='dark'] .lead-popup__trash-text {
        color: #fff;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__trash-text {
          color: #fff;
        }
      }

      .lead-popup__reactions {
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(46, 47, 56, 0.1);
      }

      [data-color-scheme='dark'] .lead-popup__reactions {
        border-top-color: rgba(255, 255, 255, 0.1);
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__reactions {
          border-top-color: rgba(255, 255, 255, 0.1);
        }
      }

      .lead-popup__reactions-title {
        font-size: 16px;
        margin: 0 0 0.75rem;
        color: #5f5f5f;
        font-weight: 500;
      }

      [data-color-scheme='dark'] .lead-popup__reactions-title {
        color: #aeafbc;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__reactions-title {
          color: #aeafbc;
        }
      }

      .lead-popup__reactions-buttons {
        display: flex;
        gap: 0.8rem;
        flex-wrap: wrap;
      }

      .lead-popup__reaction {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.4rem 0.75rem;
        border: 1px solid rgba(46, 47, 56, 0.1);
        border-radius: 24px;
        background: transparent;
        font-size: 12px;
        color: #2e2f38 !important;
        cursor: pointer;
        outline: none;
      }

      [data-color-scheme='dark'] .lead-popup__reaction {
        border-color: rgba(255, 255, 255, 0.1);
        color: #fff !important;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__reaction {
          border-color: rgba(255, 255, 255, 0.1);
          color: #fff !important;
        }
      }

      .lead-popup__reaction:hover,
      .lead-popup__reaction:focus {
        border-color: #1e4348;
        color: #1e4348 !important;
      }

      .lead-popup__reaction:focus-visible {
        outline: 2px solid #1e4348;
        outline-offset: 2px;
      }

      [data-color-scheme='dark'] .lead-popup__reaction:hover,
      [data-color-scheme='dark'] .lead-popup__reaction:focus {
        border-color: #7effe1;
        color: #7effe1 !important;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__reaction:hover,
        body:not([data-color-scheme='light']) .lead-popup__reaction:focus {
          border-color: #7effe1;
          color: #7effe1 !important;
        }
      }

      .lead-popup__reaction--active {
        background-color: #5e8085 !important;
        border-color: #5e8085 !important;
        color: #fff !important;
      }

      [data-color-scheme='light'] .lead-popup__reaction--active {
        background-color: #5e8085 !important;
        border-color: #5e8085 !important;
        color: #fff !important;
      }

      [data-color-scheme='dark'] .lead-popup__reaction--active {
        background-color: #1e4348 !important;
        border-color: #1e4348 !important;
        color: #fff !important;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__reaction--active {
          background-color: #1e4348 !important;
          border-color: #1e4348 !important;
          color: #fff !important;
        }
      }

      [data-color-scheme='dark'] .lead-popup__reaction:focus-visible {
        outline-color: #7effe1;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__reaction:focus-visible {
          outline-color: #7effe1;
        }
      }

      .lead-popup__reaction-count {
        font-size: 12px;
        font-weight: 600;
        color: #2e2f38 !important;
        min-width: 1.5rem;
        text-align: center;
      }

      [data-color-scheme='dark'] .lead-popup__reaction-count {
        color: #fff !important;
      }

      @media (prefers-color-scheme: dark) {
        body:not([data-color-scheme='light']) .lead-popup__reaction-count {
          color: #fff !important;
        }
      }

      .lead-popup__reaction--active .lead-popup__reaction-count {
        color: #fff !important;
      }

      /* Survey variant styles */
      .lead-popup--survey .lead-popup__content {
        max-width: 626px;
        overflow: hidden;
        border-radius: 10px;
        padding: 55px 50px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
        background: linear-gradient(138.4deg, #1e4348 0%, #1c1e26 62.5%);
      }

      .lead-popup--survey .lead-popup__content::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url('/content/themes/dude/img/popup-bg.jpg') center / cover no-repeat;
        border-radius: 10px;
        pointer-events: none;
      }

      @media (max-width: 767px) {
        .lead-popup--survey .lead-popup__content {
          padding: 40px 30px;
        }
      }

      .lead-popup--survey .lead-popup__close {
        top: 24px;
        right: 24px;
        width: 14px;
        height: 14px;
        padding: 0;
        font-size: 14px;
        color: #fff;
        z-index: 1;
      }

      .lead-popup--survey .lead-popup__close:hover,
      .lead-popup--survey .lead-popup__close:focus {
        color: #7effe1;
        background-color: transparent;
      }

      .lead-popup--survey .lead-popup__close:focus-visible {
        outline-color: #7effe1;
        outline-offset: 4px;
        background-color: transparent;
      }

      .lead-popup--survey .lead-popup__text {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 25px;
        color: #fff;
        z-index: 1;
      }

      .lead-popup--survey .lead-popup__heading {
        margin: 0;
        padding-right: 30px;
        font-family: var(--font-heading);
        font-size: 32px;
        font-weight: 500;
        line-height: 1.4;
        letter-spacing: 0.64px;
        color: #fff;
      }

      @media (max-width: 767px) {
        .lead-popup--survey .lead-popup__heading {
          font-size: 24px;
        }
      }

      .lead-popup--survey .lead-popup__body {
        margin-bottom: 0;
        color: #fff;
      }

      .lead-popup--survey .lead-popup__body p {
        margin: 0;
        font-family: var(--font-paragraph);
        font-weight: 500;
        line-height: 1.7;
        font-size: 16px;
        color: #fff;
      }

      .lead-popup--survey .lead-popup__cta {
        position: relative;
        display: flex;
        margin-top: 40px;
        z-index: 1;
      }

      .lead-popup--survey .lead-popup__cta-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 15px 32px;
        background-color: #7effe1;
        border: none;
        border-radius: 40px;
        font-family: var(--font-heading);
        font-size: 20px;
        font-weight: 500;
        line-height: 34px;
        color: #000;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .lead-popup--survey .lead-popup__cta-button svg {
        width: 15px;
        height: 13px;
        flex-shrink: 0;
        transform: rotate(-45deg);
      }

      .lead-popup--survey .lead-popup__cta-button:hover,
      .lead-popup--survey .lead-popup__cta-button:focus {
        background-color: #7effe1;
        box-shadow: 0 0 0 3px #7effe1;
        color: #000;
      }

      .lead-popup--survey .lead-popup__cta-button:focus-visible {
        outline: 2px solid #fff;
        outline-offset: 2px;
      }

      .lead-popup--survey .lead-popup__cta-button:focus:not(:focus-visible) {
        outline: none;
      }

      @media (max-width: 767px) {
        .lead-popup--survey .lead-popup__cta-button {
          font-size: 18px;
          padding: 12px 24px;
        }
      }
    `;
        document.head.appendChild(style);
    };
    injectStyles();
    // Fetch reaction counts from API
    const fetchReactions = async ()=>{
        try {
            const response = await fetch('/wp-json/dude/v1/popup-reactions');
            if (response.ok) return await response.json();
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Failed to fetch reactions:', error);
        }
        return {
            thumbs_up: 0,
            thumbs_down: 0,
            laugh: 0,
            heart: 0,
            lots_of_laughs: 0,
            fire: 0
        };
    };
    // Add or remove reaction via API
    const modifyReaction = async (reaction, action)=>{
        try {
            const response = await fetch('/wp-json/dude/v1/popup-reactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    reaction,
                    action
                })
            });
            if (response.ok) return await response.json();
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Failed to modify reaction:', error);
        }
        return null;
    };
    // Get user's reactions from localStorage
    const getUserReactions = ()=>{
        const stored = localStorage.getItem('dude-popup-reactions');
        return stored ? JSON.parse(stored) : [];
    };
    // Save user's reactions to localStorage
    const saveUserReaction = (reaction)=>{
        const reactions = getUserReactions();
        if (!reactions.includes(reaction)) {
            reactions.push(reaction);
            localStorage.setItem('dude-popup-reactions', JSON.stringify(reactions));
        }
    };
    // Remove user's reaction from localStorage
    const removeUserReaction = (reaction)=>{
        const reactions = getUserReactions();
        const index = reactions.indexOf(reaction);
        if (index > -1) {
            reactions.splice(index, 1);
            localStorage.setItem('dude-popup-reactions', JSON.stringify(reactions));
        }
    };
    // Create popup HTML
    const createPopup = ()=>{
        const popup = document.createElement('div');
        popup.id = 'lead-popup';
        popup.className = 'lead-popup';
        popup.setAttribute('role', 'dialog');
        popup.setAttribute('aria-labelledby', 'popup-heading');
        popup.setAttribute('aria-modal', 'true');
        popup.innerHTML = `
      <div class="lead-popup__overlay"></div>
      <div class="lead-popup__content" tabindex="-1">
        <button type="button" class="lead-popup__close" aria-label="Sulje" data-action="close-icon">
          \xd7
        </button>
        <h2 id="popup-heading" class="lead-popup__heading">Terve! Onpa \xe4rsytt\xe4v\xe4 ponnahdusikkuna!</h2>
        <div class="lead-popup__body">
          <p>N\xe4m\xe4 t\xe4llaiset ovat netin sy\xf6p\xe4\xe4, eik\xf6 niin? Mutta nyt kun saimme huomiosi... me osataan tehd\xe4 t\xe4llaisia(kin) verkkosivuille ihan omin pikku k\xe4t\xf6sin, ilman ett\xe4 tarvitaan mit\xe4\xe4n j\xe4\xe4t\xe4vi\xe4 sivustoja hidastavia WordPress-lis\xe4osia. T\xe4m\xe4 popup vie ihan muutaman kilotavun verran tilaa ja toimii kivasti ja nopeasti.</p>
          <p>Osataan me muutakin, on tehty pienempien yhdistysten verkkosivuista isojen korporaatioiden verkkopalveluihin.</p>
          <p><strong>Laita viesti\xe4 <a href="mailto:moro@dude.fi">moro@dude.fi</a>, <a href="https://www.dude.fi/ota-yhteytta">ota yhteytt\xe4 lomakkeella</a> tai soita Juhalle <a href="tel:+358400443221">0400 443 221</a> niin katsotaan mit\xe4 voidaan tehd\xe4 teid\xe4n sivustolle?</strong></p>
        </div>
        <div class="lead-popup__reactions">
          <p class="lead-popup__reactions-title">Mit\xe4 mielt\xe4 olet t\xe4st\xe4 popupista?</p>
          <div class="lead-popup__reactions-buttons">
            <button type="button" class="lead-popup__reaction" data-reaction="thumbs_up">
              \u{1F44D} <span class="lead-popup__reaction-count" data-count="thumbs_up">0</span>
            </button>
            <button type="button" class="lead-popup__reaction" data-reaction="thumbs_down">
              \u{1F44E} <span class="lead-popup__reaction-count" data-count="thumbs_down">0</span>
            </button>
            <button type="button" class="lead-popup__reaction" data-reaction="laugh">
              \u{1F604} <span class="lead-popup__reaction-count" data-count="laugh">0</span>
            </button>
            <button type="button" class="lead-popup__reaction" data-reaction="heart">
              \u{2764}\u{FE0F} <span class="lead-popup__reaction-count" data-count="heart">0</span>
            </button>
            <button type="button" class="lead-popup__reaction" data-reaction="lots_of_laughs">
              \u{1F602} <span class="lead-popup__reaction-count" data-count="lots_of_laughs">0</span>
            </button>
            <button type="button" class="lead-popup__reaction" data-reaction="fire">
              \u{1F525} <span class="lead-popup__reaction-count" data-count="fire">0</span>
            </button>
          </div>
        </div>
        <button type="button" class="lead-popup__trash" data-action="dismiss" aria-label="\xc4l\xe4 n\xe4yt\xe4 en\xe4\xe4">
          <span class="lead-popup__trash-text">\xc4l\xe4 n\xe4yt\xe4 en\xe4\xe4</span>
          \u{1F5D1}\u{FE0F}
        </button>
      </div>
    `;
        return popup;
    };
    // Create survey popup HTML (new brand survey variant)
    const createSurveyPopup = ()=>{
        const popup = document.createElement('div');
        popup.id = 'lead-popup';
        popup.className = 'lead-popup lead-popup--survey';
        popup.setAttribute('role', 'dialog');
        popup.setAttribute('aria-labelledby', 'popup-heading');
        popup.setAttribute('aria-modal', 'true');
        popup.innerHTML = `
      <div class="lead-popup__overlay"></div>
      <div class="lead-popup__content" tabindex="-1">
        <button type="button" class="lead-popup__close" aria-label="Sulje" data-action="close-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" aria-hidden="true" width="14" height="14" fill="currentColor">
            <path d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7z"/>
          </svg>
        </button>
        <div class="lead-popup__text">
          <h2 id="popup-heading" class="lead-popup__heading">Vastaa br\xe4ndikyselyymme ja tue mielenterveysty\xf6t\xe4!</h2>
          <div class="lead-popup__body">
            <p>Millaisena n\xe4et Duden t\xe4ll\xe4 hetkell\xe4? Voisiko jokin olla toisin? Onko menty mets\xe4\xe4n vai onnistuttu? Kerro meille vastaamalla kyselyyn! Lahjoitamme jokaisesta vastauksesta euron MIELI ry:lle.</p>
          </div>
        </div>
        <div class="lead-popup__cta">
          <a href="https://www.dude.fi/duden-brandikysely" class="lead-popup__cta-button no-external-link-indicator" data-action="cta" data-no-swup target="_blank" rel="noopener noreferrer" aria-label="Siirry kyselyyn (avautuu uuteen ikkunaan)">Siirry kyselyyn <svg width="15" height="13" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 13" aria-hidden="true"><path d="M1 5.75a.75.75 0 000 1.5v-1.5zm13.53 1.28a.75.75 0 000-1.06L9.757 1.197a.75.75 0 10-1.06 1.06L12.939 6.5l-4.242 4.243a.75.75 0 001.06 1.06L14.53 7.03zM1 7.25h13v-1.5H1v1.5z" fill="currentColor"/></svg></a>
        </div>
      </div>
    `;
        return popup;
    };
    // Show popup
    const showPopup = ()=>{
        // eslint-disable-next-line no-console
        console.log('[Lead Popup] showPopup() called');
        // Check if contact modal is currently open (visible)
        const contactModal = document.getElementById('contact-form-modal');
        if (contactModal && contactModal.classList.contains('contact-form-modal--visible')) {
            // eslint-disable-next-line no-console
            console.log('[Lead Popup] Contact modal is visible, aborting');
            return;
        }
        // eslint-disable-next-line no-console
        console.log('[Lead Popup] Creating popup element');
        const popup = POPUP_VARIANT === 'survey' ? createSurveyPopup() : createPopup();
        // eslint-disable-next-line no-console
        console.log('[Lead Popup] Appending popup to body');
        document.body.appendChild(popup);
        // eslint-disable-next-line no-console
        console.log('[Lead Popup] Popup appended, element:', popup);
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        // Add show class after a brief delay for animation
        setTimeout(()=>{
            popup.classList.add('lead-popup--visible');
        }, 10);
        // Focus trap implementation
        const content = popup.querySelector('.lead-popup__content');
        const focusableElements = content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        // Get button references
        const closeIconBtn = popup.querySelector('[data-action="close-icon"]');
        const dismissBtn = popup.querySelector('[data-action="dismiss"]');
        const ctaBtn = popup.querySelector('[data-action="cta"]');
        const overlay = popup.querySelector('.lead-popup__overlay');
        // Focus the container to move focus into the popup (no visible focus ring)
        setTimeout(()=>{
            content.focus();
        }, 100);
        // Trap focus within modal
        const handleTabKey = (e)=>{
            if (e.key !== 'Tab') return;
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        };
        content.addEventListener('keydown', handleTabKey);
        // Handle button clicks
        const closePopup = (dismissType = 'reopen')=>{
            popup.classList.remove('lead-popup--visible');
            document.body.style.overflow = '';
            content.removeEventListener('keydown', handleTabKey);
            setTimeout(()=>{
                popup.remove();
            }, 300);
            const now = new Date().getTime();
            if (dismissType === 'days') {
                const expiryTime = now + DAYS_TO_HIDE * 86400000;
                localStorage.setItem(STORAGE_KEY, expiryTime.toString());
                // Dev logging
                if (window.location.hostname.includes('.test') || window.location.hostname === 'localhost') console.log(`Lead popup dismissed for ${DAYS_TO_HIDE} days`);
            } else if (dismissType === 'hours') {
                const expiryTime = now + HOURS_TO_HIDE * 3600000;
                localStorage.setItem(STORAGE_KEY, expiryTime.toString());
                // Dev logging
                if (window.location.hostname.includes('.test') || window.location.hostname === 'localhost') console.log(`Lead popup dismissed for ${HOURS_TO_HIDE} hour`);
            } else {
                // If just closing via overlay/escape, show again after a new random delay
                const newDelay = Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY;
                // Dev logging
                if (window.location.hostname.includes('.test') || window.location.hostname === 'localhost') console.log(`Lead popup closed, will reappear in ${(newDelay / 1000).toFixed(1)} seconds`);
                popupTimeout = setTimeout(()=>{
                    if (shouldShowPopup() && !shouldSkipPopup()) showPopup();
                }, newDelay);
            }
        };
        // Close icon button - hides for 1 hour
        if (closeIconBtn) closeIconBtn.addEventListener('click', ()=>closePopup('hours'));
        // Trash button - hides for 2 days
        if (dismissBtn) dismissBtn.addEventListener('click', ()=>closePopup('days'));
        // CTA button (survey variant) - hides for 2 days when user clicks to go to survey
        if (ctaBtn) ctaBtn.addEventListener('click', ()=>closePopup('days'));
        // Close on overlay click - reopens after delay
        overlay.addEventListener('click', ()=>closePopup('reopen'));
        // Close popup when contact form link is clicked
        const contactFormLink = popup.querySelector('a[href*="ota-yhteytta"]');
        if (contactFormLink) contactFormLink.addEventListener('click', ()=>{
            closePopup('days'); // Dismiss for 2 days since they're going to contact page
        });
        // Load and display reactions
        const updateReactionCounts = (reactions)=>{
            Object.keys(reactions).forEach((key)=>{
                const countEl = popup.querySelector(`[data-count="${key}"]`);
                if (countEl) countEl.textContent = reactions[key];
            });
        };
        // Classic variant: Fetch initial reaction counts
        if (POPUP_VARIANT === 'classic') {
            fetchReactions().then((reactions)=>{
                updateReactionCounts(reactions);
            });
            // Mark user's previous reactions as active
            const userReactions = getUserReactions();
            userReactions.forEach((reaction)=>{
                const btn = popup.querySelector(`[data-reaction="${reaction}"]`);
                if (btn) btn.classList.add('lead-popup__reaction--active');
            });
            // Handle reaction clicks
            const reactionButtons = popup.querySelectorAll('.lead-popup__reaction');
            reactionButtons.forEach((btn)=>{
                btn.addEventListener('click', async ()=>{
                    const reaction = btn.getAttribute('data-reaction');
                    const isActive = btn.classList.contains('lead-popup__reaction--active');
                    if (isActive) {
                        // Remove reaction
                        btn.classList.remove('lead-popup__reaction--active');
                        removeUserReaction(reaction);
                        // Send remove to API
                        const result = await modifyReaction(reaction, 'remove');
                        if (result && result.reactions) updateReactionCounts(result.reactions);
                    } else {
                        // Add reaction
                        btn.classList.add('lead-popup__reaction--active');
                        saveUserReaction(reaction);
                        // Send add to API
                        const result = await modifyReaction(reaction, 'add');
                        if (result && result.reactions) updateReactionCounts(result.reactions);
                        // Hide popup for 2 months after any reaction
                        const now = new Date().getTime();
                        const expiryTime = now + REACTION_HIDE_DAYS * 86400000;
                        localStorage.setItem(STORAGE_KEY, expiryTime.toString());
                        // Close popup after reaction
                        setTimeout(()=>{
                            closePopup('days');
                        }, 500);
                    }
                });
            });
        }
        // Close on Escape key - reopens after delay
        const handleEscape = (e)=>{
            if (e.key === 'Escape') {
                closePopup(false);
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    };
    // Inject styles
    injectStyles();
    // Trigger popup after random delay
    const delay = Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY;
    // Dev logging
    if (window.location.hostname.includes('.test') || window.location.hostname === 'localhost') console.log(`Lead popup will trigger in ${(delay / 1000).toFixed(1)} seconds`);
    // eslint-disable-next-line no-console
    console.log(`[Lead Popup] Starting timer for ${(delay / 1000).toFixed(1)} seconds`);
    popupTimeout = setTimeout(()=>{
        // eslint-disable-next-line no-console
        console.log('[Lead Popup] Timer fired!');
        // Clear the timeout reference since it's now firing
        popupTimeout = null;
        // Check conditions again at the moment of showing
        if (!shouldShowPopup()) {
            // eslint-disable-next-line no-console
            console.log('[Lead Popup] Timer fired but popup was dismissed in the meantime');
            return;
        }
        if (shouldSkipPopup()) {
            // On excluded page, set a new timer to check again soon
            // eslint-disable-next-line no-console
            console.log('[Lead Popup] Timer fired on excluded page, will retry in 5 seconds');
            popupTimeout = setTimeout(()=>{
                popupTimeout = null;
                if (shouldShowPopup() && !shouldSkipPopup()) {
                    // eslint-disable-next-line no-console
                    console.log('[Lead Popup] Retry timer fired, showing popup');
                    showPopup();
                }
            }, 5000);
            return;
        }
        // eslint-disable-next-line no-console
        console.log('[Lead Popup] Showing popup now');
        showPopup();
    }, delay);
};
exports.default = initLeadPopup;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"3C50E":[function(require,module,exports,__globalThis) {
/* eslint-disable max-len */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canvasConfetti = require("canvas-confetti");
var _canvasConfettiDefault = parcelHelpers.interopDefault(_canvasConfetti);
const initContactFormModal = ()=>{
    // Configuration
    const MODAL_ID = 'contact-form-modal';
    // Check if we're on front page with the button
    const contactLink = document.querySelector('.button-mint.button-huge');
    if (!contactLink) return;
    // Replace link with button for better semantics and accessibility
    const contactButton = document.createElement('button');
    contactButton.type = 'button';
    contactButton.className = contactLink.className;
    contactButton.textContent = contactLink.textContent;
    contactButton.setAttribute('aria-label', 'Avaa yhteydenottolomake');
    contactLink.parentNode.replaceChild(contactButton, contactLink);
    // Inject modal styles
    const injectStyles = ()=>{
        if (document.getElementById('contact-form-modal-styles')) return;
        const style = document.createElement('style');
        style.id = 'contact-form-modal-styles';
        style.textContent = `
      .contact-form-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2147483647 !important;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
      }

      .contact-form-modal--visible {
        opacity: 1;
        pointer-events: all;
      }

      .contact-form-modal--visible .contact-form-modal__content {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }

      .contact-form-modal__overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #2e2f38c7;
        cursor: pointer;
      }

      .contact-form-modal__content {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.9);
        max-width: 500px;
        width: calc(100% - 2rem);
        max-height: calc(100vh - 2rem);
        overflow-y: auto;
        background-color: #1c1e26;
        border-radius: 12px;
        padding: 4rem;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        opacity: 0;
      }

      .contact-form-modal__content:focus {
        outline: none;
      }

      @media (max-width: 767px) {
        .contact-form-modal__content {
          padding: 3rem;
        }
      }

      .contact-form-modal__close {
        position: absolute;
        top: 2rem;
        right: 2rem;
        background: transparent;
        border: none;
        font-size: 32px;
        line-height: 1;
        color: #fff;
        cursor: pointer;
        padding: 0.5rem;
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        border-radius: 4px;
      }

      .contact-form-modal__close:hover {
        background-color: rgba(255, 255, 255, 0.1);
        transform: scale(1.1);
      }

      .contact-form-modal__close:focus-visible {
        background-color: rgba(255, 255, 255, 0.1);
        transform: scale(1.1);
        outline: 2px solid #7effe1;
        outline-offset: 2px;
      }

      .contact-form-modal__close:focus:not(:focus-visible) {
        outline: none;
      }

      .contact-form-modal__heading {
        margin: 0 0 2rem;
        padding-right: 2rem;
        font-size: 32px;
        font-weight: 700;
        line-height: 1.32;
        color: #fff;
      }

      @media (max-width: 767px) {
        .contact-form-modal__heading {
          font-size: 22px;
        }
      }

      .contact-form-modal__alternative-contacts {
        list-style: none;
        margin: 0 0 2rem;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }

      .contact-form-modal__alternative-contacts li {
        margin: 0;
        padding: 0;
      }

      .contact-form-modal__alternative-contacts a {
        color: #dcdde0;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 16px;
        transition: opacity 0.2s ease;
      }

      .contact-form-modal__alternative-contacts a:hover {
        opacity: 0.8;
      }

      .contact-form-modal__alternative-contacts svg {
        flex-shrink: 0;
        color: #7effe1;
      }

      .contact-form-modal__form {
        margin-top: 2rem;
        position: relative;
      }

      .contact-form-modal__form-loader {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 3rem 0;
        gap: 1rem;
        color: #dcdde0;
        font-size: 16px;
      }

      .contact-form-modal__form-loader--hidden {
        display: none;
      }

      .contact-form-modal__form-loader-spinner {
        width: 40px;
        height: 40px;
        border: 3px solid rgba(126, 255, 225, 0.2);
        border-top-color: #7effe1;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
      }

      @keyframes spin {
        to { transform: rotate(360deg); }
      }

      .contact-form-modal__form .pipedriveWebForms {
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
        padding: 0 !important;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .contact-form-modal__form .pipedriveWebForms--loaded {
        opacity: 1;
      }

      .contact-form-modal__form .pipedriveWebForms > div {
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
      }

      .contact-form-modal__form .pipedriveWebForms iframe {
        width: 100% !important;
        max-width: none !important;
        border: none !important;
        display: block !important;
      }

    `;
        document.head.appendChild(style);
    };
    injectStyles();
    // Confetti effect
    const fireConfetti = ()=>{
        const count = 400;
        const defaults = {
            origin: {
                y: 0.7
            },
            zIndex: 2147483648
        };
        function fire(particleRatio, opts) {
            (0, _canvasConfettiDefault.default)({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }
        fire(0.25, {
            spread: 26,
            startVelocity: 55
        });
        fire(0.2, {
            spread: 60
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45
        });
        fire(0.15, {
            spread: 90,
            startVelocity: 35,
            scalar: 1.5
        });
        fire(0.2, {
            spread: 150,
            startVelocity: 50,
            decay: 0.95
        });
    };
    // Track button click
    const trackClick = async ()=>{
        try {
            await fetch('/wp-json/dude/v1/contact-form-click', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Failed to track click:', error);
        }
    };
    // Fetch statistics
    const fetchStats = async ()=>{
        try {
            const response = await fetch('/wp-json/dude/v1/contact-form-stats');
            if (response.ok) {
                const data = await response.json();
                // eslint-disable-next-line no-console
                console.log('Stats received:', data);
                return data;
            }
            // eslint-disable-next-line no-console
            console.error('Stats request failed:', response.status, response.statusText);
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Failed to fetch stats:', error);
        }
        return null;
    };
    // Create modal HTML
    const createModal = ()=>{
        const modal = document.createElement('div');
        modal.id = MODAL_ID;
        modal.className = 'contact-form-modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-labelledby', 'contact-modal-heading');
        modal.setAttribute('aria-modal', 'true');
        modal.innerHTML = `
      <div class="contact-form-modal__overlay"></div>
      <div class="contact-form-modal__content" tabindex="-1">
        <button type="button" class="contact-form-modal__close" aria-label="Sulje">
          \xd7
        </button>
        <h2 id="contact-modal-heading" class="contact-form-modal__heading">J\xe4t\xe4 yhteydenottopyynt\xf6</h2>
        <ul class="contact-form-modal__alternative-contacts">
          <li>
            <a href="tel:0400443221">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="transparent" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>Soita Juhalle 0400 443 221</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/358400443221" target="_blank" rel="noopener noreferrer">
              <svg fill="currentColor" width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"/></svg>
              <span>L\xe4het\xe4 WhatsAppia Juhalle</span>
            </a>
          </li>
          <li>
            <a href="mailto:moro@dude.fi">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="transparent" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>L\xe4het\xe4 s\xe4hk\xf6postia moro@dude.fi</span>
            </a>
          </li>
        </ul>
        <div class="contact-form-modal__form">
          <div class="contact-form-modal__form-loader">
            <div class="contact-form-modal__form-loader-spinner"></div>
            <p>Ladataan lomaketta...</p>
          </div>
          <div class="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/1C922tUo90oeWhck1VhXZFdy1KWojGVSTwWxvxu5eswakOcepyDnWl7MtQDYOBcBl"><script src="https://webforms.pipedrive.com/f/loader"></script></div>
        </div>
      </div>
    `;
        return modal;
    };
    // Pre-created modal reference
    let preCreatedModal = null;
    // Show modal
    const showModal = ()=>{
        // Use pre-created modal if available, otherwise create new one
        let modal;
        if (preCreatedModal) {
            modal = preCreatedModal;
            preCreatedModal = null; // Clear reference after use
        } else {
            // Remove existing modal if present
            const existingModal = document.getElementById(MODAL_ID);
            if (existingModal) existingModal.remove();
            modal = createModal();
            document.body.appendChild(modal);
        }
        // Store the currently focused element to return focus later
        const previouslyFocusedElement = document.activeElement;
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        // Add show class after a brief delay for animation
        setTimeout(()=>{
            modal.classList.add('contact-form-modal--visible');
        }, 10);
        // Focus trap implementation
        const closeBtn = modal.querySelector('.contact-form-modal__close');
        const overlay = modal.querySelector('.contact-form-modal__overlay');
        // Focus the close button to start with a focusable element
        setTimeout(()=>{
            closeBtn.focus();
        }, 100);
        // Get all focusable elements within the modal
        const getFocusableElements = ()=>{
            const focusableSelectors = [
                'a[href]',
                'button:not([disabled])',
                'textarea:not([disabled])',
                'input:not([disabled])',
                'select:not([disabled])',
                '[tabindex]:not([tabindex="-1"])'
            ];
            return modal.querySelectorAll(focusableSelectors.join(','));
        };
        // Focus trap handler
        const handleFocusTrap = (e)=>{
            if (e.key !== 'Tab') return;
            const focusableElements = getFocusableElements();
            if (focusableElements.length === 0) return;
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            // Shift + Tab: if on first element, move to last
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        };
        document.addEventListener('keydown', handleFocusTrap);
        // Log statistics to console (dev only)
        fetchStats().then((stats)=>{
            if (stats && stats.visitors) console.log(`Contact form modal opened - Opening rate: ${stats.click_rate}% (${stats.clicks} clicks / ${stats.visitors} homepage views)`);
        });
        // Close modal function
        const closeModal = ()=>{
            modal.classList.remove('contact-form-modal--visible');
            document.body.style.overflow = '';
            // Remove focus trap listener
            document.removeEventListener('keydown', handleFocusTrap);
            setTimeout(()=>{
                modal.remove();
                // Return focus to the element that opened the modal
                if (previouslyFocusedElement) previouslyFocusedElement.focus();
                // Pre-create modal again for next time
                preCreateModal();
            }, 300);
        };
        // Close button click
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        // Close on overlay click
        overlay.addEventListener('click', closeModal);
        // Close on Escape key
        const handleEscape = (e)=>{
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
        // Handle form loading, Ref: DEV-619
        const formContainer = modal.querySelector('.pipedriveWebForms');
        const loader = modal.querySelector('.contact-form-modal__form-loader');
        // Check if form iframe already exists (from pre-creation)
        const existingIframe = formContainer.querySelector('iframe');
        if (existingIframe) {
            // Form already loaded, hide loader immediately
            if (loader) loader.classList.add('contact-form-modal__form-loader--hidden');
            formContainer.classList.add('pipedriveWebForms--loaded');
            // eslint-disable-next-line no-console
            console.log('Pipedrive form already loaded from pre-creation');
        } else if (formContainer) {
            // Form not loaded yet, remove any existing script to force reload
            const existingScripts = formContainer.querySelectorAll('script');
            existingScripts.forEach((s)=>s.remove());
            // Create new script element
            const script = document.createElement('script');
            script.src = 'https://webforms.pipedrive.com/f/loader';
            script.async = true;
            // Add error handling
            script.onerror = ()=>{
                // eslint-disable-next-line no-console
                console.error('Failed to load Pipedrive form script');
            };
            formContainer.appendChild(script);
            // Wait for iframe with timeout
            const checkIframe = setInterval(()=>{
                const iframe = formContainer.querySelector('iframe');
                if (iframe) {
                    clearInterval(checkIframe);
                    // Hide loader and show form with fade in
                    if (loader) loader.classList.add('contact-form-modal__form-loader--hidden');
                    formContainer.classList.add('pipedriveWebForms--loaded');
                    // eslint-disable-next-line no-console
                    console.log('Pipedrive form iframe loaded successfully');
                }
            }, 100);
            // Timeout after 10 seconds
            setTimeout(()=>{
                clearInterval(checkIframe);
                const iframe = formContainer.querySelector('iframe');
                if (!iframe) {
                    // eslint-disable-next-line no-console
                    console.error('Pipedrive form failed to load within 10 seconds');
                    if (loader && !formContainer.classList.contains('pipedriveWebForms--loaded')) loader.innerHTML = '<p style="color: #dcdde0;">Lomakkeen lataus ep\xe4onnistui. Yrit\xe4 uudelleen tai ota yhteytt\xe4 suoraan.</p>';
                }
            }, 10000);
        }
    };
    // Pre-create modal immediately for instant loading on click
    const preCreateModal = ()=>{
        // Only pre-create once and if not already created
        if (preCreatedModal || document.getElementById(MODAL_ID)) return;
        // Create modal but don't show it (don't add visible class)
        preCreatedModal = createModal();
        document.body.appendChild(preCreatedModal);
        // Start loading the Pipedrive form in the background
        const formContainer = preCreatedModal.querySelector('.pipedriveWebForms');
        if (formContainer) {
            const script = document.createElement('script');
            script.src = 'https://webforms.pipedrive.com/f/loader';
            script.async = true;
            formContainer.appendChild(script);
            // eslint-disable-next-line no-console
            console.log('Modal pre-created on page load, Pipedrive form loading in background');
        }
    };
    // Pre-create modal immediately when page loads (works with Swup.js)
    preCreateModal();
    // Handle button click
    contactButton.addEventListener('click', ()=>{
        trackClick();
        showModal();
        // Fire confetti after modal animation (300ms delay)
        setTimeout(()=>{
            fireConfetti();
        }, 350);
    });
};
exports.default = initContactFormModal;

},{"canvas-confetti":"eoMJO","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"eoMJO":[function(require,module,exports,__globalThis) {
// canvas-confetti v1.9.4 built on 2025-10-25T05:14:56.640Z
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "create", ()=>create);
var module = {};
// source content
/* globals Map */ (function main(global, module, isWorker, workerSize) {
    var canUseWorker = !!(global.Worker && global.Blob && global.Promise && global.OffscreenCanvas && global.OffscreenCanvasRenderingContext2D && global.HTMLCanvasElement && global.HTMLCanvasElement.prototype.transferControlToOffscreen && global.URL && global.URL.createObjectURL);
    var canUsePaths = typeof Path2D === 'function' && typeof DOMMatrix === 'function';
    var canDrawBitmap = function() {
        // this mostly supports ssr
        if (!global.OffscreenCanvas) return false;
        try {
            var canvas = new OffscreenCanvas(1, 1);
            var ctx = canvas.getContext('2d');
            ctx.fillRect(0, 0, 1, 1);
            var bitmap = canvas.transferToImageBitmap();
            ctx.createPattern(bitmap, 'no-repeat');
        } catch (e) {
            return false;
        }
        return true;
    }();
    function noop() {}
    // create a promise if it exists, otherwise, just
    // call the function directly
    function promise(func) {
        var ModulePromise = module.exports.Promise;
        var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;
        if (typeof Prom === 'function') return new Prom(func);
        func(noop, noop);
        return null;
    }
    var bitmapMapper = function(skipTransform, map) {
        // see https://github.com/catdad/canvas-confetti/issues/209
        // creating canvases is actually pretty expensive, so we should create a
        // 1:1 map for bitmap:canvas, so that we can animate the confetti in
        // a performant manner, but also not store them forever so that we don't
        // have a memory leak
        return {
            transform: function(bitmap) {
                if (skipTransform) return bitmap;
                if (map.has(bitmap)) return map.get(bitmap);
                var canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
                var ctx = canvas.getContext('2d');
                ctx.drawImage(bitmap, 0, 0);
                map.set(bitmap, canvas);
                return canvas;
            },
            clear: function() {
                map.clear();
            }
        };
    }(canDrawBitmap, new Map());
    var raf = function() {
        var TIME = Math.floor(1000 / 60);
        var frame, cancel;
        var frames = {};
        var lastFrameTime = 0;
        if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
            frame = function(cb) {
                var id = Math.random();
                frames[id] = requestAnimationFrame(function onFrame(time) {
                    if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
                        lastFrameTime = time;
                        delete frames[id];
                        cb();
                    } else frames[id] = requestAnimationFrame(onFrame);
                });
                return id;
            };
            cancel = function(id) {
                if (frames[id]) cancelAnimationFrame(frames[id]);
            };
        } else {
            frame = function(cb) {
                return setTimeout(cb, TIME);
            };
            cancel = function(timer) {
                return clearTimeout(timer);
            };
        }
        return {
            frame: frame,
            cancel: cancel
        };
    }();
    var getWorker = function() {
        var worker;
        var prom;
        var resolves = {};
        function decorate(worker) {
            function execute(options, callback) {
                worker.postMessage({
                    options: options || {},
                    callback: callback
                });
            }
            worker.init = function initWorker(canvas) {
                var offscreen = canvas.transferControlToOffscreen();
                worker.postMessage({
                    canvas: offscreen
                }, [
                    offscreen
                ]);
            };
            worker.fire = function fireWorker(options, size, done) {
                if (prom) {
                    execute(options, null);
                    return prom;
                }
                var id = Math.random().toString(36).slice(2);
                prom = promise(function(resolve) {
                    function workerDone(msg) {
                        if (msg.data.callback !== id) return;
                        delete resolves[id];
                        worker.removeEventListener('message', workerDone);
                        prom = null;
                        bitmapMapper.clear();
                        done();
                        resolve();
                    }
                    worker.addEventListener('message', workerDone);
                    execute(options, id);
                    resolves[id] = workerDone.bind(null, {
                        data: {
                            callback: id
                        }
                    });
                });
                return prom;
            };
            worker.reset = function resetWorker() {
                worker.postMessage({
                    reset: true
                });
                for(var id in resolves){
                    resolves[id]();
                    delete resolves[id];
                }
            };
        }
        return function() {
            if (worker) return worker;
            if (!isWorker && canUseWorker) {
                var code = [
                    'var CONFETTI, SIZE = {}, module = {};',
                    '(' + main.toString() + ')(this, module, true, SIZE);',
                    'onmessage = function(msg) {',
                    '  if (msg.data.options) {',
                    '    CONFETTI(msg.data.options).then(function () {',
                    '      if (msg.data.callback) {',
                    '        postMessage({ callback: msg.data.callback });',
                    '      }',
                    '    });',
                    '  } else if (msg.data.reset) {',
                    '    CONFETTI && CONFETTI.reset();',
                    '  } else if (msg.data.resize) {',
                    '    SIZE.width = msg.data.resize.width;',
                    '    SIZE.height = msg.data.resize.height;',
                    '  } else if (msg.data.canvas) {',
                    '    SIZE.width = msg.data.canvas.width;',
                    '    SIZE.height = msg.data.canvas.height;',
                    '    CONFETTI = module.exports.create(msg.data.canvas);',
                    '  }',
                    '}'
                ].join('\n');
                try {
                    worker = new Worker(URL.createObjectURL(new Blob([
                        code
                    ])));
                } catch (e) {
                    // eslint-disable-next-line no-console
                    typeof console !== 'undefined' && typeof console.warn === 'function' && console.warn("\uD83C\uDF8A Could not load worker", e);
                    return null;
                }
                decorate(worker);
            }
            return worker;
        };
    }();
    var defaults = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: 0.5,
        y: 0.5,
        shapes: [
            'square',
            'circle'
        ],
        zIndex: 100,
        colors: [
            '#26ccff',
            '#a25afd',
            '#ff5e7e',
            '#88ff5a',
            '#fcff42',
            '#ffa62d',
            '#ff36ff'
        ],
        // probably should be true, but back-compat
        disableForReducedMotion: false,
        scalar: 1
    };
    function convert(val, transform) {
        return transform ? transform(val) : val;
    }
    function isOk(val) {
        return !(val === null || val === undefined);
    }
    function prop(options, name, transform) {
        return convert(options && isOk(options[name]) ? options[name] : defaults[name], transform);
    }
    function onlyPositiveInt(number) {
        return number < 0 ? 0 : Math.floor(number);
    }
    function randomInt(min, max) {
        // [min, max)
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function toDecimal(str) {
        return parseInt(str, 16);
    }
    function colorsToRgb(colors) {
        return colors.map(hexToRgb);
    }
    function hexToRgb(str) {
        var val = String(str).replace(/[^0-9a-f]/gi, '');
        if (val.length < 6) val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
        return {
            r: toDecimal(val.substring(0, 2)),
            g: toDecimal(val.substring(2, 4)),
            b: toDecimal(val.substring(4, 6))
        };
    }
    function getOrigin(options) {
        var origin = prop(options, 'origin', Object);
        origin.x = prop(origin, 'x', Number);
        origin.y = prop(origin, 'y', Number);
        return origin;
    }
    function setCanvasWindowSize(canvas) {
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
    }
    function setCanvasRectSize(canvas) {
        var rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }
    function getCanvas(zIndex) {
        var canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0px';
        canvas.style.left = '0px';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = zIndex;
        return canvas;
    }
    function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
        context.save();
        context.translate(x, y);
        context.rotate(rotation);
        context.scale(radiusX, radiusY);
        context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
        context.restore();
    }
    function randomPhysics(opts) {
        var radAngle = opts.angle * (Math.PI / 180);
        var radSpread = opts.spread * (Math.PI / 180);
        return {
            x: opts.x,
            y: opts.y,
            wobble: Math.random() * 10,
            wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
            velocity: opts.startVelocity * 0.5 + Math.random() * opts.startVelocity,
            angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
            tiltAngle: (Math.random() * 0.5 + 0.25) * Math.PI,
            color: opts.color,
            shape: opts.shape,
            tick: 0,
            totalTicks: opts.ticks,
            decay: opts.decay,
            drift: opts.drift,
            random: Math.random() + 2,
            tiltSin: 0,
            tiltCos: 0,
            wobbleX: 0,
            wobbleY: 0,
            gravity: opts.gravity * 3,
            ovalScalar: 0.6,
            scalar: opts.scalar,
            flat: opts.flat
        };
    }
    function updateFetti(context, fetti) {
        fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
        fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
        fetti.velocity *= fetti.decay;
        if (fetti.flat) {
            fetti.wobble = 0;
            fetti.wobbleX = fetti.x + 10 * fetti.scalar;
            fetti.wobbleY = fetti.y + 10 * fetti.scalar;
            fetti.tiltSin = 0;
            fetti.tiltCos = 0;
            fetti.random = 1;
        } else {
            fetti.wobble += fetti.wobbleSpeed;
            fetti.wobbleX = fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble);
            fetti.wobbleY = fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble);
            fetti.tiltAngle += 0.1;
            fetti.tiltSin = Math.sin(fetti.tiltAngle);
            fetti.tiltCos = Math.cos(fetti.tiltAngle);
            fetti.random = Math.random() + 2;
        }
        var progress = fetti.tick++ / fetti.totalTicks;
        var x1 = fetti.x + fetti.random * fetti.tiltCos;
        var y1 = fetti.y + fetti.random * fetti.tiltSin;
        var x2 = fetti.wobbleX + fetti.random * fetti.tiltCos;
        var y2 = fetti.wobbleY + fetti.random * fetti.tiltSin;
        context.fillStyle = 'rgba(' + fetti.color.r + ', ' + fetti.color.g + ', ' + fetti.color.b + ', ' + (1 - progress) + ')';
        context.beginPath();
        if (canUsePaths && fetti.shape.type === 'path' && typeof fetti.shape.path === 'string' && Array.isArray(fetti.shape.matrix)) context.fill(transformPath2D(fetti.shape.path, fetti.shape.matrix, fetti.x, fetti.y, Math.abs(x2 - x1) * 0.1, Math.abs(y2 - y1) * 0.1, Math.PI / 10 * fetti.wobble));
        else if (fetti.shape.type === 'bitmap') {
            var rotation = Math.PI / 10 * fetti.wobble;
            var scaleX = Math.abs(x2 - x1) * 0.1;
            var scaleY = Math.abs(y2 - y1) * 0.1;
            var width = fetti.shape.bitmap.width * fetti.scalar;
            var height = fetti.shape.bitmap.height * fetti.scalar;
            var matrix = new DOMMatrix([
                Math.cos(rotation) * scaleX,
                Math.sin(rotation) * scaleX,
                -Math.sin(rotation) * scaleY,
                Math.cos(rotation) * scaleY,
                fetti.x,
                fetti.y
            ]);
            // apply the transform matrix from the confetti shape
            matrix.multiplySelf(new DOMMatrix(fetti.shape.matrix));
            var pattern = context.createPattern(bitmapMapper.transform(fetti.shape.bitmap), 'no-repeat');
            pattern.setTransform(matrix);
            context.globalAlpha = 1 - progress;
            context.fillStyle = pattern;
            context.fillRect(fetti.x - width / 2, fetti.y - height / 2, width, height);
            context.globalAlpha = 1;
        } else if (fetti.shape === 'circle') context.ellipse ? context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) : ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
        else if (fetti.shape === 'star') {
            var rot = Math.PI / 2 * 3;
            var innerRadius = 4 * fetti.scalar;
            var outerRadius = 8 * fetti.scalar;
            var x = fetti.x;
            var y = fetti.y;
            var spikes = 5;
            var step = Math.PI / spikes;
            while(spikes--){
                x = fetti.x + Math.cos(rot) * outerRadius;
                y = fetti.y + Math.sin(rot) * outerRadius;
                context.lineTo(x, y);
                rot += step;
                x = fetti.x + Math.cos(rot) * innerRadius;
                y = fetti.y + Math.sin(rot) * innerRadius;
                context.lineTo(x, y);
                rot += step;
            }
        } else {
            context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
            context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
            context.lineTo(Math.floor(x2), Math.floor(y2));
            context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
        }
        context.closePath();
        context.fill();
        return fetti.tick < fetti.totalTicks;
    }
    function animate(canvas, fettis, resizer, size, done) {
        var animatingFettis = fettis.slice();
        var context = canvas.getContext('2d');
        var animationFrame;
        var destroy;
        var prom = promise(function(resolve) {
            function onDone() {
                animationFrame = destroy = null;
                context.clearRect(0, 0, size.width, size.height);
                bitmapMapper.clear();
                done();
                resolve();
            }
            function update() {
                if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
                    size.width = canvas.width = workerSize.width;
                    size.height = canvas.height = workerSize.height;
                }
                if (!size.width && !size.height) {
                    resizer(canvas);
                    size.width = canvas.width;
                    size.height = canvas.height;
                }
                context.clearRect(0, 0, size.width, size.height);
                animatingFettis = animatingFettis.filter(function(fetti) {
                    return updateFetti(context, fetti);
                });
                if (animatingFettis.length) animationFrame = raf.frame(update);
                else onDone();
            }
            animationFrame = raf.frame(update);
            destroy = onDone;
        });
        return {
            addFettis: function(fettis) {
                animatingFettis = animatingFettis.concat(fettis);
                return prom;
            },
            canvas: canvas,
            promise: prom,
            reset: function() {
                if (animationFrame) raf.cancel(animationFrame);
                if (destroy) destroy();
            }
        };
    }
    function confettiCannon(canvas, globalOpts) {
        var isLibCanvas = !canvas;
        var allowResize = !!prop(globalOpts || {}, 'resize');
        var hasResizeEventRegistered = false;
        var globalDisableForReducedMotion = prop(globalOpts, 'disableForReducedMotion', Boolean);
        var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, 'useWorker');
        var worker = shouldUseWorker ? getWorker() : null;
        var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
        var initialized = canvas && worker ? !!canvas.__confetti_initialized : false;
        var preferLessMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion)').matches;
        var animationObj;
        function fireLocal(options, size, done) {
            var particleCount = prop(options, 'particleCount', onlyPositiveInt);
            var angle = prop(options, 'angle', Number);
            var spread = prop(options, 'spread', Number);
            var startVelocity = prop(options, 'startVelocity', Number);
            var decay = prop(options, 'decay', Number);
            var gravity = prop(options, 'gravity', Number);
            var drift = prop(options, 'drift', Number);
            var colors = prop(options, 'colors', colorsToRgb);
            var ticks = prop(options, 'ticks', Number);
            var shapes = prop(options, 'shapes');
            var scalar = prop(options, 'scalar');
            var flat = !!prop(options, 'flat');
            var origin = getOrigin(options);
            var temp = particleCount;
            var fettis = [];
            var startX = canvas.width * origin.x;
            var startY = canvas.height * origin.y;
            while(temp--)fettis.push(randomPhysics({
                x: startX,
                y: startY,
                angle: angle,
                spread: spread,
                startVelocity: startVelocity,
                color: colors[temp % colors.length],
                shape: shapes[randomInt(0, shapes.length)],
                ticks: ticks,
                decay: decay,
                gravity: gravity,
                drift: drift,
                scalar: scalar,
                flat: flat
            }));
            // if we have a previous canvas already animating,
            // add to it
            if (animationObj) return animationObj.addFettis(fettis);
            animationObj = animate(canvas, fettis, resizer, size, done);
            return animationObj.promise;
        }
        function fire(options) {
            var disableForReducedMotion = globalDisableForReducedMotion || prop(options, 'disableForReducedMotion', Boolean);
            var zIndex = prop(options, 'zIndex', Number);
            if (disableForReducedMotion && preferLessMotion) return promise(function(resolve) {
                resolve();
            });
            if (isLibCanvas && animationObj) // use existing canvas from in-progress animation
            canvas = animationObj.canvas;
            else if (isLibCanvas && !canvas) {
                // create and initialize a new canvas
                canvas = getCanvas(zIndex);
                document.body.appendChild(canvas);
            }
            if (allowResize && !initialized) // initialize the size of a user-supplied canvas
            resizer(canvas);
            var size = {
                width: canvas.width,
                height: canvas.height
            };
            if (worker && !initialized) worker.init(canvas);
            initialized = true;
            if (worker) canvas.__confetti_initialized = true;
            function onResize() {
                if (worker) {
                    // TODO this really shouldn't be immediate, because it is expensive
                    var obj = {
                        getBoundingClientRect: function() {
                            if (!isLibCanvas) return canvas.getBoundingClientRect();
                        }
                    };
                    resizer(obj);
                    worker.postMessage({
                        resize: {
                            width: obj.width,
                            height: obj.height
                        }
                    });
                    return;
                }
                // don't actually query the size here, since this
                // can execute frequently and rapidly
                size.width = size.height = null;
            }
            function done() {
                animationObj = null;
                if (allowResize) {
                    hasResizeEventRegistered = false;
                    global.removeEventListener('resize', onResize);
                }
                if (isLibCanvas && canvas) {
                    if (document.body.contains(canvas)) document.body.removeChild(canvas);
                    canvas = null;
                    initialized = false;
                }
            }
            if (allowResize && !hasResizeEventRegistered) {
                hasResizeEventRegistered = true;
                global.addEventListener('resize', onResize, false);
            }
            if (worker) return worker.fire(options, size, done);
            return fireLocal(options, size, done);
        }
        fire.reset = function() {
            if (worker) worker.reset();
            if (animationObj) animationObj.reset();
        };
        return fire;
    }
    // Make default export lazy to defer worker creation until called.
    var defaultFire;
    function getDefaultFire() {
        if (!defaultFire) defaultFire = confettiCannon(null, {
            useWorker: true,
            resize: true
        });
        return defaultFire;
    }
    function transformPath2D(pathString, pathMatrix, x, y, scaleX, scaleY, rotation) {
        var path2d = new Path2D(pathString);
        var t1 = new Path2D();
        t1.addPath(path2d, new DOMMatrix(pathMatrix));
        var t2 = new Path2D();
        // see https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix/DOMMatrix
        t2.addPath(t1, new DOMMatrix([
            Math.cos(rotation) * scaleX,
            Math.sin(rotation) * scaleX,
            -Math.sin(rotation) * scaleY,
            Math.cos(rotation) * scaleY,
            x,
            y
        ]));
        return t2;
    }
    function shapeFromPath(pathData) {
        if (!canUsePaths) throw new Error('path confetti are not supported in this browser');
        var path, matrix;
        if (typeof pathData === 'string') path = pathData;
        else {
            path = pathData.path;
            matrix = pathData.matrix;
        }
        var path2d = new Path2D(path);
        var tempCanvas = document.createElement('canvas');
        var tempCtx = tempCanvas.getContext('2d');
        if (!matrix) {
            // attempt to figure out the width of the path, up to 1000x1000
            var maxSize = 1000;
            var minX = maxSize;
            var minY = maxSize;
            var maxX = 0;
            var maxY = 0;
            var width, height;
            // do some line skipping... this is faster than checking
            // every pixel and will be mostly still correct
            for(var x = 0; x < maxSize; x += 2){
                for(var y = 0; y < maxSize; y += 2)if (tempCtx.isPointInPath(path2d, x, y, 'nonzero')) {
                    minX = Math.min(minX, x);
                    minY = Math.min(minY, y);
                    maxX = Math.max(maxX, x);
                    maxY = Math.max(maxY, y);
                }
            }
            width = maxX - minX;
            height = maxY - minY;
            var maxDesiredSize = 10;
            var scale = Math.min(maxDesiredSize / width, maxDesiredSize / height);
            matrix = [
                scale,
                0,
                0,
                scale,
                -Math.round(width / 2 + minX) * scale,
                -Math.round(height / 2 + minY) * scale
            ];
        }
        return {
            type: 'path',
            path: path,
            matrix: matrix
        };
    }
    function shapeFromText(textData) {
        var text, scalar = 1, color = '#000000', // see https://nolanlawson.com/2022/04/08/the-struggle-of-using-native-emoji-on-the-web/
        fontFamily = '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
        if (typeof textData === 'string') text = textData;
        else {
            text = textData.text;
            scalar = 'scalar' in textData ? textData.scalar : scalar;
            fontFamily = 'fontFamily' in textData ? textData.fontFamily : fontFamily;
            color = 'color' in textData ? textData.color : color;
        }
        // all other confetti are 10 pixels,
        // so this pixel size is the de-facto 100% scale confetti
        var fontSize = 10 * scalar;
        var font = '' + fontSize + 'px ' + fontFamily;
        var canvas = new OffscreenCanvas(fontSize, fontSize);
        var ctx = canvas.getContext('2d');
        ctx.font = font;
        var size = ctx.measureText(text);
        var width = Math.ceil(size.actualBoundingBoxRight + size.actualBoundingBoxLeft);
        var height = Math.ceil(size.actualBoundingBoxAscent + size.actualBoundingBoxDescent);
        var padding = 2;
        var x = size.actualBoundingBoxLeft + padding;
        var y = size.actualBoundingBoxAscent + padding;
        width += padding + padding;
        height += padding + padding;
        canvas = new OffscreenCanvas(width, height);
        ctx = canvas.getContext('2d');
        ctx.font = font;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
        var scale = 1 / scalar;
        return {
            type: 'bitmap',
            // TODO these probably need to be transfered for workers
            bitmap: canvas.transferToImageBitmap(),
            matrix: [
                scale,
                0,
                0,
                scale,
                -width * scale / 2,
                -height * scale / 2
            ]
        };
    }
    module.exports = function() {
        return getDefaultFire().apply(this, arguments);
    };
    module.exports.reset = function() {
        getDefaultFire().reset();
    };
    module.exports.create = confettiCannon;
    module.exports.shapeFromPath = shapeFromPath;
    module.exports.shapeFromText = shapeFromText;
})(function() {
    if (typeof window !== 'undefined') return window;
    if (typeof self !== 'undefined') return self;
    return this || {};
}(), module, false);
// end source content
exports.default = module.exports;
var create = module.exports.create;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"cpx8h":[function(require,module,exports,__globalThis) {
/**
 * Swup native block styles handler
 * Ensures WordPress native block styles are loaded when navigating with swup
 */ /**
 * Check if native pricing blocks exist on page and load their styles if missing
 * WordPress conditionally loads block styles, but swup doesn't trigger the reload
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>reloadNativeBlockStyles);
function reloadNativeBlockStyles() {
    // Define our native blocks that have stylesheets
    // Note: pricing-item doesn't have its own stylesheet (styles inherited from pricing-category)
    const blockChecks = [
        {
            selector: '.wp-block-dude-pricing-hero, .block-pricing-hero',
            handle: 'dude-pricing-hero-style',
            block: 'pricing-hero'
        },
        {
            selector: '.wp-block-dude-pricing-category, .block-pricing-category',
            handle: 'dude-pricing-category-style',
            block: 'pricing-category'
        },
        {
            selector: '.wp-block-dude-pricing-cta, .block-pricing-cta',
            handle: 'dude-pricing-cta-style',
            block: 'pricing-cta'
        },
        {
            selector: '.wp-block-dude-pricing-faq, .block-pricing-faq',
            handle: 'dude-pricing-faq-style',
            block: 'pricing-faq'
        }
    ];
    blockChecks.forEach(({ selector, handle, block })=>{
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}]},["9r0qo"], "9r0qo", "parcelRequire724d", {})

