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
})({"7Lukr":[function(require,module,exports,__globalThis) {
/**
 * Polyfills etc. for legacy browsers (pre ES2015/ES6)
 */ // Import polyfills and shims
var _airbnbBrowserShims = require("airbnb-browser-shims");

},{"airbnb-browser-shims":"hoawV"}],"hoawV":[function(require,module,exports,__globalThis) {
'use strict';
/* eslint global-require: 0 */ require("7070403852bed6fd");
require("bcb220e76a220abb");

},{"7070403852bed6fd":"MAyZ2","bcb220e76a220abb":"jRi7f"}],"MAyZ2":[function(require,module,exports,__globalThis) {
'use strict';
require("2bfd14d246ff428a");

},{"2bfd14d246ff428a":"1qgzL"}],"1qgzL":[function(require,module,exports,__globalThis) {
'use strict';
require("561a79bd43618df3");
require("42b876cdce2f2421");
require("6da0fd441fc46a49");

},{"561a79bd43618df3":"9cCQX","42b876cdce2f2421":"2OzCo","6da0fd441fc46a49":"5M9qy"}],"9cCQX":[function(require,module,exports,__globalThis) {
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2020 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */ // vim: ts=4 sts=4 sw=4 expandtab
// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function(root, factory) {
    'use strict';
    /* global define */ if (typeof define === 'function' && define.amd) // AMD. Register as an anonymous module.
    define(factory);
    else // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
})(this, function() {
    /**
     * Brings an environment as close to ECMAScript 5 compliance
     * as is possible with the facilities of erstwhile engines.
     *
     * Annotated ES5: https://es5.github.io/ (specific links below)
     * ES5 Spec: https://www.ecma-international.org/wp-content/uploads/ECMA-262_5.1_edition_june_2011.pdf
     * Required reading: https://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
     */ // Shortcut to an often accessed properties, in order to avoid multiple
    // dereference that costs universally. This also holds a reference to known-good
    // functions.
    var $Array = Array;
    var ArrayPrototype = $Array.prototype;
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    var $Function = Function;
    var FunctionPrototype = $Function.prototype;
    var $String = String;
    var StringPrototype = $String.prototype;
    var $Number = Number;
    var NumberPrototype = $Number.prototype;
    var array_slice = ArrayPrototype.slice;
    var array_splice = ArrayPrototype.splice;
    var array_push = ArrayPrototype.push;
    var array_unshift = ArrayPrototype.unshift;
    var array_concat = ArrayPrototype.concat;
    var array_join = ArrayPrototype.join;
    var call = FunctionPrototype.call;
    var apply = FunctionPrototype.apply;
    var max = Math.max;
    var min = Math.min;
    var floor = Math.floor;
    var abs = Math.abs;
    var pow = Math.pow;
    var round = Math.round;
    var log = Math.log;
    var LOG10E = Math.LOG10E;
    var log10 = Math.log10 || function log10(value) {
        return log(value) * LOG10E;
    };
    // Having a toString local variable name breaks in Opera so use to_string.
    var to_string = ObjectPrototype.toString;
    /* eslint-disable one-var-declaration-per-line, no-redeclare, max-statements-per-line */ var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
    var isCallable; /* inlined from https://npmjs.com/is-callable */ 
    var fnToStr = Function.prototype.toString, constructorRegex = /^\s*class /, isES6ClassFn = function isES6ClassFn(value) {
        try {
            var fnStr = fnToStr.call(value);
            var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
            var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
            var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
            return constructorRegex.test(spaceStripped);
        } catch (e) {
            return false; /* not a function */ 
        }
    }, tryFunctionObject = function tryFunctionObject(value) {
        try {
            if (isES6ClassFn(value)) return false;
            fnToStr.call(value);
            return true;
        } catch (e) {
            return false;
        }
    }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]', isCallable = function isCallable(value) {
        if (!value) return false;
        if (typeof value !== 'function' && typeof value !== 'object') return false;
        if (hasToStringTag) return tryFunctionObject(value);
        if (isES6ClassFn(value)) return false;
        var strClass = to_string.call(value);
        return strClass === fnClass || strClass === genClass;
    };
    var isRegex; /* inlined from https://npmjs.com/is-regex */ 
    var regexExec = RegExp.prototype.exec, tryRegexExec = function tryRegexExec(value) {
        try {
            regexExec.call(value);
            return true;
        } catch (e) {
            return false;
        }
    }, regexClass = '[object RegExp]';
    isRegex = function isRegex(value) {
        if (typeof value !== 'object') return false;
        return hasToStringTag ? tryRegexExec(value) : to_string.call(value) === regexClass;
    };
    var isString; /* inlined from https://npmjs.com/is-string */ 
    var strValue = String.prototype.valueOf, tryStringObject = function tryStringObject(value) {
        try {
            strValue.call(value);
            return true;
        } catch (e) {
            return false;
        }
    }, stringClass = '[object String]';
    isString = function isString(value) {
        if (typeof value === 'string') return true;
        if (typeof value !== 'object') return false;
        return hasToStringTag ? tryStringObject(value) : to_string.call(value) === stringClass;
    };
    /* eslint-enable one-var-declaration-per-line, no-redeclare, max-statements-per-line */ /* inlined from https://npmjs.com/define-properties */ var supportsDescriptors = $Object.defineProperty && function() {
        try {
            var obj = {};
            $Object.defineProperty(obj, 'x', {
                enumerable: false,
                value: obj
            });
            // eslint-disable-next-line no-unreachable-loop, max-statements-per-line
            for(var _ in obj)return false;
             // jscs:ignore disallowUnusedVariables
            return obj.x === obj;
        } catch (e) {
            return false;
        }
    }();
    var defineProperties = function(has) {
        // Define configurable, writable, and non-enumerable props
        // if they don't exist.
        var defineProperty;
        if (supportsDescriptors) defineProperty = function(object, name, method, forceAssign) {
            if (!forceAssign && name in object) return;
            $Object.defineProperty(object, name, {
                configurable: true,
                enumerable: false,
                writable: true,
                value: method
            });
        };
        else defineProperty = function(object, name, method, forceAssign) {
            if (!forceAssign && name in object) return;
            object[name] = method; // eslint-disable-line no-param-reassign
        };
        return function defineProperties(object, map, forceAssign) {
            for(var name in map)if (has.call(map, name)) defineProperty(object, name, map[name], forceAssign);
        };
    }(ObjectPrototype.hasOwnProperty);
    // this is needed in Chrome 15 (probably earlier) - 36
    // https://bugs.chromium.org/p/v8/issues/detail?id=3334
    if ($Object.defineProperty && supportsDescriptors) {
        var F = function() {};
        var toStringSentinel = {};
        var sentinel = {
            toString: toStringSentinel
        };
        $Object.defineProperty(F, 'prototype', {
            value: sentinel,
            writable: false
        });
        if (new F().toString !== toStringSentinel) {
            var $dP = $Object.defineProperty;
            var $gOPD = $Object.getOwnPropertyDescriptor;
            defineProperties($Object, {
                defineProperty: function defineProperty(o, k, d) {
                    var key = $String(k);
                    if (typeof o === 'function' && key === 'prototype') {
                        var desc = $gOPD(o, key);
                        if (desc.writable && !d.writable && 'value' in d) try {
                            o[key] = d.value; // eslint-disable-line no-param-reassign
                        } catch (e) {}
                        return $dP(o, key, {
                            configurable: 'configurable' in d ? d.configurable : desc.configurable,
                            enumerable: 'enumerable' in d ? d.enumerable : desc.enumerable,
                            writable: d.writable
                        });
                    }
                    return $dP(o, key, d);
                }
            }, true);
        }
    }
    //
    // Util
    // ======
    //
    /* replaceable with https://npmjs.com/package/es-abstract /helpers/isPrimitive */ var isPrimitive = function isPrimitive(input) {
        var type = typeof input;
        return input === null || type !== 'object' && type !== 'function';
    };
    var isActualNaN = $Number.isNaN || function isActualNaN(x) {
        return x !== x;
    };
    var ES = {
        // ES5 9.4
        // https://es5.github.io/#x9.4
        // http://jsperf.com/to-integer
        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToInteger */ ToInteger: function ToInteger(num) {
            var n = +num;
            if (isActualNaN(n)) n = 0;
            else if (n !== 0 && n !== 1 / 0 && n !== -1 / 0) n = (n > 0 || -1) * floor(abs(n));
            return n;
        },
        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToPrimitive */ ToPrimitive: function ToPrimitive(input) {
            var val, valueOf, toStr;
            if (isPrimitive(input)) return input;
            valueOf = input.valueOf;
            if (isCallable(valueOf)) {
                val = valueOf.call(input);
                if (isPrimitive(val)) return val;
            }
            toStr = input.toString;
            if (isCallable(toStr)) {
                val = toStr.call(input);
                if (isPrimitive(val)) return val;
            }
            throw new TypeError();
        },
        // ES5 9.9
        // https://es5.github.io/#x9.9
        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToObject */ ToObject: function(o) {
            if (o == null) throw new TypeError("can't convert " + o + ' to object');
            return $Object(o);
        },
        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToUint32 */ ToUint32: function ToUint32(x) {
            return x >>> 0;
        }
    };
    //
    // Function
    // ========
    //
    // ES-5 15.3.4.5
    // https://es5.github.io/#x15.3.4.5
    var Empty = function Empty() {};
    defineProperties(FunctionPrototype, {
        bind: function bind(that) {
            // 1. Let Target be the this value.
            var target = this;
            // 2. If IsCallable(Target) is false, throw a TypeError exception.
            if (!isCallable(target)) throw new TypeError('Function.prototype.bind called on incompatible ' + target);
            // 3. Let A be a new (possibly empty) internal list of all of the
            //   argument values provided after thisArg (arg1, arg2 etc), in order.
            // XXX slicedArgs will stand in for "A" if used
            var args = array_slice.call(arguments, 1); // for normal call
            // 4. Let F be a new native ECMAScript object.
            // 11. Set the [[Prototype]] internal property of F to the standard
            //   built-in Function prototype object as specified in 15.3.3.1.
            // 12. Set the [[Call]] internal property of F as described in
            //   15.3.4.5.1.
            // 13. Set the [[Construct]] internal property of F as described in
            //   15.3.4.5.2.
            // 14. Set the [[HasInstance]] internal property of F as described in
            //   15.3.4.5.3.
            var bound;
            var binder = function() {
                if (this instanceof bound) {
                    // 15.3.4.5.2 [[Construct]]
                    // When the [[Construct]] internal method of a function object,
                    // F that was created using the bind function is called with a
                    // list of arguments ExtraArgs, the following steps are taken:
                    // 1. Let target be the value of F's [[TargetFunction]]
                    //   internal property.
                    // 2. If target has no [[Construct]] internal method, a
                    //   TypeError exception is thrown.
                    // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                    //   property.
                    // 4. Let args be a new list containing the same values as the
                    //   list boundArgs in the same order followed by the same
                    //   values as the list ExtraArgs in the same order.
                    // 5. Return the result of calling the [[Construct]] internal
                    //   method of target providing args as the arguments.
                    var result = apply.call(target, this, array_concat.call(args, array_slice.call(arguments)));
                    if ($Object(result) === result) return result;
                    return this;
                }
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.
                // equiv: target.call(this, ...boundArgs, ...args)
                return apply.call(target, that, array_concat.call(args, array_slice.call(arguments)));
            };
            // 15. If the [[Class]] internal property of Target is "Function", then
            //     a. Let L be the length property of Target minus the length of A.
            //     b. Set the length own property of F to either 0 or L, whichever is
            //       larger.
            // 16. Else set the length own property of F to 0.
            var boundLength = max(0, target.length - args.length);
            // 17. Set the attributes of the length own property of F to the values
            //   specified in 15.3.5.1.
            var boundArgs = [];
            for(var i = 0; i < boundLength; i++)array_push.call(boundArgs, '$' + i);
            // XXX Build a dynamic function with desired amount of arguments is the only
            // way to set the length property of a function.
            // In environments where Content Security Policies enabled (Chrome extensions,
            // for ex.) all use of eval or Function costructor throws an exception.
            // However in all of these environments Function.prototype.bind exists
            // and so this code will never be executed.
            bound = $Function('binder', 'return function (' + array_join.call(boundArgs, ',') + '){ return binder.apply(this, arguments); }')(binder);
            if (target.prototype) {
                Empty.prototype = target.prototype;
                bound.prototype = new Empty();
                // Clean up dangling references.
                Empty.prototype = null;
            }
            // TODO
            // 18. Set the [[Extensible]] internal property of F to true.
            // TODO
            // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
            // 20. Call the [[DefineOwnProperty]] internal method of F with
            //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
            //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
            //   false.
            // 21. Call the [[DefineOwnProperty]] internal method of F with
            //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
            //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
            //   and false.
            // TODO
            // NOTE Function objects created using Function.prototype.bind do not
            // have a prototype property or the [[Code]], [[FormalParameters]], and
            // [[Scope]] internal properties.
            // XXX can't delete prototype in pure-js.
            // 22. Return F.
            return bound;
        }
    });
    // _Please note: Shortcuts are defined after `Function.prototype.bind` as we
    // use it in defining shortcuts.
    var owns = call.bind(ObjectPrototype.hasOwnProperty);
    var toStr = call.bind(ObjectPrototype.toString);
    var arraySlice = call.bind(array_slice);
    var arraySliceApply = apply.bind(array_slice);
    /* globals document */ if (typeof document === 'object' && document && document.documentElement) try {
        arraySlice(document.documentElement.childNodes);
    } catch (e) {
        var origArraySlice = arraySlice;
        var origArraySliceApply = arraySliceApply;
        arraySlice = function arraySliceIE(arr) {
            var r = [];
            var i = arr.length;
            while(i-- > 0)r[i] = arr[i];
            return origArraySliceApply(r, origArraySlice(arguments, 1));
        };
        arraySliceApply = function arraySliceApplyIE(arr, args) {
            return origArraySliceApply(arraySlice(arr), args);
        };
    }
    var strSlice = call.bind(StringPrototype.slice);
    var strSplit = call.bind(StringPrototype.split);
    var strIndexOf = call.bind(StringPrototype.indexOf);
    var pushCall = call.bind(array_push);
    var isEnum = call.bind(ObjectPrototype.propertyIsEnumerable);
    var arraySort = call.bind(ArrayPrototype.sort);
    //
    // Array
    // =====
    //
    var isArray = $Array.isArray || function isArray(obj) {
        return toStr(obj) === '[object Array]';
    };
    // ES5 15.4.4.12
    // https://es5.github.io/#x15.4.4.13
    // Return len+argCount.
    // [bugfix, ielt8]
    // IE < 8 bug: [].unshift(0) === undefined but should be "1"
    var hasUnshiftReturnValueBug = [].unshift(0) !== 1;
    defineProperties(ArrayPrototype, {
        unshift: function() {
            array_unshift.apply(this, arguments);
            return this.length;
        }
    }, hasUnshiftReturnValueBug);
    // ES5 15.4.3.2
    // https://es5.github.io/#x15.4.3.2
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
    defineProperties($Array, {
        isArray: isArray
    });
    // The IsCallable() check in the Array functions
    // has been replaced with a strict check on the
    // internal class of the object to trap cases where
    // the provided function was actually a regular
    // expression literal, which in V8 and
    // JavaScriptCore is a typeof "function".  Only in
    // V8 are regular expression literals permitted as
    // reduce parameters, so it is desirable in the
    // general case for the shim to match the more
    // strict and common behavior of rejecting regular
    // expressions.
    // ES5 15.4.4.18
    // https://es5.github.io/#x15.4.4.18
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach
    // Check failure of by-index access of string characters (IE < 9)
    // and failure of `0 in boxedString` (Rhino)
    var boxedString = $Object('a');
    var splitString = boxedString[0] !== 'a' || !(0 in boxedString);
    var properlyBoxesContext = function properlyBoxed(method) {
        // Check node 0.6.21 bug where third parameter is not boxed
        var properlyBoxesNonStrict = true;
        var properlyBoxesStrict = true;
        var threwException = false;
        if (method) try {
            method.call('foo', function(_, __, context) {
                if (typeof context !== 'object') properlyBoxesNonStrict = false;
            });
            method.call([
                1
            ], function() {
                'use strict';
                properlyBoxesStrict = typeof this === 'string';
            }, 'x');
        } catch (e) {
            threwException = true;
        }
        return !!method && !threwException && properlyBoxesNonStrict && properlyBoxesStrict;
    };
    defineProperties(ArrayPrototype, {
        forEach: function forEach(callbackfn /*, thisArg*/ ) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var i = -1;
            var length = ES.ToUint32(self.length);
            var T;
            if (arguments.length > 1) T = arguments[1];
            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) throw new TypeError('Array.prototype.forEach callback must be a function');
            while(++i < length)if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object
                if (typeof T === 'undefined') callbackfn(self[i], i, object);
                else callbackfn.call(T, self[i], i, object);
            }
        }
    }, !properlyBoxesContext(ArrayPrototype.forEach));
    // ES5 15.4.4.19
    // https://es5.github.io/#x15.4.4.19
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
    defineProperties(ArrayPrototype, {
        map: function map(callbackfn /*, thisArg*/ ) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            var result = $Array(length);
            var T;
            if (arguments.length > 1) T = arguments[1];
            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) throw new TypeError('Array.prototype.map callback must be a function');
            for(var i = 0; i < length; i++)if (i in self) {
                if (typeof T === 'undefined') result[i] = callbackfn(self[i], i, object);
                else result[i] = callbackfn.call(T, self[i], i, object);
            }
            return result;
        }
    }, !properlyBoxesContext(ArrayPrototype.map));
    // ES5 15.4.4.20
    // https://es5.github.io/#x15.4.4.20
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
    defineProperties(ArrayPrototype, {
        filter: function filter(callbackfn /*, thisArg*/ ) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            var result = [];
            var value;
            var T;
            if (arguments.length > 1) T = arguments[1];
            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) throw new TypeError('Array.prototype.filter callback must be a function');
            for(var i = 0; i < length; i++)if (i in self) {
                value = self[i];
                if (typeof T === 'undefined' ? callbackfn(value, i, object) : callbackfn.call(T, value, i, object)) pushCall(result, value);
            }
            return result;
        }
    }, !properlyBoxesContext(ArrayPrototype.filter));
    // ES5 15.4.4.16
    // https://es5.github.io/#x15.4.4.16
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
    defineProperties(ArrayPrototype, {
        every: function every(callbackfn /*, thisArg*/ ) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            var T;
            if (arguments.length > 1) T = arguments[1];
            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) throw new TypeError('Array.prototype.every callback must be a function');
            for(var i = 0; i < length; i++){
                if (i in self && !(typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) return false;
            }
            return true;
        }
    }, !properlyBoxesContext(ArrayPrototype.every));
    // ES5 15.4.4.17
    // https://es5.github.io/#x15.4.4.17
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
    defineProperties(ArrayPrototype, {
        some: function some(callbackfn /*, thisArg */ ) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            var T;
            if (arguments.length > 1) T = arguments[1];
            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) throw new TypeError('Array.prototype.some callback must be a function');
            for(var i = 0; i < length; i++){
                if (i in self && (typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) return true;
            }
            return false;
        }
    }, !properlyBoxesContext(ArrayPrototype.some));
    // ES5 15.4.4.21
    // https://es5.github.io/#x15.4.4.21
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
    var reduceCoercesToObject = false;
    if (ArrayPrototype.reduce) reduceCoercesToObject = typeof ArrayPrototype.reduce.call('es5', function(_, __, ___, list) {
        return list;
    }) === 'object';
    defineProperties(ArrayPrototype, {
        reduce: function reduce(callbackfn /*, initialValue*/ ) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) throw new TypeError('Array.prototype.reduce callback must be a function');
            // no value to return if no initial value and an empty array
            if (length === 0 && arguments.length === 1) throw new TypeError('reduce of empty array with no initial value');
            var i = 0;
            var result;
            if (arguments.length >= 2) result = arguments[1];
            else do {
                if (i in self) {
                    result = self[i++];
                    break;
                }
                // if array contains no values, no initial value to return
                if (++i >= length) throw new TypeError('reduce of empty array with no initial value');
            }while (true);
            for(; i < length; i++)if (i in self) result = callbackfn(result, self[i], i, object);
            return result;
        }
    }, !reduceCoercesToObject);
    // ES5 15.4.4.22
    // https://es5.github.io/#x15.4.4.22
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
    var reduceRightCoercesToObject = false;
    if (ArrayPrototype.reduceRight) reduceRightCoercesToObject = typeof ArrayPrototype.reduceRight.call('es5', function(_, __, ___, list) {
        return list;
    }) === 'object';
    defineProperties(ArrayPrototype, {
        reduceRight: function reduceRight(callbackfn /*, initial*/ ) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) throw new TypeError('Array.prototype.reduceRight callback must be a function');
            // no value to return if no initial value, empty array
            if (length === 0 && arguments.length === 1) throw new TypeError('reduceRight of empty array with no initial value');
            var result;
            var i = length - 1;
            if (arguments.length >= 2) result = arguments[1];
            else do {
                if (i in self) {
                    result = self[i--];
                    break;
                }
                // if array contains no values, no initial value to return
                if (--i < 0) throw new TypeError('reduceRight of empty array with no initial value');
            }while (true);
            if (i < 0) return result;
            do if (i in self) result = callbackfn(result, self[i], i, object);
            while (i--);
            return result;
        }
    }, !reduceRightCoercesToObject);
    // ES5 15.4.4.14
    // https://es5.github.io/#x15.4.4.14
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
    var hasFirefox2IndexOfBug = ArrayPrototype.indexOf && [
        0,
        1
    ].indexOf(1, 2) !== -1;
    defineProperties(ArrayPrototype, {
        indexOf: function indexOf(searchElement /*, fromIndex */ ) {
            var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
            var length = ES.ToUint32(self.length);
            if (length === 0) return -1;
            var i = 0;
            if (arguments.length > 1) i = ES.ToInteger(arguments[1]);
            // handle negative indices
            i = i >= 0 ? i : max(0, length + i);
            for(; i < length; i++){
                if (i in self && self[i] === searchElement) return i;
            }
            return -1;
        }
    }, hasFirefox2IndexOfBug);
    // ES5 15.4.4.15
    // https://es5.github.io/#x15.4.4.15
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
    var hasFirefox2LastIndexOfBug = ArrayPrototype.lastIndexOf && [
        0,
        1
    ].lastIndexOf(0, -3) !== -1;
    defineProperties(ArrayPrototype, {
        lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */ ) {
            var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
            var length = ES.ToUint32(self.length);
            if (length === 0) return -1;
            var i = length - 1;
            if (arguments.length > 1) i = min(i, ES.ToInteger(arguments[1]));
            // handle negative indices
            i = i >= 0 ? i : length - abs(i);
            for(; i >= 0; i--){
                if (i in self && searchElement === self[i]) return i;
            }
            return -1;
        }
    }, hasFirefox2LastIndexOfBug);
    // ES5 15.4.4.12
    // https://es5.github.io/#x15.4.4.12
    var spliceNoopReturnsEmptyArray = function() {
        var a = [
            1,
            2
        ];
        var result = a.splice();
        return a.length === 2 && isArray(result) && result.length === 0;
    }();
    defineProperties(ArrayPrototype, {
        // Safari 5.0 bug where .splice() returns undefined
        splice: function splice(start, deleteCount) {
            if (arguments.length === 0) return [];
            return array_splice.apply(this, arguments);
        }
    }, !spliceNoopReturnsEmptyArray);
    var spliceWorksWithEmptyObject = function() {
        var obj = {};
        ArrayPrototype.splice.call(obj, 0, 0, 1);
        return obj.length === 1;
    }();
    var hasES6Defaults = [
        0,
        1,
        2
    ].splice(0).length === 3;
    defineProperties(ArrayPrototype, {
        splice: function splice(start, deleteCount) {
            if (arguments.length === 0) return [];
            var args = arguments;
            this.length = max(ES.ToInteger(this.length), 0);
            if (arguments.length > 0 && typeof deleteCount !== 'number') {
                args = arraySlice(arguments);
                if (args.length < 2) pushCall(args, this.length - start);
                else args[1] = ES.ToInteger(deleteCount);
            }
            return array_splice.apply(this, args);
        }
    }, !spliceWorksWithEmptyObject || !hasES6Defaults);
    var spliceWorksWithLargeSparseArrays = function() {
        // Per https://github.com/es-shims/es5-shim/issues/295
        // Safari 7/8 breaks with sparse arrays of size 1e5 or greater
        var arr = new $Array(1e5);
        // note: the index MUST be 8 or larger or the test will false pass
        arr[8] = 'x';
        arr.splice(1, 1);
        // note: this test must be defined *after* the indexOf shim
        // per https://github.com/es-shims/es5-shim/issues/313
        return arr.indexOf('x') === 7;
    }();
    var spliceWorksWithSmallSparseArrays = function() {
        // Per https://github.com/es-shims/es5-shim/issues/295
        // Opera 12.15 breaks on this, no idea why.
        var n = 256;
        var arr = [];
        arr[n] = 'a';
        arr.splice(n + 1, 0, 'b');
        return arr[n] === 'a';
    }();
    defineProperties(ArrayPrototype, {
        splice: function splice(start, deleteCount) {
            var O = ES.ToObject(this);
            var A = [];
            var len = ES.ToUint32(O.length);
            var relativeStart = ES.ToInteger(start);
            var actualStart = relativeStart < 0 ? max(len + relativeStart, 0) : min(relativeStart, len);
            var actualDeleteCount = arguments.length === 0 ? 0 : arguments.length === 1 ? len - actualStart : min(max(ES.ToInteger(deleteCount), 0), len - actualStart);
            var k = 0;
            var from;
            while(k < actualDeleteCount){
                from = $String(actualStart + k);
                if (owns(O, from)) A[k] = O[from];
                k += 1;
            }
            var items = arraySlice(arguments, 2);
            var itemCount = items.length;
            var to;
            if (itemCount < actualDeleteCount) {
                k = actualStart;
                var maxK = len - actualDeleteCount;
                while(k < maxK){
                    from = $String(k + actualDeleteCount);
                    to = $String(k + itemCount);
                    if (owns(O, from)) O[to] = O[from];
                    else delete O[to];
                    k += 1;
                }
                k = len;
                var minK = len - actualDeleteCount + itemCount;
                while(k > minK){
                    delete O[k - 1];
                    k -= 1;
                }
            } else if (itemCount > actualDeleteCount) {
                k = len - actualDeleteCount;
                while(k > actualStart){
                    from = $String(k + actualDeleteCount - 1);
                    to = $String(k + itemCount - 1);
                    if (owns(O, from)) O[to] = O[from];
                    else delete O[to];
                    k -= 1;
                }
            }
            k = actualStart;
            for(var i = 0; i < items.length; ++i){
                O[k] = items[i];
                k += 1;
            }
            O.length = len - actualDeleteCount + itemCount;
            return A;
        }
    }, !spliceWorksWithLargeSparseArrays || !spliceWorksWithSmallSparseArrays);
    var originalJoin = ArrayPrototype.join;
    var hasStringJoinBug;
    try {
        hasStringJoinBug = Array.prototype.join.call('123', ',') !== '1,2,3';
    } catch (e) {
        hasStringJoinBug = true;
    }
    if (hasStringJoinBug) defineProperties(ArrayPrototype, {
        join: function join(separator) {
            var sep = typeof separator === 'undefined' ? ',' : separator;
            return originalJoin.call(isString(this) ? strSplit(this, '') : this, sep);
        }
    }, hasStringJoinBug);
    var hasJoinUndefinedBug = [
        1,
        2
    ].join(undefined) !== '1,2';
    if (hasJoinUndefinedBug) defineProperties(ArrayPrototype, {
        join: function join(separator) {
            var sep = typeof separator === 'undefined' ? ',' : separator;
            return originalJoin.call(this, sep);
        }
    }, hasJoinUndefinedBug);
    var pushShim = function push(item) {
        var O = ES.ToObject(this);
        var n = ES.ToUint32(O.length);
        var i = 0;
        while(i < arguments.length){
            O[n + i] = arguments[i];
            i += 1;
        }
        O.length = n + i;
        return n + i;
    };
    var pushIsNotGeneric = function() {
        var obj = {};
        var result = Array.prototype.push.call(obj, undefined);
        return result !== 1 || obj.length !== 1 || typeof obj[0] !== 'undefined' || !owns(obj, 0);
    }();
    defineProperties(ArrayPrototype, {
        push: function push(item) {
            if (isArray(this)) return array_push.apply(this, arguments);
            return pushShim.apply(this, arguments);
        }
    }, pushIsNotGeneric);
    // This fixes a very weird bug in Opera 10.6 when pushing `undefined
    var pushUndefinedIsWeird = function() {
        var arr = [];
        var result = arr.push(undefined);
        return result !== 1 || arr.length !== 1 || typeof arr[0] !== 'undefined' || !owns(arr, 0);
    }();
    defineProperties(ArrayPrototype, {
        push: pushShim
    }, pushUndefinedIsWeird);
    // ES5 15.2.3.14
    // https://es5.github.io/#x15.4.4.10
    // Fix boxed string bug
    defineProperties(ArrayPrototype, {
        slice: function(start, end) {
            var arr = isString(this) ? strSplit(this, '') : this;
            return arraySliceApply(arr, arguments);
        }
    }, splitString);
    var sortIgnoresNonFunctions = function() {
        try {
            [
                1,
                2
            ].sort(null);
        } catch (e) {
            try {
                [
                    1,
                    2
                ].sort({});
            } catch (e2) {
                return false;
            }
        }
        return true;
    }();
    var sortThrowsOnRegex = function() {
        // this is a problem in Firefox 4, in which `typeof /a/ === 'function'`
        try {
            [
                1,
                2
            ].sort(/a/);
            return false;
        } catch (e) {}
        return true;
    }();
    var sortIgnoresUndefined = function() {
        // applies in IE 8, for one.
        try {
            [
                1,
                2
            ].sort(undefined);
            return true;
        } catch (e) {}
        return false;
    }();
    defineProperties(ArrayPrototype, {
        sort: function sort(compareFn) {
            if (typeof compareFn === 'undefined') return arraySort(this);
            if (!isCallable(compareFn)) throw new TypeError('Array.prototype.sort callback must be a function');
            return arraySort(this, compareFn);
        }
    }, sortIgnoresNonFunctions || !sortIgnoresUndefined || !sortThrowsOnRegex);
    //
    // Object
    // ======
    //
    // ES5 15.2.3.14
    // https://es5.github.io/#x15.2.3.14
    // https://web.archive.org/web/20140727042234/http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
    // eslint-disable-next-line quote-props
    var hasDontEnumBug = !isEnum({
        'toString': null
    }, 'toString'); // jscs:ignore disallowQuotedKeysInObjects
    var hasProtoEnumBug = isEnum(function() {}, 'prototype');
    var hasStringEnumBug = !owns('x', '0');
    var equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true,
        $width: true,
        $height: true,
        $top: true,
        $localStorage: true
    };
    var hasAutomationEqualityBug = function() {
        /* globals window */ if (typeof window === 'undefined') return false;
        for(var k in window)try {
            if (!excludedKeys['$' + k] && owns(window, k) && window[k] !== null && typeof window[k] === 'object') equalsConstructorPrototype(window[k]);
        } catch (e) {
            return true;
        }
        return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(object) {
        if (typeof window === 'undefined' || !hasAutomationEqualityBug) return equalsConstructorPrototype(object);
        try {
            return equalsConstructorPrototype(object);
        } catch (e) {
            return false;
        }
    };
    var dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ];
    var dontEnumsLength = dontEnums.length;
    // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
    // can be replaced with require('is-arguments') if we ever use a build process instead
    var isStandardArguments = function isArguments(value) {
        return toStr(value) === '[object Arguments]';
    };
    var isLegacyArguments = function isArguments(value) {
        return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && !isArray(value) && isCallable(value.callee);
    };
    var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;
    defineProperties($Object, {
        keys: function keys(object) {
            var isFn = isCallable(object);
            var isArgs = isArguments(object);
            var isObject = object !== null && typeof object === 'object';
            var isStr = isObject && isString(object);
            if (!isObject && !isFn && !isArgs) throw new TypeError('Object.keys called on a non-object');
            var theKeys = [];
            var skipProto = hasProtoEnumBug && isFn;
            if (isStr && hasStringEnumBug || isArgs) for(var i = 0; i < object.length; ++i)pushCall(theKeys, $String(i));
            if (!isArgs) {
                for(var name in object)if (!(skipProto && name === 'prototype') && owns(object, name)) pushCall(theKeys, $String(name));
            }
            if (hasDontEnumBug) {
                var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
                for(var j = 0; j < dontEnumsLength; j++){
                    var dontEnum = dontEnums[j];
                    if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) pushCall(theKeys, dontEnum);
                }
            }
            return theKeys;
        }
    });
    var keysWorksWithArguments = $Object.keys && function() {
        // Safari 5.0 bug
        return $Object.keys(arguments).length === 2;
    }(1, 2);
    var keysHasArgumentsLengthBug = $Object.keys && function() {
        var argKeys = $Object.keys(arguments);
        return arguments.length !== 1 || argKeys.length !== 1 || argKeys[0] !== 1;
    }(1);
    var originalKeys = $Object.keys;
    defineProperties($Object, {
        keys: function keys(object) {
            if (isArguments(object)) return originalKeys(arraySlice(object));
            return originalKeys(object);
        }
    }, !keysWorksWithArguments || keysHasArgumentsLengthBug);
    //
    // Date
    // ====
    //
    var hasNegativeMonthYearBug = new Date(-3509827329600292).getUTCMonth() !== 0;
    var aNegativeTestDate = new Date(-1509842289600292);
    var aPositiveTestDate = new Date(1449662400000);
    var hasToUTCStringFormatBug = aNegativeTestDate.toUTCString() !== 'Mon, 01 Jan -45875 11:59:59 GMT';
    var hasToDateStringFormatBug;
    var hasToStringFormatBug;
    var timeZoneOffset = aNegativeTestDate.getTimezoneOffset();
    if (timeZoneOffset < -720) {
        hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Tue Jan 02 -45875';
        hasToStringFormatBug = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(aPositiveTestDate));
    } else {
        hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Mon Jan 01 -45875';
        hasToStringFormatBug = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(aPositiveTestDate));
    }
    var originalGetFullYear = call.bind(Date.prototype.getFullYear);
    var originalGetMonth = call.bind(Date.prototype.getMonth);
    var originalGetDate = call.bind(Date.prototype.getDate);
    var originalGetUTCFullYear = call.bind(Date.prototype.getUTCFullYear);
    var originalGetUTCMonth = call.bind(Date.prototype.getUTCMonth);
    var originalGetUTCDate = call.bind(Date.prototype.getUTCDate);
    var originalGetUTCDay = call.bind(Date.prototype.getUTCDay);
    var originalGetUTCHours = call.bind(Date.prototype.getUTCHours);
    var originalGetUTCMinutes = call.bind(Date.prototype.getUTCMinutes);
    var originalGetUTCSeconds = call.bind(Date.prototype.getUTCSeconds);
    var originalGetUTCMilliseconds = call.bind(Date.prototype.getUTCMilliseconds);
    var dayName = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ];
    var monthName = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    var daysInMonth = function daysInMonth(month, year) {
        return originalGetDate(new Date(year, month, 0));
    };
    defineProperties(Date.prototype, {
        getFullYear: function getFullYear() {
            if (!this || !(this instanceof Date)) throw new TypeError('this is not a Date object.');
            var year = originalGetFullYear(this);
            if (year < 0 && originalGetMonth(this) > 11) return year + 1;
            return year;
        },
        getMonth: function getMonth() {
            if (!this || !(this instanceof Date)) throw new TypeError('this is not a Date object.');
            var year = originalGetFullYear(this);
            var month = originalGetMonth(this);
            if (year < 0 && month > 11) return 0;
            return month;
        },
        getDate: function getDate() {
            if (!this || !(this instanceof Date)) throw new TypeError('this is not a Date object.');
            var year = originalGetFullYear(this);
            var month = originalGetMonth(this);
            var date = originalGetDate(this);
            if (year < 0 && month > 11) {
                if (month === 12) return date;
                var days = daysInMonth(0, year + 1);
                return days - date + 1;
            }
            return date;
        },
        getUTCFullYear: function getUTCFullYear() {
            if (!this || !(this instanceof Date)) throw new TypeError('this is not a Date object.');
            var year = originalGetUTCFullYear(this);
            if (year < 0 && originalGetUTCMonth(this) > 11) return year + 1;
            return year;
        },
        getUTCMonth: function getUTCMonth() {
            if (!this || !(this instanceof Date)) throw new TypeError('this is not a Date object.');
            var year = originalGetUTCFullYear(this);
            var month = originalGetUTCMonth(this);
            if (year < 0 && month > 11) return 0;
            return month;
        },
        getUTCDate: function getUTCDate() {
            if (!this || !(this instanceof Date)) throw new TypeError('this is not a Date object.');
            var year = originalGetUTCFullYear(this);
            var month = originalGetUTCMonth(this);
            var date = originalGetUTCDate(this);
            if (year < 0 && month > 11) {
                if (month === 12) return date;
                var days = daysInMonth(0, year + 1);
                return days - date + 1;
            }
            return date;
        }
    }, hasNegativeMonthYearBug);
    defineProperties(Date.prototype, {
        toUTCString: function toUTCString() {
            if (!this || !(this instanceof Date)) throw new TypeError('this is not a Date object.');
            var day = originalGetUTCDay(this);
            var date = originalGetUTCDate(this);
            var month = originalGetUTCMonth(this);
            var year = originalGetUTCFullYear(this);
            var hour = originalGetUTCHours(this);
            var minute = originalGetUTCMinutes(this);
            var second = originalGetUTCSeconds(this);
            return dayName[day] + ', ' + (date < 10 ? '0' + date : date) + ' ' + monthName[month] + ' ' + year + ' ' + (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second) + ' GMT';
        }
    }, hasNegativeMonthYearBug || hasToUTCStringFormatBug);
    // Opera 12 has `,`
    defineProperties(Date.prototype, {
        toDateString: function toDateString() {
            if (!this || !(this instanceof Date)) throw new TypeError('this is not a Date object.');
            var day = this.getDay();
            var date = this.getDate();
            var month = this.getMonth();
            var year = this.getFullYear();
            return dayName[day] + ' ' + monthName[month] + ' ' + (date < 10 ? '0' + date : date) + ' ' + year;
        }
    }, hasNegativeMonthYearBug || hasToDateStringFormatBug);
    // can't use defineProperties here because of toString enumeration issue in IE <= 8
    if (hasNegativeMonthYearBug || hasToStringFormatBug) {
        Date.prototype.toString = function toString() {
            if (!this || !(this instanceof Date)) throw new TypeError('this is not a Date object.');
            var day = this.getDay();
            var date = this.getDate();
            var month = this.getMonth();
            var year = this.getFullYear();
            var hour = this.getHours();
            var minute = this.getMinutes();
            var second = this.getSeconds();
            var timezoneOffset = this.getTimezoneOffset();
            var hoursOffset = floor(abs(timezoneOffset) / 60);
            var minutesOffset = floor(abs(timezoneOffset) % 60);
            return dayName[day] + ' ' + monthName[month] + ' ' + (date < 10 ? '0' + date : date) + ' ' + year + ' ' + (hour < 10 ? '0' + hour : hour) + ':' + (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second) + ' GMT' + (timezoneOffset > 0 ? '-' : '+') + (hoursOffset < 10 ? '0' + hoursOffset : hoursOffset) + (minutesOffset < 10 ? '0' + minutesOffset : minutesOffset);
        };
        if (supportsDescriptors) $Object.defineProperty(Date.prototype, 'toString', {
            configurable: true,
            enumerable: false,
            writable: true
        });
    }
    // ES5 15.9.5.43
    // https://es5.github.io/#x15.9.5.43
    // This function returns a String value represent the instance in time
    // represented by this Date object. The format of the String is the Date Time
    // string format defined in 15.9.1.15. All fields are present in the String.
    // The time zone is always UTC, denoted by the suffix Z. If the time value of
    // this object is not a finite Number a RangeError exception is thrown.
    var negativeDate = -62198755200000;
    var negativeYearString = '-000001';
    var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1; // eslint-disable-line max-len
    var hasSafari51DateBug = Date.prototype.toISOString && new Date(-1).toISOString() !== '1969-12-31T23:59:59.999Z';
    var getTime = call.bind(Date.prototype.getTime);
    defineProperties(Date.prototype, {
        toISOString: function toISOString() {
            if (!isFinite(this) || !isFinite(getTime(this))) // Adope Photoshop requires the second check.
            throw new RangeError('Date.prototype.toISOString called on non-finite value.');
            var year = originalGetUTCFullYear(this);
            var month = originalGetUTCMonth(this);
            // see https://github.com/es-shims/es5-shim/issues/111
            year += floor(month / 12);
            month = (month % 12 + 12) % 12;
            // the date time string format is specified in 15.9.1.15.
            var result = [
                month + 1,
                originalGetUTCDate(this),
                originalGetUTCHours(this),
                originalGetUTCMinutes(this),
                originalGetUTCSeconds(this)
            ];
            year = (year < 0 ? '-' : year > 9999 ? '+' : '') + strSlice('00000' + abs(year), 0 <= year && year <= 9999 ? -4 : -6);
            for(var i = 0; i < result.length; ++i)// pad months, days, hours, minutes, and seconds to have two digits.
            result[i] = strSlice('00' + result[i], -2);
            // pad milliseconds to have three digits.
            return year + '-' + arraySlice(result, 0, 2).join('-') + 'T' + arraySlice(result, 2).join(':') + '.' + strSlice('000' + originalGetUTCMilliseconds(this), -3) + 'Z';
        }
    }, hasNegativeDateBug || hasSafari51DateBug);
    // ES5 15.9.5.44
    // https://es5.github.io/#x15.9.5.44
    // This function provides a String representation of a Date object for use by
    // JSON.stringify (15.12.3).
    var dateToJSONIsSupported = function() {
        try {
            return Date.prototype.toJSON && new Date(NaN).toJSON() === null && new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 && Date.prototype.toJSON.call({
                toISOString: function() {
                    return true;
                }
            });
        } catch (e) {
            return false;
        }
    }();
    if (!dateToJSONIsSupported) Date.prototype.toJSON = function toJSON(key) {
        // When the toJSON method is called with argument key, the following
        // steps are taken:
        // 1.  Let O be the result of calling ToObject, giving it the this
        // value as its argument.
        // 2. Let tv be ES.ToPrimitive(O, hint Number).
        var O = $Object(this);
        var tv = ES.ToPrimitive(O);
        // 3. If tv is a Number and is not finite, return null.
        if (typeof tv === 'number' && !isFinite(tv)) return null;
        // 4. Let toISO be the result of calling the [[Get]] internal method of
        // O with argument "toISOString".
        var toISO = O.toISOString;
        // 5. If IsCallable(toISO) is false, throw a TypeError exception.
        if (!isCallable(toISO)) throw new TypeError('toISOString property is not callable');
        // 6. Return the result of calling the [[Call]] internal method of
        //  toISO with O as the this value and an empty argument list.
        return toISO.call(O);
    // NOTE 1 The argument is ignored.
    // NOTE 2 The toJSON function is intentionally generic; it does not
    // require that its this value be a Date object. Therefore, it can be
    // transferred to other kinds of objects for use as a method. However,
    // it does require that any such object have a toISOString method. An
    // object is free to use the argument key to filter its
    // stringification.
    };
    // ES5 15.9.4.2
    // https://es5.github.io/#x15.9.4.2
    // based on work shared by Daniel Friesen (dantman)
    // https://gist.github.com/303249
    var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;
    var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z')) || !isNaN(Date.parse('2012-12-31T23:59:60.000Z'));
    var doesNotParseY2KNewYear = isNaN(Date.parse('2000-01-01T00:00:00.000Z'));
    if (doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {
        // XXX global assignment won't work in embeddings that use
        // an alternate object for the context.
        var maxSafeUnsigned32Bit = pow(2, 31) - 1;
        var hasSafariSignedIntBug = isActualNaN(new Date(1970, 0, 1, 0, 0, 0, maxSafeUnsigned32Bit + 1).getTime());
        // eslint-disable-next-line no-implicit-globals, no-global-assign
        Date = function(NativeDate) {
            // Date.length === 7
            var DateShim = function Date1(Y, M, D, h, m, s, ms) {
                var length = arguments.length;
                var date;
                if (this instanceof NativeDate) {
                    var seconds = s;
                    var millis = ms;
                    if (hasSafariSignedIntBug && length >= 7 && ms > maxSafeUnsigned32Bit) {
                        // work around a Safari 8/9 bug where it treats the seconds as signed
                        var msToShift = floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
                        var sToShift = floor(msToShift / 1e3);
                        seconds += sToShift;
                        millis -= sToShift * 1e3;
                    }
                    var parsed = DateShim.parse(Y);
                    var hasNegTimestampParseBug = isNaN(parsed);
                    date = length === 1 && $String(Y) === Y && !hasNegTimestampParseBug // isString(Y)
                     ? new NativeDate(parsed) : length >= 7 ? new NativeDate(Y, M, D, h, m, seconds, millis) : length >= 6 ? new NativeDate(Y, M, D, h, m, seconds) : length >= 5 ? new NativeDate(Y, M, D, h, m) : length >= 4 ? new NativeDate(Y, M, D, h) : length >= 3 ? new NativeDate(Y, M, D) : length >= 2 ? new NativeDate(Y, M) : length >= 1 ? new NativeDate(Y instanceof NativeDate ? +Y : Y) : new NativeDate();
                } else date = NativeDate.apply(this, arguments);
                if (!isPrimitive(date)) // Prevent mixups with unfixed Date object
                defineProperties(date, {
                    constructor: DateShim
                }, true);
                return date;
            };
            // 15.9.1.15 Date Time String Format.
            var isoDateExpression = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$");
            var months = [
                0,
                31,
                59,
                90,
                120,
                151,
                181,
                212,
                243,
                273,
                304,
                334,
                365
            ];
            var dayFromMonth = function dayFromMonth(year, month) {
                var t = month > 1 ? 1 : 0;
                return months[month] + floor((year - 1969 + t) / 4) - floor((year - 1901 + t) / 100) + floor((year - 1601 + t) / 400) + 365 * (year - 1970);
            };
            var toUTC = function toUTC(t) {
                var s = 0;
                var ms = t;
                if (hasSafariSignedIntBug && ms > maxSafeUnsigned32Bit) {
                    // work around a Safari 8/9 bug where it treats the seconds as signed
                    var msToShift = floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
                    var sToShift = floor(msToShift / 1e3);
                    s += sToShift;
                    ms -= sToShift * 1e3;
                }
                return $Number(new NativeDate(1970, 0, 1, 0, 0, s, ms));
            };
            // Copy any custom methods a 3rd party library may have added
            for(var key in NativeDate)if (owns(NativeDate, key)) DateShim[key] = NativeDate[key];
            // Copy "native" methods explicitly; they may be non-enumerable
            defineProperties(DateShim, {
                now: NativeDate.now,
                UTC: NativeDate.UTC
            }, true);
            DateShim.prototype = NativeDate.prototype;
            defineProperties(DateShim.prototype, {
                constructor: DateShim
            }, true);
            // Upgrade Date.parse to handle simplified ISO 8601 strings
            var parseShim = function parse(string) {
                var match = isoDateExpression.exec(string);
                if (match) {
                    // parse months, days, hours, minutes, seconds, and milliseconds
                    // provide default values if necessary
                    // parse the UTC offset component
                    var year = $Number(match[1]), month = $Number(match[2] || 1) - 1, day = $Number(match[3] || 1) - 1, hour = $Number(match[4] || 0), minute = $Number(match[5] || 0), second = $Number(match[6] || 0), millisecond = floor($Number(match[7] || 0) * 1000), // When time zone is missed, local offset should be used
                    // (ES 5.1 bug)
                    // see https://bugs.ecmascript.org/show_bug.cgi?id=112
                    isLocalTime = Boolean(match[4] && !match[8]), signOffset = match[9] === '-' ? 1 : -1, hourOffset = $Number(match[10] || 0), minuteOffset = $Number(match[11] || 0), result;
                    var hasMinutesOrSecondsOrMilliseconds = minute > 0 || second > 0 || millisecond > 0;
                    if (hour < (hasMinutesOrSecondsOrMilliseconds ? 24 : 25) && minute < 60 && second < 60 && millisecond < 1000 && month > -1 && month < 12 && hourOffset < 24 && minuteOffset < 60 // detect invalid offsets
                     && day > -1 && day < dayFromMonth(year, month + 1) - dayFromMonth(year, month)) {
                        result = ((dayFromMonth(year, month) + day) * 24 + hour + hourOffset * signOffset) * 60;
                        result = ((result + minute + minuteOffset * signOffset) * 60 + second) * 1000 + millisecond;
                        if (isLocalTime) result = toUTC(result);
                        if (-8640000000000000 <= result && result <= 8.64e15) return result;
                    }
                    return NaN;
                }
                return NativeDate.parse.apply(this, arguments);
            };
            defineProperties(DateShim, {
                parse: parseShim
            });
            return DateShim;
        }(Date);
    }
    // ES5 15.9.4.4
    // https://es5.github.io/#x15.9.4.4
    if (!Date.now) Date.now = function now() {
        return new Date().getTime();
    };
    //
    // Number
    // ======
    //
    // ES5.1 15.7.4.5
    // https://es5.github.io/#x15.7.4.5
    var hasToFixedBugs = NumberPrototype.toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128..toFixed(0) !== '1000000000000000128');
    var toFixedHelpers = {
        base: 1e7,
        size: 6,
        data: [
            0,
            0,
            0,
            0,
            0,
            0
        ],
        multiply: function multiply(n, c) {
            var i = -1;
            var c2 = c;
            while(++i < toFixedHelpers.size){
                c2 += n * toFixedHelpers.data[i];
                toFixedHelpers.data[i] = c2 % toFixedHelpers.base;
                c2 = floor(c2 / toFixedHelpers.base);
            }
        },
        divide: function divide(n) {
            var i = toFixedHelpers.size;
            var c = 0;
            while(--i >= 0){
                c += toFixedHelpers.data[i];
                toFixedHelpers.data[i] = floor(c / n);
                c = c % n * toFixedHelpers.base;
            }
        },
        numToString: function numToString() {
            var i = toFixedHelpers.size;
            var s = '';
            while(--i >= 0)if (s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {
                var t = $String(toFixedHelpers.data[i]);
                if (s === '') s = t;
                else s += strSlice('0000000', 0, 7 - t.length) + t;
            }
            return s;
        },
        pow: function pow(x, n, acc) {
            return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
        },
        log: function log(x) {
            var n = 0;
            var x2 = x;
            while(x2 >= 4096){
                n += 12;
                x2 /= 4096;
            }
            while(x2 >= 2){
                n += 1;
                x2 /= 2;
            }
            return n;
        }
    };
    var toFixedShim = function toFixed(fractionDigits) {
        var f, x, s, m, e, z, j, k;
        // Test for NaN and round fractionDigits down
        f = $Number(fractionDigits);
        f = isActualNaN(f) ? 0 : floor(f);
        if (f < 0 || f > 20) throw new RangeError('Number.toFixed called with invalid number of decimals');
        x = $Number(this);
        if (isActualNaN(x)) return 'NaN';
        // If it is too big or small, return the string value of the number
        if (x <= -1000000000000000000000 || x >= 1e21) return $String(x);
        s = '';
        if (x < 0) {
            s = '-';
            x = -x;
        }
        m = '0';
        if (x > 1e-21) {
            // 1e-21 < x < 1e21
            // -70 < log2(x) < 70
            e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;
            z = e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1);
            z *= 0x10000000000000; // pow(2, 52);
            e = 52 - e;
            // -18 < e < 122
            // x = z / 2 ^ e
            if (e > 0) {
                toFixedHelpers.multiply(0, z);
                j = f;
                while(j >= 7){
                    toFixedHelpers.multiply(1e7, 0);
                    j -= 7;
                }
                toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);
                j = e - 1;
                while(j >= 23){
                    toFixedHelpers.divide(8388608);
                    j -= 23;
                }
                toFixedHelpers.divide(1 << j);
                toFixedHelpers.multiply(1, 1);
                toFixedHelpers.divide(2);
                m = toFixedHelpers.numToString();
            } else {
                toFixedHelpers.multiply(0, z);
                toFixedHelpers.multiply(1 << -e, 0);
                m = toFixedHelpers.numToString() + strSlice('0.00000000000000000000', 2, 2 + f);
            }
        }
        if (f > 0) {
            k = m.length;
            if (k <= f) m = s + strSlice('0.0000000000000000000', 0, f - k + 2) + m;
            else m = s + strSlice(m, 0, k - f) + '.' + strSlice(m, k - f);
        } else m = s + m;
        return m;
    };
    defineProperties(NumberPrototype, {
        toFixed: toFixedShim
    }, hasToFixedBugs);
    var hasToExponentialRoundingBug = function() {
        try {
            return (-0.000000000069).toExponential(4) !== '-6.9000e-11';
        } catch (e) {
            return false;
        }
    }();
    var toExponentialAllowsInfiniteDigits = function() {
        try {
            1..toExponential(Infinity);
            1..toExponential(-Infinity);
            return true;
        } catch (e) {
            return false;
        }
    }();
    var originalToExponential = call.bind(NumberPrototype.toExponential);
    var numberToString = call.bind(NumberPrototype.toString);
    var numberValueOf = call.bind(NumberPrototype.valueOf);
    defineProperties(NumberPrototype, {
        toExponential: function toExponential(fractionDigits) {
            // 1: Let x be this Number value.
            var x = numberValueOf(this);
            if (typeof fractionDigits === 'undefined') return originalToExponential(x);
            var f = ES.ToInteger(fractionDigits);
            if (isActualNaN(x)) return 'NaN';
            if (f < 0 || f > 20) {
                if (!isFinite(f)) // IE 6 doesn't throw in the native one
                throw new RangeError('toExponential() argument must be between 0 and 20');
                // this will probably have thrown already
                return originalToExponential(x, f);
            }
            // only cases left are a finite receiver + in-range fractionDigits
            // implementation adapted from https://gist.github.com/SheetJSDev/1100ad56b9f856c95299ed0e068eea08
            // 4: Let s be the empty string
            var s = '';
            // 5: If x < 0
            if (x < 0) {
                s = '-';
                x = -x;
            }
            // 6: If x = +Infinity
            if (x === Infinity) return s + 'Infinity';
            // 7: If fractionDigits is not undefined and (f < 0 or f > 20), throw a RangeError exception.
            if (typeof fractionDigits !== 'undefined' && (f < 0 || f > 20)) throw new RangeError('Fraction digits ' + fractionDigits + ' out of range');
            var m = '';
            var e = 0;
            var c = '';
            var d = '';
            // 8: If x = 0 then
            if (x === 0) {
                e = 0;
                f = 0;
                m = '0';
            } else {
                var L = log10(x);
                e = floor(L); // 10 ** e <= x and x < 10 ** (e+1)
                var n = 0;
                if (typeof fractionDigits !== 'undefined') {
                    var w = pow(10, e - f); // x / 10 ** (f+1) < w and w <= x / 10 ** f
                    n = round(x / w); // 10 ** f <= n and n < 10 ** (f+1)
                    if (2 * x >= (2 * n + 1) * w) n += 1; // pick larger value
                    if (n >= pow(10, f + 1)) {
                        n /= 10;
                        e += 1;
                    }
                } else {
                    f = 16; // start from Math.ceil(Math.log10(Number.MAX_SAFE_INTEGER)) and loop down
                    var guess_n = round(pow(10, L - e + f));
                    var target_f = f;
                    while(f-- > 0){
                        guess_n = round(pow(10, L - e + f));
                        if (abs(guess_n * pow(10, e - f) - x) <= abs(n * pow(10, e - target_f) - x)) {
                            target_f = f;
                            n = guess_n;
                        }
                    }
                }
                m = numberToString(n, 10);
                if (typeof fractionDigits === 'undefined') while(strSlice(m, -1) === '0'){
                    m = strSlice(m, 0, -1);
                    d += 1;
                }
            }
            // 10: If f != 0, then
            if (f !== 0) m = strSlice(m, 0, 1) + '.' + strSlice(m, 1);
            // 11: If e = 0, then
            if (e === 0) {
                c = '+';
                d = '0';
            } else {
                c = e > 0 ? '+' : '-';
                d = numberToString(abs(e), 10);
            }
            // 13: Let m be the concatenation of the four Strings m, "e", c, and d.
            m += 'e' + c + d;
            // 14: Return the concatenation of the Strings s and m.
            return s + m;
        }
    }, hasToExponentialRoundingBug || toExponentialAllowsInfiniteDigits);
    var hasToPrecisionUndefinedBug = function() {
        try {
            return 1.0.toPrecision(undefined) === '1';
        } catch (e) {
            return true;
        }
    }();
    var originalToPrecision = call.bind(NumberPrototype.toPrecision);
    defineProperties(NumberPrototype, {
        toPrecision: function toPrecision(precision) {
            return typeof precision === 'undefined' ? originalToPrecision(this) : originalToPrecision(this, precision);
        }
    }, hasToPrecisionUndefinedBug);
    //
    // String
    // ======
    //
    // ES5 15.5.4.14
    // https://es5.github.io/#x15.5.4.14
    // [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
    // Many browsers do not split properly with regular expressions or they
    // do not perform the split correctly under obscure conditions.
    // See https://blog.stevenlevithan.com/archives/cross-browser-split
    // I've tested in many browsers and this seems to cover the deviant ones:
    //    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
    //    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
    //    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
    //       [undefined, "t", undefined, "e", ...]
    //    ''.split(/.?/) should be [], not [""]
    //    '.'.split(/()()/) should be ["."], not ["", "", "."]
    if ('ab'.split(/(?:ab)*/).length !== 2 || '.'.split(/(.?)(.?)/).length !== 4 || 'tesst'.split(/(s)*/)[1] === 't' || 'test'.split(/(?:)/, -1).length !== 4 || ''.split(/.?/).length || '.'.split(/()()/).length > 1) (function() {
        var compliantExecNpcg = typeof /()??/.exec('')[1] === 'undefined'; // NPCG: nonparticipating capturing group
        var maxSafe32BitInt = pow(2, 32) - 1;
        StringPrototype.split = function split(separator, limit) {
            var string = String(this);
            if (typeof separator === 'undefined' && limit === 0) return [];
            // If `separator` is not a regex, use native split
            if (!isRegex(separator)) return strSplit(this, separator, limit);
            var output = [];
            var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '' // in ES6
            ) + (separator.sticky ? 'y' : ''), lastLastIndex = 0, // Make `global` and avoid `lastIndex` issues by working with a copy
            separator2, match, lastIndex, lastLength;
            var separatorCopy = new RegExp(separator.source, flags + 'g');
            if (!compliantExecNpcg) // Doesn't need flags gy, but they don't hurt
            separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
            /* Values for `limit`, per the spec:
                 * If undefined: 4294967295 // maxSafe32BitInt
                 * If 0, Infinity, or NaN: 0
                 * If positive number: limit = floor(limit); if (limit > 4294967295) limit -= 4294967296;
                 * If negative number: 4294967296 - floor(abs(limit))
                 * If other: Type-convert, then use the above rules
                 */ var splitLimit = typeof limit === 'undefined' ? maxSafe32BitInt : ES.ToUint32(limit);
            match = separatorCopy.exec(string);
            while(match){
                // `separatorCopy.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    pushCall(output, strSlice(string, lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) /* eslint-disable no-loop-func */ match[0].replace(separator2, function() {
                        for(var i = 1; i < arguments.length - 2; i++)if (typeof arguments[i] === 'undefined') match[i] = void 0;
                    });
                    if (match.length > 1 && match.index < string.length) array_push.apply(output, arraySlice(match, 1));
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= splitLimit) break;
                }
                if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
                match = separatorCopy.exec(string);
            }
            if (lastLastIndex === string.length) {
                if (lastLength || !separatorCopy.test('')) pushCall(output, '');
            } else pushCall(output, strSlice(string, lastLastIndex));
            return output.length > splitLimit ? arraySlice(output, 0, splitLimit) : output;
        };
    })();
    else if ('0'.split(void 0, 0).length) StringPrototype.split = function split(separator, limit) {
        if (typeof separator === 'undefined' && limit === 0) return [];
        return strSplit(this, separator, limit);
    };
    var str_replace = StringPrototype.replace;
    var replaceReportsGroupsCorrectly = function() {
        var groups = [];
        'x'.replace(/x(.)?/g, function(match, group) {
            pushCall(groups, group);
        });
        return groups.length === 1 && typeof groups[0] === 'undefined';
    }();
    if (!replaceReportsGroupsCorrectly) StringPrototype.replace = function replace(searchValue, replaceValue) {
        var isFn = isCallable(replaceValue);
        var hasCapturingGroups = isRegex(searchValue) && /\)[*?]/.test(searchValue.source);
        if (!isFn || !hasCapturingGroups) return str_replace.call(this, searchValue, replaceValue);
        var wrappedReplaceValue = function(match) {
            var length = arguments.length;
            var originalLastIndex = searchValue.lastIndex;
            searchValue.lastIndex = 0; // eslint-disable-line no-param-reassign
            var args = searchValue.exec(match) || [];
            searchValue.lastIndex = originalLastIndex; // eslint-disable-line no-param-reassign
            pushCall(args, arguments[length - 2], arguments[length - 1]);
            return replaceValue.apply(this, args);
        };
        return str_replace.call(this, searchValue, wrappedReplaceValue);
    };
    // ECMA-262, 3rd B.2.3
    // Not an ECMAScript standard, although ECMAScript 3rd Edition has a
    // non-normative section suggesting uniform semantics and it should be
    // normalized across all browsers
    // [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
    var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
    var string_substr = hasNegativeSubstrBug && call.bind(StringPrototype.substr);
    defineProperties(StringPrototype, {
        substr: function substr(start, length) {
            var normalizedStart = start;
            if (start < 0) normalizedStart = max(this.length + start, 0);
            return string_substr(this, normalizedStart, length);
        }
    }, hasNegativeSubstrBug);
    // ES5 15.5.4.20
    // whitespace from: https://es5.github.io/#x15.5.4.20
    var mvs = '\u180E';
    var mvsIsWS = /\s/.test(mvs);
    var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'.replace(/\S/g, ''); // remove the mongolian vowel separator (\u180E) in modern engines
    var zeroWidth = '\u200b';
    var wsRegexChars = '[' + ws + ']';
    var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
    var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
    var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() !== '' // if ws is not considered whitespace
     || zeroWidth.trim() === '' // if zero-width IS considered whitespace
     || mvs.trim() !== (mvsIsWS ? '' : mvs // if MVS is either wrongly considered whitespace, or, wrongly considered NOT whitespace
    ));
    defineProperties(StringPrototype, {
        // https://blog.stevenlevithan.com/archives/faster-trim-javascript
        // http://perfectionkills.com/whitespace-deviations/
        trim: function trim() {
            'use strict';
            if (typeof this === 'undefined' || this === null) throw new TypeError("can't convert " + this + ' to object');
            return $String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
        }
    }, hasTrimWhitespaceBug);
    var trim = call.bind(String.prototype.trim);
    var hasLastIndexBug = StringPrototype.lastIndexOf && "abc\u3042\u3044".lastIndexOf("\u3042\u3044", 2) !== -1;
    defineProperties(StringPrototype, {
        lastIndexOf: function lastIndexOf(searchString) {
            if (typeof this === 'undefined' || this === null) throw new TypeError("can't convert " + this + ' to object');
            var S = $String(this);
            var searchStr = $String(searchString);
            var numPos = arguments.length > 1 ? $Number(arguments[1]) : NaN;
            var pos = isActualNaN(numPos) ? Infinity : ES.ToInteger(numPos);
            var start = min(max(pos, 0), S.length);
            var searchLen = searchStr.length;
            var k = start + searchLen;
            while(k > 0){
                k = max(0, k - searchLen);
                var index = strIndexOf(strSlice(S, k, start + searchLen), searchStr);
                if (index !== -1) return k + index;
            }
            return -1;
        }
    }, hasLastIndexBug);
    var originalLastIndexOf = StringPrototype.lastIndexOf;
    defineProperties(StringPrototype, {
        lastIndexOf: function lastIndexOf(searchString) {
            return originalLastIndexOf.apply(this, arguments);
        }
    }, StringPrototype.lastIndexOf.length !== 1);
    var hexRegex = /^[-+]?0[xX]/;
    // ES-5 15.1.2.2
    if (parseInt(ws + '08') !== 8 // eslint-disable-line radix
     || parseInt(ws + '0x16') !== 22 // eslint-disable-line radix
     || (mvsIsWS ? parseInt(mvs + 1) !== 1 : !isNaN(parseInt(mvs + 1)) // eslint-disable-line radix
    )) // eslint-disable-next-line no-global-assign, no-implicit-globals
    parseInt = function(origParseInt) {
        return function parseInt1(str, radix) {
            if (this instanceof parseInt1) new origParseInt();
             // eslint-disable-line new-cap, no-new, max-statements-per-line
            var string = trim(String(str));
            var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);
            return origParseInt(string, defaultedRadix);
        };
    }(parseInt);
    // Edge 15-18
    var parseIntFailsToThrowOnBoxedSymbols = function() {
        if (typeof Symbol !== 'function') return false;
        try {
            // eslint-disable-next-line radix
            parseInt(Object(Symbol.iterator));
            return true;
        } catch (e) {}
        try {
            // eslint-disable-next-line radix
            parseInt(Symbol.iterator);
            return true;
        } catch (e) {}
        return false;
    }();
    if (parseIntFailsToThrowOnBoxedSymbols) {
        var symbolValueOf = Symbol.prototype.valueOf;
        // eslint-disable-next-line no-global-assign, no-implicit-globals
        parseInt = function(origParseInt) {
            return function parseInt1(str, radix) {
                if (this instanceof parseInt1) new origParseInt();
                 // eslint-disable-line new-cap, no-new, max-statements-per-line
                var isSym = typeof str === 'symbol';
                if (!isSym && str && typeof str === 'object') try {
                    symbolValueOf.call(str);
                    isSym = true;
                } catch (e) {}
                if (isSym) // handle Symbols in node 8.3/8.4
                // eslint-disable-next-line no-implicit-coercion, no-unused-expressions
                str; // jscs:ignore disallowImplicitTypeConversion
                var string = trim(String(str));
                var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);
                return origParseInt(string, defaultedRadix);
            };
        }(parseInt);
    }
    // https://es5.github.io/#x15.1.2.3
    if (1 / parseFloat('-0') !== -Infinity) // eslint-disable-next-line no-global-assign, no-implicit-globals, no-native-reassign
    parseFloat = function(origParseFloat) {
        return function parseFloat1(string) {
            var inputString = trim(String(string));
            var result = origParseFloat(inputString);
            return result === 0 && strSlice(inputString, 0, 1) === '-' ? -0 : result;
        };
    }(parseFloat);
    if (String(new RangeError('test')) !== 'RangeError: test') {
        var errorToStringShim = function toString() {
            if (typeof this === 'undefined' || this === null) throw new TypeError("can't convert " + this + ' to object');
            var name = this.name;
            if (typeof name === 'undefined') name = 'Error';
            else if (typeof name !== 'string') name = $String(name);
            var msg = this.message;
            if (typeof msg === 'undefined') msg = '';
            else if (typeof msg !== 'string') msg = $String(msg);
            if (!name) return msg;
            if (!msg) return name;
            return name + ': ' + msg;
        };
        // can't use defineProperties here because of toString enumeration issue in IE <= 8
        Error.prototype.toString = errorToStringShim;
    }
    if (supportsDescriptors) {
        var ensureNonEnumerable = function(obj, prop) {
            if (isEnum(obj, prop)) {
                var desc = Object.getOwnPropertyDescriptor(obj, prop);
                if (desc.configurable) {
                    desc.enumerable = false;
                    Object.defineProperty(obj, prop, desc);
                }
            }
        };
        ensureNonEnumerable(Error.prototype, 'message');
        if (Error.prototype.message !== '') Error.prototype.message = '';
        ensureNonEnumerable(Error.prototype, 'name');
    }
    if (String(/a/mig) !== '/a/gim') {
        var regexToString = function toString() {
            var str = '/' + this.source + '/';
            if (this.global) str += 'g';
            if (this.ignoreCase) str += 'i';
            if (this.multiline) str += 'm';
            return str;
        };
        // can't use defineProperties here because of toString enumeration issue in IE <= 8
        RegExp.prototype.toString = regexToString;
    }
});

},{}],"2OzCo":[function(require,module,exports,__globalThis) {
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2020 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */ // vim: ts=4 sts=4 sw=4 expandtab
// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function(root, factory) {
    'use strict';
    /* global define */ if (typeof define === 'function' && define.amd) // AMD. Register as an anonymous module.
    define(factory);
    else // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
})(this, function() {
    var call = Function.call;
    var prototypeOfObject = Object.prototype;
    var owns = call.bind(prototypeOfObject.hasOwnProperty);
    var isEnumerable = call.bind(prototypeOfObject.propertyIsEnumerable);
    var toStr = call.bind(prototypeOfObject.toString);
    // If JS engine supports accessors creating shortcuts.
    var defineGetter;
    var defineSetter;
    var lookupGetter;
    var lookupSetter;
    var supportsAccessors = owns(prototypeOfObject, '__defineGetter__');
    if (supportsAccessors) {
        /* eslint-disable no-underscore-dangle, no-restricted-properties */ defineGetter = call.bind(prototypeOfObject.__defineGetter__);
        defineSetter = call.bind(prototypeOfObject.__defineSetter__);
        lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
        lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
    /* eslint-enable no-underscore-dangle, no-restricted-properties */ }
    var isPrimitive = function isPrimitive(o) {
        return o == null || typeof o !== 'object' && typeof o !== 'function';
    };
    // ES5 15.2.3.2
    // https://es5.github.io/#x15.2.3.2
    if (!Object.getPrototypeOf) // https://github.com/es-shims/es5-shim/issues#issue/2
    // https://johnresig.com/blog/objectgetprototypeof/
    // recommended by fschaefer on github
    //
    // sure, and webreflection says ^_^
    // ... this will nerever possibly return null
    // ... Opera Mini breaks here with infinite loops
    Object.getPrototypeOf = function getPrototypeOf(object) {
        // eslint-disable-next-line no-proto
        var proto = object.__proto__;
        if (proto || proto == null) return proto;
        else if (toStr(object.constructor) === '[object Function]') return object.constructor.prototype;
        else if (object instanceof Object) return prototypeOfObject;
        // Correctly return null for Objects created with `Object.create(null)`
        // (shammed or native) or `{ __proto__: null}`.  Also returns null for
        // cross-realm objects on browsers that lack `__proto__` support (like
        // IE <11), but that's the best we can do.
        return null;
    };
    // ES5 15.2.3.3
    // https://es5.github.io/#x15.2.3.3
    // check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.
    if (Object.defineProperty) {
        var doesGetOwnPropertyDescriptorWork = function doesGetOwnPropertyDescriptorWork(object) {
            try {
                object.sentinel = 0; // eslint-disable-line no-param-reassign
                return Object.getOwnPropertyDescriptor(object, 'sentinel').value === 0;
            } catch (exception) {
                return false;
            }
        };
        var getOwnPropertyDescriptorWorksOnObject = doesGetOwnPropertyDescriptorWork({});
        var getOwnPropertyDescriptorWorksOnDom = typeof document === 'undefined' || doesGetOwnPropertyDescriptorWork(document.createElement('div'));
        if (!getOwnPropertyDescriptorWorksOnDom || !getOwnPropertyDescriptorWorksOnObject) var getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;
    }
    if (!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
        var ERR_NON_OBJECT = 'Object.getOwnPropertyDescriptor called on a non-object: ';
        /* eslint-disable no-proto */ Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            if (isPrimitive(object)) throw new TypeError(ERR_NON_OBJECT + object);
            // make a valiant attempt to use the real getOwnPropertyDescriptor
            // for I8's DOM elements.
            if (getOwnPropertyDescriptorFallback) try {
                return getOwnPropertyDescriptorFallback.call(Object, object, property);
            } catch (exception) {
            // try the shim if the real one doesn't work
            }
            var descriptor;
            // If object does not owns property return undefined immediately.
            if (!owns(object, property)) return descriptor;
            // If object has a property then it's for sure `configurable`, and
            // probably `enumerable`. Detect enumerability though.
            descriptor = {
                enumerable: isEnumerable(object, property),
                configurable: true
            };
            // If JS engine supports accessor properties then property may be a
            // getter or setter.
            if (supportsAccessors) {
                // Unfortunately `__lookupGetter__` will return a getter even
                // if object has own non getter property along with a same named
                // inherited getter. To avoid misbehavior we temporary remove
                // `__proto__` so that `__lookupGetter__` will return getter only
                // if it's owned by an object.
                var prototype = object.__proto__;
                var notPrototypeOfObject = object !== prototypeOfObject;
                // avoid recursion problem, breaking in Opera Mini when
                // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
                // or any other Object.prototype accessor
                if (notPrototypeOfObject) object.__proto__ = prototypeOfObject; // eslint-disable-line no-param-reassign
                var getter = lookupGetter(object, property);
                var setter = lookupSetter(object, property);
                if (notPrototypeOfObject) // Once we have getter and setter we can put values back.
                object.__proto__ = prototype; // eslint-disable-line no-param-reassign
                if (getter || setter) {
                    if (getter) descriptor.get = getter;
                    if (setter) descriptor.set = setter;
                    // If it was accessor property we're done and return here
                    // in order to avoid adding `value` to the descriptor.
                    return descriptor;
                }
            }
            // If we got this far we know that object has an own property that is
            // not an accessor so we set it as a value and return descriptor.
            descriptor.value = object[property];
            descriptor.writable = true;
            return descriptor;
        };
    /* eslint-enable no-proto */ }
    // ES5 15.2.3.4
    // https://es5.github.io/#x15.2.3.4
    if (!Object.getOwnPropertyNames) Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
        return Object.keys(object);
    };
    // ES5 15.2.3.5
    // https://es5.github.io/#x15.2.3.5
    if (!Object.create) {
        // Contributed by Brandon Benvie, October, 2012
        var createEmpty;
        var supportsProto = false;
        // the following produces false positives
        // in Opera Mini => not a reliable check
        // Object.prototype.__proto__ === null
        // Check for document.domain and active x support
        // No need to use active x approach when document.domain is not set
        // see https://github.com/es-shims/es5-shim/issues/150
        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
        /* global ActiveXObject */ var shouldUseActiveX = function shouldUseActiveX() {
            // return early if document.domain not set
            if (!document.domain) return false;
            try {
                return new ActiveXObject('htmlfile'), true;
            } catch (exception) {
                return false;
            }
        };
        // This supports IE8 when document.domain is used
        // see https://github.com/es-shims/es5-shim/issues/150
        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
        var getEmptyViaActiveX = function getEmptyViaActiveX() {
            var empty;
            var xDoc;
            xDoc = new ActiveXObject('htmlfile');
            var script = 'script';
            xDoc.write('<' + script + '></' + script + '>');
            xDoc.close();
            empty = xDoc.parentWindow.Object.prototype;
            xDoc = null;
            return empty;
        };
        // The original implementation using an iframe
        // before the activex approach was added
        // see https://github.com/es-shims/es5-shim/issues/150
        var getEmptyViaIFrame = function getEmptyViaIFrame() {
            var iframe = document.createElement('iframe');
            var parent = document.body || document.documentElement;
            var empty;
            iframe.style.display = 'none';
            parent.appendChild(iframe);
            // eslint-disable-next-line no-script-url
            iframe.src = 'javascript:';
            empty = iframe.contentWindow.Object.prototype;
            parent.removeChild(iframe);
            iframe = null;
            return empty;
        };
        /* global document */ if (supportsProto || typeof document === 'undefined') createEmpty = function() {
            return {
                __proto__: null
            };
        };
        else // In old IE __proto__ can't be used to manually set `null`, nor does
        // any other method exist to make an object that inherits from nothing,
        // aside from Object.prototype itself. Instead, create a new global
        // object and *steal* its Object.prototype and strip it bare. This is
        // used as the prototype to create nullary objects.
        createEmpty = function() {
            // Determine which approach to use
            // see https://github.com/es-shims/es5-shim/issues/150
            var empty = shouldUseActiveX() ? getEmptyViaActiveX() : getEmptyViaIFrame();
            delete empty.constructor;
            delete empty.hasOwnProperty;
            delete empty.propertyIsEnumerable;
            delete empty.isPrototypeOf;
            delete empty.toLocaleString;
            delete empty.toString;
            delete empty.valueOf;
            var Empty = function Empty() {};
            Empty.prototype = empty;
            // short-circuit future calls
            createEmpty = function() {
                return new Empty();
            };
            return new Empty();
        };
        Object.create = function create(prototype, properties) {
            var object;
            var Type = function Type() {}; // An empty constructor.
            if (prototype === null) object = createEmpty();
            else if (isPrimitive(prototype)) // In the native implementation `parent` can be `null`
            // OR *any* `instanceof Object`  (Object|Function|Array|RegExp|etc)
            // Use `typeof` tho, b/c in old IE, DOM elements are not `instanceof Object`
            // like they are in modern browsers. Using `Object.create` on DOM elements
            // is...err...probably inappropriate, but the native version allows for it.
            throw new TypeError('Object prototype may only be an Object or null'); // same msg as Chrome
            else {
                Type.prototype = prototype;
                object = new Type();
                // IE has no built-in implementation of `Object.getPrototypeOf`
                // neither `__proto__`, but this manually setting `__proto__` will
                // guarantee that `Object.getPrototypeOf` will work as expected with
                // objects created using `Object.create`
                // eslint-disable-next-line no-proto
                object.__proto__ = prototype;
            }
            if (properties !== void 0) Object.defineProperties(object, properties);
            return object;
        };
    }
    // ES5 15.2.3.6
    // https://es5.github.io/#x15.2.3.6
    // Patch for WebKit and IE8 standard mode
    // Designed by hax <hax.github.com>
    // related issue: https://github.com/es-shims/es5-shim/issues#issue/5
    // IE8 Reference:
    //     https://msdn.microsoft.com/en-us/library/dd282900.aspx
    //     https://msdn.microsoft.com/en-us/library/dd229916.aspx
    // WebKit Bugs:
    //     https://bugs.webkit.org/show_bug.cgi?id=36423
    var doesDefinePropertyWork = function doesDefinePropertyWork(object) {
        try {
            Object.defineProperty(object, 'sentinel', {});
            return 'sentinel' in object;
        } catch (exception) {
            return false;
        }
    };
    // check whether defineProperty works if it's given. Otherwise,
    // shim partially.
    if (Object.defineProperty) {
        var definePropertyWorksOnObject = doesDefinePropertyWork({});
        var definePropertyWorksOnDom = typeof document === 'undefined' || doesDefinePropertyWork(document.createElement('div'));
        if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) var definePropertyFallback = Object.defineProperty, definePropertiesFallback = Object.defineProperties;
    }
    if (!Object.defineProperty || definePropertyFallback) {
        var ERR_NON_OBJECT_DESCRIPTOR = 'Property description must be an object: ';
        var ERR_NON_OBJECT_TARGET = 'Object.defineProperty called on non-object: ';
        var ERR_ACCESSORS_NOT_SUPPORTED = 'getters & setters can not be defined on this javascript engine';
        Object.defineProperty = function defineProperty(object, property, descriptor) {
            if (isPrimitive(object)) throw new TypeError(ERR_NON_OBJECT_TARGET + object);
            if (isPrimitive(descriptor)) throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);
            // make a valiant attempt to use the real defineProperty
            // for I8's DOM elements.
            if (definePropertyFallback) try {
                return definePropertyFallback.call(Object, object, property, descriptor);
            } catch (exception) {
            // try the shim if the real one doesn't work
            }
            // If it's a data property.
            if ('value' in descriptor) {
                // fail silently if 'writable', 'enumerable', or 'configurable'
                // are requested but not supported
                /*
                // alternate approach:
                if ( // can't implement these features; allow false but not true
                    ('writable' in descriptor && !descriptor.writable) ||
                    ('enumerable' in descriptor && !descriptor.enumerable) ||
                    ('configurable' in descriptor && !descriptor.configurable)
                ))
                    throw new RangeError(
                        'This implementation of Object.defineProperty does not support configurable, enumerable, or writable.'
                    );
                */ if (supportsAccessors && (lookupGetter(object, property) || lookupSetter(object, property))) {
                    // As accessors are supported only on engines implementing
                    // `__proto__` we can safely override `__proto__` while defining
                    // a property to make sure that we don't hit an inherited
                    // accessor.
                    /* eslint-disable no-proto, no-param-reassign */ var prototype = object.__proto__;
                    object.__proto__ = prototypeOfObject;
                    // Deleting a property anyway since getter / setter may be
                    // defined on object itself.
                    delete object[property];
                    object[property] = descriptor.value;
                    // Setting original `__proto__` back now.
                    object.__proto__ = prototype;
                /* eslint-enable no-proto, no-param-reassign */ } else object[property] = descriptor.value; // eslint-disable-line no-param-reassign
            } else {
                var hasGetter = 'get' in descriptor;
                var hasSetter = 'set' in descriptor;
                if (!supportsAccessors && (hasGetter || hasSetter)) throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
                // If we got that far then getters and setters can be defined !!
                if (hasGetter) defineGetter(object, property, descriptor.get);
                if (hasSetter) defineSetter(object, property, descriptor.set);
            }
            return object;
        };
    }
    // ES5 15.2.3.7
    // https://es5.github.io/#x15.2.3.7
    if (!Object.defineProperties || definePropertiesFallback) Object.defineProperties = function defineProperties(object, properties) {
        // make a valiant attempt to use the real defineProperties
        if (definePropertiesFallback) try {
            return definePropertiesFallback.call(Object, object, properties);
        } catch (exception) {
        // try the shim if the real one doesn't work
        }
        Object.keys(properties).forEach(function(property) {
            if (property !== '__proto__') Object.defineProperty(object, property, properties[property]);
        });
        return object;
    };
    // ES5 15.2.3.8
    // https://es5.github.io/#x15.2.3.8
    if (!Object.seal) Object.seal = function seal(object) {
        if (Object(object) !== object) throw new TypeError('Object.seal can only be called on Objects.');
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
    };
    // ES5 15.2.3.9
    // https://es5.github.io/#x15.2.3.9
    if (!Object.freeze) Object.freeze = function freeze(object) {
        if (Object(object) !== object) throw new TypeError('Object.freeze can only be called on Objects.');
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
    };
    // detect a Rhino bug and patch it
    try {
        Object.freeze(function() {});
    } catch (exception) {
        Object.freeze = function(freezeObject) {
            return function freeze(object) {
                if (typeof object === 'function') return object;
                return freezeObject(object);
            };
        }(Object.freeze);
    }
    // ES5 15.2.3.10
    // https://es5.github.io/#x15.2.3.10
    if (!Object.preventExtensions) Object.preventExtensions = function preventExtensions(object) {
        if (Object(object) !== object) throw new TypeError('Object.preventExtensions can only be called on Objects.');
        // this is misleading and breaks feature-detection, but
        // allows "securable" code to "gracefully" degrade to working
        // but insecure code.
        return object;
    };
    // ES5 15.2.3.11
    // https://es5.github.io/#x15.2.3.11
    if (!Object.isSealed) Object.isSealed = function isSealed(object) {
        if (Object(object) !== object) throw new TypeError('Object.isSealed can only be called on Objects.');
        return false;
    };
    // ES5 15.2.3.12
    // https://es5.github.io/#x15.2.3.12
    if (!Object.isFrozen) Object.isFrozen = function isFrozen(object) {
        if (Object(object) !== object) throw new TypeError('Object.isFrozen can only be called on Objects.');
        return false;
    };
    // ES5 15.2.3.13
    // https://es5.github.io/#x15.2.3.13
    if (!Object.isExtensible) Object.isExtensible = function isExtensible(object) {
        // 1. If Type(O) is not Object throw a TypeError exception.
        if (Object(object) !== object) throw new TypeError('Object.isExtensible can only be called on Objects.');
        // 2. Return the Boolean value of the [[Extensible]] internal property of O.
        var name = '';
        while(owns(object, name))name += '?';
        object[name] = true; // eslint-disable-line no-param-reassign
        var returnValue = owns(object, name);
        delete object[name]; // eslint-disable-line no-param-reassign
        return returnValue;
    };
});

},{}],"5M9qy":[function(require,module,exports,__globalThis) {
'use strict';
require("e93cd0425010af75");
require("d37c4ee214ed4031")();
require("32681e7d0a3ce028");

},{"e93cd0425010af75":"iSRkT","d37c4ee214ed4031":"c1tvS","32681e7d0a3ce028":"ASF4n"}],"iSRkT":[function(require,module,exports,__globalThis) {
var global = arguments[3];
/*!
 * https://github.com/paulmillr/es6-shim
 * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
 *   and contributors,  MIT License
 * es6-shim: v0.35.4
 * see https://github.com/paulmillr/es6-shim/blob/0.35.3/LICENSE
 * Details and documentation:
 * https://github.com/paulmillr/es6-shim/
 */ // UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/returnExports.js
(function(root, factory) {
    /*global define */ if (typeof define === 'function' && define.amd) // AMD. Register as an anonymous module.
    define(factory);
    else // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
})(this, function() {
    'use strict';
    var _apply = Function.call.bind(Function.apply);
    var _call = Function.call.bind(Function.call);
    var isArray = Array.isArray;
    var keys = Object.keys;
    var not = function notThunker(func) {
        return function notThunk() {
            return !_apply(func, this, arguments);
        };
    };
    var throwsError = function(func) {
        try {
            func();
            return false;
        } catch (e) {
            return true;
        }
    };
    var valueOrFalseIfThrows = function valueOrFalseIfThrows(func) {
        try {
            return func();
        } catch (e) {
            return false;
        }
    };
    var isCallableWithoutNew = not(throwsError);
    var arePropertyDescriptorsSupported = function() {
        // if Object.defineProperty exists but throws, it's IE 8
        return !throwsError(function() {
            return Object.defineProperty({}, 'x', {
                get: function() {}
            }); // eslint-disable-line getter-return
        });
    };
    var supportsDescriptors = !!Object.defineProperty && arePropertyDescriptorsSupported();
    var functionsHaveNames = (function foo() {}).name === 'foo'; // eslint-disable-line no-extra-parens
    var _forEach = Function.call.bind(Array.prototype.forEach);
    var _reduce = Function.call.bind(Array.prototype.reduce);
    var _filter = Function.call.bind(Array.prototype.filter);
    var _some = Function.call.bind(Array.prototype.some);
    var defineProperty = function(object, name, value, force) {
        if (!force && name in object) return;
        if (supportsDescriptors) Object.defineProperty(object, name, {
            configurable: true,
            enumerable: false,
            writable: true,
            value: value
        });
        else object[name] = value;
    };
    // Define configurable, writable and non-enumerable props
    // if they don’t exist.
    var defineProperties = function(object, map, forceOverride) {
        _forEach(keys(map), function(name) {
            var method = map[name];
            defineProperty(object, name, method, !!forceOverride);
        });
    };
    var _toString = Function.call.bind(Object.prototype.toString);
    var isCallable = typeof /abc/ === 'function' ? function IsCallableSlow(x) {
        // Some old browsers (IE, FF) say that typeof /abc/ === 'function'
        return typeof x === 'function' && _toString(x) === '[object Function]';
    } : function IsCallableFast(x) {
        return typeof x === 'function';
    };
    var Value = {
        getter: function(object, name, getter) {
            if (!supportsDescriptors) throw new TypeError('getters require true ES5 support');
            Object.defineProperty(object, name, {
                configurable: true,
                enumerable: false,
                get: getter
            });
        },
        proxy: function(originalObject, key, targetObject) {
            if (!supportsDescriptors) throw new TypeError('getters require true ES5 support');
            var originalDescriptor = Object.getOwnPropertyDescriptor(originalObject, key);
            Object.defineProperty(targetObject, key, {
                configurable: originalDescriptor.configurable,
                enumerable: originalDescriptor.enumerable,
                get: function getKey() {
                    return originalObject[key];
                },
                set: function setKey(value) {
                    originalObject[key] = value;
                }
            });
        },
        redefine: function(object, property, newValue) {
            if (supportsDescriptors) {
                var descriptor = Object.getOwnPropertyDescriptor(object, property);
                descriptor.value = newValue;
                Object.defineProperty(object, property, descriptor);
            } else object[property] = newValue;
        },
        defineByDescriptor: function(object, property, descriptor) {
            if (supportsDescriptors) Object.defineProperty(object, property, descriptor);
            else if ('value' in descriptor) object[property] = descriptor.value;
        },
        preserveToString: function(target, source) {
            if (source && isCallable(source.toString)) defineProperty(target, 'toString', source.toString.bind(source), true);
        }
    };
    // Simple shim for Object.create on ES3 browsers
    // (unlike real shim, no attempt to support `prototype === null`)
    var create = Object.create || function(prototype, properties) {
        var Prototype = function Prototype() {};
        Prototype.prototype = prototype;
        var object = new Prototype();
        if (typeof properties !== 'undefined') keys(properties).forEach(function(key) {
            Value.defineByDescriptor(object, key, properties[key]);
        });
        return object;
    };
    var supportsSubclassing = function(C, f) {
        if (!Object.setPrototypeOf) return false; /* skip test on IE < 11 */ 
        return valueOrFalseIfThrows(function() {
            var Sub = function Subclass(arg) {
                var o = new C(arg);
                Object.setPrototypeOf(o, Subclass.prototype);
                return o;
            };
            Object.setPrototypeOf(Sub, C);
            Sub.prototype = create(C.prototype, {
                constructor: {
                    value: Sub
                }
            });
            return f(Sub);
        });
    };
    var getGlobal = function() {
        /* global self, window */ // the only reliable means to get the global object is
        // `Function('return this')()`
        // However, this causes CSP violations in Chrome apps.
        if (typeof self !== 'undefined') return self;
        if (typeof window !== 'undefined') return window;
        if (typeof global !== 'undefined') return global;
        throw new Error('unable to locate global object');
    };
    var globals = getGlobal();
    var globalIsFinite = globals.isFinite;
    var _indexOf = Function.call.bind(String.prototype.indexOf);
    var _arrayIndexOfApply = Function.apply.bind(Array.prototype.indexOf);
    var _concat = Function.call.bind(Array.prototype.concat);
    // var _sort = Function.call.bind(Array.prototype.sort);
    var _strSlice = Function.call.bind(String.prototype.slice);
    var _push = Function.call.bind(Array.prototype.push);
    var _pushApply = Function.apply.bind(Array.prototype.push);
    var _join = Function.call.bind(Array.prototype.join);
    var _shift = Function.call.bind(Array.prototype.shift);
    var _max = Math.max;
    var _min = Math.min;
    var _floor = Math.floor;
    var _abs = Math.abs;
    var _exp = Math.exp;
    var _log = Math.log;
    var _sqrt = Math.sqrt;
    var _hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
    var ArrayIterator; // make our implementation private
    var noop = function() {};
    var OrigMap = globals.Map;
    var origMapDelete = OrigMap && OrigMap.prototype['delete'];
    var origMapGet = OrigMap && OrigMap.prototype.get;
    var origMapHas = OrigMap && OrigMap.prototype.has;
    var origMapSet = OrigMap && OrigMap.prototype.set;
    var Symbol = globals.Symbol || {};
    var symbolSpecies = Symbol.species || '@@species';
    var numberIsNaN = Number.isNaN || function isNaN(value) {
        // NaN !== NaN, but they are identical.
        // NaNs are the only non-reflexive value, i.e., if x !== x,
        // then x is NaN.
        // isNaN is broken: it converts its argument to number, so
        // isNaN('foo') => true
        return value !== value;
    };
    var numberIsFinite = Number.isFinite || function isFinite(value) {
        return typeof value === 'number' && globalIsFinite(value);
    };
    var _sign = isCallable(Math.sign) ? Math.sign : function sign(value) {
        var number = Number(value);
        if (number === 0) return number;
        if (numberIsNaN(number)) return number;
        return number < 0 ? -1 : 1;
    };
    var _log1p = function log1p(value) {
        var x = Number(value);
        if (x < -1 || numberIsNaN(x)) return NaN;
        if (x === 0 || x === Infinity) return x;
        if (x === -1) return -Infinity;
        return 1 + x - 1 === 0 ? x : x * (_log(1 + x) / (1 + x - 1));
    };
    // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
    // can be replaced with require('is-arguments') if we ever use a build process instead
    var isStandardArguments = function isArguments(value) {
        return _toString(value) === '[object Arguments]';
    };
    var isLegacyArguments = function isArguments(value) {
        return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && _toString(value) !== '[object Array]' && _toString(value.callee) === '[object Function]';
    };
    var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;
    var Type = {
        primitive: function(x) {
            return x === null || typeof x !== 'function' && typeof x !== 'object';
        },
        string: function(x) {
            return _toString(x) === '[object String]';
        },
        regex: function(x) {
            return _toString(x) === '[object RegExp]';
        },
        symbol: function(x) {
            return typeof globals.Symbol === 'function' && typeof x === 'symbol';
        }
    };
    var overrideNative = function overrideNative(object, property, replacement) {
        var original = object[property];
        defineProperty(object, property, replacement, true);
        Value.preserveToString(object[property], original);
    };
    // eslint-disable-next-line no-restricted-properties
    var hasSymbols = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' && Type.symbol(Symbol());
    // This is a private name in the es6 spec, equal to '[Symbol.iterator]'
    // we're going to use an arbitrary _-prefixed name to make our shims
    // work properly with each other, even though we don't have full Iterator
    // support.  That is, `Array.from(map.keys())` will work, but we don't
    // pretend to export a "real" Iterator interface.
    var $iterator$ = Type.symbol(Symbol.iterator) ? Symbol.iterator : '_es6-shim iterator_';
    // Firefox ships a partial implementation using the name @@iterator.
    // https://bugzilla.mozilla.org/show_bug.cgi?id=907077#c14
    // So use that name if we detect it.
    if (globals.Set && typeof new globals.Set()['@@iterator'] === 'function') $iterator$ = '@@iterator';
    // Reflect
    if (!globals.Reflect) defineProperty(globals, 'Reflect', {}, true);
    var Reflect = globals.Reflect;
    var $String = String;
    /* global document */ var domAll = typeof document === 'undefined' || !document ? null : document.all;
    var isNullOrUndefined = domAll == null ? function isNullOrUndefined(x) {
        return x == null;
    } : function isNullOrUndefinedAndNotDocumentAll(x) {
        return x == null && x !== domAll;
    };
    var ES = {
        // http://www.ecma-international.org/ecma-262/6.0/#sec-call
        Call: function Call(F, V) {
            var args = arguments.length > 2 ? arguments[2] : [];
            if (!ES.IsCallable(F)) throw new TypeError(F + ' is not a function');
            return _apply(F, V, args);
        },
        RequireObjectCoercible: function(x, optMessage) {
            if (isNullOrUndefined(x)) throw new TypeError(optMessage || 'Cannot call method on ' + x);
            return x;
        },
        // This might miss the "(non-standard exotic and does not implement
        // [[Call]])" case from
        // http://www.ecma-international.org/ecma-262/6.0/#sec-typeof-operator-runtime-semantics-evaluation
        // but we can't find any evidence these objects exist in practice.
        // If we find some in the future, you could test `Object(x) === x`,
        // which is reliable according to
        // http://www.ecma-international.org/ecma-262/6.0/#sec-toobject
        // but is not well optimized by runtimes and creates an object
        // whenever it returns false, and thus is very slow.
        TypeIsObject: function(x) {
            if (x === void 0 || x === null || x === true || x === false) return false;
            return typeof x === 'function' || typeof x === 'object' || x === domAll;
        },
        ToObject: function(o, optMessage) {
            return Object(ES.RequireObjectCoercible(o, optMessage));
        },
        IsCallable: isCallable,
        IsConstructor: function(x) {
            // We can't tell callables from constructors in ES5
            return ES.IsCallable(x);
        },
        ToInt32: function(x) {
            return ES.ToNumber(x) >> 0;
        },
        ToUint32: function(x) {
            return ES.ToNumber(x) >>> 0;
        },
        ToNumber: function(value) {
            if (hasSymbols && _toString(value) === '[object Symbol]') throw new TypeError('Cannot convert a Symbol value to a number');
            return +value;
        },
        ToInteger: function(value) {
            var number = ES.ToNumber(value);
            if (numberIsNaN(number)) return 0;
            if (number === 0 || !numberIsFinite(number)) return number;
            return (number > 0 ? 1 : -1) * _floor(_abs(number));
        },
        ToLength: function(value) {
            var len = ES.ToInteger(value);
            if (len <= 0) return 0;
             // includes converting -0 to +0
            if (len > Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER;
            return len;
        },
        SameValue: function(a, b) {
            if (a === b) {
                // 0 === -0, but they are not identical.
                if (a === 0) return 1 / a === 1 / b;
                return true;
            }
            return numberIsNaN(a) && numberIsNaN(b);
        },
        SameValueZero: function(a, b) {
            // same as SameValue except for SameValueZero(+0, -0) == true
            return a === b || numberIsNaN(a) && numberIsNaN(b);
        },
        IsIterable: function(o) {
            return ES.TypeIsObject(o) && (typeof o[$iterator$] !== 'undefined' || isArguments(o));
        },
        GetIterator: function(o) {
            if (isArguments(o)) // special case support for `arguments`
            return new ArrayIterator(o, 'value');
            var itFn = ES.GetMethod(o, $iterator$);
            if (!ES.IsCallable(itFn)) // Better diagnostics if itFn is null or undefined
            throw new TypeError('value is not an iterable');
            var it = ES.Call(itFn, o);
            if (!ES.TypeIsObject(it)) throw new TypeError('bad iterator');
            return it;
        },
        GetMethod: function(o, p) {
            var func = ES.ToObject(o)[p];
            if (isNullOrUndefined(func)) return void 0;
            if (!ES.IsCallable(func)) throw new TypeError('Method not callable: ' + p);
            return func;
        },
        IteratorComplete: function(iterResult) {
            return !!iterResult.done;
        },
        IteratorClose: function(iterator, completionIsThrow) {
            var returnMethod = ES.GetMethod(iterator, 'return');
            if (returnMethod === void 0) return;
            var innerResult, innerException;
            try {
                innerResult = ES.Call(returnMethod, iterator);
            } catch (e) {
                innerException = e;
            }
            if (completionIsThrow) return;
            if (innerException) throw innerException;
            if (!ES.TypeIsObject(innerResult)) throw new TypeError("Iterator's return method returned a non-object.");
        },
        IteratorNext: function(it) {
            var result = arguments.length > 1 ? it.next(arguments[1]) : it.next();
            if (!ES.TypeIsObject(result)) throw new TypeError('bad iterator');
            return result;
        },
        IteratorStep: function(it) {
            var result = ES.IteratorNext(it);
            var done = ES.IteratorComplete(result);
            return done ? false : result;
        },
        Construct: function(C, args, newTarget, isES6internal) {
            var target = typeof newTarget === 'undefined' ? C : newTarget;
            if (!isES6internal && Reflect.construct) // Try to use Reflect.construct if available
            return Reflect.construct(C, args, target);
            // OK, we have to fake it.  This will only work if the
            // C.[[ConstructorKind]] == "base" -- but that's the only
            // kind we can make in ES5 code anyway.
            // OrdinaryCreateFromConstructor(target, "%ObjectPrototype%")
            var proto = target.prototype;
            if (!ES.TypeIsObject(proto)) proto = Object.prototype;
            var obj = create(proto);
            // Call the constructor.
            var result = ES.Call(C, obj, args);
            return ES.TypeIsObject(result) ? result : obj;
        },
        SpeciesConstructor: function(O, defaultConstructor) {
            var C = O.constructor;
            if (C === void 0) return defaultConstructor;
            if (!ES.TypeIsObject(C)) throw new TypeError('Bad constructor');
            var S = C[symbolSpecies];
            if (isNullOrUndefined(S)) return defaultConstructor;
            if (!ES.IsConstructor(S)) throw new TypeError('Bad @@species');
            return S;
        },
        CreateHTML: function(string, tag, attribute, value) {
            var S = ES.ToString(string);
            var p1 = '<' + tag;
            if (attribute !== '') {
                var V = ES.ToString(value);
                var escapedV = V.replace(/"/g, '&quot;');
                p1 += ' ' + attribute + '="' + escapedV + '"';
            }
            var p2 = p1 + '>';
            var p3 = p2 + S;
            return p3 + '</' + tag + '>';
        },
        IsRegExp: function IsRegExp(argument) {
            if (!ES.TypeIsObject(argument)) return false;
            var isRegExp = argument[Symbol.match];
            if (typeof isRegExp !== 'undefined') return !!isRegExp;
            return Type.regex(argument);
        },
        ToString: function ToString(string) {
            if (hasSymbols && _toString(string) === '[object Symbol]') throw new TypeError('Cannot convert a Symbol value to a number');
            return $String(string);
        }
    };
    // Well-known Symbol shims
    if (supportsDescriptors && hasSymbols) {
        var defineWellKnownSymbol = function defineWellKnownSymbol(name) {
            if (Type.symbol(Symbol[name])) return Symbol[name];
            // eslint-disable-next-line no-restricted-properties
            var sym = Symbol['for']('Symbol.' + name);
            Object.defineProperty(Symbol, name, {
                configurable: false,
                enumerable: false,
                writable: false,
                value: sym
            });
            return sym;
        };
        if (!Type.symbol(Symbol.search)) {
            var symbolSearch = defineWellKnownSymbol('search');
            var originalSearch = String.prototype.search;
            defineProperty(RegExp.prototype, symbolSearch, function search(string) {
                return ES.Call(originalSearch, string, [
                    this
                ]);
            });
            var searchShim = function search(regexp) {
                var O = ES.RequireObjectCoercible(this);
                if (!isNullOrUndefined(regexp)) {
                    var searcher = ES.GetMethod(regexp, symbolSearch);
                    if (typeof searcher !== 'undefined') return ES.Call(searcher, regexp, [
                        O
                    ]);
                }
                return ES.Call(originalSearch, O, [
                    ES.ToString(regexp)
                ]);
            };
            overrideNative(String.prototype, 'search', searchShim);
        }
        if (!Type.symbol(Symbol.replace)) {
            var symbolReplace = defineWellKnownSymbol('replace');
            var originalReplace = String.prototype.replace;
            defineProperty(RegExp.prototype, symbolReplace, function replace(string, replaceValue) {
                return ES.Call(originalReplace, string, [
                    this,
                    replaceValue
                ]);
            });
            var replaceShim = function replace(searchValue, replaceValue) {
                var O = ES.RequireObjectCoercible(this);
                if (!isNullOrUndefined(searchValue)) {
                    var replacer = ES.GetMethod(searchValue, symbolReplace);
                    if (typeof replacer !== 'undefined') return ES.Call(replacer, searchValue, [
                        O,
                        replaceValue
                    ]);
                }
                return ES.Call(originalReplace, O, [
                    ES.ToString(searchValue),
                    replaceValue
                ]);
            };
            overrideNative(String.prototype, 'replace', replaceShim);
        }
        if (!Type.symbol(Symbol.split)) {
            var symbolSplit = defineWellKnownSymbol('split');
            var originalSplit = String.prototype.split;
            defineProperty(RegExp.prototype, symbolSplit, function split(string, limit) {
                return ES.Call(originalSplit, string, [
                    this,
                    limit
                ]);
            });
            var splitShim = function split(separator, limit) {
                var O = ES.RequireObjectCoercible(this);
                if (!isNullOrUndefined(separator)) {
                    var splitter = ES.GetMethod(separator, symbolSplit);
                    if (typeof splitter !== 'undefined') return ES.Call(splitter, separator, [
                        O,
                        limit
                    ]);
                }
                return ES.Call(originalSplit, O, [
                    ES.ToString(separator),
                    limit
                ]);
            };
            overrideNative(String.prototype, 'split', splitShim);
        }
        var symbolMatchExists = Type.symbol(Symbol.match);
        var stringMatchIgnoresSymbolMatch = symbolMatchExists && function() {
            // Firefox 41, through Nightly 45 has Symbol.match, but String#match ignores it.
            // Firefox 40 and below have Symbol.match but String#match works fine.
            var o = {};
            o[Symbol.match] = function() {
                return 42;
            };
            return 'a'.match(o) !== 42;
        }();
        if (!symbolMatchExists || stringMatchIgnoresSymbolMatch) {
            var symbolMatch = defineWellKnownSymbol('match');
            var originalMatch = String.prototype.match;
            defineProperty(RegExp.prototype, symbolMatch, function match(string) {
                return ES.Call(originalMatch, string, [
                    this
                ]);
            });
            var matchShim = function match(regexp) {
                var O = ES.RequireObjectCoercible(this);
                if (!isNullOrUndefined(regexp)) {
                    var matcher = ES.GetMethod(regexp, symbolMatch);
                    if (typeof matcher !== 'undefined') return ES.Call(matcher, regexp, [
                        O
                    ]);
                }
                return ES.Call(originalMatch, O, [
                    ES.ToString(regexp)
                ]);
            };
            overrideNative(String.prototype, 'match', matchShim);
        }
    }
    var wrapConstructor = function wrapConstructor(original, replacement, keysToSkip) {
        Value.preserveToString(replacement, original);
        if (Object.setPrototypeOf) // sets up proper prototype chain where possible
        Object.setPrototypeOf(original, replacement);
        if (supportsDescriptors) _forEach(Object.getOwnPropertyNames(original), function(key) {
            if (key in noop || keysToSkip[key]) return;
            Value.proxy(original, key, replacement);
        });
        else _forEach(Object.keys(original), function(key) {
            if (key in noop || keysToSkip[key]) return;
            replacement[key] = original[key];
        });
        replacement.prototype = original.prototype;
        Value.redefine(original.prototype, 'constructor', replacement);
    };
    var defaultSpeciesGetter = function() {
        return this;
    };
    var addDefaultSpecies = function(C) {
        if (supportsDescriptors && !_hasOwnProperty(C, symbolSpecies)) Value.getter(C, symbolSpecies, defaultSpeciesGetter);
    };
    var addIterator = function(prototype, impl) {
        var implementation = impl || function iterator() {
            return this;
        };
        defineProperty(prototype, $iterator$, implementation);
        if (!prototype[$iterator$] && Type.symbol($iterator$)) // implementations are buggy when $iterator$ is a Symbol
        prototype[$iterator$] = implementation;
    };
    var createDataProperty = function createDataProperty(object, name, value) {
        if (supportsDescriptors) Object.defineProperty(object, name, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: value
        });
        else object[name] = value;
    };
    var createDataPropertyOrThrow = function createDataPropertyOrThrow(object, name, value) {
        createDataProperty(object, name, value);
        if (!ES.SameValue(object[name], value)) throw new TypeError('property is nonconfigurable');
    };
    var emulateES6construct = function(o, defaultNewTarget, defaultProto, slots) {
        // This is an es5 approximation to es6 construct semantics.  in es6,
        // 'new Foo' invokes Foo.[[Construct]] which (for almost all objects)
        // just sets the internal variable NewTarget (in es6 syntax `new.target`)
        // to Foo and then returns Foo().
        // Many ES6 object then have constructors of the form:
        // 1. If NewTarget is undefined, throw a TypeError exception
        // 2. Let xxx by OrdinaryCreateFromConstructor(NewTarget, yyy, zzz)
        // So we're going to emulate those first two steps.
        if (!ES.TypeIsObject(o)) throw new TypeError('Constructor requires `new`: ' + defaultNewTarget.name);
        var proto = defaultNewTarget.prototype;
        if (!ES.TypeIsObject(proto)) proto = defaultProto;
        var obj = create(proto);
        for(var name in slots)if (_hasOwnProperty(slots, name)) {
            var value = slots[name];
            defineProperty(obj, name, value, true);
        }
        return obj;
    };
    // Firefox 31 reports this function's length as 0
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1062484
    if (String.fromCodePoint && String.fromCodePoint.length !== 1) {
        var originalFromCodePoint = String.fromCodePoint;
        overrideNative(String, 'fromCodePoint', function fromCodePoint(codePoints) {
            return ES.Call(originalFromCodePoint, this, arguments);
        });
    }
    var StringShims = {
        fromCodePoint: function fromCodePoint(codePoints) {
            var result = [];
            var next;
            for(var i = 0, length = arguments.length; i < length; i++){
                next = Number(arguments[i]);
                if (!ES.SameValue(next, ES.ToInteger(next)) || next < 0 || next > 0x10FFFF) throw new RangeError('Invalid code point ' + next);
                if (next < 0x10000) _push(result, String.fromCharCode(next));
                else {
                    next -= 0x10000;
                    _push(result, String.fromCharCode((next >> 10) + 0xD800));
                    _push(result, String.fromCharCode(next % 0x400 + 0xDC00));
                }
            }
            return _join(result, '');
        },
        raw: function raw(template) {
            var numberOfSubstitutions = arguments.length - 1;
            var cooked = ES.ToObject(template, 'bad template');
            var raw = ES.ToObject(cooked.raw, 'bad raw value');
            var len = raw.length;
            var literalSegments = ES.ToLength(len);
            if (literalSegments <= 0) return '';
            var stringElements = [];
            var nextIndex = 0;
            var nextKey, next, nextSeg, nextSub;
            while(nextIndex < literalSegments){
                nextKey = ES.ToString(nextIndex);
                nextSeg = ES.ToString(raw[nextKey]);
                _push(stringElements, nextSeg);
                if (nextIndex + 1 >= literalSegments) break;
                next = nextIndex + 1 < arguments.length ? arguments[nextIndex + 1] : '';
                nextSub = ES.ToString(next);
                _push(stringElements, nextSub);
                nextIndex += 1;
            }
            return _join(stringElements, '');
        }
    };
    if (String.raw && String.raw({
        raw: {
            0: 'x',
            1: 'y',
            length: 2
        }
    }) !== 'xy') // IE 11 TP has a broken String.raw implementation
    overrideNative(String, 'raw', StringShims.raw);
    defineProperties(String, StringShims);
    // Fast repeat, uses the `Exponentiation by squaring` algorithm.
    // Perf: http://jsperf.com/string-repeat2/2
    var stringRepeat = function repeat(s, times) {
        if (times < 1) return '';
        if (times % 2) return repeat(s, times - 1) + s;
        var half = repeat(s, times / 2);
        return half + half;
    };
    var stringMaxLength = Infinity;
    var StringPrototypeShims = {
        repeat: function repeat(times) {
            var thisStr = ES.ToString(ES.RequireObjectCoercible(this));
            var numTimes = ES.ToInteger(times);
            if (numTimes < 0 || numTimes >= stringMaxLength) throw new RangeError('repeat count must be less than infinity and not overflow maximum string size');
            return stringRepeat(thisStr, numTimes);
        },
        startsWith: function startsWith(searchString) {
            var S = ES.ToString(ES.RequireObjectCoercible(this));
            if (ES.IsRegExp(searchString)) throw new TypeError('Cannot call method "startsWith" with a regex');
            var searchStr = ES.ToString(searchString);
            var position;
            if (arguments.length > 1) position = arguments[1];
            var start = _max(ES.ToInteger(position), 0);
            return _strSlice(S, start, start + searchStr.length) === searchStr;
        },
        endsWith: function endsWith(searchString) {
            var S = ES.ToString(ES.RequireObjectCoercible(this));
            if (ES.IsRegExp(searchString)) throw new TypeError('Cannot call method "endsWith" with a regex');
            var searchStr = ES.ToString(searchString);
            var len = S.length;
            var endPosition;
            if (arguments.length > 1) endPosition = arguments[1];
            var pos = typeof endPosition === 'undefined' ? len : ES.ToInteger(endPosition);
            var end = _min(_max(pos, 0), len);
            return _strSlice(S, end - searchStr.length, end) === searchStr;
        },
        includes: function includes(searchString) {
            if (ES.IsRegExp(searchString)) throw new TypeError('"includes" does not accept a RegExp');
            var searchStr = ES.ToString(searchString);
            var position;
            if (arguments.length > 1) position = arguments[1];
            // Somehow this trick makes method 100% compat with the spec.
            return _indexOf(this, searchStr, position) !== -1;
        },
        codePointAt: function codePointAt(pos) {
            var thisStr = ES.ToString(ES.RequireObjectCoercible(this));
            var position = ES.ToInteger(pos);
            var length = thisStr.length;
            if (position >= 0 && position < length) {
                var first = thisStr.charCodeAt(position);
                var isEnd = position + 1 === length;
                if (first < 0xD800 || first > 0xDBFF || isEnd) return first;
                var second = thisStr.charCodeAt(position + 1);
                if (second < 0xDC00 || second > 0xDFFF) return first;
                return (first - 0xD800) * 1024 + (second - 0xDC00) + 0x10000;
            }
        }
    };
    if (String.prototype.includes && 'a'.includes('a', Infinity) !== false) overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
    if (String.prototype.startsWith && String.prototype.endsWith) {
        var startsWithRejectsRegex = throwsError(function() {
            /* throws if spec-compliant */ return '/a/'.startsWith(/a/);
        });
        var startsWithHandlesInfinity = valueOrFalseIfThrows(function() {
            return 'abc'.startsWith('a', Infinity) === false;
        });
        if (!startsWithRejectsRegex || !startsWithHandlesInfinity) {
            // Firefox (< 37?) and IE 11 TP have a noncompliant startsWith implementation
            overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
            overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
        }
    }
    if (hasSymbols) {
        var startsWithSupportsSymbolMatch = valueOrFalseIfThrows(function() {
            var re = /a/;
            re[Symbol.match] = false;
            return '/a/'.startsWith(re);
        });
        if (!startsWithSupportsSymbolMatch) overrideNative(String.prototype, 'startsWith', StringPrototypeShims.startsWith);
        var endsWithSupportsSymbolMatch = valueOrFalseIfThrows(function() {
            var re = /a/;
            re[Symbol.match] = false;
            return '/a/'.endsWith(re);
        });
        if (!endsWithSupportsSymbolMatch) overrideNative(String.prototype, 'endsWith', StringPrototypeShims.endsWith);
        var includesSupportsSymbolMatch = valueOrFalseIfThrows(function() {
            var re = /a/;
            re[Symbol.match] = false;
            return '/a/'.includes(re);
        });
        if (!includesSupportsSymbolMatch) overrideNative(String.prototype, 'includes', StringPrototypeShims.includes);
    }
    defineProperties(String.prototype, StringPrototypeShims);
    // whitespace from: http://es5.github.io/#x15.5.4.20
    // implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
    var ws = [
        '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
        '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
        '\u2029\uFEFF'
    ].join('');
    var trimRegexp = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
    var trimShim = function trim() {
        return ES.ToString(ES.RequireObjectCoercible(this)).replace(trimRegexp, '');
    };
    var nonWS = [
        '\u0085',
        '\u200b',
        '\ufffe'
    ].join('');
    var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
    var isBadHexRegex = /^[-+]0x[0-9a-f]+$/i;
    var hasStringTrimBug = nonWS.trim().length !== nonWS.length;
    defineProperty(String.prototype, 'trim', trimShim, hasStringTrimBug);
    // Given an argument x, it will return an IteratorResult object,
    // with value set to x and done to false.
    // Given no arguments, it will return an iterator completion object.
    var iteratorResult = function(x) {
        return {
            value: x,
            done: arguments.length === 0
        };
    };
    // see http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype-@@iterator
    var StringIterator = function(s) {
        ES.RequireObjectCoercible(s);
        this._s = ES.ToString(s);
        this._i = 0;
    };
    StringIterator.prototype.next = function() {
        var s = this._s;
        var i = this._i;
        if (typeof s === 'undefined' || i >= s.length) {
            this._s = void 0;
            return iteratorResult();
        }
        var first = s.charCodeAt(i);
        var second, len;
        if (first < 0xD800 || first > 0xDBFF || i + 1 === s.length) len = 1;
        else {
            second = s.charCodeAt(i + 1);
            len = second < 0xDC00 || second > 0xDFFF ? 1 : 2;
        }
        this._i = i + len;
        return iteratorResult(s.substr(i, len));
    };
    addIterator(StringIterator.prototype);
    addIterator(String.prototype, function() {
        return new StringIterator(this);
    });
    var ArrayShims = {
        from: function from(items) {
            var C = this;
            var mapFn;
            if (arguments.length > 1) mapFn = arguments[1];
            var mapping, T;
            if (typeof mapFn === 'undefined') mapping = false;
            else {
                if (!ES.IsCallable(mapFn)) throw new TypeError('Array.from: when provided, the second argument must be a function');
                if (arguments.length > 2) T = arguments[2];
                mapping = true;
            }
            // Note that that Arrays will use ArrayIterator:
            // https://bugs.ecmascript.org/show_bug.cgi?id=2416
            var usingIterator = typeof (isArguments(items) || ES.GetMethod(items, $iterator$)) !== 'undefined';
            var length, result, i;
            if (usingIterator) {
                result = ES.IsConstructor(C) ? Object(new C()) : [];
                var iterator = ES.GetIterator(items);
                var next, nextValue;
                i = 0;
                while(true){
                    next = ES.IteratorStep(iterator);
                    if (next === false) break;
                    nextValue = next.value;
                    try {
                        if (mapping) nextValue = typeof T === 'undefined' ? mapFn(nextValue, i) : _call(mapFn, T, nextValue, i);
                        result[i] = nextValue;
                    } catch (e) {
                        ES.IteratorClose(iterator, true);
                        throw e;
                    }
                    i += 1;
                }
                length = i;
            } else {
                var arrayLike = ES.ToObject(items);
                length = ES.ToLength(arrayLike.length);
                result = ES.IsConstructor(C) ? Object(new C(length)) : new Array(length);
                var value;
                for(i = 0; i < length; ++i){
                    value = arrayLike[i];
                    if (mapping) value = typeof T === 'undefined' ? mapFn(value, i) : _call(mapFn, T, value, i);
                    createDataPropertyOrThrow(result, i, value);
                }
            }
            result.length = length;
            return result;
        },
        of: function of() {
            var len = arguments.length;
            var C = this;
            var A = isArray(C) || !ES.IsCallable(C) ? new Array(len) : ES.Construct(C, [
                len
            ]);
            for(var k = 0; k < len; ++k)createDataPropertyOrThrow(A, k, arguments[k]);
            A.length = len;
            return A;
        }
    };
    defineProperties(Array, ArrayShims);
    addDefaultSpecies(Array);
    // Our ArrayIterator is private; see
    // https://github.com/paulmillr/es6-shim/issues/252
    ArrayIterator = function(array, kind) {
        this.i = 0;
        this.array = array;
        this.kind = kind;
    };
    defineProperties(ArrayIterator.prototype, {
        next: function() {
            var i = this.i;
            var array = this.array;
            if (!(this instanceof ArrayIterator)) throw new TypeError('Not an ArrayIterator');
            if (typeof array !== 'undefined') {
                var len = ES.ToLength(array.length);
                if (i < len) {
                    //for (; i < len; i++) {
                    var kind = this.kind;
                    var retval;
                    if (kind === 'key') retval = i;
                    else if (kind === 'value') retval = array[i];
                    else if (kind === 'entry') retval = [
                        i,
                        array[i]
                    ];
                    this.i = i + 1;
                    return iteratorResult(retval);
                }
            }
            this.array = void 0;
            return iteratorResult();
        }
    });
    addIterator(ArrayIterator.prototype);
    /*
  var orderKeys = function orderKeys(a, b) {
    var aNumeric = String(ES.ToInteger(a)) === a;
    var bNumeric = String(ES.ToInteger(b)) === b;
    if (aNumeric && bNumeric) {
      return b - a;
    } else if (aNumeric && !bNumeric) {
      return -1;
    } else if (!aNumeric && bNumeric) {
      return 1;
    } else {
      return a.localeCompare(b);
    }
  };

  var getAllKeys = function getAllKeys(object) {
    var ownKeys = [];
    var keys = [];

    for (var key in object) {
      _push(_hasOwnProperty(object, key) ? ownKeys : keys, key);
    }
    _sort(ownKeys, orderKeys);
    _sort(keys, orderKeys);

    return _concat(ownKeys, keys);
  };
  */ // note: this is positioned here because it depends on ArrayIterator
    var arrayOfSupportsSubclassing = Array.of === ArrayShims.of || function() {
        // Detects a bug in Webkit nightly r181886
        var Foo = function Foo(len) {
            this.length = len;
        };
        Foo.prototype = [];
        var fooArr = Array.of.apply(Foo, [
            1,
            2
        ]);
        return fooArr instanceof Foo && fooArr.length === 2;
    }();
    if (!arrayOfSupportsSubclassing) overrideNative(Array, 'of', ArrayShims.of);
    var ArrayPrototypeShims = {
        copyWithin: function copyWithin(target, start) {
            var o = ES.ToObject(this);
            var len = ES.ToLength(o.length);
            var relativeTarget = ES.ToInteger(target);
            var relativeStart = ES.ToInteger(start);
            var to = relativeTarget < 0 ? _max(len + relativeTarget, 0) : _min(relativeTarget, len);
            var from = relativeStart < 0 ? _max(len + relativeStart, 0) : _min(relativeStart, len);
            var end;
            if (arguments.length > 2) end = arguments[2];
            var relativeEnd = typeof end === 'undefined' ? len : ES.ToInteger(end);
            var finalItem = relativeEnd < 0 ? _max(len + relativeEnd, 0) : _min(relativeEnd, len);
            var count = _min(finalItem - from, len - to);
            var direction = 1;
            if (from < to && to < from + count) {
                direction = -1;
                from += count - 1;
                to += count - 1;
            }
            while(count > 0){
                if (from in o) o[to] = o[from];
                else delete o[to];
                from += direction;
                to += direction;
                count -= 1;
            }
            return o;
        },
        fill: function fill(value) {
            var start;
            if (arguments.length > 1) start = arguments[1];
            var end;
            if (arguments.length > 2) end = arguments[2];
            var O = ES.ToObject(this);
            var len = ES.ToLength(O.length);
            start = ES.ToInteger(typeof start === 'undefined' ? 0 : start);
            end = ES.ToInteger(typeof end === 'undefined' ? len : end);
            var relativeStart = start < 0 ? _max(len + start, 0) : _min(start, len);
            var relativeEnd = end < 0 ? len + end : end;
            for(var i = relativeStart; i < len && i < relativeEnd; ++i)O[i] = value;
            return O;
        },
        find: function find(predicate) {
            var list = ES.ToObject(this);
            var length = ES.ToLength(list.length);
            if (!ES.IsCallable(predicate)) throw new TypeError('Array#find: predicate must be a function');
            var thisArg = arguments.length > 1 ? arguments[1] : null;
            for(var i = 0, value; i < length; i++){
                value = list[i];
                if (thisArg) {
                    if (_call(predicate, thisArg, value, i, list)) return value;
                } else if (predicate(value, i, list)) return value;
            }
        },
        findIndex: function findIndex(predicate) {
            var list = ES.ToObject(this);
            var length = ES.ToLength(list.length);
            if (!ES.IsCallable(predicate)) throw new TypeError('Array#findIndex: predicate must be a function');
            var thisArg = arguments.length > 1 ? arguments[1] : null;
            for(var i = 0; i < length; i++){
                if (thisArg) {
                    if (_call(predicate, thisArg, list[i], i, list)) return i;
                } else if (predicate(list[i], i, list)) return i;
            }
            return -1;
        },
        keys: function keys() {
            return new ArrayIterator(this, 'key');
        },
        values: function values() {
            return new ArrayIterator(this, 'value');
        },
        entries: function entries() {
            return new ArrayIterator(this, 'entry');
        }
    };
    // Safari 7.1 defines Array#keys and Array#entries natively,
    // but the resulting ArrayIterator objects don't have a "next" method.
    if (Array.prototype.keys && !ES.IsCallable([
        1
    ].keys().next)) delete Array.prototype.keys;
    if (Array.prototype.entries && !ES.IsCallable([
        1
    ].entries().next)) delete Array.prototype.entries;
    // Chrome 38 defines Array#keys and Array#entries, and Array#@@iterator, but not Array#values
    if (Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[$iterator$]) {
        defineProperties(Array.prototype, {
            values: Array.prototype[$iterator$]
        });
        if (Type.symbol(Symbol.unscopables)) Array.prototype[Symbol.unscopables].values = true;
    }
    // Chrome 40 defines Array#values with the incorrect name, although Array#{keys,entries} have the correct name
    if (functionsHaveNames && Array.prototype.values && Array.prototype.values.name !== 'values') {
        var originalArrayPrototypeValues = Array.prototype.values;
        overrideNative(Array.prototype, 'values', function values() {
            return ES.Call(originalArrayPrototypeValues, this, arguments);
        });
        defineProperty(Array.prototype, $iterator$, Array.prototype.values, true);
    }
    defineProperties(Array.prototype, ArrayPrototypeShims);
    if (1 / [
        true
    ].indexOf(true, -0) < 0) // indexOf when given a position arg of -0 should return +0.
    // https://github.com/tc39/ecma262/pull/316
    defineProperty(Array.prototype, 'indexOf', function indexOf(searchElement) {
        var value = _arrayIndexOfApply(this, arguments);
        if (value === 0 && 1 / value < 0) return 0;
        return value;
    }, true);
    addIterator(Array.prototype, function() {
        return this.values();
    });
    // Chrome defines keys/values/entries on Array, but doesn't give us
    // any way to identify its iterator.  So add our own shimmed field.
    if (Object.getPrototypeOf) addIterator(Object.getPrototypeOf([].values()));
    // note: this is positioned here because it relies on Array#entries
    var arrayFromSwallowsNegativeLengths = function() {
        // Detects a Firefox bug in v32
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1063993
        return valueOrFalseIfThrows(function() {
            return Array.from({
                length: -1
            }).length === 0;
        });
    }();
    var arrayFromHandlesIterables = function() {
        // Detects a bug in Webkit nightly r181886
        var arr = Array.from([
            0
        ].entries());
        return arr.length === 1 && isArray(arr[0]) && arr[0][0] === 0 && arr[0][1] === 0;
    }();
    if (!arrayFromSwallowsNegativeLengths || !arrayFromHandlesIterables) overrideNative(Array, 'from', ArrayShims.from);
    var arrayFromHandlesUndefinedMapFunction = function() {
        // Microsoft Edge v0.11 throws if the mapFn argument is *provided* but undefined,
        // but the spec doesn't care if it's provided or not - undefined doesn't throw.
        return valueOrFalseIfThrows(function() {
            return Array.from([
                0
            ], void 0);
        });
    }();
    if (!arrayFromHandlesUndefinedMapFunction) {
        var origArrayFrom = Array.from;
        overrideNative(Array, 'from', function from(items) {
            if (arguments.length > 1 && typeof arguments[1] !== 'undefined') return ES.Call(origArrayFrom, this, arguments);
            else return _call(origArrayFrom, this, items);
        });
    }
    var int32sAsOne = -(Math.pow(2, 32) - 1);
    var toLengthsCorrectly = function(method, reversed) {
        var obj = {
            length: int32sAsOne
        };
        obj[reversed ? (obj.length >>> 0) - 1 : 0] = true;
        return valueOrFalseIfThrows(function() {
            _call(method, obj, function() {
                // note: in nonconforming browsers, this will be called
                // -1 >>> 0 times, which is 4294967295, so the throw matters.
                throw new RangeError('should not reach here');
            }, []);
            return true;
        });
    };
    if (!toLengthsCorrectly(Array.prototype.forEach)) {
        var originalForEach = Array.prototype.forEach;
        overrideNative(Array.prototype, 'forEach', function forEach(callbackFn) {
            return ES.Call(originalForEach, this.length >= 0 ? this : [], arguments);
        });
    }
    if (!toLengthsCorrectly(Array.prototype.map)) {
        var originalMap = Array.prototype.map;
        overrideNative(Array.prototype, 'map', function map(callbackFn) {
            return ES.Call(originalMap, this.length >= 0 ? this : [], arguments);
        });
    }
    if (!toLengthsCorrectly(Array.prototype.filter)) {
        var originalFilter = Array.prototype.filter;
        overrideNative(Array.prototype, 'filter', function filter(callbackFn) {
            return ES.Call(originalFilter, this.length >= 0 ? this : [], arguments);
        });
    }
    if (!toLengthsCorrectly(Array.prototype.some)) {
        var originalSome = Array.prototype.some;
        overrideNative(Array.prototype, 'some', function some(callbackFn) {
            return ES.Call(originalSome, this.length >= 0 ? this : [], arguments);
        });
    }
    if (!toLengthsCorrectly(Array.prototype.every)) {
        var originalEvery = Array.prototype.every;
        overrideNative(Array.prototype, 'every', function every(callbackFn) {
            return ES.Call(originalEvery, this.length >= 0 ? this : [], arguments);
        });
    }
    if (!toLengthsCorrectly(Array.prototype.reduce)) {
        var originalReduce = Array.prototype.reduce;
        overrideNative(Array.prototype, 'reduce', function reduce(callbackFn) {
            return ES.Call(originalReduce, this.length >= 0 ? this : [], arguments);
        });
    }
    if (!toLengthsCorrectly(Array.prototype.reduceRight, true)) {
        var originalReduceRight = Array.prototype.reduceRight;
        overrideNative(Array.prototype, 'reduceRight', function reduceRight(callbackFn) {
            return ES.Call(originalReduceRight, this.length >= 0 ? this : [], arguments);
        });
    }
    var lacksOctalSupport = Number('0o10') !== 8;
    var lacksBinarySupport = Number('0b10') !== 2;
    var trimsNonWhitespace = _some(nonWS, function(c) {
        return Number(c + 0 + c) === 0;
    });
    if (lacksOctalSupport || lacksBinarySupport || trimsNonWhitespace) {
        var OrigNumber = Number;
        var binaryRegex = /^0b[01]+$/i;
        var octalRegex = /^0o[0-7]+$/i;
        // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is an own property of regexes. wtf.
        var isBinary = binaryRegex.test.bind(binaryRegex);
        var isOctal = octalRegex.test.bind(octalRegex);
        var toPrimitive = function(O, hint) {
            var result;
            if (typeof O.valueOf === 'function') {
                result = O.valueOf();
                if (Type.primitive(result)) return result;
            }
            if (typeof O.toString === 'function') {
                result = O.toString();
                if (Type.primitive(result)) return result;
            }
            throw new TypeError('No default value');
        };
        var hasNonWS = nonWSregex.test.bind(nonWSregex);
        var isBadHex = isBadHexRegex.test.bind(isBadHexRegex);
        var NumberShim = function() {
            // this is wrapped in an IIFE because of IE 6-8's wacky scoping issues with named function expressions.
            var NumberShim = function Number1(value) {
                var primValue;
                if (arguments.length > 0) primValue = Type.primitive(value) ? value : toPrimitive(value, 'number');
                else primValue = 0;
                if (typeof primValue === 'string') {
                    primValue = ES.Call(trimShim, primValue);
                    if (isBinary(primValue)) primValue = parseInt(_strSlice(primValue, 2), 2);
                    else if (isOctal(primValue)) primValue = parseInt(_strSlice(primValue, 2), 8);
                    else if (hasNonWS(primValue) || isBadHex(primValue)) primValue = NaN;
                }
                var receiver = this;
                var valueOfSucceeds = valueOrFalseIfThrows(function() {
                    OrigNumber.prototype.valueOf.call(receiver);
                    return true;
                });
                if (receiver instanceof NumberShim && !valueOfSucceeds) return new OrigNumber(primValue);
                return OrigNumber(primValue);
            };
            return NumberShim;
        }();
        wrapConstructor(OrigNumber, NumberShim, {});
        // this is necessary for ES3 browsers, where these properties are non-enumerable.
        defineProperties(NumberShim, {
            NaN: OrigNumber.NaN,
            MAX_VALUE: OrigNumber.MAX_VALUE,
            MIN_VALUE: OrigNumber.MIN_VALUE,
            NEGATIVE_INFINITY: OrigNumber.NEGATIVE_INFINITY,
            POSITIVE_INFINITY: OrigNumber.POSITIVE_INFINITY
        });
        /* eslint-disable no-undef, no-global-assign */ Number = NumberShim;
        Value.redefine(globals, 'Number', NumberShim);
    /* eslint-enable no-undef, no-global-assign */ }
    var maxSafeInteger = Math.pow(2, 53) - 1;
    defineProperties(Number, {
        MAX_SAFE_INTEGER: maxSafeInteger,
        MIN_SAFE_INTEGER: -maxSafeInteger,
        EPSILON: 2.220446049250313e-16,
        parseInt: globals.parseInt,
        parseFloat: globals.parseFloat,
        isFinite: numberIsFinite,
        isInteger: function isInteger(value) {
            return numberIsFinite(value) && ES.ToInteger(value) === value;
        },
        isSafeInteger: function isSafeInteger(value) {
            return Number.isInteger(value) && _abs(value) <= Number.MAX_SAFE_INTEGER;
        },
        isNaN: numberIsNaN
    });
    // Firefox 37 has a conforming Number.parseInt, but it's not === to the global parseInt (fixed in v40)
    defineProperty(Number, 'parseInt', globals.parseInt, Number.parseInt !== globals.parseInt);
    // Work around bugs in Array#find and Array#findIndex -- early
    // implementations skipped holes in sparse arrays. (Note that the
    // implementations of find/findIndex indirectly use shimmed
    // methods of Number, so this test has to happen down here.)
    /* eslint-disable no-sparse-arrays */ if ([
        ,
        1
    ].find(function() {
        return true;
    }) === 1) overrideNative(Array.prototype, 'find', ArrayPrototypeShims.find);
    if ([
        ,
        1
    ].findIndex(function() {
        return true;
    }) !== 0) overrideNative(Array.prototype, 'findIndex', ArrayPrototypeShims.findIndex);
    /* eslint-enable no-sparse-arrays */ var isEnumerableOn = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable);
    var ensureEnumerable = function ensureEnumerable(obj, prop) {
        if (supportsDescriptors && isEnumerableOn(obj, prop)) Object.defineProperty(obj, prop, {
            enumerable: false
        });
    };
    var sliceArgs = function sliceArgs() {
        // per https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        // and https://gist.github.com/WebReflection/4327762cb87a8c634a29
        var initial = Number(this);
        var len = arguments.length;
        var desiredArgCount = len - initial;
        var args = new Array(desiredArgCount < 0 ? 0 : desiredArgCount);
        for(var i = initial; i < len; ++i)args[i - initial] = arguments[i];
        return args;
    };
    var assignTo = function assignTo(source) {
        return function assignToSource(target, key) {
            target[key] = source[key];
            return target;
        };
    };
    var assignReducer = function(target, source) {
        var sourceKeys = keys(Object(source));
        var symbols;
        if (ES.IsCallable(Object.getOwnPropertySymbols)) symbols = _filter(Object.getOwnPropertySymbols(Object(source)), isEnumerableOn(source));
        return _reduce(_concat(sourceKeys, symbols || []), assignTo(source), target);
    };
    var ObjectShims = {
        // 19.1.3.1
        assign: function(target, source) {
            var to = ES.ToObject(target, 'Cannot convert undefined or null to object');
            return _reduce(ES.Call(sliceArgs, 1, arguments), assignReducer, to);
        },
        // Added in WebKit in https://bugs.webkit.org/show_bug.cgi?id=143865
        is: function is(a, b) {
            return ES.SameValue(a, b);
        }
    };
    var assignHasPendingExceptions = Object.assign && Object.preventExtensions && function() {
        // Firefox 37 still has "pending exception" logic in its Object.assign implementation,
        // which is 72% slower than our shim, and Firefox 40's native implementation.
        var thrower = Object.preventExtensions({
            1: 2
        });
        try {
            Object.assign(thrower, 'xy');
        } catch (e) {
            return thrower[1] === 'y';
        }
    }();
    if (assignHasPendingExceptions) overrideNative(Object, 'assign', ObjectShims.assign);
    defineProperties(Object, ObjectShims);
    if (supportsDescriptors) {
        var ES5ObjectShims = {
            // 19.1.3.9
            // shim from https://gist.github.com/WebReflection/5593554
            setPrototypeOf: function(Object1, magic) {
                var set;
                var checkArgs = function(O, proto) {
                    if (!ES.TypeIsObject(O)) throw new TypeError('cannot set prototype on a non-object');
                    if (!(proto === null || ES.TypeIsObject(proto))) throw new TypeError('can only set prototype to an object or null' + proto);
                };
                var setPrototypeOf = function(O, proto) {
                    checkArgs(O, proto);
                    _call(set, O, proto);
                    return O;
                };
                try {
                    // this works already in Firefox and Safari
                    set = Object1.getOwnPropertyDescriptor(Object1.prototype, magic).set;
                    _call(set, {}, null);
                } catch (e) {
                    if (Object1.prototype !== ({})[magic]) // IE < 11 cannot be shimmed
                    return;
                    // probably Chrome or some old Mobile stock browser
                    set = function(proto) {
                        this[magic] = proto;
                    };
                    // please note that this will **not** work
                    // in those browsers that do not inherit
                    // __proto__ by mistake from Object.prototype
                    // in these cases we should probably throw an error
                    // or at least be informed about the issue
                    setPrototypeOf.polyfill = setPrototypeOf(setPrototypeOf({}, null), Object1.prototype) instanceof Object1;
                // setPrototypeOf.polyfill === true means it works as meant
                // setPrototypeOf.polyfill === false means it's not 100% reliable
                // setPrototypeOf.polyfill === undefined
                // or
                // setPrototypeOf.polyfill ==  null means it's not a polyfill
                // which means it works as expected
                // we can even delete Object.prototype.__proto__;
                }
                return setPrototypeOf;
            }(Object, '__proto__')
        };
        defineProperties(Object, ES5ObjectShims);
    }
    // Workaround bug in Opera 12 where setPrototypeOf(x, null) doesn't work,
    // but Object.create(null) does.
    if (Object.setPrototypeOf && Object.getPrototypeOf && Object.getPrototypeOf(Object.setPrototypeOf({}, null)) !== null && Object.getPrototypeOf(Object.create(null)) === null) (function() {
        var FAKENULL = Object.create(null);
        var gpo = Object.getPrototypeOf;
        var spo = Object.setPrototypeOf;
        Object.getPrototypeOf = function(o) {
            var result = gpo(o);
            return result === FAKENULL ? null : result;
        };
        Object.setPrototypeOf = function(o, p) {
            var proto = p === null ? FAKENULL : p;
            return spo(o, proto);
        };
        Object.setPrototypeOf.polyfill = false;
    })();
    var objectKeysAcceptsPrimitives = !throwsError(function() {
        return Object.keys('foo');
    });
    if (!objectKeysAcceptsPrimitives) {
        var originalObjectKeys = Object.keys;
        overrideNative(Object, 'keys', function keys(value) {
            return originalObjectKeys(ES.ToObject(value));
        });
        keys = Object.keys;
    }
    var objectKeysRejectsRegex = throwsError(function() {
        return Object.keys(/a/g);
    });
    if (objectKeysRejectsRegex) {
        var regexRejectingObjectKeys = Object.keys;
        overrideNative(Object, 'keys', function keys(value) {
            if (Type.regex(value)) {
                var regexKeys = [];
                for(var k in value)if (_hasOwnProperty(value, k)) _push(regexKeys, k);
                return regexKeys;
            }
            return regexRejectingObjectKeys(value);
        });
        keys = Object.keys;
    }
    if (Object.getOwnPropertyNames) {
        var objectGOPNAcceptsPrimitives = !throwsError(function() {
            return Object.getOwnPropertyNames('foo');
        });
        if (!objectGOPNAcceptsPrimitives) {
            var cachedWindowNames = typeof window === 'object' ? Object.getOwnPropertyNames(window) : [];
            var originalObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
            overrideNative(Object, 'getOwnPropertyNames', function getOwnPropertyNames(value) {
                var val = ES.ToObject(value);
                if (_toString(val) === '[object Window]') try {
                    return originalObjectGetOwnPropertyNames(val);
                } catch (e) {
                    // IE bug where layout engine calls userland gOPN for cross-domain `window` objects
                    return _concat([], cachedWindowNames);
                }
                return originalObjectGetOwnPropertyNames(val);
            });
        }
    }
    if (Object.getOwnPropertyDescriptor) {
        var objectGOPDAcceptsPrimitives = !throwsError(function() {
            return Object.getOwnPropertyDescriptor('foo', 'bar');
        });
        if (!objectGOPDAcceptsPrimitives) {
            var originalObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
            overrideNative(Object, 'getOwnPropertyDescriptor', function getOwnPropertyDescriptor(value, property) {
                return originalObjectGetOwnPropertyDescriptor(ES.ToObject(value), property);
            });
        }
    }
    if (Object.seal) {
        var objectSealAcceptsPrimitives = !throwsError(function() {
            return Object.seal('foo');
        });
        if (!objectSealAcceptsPrimitives) {
            var originalObjectSeal = Object.seal;
            overrideNative(Object, 'seal', function seal(value) {
                if (!ES.TypeIsObject(value)) return value;
                return originalObjectSeal(value);
            });
        }
    }
    if (Object.isSealed) {
        var objectIsSealedAcceptsPrimitives = !throwsError(function() {
            return Object.isSealed('foo');
        });
        if (!objectIsSealedAcceptsPrimitives) {
            var originalObjectIsSealed = Object.isSealed;
            overrideNative(Object, 'isSealed', function isSealed(value) {
                if (!ES.TypeIsObject(value)) return true;
                return originalObjectIsSealed(value);
            });
        }
    }
    if (Object.freeze) {
        var objectFreezeAcceptsPrimitives = !throwsError(function() {
            return Object.freeze('foo');
        });
        if (!objectFreezeAcceptsPrimitives) {
            var originalObjectFreeze = Object.freeze;
            overrideNative(Object, 'freeze', function freeze(value) {
                if (!ES.TypeIsObject(value)) return value;
                return originalObjectFreeze(value);
            });
        }
    }
    if (Object.isFrozen) {
        var objectIsFrozenAcceptsPrimitives = !throwsError(function() {
            return Object.isFrozen('foo');
        });
        if (!objectIsFrozenAcceptsPrimitives) {
            var originalObjectIsFrozen = Object.isFrozen;
            overrideNative(Object, 'isFrozen', function isFrozen(value) {
                if (!ES.TypeIsObject(value)) return true;
                return originalObjectIsFrozen(value);
            });
        }
    }
    if (Object.preventExtensions) {
        var objectPreventExtensionsAcceptsPrimitives = !throwsError(function() {
            return Object.preventExtensions('foo');
        });
        if (!objectPreventExtensionsAcceptsPrimitives) {
            var originalObjectPreventExtensions = Object.preventExtensions;
            overrideNative(Object, 'preventExtensions', function preventExtensions(value) {
                if (!ES.TypeIsObject(value)) return value;
                return originalObjectPreventExtensions(value);
            });
        }
    }
    if (Object.isExtensible) {
        var objectIsExtensibleAcceptsPrimitives = !throwsError(function() {
            return Object.isExtensible('foo');
        });
        if (!objectIsExtensibleAcceptsPrimitives) {
            var originalObjectIsExtensible = Object.isExtensible;
            overrideNative(Object, 'isExtensible', function isExtensible(value) {
                if (!ES.TypeIsObject(value)) return false;
                return originalObjectIsExtensible(value);
            });
        }
    }
    if (Object.getPrototypeOf) {
        var objectGetProtoAcceptsPrimitives = !throwsError(function() {
            return Object.getPrototypeOf('foo');
        });
        if (!objectGetProtoAcceptsPrimitives) {
            var originalGetProto = Object.getPrototypeOf;
            overrideNative(Object, 'getPrototypeOf', function getPrototypeOf(value) {
                return originalGetProto(ES.ToObject(value));
            });
        }
    }
    var hasFlags = supportsDescriptors && function() {
        var desc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags');
        return desc && ES.IsCallable(desc.get);
    }();
    if (supportsDescriptors && !hasFlags) {
        var regExpFlagsGetter = function flags() {
            if (!ES.TypeIsObject(this)) throw new TypeError('Method called on incompatible type: must be an object.');
            var result = '';
            if (this.global) result += 'g';
            if (this.ignoreCase) result += 'i';
            if (this.multiline) result += 'm';
            if (this.unicode) result += 'u';
            if (this.sticky) result += 'y';
            return result;
        };
        Value.getter(RegExp.prototype, 'flags', regExpFlagsGetter);
    }
    var regExpSupportsFlagsWithRegex = supportsDescriptors && valueOrFalseIfThrows(function() {
        return String(new RegExp(/a/g, 'i')) === '/a/i';
    });
    var regExpNeedsToSupportSymbolMatch = hasSymbols && supportsDescriptors && function() {
        // Edge 0.12 supports flags fully, but does not support Symbol.match
        var regex = /./;
        regex[Symbol.match] = false;
        return RegExp(regex) === regex;
    }();
    var regexToStringIsGeneric = valueOrFalseIfThrows(function() {
        return RegExp.prototype.toString.call({
            source: 'abc'
        }) === '/abc/';
    });
    var regexToStringSupportsGenericFlags = regexToStringIsGeneric && valueOrFalseIfThrows(function() {
        return RegExp.prototype.toString.call({
            source: 'a',
            flags: 'b'
        }) === '/a/b';
    });
    if (!regexToStringIsGeneric || !regexToStringSupportsGenericFlags) {
        var origRegExpToString = RegExp.prototype.toString;
        defineProperty(RegExp.prototype, 'toString', function toString() {
            var R = ES.RequireObjectCoercible(this);
            if (Type.regex(R)) return _call(origRegExpToString, R);
            var pattern = $String(R.source);
            var flags = $String(R.flags);
            return '/' + pattern + '/' + flags;
        }, true);
        Value.preserveToString(RegExp.prototype.toString, origRegExpToString);
    }
    if (supportsDescriptors && (!regExpSupportsFlagsWithRegex || regExpNeedsToSupportSymbolMatch)) {
        var flagsGetter = Object.getOwnPropertyDescriptor(RegExp.prototype, 'flags').get;
        var sourceDesc = Object.getOwnPropertyDescriptor(RegExp.prototype, 'source') || {};
        var legacySourceGetter = function() {
            // prior to it being a getter, it's own + nonconfigurable
            return this.source;
        };
        var sourceGetter = ES.IsCallable(sourceDesc.get) ? sourceDesc.get : legacySourceGetter;
        var OrigRegExp = RegExp;
        var RegExpShim = function() {
            return function RegExp1(pattern, flags) {
                var patternIsRegExp = ES.IsRegExp(pattern);
                var calledWithNew = this instanceof RegExp1;
                if (!calledWithNew && patternIsRegExp && typeof flags === 'undefined' && pattern.constructor === RegExp1) return pattern;
                var P = pattern;
                var F = flags;
                if (Type.regex(pattern)) {
                    P = ES.Call(sourceGetter, pattern);
                    F = typeof flags === 'undefined' ? ES.Call(flagsGetter, pattern) : flags;
                    return new RegExp1(P, F);
                } else if (patternIsRegExp) {
                    P = pattern.source;
                    F = typeof flags === 'undefined' ? pattern.flags : flags;
                }
                return new OrigRegExp(pattern, flags);
            };
        }();
        wrapConstructor(OrigRegExp, RegExpShim, {
            $input: true // Chrome < v39 & Opera < 26 have a nonstandard "$input" property
        });
        /* eslint-disable no-undef, no-global-assign */ RegExp = RegExpShim;
        Value.redefine(globals, 'RegExp', RegExpShim);
    /* eslint-enable no-undef, no-global-assign */ }
    if (supportsDescriptors) {
        var regexGlobals = {
            input: '$_',
            lastMatch: '$&',
            lastParen: '$+',
            leftContext: '$`',
            rightContext: '$\''
        };
        _forEach(keys(regexGlobals), function(prop) {
            if (prop in RegExp && !(regexGlobals[prop] in RegExp)) Value.getter(RegExp, regexGlobals[prop], function get() {
                return RegExp[prop];
            });
        });
    }
    addDefaultSpecies(RegExp);
    var inverseEpsilon = 1 / Number.EPSILON;
    var roundTiesToEven = function roundTiesToEven(n) {
        // Even though this reduces down to `return n`, it takes advantage of built-in rounding.
        return n + inverseEpsilon - inverseEpsilon;
    };
    var BINARY_32_EPSILON = Math.pow(2, -23);
    var BINARY_32_MAX_VALUE = Math.pow(2, 127) * (2 - BINARY_32_EPSILON);
    var BINARY_32_MIN_VALUE = Math.pow(2, -126);
    var E = Math.E;
    var LOG2E = Math.LOG2E;
    var LOG10E = Math.LOG10E;
    var numberCLZ = Number.prototype.clz;
    delete Number.prototype.clz; // Safari 8 has Number#clz
    var MathShims = {
        acosh: function acosh(value) {
            var x = Number(value);
            if (numberIsNaN(x) || value < 1) return NaN;
            if (x === 1) return 0;
            if (x === Infinity) return x;
            var xInvSquared = 1 / (x * x);
            if (x < 2) return _log1p(x - 1 + _sqrt(1 - xInvSquared) * x);
            var halfX = x / 2;
            return _log1p(halfX + _sqrt(1 - xInvSquared) * halfX - 1) + 1 / LOG2E;
        },
        asinh: function asinh(value) {
            var x = Number(value);
            if (x === 0 || !globalIsFinite(x)) return x;
            var a = _abs(x);
            var aSquared = a * a;
            var s = _sign(x);
            if (a < 1) return s * _log1p(a + aSquared / (_sqrt(aSquared + 1) + 1));
            return s * (_log1p(a / 2 + _sqrt(1 + 1 / aSquared) * a / 2 - 1) + 1 / LOG2E);
        },
        atanh: function atanh(value) {
            var x = Number(value);
            if (x === 0) return x;
            if (x === -1) return -Infinity;
            if (x === 1) return Infinity;
            if (numberIsNaN(x) || x < -1 || x > 1) return NaN;
            var a = _abs(x);
            return _sign(x) * _log1p(2 * a / (1 - a)) / 2;
        },
        cbrt: function cbrt(value) {
            var x = Number(value);
            if (x === 0) return x;
            var negate = x < 0;
            var result;
            if (negate) x = -x;
            if (x === Infinity) result = Infinity;
            else {
                result = _exp(_log(x) / 3);
                // from http://en.wikipedia.org/wiki/Cube_root#Numerical_methods
                result = (x / (result * result) + 2 * result) / 3;
            }
            return negate ? -result : result;
        },
        clz32: function clz32(value) {
            // See https://bugs.ecmascript.org/show_bug.cgi?id=2465
            var x = Number(value);
            var number = ES.ToUint32(x);
            if (number === 0) return 32;
            return numberCLZ ? ES.Call(numberCLZ, number) : 31 - _floor(_log(number + 0.5) * LOG2E);
        },
        cosh: function cosh(value) {
            var x = Number(value);
            if (x === 0) return 1;
             // +0 or -0
            if (numberIsNaN(x)) return NaN;
            if (!globalIsFinite(x)) return Infinity;
            var t = _exp(_abs(x) - 1);
            return (t + 1 / (t * E * E)) * (E / 2);
        },
        expm1: function expm1(value) {
            var x = Number(value);
            if (x === -Infinity) return -1;
            if (!globalIsFinite(x) || x === 0) return x;
            if (_abs(x) > 0.5) return _exp(x) - 1;
            // A more precise approximation using Taylor series expansion
            // from https://github.com/paulmillr/es6-shim/issues/314#issuecomment-70293986
            var t = x;
            var sum = 0;
            var n = 1;
            while(sum + t !== sum){
                sum += t;
                n += 1;
                t *= x / n;
            }
            return sum;
        },
        hypot: function hypot(x, y) {
            var result = 0;
            var largest = 0;
            for(var i = 0; i < arguments.length; ++i){
                var value = _abs(Number(arguments[i]));
                if (largest < value) {
                    result *= largest / value * (largest / value);
                    result += 1;
                    largest = value;
                } else result += value > 0 ? value / largest * (value / largest) : value;
            }
            return largest === Infinity ? Infinity : largest * _sqrt(result);
        },
        log2: function log2(value) {
            return _log(value) * LOG2E;
        },
        log10: function log10(value) {
            return _log(value) * LOG10E;
        },
        log1p: _log1p,
        sign: _sign,
        sinh: function sinh(value) {
            var x = Number(value);
            if (!globalIsFinite(x) || x === 0) return x;
            var a = _abs(x);
            if (a < 1) {
                var u = Math.expm1(a);
                return _sign(x) * u * (1 + 1 / (u + 1)) / 2;
            }
            var t = _exp(a - 1);
            return _sign(x) * (t - 1 / (t * E * E)) * (E / 2);
        },
        tanh: function tanh(value) {
            var x = Number(value);
            if (numberIsNaN(x) || x === 0) return x;
            // can exit early at +-20 as JS loses precision for true value at this integer
            if (x >= 20) return 1;
            if (x <= -20) return -1;
            return (Math.expm1(x) - Math.expm1(-x)) / (_exp(x) + _exp(-x));
        },
        trunc: function trunc(value) {
            var x = Number(value);
            return x < 0 ? -_floor(-x) : _floor(x);
        },
        imul: function imul(x, y) {
            // taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
            var a = ES.ToUint32(x);
            var b = ES.ToUint32(y);
            var ah = a >>> 16 & 0xffff;
            var al = a & 0xffff;
            var bh = b >>> 16 & 0xffff;
            var bl = b & 0xffff;
            // the shift by 0 fixes the sign on the high part
            // the final |0 converts the unsigned value into a signed value
            return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
        },
        fround: function fround(x) {
            var v = Number(x);
            if (v === 0 || v === Infinity || v === -Infinity || numberIsNaN(v)) return v;
            var sign = _sign(v);
            var abs = _abs(v);
            if (abs < BINARY_32_MIN_VALUE) return sign * roundTiesToEven(abs / BINARY_32_MIN_VALUE / BINARY_32_EPSILON) * BINARY_32_MIN_VALUE * BINARY_32_EPSILON;
            // Veltkamp's splitting (?)
            var a = (1 + BINARY_32_EPSILON / Number.EPSILON) * abs;
            var result = a - (a - abs);
            if (result > BINARY_32_MAX_VALUE || numberIsNaN(result)) return sign * Infinity;
            return sign * result;
        }
    };
    var withinULPDistance = function withinULPDistance(result, expected, distance) {
        return _abs(1 - result / expected) / Number.EPSILON < (distance || 8);
    };
    defineProperties(Math, MathShims);
    // Chrome < 40 sinh returns ∞ for large numbers
    defineProperty(Math, 'sinh', MathShims.sinh, Math.sinh(710) === Infinity);
    // Chrome < 40 cosh returns ∞ for large numbers
    defineProperty(Math, 'cosh', MathShims.cosh, Math.cosh(710) === Infinity);
    // IE 11 TP has an imprecise log1p: reports Math.log1p(-1e-17) as 0
    defineProperty(Math, 'log1p', MathShims.log1p, Math.log1p(-0.00000000000000001) !== -0.00000000000000001);
    // IE 11 TP has an imprecise asinh: reports Math.asinh(-1e7) as not exactly equal to -Math.asinh(1e7)
    defineProperty(Math, 'asinh', MathShims.asinh, Math.asinh(-10000000) !== -Math.asinh(1e7));
    // Chrome < 54 asinh returns ∞ for large numbers and should not
    defineProperty(Math, 'asinh', MathShims.asinh, Math.asinh(1e+300) === Infinity);
    // Chrome < 54 atanh incorrectly returns 0 for large numbers
    defineProperty(Math, 'atanh', MathShims.atanh, Math.atanh(1e-300) === 0);
    // Chrome 40 has an imprecise Math.tanh with very small numbers
    defineProperty(Math, 'tanh', MathShims.tanh, Math.tanh(-0.00000000000000002) !== -0.00000000000000002);
    // Chrome 40 loses Math.acosh precision with high numbers
    defineProperty(Math, 'acosh', MathShims.acosh, Math.acosh(Number.MAX_VALUE) === Infinity);
    // Chrome < 54 has an inaccurate acosh for EPSILON deltas
    defineProperty(Math, 'acosh', MathShims.acosh, !withinULPDistance(Math.acosh(1 + Number.EPSILON), Math.sqrt(2 * Number.EPSILON)));
    // Firefox 38 on Windows
    defineProperty(Math, 'cbrt', MathShims.cbrt, !withinULPDistance(Math.cbrt(1e-300), 1e-100));
    // node 0.11 has an imprecise Math.sinh with very small numbers
    defineProperty(Math, 'sinh', MathShims.sinh, Math.sinh(-0.00000000000000002) !== -0.00000000000000002);
    // FF 35 on Linux reports 22025.465794806725 for Math.expm1(10)
    var expm1OfTen = Math.expm1(10);
    defineProperty(Math, 'expm1', MathShims.expm1, expm1OfTen > 22025.465794806719 || expm1OfTen < 22025.4657948067165168);
    // node v12.11 - v12.15 report NaN
    defineProperty(Math, 'hypot', MathShims.hypot, Math.hypot(Infinity, NaN) !== Infinity);
    var origMathRound = Math.round;
    // breaks in e.g. Safari 8, Internet Explorer 11, Opera 12
    var roundHandlesBoundaryConditions = Math.round(0.5 - Number.EPSILON / 4) === 0 && Math.round(-0.5 + Number.EPSILON / 3.99) === 1;
    // When engines use Math.floor(x + 0.5) internally, Math.round can be buggy for large integers.
    // This behavior should be governed by "round to nearest, ties to even mode"
    // see http://www.ecma-international.org/ecma-262/6.0/#sec-terms-and-definitions-number-type
    // These are the boundary cases where it breaks.
    var smallestPositiveNumberWhereRoundBreaks = inverseEpsilon + 1;
    var largestPositiveNumberWhereRoundBreaks = 2 * inverseEpsilon - 1;
    var roundDoesNotIncreaseIntegers = [
        smallestPositiveNumberWhereRoundBreaks,
        largestPositiveNumberWhereRoundBreaks
    ].every(function(num) {
        return Math.round(num) === num;
    });
    defineProperty(Math, 'round', function round(x) {
        var floor = _floor(x);
        var ceil = floor === -1 ? -0 : floor + 1;
        return x - floor < 0.5 ? floor : ceil;
    }, !roundHandlesBoundaryConditions || !roundDoesNotIncreaseIntegers);
    Value.preserveToString(Math.round, origMathRound);
    var origImul = Math.imul;
    if (Math.imul(0xffffffff, 5) !== -5) {
        // Safari 6.1, at least, reports "0" for this value
        Math.imul = MathShims.imul;
        Value.preserveToString(Math.imul, origImul);
    }
    if (Math.imul.length !== 2) // Safari 8.0.4 has a length of 1
    // fixed in https://bugs.webkit.org/show_bug.cgi?id=143658
    overrideNative(Math, 'imul', function imul(x, y) {
        return ES.Call(origImul, Math, arguments);
    });
    // Promises
    // Simplest possible implementation; use a 3rd-party library if you
    // want the best possible speed and/or long stack traces.
    var PromiseShim = function() {
        var setTimeout = globals.setTimeout;
        // some environments don't have setTimeout - no way to shim here.
        if (typeof setTimeout !== 'function' && typeof setTimeout !== 'object') return;
        ES.IsPromise = function(promise) {
            if (!ES.TypeIsObject(promise)) return false;
            if (typeof promise._promise === 'undefined') return false; // uninitialized, or missing our hidden field.
            return true;
        };
        // "PromiseCapability" in the spec is what most promise implementations
        // call a "deferred".
        var PromiseCapability = function(C) {
            if (!ES.IsConstructor(C)) throw new TypeError('Bad promise constructor');
            var capability = this;
            var resolver = function(resolve, reject) {
                if (capability.resolve !== void 0 || capability.reject !== void 0) throw new TypeError('Bad Promise implementation!');
                capability.resolve = resolve;
                capability.reject = reject;
            };
            // Initialize fields to inform optimizers about the object shape.
            capability.resolve = void 0;
            capability.reject = void 0;
            capability.promise = new C(resolver);
            if (!(ES.IsCallable(capability.resolve) && ES.IsCallable(capability.reject))) throw new TypeError('Bad promise constructor');
        };
        // find an appropriate setImmediate-alike
        var makeZeroTimeout;
        if (typeof window !== 'undefined' && ES.IsCallable(window.postMessage)) makeZeroTimeout = function() {
            // from http://dbaron.org/log/20100309-faster-timeouts
            var timeouts = [];
            var messageName = 'zero-timeout-message';
            var setZeroTimeout = function(fn) {
                _push(timeouts, fn);
                window.postMessage(messageName, '*');
            };
            var handleMessage = function(event) {
                if (event.source === window && event.data === messageName) {
                    event.stopPropagation();
                    if (timeouts.length === 0) return;
                    var fn = _shift(timeouts);
                    fn();
                }
            };
            window.addEventListener('message', handleMessage, true);
            return setZeroTimeout;
        };
        var makePromiseAsap = function() {
            // An efficient task-scheduler based on a pre-existing Promise
            // implementation, which we can use even if we override the
            // global Promise below (in order to workaround bugs)
            // https://github.com/Raynos/observ-hash/issues/2#issuecomment-35857671
            var P = globals.Promise;
            var pr = P && P.resolve && P.resolve();
            return pr && function(task) {
                return pr.then(task);
            };
        };
        var enqueue = ES.IsCallable(globals.setImmediate) ? globals.setImmediate : makePromiseAsap() || (ES.IsCallable(makeZeroTimeout) ? makeZeroTimeout() : function(task) {
            setTimeout(task, 0);
        }); // fallback
        // Constants for Promise implementation
        var PROMISE_IDENTITY = function(x) {
            return x;
        };
        var PROMISE_THROWER = function(e) {
            throw e;
        };
        var PROMISE_PENDING = 0;
        var PROMISE_FULFILLED = 1;
        var PROMISE_REJECTED = 2;
        // We store fulfill/reject handlers and capabilities in a single array.
        var PROMISE_FULFILL_OFFSET = 0;
        var PROMISE_REJECT_OFFSET = 1;
        var PROMISE_CAPABILITY_OFFSET = 2;
        // This is used in an optimization for chaining promises via then.
        var PROMISE_FAKE_CAPABILITY = {};
        var enqueuePromiseReactionJob = function(handler, capability, argument) {
            enqueue(function() {
                promiseReactionJob(handler, capability, argument);
            });
        };
        var promiseReactionJob = function(handler, promiseCapability, argument) {
            var handlerResult, f;
            if (promiseCapability === PROMISE_FAKE_CAPABILITY) // Fast case, when we don't actually need to chain through to a
            // (real) promiseCapability.
            return handler(argument);
            try {
                handlerResult = handler(argument);
                f = promiseCapability.resolve;
            } catch (e) {
                handlerResult = e;
                f = promiseCapability.reject;
            }
            f(handlerResult);
        };
        var fulfillPromise = function(promise, value) {
            var _promise = promise._promise;
            var length = _promise.reactionLength;
            if (length > 0) {
                enqueuePromiseReactionJob(_promise.fulfillReactionHandler0, _promise.reactionCapability0, value);
                _promise.fulfillReactionHandler0 = void 0;
                _promise.rejectReactions0 = void 0;
                _promise.reactionCapability0 = void 0;
                if (length > 1) for(var i = 1, idx = 0; i < length; i++, idx += 3){
                    enqueuePromiseReactionJob(_promise[idx + PROMISE_FULFILL_OFFSET], _promise[idx + PROMISE_CAPABILITY_OFFSET], value);
                    promise[idx + PROMISE_FULFILL_OFFSET] = void 0;
                    promise[idx + PROMISE_REJECT_OFFSET] = void 0;
                    promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;
                }
            }
            _promise.result = value;
            _promise.state = PROMISE_FULFILLED;
            _promise.reactionLength = 0;
        };
        var rejectPromise = function(promise, reason) {
            var _promise = promise._promise;
            var length = _promise.reactionLength;
            if (length > 0) {
                enqueuePromiseReactionJob(_promise.rejectReactionHandler0, _promise.reactionCapability0, reason);
                _promise.fulfillReactionHandler0 = void 0;
                _promise.rejectReactions0 = void 0;
                _promise.reactionCapability0 = void 0;
                if (length > 1) for(var i = 1, idx = 0; i < length; i++, idx += 3){
                    enqueuePromiseReactionJob(_promise[idx + PROMISE_REJECT_OFFSET], _promise[idx + PROMISE_CAPABILITY_OFFSET], reason);
                    promise[idx + PROMISE_FULFILL_OFFSET] = void 0;
                    promise[idx + PROMISE_REJECT_OFFSET] = void 0;
                    promise[idx + PROMISE_CAPABILITY_OFFSET] = void 0;
                }
            }
            _promise.result = reason;
            _promise.state = PROMISE_REJECTED;
            _promise.reactionLength = 0;
        };
        var createResolvingFunctions = function(promise) {
            var alreadyResolved = false;
            var resolve = function(resolution) {
                var then;
                if (alreadyResolved) return;
                alreadyResolved = true;
                if (resolution === promise) return rejectPromise(promise, new TypeError('Self resolution'));
                if (!ES.TypeIsObject(resolution)) return fulfillPromise(promise, resolution);
                try {
                    then = resolution.then;
                } catch (e) {
                    return rejectPromise(promise, e);
                }
                if (!ES.IsCallable(then)) return fulfillPromise(promise, resolution);
                enqueue(function() {
                    promiseResolveThenableJob(promise, resolution, then);
                });
            };
            var reject = function(reason) {
                if (alreadyResolved) return;
                alreadyResolved = true;
                return rejectPromise(promise, reason);
            };
            return {
                resolve: resolve,
                reject: reject
            };
        };
        var optimizedThen = function(then, thenable, resolve, reject) {
            // Optimization: since we discard the result, we can pass our
            // own then implementation a special hint to let it know it
            // doesn't have to create it.  (The PROMISE_FAKE_CAPABILITY
            // object is local to this implementation and unforgeable outside.)
            if (then === Promise$prototype$then) _call(then, thenable, resolve, reject, PROMISE_FAKE_CAPABILITY);
            else _call(then, thenable, resolve, reject);
        };
        var promiseResolveThenableJob = function(promise, thenable, then) {
            var resolvingFunctions = createResolvingFunctions(promise);
            var resolve = resolvingFunctions.resolve;
            var reject = resolvingFunctions.reject;
            try {
                optimizedThen(then, thenable, resolve, reject);
            } catch (e) {
                reject(e);
            }
        };
        var Promise$prototype, Promise$prototype$then;
        var Promise1 = function() {
            var PromiseShim = function Promise1(resolver) {
                if (!(this instanceof PromiseShim)) throw new TypeError('Constructor Promise requires "new"');
                if (this && this._promise) throw new TypeError('Bad construction');
                // see https://bugs.ecmascript.org/show_bug.cgi?id=2482
                if (!ES.IsCallable(resolver)) throw new TypeError('not a valid resolver');
                var promise = emulateES6construct(this, PromiseShim, Promise$prototype, {
                    _promise: {
                        result: void 0,
                        state: PROMISE_PENDING,
                        // The first member of the "reactions" array is inlined here,
                        // since most promises only have one reaction.
                        // We've also exploded the 'reaction' object to inline the
                        // "handler" and "capability" fields, since both fulfill and
                        // reject reactions share the same capability.
                        reactionLength: 0,
                        fulfillReactionHandler0: void 0,
                        rejectReactionHandler0: void 0,
                        reactionCapability0: void 0
                    }
                });
                var resolvingFunctions = createResolvingFunctions(promise);
                var reject = resolvingFunctions.reject;
                try {
                    resolver(resolvingFunctions.resolve, reject);
                } catch (e) {
                    reject(e);
                }
                return promise;
            };
            return PromiseShim;
        }();
        Promise$prototype = Promise1.prototype;
        var _promiseAllResolver = function(index, values, capability, remaining) {
            var alreadyCalled = false;
            return function(x) {
                if (alreadyCalled) return;
                alreadyCalled = true;
                values[index] = x;
                if (--remaining.count === 0) {
                    var resolve = capability.resolve;
                    resolve(values); // call w/ this===undefined
                }
            };
        };
        var performPromiseAll = function(iteratorRecord, C, resultCapability) {
            var it = iteratorRecord.iterator;
            var values = [];
            var remaining = {
                count: 1
            };
            var next, nextValue;
            var index = 0;
            while(true){
                try {
                    next = ES.IteratorStep(it);
                    if (next === false) {
                        iteratorRecord.done = true;
                        break;
                    }
                    nextValue = next.value;
                } catch (e) {
                    iteratorRecord.done = true;
                    throw e;
                }
                values[index] = void 0;
                var nextPromise = C.resolve(nextValue);
                var resolveElement = _promiseAllResolver(index, values, resultCapability, remaining);
                remaining.count += 1;
                optimizedThen(nextPromise.then, nextPromise, resolveElement, resultCapability.reject);
                index += 1;
            }
            if (--remaining.count === 0) {
                var resolve = resultCapability.resolve;
                resolve(values); // call w/ this===undefined
            }
            return resultCapability.promise;
        };
        var performPromiseRace = function(iteratorRecord, C, resultCapability) {
            var it = iteratorRecord.iterator;
            var next, nextValue, nextPromise;
            while(true){
                try {
                    next = ES.IteratorStep(it);
                    if (next === false) {
                        // NOTE: If iterable has no items, resulting promise will never
                        // resolve; see:
                        // https://github.com/domenic/promises-unwrapping/issues/75
                        // https://bugs.ecmascript.org/show_bug.cgi?id=2515
                        iteratorRecord.done = true;
                        break;
                    }
                    nextValue = next.value;
                } catch (e) {
                    iteratorRecord.done = true;
                    throw e;
                }
                nextPromise = C.resolve(nextValue);
                optimizedThen(nextPromise.then, nextPromise, resultCapability.resolve, resultCapability.reject);
            }
            return resultCapability.promise;
        };
        defineProperties(Promise1, {
            all: function all(iterable) {
                var C = this;
                if (!ES.TypeIsObject(C)) throw new TypeError('Promise is not object');
                var capability = new PromiseCapability(C);
                var iterator, iteratorRecord;
                try {
                    iterator = ES.GetIterator(iterable);
                    iteratorRecord = {
                        iterator: iterator,
                        done: false
                    };
                    return performPromiseAll(iteratorRecord, C, capability);
                } catch (e) {
                    var exception = e;
                    if (iteratorRecord && !iteratorRecord.done) try {
                        ES.IteratorClose(iterator, true);
                    } catch (ee) {
                        exception = ee;
                    }
                    var reject = capability.reject;
                    reject(exception);
                    return capability.promise;
                }
            },
            race: function race(iterable) {
                var C = this;
                if (!ES.TypeIsObject(C)) throw new TypeError('Promise is not object');
                var capability = new PromiseCapability(C);
                var iterator, iteratorRecord;
                try {
                    iterator = ES.GetIterator(iterable);
                    iteratorRecord = {
                        iterator: iterator,
                        done: false
                    };
                    return performPromiseRace(iteratorRecord, C, capability);
                } catch (e) {
                    var exception = e;
                    if (iteratorRecord && !iteratorRecord.done) try {
                        ES.IteratorClose(iterator, true);
                    } catch (ee) {
                        exception = ee;
                    }
                    var reject = capability.reject;
                    reject(exception);
                    return capability.promise;
                }
            },
            reject: function reject(reason) {
                var C = this;
                if (!ES.TypeIsObject(C)) throw new TypeError('Bad promise constructor');
                var capability = new PromiseCapability(C);
                var rejectFunc = capability.reject;
                rejectFunc(reason); // call with this===undefined
                return capability.promise;
            },
            resolve: function resolve(v) {
                // See https://esdiscuss.org/topic/fixing-promise-resolve for spec
                var C = this;
                if (!ES.TypeIsObject(C)) throw new TypeError('Bad promise constructor');
                if (ES.IsPromise(v)) {
                    var constructor = v.constructor;
                    if (constructor === C) return v;
                }
                var capability = new PromiseCapability(C);
                var resolveFunc = capability.resolve;
                resolveFunc(v); // call with this===undefined
                return capability.promise;
            }
        });
        defineProperties(Promise$prototype, {
            'catch': function(onRejected) {
                return this.then(null, onRejected);
            },
            then: function then(onFulfilled, onRejected) {
                var promise = this;
                if (!ES.IsPromise(promise)) throw new TypeError('not a promise');
                var C = ES.SpeciesConstructor(promise, Promise1);
                var resultCapability;
                var returnValueIsIgnored = arguments.length > 2 && arguments[2] === PROMISE_FAKE_CAPABILITY;
                if (returnValueIsIgnored && C === Promise1) resultCapability = PROMISE_FAKE_CAPABILITY;
                else resultCapability = new PromiseCapability(C);
                // PerformPromiseThen(promise, onFulfilled, onRejected, resultCapability)
                // Note that we've split the 'reaction' object into its two
                // components, "capabilities" and "handler"
                // "capabilities" is always equal to `resultCapability`
                var fulfillReactionHandler = ES.IsCallable(onFulfilled) ? onFulfilled : PROMISE_IDENTITY;
                var rejectReactionHandler = ES.IsCallable(onRejected) ? onRejected : PROMISE_THROWER;
                var _promise = promise._promise;
                var value;
                if (_promise.state === PROMISE_PENDING) {
                    if (_promise.reactionLength === 0) {
                        _promise.fulfillReactionHandler0 = fulfillReactionHandler;
                        _promise.rejectReactionHandler0 = rejectReactionHandler;
                        _promise.reactionCapability0 = resultCapability;
                    } else {
                        var idx = 3 * (_promise.reactionLength - 1);
                        _promise[idx + PROMISE_FULFILL_OFFSET] = fulfillReactionHandler;
                        _promise[idx + PROMISE_REJECT_OFFSET] = rejectReactionHandler;
                        _promise[idx + PROMISE_CAPABILITY_OFFSET] = resultCapability;
                    }
                    _promise.reactionLength += 1;
                } else if (_promise.state === PROMISE_FULFILLED) {
                    value = _promise.result;
                    enqueuePromiseReactionJob(fulfillReactionHandler, resultCapability, value);
                } else if (_promise.state === PROMISE_REJECTED) {
                    value = _promise.result;
                    enqueuePromiseReactionJob(rejectReactionHandler, resultCapability, value);
                } else throw new TypeError('unexpected Promise state');
                return resultCapability.promise;
            }
        });
        // This helps the optimizer by ensuring that methods which take
        // capabilities aren't polymorphic.
        PROMISE_FAKE_CAPABILITY = new PromiseCapability(Promise1);
        Promise$prototype$then = Promise$prototype.then;
        return Promise1;
    }();
    // Chrome's native Promise has extra methods that it shouldn't have. Let's remove them.
    if (globals.Promise) {
        delete globals.Promise.accept;
        delete globals.Promise.defer;
        delete globals.Promise.prototype.chain;
    }
    if (typeof PromiseShim === 'function') {
        // export the Promise constructor.
        defineProperties(globals, {
            Promise: PromiseShim
        });
        // In Chrome 33 (and thereabouts) Promise is defined, but the
        // implementation is buggy in a number of ways.  Let's check subclassing
        // support to see if we have a buggy implementation.
        var promiseSupportsSubclassing = supportsSubclassing(globals.Promise, function(S) {
            return S.resolve(42).then(function() {}) instanceof S;
        });
        var promiseIgnoresNonFunctionThenCallbacks = !throwsError(function() {
            return globals.Promise.reject(42).then(null, 5).then(null, noop);
        });
        var promiseRequiresObjectContext = throwsError(function() {
            return globals.Promise.call(3, noop);
        });
        // Promise.resolve() was errata'ed late in the ES6 process.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1170742
        //      https://code.google.com/p/v8/issues/detail?id=4161
        // It serves as a proxy for a number of other bugs in early Promise
        // implementations.
        var promiseResolveBroken = function(Promise1) {
            var p = Promise1.resolve(5);
            p.constructor = {};
            var p2 = Promise1.resolve(p);
            try {
                p2.then(null, noop).then(null, noop); // avoid "uncaught rejection" warnings in console
            } catch (e) {
                return true; // v8 native Promises break here https://code.google.com/p/chromium/issues/detail?id=575314
            }
            return p === p2; // This *should* be false!
        }(globals.Promise);
        // Chrome 46 (probably older too) does not retrieve a thenable's .then synchronously
        var getsThenSynchronously = supportsDescriptors && function() {
            var count = 0;
            // eslint-disable-next-line getter-return
            var thenable = Object.defineProperty({}, 'then', {
                get: function() {
                    count += 1;
                }
            });
            Promise.resolve(thenable);
            return count === 1;
        }();
        var BadResolverPromise = function BadResolverPromise(executor) {
            var p = new Promise(executor);
            executor(3, function() {});
            this.then = p.then;
            this.constructor = BadResolverPromise;
        };
        BadResolverPromise.prototype = Promise.prototype;
        BadResolverPromise.all = Promise.all;
        // Chrome Canary 49 (probably older too) has some implementation bugs
        var hasBadResolverPromise = valueOrFalseIfThrows(function() {
            return !!BadResolverPromise.all([
                1,
                2
            ]);
        });
        if (!promiseSupportsSubclassing || !promiseIgnoresNonFunctionThenCallbacks || !promiseRequiresObjectContext || promiseResolveBroken || !getsThenSynchronously || hasBadResolverPromise) {
            /* globals Promise: true */ /* eslint-disable no-undef, no-global-assign */ Promise = PromiseShim;
            /* eslint-enable no-undef, no-global-assign */ overrideNative(globals, 'Promise', PromiseShim);
        }
        if (Promise.all.length !== 1) {
            var origAll = Promise.all;
            overrideNative(Promise, 'all', function all(iterable) {
                return ES.Call(origAll, this, arguments);
            });
        }
        if (Promise.race.length !== 1) {
            var origRace = Promise.race;
            overrideNative(Promise, 'race', function race(iterable) {
                return ES.Call(origRace, this, arguments);
            });
        }
        if (Promise.resolve.length !== 1) {
            var origResolve = Promise.resolve;
            overrideNative(Promise, 'resolve', function resolve(x) {
                return ES.Call(origResolve, this, arguments);
            });
        }
        if (Promise.reject.length !== 1) {
            var origReject = Promise.reject;
            overrideNative(Promise, 'reject', function reject(r) {
                return ES.Call(origReject, this, arguments);
            });
        }
        ensureEnumerable(Promise, 'all');
        ensureEnumerable(Promise, 'race');
        ensureEnumerable(Promise, 'resolve');
        ensureEnumerable(Promise, 'reject');
        addDefaultSpecies(Promise);
    }
    // Map and Set require a true ES5 environment
    // Their fast path also requires that the environment preserve
    // property insertion order, which is not guaranteed by the spec.
    var testOrder = function(a) {
        var b = keys(_reduce(a, function(o, k) {
            o[k] = true;
            return o;
        }, {}));
        return a.join(':') === b.join(':');
    };
    var preservesInsertionOrder = testOrder([
        'z',
        'a',
        'bb'
    ]);
    // some engines (eg, Chrome) only preserve insertion order for string keys
    var preservesNumericInsertionOrder = testOrder([
        'z',
        1,
        'a',
        '3',
        2
    ]);
    if (supportsDescriptors) {
        var fastkey = function fastkey(key, skipInsertionOrderCheck) {
            if (!skipInsertionOrderCheck && !preservesInsertionOrder) return null;
            if (isNullOrUndefined(key)) return '^' + ES.ToString(key);
            else if (typeof key === 'string') return '$' + key;
            else if (typeof key === 'number') {
                // note that -0 will get coerced to "0" when used as a property key
                if (!preservesNumericInsertionOrder) return 'n' + key;
                return key;
            } else if (typeof key === 'boolean') return 'b' + key;
            return null;
        };
        var emptyObject = function emptyObject() {
            // accomodate some older not-quite-ES5 browsers
            return Object.create ? Object.create(null) : {};
        };
        var addIterableToMap = function addIterableToMap(MapConstructor, map, iterable) {
            if (isArray(iterable) || Type.string(iterable)) _forEach(iterable, function(entry) {
                if (!ES.TypeIsObject(entry)) throw new TypeError('Iterator value ' + entry + ' is not an entry object');
                map.set(entry[0], entry[1]);
            });
            else if (iterable instanceof MapConstructor) _call(MapConstructor.prototype.forEach, iterable, function(value, key) {
                map.set(key, value);
            });
            else {
                var iter, adder;
                if (!isNullOrUndefined(iterable)) {
                    adder = map.set;
                    if (!ES.IsCallable(adder)) throw new TypeError('bad map');
                    iter = ES.GetIterator(iterable);
                }
                if (typeof iter !== 'undefined') while(true){
                    var next = ES.IteratorStep(iter);
                    if (next === false) break;
                    var nextItem = next.value;
                    try {
                        if (!ES.TypeIsObject(nextItem)) throw new TypeError('Iterator value ' + nextItem + ' is not an entry object');
                        _call(adder, map, nextItem[0], nextItem[1]);
                    } catch (e) {
                        ES.IteratorClose(iter, true);
                        throw e;
                    }
                }
            }
        };
        var addIterableToSet = function addIterableToSet(SetConstructor, set, iterable) {
            if (isArray(iterable) || Type.string(iterable)) _forEach(iterable, function(value) {
                set.add(value);
            });
            else if (iterable instanceof SetConstructor) _call(SetConstructor.prototype.forEach, iterable, function(value) {
                set.add(value);
            });
            else {
                var iter, adder;
                if (!isNullOrUndefined(iterable)) {
                    adder = set.add;
                    if (!ES.IsCallable(adder)) throw new TypeError('bad set');
                    iter = ES.GetIterator(iterable);
                }
                if (typeof iter !== 'undefined') while(true){
                    var next = ES.IteratorStep(iter);
                    if (next === false) break;
                    var nextValue = next.value;
                    try {
                        _call(adder, set, nextValue);
                    } catch (e) {
                        ES.IteratorClose(iter, true);
                        throw e;
                    }
                }
            }
        };
        var collectionShims = {
            Map: function() {
                var empty = {};
                var MapEntry = function MapEntry(key, value) {
                    this.key = key;
                    this.value = value;
                    this.next = null;
                    this.prev = null;
                };
                MapEntry.prototype.isRemoved = function isRemoved() {
                    return this.key === empty;
                };
                var isMap = function isMap(map) {
                    return !!map._es6map;
                };
                var requireMapSlot = function requireMapSlot(map, method) {
                    if (!ES.TypeIsObject(map) || !isMap(map)) throw new TypeError('Method Map.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(map));
                };
                var MapIterator = function MapIterator(map, kind) {
                    requireMapSlot(map, '[[MapIterator]]');
                    this.head = map._head;
                    this.i = this.head;
                    this.kind = kind;
                };
                MapIterator.prototype = {
                    isMapIterator: true,
                    next: function next() {
                        if (!this.isMapIterator) throw new TypeError('Not a MapIterator');
                        var i = this.i;
                        var kind = this.kind;
                        var head = this.head;
                        if (typeof this.i === 'undefined') return iteratorResult();
                        while(i.isRemoved() && i !== head)// back up off of removed entries
                        i = i.prev;
                        // advance to next unreturned element.
                        var result;
                        while(i.next !== head){
                            i = i.next;
                            if (!i.isRemoved()) {
                                if (kind === 'key') result = i.key;
                                else if (kind === 'value') result = i.value;
                                else result = [
                                    i.key,
                                    i.value
                                ];
                                this.i = i;
                                return iteratorResult(result);
                            }
                        }
                        // once the iterator is done, it is done forever.
                        this.i = void 0;
                        return iteratorResult();
                    }
                };
                addIterator(MapIterator.prototype);
                var Map$prototype;
                var MapShim = function Map1() {
                    if (!(this instanceof Map1)) throw new TypeError('Constructor Map requires "new"');
                    if (this && this._es6map) throw new TypeError('Bad construction');
                    var map = emulateES6construct(this, Map1, Map$prototype, {
                        _es6map: true,
                        _head: null,
                        _map: OrigMap ? new OrigMap() : null,
                        _size: 0,
                        _storage: emptyObject()
                    });
                    var head = new MapEntry(null, null);
                    // circular doubly-linked list.
                    /* eslint no-multi-assign: 1 */ head.next = head.prev = head;
                    map._head = head;
                    // Optionally initialize map from iterable
                    if (arguments.length > 0) addIterableToMap(Map1, map, arguments[0]);
                    return map;
                };
                Map$prototype = MapShim.prototype;
                Value.getter(Map$prototype, 'size', function() {
                    if (typeof this._size === 'undefined') throw new TypeError('size method called on incompatible Map');
                    return this._size;
                });
                defineProperties(Map$prototype, {
                    get: function get(key) {
                        requireMapSlot(this, 'get');
                        var entry;
                        var fkey = fastkey(key, true);
                        if (fkey !== null) {
                            // fast O(1) path
                            entry = this._storage[fkey];
                            if (entry) return entry.value;
                            else return;
                        }
                        if (this._map) {
                            // fast object key path
                            entry = origMapGet.call(this._map, key);
                            if (entry) return entry.value;
                            else return;
                        }
                        var head = this._head;
                        var i = head;
                        while((i = i.next) !== head){
                            if (ES.SameValueZero(i.key, key)) return i.value;
                        }
                    },
                    has: function has(key) {
                        requireMapSlot(this, 'has');
                        var fkey = fastkey(key, true);
                        if (fkey !== null) // fast O(1) path
                        return typeof this._storage[fkey] !== 'undefined';
                        if (this._map) // fast object key path
                        return origMapHas.call(this._map, key);
                        var head = this._head;
                        var i = head;
                        while((i = i.next) !== head){
                            if (ES.SameValueZero(i.key, key)) return true;
                        }
                        return false;
                    },
                    set: function set(key, value) {
                        requireMapSlot(this, 'set');
                        var head = this._head;
                        var i = head;
                        var entry;
                        var fkey = fastkey(key, true);
                        if (fkey !== null) {
                            // fast O(1) path
                            if (typeof this._storage[fkey] !== 'undefined') {
                                this._storage[fkey].value = value;
                                return this;
                            } else {
                                entry = this._storage[fkey] = new MapEntry(key, value); /* eslint no-multi-assign: 1 */ 
                                i = head.prev;
                            // fall through
                            }
                        } else if (this._map) {
                            // fast object key path
                            if (origMapHas.call(this._map, key)) origMapGet.call(this._map, key).value = value;
                            else {
                                entry = new MapEntry(key, value);
                                origMapSet.call(this._map, key, entry);
                                i = head.prev;
                            // fall through
                            }
                        }
                        while((i = i.next) !== head)if (ES.SameValueZero(i.key, key)) {
                            i.value = value;
                            return this;
                        }
                        entry = entry || new MapEntry(key, value);
                        if (ES.SameValue(-0, key)) entry.key = 0; // coerce -0 to +0 in entry
                        entry.next = this._head;
                        entry.prev = this._head.prev;
                        entry.prev.next = entry;
                        entry.next.prev = entry;
                        this._size += 1;
                        return this;
                    },
                    'delete': function(key) {
                        requireMapSlot(this, 'delete');
                        var head = this._head;
                        var i = head;
                        var fkey = fastkey(key, true);
                        if (fkey !== null) {
                            // fast O(1) path
                            if (typeof this._storage[fkey] === 'undefined') return false;
                            i = this._storage[fkey].prev;
                            delete this._storage[fkey];
                        // fall through
                        } else if (this._map) {
                            // fast object key path
                            if (!origMapHas.call(this._map, key)) return false;
                            i = origMapGet.call(this._map, key).prev;
                            origMapDelete.call(this._map, key);
                        // fall through
                        }
                        while((i = i.next) !== head)if (ES.SameValueZero(i.key, key)) {
                            i.key = empty;
                            i.value = empty;
                            i.prev.next = i.next;
                            i.next.prev = i.prev;
                            this._size -= 1;
                            return true;
                        }
                        return false;
                    },
                    clear: function clear() {
                        /* eslint no-multi-assign: 1 */ requireMapSlot(this, 'clear');
                        this._map = OrigMap ? new OrigMap() : null;
                        this._size = 0;
                        this._storage = emptyObject();
                        var head = this._head;
                        var i = head;
                        var p = i.next;
                        while((i = p) !== head){
                            i.key = empty;
                            i.value = empty;
                            p = i.next;
                            i.next = i.prev = head;
                        }
                        head.next = head.prev = head;
                    },
                    keys: function keys() {
                        requireMapSlot(this, 'keys');
                        return new MapIterator(this, 'key');
                    },
                    values: function values() {
                        requireMapSlot(this, 'values');
                        return new MapIterator(this, 'value');
                    },
                    entries: function entries() {
                        requireMapSlot(this, 'entries');
                        return new MapIterator(this, 'key+value');
                    },
                    forEach: function forEach(callback) {
                        requireMapSlot(this, 'forEach');
                        var context = arguments.length > 1 ? arguments[1] : null;
                        var it = this.entries();
                        for(var entry = it.next(); !entry.done; entry = it.next())if (context) _call(callback, context, entry.value[1], entry.value[0], this);
                        else callback(entry.value[1], entry.value[0], this);
                    }
                });
                addIterator(Map$prototype, Map$prototype.entries);
                return MapShim;
            }(),
            Set: function() {
                var isSet = function isSet(set) {
                    return set._es6set && typeof set._storage !== 'undefined';
                };
                var requireSetSlot = function requireSetSlot(set, method) {
                    if (!ES.TypeIsObject(set) || !isSet(set)) // https://github.com/paulmillr/es6-shim/issues/176
                    throw new TypeError('Set.prototype.' + method + ' called on incompatible receiver ' + ES.ToString(set));
                };
                // Creating a Map is expensive.  To speed up the common case of
                // Sets containing only string or numeric keys, we use an object
                // as backing storage and lazily create a full Map only when
                // required.
                var Set$prototype;
                var SetShim = function Set1() {
                    if (!(this instanceof Set1)) throw new TypeError('Constructor Set requires "new"');
                    if (this && this._es6set) throw new TypeError('Bad construction');
                    var set = emulateES6construct(this, Set1, Set$prototype, {
                        _es6set: true,
                        '[[SetData]]': null,
                        _storage: emptyObject()
                    });
                    if (!set._es6set) throw new TypeError('bad set');
                    // Optionally initialize Set from iterable
                    if (arguments.length > 0) addIterableToSet(Set1, set, arguments[0]);
                    return set;
                };
                Set$prototype = SetShim.prototype;
                var decodeKey = function(key) {
                    var k = key;
                    if (k === '^null') return null;
                    else if (k === '^undefined') return void 0;
                    else {
                        var first = k.charAt(0);
                        if (first === '$') return _strSlice(k, 1);
                        else if (first === 'n') return +_strSlice(k, 1);
                        else if (first === 'b') return k === 'btrue';
                    }
                    return +k;
                };
                // Switch from the object backing storage to a full Map.
                var ensureMap = function ensureMap(set) {
                    if (!set['[[SetData]]']) {
                        var m = new collectionShims.Map();
                        set['[[SetData]]'] = m;
                        _forEach(keys(set._storage), function(key) {
                            var k = decodeKey(key);
                            m.set(k, k);
                        });
                        set['[[SetData]]'] = m;
                    }
                    set._storage = null; // free old backing storage
                };
                Value.getter(SetShim.prototype, 'size', function() {
                    requireSetSlot(this, 'size');
                    if (this._storage) return keys(this._storage).length;
                    ensureMap(this);
                    return this['[[SetData]]'].size;
                });
                defineProperties(SetShim.prototype, {
                    has: function has(key) {
                        requireSetSlot(this, 'has');
                        var fkey;
                        if (this._storage && (fkey = fastkey(key)) !== null) return !!this._storage[fkey];
                        ensureMap(this);
                        return this['[[SetData]]'].has(key);
                    },
                    add: function add(key) {
                        requireSetSlot(this, 'add');
                        var fkey;
                        if (this._storage && (fkey = fastkey(key)) !== null) {
                            this._storage[fkey] = true;
                            return this;
                        }
                        ensureMap(this);
                        this['[[SetData]]'].set(key, key);
                        return this;
                    },
                    'delete': function(key) {
                        requireSetSlot(this, 'delete');
                        var fkey;
                        if (this._storage && (fkey = fastkey(key)) !== null) {
                            var hasFKey = _hasOwnProperty(this._storage, fkey);
                            return (delete this._storage[fkey]) && hasFKey;
                        }
                        ensureMap(this);
                        return this['[[SetData]]']['delete'](key);
                    },
                    clear: function clear() {
                        requireSetSlot(this, 'clear');
                        if (this._storage) this._storage = emptyObject();
                        if (this['[[SetData]]']) this['[[SetData]]'].clear();
                    },
                    values: function values() {
                        requireSetSlot(this, 'values');
                        ensureMap(this);
                        return new SetIterator(this['[[SetData]]'].values());
                    },
                    entries: function entries() {
                        requireSetSlot(this, 'entries');
                        ensureMap(this);
                        return new SetIterator(this['[[SetData]]'].entries());
                    },
                    forEach: function forEach(callback) {
                        requireSetSlot(this, 'forEach');
                        var context = arguments.length > 1 ? arguments[1] : null;
                        var entireSet = this;
                        ensureMap(entireSet);
                        this['[[SetData]]'].forEach(function(value, key) {
                            if (context) _call(callback, context, key, key, entireSet);
                            else callback(key, key, entireSet);
                        });
                    }
                });
                defineProperty(SetShim.prototype, 'keys', SetShim.prototype.values, true);
                addIterator(SetShim.prototype, SetShim.prototype.values);
                var SetIterator = function SetIterator(it) {
                    this.it = it;
                };
                SetIterator.prototype = {
                    isSetIterator: true,
                    next: function next() {
                        if (!this.isSetIterator) throw new TypeError('Not a SetIterator');
                        return this.it.next();
                    }
                };
                addIterator(SetIterator.prototype);
                return SetShim;
            }()
        };
        var isGoogleTranslate = globals.Set && !Set.prototype['delete'] && Set.prototype.remove && Set.prototype.items && Set.prototype.map && Array.isArray(new Set().keys);
        if (isGoogleTranslate) // special-case force removal of wildly invalid Set implementation in Google Translate iframes
        // see https://github.com/paulmillr/es6-shim/issues/438 / https://twitter.com/ljharb/status/849335573114363904
        globals.Set = collectionShims.Set;
        if (globals.Map || globals.Set) {
            // Safari 8, for example, doesn't accept an iterable.
            var mapAcceptsArguments = valueOrFalseIfThrows(function() {
                return new Map([
                    [
                        1,
                        2
                    ]
                ]).get(1) === 2;
            });
            if (!mapAcceptsArguments) {
                globals.Map = function Map1() {
                    if (!(this instanceof Map1)) throw new TypeError('Constructor Map requires "new"');
                    var m = new OrigMap();
                    if (arguments.length > 0) addIterableToMap(Map1, m, arguments[0]);
                    delete m.constructor;
                    Object.setPrototypeOf(m, globals.Map.prototype);
                    return m;
                };
                globals.Map.prototype = create(OrigMap.prototype);
                defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);
                Value.preserveToString(globals.Map, OrigMap);
            }
            var testMap = new Map();
            var mapUsesSameValueZero = function() {
                // Chrome 38-42, node 0.11/0.12, iojs 1/2 also have a bug when the Map has a size > 4
                var m = new Map([
                    [
                        1,
                        0
                    ],
                    [
                        2,
                        0
                    ],
                    [
                        3,
                        0
                    ],
                    [
                        4,
                        0
                    ]
                ]);
                m.set(-0, m);
                return m.get(0) === m && m.get(-0) === m && m.has(0) && m.has(-0);
            }();
            var mapSupportsChaining = testMap.set(1, 2) === testMap;
            if (!mapUsesSameValueZero || !mapSupportsChaining) overrideNative(Map.prototype, 'set', function set(k, v) {
                _call(origMapSet, this, k === 0 ? 0 : k, v);
                return this;
            });
            if (!mapUsesSameValueZero) {
                defineProperties(Map.prototype, {
                    get: function get(k) {
                        return _call(origMapGet, this, k === 0 ? 0 : k);
                    },
                    has: function has(k) {
                        return _call(origMapHas, this, k === 0 ? 0 : k);
                    }
                }, true);
                Value.preserveToString(Map.prototype.get, origMapGet);
                Value.preserveToString(Map.prototype.has, origMapHas);
            }
            var testSet = new Set();
            var setUsesSameValueZero = Set.prototype['delete'] && Set.prototype.add && Set.prototype.has && function(s) {
                s['delete'](0);
                s.add(-0);
                return !s.has(0);
            }(testSet);
            var setSupportsChaining = testSet.add(1) === testSet;
            if (!setUsesSameValueZero || !setSupportsChaining) {
                var origSetAdd = Set.prototype.add;
                Set.prototype.add = function add(v) {
                    _call(origSetAdd, this, v === 0 ? 0 : v);
                    return this;
                };
                Value.preserveToString(Set.prototype.add, origSetAdd);
            }
            if (!setUsesSameValueZero) {
                var origSetHas = Set.prototype.has;
                Set.prototype.has = function has(v) {
                    return _call(origSetHas, this, v === 0 ? 0 : v);
                };
                Value.preserveToString(Set.prototype.has, origSetHas);
                var origSetDel = Set.prototype['delete'];
                Set.prototype['delete'] = function SetDelete(v) {
                    return _call(origSetDel, this, v === 0 ? 0 : v);
                };
                Value.preserveToString(Set.prototype['delete'], origSetDel);
            }
            var mapSupportsSubclassing = supportsSubclassing(globals.Map, function(M) {
                var m = new M([]);
                // Firefox 32 is ok with the instantiating the subclass but will
                // throw when the map is used.
                m.set(42, 42);
                return m instanceof M;
            });
            // without Object.setPrototypeOf, subclassing is not possible
            var mapFailsToSupportSubclassing = Object.setPrototypeOf && !mapSupportsSubclassing;
            var mapRequiresNew = function() {
                try {
                    return !(globals.Map() instanceof globals.Map);
                } catch (e) {
                    return e instanceof TypeError;
                }
            }();
            if (globals.Map.length !== 0 || mapFailsToSupportSubclassing || !mapRequiresNew) {
                globals.Map = function Map1() {
                    if (!(this instanceof Map1)) throw new TypeError('Constructor Map requires "new"');
                    var m = new OrigMap();
                    if (arguments.length > 0) addIterableToMap(Map1, m, arguments[0]);
                    delete m.constructor;
                    Object.setPrototypeOf(m, Map1.prototype);
                    return m;
                };
                globals.Map.prototype = OrigMap.prototype;
                defineProperty(globals.Map.prototype, 'constructor', globals.Map, true);
                Value.preserveToString(globals.Map, OrigMap);
            }
            var setSupportsSubclassing = supportsSubclassing(globals.Set, function(S) {
                var s = new S([]);
                s.add(42, 42);
                return s instanceof S;
            });
            // without Object.setPrototypeOf, subclassing is not possible
            var setFailsToSupportSubclassing = Object.setPrototypeOf && !setSupportsSubclassing;
            var setRequiresNew = function() {
                try {
                    return !(globals.Set() instanceof globals.Set);
                } catch (e) {
                    return e instanceof TypeError;
                }
            }();
            if (globals.Set.length !== 0 || setFailsToSupportSubclassing || !setRequiresNew) {
                var OrigSet = globals.Set;
                globals.Set = function Set1() {
                    if (!(this instanceof Set1)) throw new TypeError('Constructor Set requires "new"');
                    var s = new OrigSet();
                    if (arguments.length > 0) addIterableToSet(Set1, s, arguments[0]);
                    delete s.constructor;
                    Object.setPrototypeOf(s, Set1.prototype);
                    return s;
                };
                globals.Set.prototype = OrigSet.prototype;
                defineProperty(globals.Set.prototype, 'constructor', globals.Set, true);
                Value.preserveToString(globals.Set, OrigSet);
            }
            var newMap = new globals.Map();
            var mapIterationThrowsStopIterator = !valueOrFalseIfThrows(function() {
                return newMap.keys().next().done;
            });
            /*
        - In Firefox < 23, Map#size is a function.
        - In all current Firefox, Set#entries/keys/values & Map#clear do not exist
        - https://bugzilla.mozilla.org/show_bug.cgi?id=869996
        - In Firefox 24, Map and Set do not implement forEach
        - In Firefox 25 at least, Map and Set are callable without "new"
      */ if (typeof globals.Map.prototype.clear !== 'function' || new globals.Set().size !== 0 || newMap.size !== 0 || typeof globals.Map.prototype.keys !== 'function' || typeof globals.Set.prototype.keys !== 'function' || typeof globals.Map.prototype.forEach !== 'function' || typeof globals.Set.prototype.forEach !== 'function' || isCallableWithoutNew(globals.Map) || isCallableWithoutNew(globals.Set) || typeof newMap.keys().next !== 'function' || // Safari 8
            mapIterationThrowsStopIterator || // Firefox 25
            !mapSupportsSubclassing) defineProperties(globals, {
                Map: collectionShims.Map,
                Set: collectionShims.Set
            }, true);
            if (globals.Set.prototype.keys !== globals.Set.prototype.values) // Fixed in WebKit with https://bugs.webkit.org/show_bug.cgi?id=144190
            defineProperty(globals.Set.prototype, 'keys', globals.Set.prototype.values, true);
            // Shim incomplete iterator implementations.
            addIterator(Object.getPrototypeOf(new globals.Map().keys()));
            addIterator(Object.getPrototypeOf(new globals.Set().keys()));
            if (functionsHaveNames && globals.Set.prototype.has.name !== 'has') {
                // Microsoft Edge v0.11.10074.0 is missing a name on Set#has
                var anonymousSetHas = globals.Set.prototype.has;
                overrideNative(globals.Set.prototype, 'has', function has(key) {
                    return _call(anonymousSetHas, this, key);
                });
            }
        }
        defineProperties(globals, collectionShims);
        addDefaultSpecies(globals.Map);
        addDefaultSpecies(globals.Set);
    }
    var throwUnlessTargetIsObject = function throwUnlessTargetIsObject(target) {
        if (!ES.TypeIsObject(target)) throw new TypeError('target must be an object');
    };
    // Some Reflect methods are basically the same as
    // those on the Object global, except that a TypeError is thrown if
    // target isn't an object. As well as returning a boolean indicating
    // the success of the operation.
    var ReflectShims = {
        // Apply method in a functional form.
        apply: function apply() {
            return ES.Call(ES.Call, null, arguments);
        },
        // New operator in a functional form.
        construct: function construct(constructor, args) {
            if (!ES.IsConstructor(constructor)) throw new TypeError('First argument must be a constructor.');
            var newTarget = arguments.length > 2 ? arguments[2] : constructor;
            if (!ES.IsConstructor(newTarget)) throw new TypeError('new.target must be a constructor.');
            return ES.Construct(constructor, args, newTarget, 'internal');
        },
        // When deleting a non-existent or configurable property,
        // true is returned.
        // When attempting to delete a non-configurable property,
        // it will return false.
        deleteProperty: function deleteProperty(target, key) {
            throwUnlessTargetIsObject(target);
            if (supportsDescriptors) {
                var desc = Object.getOwnPropertyDescriptor(target, key);
                if (desc && !desc.configurable) return false;
            }
            // Will return true.
            return delete target[key];
        },
        has: function has(target, key) {
            throwUnlessTargetIsObject(target);
            return key in target;
        }
    };
    if (Object.getOwnPropertyNames) Object.assign(ReflectShims, {
        // Basically the result of calling the internal [[OwnPropertyKeys]].
        // Concatenating propertyNames and propertySymbols should do the trick.
        // This should continue to work together with a Symbol shim
        // which overrides Object.getOwnPropertyNames and implements
        // Object.getOwnPropertySymbols.
        ownKeys: function ownKeys(target) {
            throwUnlessTargetIsObject(target);
            var keys = Object.getOwnPropertyNames(target);
            if (ES.IsCallable(Object.getOwnPropertySymbols)) _pushApply(keys, Object.getOwnPropertySymbols(target));
            return keys;
        }
    });
    var callAndCatchException = function ConvertExceptionToBoolean(func) {
        return !throwsError(func);
    };
    if (Object.preventExtensions) Object.assign(ReflectShims, {
        isExtensible: function isExtensible(target) {
            throwUnlessTargetIsObject(target);
            return Object.isExtensible(target);
        },
        preventExtensions: function preventExtensions(target) {
            throwUnlessTargetIsObject(target);
            return callAndCatchException(function() {
                return Object.preventExtensions(target);
            });
        }
    });
    if (supportsDescriptors) {
        var internalGet = function get(target, key, receiver) {
            var desc = Object.getOwnPropertyDescriptor(target, key);
            if (!desc) {
                var parent = Object.getPrototypeOf(target);
                if (parent === null) return void 0;
                return internalGet(parent, key, receiver);
            }
            if ('value' in desc) return desc.value;
            if (desc.get) return ES.Call(desc.get, receiver);
            return void 0;
        };
        var internalSet = function set(target, key, value, receiver) {
            var desc = Object.getOwnPropertyDescriptor(target, key);
            if (!desc) {
                var parent = Object.getPrototypeOf(target);
                if (parent !== null) return internalSet(parent, key, value, receiver);
                desc = {
                    value: void 0,
                    writable: true,
                    enumerable: true,
                    configurable: true
                };
            }
            if ('value' in desc) {
                if (!desc.writable) return false;
                if (!ES.TypeIsObject(receiver)) return false;
                var existingDesc = Object.getOwnPropertyDescriptor(receiver, key);
                if (existingDesc) return Reflect.defineProperty(receiver, key, {
                    value: value
                });
                else return Reflect.defineProperty(receiver, key, {
                    value: value,
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            }
            if (desc.set) {
                _call(desc.set, receiver, value);
                return true;
            }
            return false;
        };
        Object.assign(ReflectShims, {
            defineProperty: function defineProperty(target, propertyKey, attributes) {
                throwUnlessTargetIsObject(target);
                return callAndCatchException(function() {
                    return Object.defineProperty(target, propertyKey, attributes);
                });
            },
            getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
                throwUnlessTargetIsObject(target);
                return Object.getOwnPropertyDescriptor(target, propertyKey);
            },
            // Syntax in a functional form.
            get: function get(target, key) {
                throwUnlessTargetIsObject(target);
                var receiver = arguments.length > 2 ? arguments[2] : target;
                return internalGet(target, key, receiver);
            },
            set: function set(target, key, value) {
                throwUnlessTargetIsObject(target);
                var receiver = arguments.length > 3 ? arguments[3] : target;
                return internalSet(target, key, value, receiver);
            }
        });
    }
    if (Object.getPrototypeOf) {
        var objectDotGetPrototypeOf = Object.getPrototypeOf;
        ReflectShims.getPrototypeOf = function getPrototypeOf(target) {
            throwUnlessTargetIsObject(target);
            return objectDotGetPrototypeOf(target);
        };
    }
    if (Object.setPrototypeOf && ReflectShims.getPrototypeOf) {
        var willCreateCircularPrototype = function(object, lastProto) {
            var proto = lastProto;
            while(proto){
                if (object === proto) return true;
                proto = ReflectShims.getPrototypeOf(proto);
            }
            return false;
        };
        Object.assign(ReflectShims, {
            // Sets the prototype of the given object.
            // Returns true on success, otherwise false.
            setPrototypeOf: function setPrototypeOf(object, proto) {
                throwUnlessTargetIsObject(object);
                if (proto !== null && !ES.TypeIsObject(proto)) throw new TypeError('proto must be an object or null');
                // If they already are the same, we're done.
                if (proto === Reflect.getPrototypeOf(object)) return true;
                // Cannot alter prototype if object not extensible.
                if (Reflect.isExtensible && !Reflect.isExtensible(object)) return false;
                // Ensure that we do not create a circular prototype chain.
                if (willCreateCircularPrototype(object, proto)) return false;
                Object.setPrototypeOf(object, proto);
                return true;
            }
        });
    }
    var defineOrOverrideReflectProperty = function(key, shim) {
        if (!ES.IsCallable(globals.Reflect[key])) defineProperty(globals.Reflect, key, shim);
        else {
            var acceptsPrimitives = valueOrFalseIfThrows(function() {
                globals.Reflect[key](1);
                globals.Reflect[key](NaN);
                globals.Reflect[key](true);
                return true;
            });
            if (acceptsPrimitives) overrideNative(globals.Reflect, key, shim);
        }
    };
    Object.keys(ReflectShims).forEach(function(key) {
        defineOrOverrideReflectProperty(key, ReflectShims[key]);
    });
    var originalReflectGetProto = globals.Reflect.getPrototypeOf;
    if (functionsHaveNames && originalReflectGetProto && originalReflectGetProto.name !== 'getPrototypeOf') overrideNative(globals.Reflect, 'getPrototypeOf', function getPrototypeOf(target) {
        return _call(originalReflectGetProto, globals.Reflect, target);
    });
    if (globals.Reflect.setPrototypeOf) {
        if (valueOrFalseIfThrows(function() {
            globals.Reflect.setPrototypeOf(1, {});
            return true;
        })) overrideNative(globals.Reflect, 'setPrototypeOf', ReflectShims.setPrototypeOf);
    }
    if (globals.Reflect.defineProperty) {
        if (!valueOrFalseIfThrows(function() {
            var basic = !globals.Reflect.defineProperty(1, 'test', {
                value: 1
            });
            // "extensible" fails on Edge 0.12
            var extensible = typeof Object.preventExtensions !== 'function' || !globals.Reflect.defineProperty(Object.preventExtensions({}), 'test', {});
            return basic && extensible;
        })) overrideNative(globals.Reflect, 'defineProperty', ReflectShims.defineProperty);
    }
    if (globals.Reflect.construct) {
        if (!valueOrFalseIfThrows(function() {
            var F = function F() {};
            return globals.Reflect.construct(function() {}, [], F) instanceof F;
        })) overrideNative(globals.Reflect, 'construct', ReflectShims.construct);
    }
    if (String(new Date(NaN)) !== 'Invalid Date') {
        var dateToString = Date.prototype.toString;
        var shimmedDateToString = function toString() {
            var valueOf = +this;
            if (valueOf !== valueOf) return 'Invalid Date';
            return ES.Call(dateToString, this);
        };
        overrideNative(Date.prototype, 'toString', shimmedDateToString);
    }
    // Annex B HTML methods
    // http://www.ecma-international.org/ecma-262/6.0/#sec-additional-properties-of-the-string.prototype-object
    var stringHTMLshims = {
        anchor: function anchor(name) {
            return ES.CreateHTML(this, 'a', 'name', name);
        },
        big: function big() {
            return ES.CreateHTML(this, 'big', '', '');
        },
        blink: function blink() {
            return ES.CreateHTML(this, 'blink', '', '');
        },
        bold: function bold() {
            return ES.CreateHTML(this, 'b', '', '');
        },
        fixed: function fixed() {
            return ES.CreateHTML(this, 'tt', '', '');
        },
        fontcolor: function fontcolor(color) {
            return ES.CreateHTML(this, 'font', 'color', color);
        },
        fontsize: function fontsize(size) {
            return ES.CreateHTML(this, 'font', 'size', size);
        },
        italics: function italics() {
            return ES.CreateHTML(this, 'i', '', '');
        },
        link: function link(url) {
            return ES.CreateHTML(this, 'a', 'href', url);
        },
        small: function small() {
            return ES.CreateHTML(this, 'small', '', '');
        },
        strike: function strike() {
            return ES.CreateHTML(this, 'strike', '', '');
        },
        sub: function sub() {
            return ES.CreateHTML(this, 'sub', '', '');
        },
        sup: function sub() {
            return ES.CreateHTML(this, 'sup', '', '');
        }
    };
    _forEach(Object.keys(stringHTMLshims), function(key) {
        var method = String.prototype[key];
        var shouldOverwrite = false;
        if (ES.IsCallable(method)) {
            var output = _call(method, '', ' " ');
            var quotesCount = _concat([], output.match(/"/g)).length;
            shouldOverwrite = output !== output.toLowerCase() || quotesCount > 2;
        } else shouldOverwrite = true;
        if (shouldOverwrite) overrideNative(String.prototype, key, stringHTMLshims[key]);
    });
    var JSONstringifiesSymbols = function() {
        // Microsoft Edge v0.12 stringifies Symbols incorrectly
        if (!hasSymbols) return false;
         // Symbols are not supported
        var stringify = typeof JSON === 'object' && typeof JSON.stringify === 'function' ? JSON.stringify : null;
        if (!stringify) return false;
         // JSON.stringify is not supported
        if (typeof stringify(Symbol()) !== 'undefined') return true;
         // Symbols should become `undefined`
        if (stringify([
            Symbol()
        ]) !== '[null]') return true;
         // Symbols in arrays should become `null`
        var obj = {
            a: Symbol()
        };
        obj[Symbol()] = true;
        if (stringify(obj) !== '{}') return true;
         // Symbol-valued keys *and* Symbol-valued properties should be omitted
        return false;
    }();
    var JSONstringifyAcceptsObjectSymbol = valueOrFalseIfThrows(function() {
        // Chrome 45 throws on stringifying object symbols
        if (!hasSymbols) return true;
         // Symbols are not supported
        return JSON.stringify(Object(Symbol())) === '{}' && JSON.stringify([
            Object(Symbol())
        ]) === '[{}]';
    });
    if (JSONstringifiesSymbols || !JSONstringifyAcceptsObjectSymbol) {
        var origStringify = JSON.stringify;
        overrideNative(JSON, 'stringify', function stringify(value) {
            if (typeof value === 'symbol') return;
            var replacer;
            if (arguments.length > 1) replacer = arguments[1];
            var args = [
                value
            ];
            if (!isArray(replacer)) {
                var replaceFn = ES.IsCallable(replacer) ? replacer : null;
                var wrappedReplacer = function(key, val) {
                    var parsedValue = replaceFn ? _call(replaceFn, this, key, val) : val;
                    if (typeof parsedValue !== 'symbol') {
                        if (Type.symbol(parsedValue)) return assignTo({})(parsedValue);
                        else return parsedValue;
                    }
                };
                args.push(wrappedReplacer);
            } else // create wrapped replacer that handles an array replacer?
            args.push(replacer);
            if (arguments.length > 2) args.push(arguments[2]);
            return origStringify.apply(this, args);
        });
    }
    return globals;
});

},{}],"c1tvS":[function(require,module,exports,__globalThis) {
'use strict';
var supportsDescriptors = require("bfd7f458ab0baf05").supportsDescriptors;
var functionsHaveNames = require("324a752bea0c9628")();
var getPolyfill = require("f7d5813174e8dd11");
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
module.exports = function shimName() {
    var polyfill = getPolyfill();
    if (functionsHaveNames) return polyfill;
    if (!supportsDescriptors) throw new TypeErr('Shimming Function.prototype.name support requires ES5 property descriptor support.');
    var functionProto = Function.prototype;
    defineProperty(functionProto, 'name', {
        configurable: true,
        enumerable: false,
        get: function() {
            var name = polyfill.call(this);
            if (this !== functionProto) defineProperty(this, 'name', {
                configurable: true,
                enumerable: false,
                value: name,
                writable: false
            });
            return name;
        }
    });
    return polyfill;
};

},{"bfd7f458ab0baf05":"a7y5v","324a752bea0c9628":"61QTA","f7d5813174e8dd11":"8SNEI"}],"a7y5v":[function(require,module,exports,__globalThis) {
'use strict';
var keys = require("7ff177585d1618f0");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;
var isFunction = function(fn) {
    return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};
var hasPropertyDescriptors = require("c52d62086511583f")();
var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;
var defineProperty = function(object, name, value, predicate) {
    if (name in object && (!isFunction(predicate) || !predicate())) return;
    if (supportsDescriptors) origDefineProperty(object, name, {
        configurable: true,
        enumerable: false,
        value: value,
        writable: true
    });
    else object[name] = value; // eslint-disable-line no-param-reassign
};
var defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = keys(map);
    if (hasSymbols) props = concat.call(props, Object.getOwnPropertySymbols(map));
    for(var i = 0; i < props.length; i += 1)defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
};
defineProperties.supportsDescriptors = !!supportsDescriptors;
module.exports = defineProperties;

},{"7ff177585d1618f0":"bsivU","c52d62086511583f":"5Lkyn"}],"bsivU":[function(require,module,exports,__globalThis) {
'use strict';
var slice = Array.prototype.slice;
var isArgs = require("93e8460f624c96f4");
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
} : require("344bb0d7b2568e03");
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = function() {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) Object.keys = function keys(object) {
            if (isArgs(object)) return originalKeys(slice.call(object));
            return originalKeys(object);
        };
    } else Object.keys = keysShim;
    return Object.keys || keysShim;
};
module.exports = keysShim;

},{"93e8460f624c96f4":"2AZLV","344bb0d7b2568e03":"5daQ9"}],"2AZLV":[function(require,module,exports,__globalThis) {
'use strict';
var toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
    var str = toStr.call(value);
    var isArgs = str === '[object Arguments]';
    if (!isArgs) isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
    return isArgs;
};

},{}],"5daQ9":[function(require,module,exports,__globalThis) {
'use strict';
var keysShim;
if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var has = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var isArgs = require("b0d8c8b84be91ffd"); // eslint-disable-line global-require
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({
        toString: null
    }, 'toString');
    var hasProtoEnumBug = isEnumerable.call(function() {}, 'prototype');
    var dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ];
    var equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
    };
    var hasAutomationEqualityBug = function() {
        /* global window */ if (typeof window === 'undefined') return false;
        for(var k in window)try {
            if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') try {
                equalsConstructorPrototype(window[k]);
            } catch (e) {
                return true;
            }
        } catch (e) {
            return true;
        }
        return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
        /* global window */ if (typeof window === 'undefined' || !hasAutomationEqualityBug) return equalsConstructorPrototype(o);
        try {
            return equalsConstructorPrototype(o);
        } catch (e) {
            return false;
        }
    };
    keysShim = function keys(object) {
        var isObject = object !== null && typeof object === 'object';
        var isFunction = toStr.call(object) === '[object Function]';
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === '[object String]';
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) throw new TypeError('Object.keys called on a non-object');
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) for(var i = 0; i < object.length; ++i)theKeys.push(String(i));
        if (isArguments && object.length > 0) for(var j = 0; j < object.length; ++j)theKeys.push(String(j));
        else {
            for(var name in object)if (!(skipProto && name === 'prototype') && has.call(object, name)) theKeys.push(String(name));
        }
        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for(var k = 0; k < dontEnums.length; ++k)if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) theKeys.push(dontEnums[k]);
        }
        return theKeys;
    };
}
module.exports = keysShim;

},{"b0d8c8b84be91ffd":"2AZLV"}],"5Lkyn":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("b0bf8b8435d3abc");
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var hasPropertyDescriptors = function hasPropertyDescriptors() {
    if ($defineProperty) try {
        $defineProperty({}, 'a', {
            value: 1
        });
        return true;
    } catch (e) {
        // IE 8 has a broken defineProperty
        return false;
    }
    return false;
};
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    // node v0.6 has a bug where array lengths can be Set but not Defined
    if (!hasPropertyDescriptors()) return null;
    try {
        return $defineProperty([], 'length', {
            value: 1
        }).length !== 1;
    } catch (e) {
        // In Firefox 4-22, defining length on an array throws an exception.
        return true;
    }
};
module.exports = hasPropertyDescriptors;

},{"b0bf8b8435d3abc":"fLGpS"}],"fLGpS":[function(require,module,exports,__globalThis) {
'use strict';
var undefined1;
var $Object = require("2664640474097f21");
var $Error = require("ff34c740859aa28e");
var $EvalError = require("349515b7ea9b6cef");
var $RangeError = require("9da01653b2dd9abf");
var $ReferenceError = require("68586abd6b0136da");
var $SyntaxError = require("662263fdbc077fc8");
var $TypeError = require("abdfc34e5f6bb86");
var $URIError = require("daca1f932429e03e");
var abs = require("6a52a0c0ffccac74");
var floor = require("d01cf04757c5320b");
var max = require("a2657a92cb7dae87");
var min = require("6367c0241be1f01");
var pow = require("9bee48b90a8c96d");
var round = require("b5cc049891156ba3");
var sign = require("8d956274d8c0407e");
var $Function = Function;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
    } catch (e) {}
};
var $gOPD = require("7f0abb73c570ef31");
var $defineProperty = require("3cbcb7341b0412ef");
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = require("1f00f712d594ccf")();
var getProto = require("89cf41d095fe5a0a");
var $ObjectGPO = require("a5e781ace21741c8");
var $ReflectGPO = require("db08b186beb7f382");
var $apply = require("213af9137f841281");
var $call = require("56d5af438508fcc0");
var needsEval = {};
var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    __proto__: null,
    '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    '%AsyncFromSyncIteratorPrototype%': undefined,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
    '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
    '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
    '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': $Error,
    '%eval%': eval,
    '%EvalError%': $EvalError,
    '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
    '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
    '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
    '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
    '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
    '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    '%JSON%': typeof JSON === 'object' ? JSON : undefined,
    '%Map%': typeof Map === 'undefined' ? undefined : Map,
    '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': $Object,
    '%Object.getOwnPropertyDescriptor%': $gOPD,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
    '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
    '%RangeError%': $RangeError,
    '%ReferenceError%': $ReferenceError,
    '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set === 'undefined' ? undefined : Set,
    '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
    '%Symbol%': hasSymbols ? Symbol : undefined,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError,
    '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
    '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
    '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
    '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
    '%URIError%': $URIError,
    '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
    '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
    '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
    '%Function.prototype.call%': $call,
    '%Function.prototype.apply%': $apply,
    '%Object.defineProperty%': $defineProperty,
    '%Object.getPrototypeOf%': $ObjectGPO,
    '%Math.abs%': abs,
    '%Math.floor%': floor,
    '%Math.max%': max,
    '%Math.min%': min,
    '%Math.pow%': pow,
    '%Math.round%': round,
    '%Math.sign%': sign,
    '%Reflect.getPrototypeOf%': $ReflectGPO
};
if (getProto) try {
    null.error; // eslint-disable-line no-unused-expressions
} catch (e) {
    // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
    var errorProto = getProto(getProto(e));
    INTRINSICS['%Error.prototype%'] = errorProto;
}
var doEval = function doEval(name) {
    var value;
    if (name === '%AsyncFunction%') value = getEvalledConstructor('async function () {}');
    else if (name === '%GeneratorFunction%') value = getEvalledConstructor('function* () {}');
    else if (name === '%AsyncGeneratorFunction%') value = getEvalledConstructor('async function* () {}');
    else if (name === '%AsyncGenerator%') {
        var fn = doEval('%AsyncGeneratorFunction%');
        if (fn) value = fn.prototype;
    } else if (name === '%AsyncIteratorPrototype%') {
        var gen = doEval('%AsyncGenerator%');
        if (gen && getProto) value = getProto(gen.prototype);
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    __proto__: null,
    '%ArrayBufferPrototype%': [
        'ArrayBuffer',
        'prototype'
    ],
    '%ArrayPrototype%': [
        'Array',
        'prototype'
    ],
    '%ArrayProto_entries%': [
        'Array',
        'prototype',
        'entries'
    ],
    '%ArrayProto_forEach%': [
        'Array',
        'prototype',
        'forEach'
    ],
    '%ArrayProto_keys%': [
        'Array',
        'prototype',
        'keys'
    ],
    '%ArrayProto_values%': [
        'Array',
        'prototype',
        'values'
    ],
    '%AsyncFunctionPrototype%': [
        'AsyncFunction',
        'prototype'
    ],
    '%AsyncGenerator%': [
        'AsyncGeneratorFunction',
        'prototype'
    ],
    '%AsyncGeneratorPrototype%': [
        'AsyncGeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%BooleanPrototype%': [
        'Boolean',
        'prototype'
    ],
    '%DataViewPrototype%': [
        'DataView',
        'prototype'
    ],
    '%DatePrototype%': [
        'Date',
        'prototype'
    ],
    '%ErrorPrototype%': [
        'Error',
        'prototype'
    ],
    '%EvalErrorPrototype%': [
        'EvalError',
        'prototype'
    ],
    '%Float32ArrayPrototype%': [
        'Float32Array',
        'prototype'
    ],
    '%Float64ArrayPrototype%': [
        'Float64Array',
        'prototype'
    ],
    '%FunctionPrototype%': [
        'Function',
        'prototype'
    ],
    '%Generator%': [
        'GeneratorFunction',
        'prototype'
    ],
    '%GeneratorPrototype%': [
        'GeneratorFunction',
        'prototype',
        'prototype'
    ],
    '%Int8ArrayPrototype%': [
        'Int8Array',
        'prototype'
    ],
    '%Int16ArrayPrototype%': [
        'Int16Array',
        'prototype'
    ],
    '%Int32ArrayPrototype%': [
        'Int32Array',
        'prototype'
    ],
    '%JSONParse%': [
        'JSON',
        'parse'
    ],
    '%JSONStringify%': [
        'JSON',
        'stringify'
    ],
    '%MapPrototype%': [
        'Map',
        'prototype'
    ],
    '%NumberPrototype%': [
        'Number',
        'prototype'
    ],
    '%ObjectPrototype%': [
        'Object',
        'prototype'
    ],
    '%ObjProto_toString%': [
        'Object',
        'prototype',
        'toString'
    ],
    '%ObjProto_valueOf%': [
        'Object',
        'prototype',
        'valueOf'
    ],
    '%PromisePrototype%': [
        'Promise',
        'prototype'
    ],
    '%PromiseProto_then%': [
        'Promise',
        'prototype',
        'then'
    ],
    '%Promise_all%': [
        'Promise',
        'all'
    ],
    '%Promise_reject%': [
        'Promise',
        'reject'
    ],
    '%Promise_resolve%': [
        'Promise',
        'resolve'
    ],
    '%RangeErrorPrototype%': [
        'RangeError',
        'prototype'
    ],
    '%ReferenceErrorPrototype%': [
        'ReferenceError',
        'prototype'
    ],
    '%RegExpPrototype%': [
        'RegExp',
        'prototype'
    ],
    '%SetPrototype%': [
        'Set',
        'prototype'
    ],
    '%SharedArrayBufferPrototype%': [
        'SharedArrayBuffer',
        'prototype'
    ],
    '%StringPrototype%': [
        'String',
        'prototype'
    ],
    '%SymbolPrototype%': [
        'Symbol',
        'prototype'
    ],
    '%SyntaxErrorPrototype%': [
        'SyntaxError',
        'prototype'
    ],
    '%TypedArrayPrototype%': [
        'TypedArray',
        'prototype'
    ],
    '%TypeErrorPrototype%': [
        'TypeError',
        'prototype'
    ],
    '%Uint8ArrayPrototype%': [
        'Uint8Array',
        'prototype'
    ],
    '%Uint8ClampedArrayPrototype%': [
        'Uint8ClampedArray',
        'prototype'
    ],
    '%Uint16ArrayPrototype%': [
        'Uint16Array',
        'prototype'
    ],
    '%Uint32ArrayPrototype%': [
        'Uint32Array',
        'prototype'
    ],
    '%URIErrorPrototype%': [
        'URIError',
        'prototype'
    ],
    '%WeakMapPrototype%': [
        'WeakMap',
        'prototype'
    ],
    '%WeakSetPrototype%': [
        'WeakSet',
        'prototype'
    ]
};
var bind = require("7c5e688e48cd07b0");
var hasOwn = require("af36d49b4b8c6c7c");
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === '%' && last !== '%') throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    else if (last === '%' && first !== '%') throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = '%' + alias[0] + '%';
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) value = doEval(intrinsicName);
        if (typeof value === 'undefined' && !allowMissing) throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== 'string' || name.length === 0) throw new $TypeError('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && typeof allowMissing !== 'boolean') throw new $TypeError('"allowMissing" argument must be a boolean');
    if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
    var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) throw new $SyntaxError('property names with quotes must have matching quotes');
        if (part === 'constructor' || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += '.' + part;
        intrinsicRealName = '%' + intrinsicBaseName + '%';
        if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
                return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

},{"2664640474097f21":"k5lqs","ff34c740859aa28e":"iuUSQ","349515b7ea9b6cef":"kSOpu","9da01653b2dd9abf":"kbldM","68586abd6b0136da":"8ndKT","662263fdbc077fc8":"hNYpp","abdfc34e5f6bb86":"kbpER","daca1f932429e03e":"cJzuP","6a52a0c0ffccac74":"jLwff","d01cf04757c5320b":"1Nj4b","a2657a92cb7dae87":"iqm24","6367c0241be1f01":"aPL3W","9bee48b90a8c96d":"eGEQs","b5cc049891156ba3":"k6LFp","8d956274d8c0407e":"hVwBe","7f0abb73c570ef31":"iGdut","3cbcb7341b0412ef":"eJxhB","1f00f712d594ccf":"aTWGV","89cf41d095fe5a0a":"dN7ey","a5e781ace21741c8":"4Quos","db08b186beb7f382":"36KM0","213af9137f841281":"cQYaT","56d5af438508fcc0":"6TaFS","7c5e688e48cd07b0":"29p7Z","af36d49b4b8c6c7c":"cG4PD"}],"k5lqs":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('.')} */ module.exports = Object;

},{}],"iuUSQ":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('.')} */ module.exports = Error;

},{}],"kSOpu":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./eval')} */ module.exports = EvalError;

},{}],"kbldM":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./range')} */ module.exports = RangeError;

},{}],"8ndKT":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./ref')} */ module.exports = ReferenceError;

},{}],"hNYpp":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./syntax')} */ module.exports = SyntaxError;

},{}],"kbpER":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./type')} */ module.exports = TypeError;

},{}],"cJzuP":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./uri')} */ module.exports = URIError;

},{}],"jLwff":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./abs')} */ module.exports = Math.abs;

},{}],"1Nj4b":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./floor')} */ module.exports = Math.floor;

},{}],"iqm24":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./max')} */ module.exports = Math.max;

},{}],"aPL3W":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./min')} */ module.exports = Math.min;

},{}],"eGEQs":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./pow')} */ module.exports = Math.pow;

},{}],"k6LFp":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./round')} */ module.exports = Math.round;

},{}],"hVwBe":[function(require,module,exports,__globalThis) {
'use strict';
var $isNaN = require("d292273fa9eecbef");
/** @type {import('./sign')} */ module.exports = function sign(number) {
    if ($isNaN(number) || number === 0) return number;
    return number < 0 ? -1 : 1;
};

},{"d292273fa9eecbef":"koSDL"}],"koSDL":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./isNaN')} */ module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};

},{}],"iGdut":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('.')} */ var $gOPD = require("2065a078be813600");
if ($gOPD) try {
    $gOPD([], 'length');
} catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
}
module.exports = $gOPD;

},{"2065a078be813600":"fgIR1"}],"fgIR1":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./gOPD')} */ module.exports = Object.getOwnPropertyDescriptor;

},{}],"eJxhB":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('.')} */ var $defineProperty = Object.defineProperty || false;
if ($defineProperty) try {
    $defineProperty({}, 'a', {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = false;
}
module.exports = $defineProperty;

},{}],"aTWGV":[function(require,module,exports,__globalThis) {
'use strict';
var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = require("3fb25678c62d2fce");
/** @type {import('.')} */ module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== 'function') return false;
    if (typeof Symbol !== 'function') return false;
    if (typeof origSymbol('foo') !== 'symbol') return false;
    if (typeof Symbol('bar') !== 'symbol') return false;
    return hasSymbolSham();
};

},{"3fb25678c62d2fce":"aARZX"}],"aARZX":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./shams')} */ /* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') return false;
    if (typeof Symbol.iterator === 'symbol') return true;
    /** @type {{ [k in symbol]?: unknown }} */ var obj = {};
    var sym = Symbol('test');
    var symObj = Object(sym);
    if (typeof sym === 'string') return false;
    if (Object.prototype.toString.call(sym) !== '[object Symbol]') return false;
    if (Object.prototype.toString.call(symObj) !== '[object Symbol]') return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(var _ in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === 'function') {
        // eslint-disable-next-line no-extra-parens
        var descriptor = /** @type {PropertyDescriptor} */ Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

},{}],"dN7ey":[function(require,module,exports,__globalThis) {
'use strict';
var reflectGetProto = require("ba0ea764912daf49");
var originalGetProto = require("1bd809a13f9b0f46");
var getDunderProto = require("fbec8086c64f7968");
/** @type {import('.')} */ module.exports = reflectGetProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return reflectGetProto(O);
} : originalGetProto ? function getProto(O) {
    if (!O || typeof O !== 'object' && typeof O !== 'function') throw new TypeError('getProto: not an object');
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return originalGetProto(O);
} : getDunderProto ? function getProto(O) {
    // @ts-expect-error TS can't narrow inside a closure, for some reason
    return getDunderProto(O);
} : null;

},{"ba0ea764912daf49":"36KM0","1bd809a13f9b0f46":"4Quos","fbec8086c64f7968":"6yJcP"}],"36KM0":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./Reflect.getPrototypeOf')} */ module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;

},{}],"4Quos":[function(require,module,exports,__globalThis) {
'use strict';
var $Object = require("23f06d8f004a91fb");
/** @type {import('./Object.getPrototypeOf')} */ module.exports = $Object.getPrototypeOf || null;

},{"23f06d8f004a91fb":"k5lqs"}],"6yJcP":[function(require,module,exports,__globalThis) {
'use strict';
var callBind = require("20202e6273970ec3");
var gOPD = require("6e9e415ed4ed192c");
var hasProtoAccessor;
try {
    // eslint-disable-next-line no-extra-parens, no-proto
    hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ [].__proto__ === Array.prototype;
} catch (e) {
    if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') throw e;
}
// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ '__proto__');
var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;
/** @type {import('./get')} */ module.exports = desc && typeof desc.get === 'function' ? callBind([
    desc.get
]) : typeof $getPrototypeOf === 'function' ? /** @type {import('./get')} */ function getDunder(value) {
    // eslint-disable-next-line eqeqeq
    return $getPrototypeOf(value == null ? value : $Object(value));
} : false;

},{"20202e6273970ec3":"aW32R","6e9e415ed4ed192c":"iGdut"}],"aW32R":[function(require,module,exports,__globalThis) {
'use strict';
var bind = require("d6d8aee3c61fa381");
var $TypeError = require("3ad70b4ee76fdc3");
var $call = require("79792e7530a25b0e");
var $actualApply = require("1883a23d55f655c3");
/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */ module.exports = function callBindBasic(args) {
    if (args.length < 1 || typeof args[0] !== 'function') throw new $TypeError('a function is required');
    return $actualApply(bind, $call, args);
};

},{"d6d8aee3c61fa381":"29p7Z","3ad70b4ee76fdc3":"kbpER","79792e7530a25b0e":"6TaFS","1883a23d55f655c3":"kKKA1"}],"29p7Z":[function(require,module,exports,__globalThis) {
'use strict';
var implementation = require("12e173b4dbaee960");
module.exports = Function.prototype.bind || implementation;

},{"12e173b4dbaee960":"kKUiD"}],"kKUiD":[function(require,module,exports,__globalThis) {
'use strict';
/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';
var concatty = function concatty(a, b) {
    var arr = [];
    for(var i = 0; i < a.length; i += 1)arr[i] = a[i];
    for(var j = 0; j < b.length; j += 1)arr[j + a.length] = b[j];
    return arr;
};
var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for(var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1)arr[j] = arrLike[i];
    return arr;
};
var joiny = function(arr, joiner) {
    var str = '';
    for(var i = 0; i < arr.length; i += 1){
        str += arr[i];
        if (i + 1 < arr.length) str += joiner;
    }
    return str;
};
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    var args = slicy(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) return result;
            return this;
        }
        return target.apply(that, concatty(args, arguments));
    };
    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs[i] = '$' + i;
    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

},{}],"6TaFS":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./functionCall')} */ module.exports = Function.prototype.call;

},{}],"kKKA1":[function(require,module,exports,__globalThis) {
'use strict';
var bind = require("ba0cb57b961776b");
var $apply = require("8002d8d4a5e40cd8");
var $call = require("dd5326344bf1485c");
var $reflectApply = require("ddbf3cfadf2f22c");
/** @type {import('./actualApply')} */ module.exports = $reflectApply || bind.call($call, $apply);

},{"ba0cb57b961776b":"29p7Z","8002d8d4a5e40cd8":"cQYaT","dd5326344bf1485c":"6TaFS","ddbf3cfadf2f22c":"9GYVc"}],"cQYaT":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./functionApply')} */ module.exports = Function.prototype.apply;

},{}],"9GYVc":[function(require,module,exports,__globalThis) {
'use strict';
/** @type {import('./reflectApply')} */ module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;

},{}],"cG4PD":[function(require,module,exports,__globalThis) {
'use strict';
var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = require("126cb75e62f8e17b");
/** @type {import('.')} */ module.exports = bind.call(call, $hasOwn);

},{"126cb75e62f8e17b":"29p7Z"}],"61QTA":[function(require,module,exports,__globalThis) {
'use strict';
var functionsHaveNames = function functionsHaveNames() {
    return typeof (function f() {}).name === 'string';
};
var gOPD = Object.getOwnPropertyDescriptor;
if (gOPD) try {
    gOPD([], 'length');
} catch (e) {
    // IE 8 has a broken gOPD
    gOPD = null;
}
functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
    if (!functionsHaveNames() || !gOPD) return false;
    var desc = gOPD(function() {}, 'name');
    return !!desc && !!desc.configurable;
};
var $bind = Function.prototype.bind;
functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
    return functionsHaveNames() && typeof $bind === 'function' && (function f() {}).bind().name !== '';
};
module.exports = functionsHaveNames;

},{}],"8SNEI":[function(require,module,exports,__globalThis) {
'use strict';
var implementation = require("482a3bb60c11c2fc");
module.exports = function getPolyfill() {
    return implementation;
};

},{"482a3bb60c11c2fc":"fg4JD"}],"fg4JD":[function(require,module,exports,__globalThis) {
'use strict';
var IsCallable = require("c59573be9f24add6");
var functionsHaveNames = require("44d4f55d80739906")();
var callBound = require("53a90eb28870a816");
var $functionToString = callBound('Function.prototype.toString');
var $stringMatch = callBound('String.prototype.match');
var classRegex = /^class /;
var isClass = function isClassConstructor(fn) {
    if (IsCallable(fn)) return false;
    if (typeof fn !== 'function') return false;
    try {
        var match = $stringMatch($functionToString(fn), classRegex);
        return !!match;
    } catch (e) {}
    return false;
};
var regex = /\s*function\s+([^(\s]*)\s*/;
var functionProto = Function.prototype;
module.exports = function getName() {
    if (!isClass(this) && !IsCallable(this)) throw new TypeError('Function.prototype.name sham getter called on non-function');
    if (functionsHaveNames) return this.name;
    if (this === functionProto) return '';
    var str = $functionToString(this);
    var match = $stringMatch(str, regex);
    var name = match && match[1];
    return name;
};

},{"c59573be9f24add6":"2G3Oo","44d4f55d80739906":"61QTA","53a90eb28870a816":"fflB1"}],"2G3Oo":[function(require,module,exports,__globalThis) {
'use strict';
// http://262.ecma-international.org/5.1/#sec-9.11
module.exports = require("489598c8d169c2b2");

},{"489598c8d169c2b2":"hiJAI"}],"hiJAI":[function(require,module,exports,__globalThis) {
'use strict';
var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') try {
    badArrayLike = Object.defineProperty({}, 'length', {
        get: function() {
            throw isCallableMarker;
        }
    });
    isCallableMarker = {};
    // eslint-disable-next-line no-throw-literal
    reflectApply(function() {
        throw 42;
    }, null, badArrayLike);
} catch (_) {
    if (_ !== isCallableMarker) reflectApply = null;
}
else reflectApply = null;
var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
    try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
    } catch (e) {
        return false; // not a function
    }
};
var tryFunctionObject = function tryFunctionToStr(value) {
    try {
        if (isES6ClassFn(value)) return false;
        fnToStr.call(value);
        return true;
    } catch (e) {
        return false;
    }
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`
var isDDA = typeof document === 'object' ? function isDocumentDotAll(value) {
    /* globals document: false */ // in IE 8, typeof document.all is "object"
    if (typeof value === 'undefined' || typeof value === 'object') try {
        return value('') === null;
    } catch (e) {}
    return false;
} : function() {
    return false;
};
module.exports = reflectApply ? function isCallable(value) {
    if (isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== 'function' && typeof value !== 'object') return false;
    if (typeof value === 'function' && !value.prototype) return true;
    try {
        reflectApply(value, null, badArrayLike);
    } catch (e) {
        if (e !== isCallableMarker) return false;
    }
    return !isES6ClassFn(value);
} : function isCallable(value) {
    if (isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== 'function' && typeof value !== 'object') return false;
    if (typeof value === 'function' && !value.prototype) return true;
    if (hasToStringTag) return tryFunctionObject(value);
    if (isES6ClassFn(value)) return false;
    var strClass = toStr.call(value);
    return strClass === fnClass || strClass === genClass || tryFunctionObject(value);
};

},{}],"fflB1":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("8b08ecb81cf4de17");
var callBind = require("266fc50410cfc4a");
var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) return callBind(intrinsic);
    return intrinsic;
};

},{"8b08ecb81cf4de17":"fLGpS","266fc50410cfc4a":"jcpLY"}],"jcpLY":[function(require,module,exports,__globalThis) {
'use strict';
var bind = require("4f9d84d5de4909bc");
var GetIntrinsic = require("68d2ad3775278f43");
var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');
if ($defineProperty) try {
    $defineProperty({}, 'a', {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = null;
}
module.exports = function callBind(originalFunction) {
    var func = $reflectApply(bind, $call, arguments);
    if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, 'length');
        if (desc.configurable) // original length, plus the receiver, minus any additional arguments (after the receiver)
        $defineProperty(func, 'length', {
            value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
        });
    }
    return func;
};
var applyBind = function applyBind() {
    return $reflectApply(bind, $apply, arguments);
};
if ($defineProperty) $defineProperty(module.exports, 'apply', {
    value: applyBind
});
else module.exports.apply = applyBind;

},{"4f9d84d5de4909bc":"29p7Z","68d2ad3775278f43":"fLGpS"}],"ASF4n":[function(require,module,exports,__globalThis) {
'use strict';
// Array#includes is stage 4, in ES7/ES2016
require("3134b935c6623ca8")();
require("aeb466bf7b437b68");

},{"3134b935c6623ca8":"ceGa2","aeb466bf7b437b68":"4qvJM"}],"ceGa2":[function(require,module,exports,__globalThis) {
'use strict';
var define = require("b8c1c9c996e066e8");
var getPolyfill = require("60c037d97df57100");
module.exports = function shimArrayPrototypeIncludes() {
    var polyfill = getPolyfill();
    define(Array.prototype, {
        includes: polyfill
    }, {
        includes: function() {
            return Array.prototype.includes !== polyfill;
        }
    });
    return polyfill;
};

},{"b8c1c9c996e066e8":"a7y5v","60c037d97df57100":"lUioO"}],"lUioO":[function(require,module,exports,__globalThis) {
'use strict';
var implementation = require("74872bb0024e6fa5");
module.exports = function getPolyfill() {
    if (Array.prototype.includes && Array(1).includes(undefined) // https://bugzilla.mozilla.org/show_bug.cgi?id=1767541
    ) return Array.prototype.includes;
    return implementation;
};

},{"74872bb0024e6fa5":"5dRW6"}],"5dRW6":[function(require,module,exports,__globalThis) {
'use strict';
var ToIntegerOrInfinity = require("91c917aef160bc1c");
var ToLength = require("bddef1909222677b");
var ToObject = require("699c72b54d89b99a");
var SameValueZero = require("cb255fe79f57b4ca");
var $isNaN = require("57dd18635e8825e3");
var $isFinite = require("c81c9b6503f1a96");
var GetIntrinsic = require("82789a482be49da6");
var callBound = require("5acaa7ceda530c08");
var isString = require("a90f98cb5a1db4e8");
var $charAt = callBound('String.prototype.charAt');
var $indexOf = GetIntrinsic('%Array.prototype.indexOf%'); // TODO: use callBind.apply without breaking IE 8
var $max = GetIntrinsic('%Math.max%');
module.exports = function includes(searchElement) {
    var fromIndex = arguments.length > 1 ? ToIntegerOrInfinity(arguments[1]) : 0;
    if ($indexOf && !$isNaN(searchElement) && $isFinite(fromIndex) && typeof searchElement !== 'undefined') return $indexOf.apply(this, arguments) > -1;
    var O = ToObject(this);
    var length = ToLength(O.length);
    if (length === 0) return false;
    var k = fromIndex >= 0 ? fromIndex : $max(0, length + fromIndex);
    while(k < length){
        if (SameValueZero(searchElement, isString(O) ? $charAt(O, k) : O[k])) return true;
        k += 1;
    }
    return false;
};

},{"91c917aef160bc1c":"5PeK6","bddef1909222677b":"guNVk","699c72b54d89b99a":"fixrB","cb255fe79f57b4ca":"a4zKs","57dd18635e8825e3":"9Ute2","c81c9b6503f1a96":"2YntB","82789a482be49da6":"fLGpS","5acaa7ceda530c08":"fflB1","a90f98cb5a1db4e8":"6yytC"}],"5PeK6":[function(require,module,exports,__globalThis) {
'use strict';
var abs = require("48b9e104a66da684");
var floor = require("e1b2e18b13b7177f");
var ToNumber = require("934078f1f3f31ef");
var $isNaN = require("61f92958fe82b8e9");
var $isFinite = require("875c32777a6f6acd");
var $sign = require("68afc34dc1341fc5");
// https://262.ecma-international.org/12.0/#sec-tointegerorinfinity
module.exports = function ToIntegerOrInfinity(value) {
    var number = ToNumber(value);
    if ($isNaN(number) || number === 0) return 0;
    if (!$isFinite(number)) return number;
    return $sign(number) * floor(abs(number));
};

},{"48b9e104a66da684":"9hhzr","e1b2e18b13b7177f":"3rFdv","934078f1f3f31ef":"7t0Dk","61f92958fe82b8e9":"9Ute2","875c32777a6f6acd":"2YntB","68afc34dc1341fc5":"5HkFt"}],"9hhzr":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("e1f7c3f69d1bcc07");
var $abs = GetIntrinsic('%Math.abs%');
// http://262.ecma-international.org/5.1/#sec-5.2
module.exports = function abs(x) {
    return $abs(x);
};

},{"e1f7c3f69d1bcc07":"fLGpS"}],"3rFdv":[function(require,module,exports,__globalThis) {
'use strict';
// var modulo = require('./modulo');
var $floor = Math.floor;
// http://262.ecma-international.org/5.1/#sec-5.2
module.exports = function floor(x) {
    // return x - modulo(x, 1);
    return $floor(x);
};

},{}],"7t0Dk":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("5b8eea77c40e184");
var $TypeError = GetIntrinsic('%TypeError%');
var $Number = GetIntrinsic('%Number%');
var $RegExp = GetIntrinsic('%RegExp%');
var $parseInteger = GetIntrinsic('%parseInt%');
var callBound = require("7042804caaee873c");
var regexTester = require("6f6fda6a1601f53e");
var isPrimitive = require("be172b2706db1423");
var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = [
    '\u0085',
    '\u200b',
    '\ufffe'
].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);
// whitespace from: https://es5.github.io/#x15.5.4.20
// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
var ws = [
    '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
    '\u2029\uFEFF'
].join('');
var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
var $replace = callBound('String.prototype.replace');
var $trim = function(value) {
    return $replace(value, trimRegex, '');
};
var ToPrimitive = require("9982d04a7b919d9b");
// https://ecma-international.org/ecma-262/6.0/#sec-tonumber
module.exports = function ToNumber(argument) {
    var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
    if (typeof value === 'symbol') throw new $TypeError('Cannot convert a Symbol value to a number');
    if (typeof value === 'bigint') throw new $TypeError('Conversion from \'BigInt\' to \'number\' is not allowed.');
    if (typeof value === 'string') {
        if (isBinary(value)) return ToNumber($parseInteger($strSlice(value, 2), 2));
        else if (isOctal(value)) return ToNumber($parseInteger($strSlice(value, 2), 8));
        else if (hasNonWS(value) || isInvalidHexLiteral(value)) return NaN;
        var trimmed = $trim(value);
        if (trimmed !== value) return ToNumber(trimmed);
    }
    return $Number(value);
};

},{"5b8eea77c40e184":"fLGpS","7042804caaee873c":"fflB1","6f6fda6a1601f53e":"dvuI2","be172b2706db1423":"fg0L8","9982d04a7b919d9b":"4O9Ar"}],"dvuI2":[function(require,module,exports,__globalThis) {
'use strict';
var callBound = require("a6a9543beb1de1a1");
var $exec = callBound('RegExp.prototype.exec');
module.exports = function regexTester(regex) {
    return function test(s) {
        return $exec(regex, s) !== null;
    };
};

},{"a6a9543beb1de1a1":"fflB1"}],"fg0L8":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function isPrimitive(value) {
    return value === null || typeof value !== 'function' && typeof value !== 'object';
};

},{}],"4O9Ar":[function(require,module,exports,__globalThis) {
'use strict';
var toPrimitive = require("ea84ce7d466b5af2");
// https://ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input) {
    if (arguments.length > 1) return toPrimitive(input, arguments[1]);
    return toPrimitive(input);
};

},{"ea84ce7d466b5af2":"c5F7S"}],"c5F7S":[function(require,module,exports,__globalThis) {
'use strict';
var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';
var isPrimitive = require("ce9e8c729dd036c1");
var isCallable = require("92c0bcca2bd991f");
var isDate = require("ba79d23e421f80b8");
var isSymbol = require("e98b7b3733b2b729");
var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
    if (typeof O === 'undefined' || O === null) throw new TypeError('Cannot call method on ' + O);
    if (typeof hint !== 'string' || hint !== 'number' && hint !== 'string') throw new TypeError('hint must be "string" or "number"');
    var methodNames = hint === 'string' ? [
        'toString',
        'valueOf'
    ] : [
        'valueOf',
        'toString'
    ];
    var method, result, i;
    for(i = 0; i < methodNames.length; ++i){
        method = O[methodNames[i]];
        if (isCallable(method)) {
            result = method.call(O);
            if (isPrimitive(result)) return result;
        }
    }
    throw new TypeError('No default value');
};
var GetMethod = function GetMethod(O, P) {
    var func = O[P];
    if (func !== null && typeof func !== 'undefined') {
        if (!isCallable(func)) throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
        return func;
    }
    return void 0;
};
// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input) {
    if (isPrimitive(input)) return input;
    var hint = 'default';
    if (arguments.length > 1) {
        if (arguments[1] === String) hint = 'string';
        else if (arguments[1] === Number) hint = 'number';
    }
    var exoticToPrim;
    if (hasSymbols) {
        if (Symbol.toPrimitive) exoticToPrim = GetMethod(input, Symbol.toPrimitive);
        else if (isSymbol(input)) exoticToPrim = Symbol.prototype.valueOf;
    }
    if (typeof exoticToPrim !== 'undefined') {
        var result = exoticToPrim.call(input, hint);
        if (isPrimitive(result)) return result;
        throw new TypeError('unable to convert exotic object to primitive');
    }
    if (hint === 'default' && (isDate(input) || isSymbol(input))) hint = 'string';
    return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};

},{"ce9e8c729dd036c1":"edaVT","92c0bcca2bd991f":"hiJAI","ba79d23e421f80b8":"kPjF2","e98b7b3733b2b729":"kbdci"}],"edaVT":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function isPrimitive(value) {
    return value === null || typeof value !== 'function' && typeof value !== 'object';
};

},{}],"kPjF2":[function(require,module,exports,__globalThis) {
'use strict';
var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
    try {
        getDay.call(value);
        return true;
    } catch (e) {
        return false;
    }
};
var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = require("a0fda07f3b6c493a")();
module.exports = function isDateObject(value) {
    if (typeof value !== 'object' || value === null) return false;
    return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};

},{"a0fda07f3b6c493a":"54EkR"}],"54EkR":[function(require,module,exports,__globalThis) {
'use strict';
var hasSymbols = require("2ef89576d4959bff");
/** @type {import('.')} */ module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};

},{"2ef89576d4959bff":"aARZX"}],"kbdci":[function(require,module,exports,__globalThis) {
'use strict';
var toStr = Object.prototype.toString;
var hasSymbols = require("19da2b43c74a37a0")();
if (hasSymbols) {
    var symToStr = Symbol.prototype.toString;
    var symStringRegex = /^Symbol\(.*\)$/;
    var isSymbolObject = function isRealSymbolObject(value) {
        if (typeof value.valueOf() !== 'symbol') return false;
        return symStringRegex.test(symToStr.call(value));
    };
    module.exports = function isSymbol(value) {
        if (typeof value === 'symbol') return true;
        if (toStr.call(value) !== '[object Symbol]') return false;
        try {
            return isSymbolObject(value);
        } catch (e) {
            return false;
        }
    };
} else module.exports = function isSymbol(value) {
    // this environment does not support Symbols.
    return false;
};

},{"19da2b43c74a37a0":"aTWGV"}],"9Ute2":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = Number.isNaN || function isNaN(a) {
    return a !== a;
};

},{}],"2YntB":[function(require,module,exports,__globalThis) {
'use strict';
var $isNaN = Number.isNaN || function(a) {
    return a !== a;
};
module.exports = Number.isFinite || function(x) {
    return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity;
};

},{}],"5HkFt":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function sign(number) {
    return number >= 0 ? 1 : -1;
};

},{}],"guNVk":[function(require,module,exports,__globalThis) {
'use strict';
var MAX_SAFE_INTEGER = require("b0d0487addf3a835");
var ToIntegerOrInfinity = require("66202a23df40d197");
module.exports = function ToLength(argument) {
    var len = ToIntegerOrInfinity(argument);
    if (len <= 0) return 0;
     // includes converting -0 to +0
    if (len > MAX_SAFE_INTEGER) return MAX_SAFE_INTEGER;
    return len;
};

},{"b0d0487addf3a835":"iiAFM","66202a23df40d197":"5PeK6"}],"iiAFM":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("a7c11f4fc5355078");
var $Math = GetIntrinsic('%Math%');
var $Number = GetIntrinsic('%Number%');
module.exports = $Number.MAX_SAFE_INTEGER || $Math.pow(2, 53) - 1;

},{"a7c11f4fc5355078":"fLGpS"}],"fixrB":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("a6b6f31feb988a88");
var $Object = GetIntrinsic('%Object%');
var RequireObjectCoercible = require("75c3ba7adb98ff1d");
// https://ecma-international.org/ecma-262/6.0/#sec-toobject
module.exports = function ToObject(value) {
    RequireObjectCoercible(value);
    return $Object(value);
};

},{"a6b6f31feb988a88":"fLGpS","75c3ba7adb98ff1d":"lEnxL"}],"lEnxL":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("c4535c899880df1e");

},{"c4535c899880df1e":"imzlO"}],"imzlO":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("23b641700840277c");
var $TypeError = GetIntrinsic('%TypeError%');
// http://262.ecma-international.org/5.1/#sec-9.10
module.exports = function CheckObjectCoercible(value, optMessage) {
    if (value == null) throw new $TypeError(optMessage || 'Cannot call method on ' + value);
    return value;
};

},{"23b641700840277c":"fLGpS"}],"a4zKs":[function(require,module,exports,__globalThis) {
'use strict';
var $isNaN = require("935396f6747c0efb");
// https://ecma-international.org/ecma-262/6.0/#sec-samevaluezero
module.exports = function SameValueZero(x, y) {
    return x === y || $isNaN(x) && $isNaN(y);
};

},{"935396f6747c0efb":"9Ute2"}],"6yytC":[function(require,module,exports,__globalThis) {
'use strict';
var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
    try {
        strValue.call(value);
        return true;
    } catch (e) {
        return false;
    }
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = require("dc253d94c90af370")();
module.exports = function isString(value) {
    if (typeof value === 'string') return true;
    if (typeof value !== 'object') return false;
    return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};

},{"dc253d94c90af370":"54EkR"}],"4qvJM":[function(require,module,exports,__globalThis) {
'use strict';
// Object.values/Object.entries are stage 4, in ES2017
require("48cfee7faa104d6c")();
require("52a24e98cdc0a55e")();
// String#padStart/String#padEnd are stage 4, in ES2017
require("d13003c14902514")();
require("dfd32d800226c963")();
// Object.getOwnPropertyDescriptors is stage 4, in ES2017
require("1fc60e6ac886e81d")();
require("337e6791f6a91e2f");

},{"48cfee7faa104d6c":"boIEy","52a24e98cdc0a55e":"4FKgo","d13003c14902514":"eL6z7","dfd32d800226c963":"7hbWf","1fc60e6ac886e81d":"ixJoV","337e6791f6a91e2f":"1bWIN"}],"boIEy":[function(require,module,exports,__globalThis) {
'use strict';
var getPolyfill = require("88f489bae298c613");
var define = require("9e9b532df9cfca4");
module.exports = function shimValues() {
    var polyfill = getPolyfill();
    define(Object, {
        values: polyfill
    }, {
        values: function testValues() {
            return Object.values !== polyfill;
        }
    });
    return polyfill;
};

},{"88f489bae298c613":"heAxu","9e9b532df9cfca4":"a7y5v"}],"heAxu":[function(require,module,exports,__globalThis) {
'use strict';
var implementation = require("2d6409496ab72435");
module.exports = function getPolyfill() {
    return typeof Object.values === 'function' ? Object.values : implementation;
};

},{"2d6409496ab72435":"aieUk"}],"aieUk":[function(require,module,exports,__globalThis) {
'use strict';
var RequireObjectCoercible = require("c023430017e5f4ec");
var callBound = require("f8946a55f572eee1");
var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');
var $push = callBound('Array.prototype.push');
module.exports = function values(O) {
    var obj = RequireObjectCoercible(O);
    var vals = [];
    for(var key in obj)if ($isEnumerable(obj, key)) $push(vals, obj[key]);
    return vals;
};

},{"c023430017e5f4ec":"lEnxL","f8946a55f572eee1":"fflB1"}],"4FKgo":[function(require,module,exports,__globalThis) {
'use strict';
var getPolyfill = require("a4ac95cb64a67848");
var define = require("76b1dfc53d84e73e");
module.exports = function shimEntries() {
    var polyfill = getPolyfill();
    define(Object, {
        entries: polyfill
    }, {
        entries: function testEntries() {
            return Object.entries !== polyfill;
        }
    });
    return polyfill;
};

},{"a4ac95cb64a67848":"9oDQN","76b1dfc53d84e73e":"a7y5v"}],"9oDQN":[function(require,module,exports,__globalThis) {
'use strict';
var implementation = require("4e93e3142e0bf15e");
module.exports = function getPolyfill() {
    return typeof Object.entries === 'function' ? Object.entries : implementation;
};

},{"4e93e3142e0bf15e":"2PsKT"}],"2PsKT":[function(require,module,exports,__globalThis) {
'use strict';
var RequireObjectCoercible = require("eccee0668ff5e5f");
var callBound = require("b4853052a5b6e723");
var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');
var $push = callBound('Array.prototype.push');
module.exports = function entries(O) {
    var obj = RequireObjectCoercible(O);
    var entrys = [];
    for(var key in obj)if ($isEnumerable(obj, key)) $push(entrys, [
        key,
        obj[key]
    ]);
    return entrys;
};

},{"eccee0668ff5e5f":"lEnxL","b4853052a5b6e723":"fflB1"}],"eL6z7":[function(require,module,exports,__globalThis) {
'use strict';
var getPolyfill = require("c344eff78fdfcd");
var define = require("496f322894b5d8c1");
module.exports = function shimPadStart() {
    var polyfill = getPolyfill();
    define(String.prototype, {
        padStart: polyfill
    }, {
        padStart: function testPadStart() {
            return String.prototype.padStart !== polyfill;
        }
    });
    return polyfill;
};

},{"c344eff78fdfcd":"kNgIK","496f322894b5d8c1":"a7y5v"}],"kNgIK":[function(require,module,exports,__globalThis) {
'use strict';
var implementation = require("a187e1f9ac876964");
module.exports = function getPolyfill() {
    return typeof String.prototype.padStart === 'function' ? String.prototype.padStart : implementation;
};

},{"a187e1f9ac876964":"81GBi"}],"81GBi":[function(require,module,exports,__globalThis) {
'use strict';
var ToLength = require("7c4b221a26359742");
var ToString = require("e4ccd7379f01e638");
var RequireObjectCoercible = require("f485af7a2ec03065");
var callBound = require("538b49f2e5490cf1");
var $slice = callBound('String.prototype.slice');
module.exports = function padStart(maxLength) {
    var O = RequireObjectCoercible(this);
    var S = ToString(O);
    var stringLength = ToLength(S.length);
    var fillString;
    if (arguments.length > 1) fillString = arguments[1];
    var filler = typeof fillString === 'undefined' ? '' : ToString(fillString);
    if (filler === '') filler = ' ';
    var intMaxLength = ToLength(maxLength);
    if (intMaxLength <= stringLength) return S;
    var fillLen = intMaxLength - stringLength;
    while(filler.length < fillLen){
        var fLen = filler.length;
        var remainingCodeUnits = fillLen - fLen;
        filler += fLen > remainingCodeUnits ? $slice(filler, 0, remainingCodeUnits) : filler;
    }
    var truncatedStringFiller = filler.length > fillLen ? $slice(filler, 0, fillLen) : filler;
    return truncatedStringFiller + S;
};

},{"7c4b221a26359742":"guNVk","e4ccd7379f01e638":"ec6CI","f485af7a2ec03065":"lEnxL","538b49f2e5490cf1":"fflB1"}],"ec6CI":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("3a879975e17d82b");
var $String = GetIntrinsic('%String%');
var $TypeError = GetIntrinsic('%TypeError%');
// https://ecma-international.org/ecma-262/6.0/#sec-tostring
module.exports = function ToString(argument) {
    if (typeof argument === 'symbol') throw new $TypeError('Cannot convert a Symbol value to a string');
    return $String(argument);
};

},{"3a879975e17d82b":"fLGpS"}],"7hbWf":[function(require,module,exports,__globalThis) {
'use strict';
var getPolyfill = require("4a44c61e16009421");
var define = require("3bdf23f23ee90b24");
module.exports = function shimPadEnd() {
    var polyfill = getPolyfill();
    define(String.prototype, {
        padEnd: polyfill
    }, {
        padEnd: function testPadEnd() {
            return String.prototype.padEnd !== polyfill;
        }
    });
    return polyfill;
};

},{"4a44c61e16009421":"4rtwR","3bdf23f23ee90b24":"a7y5v"}],"4rtwR":[function(require,module,exports,__globalThis) {
'use strict';
var implementation = require("9ca57bc744b08674");
module.exports = function getPolyfill() {
    return typeof String.prototype.padEnd === 'function' ? String.prototype.padEnd : implementation;
};

},{"9ca57bc744b08674":"eG4c7"}],"eG4c7":[function(require,module,exports,__globalThis) {
'use strict';
var ToLength = require("92aa222c39ebcd61");
var ToString = require("b9491c5473842bff");
var RequireObjectCoercible = require("ae9990a1051ed4e6");
var callBound = require("959094b4b3a7c4a4");
var $slice = callBound('String.prototype.slice');
module.exports = function padEnd(maxLength) {
    var O = RequireObjectCoercible(this);
    var S = ToString(O);
    var stringLength = ToLength(S.length);
    var fillString;
    if (arguments.length > 1) fillString = arguments[1];
    var filler = typeof fillString === 'undefined' ? '' : ToString(fillString);
    if (filler === '') filler = ' ';
    var intMaxLength = ToLength(maxLength);
    if (intMaxLength <= stringLength) return S;
    var fillLen = intMaxLength - stringLength;
    while(filler.length < fillLen){
        var fLen = filler.length;
        var remainingCodeUnits = fillLen - fLen;
        filler += fLen > remainingCodeUnits ? $slice(filler, 0, remainingCodeUnits) : filler;
    }
    var truncatedStringFiller = filler.length > fillLen ? $slice(filler, 0, fillLen) : filler;
    return S + truncatedStringFiller;
};

},{"92aa222c39ebcd61":"guNVk","b9491c5473842bff":"ec6CI","ae9990a1051ed4e6":"lEnxL","959094b4b3a7c4a4":"fflB1"}],"ixJoV":[function(require,module,exports,__globalThis) {
'use strict';
var getPolyfill = require("5b4eb35188729c1a");
var define = require("77859b8598ad33e6");
module.exports = function shimGetOwnPropertyDescriptors() {
    var polyfill = getPolyfill();
    define(Object, {
        getOwnPropertyDescriptors: polyfill
    }, {
        getOwnPropertyDescriptors: function() {
            return Object.getOwnPropertyDescriptors !== polyfill;
        }
    });
    return polyfill;
};

},{"5b4eb35188729c1a":"keSWB","77859b8598ad33e6":"a7y5v"}],"keSWB":[function(require,module,exports,__globalThis) {
'use strict';
var implementation = require("914cf727e7b1c2fe");
module.exports = function getPolyfill() {
    return typeof Object.getOwnPropertyDescriptors === 'function' ? Object.getOwnPropertyDescriptors : implementation;
};

},{"914cf727e7b1c2fe":"7gNwT"}],"7gNwT":[function(require,module,exports,__globalThis) {
'use strict';
var CreateDataProperty = require("b4715092d7351611");
var IsCallable = require("ea48b72ec4febd0c");
var RequireObjectCoercible = require("2202a66682d6f85a");
var ToObject = require("bef7df7b0491b208");
var callBound = require("58de4cdb36f9eb0b");
var reduce = require("d29150b95384f253");
var $gOPD = Object.getOwnPropertyDescriptor;
var $getOwnNames = Object.getOwnPropertyNames;
var $getSymbols = Object.getOwnPropertySymbols;
var $concat = callBound('Array.prototype.concat');
var getAll = $getSymbols ? function(obj) {
    return $concat($getOwnNames(obj), $getSymbols(obj));
} : $getOwnNames;
var isES5 = IsCallable($gOPD) && IsCallable($getOwnNames);
module.exports = function getOwnPropertyDescriptors(value) {
    RequireObjectCoercible(value);
    if (!isES5) throw new TypeError('getOwnPropertyDescriptors requires Object.getOwnPropertyDescriptor');
    var O = ToObject(value);
    return reduce(getAll(O), function(acc, key) {
        var descriptor = $gOPD(O, key);
        if (typeof descriptor !== 'undefined') CreateDataProperty(acc, key, descriptor);
        return acc;
    }, {});
};

},{"b4715092d7351611":"l3Cji","ea48b72ec4febd0c":"2G3Oo","2202a66682d6f85a":"lEnxL","bef7df7b0491b208":"fixrB","58de4cdb36f9eb0b":"fflB1","d29150b95384f253":"1Wlkv"}],"l3Cji":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("838b195f4af89189");
var $TypeError = GetIntrinsic('%TypeError%');
var DefineOwnProperty = require("ba8daf9d6cea06c5");
var FromPropertyDescriptor = require("acca1633d972b94c");
var OrdinaryGetOwnProperty = require("1df00cb828637e4d");
var IsDataDescriptor = require("bd2009da5ae4bcd3");
var IsExtensible = require("8e76b197a1e35502");
var IsPropertyKey = require("80f5227495fe772f");
var SameValue = require("3509ba46b8a810ac");
var Type = require("aeb2b7bb867c6d75");
// https://ecma-international.org/ecma-262/6.0/#sec-createdataproperty
module.exports = function CreateDataProperty(O, P, V) {
    if (Type(O) !== 'Object') throw new $TypeError('Assertion failed: Type(O) is not Object');
    if (!IsPropertyKey(P)) throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
    var oldDesc = OrdinaryGetOwnProperty(O, P);
    var extensible = !oldDesc || IsExtensible(O);
    var nonConfigurable = oldDesc && !oldDesc['[[Configurable]]'];
    if (nonConfigurable || !extensible) return false;
    return DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, {
        '[[Configurable]]': true,
        '[[Enumerable]]': true,
        '[[Value]]': V,
        '[[Writable]]': true
    });
};

},{"838b195f4af89189":"fLGpS","ba8daf9d6cea06c5":"byRJT","acca1633d972b94c":"3lkUI","1df00cb828637e4d":"2lEro","bd2009da5ae4bcd3":"aaKUH","8e76b197a1e35502":"82eOy","80f5227495fe772f":"htC4i","3509ba46b8a810ac":"kFcOh","aeb2b7bb867c6d75":"9sdiO"}],"byRJT":[function(require,module,exports,__globalThis) {
'use strict';
var hasPropertyDescriptors = require("da62d0feb68dd33e");
var GetIntrinsic = require("c5adfbb7f3f796ac");
var $defineProperty = hasPropertyDescriptors() && GetIntrinsic('%Object.defineProperty%', true);
var hasArrayLengthDefineBug = hasPropertyDescriptors.hasArrayLengthDefineBug();
// eslint-disable-next-line global-require
var isArray = hasArrayLengthDefineBug && require("287d9714cb4d2fbd");
var callBound = require("dca9b1068e6d5efa");
var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');
// eslint-disable-next-line max-params
module.exports = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
    if (!$defineProperty) {
        if (!IsDataDescriptor(desc)) // ES3 does not support getters/setters
        return false;
        if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) return false;
        // fallback for ES3
        if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) // a non-enumerable existing property
        return false;
        // property does not exist at all, or exists but is enumerable
        var V = desc['[[Value]]'];
        // eslint-disable-next-line no-param-reassign
        O[P] = V; // will use [[Define]]
        return SameValue(O[P], V);
    }
    if (hasArrayLengthDefineBug && P === 'length' && '[[Value]]' in desc && isArray(O) && O.length !== desc['[[Value]]']) {
        // eslint-disable-next-line no-param-reassign
        O.length = desc['[[Value]]'];
        return O.length === desc['[[Value]]'];
    }
    $defineProperty(O, P, FromPropertyDescriptor(desc));
    return true;
};

},{"da62d0feb68dd33e":"5Lkyn","c5adfbb7f3f796ac":"fLGpS","287d9714cb4d2fbd":"gMAST","dca9b1068e6d5efa":"fflB1"}],"gMAST":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("3a1e7a0dea5ae10d");
var $Array = GetIntrinsic('%Array%');
// eslint-disable-next-line global-require
var toStr = !$Array.isArray && require("773e7556f4321e7d")('Object.prototype.toString');
module.exports = $Array.isArray || function IsArray(argument) {
    return toStr(argument) === '[object Array]';
};

},{"3a1e7a0dea5ae10d":"fLGpS","773e7556f4321e7d":"fflB1"}],"3lkUI":[function(require,module,exports,__globalThis) {
'use strict';
var assertRecord = require("4b9f44ee0a6bed7b");
var fromPropertyDescriptor = require("29955b1546307a08");
var Type = require("78b7c714816039b8");
// https://ecma-international.org/ecma-262/6.0/#sec-frompropertydescriptor
module.exports = function FromPropertyDescriptor(Desc) {
    if (typeof Desc !== 'undefined') assertRecord(Type, 'Property Descriptor', 'Desc', Desc);
    return fromPropertyDescriptor(Desc);
};

},{"4b9f44ee0a6bed7b":"5aBvn","29955b1546307a08":"kAGiW","78b7c714816039b8":"9sdiO"}],"5aBvn":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("8ecdd5c880915b3a");
var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');
var has = require("86dd052159f8a657");
var isMatchRecord = require("1195d0cb4bb39a93");
var predicates = {
    // https://262.ecma-international.org/6.0/#sec-property-descriptor-specification-type
    'Property Descriptor': function isPropertyDescriptor(Desc) {
        var allowed = {
            '[[Configurable]]': true,
            '[[Enumerable]]': true,
            '[[Get]]': true,
            '[[Set]]': true,
            '[[Value]]': true,
            '[[Writable]]': true
        };
        for(var key in Desc){
            if (has(Desc, key) && !allowed[key]) return false;
        }
        var isData = has(Desc, '[[Value]]');
        var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');
        if (isData && IsAccessor) throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
        return true;
    },
    // https://262.ecma-international.org/13.0/#sec-match-records
    'Match Record': isMatchRecord
};
module.exports = function assertRecord(Type, recordType, argumentName, value) {
    var predicate = predicates[recordType];
    if (typeof predicate !== 'function') throw new $SyntaxError('unknown record type: ' + recordType);
    if (Type(value) !== 'Object' || !predicate(value)) throw new $TypeError(argumentName + ' must be a ' + recordType);
};

},{"8ecdd5c880915b3a":"fLGpS","86dd052159f8a657":"mx2eX","1195d0cb4bb39a93":"1n26v"}],"mx2eX":[function(require,module,exports,__globalThis) {
'use strict';
var bind = require("ec4f1e1d3f29fa3e");
module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"ec4f1e1d3f29fa3e":"29p7Z"}],"1n26v":[function(require,module,exports,__globalThis) {
'use strict';
var has = require("27a28145667f5371");
// https://262.ecma-international.org/13.0/#sec-match-records
module.exports = function isMatchRecord(record) {
    return has(record, '[[StartIndex]]') && has(record, '[[EndIndex]]') && record['[[StartIndex]]'] >= 0 && record['[[EndIndex]]'] >= record['[[StartIndex]]'] && String(parseInt(record['[[StartIndex]]'], 10)) === String(record['[[StartIndex]]']) && String(parseInt(record['[[EndIndex]]'], 10)) === String(record['[[EndIndex]]']);
};

},{"27a28145667f5371":"mx2eX"}],"kAGiW":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function fromPropertyDescriptor(Desc) {
    if (typeof Desc === 'undefined') return Desc;
    var obj = {};
    if ('[[Value]]' in Desc) obj.value = Desc['[[Value]]'];
    if ('[[Writable]]' in Desc) obj.writable = !!Desc['[[Writable]]'];
    if ('[[Get]]' in Desc) obj.get = Desc['[[Get]]'];
    if ('[[Set]]' in Desc) obj.set = Desc['[[Set]]'];
    if ('[[Enumerable]]' in Desc) obj.enumerable = !!Desc['[[Enumerable]]'];
    if ('[[Configurable]]' in Desc) obj.configurable = !!Desc['[[Configurable]]'];
    return obj;
};

},{}],"9sdiO":[function(require,module,exports,__globalThis) {
'use strict';
var ES5Type = require("91c1d2b18b5830c4");
// https://262.ecma-international.org/11.0/#sec-ecmascript-data-types-and-values
module.exports = function Type(x) {
    if (typeof x === 'symbol') return 'Symbol';
    if (typeof x === 'bigint') return 'BigInt';
    return ES5Type(x);
};

},{"91c1d2b18b5830c4":"aHZHG"}],"aHZHG":[function(require,module,exports,__globalThis) {
'use strict';
// https://262.ecma-international.org/5.1/#sec-8
module.exports = function Type(x) {
    if (x === null) return 'Null';
    if (typeof x === 'undefined') return 'Undefined';
    if (typeof x === 'function' || typeof x === 'object') return 'Object';
    if (typeof x === 'number') return 'Number';
    if (typeof x === 'boolean') return 'Boolean';
    if (typeof x === 'string') return 'String';
};

},{}],"2lEro":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("eec2aed5db97d470");
var $gOPD = require("b269ab1293243508");
var $TypeError = GetIntrinsic('%TypeError%');
var callBound = require("17eef66b966b42b5");
var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');
var has = require("adce983295611d5b");
var IsArray = require("4cc5f097901ff274");
var IsPropertyKey = require("19ac71510059e153");
var IsRegExp = require("65713c5ebc67e977");
var ToPropertyDescriptor = require("90d8907d0cb9ce37");
var Type = require("861886b446a54e4d");
// https://ecma-international.org/ecma-262/6.0/#sec-ordinarygetownproperty
module.exports = function OrdinaryGetOwnProperty(O, P) {
    if (Type(O) !== 'Object') throw new $TypeError('Assertion failed: O must be an Object');
    if (!IsPropertyKey(P)) throw new $TypeError('Assertion failed: P must be a Property Key');
    if (!has(O, P)) return void 0;
    if (!$gOPD) {
        // ES3 / IE 8 fallback
        var arrayLength = IsArray(O) && P === 'length';
        var regexLastIndex = IsRegExp(O) && P === 'lastIndex';
        return {
            '[[Configurable]]': !(arrayLength || regexLastIndex),
            '[[Enumerable]]': $isEnumerable(O, P),
            '[[Value]]': O[P],
            '[[Writable]]': true
        };
    }
    return ToPropertyDescriptor($gOPD(O, P));
};

},{"eec2aed5db97d470":"fLGpS","b269ab1293243508":"hC5bm","17eef66b966b42b5":"fflB1","adce983295611d5b":"mx2eX","4cc5f097901ff274":"cepgx","19ac71510059e153":"htC4i","65713c5ebc67e977":"evACX","90d8907d0cb9ce37":"5MVXU","861886b446a54e4d":"9sdiO"}],"hC5bm":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("530effb4711b842c");
var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
if ($gOPD) try {
    $gOPD([], 'length');
} catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
}
module.exports = $gOPD;

},{"530effb4711b842c":"fLGpS"}],"cepgx":[function(require,module,exports,__globalThis) {
'use strict';
// https://ecma-international.org/ecma-262/6.0/#sec-isarray
module.exports = require("88e2594eb7387e12");

},{"88e2594eb7387e12":"gMAST"}],"htC4i":[function(require,module,exports,__globalThis) {
'use strict';
// https://ecma-international.org/ecma-262/6.0/#sec-ispropertykey
module.exports = function IsPropertyKey(argument) {
    return typeof argument === 'string' || typeof argument === 'symbol';
};

},{}],"evACX":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("c3c84c17954cfcb9");
var $match = GetIntrinsic('%Symbol.match%', true);
var hasRegExpMatcher = require("f331de289c988c18");
var ToBoolean = require("40eb18adc57ba84c");
// https://ecma-international.org/ecma-262/6.0/#sec-isregexp
module.exports = function IsRegExp(argument) {
    if (!argument || typeof argument !== 'object') return false;
    if ($match) {
        var isRegExp = argument[$match];
        if (typeof isRegExp !== 'undefined') return ToBoolean(isRegExp);
    }
    return hasRegExpMatcher(argument);
};

},{"c3c84c17954cfcb9":"fLGpS","f331de289c988c18":"cjnmC","40eb18adc57ba84c":"3PmeR"}],"cjnmC":[function(require,module,exports,__globalThis) {
'use strict';
var callBound = require("5d96af94ba428cfc");
var hasToStringTag = require("a5e890a505b039e5")();
var has;
var $exec;
var isRegexMarker;
var badStringifier;
if (hasToStringTag) {
    has = callBound('Object.prototype.hasOwnProperty');
    $exec = callBound('RegExp.prototype.exec');
    isRegexMarker = {};
    var throwRegexMarker = function() {
        throw isRegexMarker;
    };
    badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
    };
    if (typeof Symbol.toPrimitive === 'symbol') badStringifier[Symbol.toPrimitive] = throwRegexMarker;
}
var $toString = callBound('Object.prototype.toString');
var gOPD = Object.getOwnPropertyDescriptor;
var regexClass = '[object RegExp]';
module.exports = hasToStringTag ? function isRegex(value) {
    if (!value || typeof value !== 'object') return false;
    var descriptor = gOPD(value, 'lastIndex');
    var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
    if (!hasLastIndexDataProperty) return false;
    try {
        $exec(value, badStringifier);
    } catch (e) {
        return e === isRegexMarker;
    }
} : function isRegex(value) {
    // In older browsers, typeof regex incorrectly returns 'function'
    if (!value || typeof value !== 'object' && typeof value !== 'function') return false;
    return $toString(value) === regexClass;
};

},{"5d96af94ba428cfc":"fflB1","a5e890a505b039e5":"54EkR"}],"3PmeR":[function(require,module,exports,__globalThis) {
'use strict';
// http://262.ecma-international.org/5.1/#sec-9.2
module.exports = function ToBoolean(value) {
    return !!value;
};

},{}],"5MVXU":[function(require,module,exports,__globalThis) {
'use strict';
var has = require("7efc9e3a3cbaad8e");
var GetIntrinsic = require("64abdedf285f096");
var $TypeError = GetIntrinsic('%TypeError%');
var Type = require("3778fdc6ca8b8ff7");
var ToBoolean = require("8ce4094051081ba2");
var IsCallable = require("98386741e0d47e6d");
// https://262.ecma-international.org/5.1/#sec-8.10.5
module.exports = function ToPropertyDescriptor(Obj) {
    if (Type(Obj) !== 'Object') throw new $TypeError('ToPropertyDescriptor requires an object');
    var desc = {};
    if (has(Obj, 'enumerable')) desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
    if (has(Obj, 'configurable')) desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
    if (has(Obj, 'value')) desc['[[Value]]'] = Obj.value;
    if (has(Obj, 'writable')) desc['[[Writable]]'] = ToBoolean(Obj.writable);
    if (has(Obj, 'get')) {
        var getter = Obj.get;
        if (typeof getter !== 'undefined' && !IsCallable(getter)) throw new $TypeError('getter must be a function');
        desc['[[Get]]'] = getter;
    }
    if (has(Obj, 'set')) {
        var setter = Obj.set;
        if (typeof setter !== 'undefined' && !IsCallable(setter)) throw new $TypeError('setter must be a function');
        desc['[[Set]]'] = setter;
    }
    if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
    return desc;
};

},{"7efc9e3a3cbaad8e":"mx2eX","64abdedf285f096":"fLGpS","3778fdc6ca8b8ff7":"9sdiO","8ce4094051081ba2":"3PmeR","98386741e0d47e6d":"2G3Oo"}],"aaKUH":[function(require,module,exports,__globalThis) {
'use strict';
var has = require("1e59f8e4ccc364f9");
var assertRecord = require("79251d62a0895809");
var Type = require("d51566f39e3dd979");
// https://ecma-international.org/ecma-262/6.0/#sec-isdatadescriptor
module.exports = function IsDataDescriptor(Desc) {
    if (typeof Desc === 'undefined') return false;
    assertRecord(Type, 'Property Descriptor', 'Desc', Desc);
    if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) return false;
    return true;
};

},{"1e59f8e4ccc364f9":"mx2eX","79251d62a0895809":"5aBvn","d51566f39e3dd979":"9sdiO"}],"82eOy":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("42ea8521b937cc91");
var $preventExtensions = GetIntrinsic('%Object.preventExtensions%', true);
var $isExtensible = GetIntrinsic('%Object.isExtensible%', true);
var isPrimitive = require("d41371cdb01336c4");
// https://ecma-international.org/ecma-262/6.0/#sec-isextensible-o
module.exports = $preventExtensions ? function IsExtensible(obj) {
    return !isPrimitive(obj) && $isExtensible(obj);
} : function IsExtensible(obj) {
    return !isPrimitive(obj);
};

},{"42ea8521b937cc91":"fLGpS","d41371cdb01336c4":"fg0L8"}],"kFcOh":[function(require,module,exports,__globalThis) {
'use strict';
var $isNaN = require("23067c73af15cccc");
// http://262.ecma-international.org/5.1/#sec-9.12
module.exports = function SameValue(x, y) {
    if (x === y) {
        if (x === 0) return 1 / x === 1 / y;
        return true;
    }
    return $isNaN(x) && $isNaN(y);
};

},{"23067c73af15cccc":"9Ute2"}],"1Wlkv":[function(require,module,exports,__globalThis) {
'use strict';
var define = require("d21e3ee23fd013db");
var RequireObjectCoercible = require("56b84276f49e4643");
var callBind = require("1bae61afb6a3084");
var callBound = require("b7e2db999c502e78");
var implementation = require("c5a6cdf0e5d33b2b");
var getPolyfill = require("2789b7ed4e633eb");
var polyfill = callBind.apply(getPolyfill());
var shim = require("5d2d799a788bdbe8");
var $slice = callBound('%Array.prototype.slice%');
// eslint-disable-next-line no-unused-vars
var boundShim = function reduce(array, callbackfn) {
    RequireObjectCoercible(array);
    return polyfill(array, $slice(arguments, 1));
};
define(boundShim, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = boundShim;

},{"d21e3ee23fd013db":"a7y5v","56b84276f49e4643":"lEnxL","1bae61afb6a3084":"jcpLY","b7e2db999c502e78":"fflB1","c5a6cdf0e5d33b2b":"9RcWc","2789b7ed4e633eb":"dudiQ","5d2d799a788bdbe8":"fhrxA"}],"9RcWc":[function(require,module,exports,__globalThis) {
'use strict';
var Call = require("5b7380523b16bc15");
var Get = require("555d8bad1f3f7c92");
var HasProperty = require("1be274df653e5c48");
var IsCallable = require("ea8ff84ee591b95c");
var LengthOfArrayLike = require("1bfb2e742c8502db");
var ToObject = require("101cbd2c238d1a73");
var ToString = require("9dfd201e415f8593");
var callBound = require("d79a97eededfe78b");
var isString = require("fecb09429de86823");
var $TypeError = TypeError;
// Check failure of by-index access of string characters (IE < 9) and failure of `0 in boxedString` (Rhino)
var boxedString = Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);
var strSplit = callBound('%String.prototype.split%');
module.exports = function reduce(callbackfn) {
    var O = ToObject(this);
    var self = splitString && isString(O) ? strSplit(O, '') : O;
    var len = LengthOfArrayLike(self);
    // If no callback function or if callback is not a callable function
    if (!IsCallable(callbackfn)) throw new $TypeError('Array.prototype.reduce callback must be a function');
    if (len === 0 && arguments.length < 2) throw new $TypeError('reduce of empty array with no initial value');
    var k = 0;
    var accumulator;
    var Pk, kPresent;
    if (arguments.length > 1) accumulator = arguments[1];
    else {
        kPresent = false;
        while(!kPresent && k < len){
            Pk = ToString(k);
            kPresent = HasProperty(O, Pk);
            if (kPresent) accumulator = Get(O, Pk);
            k += 1;
        }
        if (!kPresent) throw new $TypeError('reduce of empty array with no initial value');
    }
    while(k < len){
        Pk = ToString(k);
        kPresent = HasProperty(O, Pk);
        if (kPresent) {
            var kValue = Get(O, Pk);
            accumulator = Call(callbackfn, void 0, [
                accumulator,
                kValue,
                k,
                O
            ]);
        }
        k += 1;
    }
    return accumulator;
};

},{"5b7380523b16bc15":"4Sjg6","555d8bad1f3f7c92":"a27FM","1be274df653e5c48":"6TG4B","ea8ff84ee591b95c":"2G3Oo","1bfb2e742c8502db":"gZ2h7","101cbd2c238d1a73":"fixrB","9dfd201e415f8593":"ec6CI","d79a97eededfe78b":"fflB1","fecb09429de86823":"6yytC"}],"4Sjg6":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("447d82215044f836");
var callBound = require("d8c8ddcd2d212f8a");
var $TypeError = GetIntrinsic('%TypeError%');
var IsArray = require("eb2b10223841d551");
var $apply = GetIntrinsic('%Reflect.apply%', true) || callBound('%Function.prototype.apply%');
// https://ecma-international.org/ecma-262/6.0/#sec-call
module.exports = function Call(F, V) {
    var argumentsList = arguments.length > 2 ? arguments[2] : [];
    if (!IsArray(argumentsList)) throw new $TypeError('Assertion failed: optional `argumentsList`, if provided, must be a List');
    return $apply(F, V, argumentsList);
};

},{"447d82215044f836":"fLGpS","d8c8ddcd2d212f8a":"fflB1","eb2b10223841d551":"cepgx"}],"a27FM":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("a188d143b5ff1729");
var $TypeError = GetIntrinsic('%TypeError%');
var inspect = require("fde3b1ac18f774b6");
var IsPropertyKey = require("dfafa05257c67d30");
var Type = require("d2dd3fc6af28e42d");
// https://ecma-international.org/ecma-262/6.0/#sec-get-o-p
module.exports = function Get(O, P) {
    // 7.3.1.1
    if (Type(O) !== 'Object') throw new $TypeError('Assertion failed: Type(O) is not Object');
    // 7.3.1.2
    if (!IsPropertyKey(P)) throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));
    // 7.3.1.3
    return O[P];
};

},{"a188d143b5ff1729":"fLGpS","fde3b1ac18f774b6":"2jf08","dfafa05257c67d30":"htC4i","d2dd3fc6af28e42d":"9sdiO"}],"2jf08":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol') ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype // eslint-disable-line no-proto
 ? function(O) {
    return O.__proto__; // eslint-disable-line no-proto
} : null);
function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) return str;
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}
var utilInspect = require("faefcb1694f2ad90");
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
var quotes = {
    __proto__: null,
    'double': '"',
    single: "'"
};
var quoteREs = {
    __proto__: null,
    'double': /(["\\])/g,
    single: /(['\\])/g
};
module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has(opts, 'quoteStyle') && !has(quotes, opts.quoteStyle)) throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number' ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    if (has(opts, 'indent') && opts.indent !== null && opts.indent !== '\t' && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === 'undefined') return 'undefined';
    if (obj === null) return 'null';
    if (typeof obj === 'boolean') return obj ? 'true' : 'false';
    if (typeof obj === 'string') return inspectString(obj, opts);
    if (typeof obj === 'number') {
        if (obj === 0) return Infinity / obj > 0 ? '0' : '-0';
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') depth = 0;
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') return isArray(obj) ? '[Array]' : '[Object]';
    var indent = getIndent(opts, depth);
    if (typeof seen === 'undefined') seen = [];
    else if (indexOf(seen, obj) >= 0) return '[Circular]';
    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) newOpts.quoteStyle = opts.quoteStyle;
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === 'function' && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for(var i = 0; i < attrs.length; i++)s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        s += '>';
        if (obj.childNodes && obj.childNodes.length) s += '...';
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) return '[]';
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) return '[' + indentedJoin(xs, indent) + ']';
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        if (parts.length === 0) return '[' + String(obj) + ']';
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) return utilInspect(obj, {
            depth: maxDepth - depth
        });
        else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') return obj.inspect();
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) return weakCollectionOf('WeakMap');
    if (isWeakSet(obj)) return weakCollectionOf('WeakSet');
    if (isWeakRef(obj)) return weakCollectionOf('WeakRef');
    if (isNumber(obj)) return markBoxed(inspect(Number(obj)));
    if (isBigInt(obj)) return markBoxed(inspect(bigIntValueOf.call(obj)));
    if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
    if (isString(obj)) return markBoxed(inspect(String(obj)));
    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
    /* eslint-env browser */ if (typeof window !== 'undefined' && obj === window) return '{ [object Window] }';
    if (typeof globalThis !== 'undefined' && obj === globalThis || typeof global !== 'undefined' && obj === global) return '{ [object globalThis] }';
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) return tag + '{}';
        if (indent) return tag + '{' + indentedJoin(ys, indent) + '}';
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
    var style = opts.quoteStyle || defaultStyle;
    var quoteChar = quotes[style];
    return quoteChar + s + quoteChar;
}
function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}
function canTrustToString(obj) {
    return !toStringTag || !(typeof obj === 'object' && (toStringTag in obj || typeof obj[toStringTag] !== 'undefined'));
}
function isArray(obj) {
    return toStr(obj) === '[object Array]' && canTrustToString(obj);
}
function isDate(obj) {
    return toStr(obj) === '[object Date]' && canTrustToString(obj);
}
function isRegExp(obj) {
    return toStr(obj) === '[object RegExp]' && canTrustToString(obj);
}
function isError(obj) {
    return toStr(obj) === '[object Error]' && canTrustToString(obj);
}
function isString(obj) {
    return toStr(obj) === '[object String]' && canTrustToString(obj);
}
function isNumber(obj) {
    return toStr(obj) === '[object Number]' && canTrustToString(obj);
}
function isBoolean(obj) {
    return toStr(obj) === '[object Boolean]' && canTrustToString(obj);
}
// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) return obj && typeof obj === 'object' && obj instanceof Symbol;
    if (typeof obj === 'symbol') return true;
    if (!obj || typeof obj !== 'object' || !symToString) return false;
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}
function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) return false;
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
};
function has(obj, key) {
    return hasOwn.call(obj, key);
}
function toStr(obj) {
    return objectToString.call(obj);
}
function nameOf(f) {
    if (f.name) return f.name;
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) return m[1];
    return null;
}
function indexOf(xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}
function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') return false;
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') return false;
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') return false;
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}
function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') return false;
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') return false;
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isElement(x) {
    if (!x || typeof x !== 'object') return false;
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) return true;
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}
function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var quoteRE = quoteREs[opts.quoteStyle || 'single'];
    quoteRE.lastIndex = 0;
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, quoteRE, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}
function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) return '\\' + x;
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
    return 'Object(' + str + ')';
}
function weakCollectionOf(type) {
    return type + ' { ? }';
}
function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}
function singleLineValues(xs) {
    for(var i = 0; i < xs.length; i++){
        if (indexOf(xs[i], '\n') >= 0) return false;
    }
    return true;
}
function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') baseIndent = '\t';
    else if (typeof opts.indent === 'number' && opts.indent > 0) baseIndent = $join.call(Array(opts.indent + 1), ' ');
    else return null;
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}
function indentedJoin(xs, indent) {
    if (xs.length === 0) return '';
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}
function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for(var i = 0; i < obj.length; i++)xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for(var k = 0; k < syms.length; k++)symMap['$' + syms[k]] = syms[k];
    }
    for(var key in obj){
        if (!has(obj, key)) continue;
         // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) continue;
         // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) continue; // eslint-disable-line no-restricted-syntax, no-continue
        else if ($test.call(/[^\w$]/, key)) xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        else xs.push(key + ': ' + inspect(obj[key], obj));
    }
    if (typeof gOPS === 'function') {
        for(var j = 0; j < syms.length; j++)if (isEnumerable.call(obj, syms[j])) xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
    }
    return xs;
}

},{"faefcb1694f2ad90":"9C0N7"}],"9C0N7":[function(require,module,exports,__globalThis) {
"use strict";

},{}],"6TG4B":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("35f6ca89562225a4");
var $TypeError = GetIntrinsic('%TypeError%');
var IsPropertyKey = require("9365afefe3cbe6b5");
var Type = require("d865c6ea03c010f");
// https://ecma-international.org/ecma-262/6.0/#sec-hasproperty
module.exports = function HasProperty(O, P) {
    if (Type(O) !== 'Object') throw new $TypeError('Assertion failed: `O` must be an Object');
    if (!IsPropertyKey(P)) throw new $TypeError('Assertion failed: `P` must be a Property Key');
    return P in O;
};

},{"35f6ca89562225a4":"fLGpS","9365afefe3cbe6b5":"htC4i","d865c6ea03c010f":"9sdiO"}],"gZ2h7":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("3de4d615125d9baa");
var $TypeError = GetIntrinsic('%TypeError%');
var Get = require("292baac0465c52f0");
var ToLength = require("84faa73f84d41f74");
var Type = require("8401966f77073141");
// https://262.ecma-international.org/11.0/#sec-lengthofarraylike
module.exports = function LengthOfArrayLike(obj) {
    if (Type(obj) !== 'Object') throw new $TypeError('Assertion failed: `obj` must be an Object');
    return ToLength(Get(obj, 'length'));
}; // TODO: use this all over

},{"3de4d615125d9baa":"fLGpS","292baac0465c52f0":"a27FM","84faa73f84d41f74":"guNVk","8401966f77073141":"9sdiO"}],"dudiQ":[function(require,module,exports,__globalThis) {
'use strict';
var arrayMethodBoxesProperly = require("8dd76e1f04ac4174");
var implementation = require("d0aecb8a9dbceb15");
module.exports = function getPolyfill() {
    var method = Array.prototype.reduce;
    return arrayMethodBoxesProperly(method) ? method : implementation;
};

},{"8dd76e1f04ac4174":"l2XiF","d0aecb8a9dbceb15":"9RcWc"}],"l2XiF":[function(require,module,exports,__globalThis) {
module.exports = function properlyBoxed(method) {
    // Check node 0.6.21 bug where third parameter is not boxed
    var properlyBoxesNonStrict = true;
    var properlyBoxesStrict = true;
    var threwException = false;
    if (typeof method === 'function') {
        try {
            // eslint-disable-next-line max-params
            method.call('f', function(_, __, O) {
                if (typeof O !== 'object') properlyBoxesNonStrict = false;
            });
            method.call([
                null
            ], function() {
                'use strict';
                properlyBoxesStrict = typeof this === 'string'; // eslint-disable-line no-invalid-this
            }, 'x');
        } catch (e) {
            threwException = true;
        }
        return !threwException && properlyBoxesNonStrict && properlyBoxesStrict;
    }
    return false;
};

},{}],"fhrxA":[function(require,module,exports,__globalThis) {
'use strict';
var define = require("9a77994828d54a4");
var getPolyfill = require("734a3aab13d8a2fa");
module.exports = function shimArrayPrototypeReduce() {
    var polyfill = getPolyfill();
    define(Array.prototype, {
        reduce: polyfill
    }, {
        reduce: function() {
            return Array.prototype.reduce !== polyfill;
        }
    });
    return polyfill;
};

},{"9a77994828d54a4":"a7y5v","734a3aab13d8a2fa":"dudiQ"}],"1bWIN":[function(require,module,exports,__globalThis) {
'use strict';
if (typeof Promise === 'function') require("ca99efc912f3d981"); // eslint-disable-line global-require
require("f48716813917ce7b");

},{"ca99efc912f3d981":"dVRqb","f48716813917ce7b":"3eEvY"}],"dVRqb":[function(require,module,exports,__globalThis) {
'use strict';
require("efa0c8ce92b0f2f4")();

},{"efa0c8ce92b0f2f4":"a4Oaz"}],"a4Oaz":[function(require,module,exports,__globalThis) {
'use strict';
var requirePromise = require("f9c27cce6d6f241c");
var getPolyfill = require("240c9e66c6b374b7");
var define = require("8b901a493157872c");
module.exports = function shimPromiseFinally() {
    requirePromise();
    var polyfill = getPolyfill();
    define(Promise.prototype, {
        'finally': polyfill
    }, {
        'finally': function testFinally() {
            return Promise.prototype['finally'] !== polyfill;
        }
    });
    return polyfill;
};

},{"f9c27cce6d6f241c":"17vVL","240c9e66c6b374b7":"lmzzK","8b901a493157872c":"a7y5v"}],"17vVL":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function requirePromise() {
    if (typeof Promise !== 'function') throw new TypeError('`Promise.prototype.finally` requires a global `Promise` be available.');
};

},{}],"lmzzK":[function(require,module,exports,__globalThis) {
'use strict';
var requirePromise = require("3eda6a41a96ca88c");
var implementation = require("361e3d22026f3448");
module.exports = function getPolyfill() {
    requirePromise();
    return typeof Promise.prototype['finally'] === 'function' ? Promise.prototype['finally'] : implementation;
};

},{"3eda6a41a96ca88c":"17vVL","361e3d22026f3448":"6Ac89"}],"6Ac89":[function(require,module,exports,__globalThis) {
'use strict';
var requirePromise = require("8e4c28788c060");
requirePromise();
var IsCallable = require("378c8d15866e779f");
var SpeciesConstructor = require("fdde47d36adc95f");
var Type = require("5276a1b4d396f430");
var promiseResolve = function PromiseResolve(C, value) {
    return new C(function(resolve) {
        resolve(value);
    });
};
var OriginalPromise = Promise;
var createThenFinally = function CreateThenFinally(C, onFinally) {
    return function(value) {
        var result = onFinally();
        var promise = promiseResolve(C, result);
        var valueThunk = function() {
            return value;
        };
        return promise.then(valueThunk);
    };
};
var createCatchFinally = function CreateCatchFinally(C, onFinally) {
    return function(reason) {
        var result = onFinally();
        var promise = promiseResolve(C, result);
        var thrower = function() {
            throw reason;
        };
        return promise.then(thrower);
    };
};
var promiseFinally = function finally_(onFinally) {
    /* eslint no-invalid-this: 0 */ var promise = this;
    if (Type(promise) !== 'Object') throw new TypeError('receiver is not an Object');
    var C = SpeciesConstructor(promise, OriginalPromise); // may throw
    var thenFinally = onFinally;
    var catchFinally = onFinally;
    if (IsCallable(onFinally)) {
        thenFinally = createThenFinally(C, onFinally);
        catchFinally = createCatchFinally(C, onFinally);
    }
    return promise.then(thenFinally, catchFinally);
};
if (Object.getOwnPropertyDescriptor) {
    var descriptor = Object.getOwnPropertyDescriptor(promiseFinally, 'name');
    if (descriptor && descriptor.configurable) Object.defineProperty(promiseFinally, 'name', {
        configurable: true,
        value: 'finally'
    });
}
module.exports = promiseFinally;

},{"8e4c28788c060":"17vVL","378c8d15866e779f":"2G3Oo","fdde47d36adc95f":"kM7aO","5276a1b4d396f430":"9sdiO"}],"kM7aO":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("18a2a2e035305fe1");
var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');
var IsConstructor = require("56972eb647b38b99");
var Type = require("2b340f0d711dfb87");
// https://ecma-international.org/ecma-262/6.0/#sec-speciesconstructor
module.exports = function SpeciesConstructor(O, defaultConstructor) {
    if (Type(O) !== 'Object') throw new $TypeError('Assertion failed: Type(O) is not Object');
    var C = O.constructor;
    if (typeof C === 'undefined') return defaultConstructor;
    if (Type(C) !== 'Object') throw new $TypeError('O.constructor is not an Object');
    var S = $species ? C[$species] : void 0;
    if (S == null) return defaultConstructor;
    if (IsConstructor(S)) return S;
    throw new $TypeError('no constructor found');
};

},{"18a2a2e035305fe1":"fLGpS","56972eb647b38b99":"18F6K","2b340f0d711dfb87":"9sdiO"}],"18F6K":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("def73ec533d407be");
var $construct = GetIntrinsic('%Reflect.construct%', true);
var DefinePropertyOrThrow = require("18fa6407af8a55a1");
try {
    DefinePropertyOrThrow({}, '', {
        '[[Get]]': function() {}
    });
} catch (e) {
    // Accessor properties aren't supported
    DefinePropertyOrThrow = null;
}
// https://ecma-international.org/ecma-262/6.0/#sec-isconstructor
if (DefinePropertyOrThrow && $construct) {
    var isConstructorMarker = {};
    var badArrayLike = {};
    DefinePropertyOrThrow(badArrayLike, 'length', {
        '[[Get]]': function() {
            throw isConstructorMarker;
        },
        '[[Enumerable]]': true
    });
    module.exports = function IsConstructor(argument) {
        try {
            // `Reflect.construct` invokes `IsConstructor(target)` before `Get(args, 'length')`:
            $construct(argument, badArrayLike);
        } catch (err) {
            return err === isConstructorMarker;
        }
    };
} else module.exports = function IsConstructor(argument) {
    // unfortunately there's no way to truly check this without try/catch `new argument` in old environments
    return typeof argument === 'function' && !!argument.prototype;
};

},{"def73ec533d407be":"9ca7a","18fa6407af8a55a1":"fzd9U"}],"9ca7a":[function(require,module,exports,__globalThis) {
'use strict';
// TODO: remove, semver-major
module.exports = require("31749184ab120120");

},{"31749184ab120120":"fLGpS"}],"fzd9U":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("ae88cb59ca593283");
var $TypeError = GetIntrinsic('%TypeError%');
var isPropertyDescriptor = require("62d2ff5779572046");
var DefineOwnProperty = require("c2f11a2a82b63d13");
var FromPropertyDescriptor = require("a0afdc49be6adbdc");
var IsAccessorDescriptor = require("f2087fdbb197613f");
var IsDataDescriptor = require("987f5f3ce12dcff4");
var IsPropertyKey = require("28ae826ab2964a79");
var SameValue = require("b86dbdaa71c8790e");
var ToPropertyDescriptor = require("fa8da23ca07cf541");
var Type = require("d32c2917ed1ebfd9");
// https://ecma-international.org/ecma-262/6.0/#sec-definepropertyorthrow
module.exports = function DefinePropertyOrThrow(O, P, desc) {
    if (Type(O) !== 'Object') throw new $TypeError('Assertion failed: Type(O) is not Object');
    if (!IsPropertyKey(P)) throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
    var Desc = isPropertyDescriptor({
        Type: Type,
        IsDataDescriptor: IsDataDescriptor,
        IsAccessorDescriptor: IsAccessorDescriptor
    }, desc) ? desc : ToPropertyDescriptor(desc);
    if (!isPropertyDescriptor({
        Type: Type,
        IsDataDescriptor: IsDataDescriptor,
        IsAccessorDescriptor: IsAccessorDescriptor
    }, Desc)) throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
    return DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, Desc);
};

},{"ae88cb59ca593283":"fLGpS","62d2ff5779572046":"hg34P","c2f11a2a82b63d13":"byRJT","a0afdc49be6adbdc":"3lkUI","f2087fdbb197613f":"SV6lm","987f5f3ce12dcff4":"aaKUH","28ae826ab2964a79":"htC4i","b86dbdaa71c8790e":"kFcOh","fa8da23ca07cf541":"5MVXU","d32c2917ed1ebfd9":"9sdiO"}],"hg34P":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("e21350cc4af84055");
var has = require("5e0763269bd11084");
var $TypeError = GetIntrinsic('%TypeError%');
module.exports = function IsPropertyDescriptor(ES, Desc) {
    if (ES.Type(Desc) !== 'Object') return false;
    var allowed = {
        '[[Configurable]]': true,
        '[[Enumerable]]': true,
        '[[Get]]': true,
        '[[Set]]': true,
        '[[Value]]': true,
        '[[Writable]]': true
    };
    for(var key in Desc){
        if (has(Desc, key) && !allowed[key]) return false;
    }
    if (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
    return true;
};

},{"e21350cc4af84055":"fLGpS","5e0763269bd11084":"mx2eX"}],"SV6lm":[function(require,module,exports,__globalThis) {
'use strict';
var has = require("1f45c4e0f05935af");
var assertRecord = require("1c90cc3391ad2101");
var Type = require("fdef8830f811a0ae");
// https://ecma-international.org/ecma-262/6.0/#sec-isaccessordescriptor
module.exports = function IsAccessorDescriptor(Desc) {
    if (typeof Desc === 'undefined') return false;
    assertRecord(Type, 'Property Descriptor', 'Desc', Desc);
    if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) return false;
    return true;
};

},{"1f45c4e0f05935af":"mx2eX","1c90cc3391ad2101":"5aBvn","fdef8830f811a0ae":"9sdiO"}],"3eEvY":[function(require,module,exports,__globalThis) {
'use strict';
require("e53d1323db9a8783");
require("a22106a7771c4fb");
require("a6222df0379a877c");
require("b009544c7e271f21");
require("ebdce128d163a9f1");

},{"e53d1323db9a8783":"gDtdK","a22106a7771c4fb":"82mDk","a6222df0379a877c":"kyrG3","b009544c7e271f21":"499nJ","ebdce128d163a9f1":"iYW2Q"}],"gDtdK":[function(require,module,exports,__globalThis) {
'use strict';
require("30031b1c8402e2b4")();

},{"30031b1c8402e2b4":"iRnnB"}],"iRnnB":[function(require,module,exports,__globalThis) {
'use strict';
var define = require("2adc4c0ec56ea30a");
var shimUnscopables = require("ecbb6d4f75b7624");
var getPolyfill = require("cb6669c7b91f0ec");
module.exports = function shimFlat() {
    var polyfill = getPolyfill();
    define(Array.prototype, {
        flat: polyfill
    }, {
        flat: function() {
            return Array.prototype.flat !== polyfill;
        }
    });
    shimUnscopables('flat');
    return polyfill;
};

},{"2adc4c0ec56ea30a":"a7y5v","ecbb6d4f75b7624":"b5Pai","cb6669c7b91f0ec":"gV6Nl"}],"b5Pai":[function(require,module,exports,__globalThis) {
'use strict';
var has = require("48f37fa3e708bf07");
var hasUnscopables = typeof Symbol === 'function' && typeof Symbol.unscopables === 'symbol';
var map = hasUnscopables && Array.prototype[Symbol.unscopables];
var $TypeError = TypeError;
module.exports = function shimUnscopables(method) {
    if (typeof method !== 'string' || !method) throw new $TypeError('method must be a non-empty string');
    if (!has(Array.prototype, method)) throw new $TypeError('method must be on Array.prototype');
    if (hasUnscopables) map[method] = true;
};

},{"48f37fa3e708bf07":"mx2eX"}],"gV6Nl":[function(require,module,exports,__globalThis) {
'use strict';
var implementation = require("c82958d2d81d7816");
module.exports = function getPolyfill() {
    return Array.prototype.flat || implementation;
};

},{"c82958d2d81d7816":"ge358"}],"ge358":[function(require,module,exports,__globalThis) {
'use strict';
var ArraySpeciesCreate = require("8cfa6ea6a800d744");
var FlattenIntoArray = require("f54d2614e5aa245b");
var Get = require("701102a993b30e72");
var ToIntegerOrInfinity = require("4ba8f63794def6f7");
var ToLength = require("5d7b7421eec9b10b");
var ToObject = require("a495e8e07a5b86e7");
module.exports = function flat() {
    var O = ToObject(this);
    var sourceLen = ToLength(Get(O, 'length'));
    var depthNum = 1;
    if (arguments.length > 0 && typeof arguments[0] !== 'undefined') depthNum = ToIntegerOrInfinity(arguments[0]);
    var A = ArraySpeciesCreate(O, 0);
    FlattenIntoArray(A, O, sourceLen, 0, depthNum);
    return A;
};

},{"8cfa6ea6a800d744":"fntdM","f54d2614e5aa245b":"9kgUm","701102a993b30e72":"a27FM","4ba8f63794def6f7":"5PeK6","5d7b7421eec9b10b":"guNVk","a495e8e07a5b86e7":"fixrB"}],"fntdM":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("1f4bc6a7d8010e");
var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = GetIntrinsic('%TypeError%');
var ArrayCreate = require("e2ed5bee2fac5556");
var Get = require("be51ca867e0c3664");
var IsArray = require("b7b996dd97a892d6");
var IsConstructor = require("95852d15d2b226e4");
var IsIntegralNumber = require("d1975a8c1b2ea23b");
var Type = require("b56d81e5397671ba");
// https://ecma-international.org/ecma-262/12.0/#sec-arrayspeciescreate
module.exports = function ArraySpeciesCreate(originalArray, length) {
    if (!IsIntegralNumber(length) || length < 0) throw new $TypeError('Assertion failed: length must be an integer >= 0');
    var isArray = IsArray(originalArray);
    if (!isArray) return ArrayCreate(length);
    var C = Get(originalArray, 'constructor');
    // TODO: figure out how to make a cross-realm normal Array, a same-realm Array
    // if (IsConstructor(C)) {
    // 	if C is another realm's Array, C = undefined
    // 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
    // }
    if ($species && Type(C) === 'Object') {
        C = Get(C, $species);
        if (C === null) C = void 0;
    }
    if (typeof C === 'undefined') return ArrayCreate(length);
    if (!IsConstructor(C)) throw new $TypeError('C must be a constructor');
    return new C(length); // Construct(C, length);
};

},{"1f4bc6a7d8010e":"fLGpS","e2ed5bee2fac5556":"b3yIm","be51ca867e0c3664":"a27FM","b7b996dd97a892d6":"cepgx","95852d15d2b226e4":"18F6K","d1975a8c1b2ea23b":"dYN7k","b56d81e5397671ba":"9sdiO"}],"b3yIm":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("1b9a48454e930e19");
var $ArrayPrototype = GetIntrinsic('%Array.prototype%');
var $RangeError = GetIntrinsic('%RangeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');
var $TypeError = GetIntrinsic('%TypeError%');
var IsIntegralNumber = require("f39d27a3b10b5b9b");
var MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;
var $setProto = GetIntrinsic('%Object.setPrototypeOf%', true) || // eslint-disable-next-line no-proto, no-negated-condition
([].__proto__ !== $ArrayPrototype ? null : function(O, proto) {
    O.__proto__ = proto; // eslint-disable-line no-proto, no-param-reassign
    return O;
});
// https://www.ecma-international.org/ecma-262/12.0/#sec-arraycreate
module.exports = function ArrayCreate(length) {
    if (!IsIntegralNumber(length) || length < 0) throw new $TypeError('Assertion failed: `length` must be an integer Number >= 0');
    if (length > MAX_ARRAY_LENGTH) throw new $RangeError('length is greater than (2**32 - 1)');
    var proto = arguments.length > 1 ? arguments[1] : $ArrayPrototype;
    var A = []; // steps 3, 5
    if (proto !== $ArrayPrototype) {
        if (!$setProto) throw new $SyntaxError('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');
        $setProto(A, proto);
    }
    if (length !== 0) A.length = length;
    /* step 6, the above as a shortcut for the below
	OrdinaryDefineOwnProperty(A, 'length', {
		'[[Configurable]]': false,
		'[[Enumerable]]': false,
		'[[Value]]': length,
		'[[Writable]]': true
	});
	*/ return A;
};

},{"1b9a48454e930e19":"fLGpS","f39d27a3b10b5b9b":"dYN7k"}],"dYN7k":[function(require,module,exports,__globalThis) {
'use strict';
var abs = require("26ab922752970927");
var floor = require("7048519b52033ffd");
var Type = require("7e11d9988b196cf5");
var $isNaN = require("782c2f0e53023477");
var $isFinite = require("6a7789dc373f5f9b");
// https://tc39.es/ecma262/#sec-isintegralnumber
module.exports = function IsIntegralNumber(argument) {
    if (Type(argument) !== 'Number' || $isNaN(argument) || !$isFinite(argument)) return false;
    var absValue = abs(argument);
    return floor(absValue) === absValue;
};

},{"26ab922752970927":"9hhzr","7048519b52033ffd":"3rFdv","7e11d9988b196cf5":"9sdiO","782c2f0e53023477":"9Ute2","6a7789dc373f5f9b":"2YntB"}],"9kgUm":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("6a3e2b21dc521b22");
var $TypeError = GetIntrinsic('%TypeError%');
var MAX_SAFE_INTEGER = require("8e36ca907126d662");
var Call = require("ef662283bc5b77");
var CreateDataPropertyOrThrow = require("e111f01b281846a5");
var Get = require("4dbe060896c0d442");
var HasProperty = require("120cf55c2ea87c4d");
var IsArray = require("b58e33aed9aa75f9");
var LengthOfArrayLike = require("2418518c516c6709");
var ToString = require("956cf53b398f26d2");
// https://262.ecma-international.org/11.0/#sec-flattenintoarray
// eslint-disable-next-line max-params
module.exports = function FlattenIntoArray(target, source, sourceLen, start, depth) {
    var mapperFunction;
    if (arguments.length > 5) mapperFunction = arguments[5];
    var targetIndex = start;
    var sourceIndex = 0;
    while(sourceIndex < sourceLen){
        var P = ToString(sourceIndex);
        var exists = HasProperty(source, P);
        if (exists === true) {
            var element = Get(source, P);
            if (typeof mapperFunction !== 'undefined') {
                if (arguments.length <= 6) throw new $TypeError('Assertion failed: thisArg is required when mapperFunction is provided');
                element = Call(mapperFunction, arguments[6], [
                    element,
                    sourceIndex,
                    source
                ]);
            }
            var shouldFlatten = false;
            if (depth > 0) shouldFlatten = IsArray(element);
            if (shouldFlatten) {
                var elementLen = LengthOfArrayLike(element);
                targetIndex = FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1);
            } else {
                if (targetIndex >= MAX_SAFE_INTEGER) throw new $TypeError('index too large');
                CreateDataPropertyOrThrow(target, ToString(targetIndex), element);
                targetIndex += 1;
            }
        }
        sourceIndex += 1;
    }
    return targetIndex;
};

},{"6a3e2b21dc521b22":"fLGpS","8e36ca907126d662":"iiAFM","ef662283bc5b77":"4Sjg6","e111f01b281846a5":"kSmy4","4dbe060896c0d442":"a27FM","120cf55c2ea87c4d":"6TG4B","b58e33aed9aa75f9":"cepgx","2418518c516c6709":"gZ2h7","956cf53b398f26d2":"ec6CI"}],"kSmy4":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("bb3d8feccf2e7564");
var $TypeError = GetIntrinsic('%TypeError%');
var CreateDataProperty = require("1a54958af6241e55");
var IsPropertyKey = require("24315446bd60a34b");
var Type = require("c34a19d31b6f7d11");
// // https://ecma-international.org/ecma-262/6.0/#sec-createdatapropertyorthrow
module.exports = function CreateDataPropertyOrThrow(O, P, V) {
    if (Type(O) !== 'Object') throw new $TypeError('Assertion failed: Type(O) is not Object');
    if (!IsPropertyKey(P)) throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
    var success = CreateDataProperty(O, P, V);
    if (!success) throw new $TypeError('unable to create data property');
    return success;
};

},{"bb3d8feccf2e7564":"fLGpS","1a54958af6241e55":"l3Cji","24315446bd60a34b":"htC4i","c34a19d31b6f7d11":"9sdiO"}],"82mDk":[function(require,module,exports,__globalThis) {
'use strict';
require("18021c33edc3e48e")();

},{"18021c33edc3e48e":"56uBo"}],"56uBo":[function(require,module,exports,__globalThis) {
'use strict';
var define = require("fb8dd97b111d629a");
var shimUnscopables = require("bf8ba7ff67fe6b1b");
var getPolyfill = require("dabea9e68583f0cd");
module.exports = function shimFlatMap() {
    var polyfill = getPolyfill();
    define(Array.prototype, {
        flatMap: polyfill
    }, {
        flatMap: function() {
            return Array.prototype.flatMap !== polyfill;
        }
    });
    shimUnscopables('flatMap');
    return polyfill;
};

},{"fb8dd97b111d629a":"a7y5v","bf8ba7ff67fe6b1b":"b5Pai","dabea9e68583f0cd":"dxMdb"}],"dxMdb":[function(require,module,exports,__globalThis) {
'use strict';
var implementation = require("24d42ee60ac4386c");
module.exports = function getPolyfill() {
    return Array.prototype.flatMap || implementation;
};

},{"24d42ee60ac4386c":"lJ3nc"}],"lJ3nc":[function(require,module,exports,__globalThis) {
'use strict';
var ArraySpeciesCreate = require("9f2557c5923723a1");
var FlattenIntoArray = require("3c2c03652d2d7ee9");
var Get = require("a1d32df738274c6a");
var IsCallable = require("f68392f08bdbaa1");
var ToLength = require("ca981bd21b894ffa");
var ToObject = require("16f74c51b3dd02ab");
module.exports = function flatMap(mapperFunction) {
    var O = ToObject(this);
    var sourceLen = ToLength(Get(O, 'length'));
    if (!IsCallable(mapperFunction)) throw new TypeError('mapperFunction must be a function');
    var T;
    if (arguments.length > 1) T = arguments[1];
    var A = ArraySpeciesCreate(O, 0);
    FlattenIntoArray(A, O, sourceLen, 0, 1, mapperFunction, T);
    return A;
};

},{"9f2557c5923723a1":"fntdM","3c2c03652d2d7ee9":"9kgUm","a1d32df738274c6a":"a27FM","f68392f08bdbaa1":"2G3Oo","ca981bd21b894ffa":"guNVk","16f74c51b3dd02ab":"fixrB"}],"kyrG3":[function(require,module,exports,__globalThis) {
'use strict';
require("2ff757cceda33d61")();

},{"2ff757cceda33d61":"5ovtI"}],"5ovtI":[function(require,module,exports,__globalThis) {
'use strict';
var hasSymbols = require("55dbd05ebcd83899")();
var polyfill = require("54dc79876d33ee49");
var getInferredName = require("b9570961f2ce11f4");
var gOPD = Object.getOwnPropertyDescriptor;
var gOPDs = require("72582493dca9299")();
var dP = Object.defineProperty;
var dPs = Object.defineProperties;
var setProto = Object.setPrototypeOf;
var define = function defineGetter(getter) {
    dP(Symbol.prototype, 'description', {
        configurable: true,
        enumerable: false,
        get: getter
    });
};
var shimGlobal = function shimGlobalSymbol(getter) {
    var origSym = Function.apply.bind(Symbol);
    var emptyStrings = Object.create ? Object.create(null) : {};
    var SymNew = function Symbol1() {
        var sym = origSym(this, arguments);
        if (arguments.length > 0 && arguments[0] === '') emptyStrings[sym] = true;
        return sym;
    };
    SymNew.prototype = Symbol.prototype;
    setProto(SymNew, Symbol);
    var props = gOPDs(Symbol);
    delete props.length;
    delete props.arguments;
    delete props.caller;
    dPs(SymNew, props);
    Symbol = SymNew; // eslint-disable-line no-native-reassign, no-global-assign
    var boundGetter = Function.call.bind(getter);
    var wrappedGetter = function description() {
        /* eslint no-invalid-this: 0 */ var symbolDescription = boundGetter(this);
        if (emptyStrings[this]) return '';
        return symbolDescription;
    };
    define(wrappedGetter);
    return wrappedGetter;
};
module.exports = function shimSymbolDescription() {
    if (!hasSymbols) return false;
    var desc = gOPD(Symbol.prototype, 'description');
    var getter = polyfill();
    var isMissing = !desc || typeof desc.get !== 'function';
    var isBroken = !isMissing && (typeof Symbol().description !== 'undefined' || Symbol('').description !== '');
    if (isMissing || isBroken) {
        if (!getInferredName) return shimGlobal(getter);
        define(getter);
    }
    return getter;
};

},{"55dbd05ebcd83899":"aTWGV","54dc79876d33ee49":"cN4MZ","b9570961f2ce11f4":"lih4P","72582493dca9299":"keSWB"}],"cN4MZ":[function(require,module,exports,__globalThis) {
'use strict';
var hasSymbols = require("b436f2e078211858")();
var implementation = require("d02e33731ea0f3b2");
var gOPD = Object.getOwnPropertyDescriptor;
module.exports = function descriptionPolyfill() {
    if (!hasSymbols || typeof gOPD !== 'function') return null;
    var desc = gOPD(Symbol.prototype, 'description');
    if (!desc || typeof desc.get !== 'function') return implementation;
    var emptySymbolDesc = desc.get.call(Symbol());
    var emptyDescValid = typeof emptySymbolDesc === 'undefined' || emptySymbolDesc === '';
    if (!emptyDescValid || desc.get.call(Symbol('a')) !== 'a') return implementation;
    return desc.get;
};

},{"b436f2e078211858":"aTWGV","d02e33731ea0f3b2":"DONdR"}],"DONdR":[function(require,module,exports,__globalThis) {
'use strict';
var getSymbolDescription = require("599a5cbe521256ce");
module.exports = function description() {
    return getSymbolDescription(this);
};

},{"599a5cbe521256ce":"h3wCB"}],"h3wCB":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("a9a5474951de1126");
var callBound = require("893bdd3daf376c9f");
var $SyntaxError = GetIntrinsic('%SyntaxError%');
var getGlobalSymbolDescription = GetIntrinsic('%Symbol.keyFor%', true);
var thisSymbolValue = callBound('%Symbol.prototype.valueOf%', true);
var symToStr = callBound('Symbol.prototype.toString', true);
var getInferredName = require("db06509802dd86af");
/* eslint-disable consistent-return */ module.exports = callBound('%Symbol.prototype.description%', true) || function getSymbolDescription(symbol) {
    if (!thisSymbolValue) throw new $SyntaxError('Symbols are not supported in this environment');
    // will throw if not a symbol primitive or wrapper object
    var sym = thisSymbolValue(symbol);
    if (getInferredName) {
        var name = getInferredName(sym);
        if (name === '') return;
        return name.slice(1, -1); // name.slice('['.length, -']'.length);
    }
    var desc;
    if (getGlobalSymbolDescription) {
        desc = getGlobalSymbolDescription(sym);
        if (typeof desc === 'string') return desc;
    }
    desc = symToStr(sym).slice(7, -1); // str.slice('Symbol('.length, -')'.length);
    if (desc) return desc;
};

},{"a9a5474951de1126":"fLGpS","893bdd3daf376c9f":"fflB1","db06509802dd86af":"lih4P"}],"lih4P":[function(require,module,exports,__globalThis) {
'use strict';
var getInferredName;
try {
    // eslint-disable-next-line no-new-func
    getInferredName = Function('s', 'return { [s]() {} }[s].name;');
} catch (e) {}
var inferred = function() {};
module.exports = getInferredName && inferred.name === 'inferred' ? getInferredName : null;

},{}],"499nJ":[function(require,module,exports,__globalThis) {
'use strict';
require("97f474c21847fd61")();

},{"97f474c21847fd61":"dkg01"}],"dkg01":[function(require,module,exports,__globalThis) {
'use strict';
var getPolyfill = require("f51a874141715a");
var define = require("8ee7ea87c1eefac");
module.exports = function shimEntries() {
    var polyfill = getPolyfill();
    define(Object, {
        fromEntries: polyfill
    }, {
        fromEntries: function testEntries() {
            return Object.fromEntries !== polyfill;
        }
    });
    return polyfill;
};

},{"f51a874141715a":"dCbA9","8ee7ea87c1eefac":"a7y5v"}],"dCbA9":[function(require,module,exports,__globalThis) {
'use strict';
var implementation = require("f9c3a6fb4288355e");
module.exports = function getPolyfill() {
    return typeof Object.fromEntries === 'function' ? Object.fromEntries : implementation;
};

},{"f9c3a6fb4288355e":"eWeyR"}],"eWeyR":[function(require,module,exports,__globalThis) {
'use strict';
var AddEntriesFromIterable = require("b329721be0887df1");
var CreateDataPropertyOrThrow = require("18efe7263f2280a0");
var RequireObjectCoercible = require("d264d0fdcf5f8886");
var ToPropertyKey = require("b858dcef00e55356");
var adder = function addDataProperty(key, value) {
    var O = this; // eslint-disable-line no-invalid-this
    var propertyKey = ToPropertyKey(key);
    CreateDataPropertyOrThrow(O, propertyKey, value);
};
module.exports = function fromEntries(iterable) {
    RequireObjectCoercible(iterable);
    return AddEntriesFromIterable({}, iterable, adder);
};

},{"b329721be0887df1":"3W6os","18efe7263f2280a0":"kSmy4","d264d0fdcf5f8886":"lEnxL","b858dcef00e55356":"6oJbn"}],"3W6os":[function(require,module,exports,__globalThis) {
'use strict';
var inspect = require("e24b88d2ecdd9ab5");
var GetIntrinsic = require("bbd9a650e7849f08");
var $TypeError = GetIntrinsic('%TypeError%');
var Call = require("a4bfe525e697e77b");
var Get = require("697dbd63b2af34d9");
var GetIterator = require("4fdfb3eaae7d1221");
var IsCallable = require("d08faba417000fb3");
var IteratorClose = require("25d32932aaf6a762");
var IteratorStep = require("b8d45bf558073ce5");
var IteratorValue = require("fe66ab2b0cf761b8");
var Type = require("545629f208564728");
// https://262.ecma-international.org/10.0//#sec-add-entries-from-iterable
module.exports = function AddEntriesFromIterable(target, iterable, adder) {
    if (!IsCallable(adder)) throw new $TypeError('Assertion failed: `adder` is not callable');
    if (iterable == null) throw new $TypeError('Assertion failed: `iterable` is present, and not nullish');
    var iteratorRecord = GetIterator(iterable);
    while(true){
        var next = IteratorStep(iteratorRecord);
        if (!next) return target;
        var nextItem = IteratorValue(next);
        if (Type(nextItem) !== 'Object') {
            var error = new $TypeError('iterator next must return an Object, got ' + inspect(nextItem));
            return IteratorClose(iteratorRecord, function() {
                throw error;
            } // eslint-disable-line no-loop-func
            );
        }
        try {
            var k = Get(nextItem, '0');
            var v = Get(nextItem, '1');
            Call(adder, target, [
                k,
                v
            ]);
        } catch (e) {
            return IteratorClose(iteratorRecord, function() {
                throw e;
            });
        }
    }
};

},{"e24b88d2ecdd9ab5":"2jf08","bbd9a650e7849f08":"fLGpS","a4bfe525e697e77b":"4Sjg6","697dbd63b2af34d9":"a27FM","4fdfb3eaae7d1221":"5sVXr","d08faba417000fb3":"2G3Oo","25d32932aaf6a762":"6C0R5","b8d45bf558073ce5":"lD52J","fe66ab2b0cf761b8":"jBI8Q","545629f208564728":"9sdiO"}],"5sVXr":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("d03f41dcb91cb47e");
var $TypeError = GetIntrinsic('%TypeError%');
var $asyncIterator = GetIntrinsic('%Symbol.asyncIterator%', true);
var inspect = require("6aaa26e726595d83");
var hasSymbols = require("34117fe9f79ca681")();
var getIteratorMethod = require("9f8385ca9f333a7");
var AdvanceStringIndex = require("ee1b40ce3355aba6");
var Call = require("6e548c5fb09dd39");
var GetMethod = require("cce2729d97084aff");
var IsArray = require("fc061dd2b6214f6f");
var Type = require("86614591cd3baec6");
// https://262.ecma-international.org/9.0/#sec-getiterator
module.exports = function GetIterator(obj, hint, method) {
    var actualHint = hint;
    if (arguments.length < 2) actualHint = 'sync';
    if (actualHint !== 'sync' && actualHint !== 'async') throw new $TypeError("Assertion failed: `hint` must be one of 'sync' or 'async', got " + inspect(hint));
    var actualMethod = method;
    if (arguments.length < 3) {
        if (actualHint === 'async') {
            if (hasSymbols && $asyncIterator) actualMethod = GetMethod(obj, $asyncIterator);
            if (actualMethod === undefined) throw new $TypeError("async from sync iterators aren't currently supported");
        } else actualMethod = getIteratorMethod({
            AdvanceStringIndex: AdvanceStringIndex,
            GetMethod: GetMethod,
            IsArray: IsArray
        }, obj);
    }
    var iterator = Call(actualMethod, obj);
    if (Type(iterator) !== 'Object') throw new $TypeError('iterator must return an object');
    return iterator;
// TODO: This should return an IteratorRecord
/*
	var nextMethod = GetV(iterator, 'next');
	return {
		'[[Iterator]]': iterator,
		'[[NextMethod]]': nextMethod,
		'[[Done]]': false
	};
	*/ };

},{"d03f41dcb91cb47e":"fLGpS","6aaa26e726595d83":"2jf08","34117fe9f79ca681":"aTWGV","9f8385ca9f333a7":"e3nLG","ee1b40ce3355aba6":"jTY7R","6e548c5fb09dd39":"4Sjg6","cce2729d97084aff":"7sdQ4","fc061dd2b6214f6f":"cepgx","86614591cd3baec6":"9sdiO"}],"e3nLG":[function(require,module,exports,__globalThis) {
'use strict';
var hasSymbols = require("c851062e2f130c")();
var GetIntrinsic = require("45fac7f3af26f526");
var callBound = require("5c283b29627b823f");
var isString = require("6329f417e806b2e8");
var $iterator = GetIntrinsic('%Symbol.iterator%', true);
var $stringSlice = callBound('String.prototype.slice');
var $String = GetIntrinsic('%String%', true);
module.exports = function getIteratorMethod(ES, iterable) {
    var usingIterator;
    if (hasSymbols) usingIterator = ES.GetMethod(iterable, $iterator);
    else if (ES.IsArray(iterable)) usingIterator = function() {
        var i = -1;
        var arr = this; // eslint-disable-line no-invalid-this
        return {
            next: function() {
                i += 1;
                return {
                    done: i >= arr.length,
                    value: arr[i]
                };
            }
        };
    };
    else if (isString(iterable)) usingIterator = function() {
        var i = 0;
        return {
            next: function() {
                var nextIndex = ES.AdvanceStringIndex($String(iterable), i, true);
                var value = $stringSlice(iterable, i, nextIndex);
                i = nextIndex;
                return {
                    done: nextIndex > iterable.length,
                    value: value
                };
            }
        };
    };
    return usingIterator;
};

},{"c851062e2f130c":"aTWGV","45fac7f3af26f526":"fLGpS","5c283b29627b823f":"fflB1","6329f417e806b2e8":"6yytC"}],"jTY7R":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("c199b9a802a9087b");
var CodePointAt = require("f21e38aa2977d27");
var IsIntegralNumber = require("f041b65775f81710");
var Type = require("54d6c37ddfe9e27c");
var MAX_SAFE_INTEGER = require("a1d2e9964f46d9ba");
var $TypeError = GetIntrinsic('%TypeError%');
// https://ecma-international.org/ecma-262/12.0/#sec-advancestringindex
module.exports = function AdvanceStringIndex(S, index, unicode) {
    if (Type(S) !== 'String') throw new $TypeError('Assertion failed: `S` must be a String');
    if (!IsIntegralNumber(index) || index < 0 || index > MAX_SAFE_INTEGER) throw new $TypeError('Assertion failed: `length` must be an integer >= 0 and <= 2**53');
    if (Type(unicode) !== 'Boolean') throw new $TypeError('Assertion failed: `unicode` must be a Boolean');
    if (!unicode) return index + 1;
    var length = S.length;
    if (index + 1 >= length) return index + 1;
    var cp = CodePointAt(S, index);
    return index + cp['[[CodeUnitCount]]'];
};

},{"c199b9a802a9087b":"fLGpS","f21e38aa2977d27":"8JgBQ","f041b65775f81710":"dYN7k","54d6c37ddfe9e27c":"9sdiO","a1d2e9964f46d9ba":"iiAFM"}],"8JgBQ":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("ab8d1456cb8ec7e");
var $TypeError = GetIntrinsic('%TypeError%');
var callBound = require("125880f404922fca");
var isLeadingSurrogate = require("5a74f50201ecba79");
var isTrailingSurrogate = require("118172a9fc1047d5");
var Type = require("3e71fd0f2b3a4b74");
var UTF16SurrogatePairToCodePoint = require("7a6483c7633bf384");
var $charAt = callBound('String.prototype.charAt');
var $charCodeAt = callBound('String.prototype.charCodeAt');
// https://ecma-international.org/ecma-262/12.0/#sec-codepointat
module.exports = function CodePointAt(string, position) {
    if (Type(string) !== 'String') throw new $TypeError('Assertion failed: `string` must be a String');
    var size = string.length;
    if (position < 0 || position >= size) throw new $TypeError('Assertion failed: `position` must be >= 0, and < the length of `string`');
    var first = $charCodeAt(string, position);
    var cp = $charAt(string, position);
    var firstIsLeading = isLeadingSurrogate(first);
    var firstIsTrailing = isTrailingSurrogate(first);
    if (!firstIsLeading && !firstIsTrailing) return {
        '[[CodePoint]]': cp,
        '[[CodeUnitCount]]': 1,
        '[[IsUnpairedSurrogate]]': false
    };
    if (firstIsTrailing || position + 1 === size) return {
        '[[CodePoint]]': cp,
        '[[CodeUnitCount]]': 1,
        '[[IsUnpairedSurrogate]]': true
    };
    var second = $charCodeAt(string, position + 1);
    if (!isTrailingSurrogate(second)) return {
        '[[CodePoint]]': cp,
        '[[CodeUnitCount]]': 1,
        '[[IsUnpairedSurrogate]]': true
    };
    return {
        '[[CodePoint]]': UTF16SurrogatePairToCodePoint(first, second),
        '[[CodeUnitCount]]': 2,
        '[[IsUnpairedSurrogate]]': false
    };
};

},{"ab8d1456cb8ec7e":"fLGpS","125880f404922fca":"fflB1","5a74f50201ecba79":"fjz8l","118172a9fc1047d5":"9912N","3e71fd0f2b3a4b74":"9sdiO","7a6483c7633bf384":"bu6BP"}],"fjz8l":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function isLeadingSurrogate(charCode) {
    return typeof charCode === 'number' && charCode >= 0xD800 && charCode <= 0xDBFF;
};

},{}],"9912N":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function isTrailingSurrogate(charCode) {
    return typeof charCode === 'number' && charCode >= 0xDC00 && charCode <= 0xDFFF;
};

},{}],"bu6BP":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("9db4ba08ed35ce8");
var $TypeError = GetIntrinsic('%TypeError%');
var $fromCharCode = GetIntrinsic('%String.fromCharCode%');
var isLeadingSurrogate = require("f298fe28c5e9ffc0");
var isTrailingSurrogate = require("7814af24db6ed8e6");
// https://tc39.es/ecma262/2020/#sec-utf16decodesurrogatepair
module.exports = function UTF16SurrogatePairToCodePoint(lead, trail) {
    if (!isLeadingSurrogate(lead) || !isTrailingSurrogate(trail)) throw new $TypeError('Assertion failed: `lead` must be a leading surrogate char code, and `trail` must be a trailing surrogate char code');
    // var cp = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
    return $fromCharCode(lead) + $fromCharCode(trail);
};

},{"9db4ba08ed35ce8":"fLGpS","f298fe28c5e9ffc0":"fjz8l","7814af24db6ed8e6":"9912N"}],"7sdQ4":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("965c07a7876d29cf");
var $TypeError = GetIntrinsic('%TypeError%');
var GetV = require("6243573e0c0b785");
var IsCallable = require("64f9ae160e1298f0");
var IsPropertyKey = require("f4fd6d8c0ec20ef1");
// https://ecma-international.org/ecma-262/6.0/#sec-getmethod
module.exports = function GetMethod(O, P) {
    // 7.3.9.1
    if (!IsPropertyKey(P)) throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
    // 7.3.9.2
    var func = GetV(O, P);
    // 7.3.9.4
    if (func == null) return void 0;
    // 7.3.9.5
    if (!IsCallable(func)) throw new $TypeError(P + 'is not a function');
    // 7.3.9.6
    return func;
};

},{"965c07a7876d29cf":"fLGpS","6243573e0c0b785":"2OsFo","64f9ae160e1298f0":"2G3Oo","f4fd6d8c0ec20ef1":"htC4i"}],"2OsFo":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("b84257a48844bc06");
var $TypeError = GetIntrinsic('%TypeError%');
var IsPropertyKey = require("2ad22299ccd053e6");
var ToObject = require("7cb0f5344fb54b30");
// https://ecma-international.org/ecma-262/6.0/#sec-getv
module.exports = function GetV(V, P) {
    // 7.3.2.1
    if (!IsPropertyKey(P)) throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
    // 7.3.2.2-3
    var O = ToObject(V);
    // 7.3.2.4
    return O[P];
};

},{"b84257a48844bc06":"fLGpS","2ad22299ccd053e6":"htC4i","7cb0f5344fb54b30":"fixrB"}],"6C0R5":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("d415fa32d73bc042");
var $TypeError = GetIntrinsic('%TypeError%');
var Call = require("fc59b0411e40e5a4");
var GetMethod = require("cc88ee8277b114a");
var IsCallable = require("5faef6964b23da2c");
var Type = require("6afcecf2eb89f48c");
// https://ecma-international.org/ecma-262/6.0/#sec-iteratorclose
module.exports = function IteratorClose(iterator, completion) {
    if (Type(iterator) !== 'Object') throw new $TypeError('Assertion failed: Type(iterator) is not Object');
    if (!IsCallable(completion)) throw new $TypeError('Assertion failed: completion is not a thunk for a Completion Record');
    var completionThunk = completion;
    var iteratorReturn = GetMethod(iterator, 'return');
    if (typeof iteratorReturn === 'undefined') return completionThunk();
    var completionRecord;
    try {
        var innerResult = Call(iteratorReturn, iterator, []);
    } catch (e) {
        // if we hit here, then "e" is the innerResult completion that needs re-throwing
        // if the completion is of type "throw", this will throw.
        completionThunk();
        completionThunk = null; // ensure it's not called twice.
        // if not, then return the innerResult completion
        throw e;
    }
    completionRecord = completionThunk(); // if innerResult worked, then throw if the completion does
    completionThunk = null; // ensure it's not called twice.
    if (Type(innerResult) !== 'Object') throw new $TypeError('iterator .return must return an object');
    return completionRecord;
};

},{"d415fa32d73bc042":"fLGpS","fc59b0411e40e5a4":"4Sjg6","cc88ee8277b114a":"7sdQ4","5faef6964b23da2c":"2G3Oo","6afcecf2eb89f48c":"9sdiO"}],"lD52J":[function(require,module,exports,__globalThis) {
'use strict';
var IteratorComplete = require("52f31cd160b65f06");
var IteratorNext = require("822084775e79f0f8");
// https://ecma-international.org/ecma-262/6.0/#sec-iteratorstep
module.exports = function IteratorStep(iterator) {
    var result = IteratorNext(iterator);
    var done = IteratorComplete(result);
    return done === true ? false : result;
};

},{"52f31cd160b65f06":"htnxN","822084775e79f0f8":"bP1fS"}],"htnxN":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("7627672db8b66f6");
var $TypeError = GetIntrinsic('%TypeError%');
var Get = require("c96ee6c6db1c1abc");
var ToBoolean = require("a54a2c14da9c5f60");
var Type = require("fed334ea902b1a73");
// https://ecma-international.org/ecma-262/6.0/#sec-iteratorcomplete
module.exports = function IteratorComplete(iterResult) {
    if (Type(iterResult) !== 'Object') throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
    return ToBoolean(Get(iterResult, 'done'));
};

},{"7627672db8b66f6":"fLGpS","c96ee6c6db1c1abc":"a27FM","a54a2c14da9c5f60":"3PmeR","fed334ea902b1a73":"9sdiO"}],"bP1fS":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("a7855a1511fb6f75");
var $TypeError = GetIntrinsic('%TypeError%');
var Invoke = require("39e63fe9d16b7238");
var Type = require("e8fcd2dc234e51a2");
// https://ecma-international.org/ecma-262/6.0/#sec-iteratornext
module.exports = function IteratorNext(iterator, value) {
    var result = Invoke(iterator, 'next', arguments.length < 2 ? [] : [
        value
    ]);
    if (Type(result) !== 'Object') throw new $TypeError('iterator next must return an object');
    return result;
};

},{"a7855a1511fb6f75":"fLGpS","39e63fe9d16b7238":"7k8Yr","e8fcd2dc234e51a2":"9sdiO"}],"7k8Yr":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("d52c025381c2bae5");
var $TypeError = GetIntrinsic('%TypeError%');
var Call = require("fe43f2ef3bbd8731");
var IsArray = require("4cd8efd4439232b4");
var GetV = require("2e7942f4bbee3c35");
var IsPropertyKey = require("59ec3a6645ae557d");
// https://ecma-international.org/ecma-262/6.0/#sec-invoke
module.exports = function Invoke(O, P) {
    if (!IsPropertyKey(P)) throw new $TypeError('Assertion failed: P must be a Property Key');
    var argumentsList = arguments.length > 2 ? arguments[2] : [];
    if (!IsArray(argumentsList)) throw new $TypeError('Assertion failed: optional `argumentsList`, if provided, must be a List');
    var func = GetV(O, P);
    return Call(func, O, argumentsList);
};

},{"d52c025381c2bae5":"fLGpS","fe43f2ef3bbd8731":"4Sjg6","4cd8efd4439232b4":"cepgx","2e7942f4bbee3c35":"2OsFo","59ec3a6645ae557d":"htC4i"}],"jBI8Q":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("388ed4ac2101eb2b");
var $TypeError = GetIntrinsic('%TypeError%');
var Get = require("2ae938405b9012e3");
var Type = require("41f8da704894e423");
// https://ecma-international.org/ecma-262/6.0/#sec-iteratorvalue
module.exports = function IteratorValue(iterResult) {
    if (Type(iterResult) !== 'Object') throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
    return Get(iterResult, 'value');
};

},{"388ed4ac2101eb2b":"fLGpS","2ae938405b9012e3":"a27FM","41f8da704894e423":"9sdiO"}],"6oJbn":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("ec81fe74a6b69e9");
var $String = GetIntrinsic('%String%');
var ToPrimitive = require("e4f2eacd1505537c");
var ToString = require("c29771cbcd961e59");
// https://ecma-international.org/ecma-262/6.0/#sec-topropertykey
module.exports = function ToPropertyKey(argument) {
    var key = ToPrimitive(argument, $String);
    return typeof key === 'symbol' ? key : ToString(key);
};

},{"ec81fe74a6b69e9":"fLGpS","e4f2eacd1505537c":"4O9Ar","c29771cbcd961e59":"ec6CI"}],"iYW2Q":[function(require,module,exports,__globalThis) {
'use strict';
require("ce9188074b74b039");
require("f7e0bcb4cc8ac7f0");
require("8eadfe186446e7");

},{"ce9188074b74b039":"1qGGF","f7e0bcb4cc8ac7f0":"4q4A0","8eadfe186446e7":"5hGJi"}],"1qGGF":[function(require,module,exports,__globalThis) {
'use strict';
require("99df30b0aa87f523")();

},{"99df30b0aa87f523":"11bm1"}],"11bm1":[function(require,module,exports,__globalThis) {
'use strict';
var define = require("a8eb24f1a1cb023c");
var hasSymbols = require("b4b53b3f94ea811d")();
var getPolyfill = require("b16c8ebfdbc9d24b");
var regexpMatchAllPolyfill = require("542930da5fd137b6");
var defineP = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
module.exports = function shimMatchAll() {
    var polyfill = getPolyfill();
    define(String.prototype, {
        matchAll: polyfill
    }, {
        matchAll: function() {
            return String.prototype.matchAll !== polyfill;
        }
    });
    if (hasSymbols) {
        // eslint-disable-next-line no-restricted-properties
        var symbol = Symbol.matchAll || (Symbol['for'] ? Symbol['for']('Symbol.matchAll') : Symbol('Symbol.matchAll'));
        define(Symbol, {
            matchAll: symbol
        }, {
            matchAll: function() {
                return Symbol.matchAll !== symbol;
            }
        });
        if (defineP && gOPD) {
            var desc = gOPD(Symbol, symbol);
            if (!desc || desc.configurable) defineP(Symbol, symbol, {
                configurable: false,
                enumerable: false,
                value: symbol,
                writable: false
            });
        }
        var regexpMatchAll = regexpMatchAllPolyfill();
        var func = {};
        func[symbol] = regexpMatchAll;
        var predicate = {};
        predicate[symbol] = function() {
            return RegExp.prototype[symbol] !== regexpMatchAll;
        };
        define(RegExp.prototype, func, predicate);
    }
    return polyfill;
};

},{"a8eb24f1a1cb023c":"a7y5v","b4b53b3f94ea811d":"aTWGV","b16c8ebfdbc9d24b":"cMmGD","542930da5fd137b6":"fxsfe"}],"cMmGD":[function(require,module,exports,__globalThis) {
'use strict';
var implementation = require("df3428d09b6a3a95");
module.exports = function getPolyfill() {
    if (String.prototype.matchAll) try {
        ''.matchAll(RegExp.prototype);
    } catch (e) {
        return String.prototype.matchAll;
    }
    return implementation;
};

},{"df3428d09b6a3a95":"axtB5"}],"axtB5":[function(require,module,exports,__globalThis) {
'use strict';
var Call = require("2892f9ac0ee916a3");
var Get = require("bdc8edc2e4d2369c");
var GetMethod = require("f91ac719c9e1a3d7");
var IsRegExp = require("c72ba30f0dadb6ac");
var ToString = require("99e0d6fac62a66c8");
var RequireObjectCoercible = require("260afab377675009");
var callBound = require("c83985157893b4cb");
var hasSymbols = require("51f5bc0d46af9819")();
var flagsGetter = require("c2645e360a038872");
var $indexOf = callBound('String.prototype.indexOf');
var regexpMatchAllPolyfill = require("da460c3c751ea6b7");
var getMatcher = function getMatcher(regexp) {
    var matcherPolyfill = regexpMatchAllPolyfill();
    if (hasSymbols && typeof Symbol.matchAll === 'symbol') {
        var matcher = GetMethod(regexp, Symbol.matchAll);
        if (matcher === RegExp.prototype[Symbol.matchAll] && matcher !== matcherPolyfill) return matcherPolyfill;
        return matcher;
    }
    // fallback for pre-Symbol.matchAll environments
    if (IsRegExp(regexp)) return matcherPolyfill;
};
module.exports = function matchAll(regexp) {
    var O = RequireObjectCoercible(this);
    if (typeof regexp !== 'undefined' && regexp !== null) {
        var isRegExp = IsRegExp(regexp);
        if (isRegExp) {
            // workaround for older engines that lack RegExp.prototype.flags
            var flags = 'flags' in regexp ? Get(regexp, 'flags') : flagsGetter(regexp);
            RequireObjectCoercible(flags);
            if ($indexOf(ToString(flags), 'g') < 0) throw new TypeError('matchAll requires a global regular expression');
        }
        var matcher = getMatcher(regexp);
        if (typeof matcher !== 'undefined') return Call(matcher, regexp, [
            O
        ]);
    }
    var S = ToString(O);
    // var rx = RegExpCreate(regexp, 'g');
    var rx = new RegExp(regexp, 'g');
    return Call(getMatcher(rx), rx, [
        S
    ]);
};

},{"2892f9ac0ee916a3":"4Sjg6","bdc8edc2e4d2369c":"a27FM","f91ac719c9e1a3d7":"7sdQ4","c72ba30f0dadb6ac":"evACX","99e0d6fac62a66c8":"ec6CI","260afab377675009":"lEnxL","c83985157893b4cb":"fflB1","51f5bc0d46af9819":"aTWGV","c2645e360a038872":"cqWqy","da460c3c751ea6b7":"fxsfe"}],"cqWqy":[function(require,module,exports,__globalThis) {
'use strict';
var define = require("234cd2776d15a037");
var callBind = require("6f662a760b1534f2");
var implementation = require("92a1454309a44466");
var getPolyfill = require("3ca514117a836edc");
var shim = require("e153862c910219d2");
var flagsBound = callBind(getPolyfill());
define(flagsBound, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = flagsBound;

},{"234cd2776d15a037":"a7y5v","6f662a760b1534f2":"jcpLY","92a1454309a44466":"7VDsU","3ca514117a836edc":"izCK7","e153862c910219d2":"6JMPa"}],"7VDsU":[function(require,module,exports,__globalThis) {
'use strict';
var functionsHaveConfigurableNames = require("6dc9c390938bc2ca").functionsHaveConfigurableNames();
var $Object = Object;
var $TypeError = TypeError;
module.exports = function flags() {
    if (this != null && this !== $Object(this)) throw new $TypeError('RegExp.prototype.flags getter called on non-object');
    var result = '';
    if (this.hasIndices) result += 'd';
    if (this.global) result += 'g';
    if (this.ignoreCase) result += 'i';
    if (this.multiline) result += 'm';
    if (this.dotAll) result += 's';
    if (this.unicode) result += 'u';
    if (this.sticky) result += 'y';
    return result;
};
if (functionsHaveConfigurableNames && Object.defineProperty) Object.defineProperty(module.exports, 'name', {
    value: 'get flags'
});

},{"6dc9c390938bc2ca":"61QTA"}],"izCK7":[function(require,module,exports,__globalThis) {
'use strict';
var implementation = require("758a981608e1eeda");
var supportsDescriptors = require("6f5c0dd77da656ca").supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
module.exports = function getPolyfill() {
    if (supportsDescriptors && /a/mig.flags === 'gim') {
        var descriptor = $gOPD(RegExp.prototype, 'flags');
        if (descriptor && typeof descriptor.get === 'function' && typeof RegExp.prototype.dotAll === 'boolean' && typeof RegExp.prototype.hasIndices === 'boolean') {
            /* eslint getter-return: 0 */ var calls = '';
            var o = {};
            Object.defineProperty(o, 'hasIndices', {
                get: function() {
                    calls += 'd';
                }
            });
            Object.defineProperty(o, 'sticky', {
                get: function() {
                    calls += 'y';
                }
            });
            if (calls === 'dy') return descriptor.get;
        }
    }
    return implementation;
};

},{"758a981608e1eeda":"7VDsU","6f5c0dd77da656ca":"a7y5v"}],"6JMPa":[function(require,module,exports,__globalThis) {
'use strict';
var supportsDescriptors = require("d860dcb1943639b0").supportsDescriptors;
var getPolyfill = require("cdfc6652a32f035d");
var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;
module.exports = function shimFlags() {
    if (!supportsDescriptors || !getProto) throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
    var polyfill = getPolyfill();
    var proto = getProto(regex);
    var descriptor = gOPD(proto, 'flags');
    if (!descriptor || descriptor.get !== polyfill) defineProperty(proto, 'flags', {
        configurable: true,
        enumerable: false,
        get: polyfill
    });
    return polyfill;
};

},{"d860dcb1943639b0":"a7y5v","cdfc6652a32f035d":"izCK7"}],"fxsfe":[function(require,module,exports,__globalThis) {
'use strict';
var hasSymbols = require("75fa6c7171e6cd7c")();
var regexpMatchAll = require("289f7e4f6dbda9b7");
module.exports = function getRegExpMatchAllPolyfill() {
    if (!hasSymbols || typeof Symbol.matchAll !== 'symbol' || typeof RegExp.prototype[Symbol.matchAll] !== 'function') return regexpMatchAll;
    return RegExp.prototype[Symbol.matchAll];
};

},{"75fa6c7171e6cd7c":"aTWGV","289f7e4f6dbda9b7":"1Cwhu"}],"1Cwhu":[function(require,module,exports,__globalThis) {
'use strict';
// var Construct = require('es-abstract/2021/Construct');
var CreateRegExpStringIterator = require("6e527beca42bb225");
var Get = require("77ef21cbf3dc9b51");
var Set = require("e5d5704c13fe2368");
var SpeciesConstructor = require("283852fceefae1b0");
var ToLength = require("da2e5f7b03dbf673");
var ToString = require("d10645ae4e1209d1");
var Type = require("58e913ba25be1ad");
var flagsGetter = require("ac1a10958f9655ae");
var callBound = require("3b69b6112ed01d75");
var $indexOf = callBound('String.prototype.indexOf');
var OrigRegExp = RegExp;
var supportsConstructingWithFlags = 'flags' in RegExp.prototype;
var constructRegexWithFlags = function constructRegex(C, R) {
    var matcher;
    // workaround for older engines that lack RegExp.prototype.flags
    var flags = 'flags' in R ? Get(R, 'flags') : ToString(flagsGetter(R));
    if (supportsConstructingWithFlags && typeof flags === 'string') matcher = new C(R, flags);
    else if (C === OrigRegExp) // workaround for older engines that can not construct a RegExp with flags
    matcher = new C(R.source, flags);
    else matcher = new C(R, flags);
    return {
        flags: flags,
        matcher: matcher
    };
};
var regexMatchAll = function SymbolMatchAll(string) {
    var R = this;
    if (Type(R) !== 'Object') throw new TypeError('"this" value must be an Object');
    var S = ToString(string);
    var C = SpeciesConstructor(R, OrigRegExp);
    var tmp = constructRegexWithFlags(C, R);
    // var flags = ToString(Get(R, 'flags'));
    var flags = tmp.flags;
    // var matcher = Construct(C, [R, flags]);
    var matcher = tmp.matcher;
    var lastIndex = ToLength(Get(R, 'lastIndex'));
    Set(matcher, 'lastIndex', lastIndex, true);
    var global = $indexOf(flags, 'g') > -1;
    var fullUnicode = $indexOf(flags, 'u') > -1;
    return CreateRegExpStringIterator(matcher, S, global, fullUnicode);
};
var defineP = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
if (defineP && gOPD) {
    var desc = gOPD(regexMatchAll, 'name');
    if (desc && desc.configurable) defineP(regexMatchAll, 'name', {
        value: '[Symbol.matchAll]'
    });
}
module.exports = regexMatchAll;

},{"6e527beca42bb225":"kqOMq","77ef21cbf3dc9b51":"a27FM","e5d5704c13fe2368":"3X7uT","283852fceefae1b0":"kM7aO","da2e5f7b03dbf673":"guNVk","d10645ae4e1209d1":"ec6CI","58e913ba25be1ad":"9sdiO","ac1a10958f9655ae":"cqWqy","3b69b6112ed01d75":"fflB1"}],"kqOMq":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("fb80dc84245e4a6b");
var hasSymbols = require("ece1907f5f0b91e3")();
var $TypeError = GetIntrinsic('%TypeError%');
var IteratorPrototype = GetIntrinsic('%IteratorPrototype%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var AdvanceStringIndex = require("d1ca430b3596a07f");
var CreateIterResultObject = require("70c9fd253d75c111");
var CreateMethodProperty = require("d1d5afd131a6ee3a");
var Get = require("fcaf197a57f884a0");
var OrdinaryObjectCreate = require("bac2fa2a6232466a");
var RegExpExec = require("36849bde8899f6b3");
var Set = require("cb08cc0b5744a113");
var ToLength = require("2eea972e8b3d9900");
var ToString = require("cb375d0e6ea1edce");
var Type = require("f6f56f1880cb7d42");
var SLOT = require("529959a901c38146");
var RegExpStringIterator = function RegExpStringIterator(R, S, global, fullUnicode) {
    if (Type(S) !== 'String') throw new $TypeError('`S` must be a string');
    if (Type(global) !== 'Boolean') throw new $TypeError('`global` must be a boolean');
    if (Type(fullUnicode) !== 'Boolean') throw new $TypeError('`fullUnicode` must be a boolean');
    SLOT.set(this, '[[IteratingRegExp]]', R);
    SLOT.set(this, '[[IteratedString]]', S);
    SLOT.set(this, '[[Global]]', global);
    SLOT.set(this, '[[Unicode]]', fullUnicode);
    SLOT.set(this, '[[Done]]', false);
};
if (IteratorPrototype) RegExpStringIterator.prototype = OrdinaryObjectCreate(IteratorPrototype);
var RegExpStringIteratorNext = function next() {
    var O = this; // eslint-disable-line no-invalid-this
    if (Type(O) !== 'Object') throw new $TypeError('receiver must be an object');
    if (!(O instanceof RegExpStringIterator) || !SLOT.has(O, '[[IteratingRegExp]]') || !SLOT.has(O, '[[IteratedString]]') || !SLOT.has(O, '[[Global]]') || !SLOT.has(O, '[[Unicode]]') || !SLOT.has(O, '[[Done]]')) throw new $TypeError('"this" value must be a RegExpStringIterator instance');
    if (SLOT.get(O, '[[Done]]')) return CreateIterResultObject(undefined, true);
    var R = SLOT.get(O, '[[IteratingRegExp]]');
    var S = SLOT.get(O, '[[IteratedString]]');
    var global = SLOT.get(O, '[[Global]]');
    var fullUnicode = SLOT.get(O, '[[Unicode]]');
    var match = RegExpExec(R, S);
    if (match === null) {
        SLOT.set(O, '[[Done]]', true);
        return CreateIterResultObject(undefined, true);
    }
    if (global) {
        var matchStr = ToString(Get(match, '0'));
        if (matchStr === '') {
            var thisIndex = ToLength(Get(R, 'lastIndex'));
            var nextIndex = AdvanceStringIndex(S, thisIndex, fullUnicode);
            Set(R, 'lastIndex', nextIndex, true);
        }
        return CreateIterResultObject(match, false);
    }
    SLOT.set(O, '[[Done]]', true);
    return CreateIterResultObject(match, false);
};
CreateMethodProperty(RegExpStringIterator.prototype, 'next', RegExpStringIteratorNext);
if (hasSymbols) {
    if (Symbol.toStringTag) {
        if ($defineProperty) $defineProperty(RegExpStringIterator.prototype, Symbol.toStringTag, {
            configurable: true,
            enumerable: false,
            value: 'RegExp String Iterator',
            writable: false
        });
        else RegExpStringIterator.prototype[Symbol.toStringTag] = 'RegExp String Iterator';
    }
    if (Symbol.iterator && typeof RegExpStringIterator.prototype[Symbol.iterator] !== 'function') {
        var iteratorFn = function SymbolIterator() {
            return this;
        };
        CreateMethodProperty(RegExpStringIterator.prototype, Symbol.iterator, iteratorFn);
    }
}
// https://262.ecma-international.org/11.0/#sec-createregexpstringiterator
module.exports = function CreateRegExpStringIterator(R, S, global, fullUnicode) {
    // assert R.global === global && R.unicode === fullUnicode?
    return new RegExpStringIterator(R, S, global, fullUnicode);
};

},{"fb80dc84245e4a6b":"fLGpS","ece1907f5f0b91e3":"aTWGV","d1ca430b3596a07f":"jTY7R","70c9fd253d75c111":"mPFJQ","d1d5afd131a6ee3a":"7hXIW","fcaf197a57f884a0":"a27FM","bac2fa2a6232466a":"9xsjL","36849bde8899f6b3":"eRkwv","cb08cc0b5744a113":"3X7uT","2eea972e8b3d9900":"guNVk","cb375d0e6ea1edce":"ec6CI","f6f56f1880cb7d42":"9sdiO","529959a901c38146":"gZ6Af"}],"mPFJQ":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("a02b28907fe4e4bc");
var $TypeError = GetIntrinsic('%TypeError%');
var Type = require("de51d254387c32");
// https://ecma-international.org/ecma-262/6.0/#sec-createiterresultobject
module.exports = function CreateIterResultObject(value, done) {
    if (Type(done) !== 'Boolean') throw new $TypeError('Assertion failed: Type(done) is not Boolean');
    return {
        value: value,
        done: done
    };
};

},{"a02b28907fe4e4bc":"fLGpS","de51d254387c32":"9sdiO"}],"7hXIW":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("a256cacabf028b45");
var $TypeError = GetIntrinsic('%TypeError%');
var DefineOwnProperty = require("40c5c6c0e4570f");
var FromPropertyDescriptor = require("a36fed33b864fb50");
var IsDataDescriptor = require("7e59553d64cfa866");
var IsPropertyKey = require("81b8e263a3515811");
var SameValue = require("af6ceb372ddb68ca");
var Type = require("8ee4d65bfb40c98e");
// https://ecma-international.org/ecma-262/6.0/#sec-createmethodproperty
module.exports = function CreateMethodProperty(O, P, V) {
    if (Type(O) !== 'Object') throw new $TypeError('Assertion failed: Type(O) is not Object');
    if (!IsPropertyKey(P)) throw new $TypeError('Assertion failed: IsPropertyKey(P) is not true');
    var newDesc = {
        '[[Configurable]]': true,
        '[[Enumerable]]': false,
        '[[Value]]': V,
        '[[Writable]]': true
    };
    return DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, newDesc);
};

},{"a256cacabf028b45":"fLGpS","40c5c6c0e4570f":"byRJT","a36fed33b864fb50":"3lkUI","7e59553d64cfa866":"aaKUH","81b8e263a3515811":"htC4i","af6ceb372ddb68ca":"kFcOh","8ee4d65bfb40c98e":"9sdiO"}],"9xsjL":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("a3dcf332d66460f4");
var $ObjectCreate = GetIntrinsic('%Object.create%', true);
var $TypeError = GetIntrinsic('%TypeError%');
var $SyntaxError = GetIntrinsic('%SyntaxError%');
var IsArray = require("e5fdbcc6e9d293f2");
var Type = require("e9bc23832529ecf9");
var hasProto = false;
// https://262.ecma-international.org/6.0/#sec-objectcreate
module.exports = function OrdinaryObjectCreate(proto) {
    if (proto !== null && Type(proto) !== 'Object') throw new $TypeError('Assertion failed: `proto` must be null or an object');
    var additionalInternalSlotsList = arguments.length < 2 ? [] : arguments[1];
    if (!IsArray(additionalInternalSlotsList)) throw new $TypeError('Assertion failed: `additionalInternalSlotsList` must be an Array');
    // var internalSlotsList = ['[[Prototype]]', '[[Extensible]]'];
    if (additionalInternalSlotsList.length > 0) throw new $SyntaxError('es-abstract does not yet support internal slots');
    // var O = MakeBasicObject(internalSlotsList);
    // setProto(O, proto);
    // return O;
    if ($ObjectCreate) return $ObjectCreate(proto);
    if (hasProto) return {
        __proto__: proto
    };
    if (proto === null) throw new $SyntaxError('native Object.create support is required to create null objects');
    var T = function T() {};
    T.prototype = proto;
    return new T();
};

},{"a3dcf332d66460f4":"fLGpS","e5fdbcc6e9d293f2":"cepgx","e9bc23832529ecf9":"9sdiO"}],"eRkwv":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("3ffda58749a44366");
var $TypeError = GetIntrinsic('%TypeError%');
var regexExec = require("a893e04bdb482237")('RegExp.prototype.exec');
var Call = require("3a7fa931fb73b2b5");
var Get = require("bae876cbfa0e48f0");
var IsCallable = require("71f880d4dcb86e98");
var Type = require("3547648c61fcee83");
// https://ecma-international.org/ecma-262/6.0/#sec-regexpexec
module.exports = function RegExpExec(R, S) {
    if (Type(R) !== 'Object') throw new $TypeError('Assertion failed: `R` must be an Object');
    if (Type(S) !== 'String') throw new $TypeError('Assertion failed: `S` must be a String');
    var exec = Get(R, 'exec');
    if (IsCallable(exec)) {
        var result = Call(exec, R, [
            S
        ]);
        if (result === null || Type(result) === 'Object') return result;
        throw new $TypeError('"exec" method must return `null` or an Object');
    }
    return regexExec(R, S);
};

},{"3ffda58749a44366":"fLGpS","a893e04bdb482237":"fflB1","3a7fa931fb73b2b5":"4Sjg6","bae876cbfa0e48f0":"a27FM","71f880d4dcb86e98":"2G3Oo","3547648c61fcee83":"9sdiO"}],"3X7uT":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("51b19cb50e2411ea");
var $TypeError = GetIntrinsic('%TypeError%');
var IsPropertyKey = require("4a111d2e55251af1");
var SameValue = require("1c52bd497be1a924");
var Type = require("183ba6a440b1a600");
// IE 9 does not throw in strict mode when writability/configurability/extensibility is violated
var noThrowOnStrictViolation = function() {
    try {
        delete [].length;
        return true;
    } catch (e) {
        return false;
    }
}();
// https://ecma-international.org/ecma-262/6.0/#sec-set-o-p-v-throw
module.exports = function Set(O, P, V, Throw) {
    if (Type(O) !== 'Object') throw new $TypeError('Assertion failed: `O` must be an Object');
    if (!IsPropertyKey(P)) throw new $TypeError('Assertion failed: `P` must be a Property Key');
    if (Type(Throw) !== 'Boolean') throw new $TypeError('Assertion failed: `Throw` must be a Boolean');
    if (Throw) {
        O[P] = V; // eslint-disable-line no-param-reassign
        if (noThrowOnStrictViolation && !SameValue(O[P], V)) throw new $TypeError('Attempted to assign to readonly property.');
        return true;
    }
    try {
        O[P] = V; // eslint-disable-line no-param-reassign
        return noThrowOnStrictViolation ? SameValue(O[P], V) : true;
    } catch (e) {
        return false;
    }
};

},{"51b19cb50e2411ea":"fLGpS","4a111d2e55251af1":"htC4i","1c52bd497be1a924":"kFcOh","183ba6a440b1a600":"9sdiO"}],"gZ6Af":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("83d3c1461f905a36");
var has = require("54e5a5a545e9ae71");
var channel = require("3f3258afb7cf97d7")();
var $TypeError = GetIntrinsic('%TypeError%');
var SLOT = {
    assert: function(O, slot) {
        if (!O || typeof O !== 'object' && typeof O !== 'function') throw new $TypeError('`O` is not an object');
        if (typeof slot !== 'string') throw new $TypeError('`slot` must be a string');
        channel.assert(O);
    },
    get: function(O, slot) {
        if (!O || typeof O !== 'object' && typeof O !== 'function') throw new $TypeError('`O` is not an object');
        if (typeof slot !== 'string') throw new $TypeError('`slot` must be a string');
        var slots = channel.get(O);
        return slots && slots['$' + slot];
    },
    has: function(O, slot) {
        if (!O || typeof O !== 'object' && typeof O !== 'function') throw new $TypeError('`O` is not an object');
        if (typeof slot !== 'string') throw new $TypeError('`slot` must be a string');
        var slots = channel.get(O);
        return !!slots && has(slots, '$' + slot);
    },
    set: function(O, slot, V) {
        if (!O || typeof O !== 'object' && typeof O !== 'function') throw new $TypeError('`O` is not an object');
        if (typeof slot !== 'string') throw new $TypeError('`slot` must be a string');
        var slots = channel.get(O);
        if (!slots) {
            slots = {};
            channel.set(O, slots);
        }
        slots['$' + slot] = V;
    }
};
if (Object.freeze) Object.freeze(SLOT);
module.exports = SLOT;

},{"83d3c1461f905a36":"fLGpS","54e5a5a545e9ae71":"mx2eX","3f3258afb7cf97d7":"cw1wW"}],"cw1wW":[function(require,module,exports,__globalThis) {
'use strict';
var $TypeError = require("1d3f7a3f029b095e");
var inspect = require("9f4f5a92d8c6543");
var getSideChannelList = require("5a169a7b609983a5");
var getSideChannelMap = require("e26eec6007592cd");
var getSideChannelWeakMap = require("a282926cb8532787");
var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
/** @type {import('.')} */ module.exports = function getSideChannel() {
    /** @typedef {ReturnType<typeof getSideChannel>} Channel */ /** @type {Channel | undefined} */ var $channelData;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) throw new $TypeError('Side channel does not contain ' + inspect(key));
        },
        'delete': function(key) {
            return !!$channelData && $channelData['delete'](key);
        },
        get: function(key) {
            return $channelData && $channelData.get(key);
        },
        has: function(key) {
            return !!$channelData && $channelData.has(key);
        },
        set: function(key, value) {
            if (!$channelData) $channelData = makeChannel();
            $channelData.set(key, value);
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
};

},{"1d3f7a3f029b095e":"kbpER","9f4f5a92d8c6543":"2jf08","5a169a7b609983a5":"fkqn7","e26eec6007592cd":"dtOkF","a282926cb8532787":"ltBtd"}],"fkqn7":[function(require,module,exports,__globalThis) {
'use strict';
var inspect = require("c82a24db877dbdb5");
var $TypeError = require("7492c0a54ac02a69");
/*
* This function traverses the list returning the node corresponding to the given key.
*
* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list.
* By doing so, all the recently used nodes can be accessed relatively quickly.
*/ /** @type {import('./list.d.ts').listGetNode} */ // eslint-disable-next-line consistent-return
var listGetNode = function(list, key, isDelete) {
    /** @type {typeof list | NonNullable<(typeof list)['next']>} */ var prev = list;
    /** @type {(typeof list)['next']} */ var curr;
    // eslint-disable-next-line eqeqeq
    for(; (curr = prev.next) != null; prev = curr)if (curr.key === key) {
        prev.next = curr.next;
        if (!isDelete) {
            // eslint-disable-next-line no-extra-parens
            curr.next = /** @type {NonNullable<typeof list.next>} */ list.next;
            list.next = curr; // eslint-disable-line no-param-reassign
        }
        return curr;
    }
};
/** @type {import('./list.d.ts').listGet} */ var listGet = function(objects, key) {
    if (!objects) return void 0;
    var node = listGetNode(objects, key);
    return node && node.value;
};
/** @type {import('./list.d.ts').listSet} */ var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) node.value = value;
    else // Prepend the new node to the beginning of the list
    objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */ {
        key: key,
        next: objects.next,
        value: value
    };
};
/** @type {import('./list.d.ts').listHas} */ var listHas = function(objects, key) {
    if (!objects) return false;
    return !!listGetNode(objects, key);
};
/** @type {import('./list.d.ts').listDelete} */ // eslint-disable-next-line consistent-return
var listDelete = function(objects, key) {
    if (objects) return listGetNode(objects, key, true);
};
/** @type {import('.')} */ module.exports = function getSideChannelList() {
    /** @typedef {ReturnType<typeof getSideChannelList>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {import('./list.d.ts').RootNode<V, K> | undefined} */ var $o;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) throw new $TypeError('Side channel does not contain ' + inspect(key));
        },
        'delete': function(key) {
            var root = $o && $o.next;
            var deletedNode = listDelete($o, key);
            if (deletedNode && root && root === deletedNode) $o = void 0;
            return !!deletedNode;
        },
        get: function(key) {
            return listGet($o, key);
        },
        has: function(key) {
            return listHas($o, key);
        },
        set: function(key, value) {
            if (!$o) // Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head
            $o = {
                next: void 0
            };
            // eslint-disable-next-line no-extra-parens
            listSet(/** @type {NonNullable<typeof $o>} */ $o, key, value);
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
};

},{"c82a24db877dbdb5":"2jf08","7492c0a54ac02a69":"kbpER"}],"dtOkF":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("a1eef823705394c3");
var callBound = require("5e33adfb500d5ba2");
var inspect = require("2202d24f09ef0ac8");
var $TypeError = require("2772cd2df080356f");
var $Map = GetIntrinsic('%Map%', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => V} */ var $mapGet = callBound('Map.prototype.get', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K, value: V) => void} */ var $mapSet = callBound('Map.prototype.set', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */ var $mapHas = callBound('Map.prototype.has', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */ var $mapDelete = callBound('Map.prototype.delete', true);
/** @type {<K, V>(thisArg: Map<K, V>) => number} */ var $mapSize = callBound('Map.prototype.size', true);
/** @type {import('.')} */ module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */ function getSideChannelMap() {
    /** @typedef {ReturnType<typeof getSideChannelMap>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {Map<K, V> | undefined} */ var $m;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) throw new $TypeError('Side channel does not contain ' + inspect(key));
        },
        'delete': function(key) {
            if ($m) {
                var result = $mapDelete($m, key);
                if ($mapSize($m) === 0) $m = void 0;
                return result;
            }
            return false;
        },
        get: function(key) {
            if ($m) return $mapGet($m, key);
        },
        has: function(key) {
            if ($m) return $mapHas($m, key);
            return false;
        },
        set: function(key, value) {
            if (!$m) // @ts-expect-error TS can't handle narrowing a variable inside a closure
            $m = new $Map();
            $mapSet($m, key, value);
        }
    };
    // @ts-expect-error TODO: figure out why TS is erroring here
    return channel;
};

},{"a1eef823705394c3":"fLGpS","5e33adfb500d5ba2":"2t71n","2202d24f09ef0ac8":"2jf08","2772cd2df080356f":"kbpER"}],"2t71n":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("90205503fa989ea7");
var callBindBasic = require("79b99f4b8fc521d");
/** @type {(thisArg: string, searchString: string, position?: number) => number} */ var $indexOf = callBindBasic([
    GetIntrinsic('%String.prototype.indexOf%')
]);
/** @type {import('.')} */ module.exports = function callBoundIntrinsic(name, allowMissing) {
    /* eslint no-extra-parens: 0 */ var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */ GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) return callBindBasic(/** @type {const} */ [
        intrinsic
    ]);
    return intrinsic;
};

},{"90205503fa989ea7":"fLGpS","79b99f4b8fc521d":"aW32R"}],"ltBtd":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("13f8b3ed6c08f802");
var callBound = require("fcc2ce3a04e4916a");
var inspect = require("92adfc822fa342a4");
var getSideChannelMap = require("1290b6babf3b47b6");
var $TypeError = require("2293e69a0f659b70");
var $WeakMap = GetIntrinsic('%WeakMap%', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => V} */ var $weakMapGet = callBound('WeakMap.prototype.get', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K, value: V) => void} */ var $weakMapSet = callBound('WeakMap.prototype.set', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */ var $weakMapHas = callBound('WeakMap.prototype.has', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */ var $weakMapDelete = callBound('WeakMap.prototype.delete', true);
/** @type {import('.')} */ module.exports = $WeakMap ? /** @type {Exclude<import('.'), false>} */ function getSideChannelWeakMap() {
    /** @typedef {ReturnType<typeof getSideChannelWeakMap>} Channel */ /** @typedef {Parameters<Channel['get']>[0]} K */ /** @typedef {Parameters<Channel['set']>[1]} V */ /** @type {WeakMap<K & object, V> | undefined} */ var $wm;
    /** @type {Channel | undefined} */ var $m;
    /** @type {Channel} */ var channel = {
        assert: function(key) {
            if (!channel.has(key)) throw new $TypeError('Side channel does not contain ' + inspect(key));
        },
        'delete': function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) return $weakMapDelete($wm, key);
            } else if (getSideChannelMap) {
                if ($m) return $m['delete'](key);
            }
            return false;
        },
        get: function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) return $weakMapGet($wm, key);
            }
            return $m && $m.get(key);
        },
        has: function(key) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if ($wm) return $weakMapHas($wm, key);
            }
            return !!$m && $m.has(key);
        },
        set: function(key, value) {
            if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
                if (!$wm) $wm = new $WeakMap();
                $weakMapSet($wm, key, value);
            } else if (getSideChannelMap) {
                if (!$m) $m = getSideChannelMap();
                // eslint-disable-next-line no-extra-parens
                /** @type {NonNullable<typeof $m>} */ $m.set(key, value);
            }
        }
    };
    // @ts-expect-error TODO: figure out why this is erroring
    return channel;
} : getSideChannelMap;

},{"13f8b3ed6c08f802":"fLGpS","fcc2ce3a04e4916a":"2t71n","92adfc822fa342a4":"2jf08","1290b6babf3b47b6":"dtOkF","2293e69a0f659b70":"kbpER"}],"4q4A0":[function(require,module,exports,__globalThis) {
'use strict';
require("806d0524f3d98698")();

},{"806d0524f3d98698":"3YIyU"}],"3YIyU":[function(require,module,exports,__globalThis) {
'use strict';
var define = require("eac8749572f6f344");
var getPolyfill = require("680f27145a8c5913");
module.exports = function shimGlobal() {
    var polyfill = getPolyfill();
    if (define.supportsDescriptors) {
        var descriptor = Object.getOwnPropertyDescriptor(polyfill, 'globalThis');
        if (!descriptor || descriptor.configurable && (descriptor.enumerable || !descriptor.writable || globalThis !== polyfill)) Object.defineProperty(polyfill, 'globalThis', {
            configurable: true,
            enumerable: false,
            value: polyfill,
            writable: true
        });
    } else if (typeof globalThis !== 'object' || globalThis !== polyfill) polyfill.globalThis = polyfill;
    return polyfill;
};

},{"eac8749572f6f344":"a7y5v","680f27145a8c5913":"43vqP"}],"43vqP":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
var implementation = require("fb113d0ba8699b03");
module.exports = function getPolyfill() {
    if (typeof global !== 'object' || !global || global.Math !== Math || global.Array !== Array) return implementation;
    return global;
};

},{"fb113d0ba8699b03":"cnLxo"}],"cnLxo":[function(require,module,exports,__globalThis) {
/* eslint no-negated-condition: 0, no-new-func: 0 */ 'use strict';
if (typeof self !== 'undefined') module.exports = self;
else if (typeof window !== 'undefined') module.exports = window;
else module.exports = Function('return this')();

},{}],"5hGJi":[function(require,module,exports,__globalThis) {
'use strict';
require("e91c765f1efb3342")();

},{"e91c765f1efb3342":"l0RYr"}],"l0RYr":[function(require,module,exports,__globalThis) {
'use strict';
var requirePromise = require("41bdd3502f380e1a");
var getPolyfill = require("30d6d819241a1cf2");
var define = require("809ab73aecc1a671");
module.exports = function shimAllSettled() {
    requirePromise();
    var polyfill = getPolyfill();
    define(Promise, {
        allSettled: polyfill
    }, {
        allSettled: function testAllSettled() {
            return Promise.allSettled !== polyfill;
        }
    });
    return polyfill;
};

},{"41bdd3502f380e1a":"3IboK","30d6d819241a1cf2":"fO3fy","809ab73aecc1a671":"a7y5v"}],"3IboK":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function requirePromise() {
    if (typeof Promise !== 'function') throw new TypeError('`Promise.allSettled` requires a global `Promise` be available.');
};

},{}],"fO3fy":[function(require,module,exports,__globalThis) {
'use strict';
var requirePromise = require("1ce1c19703b59dd6");
var implementation = require("11b329b75675b851");
module.exports = function getPolyfill() {
    requirePromise();
    return typeof Promise.allSettled === 'function' ? Promise.allSettled : implementation;
};

},{"1ce1c19703b59dd6":"3IboK","11b329b75675b851":"evIVs"}],"evIVs":[function(require,module,exports,__globalThis) {
'use strict';
var requirePromise = require("80bf43e30e5e294b");
requirePromise();
var PromiseResolve = require("72a03a17e3b3b0d6");
var Type = require("10709a2c792b8635");
var iterate = require("39f889d6d4496686");
var map = require("c6ff88c0fb92f52e");
var GetIntrinsic = require("48faede8dd71755c");
var callBind = require("4adceba8e386f20f");
var all = callBind(GetIntrinsic('%Promise.all%'));
var reject = callBind(GetIntrinsic('%Promise.reject%'));
module.exports = function allSettled(iterable) {
    var C = this;
    if (Type(C) !== 'Object') throw new TypeError('`this` value must be an object');
    var values = iterate(iterable);
    return all(C, map(values, function(item) {
        var onFulfill = function(value) {
            return {
                status: 'fulfilled',
                value: value
            };
        };
        var onReject = function(reason) {
            return {
                status: 'rejected',
                reason: reason
            };
        };
        var itemPromise = PromiseResolve(C, item);
        try {
            return itemPromise.then(onFulfill, onReject);
        } catch (e) {
            return reject(C, e);
        }
    }));
};

},{"80bf43e30e5e294b":"3IboK","72a03a17e3b3b0d6":"7qEXU","10709a2c792b8635":"9sdiO","39f889d6d4496686":"glsBj","c6ff88c0fb92f52e":"jNjK6","48faede8dd71755c":"fLGpS","4adceba8e386f20f":"jcpLY"}],"7qEXU":[function(require,module,exports,__globalThis) {
'use strict';
var GetIntrinsic = require("b169aa327f62cc55");
var callBind = require("92cf4ea46b5c04c2");
var $resolve = GetIntrinsic('%Promise.resolve%', true);
var $PromiseResolve = $resolve && callBind($resolve);
// https://262.ecma-international.org/9.0/#sec-promise-resolve
module.exports = function PromiseResolve(C, x) {
    if (!$PromiseResolve) throw new SyntaxError('This environment does not support Promises.');
    return $PromiseResolve(C, x);
};

},{"b169aa327f62cc55":"fLGpS","92cf4ea46b5c04c2":"jcpLY"}],"glsBj":[function(require,module,exports,__globalThis) {
'use strict';
var getIterator = require("a85d3b9f082a50ea");
var $TypeError = TypeError;
var iterate = require("697d7db1f7480467");
module.exports = function iterateValue(iterable) {
    var iterator = getIterator(iterable);
    if (!iterator) throw new $TypeError('non-iterable value provided');
    if (arguments.length > 1) return iterate(iterator, arguments[1]);
    return iterate(iterator);
};

},{"a85d3b9f082a50ea":"1fFmy","697d7db1f7480467":"apvIx"}],"1fFmy":[function(require,module,exports,__globalThis) {
'use strict';
/* eslint global-require: 0 */ // the code is structured this way so that bundlers can
// alias out `has-symbols` to `() => true` or `() => false` if your target
// environments' Symbol capabilities are known, and then use
// dead code elimination on the rest of this module.
//
// Similarly, `isarray` can be aliased to `Array.isArray` if
// available in all target environments.
var isArguments = require("6852acab7aecf9d6");
if (require("b6127dd0618ca580")() || require("4cedb8cfde480f45")()) {
    var $iterator = Symbol.iterator;
    // Symbol is available natively or shammed
    // natively:
    //  - Chrome >= 38
    //  - Edge 12-14?, Edge >= 15 for sure
    //  - FF >= 36
    //  - Safari >= 9
    //  - node >= 0.12
    module.exports = function getIterator(iterable) {
        // alternatively, `iterable[$iterator]?.()`
        if (iterable != null && typeof iterable[$iterator] !== 'undefined') return iterable[$iterator]();
        if (isArguments(iterable)) // arguments objects lack Symbol.iterator
        // - node 0.12
        return Array.prototype[$iterator].call(iterable);
    };
} else {
    // Symbol is not available, native or shammed
    var isArray = require("9e40df185bc98ad2");
    var isString = require("4408d389fb64535");
    var GetIntrinsic = require("1dadc710d71d74ba");
    var $Map = GetIntrinsic('%Map%', true);
    var $Set = GetIntrinsic('%Set%', true);
    var callBound = require("99235f8f305089d6");
    var $arrayPush = callBound('Array.prototype.push');
    var $charCodeAt = callBound('String.prototype.charCodeAt');
    var $stringSlice = callBound('String.prototype.slice');
    var advanceStringIndex = function advanceStringIndex(S, index) {
        var length = S.length;
        if (index + 1 >= length) return index + 1;
        var first = $charCodeAt(S, index);
        if (first < 0xD800 || first > 0xDBFF) return index + 1;
        var second = $charCodeAt(S, index + 1);
        if (second < 0xDC00 || second > 0xDFFF) return index + 1;
        return index + 2;
    };
    var getArrayIterator = function getArrayIterator(arraylike) {
        var i = 0;
        return {
            next: function next() {
                var done = i >= arraylike.length;
                var value;
                if (!done) {
                    value = arraylike[i];
                    i += 1;
                }
                return {
                    done: done,
                    value: value
                };
            }
        };
    };
    var getNonCollectionIterator = function getNonCollectionIterator(iterable, noPrimordialCollections) {
        if (isArray(iterable) || isArguments(iterable)) return getArrayIterator(iterable);
        if (isString(iterable)) {
            var i = 0;
            return {
                next: function next() {
                    var nextIndex = advanceStringIndex(iterable, i);
                    var value = $stringSlice(iterable, i, nextIndex);
                    i = nextIndex;
                    return {
                        done: nextIndex > iterable.length,
                        value: value
                    };
                }
            };
        }
        // es6-shim and es-shims' es-map use a string "_es6-shim iterator_" property on different iterables, such as MapIterator.
        if (noPrimordialCollections && typeof iterable['_es6-shim iterator_'] !== 'undefined') return iterable['_es6-shim iterator_']();
    };
    if (!$Map && !$Set) // the only language iterables are Array, String, arguments
    // - Safari <= 6.0
    // - Chrome < 38
    // - node < 0.12
    // - FF < 13
    // - IE < 11
    // - Edge < 11
    module.exports = function getIterator(iterable) {
        if (iterable != null) return getNonCollectionIterator(iterable, true);
    };
    else {
        // either Map or Set are available, but Symbol is not
        // - es6-shim on an ES5 browser
        // - Safari 6.2 (maybe 6.1?)
        // - FF v[13, 36)
        // - IE 11
        // - Edge 11
        // - Safari v[6, 9)
        var isMap = require("281327d695979bc1");
        var isSet = require("87d16ceb511608");
        // Firefox >= 27, IE 11, Safari 6.2 - 9, Edge 11, es6-shim in older envs, all have forEach
        var $mapForEach = callBound('Map.prototype.forEach', true);
        var $setForEach = callBound('Set.prototype.forEach', true);
        // Firefox 17 - 26 has `.iterator()`, whose iterator `.next()` either
        // returns a value, or throws a StopIteration object. These browsers
        // do not have any other mechanism for iteration.
        var $mapIterator = callBound('Map.prototype.iterator', true);
        var $setIterator = callBound('Set.prototype.iterator', true);
        var getStopIterationIterator = function(iterator) {
            var done = false;
            return {
                next: function next() {
                    try {
                        return {
                            done: done,
                            value: done ? undefined : iterator.next()
                        };
                    } catch (e) {
                        done = true;
                        return {
                            done: true,
                            value: undefined
                        };
                    }
                }
            };
        };
        // Firefox 27-35, and some older es6-shim versions, use a string "@@iterator" property
        // this returns a proper iterator object, so we should use it instead of forEach.
        // newer es6-shim versions use a string "_es6-shim iterator_" property.
        var $mapAtAtIterator = callBound('Map.prototype.@@iterator', true) || callBound('Map.prototype._es6-shim iterator_', true);
        var $setAtAtIterator = callBound('Set.prototype.@@iterator', true) || callBound('Set.prototype._es6-shim iterator_', true);
        var getCollectionIterator = function getCollectionIterator(iterable) {
            if (isMap(iterable)) {
                if ($mapIterator) return getStopIterationIterator($mapIterator(iterable));
                if ($mapAtAtIterator) return $mapAtAtIterator(iterable);
                if ($mapForEach) {
                    var entries = [];
                    $mapForEach(iterable, function(v, k) {
                        $arrayPush(entries, [
                            k,
                            v
                        ]);
                    });
                    return getArrayIterator(entries);
                }
            }
            if (isSet(iterable)) {
                if ($setIterator) return getStopIterationIterator($setIterator(iterable));
                if ($setAtAtIterator) return $setAtAtIterator(iterable);
                if ($setForEach) {
                    var values = [];
                    $setForEach(iterable, function(v) {
                        $arrayPush(values, v);
                    });
                    return getArrayIterator(values);
                }
            }
        };
        module.exports = function getIterator(iterable) {
            return getCollectionIterator(iterable) || getNonCollectionIterator(iterable);
        };
    }
}

},{"6852acab7aecf9d6":"8h2Wj","b6127dd0618ca580":"aTWGV","4cedb8cfde480f45":"aARZX","9e40df185bc98ad2":"jyXKp","4408d389fb64535":"6yytC","1dadc710d71d74ba":"fLGpS","99235f8f305089d6":"fflB1","281327d695979bc1":"4pEEA","87d16ceb511608":"9Jfb7"}],"8h2Wj":[function(require,module,exports,__globalThis) {
'use strict';
var hasToStringTag = require("e2b01ce809f132fb")();
var callBound = require("649cbf9949986a39");
var $toString = callBound('Object.prototype.toString');
var isStandardArguments = function isArguments(value) {
    if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) return false;
    return $toString(value) === '[object Arguments]';
};
var isLegacyArguments = function isArguments(value) {
    if (isStandardArguments(value)) return true;
    return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && $toString(value) !== '[object Array]' && $toString(value.callee) === '[object Function]';
};
var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
}();
isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests
module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

},{"e2b01ce809f132fb":"54EkR","649cbf9949986a39":"fflB1"}],"jyXKp":[function(require,module,exports,__globalThis) {
var toString = {}.toString;
module.exports = Array.isArray || function(arr) {
    return toString.call(arr) == '[object Array]';
};

},{}],"4pEEA":[function(require,module,exports,__globalThis) {
'use strict';
var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;
var exported;
if (!$Map) // eslint-disable-next-line no-unused-vars
exported = function isMap(x) {
    // `Map` is not present in this environment.
    return false;
};
var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$mapHas) // eslint-disable-next-line no-unused-vars
exported = function isMap(x) {
    // `Map` does not have a `has` method
    return false;
};
module.exports = exported || function isMap(x) {
    if (!x || typeof x !== 'object') return false;
    try {
        $mapHas.call(x);
        if ($setHas) try {
            $setHas.call(x);
        } catch (e) {
            return true;
        }
        return x instanceof $Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
};

},{}],"9Jfb7":[function(require,module,exports,__globalThis) {
'use strict';
var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;
var exported;
if (!$Set) // eslint-disable-next-line no-unused-vars
exported = function isSet(x) {
    // `Set` is not present in this environment.
    return false;
};
var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$setHas) // eslint-disable-next-line no-unused-vars
exported = function isSet(x) {
    // `Set` does not have a `has` method
    return false;
};
module.exports = exported || function isSet(x) {
    if (!x || typeof x !== 'object') return false;
    try {
        $setHas.call(x);
        if ($mapHas) try {
            $mapHas.call(x);
        } catch (e) {
            return true;
        }
        return x instanceof $Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
};

},{}],"apvIx":[function(require,module,exports,__globalThis) {
'use strict';
var $TypeError = TypeError;
// eslint-disable-next-line consistent-return
module.exports = function iterateIterator(iterator) {
    if (!iterator || typeof iterator.next !== 'function') throw new $TypeError('iterator must be an object with a `next` method');
    if (arguments.length > 1) {
        var callback = arguments[1];
        if (typeof callback !== 'function') throw new $TypeError('`callback`, if provided, must be a function');
    }
    var values = callback || [];
    var result;
    while((result = iterator.next()) && !result.done)if (callback) callback(result.value); // eslint-disable-line callback-return
    else values.push(result.value);
    if (!callback) return values;
};

},{}],"jNjK6":[function(require,module,exports,__globalThis) {
'use strict';
var define = require("cd24e29e4b5b5447");
var RequireObjectCoercible = require("b7aea2599e401741");
var callBound = require("66114783b343b48a");
var implementation = require("75067e500ebec519");
var getPolyfill = require("5f354709ed3f3017");
var polyfill = getPolyfill();
var shim = require("e5b005606ee0b7b8");
var $slice = callBound('Array.prototype.slice');
// eslint-disable-next-line no-unused-vars
var boundMapShim = function map(array, callbackfn) {
    RequireObjectCoercible(array);
    return polyfill.apply(array, $slice(arguments, 1));
};
define(boundMapShim, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = boundMapShim;

},{"cd24e29e4b5b5447":"a7y5v","b7aea2599e401741":"lEnxL","66114783b343b48a":"fflB1","75067e500ebec519":"1SRuB","5f354709ed3f3017":"2EFKj","e5b005606ee0b7b8":"1MjFH"}],"1SRuB":[function(require,module,exports,__globalThis) {
'use strict';
var ArraySpeciesCreate = require("a63750a6a9717f53");
var Call = require("2e4ac62bc94c7779");
var CreateDataPropertyOrThrow = require("1faeb9d06e220f4f");
var Get = require("8a4eb963a1a063db");
var HasProperty = require("32655d9cdc006b02");
var IsCallable = require("2d22d257501a7c46");
var ToUint32 = require("6d20456caf6b2c93");
var ToObject = require("f890267fcb1ae464");
var ToString = require("9ba2f3532307ffa6");
var callBound = require("2cb484e972ed0da4");
var isString = require("5f3d7dbce4e54d9c");
// Check failure of by-index access of string characters (IE < 9) and failure of `0 in boxedString` (Rhino)
var boxedString = Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);
var strSplit = callBound('String.prototype.split');
module.exports = function map(callbackfn) {
    var O = ToObject(this);
    var self = splitString && isString(O) ? strSplit(O, '') : O;
    var len = ToUint32(self.length);
    // If no callback function or if callback is not a callable function
    if (!IsCallable(callbackfn)) throw new TypeError('Array.prototype.map callback must be a function');
    var T;
    if (arguments.length > 1) T = arguments[1];
    var A = ArraySpeciesCreate(O, len);
    var k = 0;
    while(k < len){
        var Pk = ToString(k);
        var kPresent = HasProperty(O, Pk);
        if (kPresent) {
            var kValue = Get(O, Pk);
            var mappedValue = Call(callbackfn, T, [
                kValue,
                k,
                O
            ]);
            CreateDataPropertyOrThrow(A, Pk, mappedValue);
        }
        k += 1;
    }
    return A;
};

},{"a63750a6a9717f53":"fntdM","2e4ac62bc94c7779":"4Sjg6","1faeb9d06e220f4f":"kSmy4","8a4eb963a1a063db":"a27FM","32655d9cdc006b02":"6TG4B","2d22d257501a7c46":"2G3Oo","6d20456caf6b2c93":"jxH1w","f890267fcb1ae464":"fixrB","9ba2f3532307ffa6":"ec6CI","2cb484e972ed0da4":"fflB1","5f3d7dbce4e54d9c":"6yytC"}],"jxH1w":[function(require,module,exports,__globalThis) {
'use strict';
var ToNumber = require("701d028377e4378a");
// http://262.ecma-international.org/5.1/#sec-9.6
module.exports = function ToUint32(x) {
    return ToNumber(x) >>> 0;
};

},{"701d028377e4378a":"7t0Dk"}],"2EFKj":[function(require,module,exports,__globalThis) {
'use strict';
var arrayMethodBoxesProperly = require("8d3ac3e9bda0ea73");
var implementation = require("3b1b025780ae35cc");
module.exports = function getPolyfill() {
    var method = Array.prototype.map;
    return arrayMethodBoxesProperly(method) ? method : implementation;
};

},{"8d3ac3e9bda0ea73":"l2XiF","3b1b025780ae35cc":"1SRuB"}],"1MjFH":[function(require,module,exports,__globalThis) {
'use strict';
var define = require("c6c8fa768690a406");
var getPolyfill = require("77d10dafed18ab5");
module.exports = function shimArrayPrototypeMap() {
    var polyfill = getPolyfill();
    define(Array.prototype, {
        map: polyfill
    }, {
        map: function() {
            return Array.prototype.map !== polyfill;
        }
    });
    return polyfill;
};

},{"c6c8fa768690a406":"a7y5v","77d10dafed18ab5":"2EFKj"}],"jRi7f":[function(require,module,exports,__globalThis) {
var global = arguments[3];
'use strict';
/* eslint global-require: 0 */ // Fixes super-constructor calls in IE9/10
require("d9bb3bc5e1d8499b");
// document.contains polyfill
require("56e7232e18d9166f");
// console.* polyfill for old browsers
require("b694777a9bfb6fb");
require("c829b706c2e7a8a3");
if (typeof window !== 'undefined') {
    // Element.classList polyfill
    require("6add7748281745b5");
    // Element.closest polyfill
    require("172c01c4d0d7892f");
    // Polyfill for smooth scrolling behavior
    require("45117ec387f9784d").polyfill();
    // Polyfill window.matchMedia (primarily for IE9)
    require("135ce409ea6f0bd1");
    require("ab31ab03d03f8cf4");
    // Polyfill window.location.origin (for IE < 11)
    require("9c9059255917fb2b");
    // for <= IE 9, Opera mini
    require("a29345b8aac998e");
    require("17301276902f078");
    // KeyboardEvent.key shim
    require("c6c979a851691b48");
}
// :focus-visible shim
require("ef2507080cbd74f9");
require("4c427d076dc08d9c");
global.requestIdleCallback = require("a0dc39a3133626e1");
global.cancelIdleCallback = global.requestIdleCallback.cancelIdleCallback;
var hasSymbols = typeof Symbol === 'function' && Symbol.iterator;
/* globals TouchList */ if (hasSymbols && typeof TouchList === 'function' && typeof TouchList.prototype[Symbol.iterator] !== 'function') TouchList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

},{"d9bb3bc5e1d8499b":"bc1V1","56e7232e18d9166f":"c2OYn","b694777a9bfb6fb":"jylmO","c829b706c2e7a8a3":"8bfmY","6add7748281745b5":"exBsN","172c01c4d0d7892f":"26jJT","45117ec387f9784d":"7ZvTQ","135ce409ea6f0bd1":"7WYfx","ab31ab03d03f8cf4":"lltg0","9c9059255917fb2b":"hLfkP","a29345b8aac998e":"huJSR","17301276902f078":"h9rBz","c6c979a851691b48":"18w2a","ef2507080cbd74f9":"649KP","4c427d076dc08d9c":"2TKob","a0dc39a3133626e1":"8smV8"}],"bc1V1":[function(require,module,exports,__globalThis) {
(function() {
    var testObject = {};
    if (!(Object.setPrototypeOf || testObject.__proto__)) {
        var nativeGetPrototypeOf = Object.getPrototypeOf;
        Object.getPrototypeOf = function(object) {
            if (object.__proto__) return object.__proto__;
            else return nativeGetPrototypeOf.call(Object, object);
        };
    }
})();

},{}],"c2OYn":[function(require,module,exports,__globalThis) {
'use strict';
require("6b2b2c1d8acc5ec0");

},{"6b2b2c1d8acc5ec0":"3Qb0R"}],"3Qb0R":[function(require,module,exports,__globalThis) {
'use strict';
require("cdf926c89e5a74ba")();

},{"cdf926c89e5a74ba":"gCr0w"}],"gCr0w":[function(require,module,exports,__globalThis) {
'use strict';
var define = require("9cde9c12eb9fa3df");
var getPolyfill = require("aebbbc2adf8ec252");
module.exports = function shimContains() {
    var polyfill = getPolyfill();
    if (typeof document !== 'undefined') {
        define(document, {
            contains: polyfill
        }, {
            contains: function() {
                return document.contains !== polyfill;
            }
        });
        if (typeof Element !== 'undefined') define(Element.prototype, {
            contains: polyfill
        }, {
            contains: function() {
                return Element.prototype.contains !== polyfill;
            }
        });
    }
    return polyfill;
};

},{"9cde9c12eb9fa3df":"a7y5v","aebbbc2adf8ec252":"2ke1y"}],"2ke1y":[function(require,module,exports,__globalThis) {
'use strict';
var implementation = require("c672b5e8935fd9a5");
module.exports = function getPolyfill() {
    if (typeof document !== 'undefined') {
        if (document.contains) return document.contains;
        if (document.body && document.body.contains) try {
            if (typeof document.body.contains.call(document, '') === 'boolean') return document.body.contains;
        } catch (e) {}
    }
    return implementation;
};

},{"c672b5e8935fd9a5":"k3fNU"}],"k3fNU":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = function contains(other) {
    if (arguments.length < 1) throw new TypeError('1 argument is required');
    if (typeof other !== 'object') throw new TypeError("Argument 1 (\u201Dother\u201C) to Node.contains must be an instance of Node");
    var node = other;
    do {
        if (this === node) return true;
        if (node) node = node.parentNode;
    }while (node);
    return false;
};

},{}],"jylmO":[function(require,module,exports,__globalThis) {
// Console-polyfill. MIT license.
// https://github.com/paulmillr/console-polyfill
// Make it safe to do console.log() always.
(function(global) {
    'use strict';
    if (!global.console) global.console = {};
    var con = global.console;
    var prop, method;
    var dummy = function() {};
    var properties = [
        'memory'
    ];
    var methods = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(',');
    while(prop = properties.pop())if (!con[prop]) con[prop] = {};
    while(method = methods.pop())if (!con[method]) con[method] = dummy;
// Using `this` for web workers & supports Browserify / Webpack.
})(typeof window === 'undefined' ? this : window);

},{}],"8bfmY":[function(require,module,exports,__globalThis) {
(function(self1) {
    'use strict';
    if (self1.fetch) return;
    function normalizeName(name) {
        if (typeof name !== 'string') name = String(name);
        if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) throw new TypeError('Invalid character in header field name');
        return name.toLowerCase();
    }
    function normalizeValue(value) {
        if (typeof value !== 'string') value = String(value);
        return value;
    }
    function Headers(headers) {
        this.map = {};
        if (headers instanceof Headers) headers.forEach(function(value, name) {
            this.append(name, value);
        }, this);
        else if (headers) Object.getOwnPropertyNames(headers).forEach(function(name) {
            this.append(name, headers[name]);
        }, this);
    }
    Headers.prototype.append = function(name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var list = this.map[name];
        if (!list) {
            list = [];
            this.map[name] = list;
        }
        list.push(value);
    };
    Headers.prototype['delete'] = function(name) {
        delete this.map[normalizeName(name)];
    };
    Headers.prototype.get = function(name) {
        var values = this.map[normalizeName(name)];
        return values ? values[0] : null;
    };
    Headers.prototype.getAll = function(name) {
        return this.map[normalizeName(name)] || [];
    };
    Headers.prototype.has = function(name) {
        return this.map.hasOwnProperty(normalizeName(name));
    };
    Headers.prototype.set = function(name, value) {
        this.map[normalizeName(name)] = [
            normalizeValue(value)
        ];
    };
    Headers.prototype.forEach = function(callback, thisArg) {
        Object.getOwnPropertyNames(this.map).forEach(function(name) {
            this.map[name].forEach(function(value) {
                callback.call(thisArg, value, name, this);
            }, this);
        }, this);
    };
    function consumed(body) {
        if (body.bodyUsed) return Promise.reject(new TypeError('Already read'));
        body.bodyUsed = true;
    }
    function fileReaderReady(reader) {
        return new Promise(function(resolve, reject) {
            reader.onload = function() {
                resolve(reader.result);
            };
            reader.onerror = function() {
                reject(reader.error);
            };
        });
    }
    function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        return fileReaderReady(reader);
    }
    function readBlobAsText(blob) {
        var reader = new FileReader();
        reader.readAsText(blob);
        return fileReaderReady(reader);
    }
    var support = {
        blob: 'FileReader' in self1 && 'Blob' in self1 && function() {
            try {
                new Blob();
                return true;
            } catch (e) {
                return false;
            }
        }(),
        formData: 'FormData' in self1,
        arrayBuffer: 'ArrayBuffer' in self1
    };
    function Body() {
        this.bodyUsed = false;
        this._initBody = function(body) {
            this._bodyInit = body;
            if (typeof body === 'string') this._bodyText = body;
            else if (support.blob && Blob.prototype.isPrototypeOf(body)) this._bodyBlob = body;
            else if (support.formData && FormData.prototype.isPrototypeOf(body)) this._bodyFormData = body;
            else if (!body) this._bodyText = '';
            else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) ;
            else throw new Error('unsupported BodyInit type');
            if (!this.headers.get('content-type')) {
                if (typeof body === 'string') this.headers.set('content-type', 'text/plain;charset=UTF-8');
                else if (this._bodyBlob && this._bodyBlob.type) this.headers.set('content-type', this._bodyBlob.type);
            }
        };
        if (support.blob) {
            this.blob = function() {
                var rejected = consumed(this);
                if (rejected) return rejected;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                else if (this._bodyFormData) throw new Error('could not read FormData body as blob');
                else return Promise.resolve(new Blob([
                    this._bodyText
                ]));
            };
            this.arrayBuffer = function() {
                return this.blob().then(readBlobAsArrayBuffer);
            };
            this.text = function() {
                var rejected = consumed(this);
                if (rejected) return rejected;
                if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
                else if (this._bodyFormData) throw new Error('could not read FormData body as text');
                else return Promise.resolve(this._bodyText);
            };
        } else this.text = function() {
            var rejected = consumed(this);
            return rejected ? rejected : Promise.resolve(this._bodyText);
        };
        if (support.formData) this.formData = function() {
            return this.text().then(decode);
        };
        this.json = function() {
            return this.text().then(JSON.parse);
        };
        return this;
    }
    // HTTP methods whose capitalization should be normalized
    var methods = [
        'DELETE',
        'GET',
        'HEAD',
        'OPTIONS',
        'POST',
        'PUT'
    ];
    function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
    }
    function Request(input, options) {
        options = options || {};
        var body = options.body;
        if (Request.prototype.isPrototypeOf(input)) {
            if (input.bodyUsed) throw new TypeError('Already read');
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) this.headers = new Headers(input.headers);
            this.method = input.method;
            this.mode = input.mode;
            if (!body) {
                body = input._bodyInit;
                input.bodyUsed = true;
            }
        } else this.url = input;
        this.credentials = options.credentials || this.credentials || 'omit';
        if (options.headers || !this.headers) this.headers = new Headers(options.headers);
        this.method = normalizeMethod(options.method || this.method || 'GET');
        this.mode = options.mode || this.mode || null;
        this.referrer = null;
        if ((this.method === 'GET' || this.method === 'HEAD') && body) throw new TypeError('Body not allowed for GET or HEAD requests');
        this._initBody(body);
    }
    Request.prototype.clone = function() {
        return new Request(this);
    };
    function decode(body) {
        var form = new FormData();
        body.trim().split('&').forEach(function(bytes) {
            if (bytes) {
                var split = bytes.split('=');
                var name = split.shift().replace(/\+/g, ' ');
                var value = split.join('=').replace(/\+/g, ' ');
                form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
        });
        return form;
    }
    function headers(xhr) {
        var head = new Headers();
        var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n');
        pairs.forEach(function(header) {
            var split = header.trim().split(':');
            var key = split.shift().trim();
            var value = split.join(':').trim();
            head.append(key, value);
        });
        return head;
    }
    Body.call(Request.prototype);
    function Response(bodyInit, options) {
        if (!options) options = {};
        this.type = 'default';
        this.status = options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = options.statusText;
        this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
        this.url = options.url || '';
        this._initBody(bodyInit);
    }
    Body.call(Response.prototype);
    Response.prototype.clone = function() {
        return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
        });
    };
    Response.error = function() {
        var response = new Response(null, {
            status: 0,
            statusText: ''
        });
        response.type = 'error';
        return response;
    };
    var redirectStatuses = [
        301,
        302,
        303,
        307,
        308
    ];
    Response.redirect = function(url, status) {
        if (redirectStatuses.indexOf(status) === -1) throw new RangeError('Invalid status code');
        return new Response(null, {
            status: status,
            headers: {
                location: url
            }
        });
    };
    self1.Headers = Headers;
    self1.Request = Request;
    self1.Response = Response;
    self1.fetch = function(input, init) {
        return new Promise(function(resolve, reject) {
            var request;
            if (Request.prototype.isPrototypeOf(input) && !init) request = input;
            else request = new Request(input, init);
            var xhr = new XMLHttpRequest();
            function responseURL() {
                if ('responseURL' in xhr) return xhr.responseURL;
                // Avoid security warnings on getResponseHeader when not allowed by CORS
                if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) return xhr.getResponseHeader('X-Request-URL');
                return;
            }
            xhr.onload = function() {
                var status = xhr.status === 1223 ? 204 : xhr.status;
                if (status < 100 || status > 599) {
                    reject(new TypeError('Network request failed'));
                    return;
                }
                var options = {
                    status: status,
                    statusText: xhr.statusText,
                    headers: headers(xhr),
                    url: responseURL()
                };
                var body = 'response' in xhr ? xhr.response : xhr.responseText;
                resolve(new Response(body, options));
            };
            xhr.onerror = function() {
                reject(new TypeError('Network request failed'));
            };
            xhr.ontimeout = function() {
                reject(new TypeError('Network request failed'));
            };
            xhr.open(request.method, request.url, true);
            if (request.credentials === 'include') xhr.withCredentials = true;
            if ('responseType' in xhr && support.blob) xhr.responseType = 'blob';
            request.headers.forEach(function(value, name) {
                xhr.setRequestHeader(name, value);
            });
            xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
        });
    };
    self1.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);

},{}],"exBsN":[function(require,module,exports,__globalThis) {
/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20170427
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */ /*global self, document, DOMException */ /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */ if ("document" in window.self) {
    // Full polyfill for browsers with no classList support
    // Including IE < Edge missing SVGElement.classList
    if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) (function(view) {
        "use strict";
        if (!('Element' in view)) return;
        var classListProp = "classList", protoProp = "prototype", elemCtrProto = view.Element[protoProp], objCtr = Object, strTrim = String[protoProp].trim || function() {
            return this.replace(/^\s+|\s+$/g, "");
        }, arrIndexOf = Array[protoProp].indexOf || function(item) {
            var i = 0, len = this.length;
            for(; i < len; i++){
                if (i in this && this[i] === item) return i;
            }
            return -1;
        }, DOMEx = function(type, message) {
            this.name = type;
            this.code = DOMException[type];
            this.message = message;
        }, checkTokenAndGetIndex = function(classList, token) {
            if (token === "") throw new DOMEx("SYNTAX_ERR", "An invalid or illegal string was specified");
            if (/\s/.test(token)) throw new DOMEx("INVALID_CHARACTER_ERR", "String contains an invalid character");
            return arrIndexOf.call(classList, token);
        }, ClassList = function(elem) {
            var trimmedClasses = strTrim.call(elem.getAttribute("class") || ""), classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [], i = 0, len = classes.length;
            for(; i < len; i++)this.push(classes[i]);
            this._updateClassName = function() {
                elem.setAttribute("class", this.toString());
            };
        }, classListProto = ClassList[protoProp] = [], classListGetter = function() {
            return new ClassList(this);
        };
        // Most DOMException implementations don't allow calling DOMException's toString()
        // on non-DOMExceptions. Error's toString() is sufficient here.
        DOMEx[protoProp] = Error[protoProp];
        classListProto.item = function(i) {
            return this[i] || null;
        };
        classListProto.contains = function(token) {
            token += "";
            return checkTokenAndGetIndex(this, token) !== -1;
        };
        classListProto.add = function() {
            var tokens = arguments, i = 0, l = tokens.length, token, updated = false;
            do {
                token = tokens[i] + "";
                if (checkTokenAndGetIndex(this, token) === -1) {
                    this.push(token);
                    updated = true;
                }
            }while (++i < l);
            if (updated) this._updateClassName();
        };
        classListProto.remove = function() {
            var tokens = arguments, i = 0, l = tokens.length, token, updated = false, index;
            do {
                token = tokens[i] + "";
                index = checkTokenAndGetIndex(this, token);
                while(index !== -1){
                    this.splice(index, 1);
                    updated = true;
                    index = checkTokenAndGetIndex(this, token);
                }
            }while (++i < l);
            if (updated) this._updateClassName();
        };
        classListProto.toggle = function(token, force) {
            token += "";
            var result = this.contains(token), method = result ? force !== true && "remove" : force !== false && "add";
            if (method) this[method](token);
            if (force === true || force === false) return force;
            else return !result;
        };
        classListProto.toString = function() {
            return this.join(" ");
        };
        if (objCtr.defineProperty) {
            var classListPropDesc = {
                get: classListGetter,
                enumerable: true,
                configurable: true
            };
            try {
                objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
            } catch (ex) {
                // adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
                // modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
                if (ex.number === undefined || ex.number === -2146823252) {
                    classListPropDesc.enumerable = false;
                    objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                }
            }
        } else if (objCtr[protoProp].__defineGetter__) elemCtrProto.__defineGetter__(classListProp, classListGetter);
    })(window.self);
    // There is full or partial native classList support, so just check if we need
    // to normalize the add/remove and toggle APIs.
    (function() {
        "use strict";
        var testElement = document.createElement("_");
        testElement.classList.add("c1", "c2");
        // Polyfill for IE 10/11 and Firefox <26, where classList.add and
        // classList.remove exist but support only one argument at a time.
        if (!testElement.classList.contains("c2")) {
            var createMethod = function(method) {
                var original = DOMTokenList.prototype[method];
                DOMTokenList.prototype[method] = function(token) {
                    var i, len = arguments.length;
                    for(i = 0; i < len; i++){
                        token = arguments[i];
                        original.call(this, token);
                    }
                };
            };
            createMethod('add');
            createMethod('remove');
        }
        testElement.classList.toggle("c3", false);
        // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
        // support the second argument.
        if (testElement.classList.contains("c3")) {
            var _toggle = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(token, force) {
                if (1 in arguments && !this.contains(token) === !force) return force;
                else return _toggle.call(this, token);
            };
        }
        testElement = null;
    })();
}

},{}],"26jJT":[function(require,module,exports,__globalThis) {
// element-closest | CC0-1.0 | github.com/jonathantneal/closest
(function(ElementProto) {
    if (typeof ElementProto.matches !== 'function') ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
        var element = this;
        var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
        var index = 0;
        while(elements[index] && elements[index] !== element)++index;
        return Boolean(elements[index]);
    };
    if (typeof ElementProto.closest !== 'function') ElementProto.closest = function closest(selector) {
        var element = this;
        while(element && element.nodeType === 1){
            if (element.matches(selector)) return element;
            element = element.parentNode;
        }
        return null;
    };
})(window.Element.prototype);

},{}],"7ZvTQ":[function(require,module,exports,__globalThis) {
/*
 * smoothscroll polyfill - v0.3.5
 * https://iamdustan.github.io/smoothscroll
 * 2016 (c) Dustan Kasten, Jeremias Menichelli - MIT License
 */ (function(w, d, undefined) {
    'use strict';
    /*
   * aliases
   * w: window global object
   * d: document
   * undefined: undefined
   */ // polyfill
    function polyfill() {
        // return when scrollBehavior interface is supported
        if ('scrollBehavior' in d.documentElement.style) return;
        /*
     * globals
     */ var Element = w.HTMLElement || w.Element;
        var SCROLL_TIME = 468;
        /*
     * object gathering original scroll methods
     */ var original = {
            scroll: w.scroll || w.scrollTo,
            scrollBy: w.scrollBy,
            elScroll: Element.prototype.scroll || scrollElement,
            scrollIntoView: Element.prototype.scrollIntoView
        };
        /*
     * define timing method
     */ var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
        /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     */ function scrollElement(x, y) {
            this.scrollLeft = x;
            this.scrollTop = y;
        }
        /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */ function ease(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        }
        /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} x
     * @returns {Boolean}
     */ function shouldBailOut(x) {
            if (typeof x !== 'object' || x === null || x.behavior === undefined || x.behavior === 'auto' || x.behavior === 'instant') // first arg not an object/null
            // or behavior is auto, instant or undefined
            return true;
            if (typeof x === 'object' && x.behavior === 'smooth') // first argument is an object and behavior is smooth
            return false;
            // throw error when behavior is not supported
            throw new TypeError('behavior not valid');
        }
        /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */ function findScrollableParent(el) {
            var isBody;
            var hasScrollableSpace;
            var hasVisibleOverflow;
            do {
                el = el.parentNode;
                // set condition variables
                isBody = el === d.body;
                hasScrollableSpace = el.clientHeight < el.scrollHeight || el.clientWidth < el.scrollWidth;
                hasVisibleOverflow = w.getComputedStyle(el, null).overflow === 'visible';
            }while (!isBody && !(hasScrollableSpace && !hasVisibleOverflow));
            isBody = hasScrollableSpace = hasVisibleOverflow = null;
            return el;
        }
        /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     */ function step(context) {
            var time = now();
            var value;
            var currentX;
            var currentY;
            var elapsed = (time - context.startTime) / SCROLL_TIME;
            // avoid elapsed times higher than one
            elapsed = elapsed > 1 ? 1 : elapsed;
            // apply easing to elapsed time
            value = ease(elapsed);
            currentX = context.startX + (context.x - context.startX) * value;
            currentY = context.startY + (context.y - context.startY) * value;
            context.method.call(context.scrollable, currentX, currentY);
            // scroll more if we have not reached our destination
            if (currentX !== context.x || currentY !== context.y) w.requestAnimationFrame(step.bind(w, context));
        }
        /**
     * scrolls window with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     */ function smoothScroll(el, x, y) {
            var scrollable;
            var startX;
            var startY;
            var method;
            var startTime = now();
            // define scroll context
            if (el === d.body) {
                scrollable = w;
                startX = w.scrollX || w.pageXOffset;
                startY = w.scrollY || w.pageYOffset;
                method = original.scroll;
            } else {
                scrollable = el;
                startX = el.scrollLeft;
                startY = el.scrollTop;
                method = scrollElement;
            }
            // scroll looping over a frame
            step({
                scrollable: scrollable,
                method: method,
                startTime: startTime,
                startX: startX,
                startY: startY,
                x: x,
                y: y
            });
        }
        /*
     * ORIGINAL METHODS OVERRIDES
     */ // w.scroll and w.scrollTo
        w.scroll = w.scrollTo = function() {
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0])) {
                original.scroll.call(w, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
                return;
            }
            // LET THE SMOOTHNESS BEGIN!
            smoothScroll.call(w, d.body, ~~arguments[0].left, ~~arguments[0].top);
        };
        // w.scrollBy
        w.scrollBy = function() {
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0])) {
                original.scrollBy.call(w, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
                return;
            }
            // LET THE SMOOTHNESS BEGIN!
            smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
        };
        // Element.prototype.scroll and Element.prototype.scrollTo
        Element.prototype.scroll = Element.prototype.scrollTo = function() {
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0])) {
                original.elScroll.call(this, arguments[0].left || arguments[0], arguments[0].top || arguments[1]);
                return;
            }
            var left = arguments[0].left;
            var top = arguments[0].top;
            // LET THE SMOOTHNESS BEGIN!
            smoothScroll.call(this, this, typeof left === 'number' ? left : this.scrollLeft, typeof top === 'number' ? top : this.scrollTop);
        };
        // Element.prototype.scrollBy
        Element.prototype.scrollBy = function() {
            var arg0 = arguments[0];
            if (typeof arg0 === 'object') this.scroll({
                left: arg0.left + this.scrollLeft,
                top: arg0.top + this.scrollTop,
                behavior: arg0.behavior
            });
            else this.scroll(this.scrollLeft + arg0, this.scrollTop + arguments[1]);
        };
        // Element.prototype.scrollIntoView
        Element.prototype.scrollIntoView = function() {
            // avoid smooth behavior if not required
            if (shouldBailOut(arguments[0])) {
                original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
                return;
            }
            // LET THE SMOOTHNESS BEGIN!
            var scrollableParent = findScrollableParent(this);
            var parentRects = scrollableParent.getBoundingClientRect();
            var clientRects = this.getBoundingClientRect();
            if (scrollableParent !== d.body) {
                // reveal element inside parent
                smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);
                // reveal parent in viewport
                w.scrollBy({
                    left: parentRects.left,
                    top: parentRects.top,
                    behavior: 'smooth'
                });
            } else // reveal element in viewport
            w.scrollBy({
                left: clientRects.left,
                top: clientRects.top,
                behavior: 'smooth'
            });
        };
    }
    // commonjs
    module.exports = {
        polyfill: polyfill
    };
})(window, document);

},{}],"7WYfx":[function(require,module,exports,__globalThis) {
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license */ window.matchMedia || (window.matchMedia = function() {
    "use strict";
    // For browsers that support matchMedium api such as IE 9 and webkit
    var styleMedia = window.styleMedia || window.media;
    // For those that don't support matchMedium
    if (!styleMedia) {
        var style = document.createElement('style'), script = document.getElementsByTagName('script')[0], info = null;
        style.type = 'text/css';
        style.id = 'matchmediajs-test';
        if (!script) document.head.appendChild(style);
        else script.parentNode.insertBefore(style, script);
        // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
        info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;
        styleMedia = {
            matchMedium: function(media) {
                var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';
                // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
                if (style.styleSheet) style.styleSheet.cssText = text;
                else style.textContent = text;
                // Test if media query is true or false
                return info.width === '1px';
            }
        };
    }
    return function(media) {
        return {
            matches: styleMedia.matchMedium(media || 'all'),
            media: media || 'all'
        };
    };
}());

},{}],"lltg0":[function(require,module,exports,__globalThis) {
/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. MIT license */ (function() {
    // Bail out for browsers that have addListener support
    if (window.matchMedia && window.matchMedia('all').addListener) return false;
    var localMatchMedia = window.matchMedia, hasMediaQueries = localMatchMedia('only all').matches, isListening = false, timeoutID = 0, queries = [], handleChange = function(evt) {
        // Debounce
        clearTimeout(timeoutID);
        timeoutID = setTimeout(function() {
            for(var i = 0, il = queries.length; i < il; i++){
                var mql = queries[i].mql, listeners = queries[i].listeners || [], matches = localMatchMedia(mql.media).matches;
                // Update mql.matches value and call listeners
                // Fire listeners only if transitioning to or from matched state
                if (matches !== mql.matches) {
                    mql.matches = matches;
                    for(var j = 0, jl = listeners.length; j < jl; j++)listeners[j].call(window, mql);
                }
            }
        }, 30);
    };
    window.matchMedia = function(media) {
        var mql = localMatchMedia(media), listeners = [], index = 0;
        mql.addListener = function(listener) {
            // Changes would not occur to css media type so return now (Affects IE <= 8)
            if (!hasMediaQueries) return;
            // Set up 'resize' listener for browsers that support CSS3 media queries (Not for IE <= 8)
            // There should only ever be 1 resize listener running for performance
            if (!isListening) {
                isListening = true;
                window.addEventListener('resize', handleChange, true);
            }
            // Push object only if it has not been pushed already
            if (index === 0) index = queries.push({
                mql: mql,
                listeners: listeners
            });
            listeners.push(listener);
        };
        mql.removeListener = function(listener) {
            for(var i = 0, il = listeners.length; i < il; i++)if (listeners[i] === listener) listeners.splice(i, 1);
        };
        return mql;
    };
})();

},{}],"hLfkP":[function(require,module,exports,__globalThis) {
/* jshint browser:true
 *
 * window-location-origin - version 0.0.1
 * Add support for browsers that don't natively support window.location.origin
 *
 * Authror: Kyle Welsby <kyle@mekyle.com>
 * License: MIT
 */ (function(location) {
    'use strict';
    if (!location.origin) {
        var origin = location.protocol + "//" + location.hostname + (location.port && ":" + location.port);
        try {
            // Make it non editable
            Object.defineProperty(location, "origin", {
                enumerable: true,
                value: origin
            });
        } catch (e) {
            // IE < 8
            location.origin = origin;
        }
    }
})(window.location);

},{}],"huJSR":[function(require,module,exports,__globalThis) {
function hidePlaceholderOnFocus(a) {
    target = a.currentTarget ? a.currentTarget : a.srcElement, target.value == target.getAttribute("placeholder") && (target.value = "");
}
function unfocusOnAnElement(a) {
    target = a.currentTarget ? a.currentTarget : a.srcElement, "" == target.value && (target.value = target.getAttribute("placeholder"));
}
if (!("placeholder" in document.createElement("input"))) for(var inputs = document.getElementsByTagName("input"), i = 0; i < inputs.length; i++)inputs[i].value || (inputs[i].value = inputs[i].getAttribute("placeholder")), inputs[i].addEventListener ? (inputs[i].addEventListener("click", hidePlaceholderOnFocus, !1), inputs[i].addEventListener("blur", unfocusOnAnElement, !1)) : inputs[i].attachEvent && (inputs[i].attachEvent("onclick", hidePlaceholderOnFocus), inputs[i].attachEvent("onblur", unfocusOnAnElement));

},{}],"h9rBz":[function(require,module,exports,__globalThis) {
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */ (function(window1, document1) {
    'use strict';
    // Exits early if all IntersectionObserver and IntersectionObserverEntry
    // features are natively supported.
    if ('IntersectionObserver' in window1 && 'IntersectionObserverEntry' in window1 && 'intersectionRatio' in window1.IntersectionObserverEntry.prototype) {
        // Minimal polyfill for Edge 15's lack of `isIntersecting`
        // See: https://github.com/w3c/IntersectionObserver/issues/211
        if (!('isIntersecting' in window1.IntersectionObserverEntry.prototype)) Object.defineProperty(window1.IntersectionObserverEntry.prototype, 'isIntersecting', {
            get: function() {
                return this.intersectionRatio > 0;
            }
        });
        return;
    }
    /**
 * An IntersectionObserver registry. This registry exists to hold a strong
 * reference to IntersectionObserver instances currently observing a target
 * element. Without this registry, instances without another reference may be
 * garbage collected.
 */ var registry = [];
    /**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */ function IntersectionObserverEntry(entry) {
        this.time = entry.time;
        this.target = entry.target;
        this.rootBounds = entry.rootBounds;
        this.boundingClientRect = entry.boundingClientRect;
        this.intersectionRect = entry.intersectionRect || getEmptyRect();
        this.isIntersecting = !!entry.intersectionRect;
        // Calculates the intersection ratio.
        var targetRect = this.boundingClientRect;
        var targetArea = targetRect.width * targetRect.height;
        var intersectionRect = this.intersectionRect;
        var intersectionArea = intersectionRect.width * intersectionRect.height;
        // Sets intersection ratio.
        if (targetArea) // Round the intersection ratio to avoid floating point math issues:
        // https://github.com/w3c/IntersectionObserver/issues/324
        this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
        else // If area is zero and is intersecting, sets to 1, otherwise to 0
        this.intersectionRatio = this.isIntersecting ? 1 : 0;
    }
    /**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */ function IntersectionObserver(callback, opt_options) {
        var options = opt_options || {};
        if (typeof callback != 'function') throw new Error('callback must be a function');
        if (options.root && options.root.nodeType != 1) throw new Error('root must be an Element');
        // Binds and throttles `this._checkForIntersections`.
        this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);
        // Private properties.
        this._callback = callback;
        this._observationTargets = [];
        this._queuedEntries = [];
        this._rootMarginValues = this._parseRootMargin(options.rootMargin);
        // Public properties.
        this.thresholds = this._initThresholds(options.threshold);
        this.root = options.root || null;
        this.rootMargin = this._rootMarginValues.map(function(margin) {
            return margin.value + margin.unit;
        }).join(' ');
    }
    /**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */ IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;
    /**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */ IntersectionObserver.prototype.POLL_INTERVAL = null;
    /**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */ IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;
    /**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */ IntersectionObserver.prototype.observe = function(target) {
        var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
            return item.element == target;
        });
        if (isTargetAlreadyObserved) return;
        if (!(target && target.nodeType == 1)) throw new Error('target must be an Element');
        this._registerInstance();
        this._observationTargets.push({
            element: target,
            entry: null
        });
        this._monitorIntersections();
        this._checkForIntersections();
    };
    /**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */ IntersectionObserver.prototype.unobserve = function(target) {
        this._observationTargets = this._observationTargets.filter(function(item) {
            return item.element != target;
        });
        if (!this._observationTargets.length) {
            this._unmonitorIntersections();
            this._unregisterInstance();
        }
    };
    /**
 * Stops observing all target elements for intersection changes.
 */ IntersectionObserver.prototype.disconnect = function() {
        this._observationTargets = [];
        this._unmonitorIntersections();
        this._unregisterInstance();
    };
    /**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */ IntersectionObserver.prototype.takeRecords = function() {
        var records = this._queuedEntries.slice();
        this._queuedEntries = [];
        return records;
    };
    /**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */ IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
        var threshold = opt_threshold || [
            0
        ];
        if (!Array.isArray(threshold)) threshold = [
            threshold
        ];
        return threshold.sort().filter(function(t, i, a) {
            if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) throw new Error('threshold must be a number between 0 and 1 inclusively');
            return t !== a[i - 1];
        });
    };
    /**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */ IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
        var marginString = opt_rootMargin || '0px';
        var margins = marginString.split(/\s+/).map(function(margin) {
            var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
            if (!parts) throw new Error('rootMargin must be specified in pixels or percent');
            return {
                value: parseFloat(parts[1]),
                unit: parts[2]
            };
        });
        // Handles shorthand.
        margins[1] = margins[1] || margins[0];
        margins[2] = margins[2] || margins[0];
        margins[3] = margins[3] || margins[1];
        return margins;
    };
    /**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @private
 */ IntersectionObserver.prototype._monitorIntersections = function() {
        if (!this._monitoringIntersections) {
            this._monitoringIntersections = true;
            // If a poll interval is set, use polling instead of listening to
            // resize and scroll events or DOM mutations.
            if (this.POLL_INTERVAL) this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);
            else {
                addEvent(window1, 'resize', this._checkForIntersections, true);
                addEvent(document1, 'scroll', this._checkForIntersections, true);
                if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window1) {
                    this._domObserver = new MutationObserver(this._checkForIntersections);
                    this._domObserver.observe(document1, {
                        attributes: true,
                        childList: true,
                        characterData: true,
                        subtree: true
                    });
                }
            }
        }
    };
    /**
 * Stops polling for intersection changes.
 * @private
 */ IntersectionObserver.prototype._unmonitorIntersections = function() {
        if (this._monitoringIntersections) {
            this._monitoringIntersections = false;
            clearInterval(this._monitoringInterval);
            this._monitoringInterval = null;
            removeEvent(window1, 'resize', this._checkForIntersections, true);
            removeEvent(document1, 'scroll', this._checkForIntersections, true);
            if (this._domObserver) {
                this._domObserver.disconnect();
                this._domObserver = null;
            }
        }
    };
    /**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */ IntersectionObserver.prototype._checkForIntersections = function() {
        var rootIsInDom = this._rootIsInDom();
        var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
        this._observationTargets.forEach(function(item) {
            var target = item.element;
            var targetRect = getBoundingClientRect(target);
            var rootContainsTarget = this._rootContainsTarget(target);
            var oldEntry = item.entry;
            var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);
            var newEntry = item.entry = new IntersectionObserverEntry({
                time: now(),
                target: target,
                boundingClientRect: targetRect,
                rootBounds: rootRect,
                intersectionRect: intersectionRect
            });
            if (!oldEntry) this._queuedEntries.push(newEntry);
            else if (rootIsInDom && rootContainsTarget) // If the new entry intersection ratio has crossed any of the
            // thresholds, add a new entry.
            {
                if (this._hasCrossedThreshold(oldEntry, newEntry)) this._queuedEntries.push(newEntry);
            } else // If the root is not in the DOM or target is not contained within
            // root but the previous entry for this target had an intersection,
            // add a new record indicating removal.
            if (oldEntry && oldEntry.isIntersecting) this._queuedEntries.push(newEntry);
        }, this);
        if (this._queuedEntries.length) this._callback(this.takeRecords(), this);
    };
    /**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */ IntersectionObserver.prototype._computeTargetAndRootIntersection = function(target, rootRect) {
        // If the element isn't displayed, an intersection can't happen.
        if (window1.getComputedStyle(target).display == 'none') return;
        var targetRect = getBoundingClientRect(target);
        var intersectionRect = targetRect;
        var parent = getParentNode(target);
        var atRoot = false;
        while(!atRoot){
            var parentRect = null;
            var parentComputedStyle = parent.nodeType == 1 ? window1.getComputedStyle(parent) : {};
            // If the parent isn't displayed, an intersection can't happen.
            if (parentComputedStyle.display == 'none') return;
            if (parent == this.root || parent == document1) {
                atRoot = true;
                parentRect = rootRect;
            } else // If the element has a non-visible overflow, and it's not the <body>
            // or <html> element, update the intersection rect.
            // Note: <body> and <html> cannot be clipped to a rect that's not also
            // the document rect, so no need to compute a new intersection.
            if (parent != document1.body && parent != document1.documentElement && parentComputedStyle.overflow != 'visible') parentRect = getBoundingClientRect(parent);
            // If either of the above conditionals set a new parentRect,
            // calculate new intersection data.
            if (parentRect) {
                intersectionRect = computeRectIntersection(parentRect, intersectionRect);
                if (!intersectionRect) break;
            }
            parent = getParentNode(parent);
        }
        return intersectionRect;
    };
    /**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */ IntersectionObserver.prototype._getRootRect = function() {
        var rootRect;
        if (this.root) rootRect = getBoundingClientRect(this.root);
        else {
            // Use <html>/<body> instead of window since scroll bars affect size.
            var html = document1.documentElement;
            var body = document1.body;
            rootRect = {
                top: 0,
                left: 0,
                right: html.clientWidth || body.clientWidth,
                width: html.clientWidth || body.clientWidth,
                bottom: html.clientHeight || body.clientHeight,
                height: html.clientHeight || body.clientHeight
            };
        }
        return this._expandRectByRootMargin(rootRect);
    };
    /**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */ IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
        var margins = this._rootMarginValues.map(function(margin, i) {
            return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
        });
        var newRect = {
            top: rect.top - margins[0],
            right: rect.right + margins[1],
            bottom: rect.bottom + margins[2],
            left: rect.left - margins[3]
        };
        newRect.width = newRect.right - newRect.left;
        newRect.height = newRect.bottom - newRect.top;
        return newRect;
    };
    /**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */ IntersectionObserver.prototype._hasCrossedThreshold = function(oldEntry, newEntry) {
        // To make comparing easier, an entry that has a ratio of 0
        // but does not actually intersect is given a value of -1
        var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
        var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
        // Ignore unchanged ratios
        if (oldRatio === newRatio) return;
        for(var i = 0; i < this.thresholds.length; i++){
            var threshold = this.thresholds[i];
            // Return true if an entry matches a threshold or if the new ratio
            // and the old ratio are on the opposite sides of a threshold.
            if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) return true;
        }
    };
    /**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */ IntersectionObserver.prototype._rootIsInDom = function() {
        return !this.root || containsDeep(document1, this.root);
    };
    /**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */ IntersectionObserver.prototype._rootContainsTarget = function(target) {
        return containsDeep(this.root || document1, target);
    };
    /**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */ IntersectionObserver.prototype._registerInstance = function() {
        if (registry.indexOf(this) < 0) registry.push(this);
    };
    /**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */ IntersectionObserver.prototype._unregisterInstance = function() {
        var index = registry.indexOf(this);
        if (index != -1) registry.splice(index, 1);
    };
    /**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */ function now() {
        return window1.performance && performance.now && performance.now();
    }
    /**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */ function throttle(fn, timeout) {
        var timer = null;
        return function() {
            if (!timer) timer = setTimeout(function() {
                fn();
                timer = null;
            }, timeout);
        };
    }
    /**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */ function addEvent(node, event, fn, opt_useCapture) {
        if (typeof node.addEventListener == 'function') node.addEventListener(event, fn, opt_useCapture || false);
        else if (typeof node.attachEvent == 'function') node.attachEvent('on' + event, fn);
    }
    /**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */ function removeEvent(node, event, fn, opt_useCapture) {
        if (typeof node.removeEventListener == 'function') node.removeEventListener(event, fn, opt_useCapture || false);
        else if (typeof node.detatchEvent == 'function') node.detatchEvent('on' + event, fn);
    }
    /**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */ function computeRectIntersection(rect1, rect2) {
        var top = Math.max(rect1.top, rect2.top);
        var bottom = Math.min(rect1.bottom, rect2.bottom);
        var left = Math.max(rect1.left, rect2.left);
        var right = Math.min(rect1.right, rect2.right);
        var width = right - left;
        var height = bottom - top;
        return width >= 0 && height >= 0 && {
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            width: width,
            height: height
        };
    }
    /**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */ function getBoundingClientRect(el) {
        var rect;
        try {
            rect = el.getBoundingClientRect();
        } catch (err) {
        // Ignore Windows 7 IE11 "Unspecified error"
        // https://github.com/w3c/IntersectionObserver/pull/205
        }
        if (!rect) return getEmptyRect();
        // Older IE
        if (!(rect.width && rect.height)) rect = {
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
            left: rect.left,
            width: rect.right - rect.left,
            height: rect.bottom - rect.top
        };
        return rect;
    }
    /**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */ function getEmptyRect() {
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        };
    }
    /**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */ function containsDeep(parent, child) {
        var node = child;
        while(node){
            if (node == parent) return true;
            node = getParentNode(node);
        }
        return false;
    }
    /**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */ function getParentNode(node) {
        var parent = node.parentNode;
        if (parent && parent.nodeType == 11 && parent.host) // If the parent is a shadow root, return the host element.
        return parent.host;
        return parent;
    }
    // Exposes the constructors globally.
    window1.IntersectionObserver = IntersectionObserver;
    window1.IntersectionObserverEntry = IntersectionObserverEntry;
})(window, document);

},{}],"18w2a":[function(require,module,exports,__globalThis) {
(function() {
    "use strict";
    if (!self.document) return;
    var event = KeyboardEvent.prototype;
    var desc = Object.getOwnPropertyDescriptor(event, "key");
    if (!desc) return;
    var keys = {
        Win: "Meta",
        Scroll: "ScrollLock",
        Spacebar: " ",
        Down: "ArrowDown",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Up: "ArrowUp",
        Del: "Delete",
        Apps: "ContextMenu",
        Esc: "Escape",
        Multiply: "*",
        Add: "+",
        Subtract: "-",
        Decimal: ".",
        Divide: "/"
    };
    Object.defineProperty(event, "key", {
        get: function() {
            var key = desc.get.call(this);
            return keys.hasOwnProperty(key) ? keys[key] : key;
        }
    });
})();

},{}],"649KP":[function(require,module,exports,__globalThis) {
(function(global, factory) {
    factory();
})(this, function() {
    'use strict';
    /**
   * Applies the :focus-visible polyfill at the given scope.
   * A scope in this case is either the top-level Document or a Shadow Root.
   *
   * @param {(Document|ShadowRoot)} scope
   * @see https://github.com/WICG/focus-visible
   */ function applyFocusVisiblePolyfill(scope) {
        var hadKeyboardEvent = true;
        var hadFocusVisibleRecently = false;
        var hadFocusVisibleRecentlyTimeout = null;
        var inputTypesAllowlist = {
            text: true,
            search: true,
            url: true,
            tel: true,
            email: true,
            password: true,
            number: true,
            date: true,
            month: true,
            week: true,
            time: true,
            datetime: true,
            'datetime-local': true
        };
        /**
     * Helper function for legacy browsers and iframes which sometimes focus
     * elements like document, body, and non-interactive SVG.
     * @param {Element} el
     */ function isValidFocusTarget(el) {
            if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) return true;
            return false;
        }
        /**
     * Computes whether the given element should automatically trigger the
     * `focus-visible` class being added, i.e. whether it should always match
     * `:focus-visible` when focused.
     * @param {Element} el
     * @return {boolean}
     */ function focusTriggersKeyboardModality(el) {
            var type = el.type;
            var tagName = el.tagName;
            if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) return true;
            if (tagName === 'TEXTAREA' && !el.readOnly) return true;
            if (el.isContentEditable) return true;
            return false;
        }
        /**
     * Add the `focus-visible` class to the given element if it was not added by
     * the author.
     * @param {Element} el
     */ function addFocusVisibleClass(el) {
            if (el.classList.contains('focus-visible')) return;
            el.classList.add('focus-visible');
            el.setAttribute('data-focus-visible-added', '');
        }
        /**
     * Remove the `focus-visible` class from the given element if it was not
     * originally added by the author.
     * @param {Element} el
     */ function removeFocusVisibleClass(el) {
            if (!el.hasAttribute('data-focus-visible-added')) return;
            el.classList.remove('focus-visible');
            el.removeAttribute('data-focus-visible-added');
        }
        /**
     * If the most recent user interaction was via the keyboard;
     * and the key press did not include a meta, alt/option, or control key;
     * then the modality is keyboard. Otherwise, the modality is not keyboard.
     * Apply `focus-visible` to any current active element and keep track
     * of our keyboard modality state with `hadKeyboardEvent`.
     * @param {KeyboardEvent} e
     */ function onKeyDown(e) {
            if (e.metaKey || e.altKey || e.ctrlKey) return;
            if (isValidFocusTarget(scope.activeElement)) addFocusVisibleClass(scope.activeElement);
            hadKeyboardEvent = true;
        }
        /**
     * If at any point a user clicks with a pointing device, ensure that we change
     * the modality away from keyboard.
     * This avoids the situation where a user presses a key on an already focused
     * element, and then clicks on a different element, focusing it with a
     * pointing device, while we still think we're in keyboard modality.
     * @param {Event} e
     */ function onPointerDown(e) {
            hadKeyboardEvent = false;
        }
        /**
     * On `focus`, add the `focus-visible` class to the target if:
     * - the target received focus as a result of keyboard navigation, or
     * - the event target is an element that will likely require interaction
     *   via the keyboard (e.g. a text box)
     * @param {Event} e
     */ function onFocus(e) {
            // Prevent IE from focusing the document or HTML element.
            if (!isValidFocusTarget(e.target)) return;
            if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) addFocusVisibleClass(e.target);
        }
        /**
     * On `blur`, remove the `focus-visible` class from the target.
     * @param {Event} e
     */ function onBlur(e) {
            if (!isValidFocusTarget(e.target)) return;
            if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
                // To detect a tab/window switch, we look for a blur event followed
                // rapidly by a visibility change.
                // If we don't see a visibility change within 100ms, it's probably a
                // regular focus change.
                hadFocusVisibleRecently = true;
                window.clearTimeout(hadFocusVisibleRecentlyTimeout);
                hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                    hadFocusVisibleRecently = false;
                }, 100);
                removeFocusVisibleClass(e.target);
            }
        }
        /**
     * If the user changes tabs, keep track of whether or not the previously
     * focused element had .focus-visible.
     * @param {Event} e
     */ function onVisibilityChange(e) {
            if (document.visibilityState === 'hidden') {
                // If the tab becomes active again, the browser will handle calling focus
                // on the element (Safari actually calls it twice).
                // If this tab change caused a blur on an element with focus-visible,
                // re-apply the class when the user switches back to the tab.
                if (hadFocusVisibleRecently) hadKeyboardEvent = true;
                addInitialPointerMoveListeners();
            }
        }
        /**
     * Add a group of listeners to detect usage of any pointing devices.
     * These listeners will be added when the polyfill first loads, and anytime
     * the window is blurred, so that they are active when the window regains
     * focus.
     */ function addInitialPointerMoveListeners() {
            document.addEventListener('mousemove', onInitialPointerMove);
            document.addEventListener('mousedown', onInitialPointerMove);
            document.addEventListener('mouseup', onInitialPointerMove);
            document.addEventListener('pointermove', onInitialPointerMove);
            document.addEventListener('pointerdown', onInitialPointerMove);
            document.addEventListener('pointerup', onInitialPointerMove);
            document.addEventListener('touchmove', onInitialPointerMove);
            document.addEventListener('touchstart', onInitialPointerMove);
            document.addEventListener('touchend', onInitialPointerMove);
        }
        function removeInitialPointerMoveListeners() {
            document.removeEventListener('mousemove', onInitialPointerMove);
            document.removeEventListener('mousedown', onInitialPointerMove);
            document.removeEventListener('mouseup', onInitialPointerMove);
            document.removeEventListener('pointermove', onInitialPointerMove);
            document.removeEventListener('pointerdown', onInitialPointerMove);
            document.removeEventListener('pointerup', onInitialPointerMove);
            document.removeEventListener('touchmove', onInitialPointerMove);
            document.removeEventListener('touchstart', onInitialPointerMove);
            document.removeEventListener('touchend', onInitialPointerMove);
        }
        /**
     * When the polfyill first loads, assume the user is in keyboard modality.
     * If any event is received from a pointing device (e.g. mouse, pointer,
     * touch), turn off keyboard modality.
     * This accounts for situations where focus enters the page from the URL bar.
     * @param {Event} e
     */ function onInitialPointerMove(e) {
            // Work around a Safari quirk that fires a mousemove on <html> whenever the
            // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
            if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') return;
            hadKeyboardEvent = false;
            removeInitialPointerMoveListeners();
        }
        // For some kinds of state, we are interested in changes at the global scope
        // only. For example, global pointer input, global key presses and global
        // visibility change should affect the state at every scope:
        document.addEventListener('keydown', onKeyDown, true);
        document.addEventListener('mousedown', onPointerDown, true);
        document.addEventListener('pointerdown', onPointerDown, true);
        document.addEventListener('touchstart', onPointerDown, true);
        document.addEventListener('visibilitychange', onVisibilityChange, true);
        addInitialPointerMoveListeners();
        // For focus and blur, we specifically care about state changes in the local
        // scope. This is because focus / blur events that originate from within a
        // shadow root are not re-dispatched from the host element if it was already
        // the active element in its own scope:
        scope.addEventListener('focus', onFocus, true);
        scope.addEventListener('blur', onBlur, true);
        // We detect that a node is a ShadowRoot by ensuring that it is a
        // DocumentFragment and also has a host property. This check covers native
        // implementation and polyfill implementation transparently. If we only cared
        // about the native implementation, we could just check if the scope was
        // an instance of a ShadowRoot.
        if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) // Since a ShadowRoot is a special kind of DocumentFragment, it does not
        // have a root element to add a class to. So, we add this attribute to the
        // host element instead:
        scope.host.setAttribute('data-js-focus-visible', '');
        else if (scope.nodeType === Node.DOCUMENT_NODE) {
            document.documentElement.classList.add('js-focus-visible');
            document.documentElement.setAttribute('data-js-focus-visible', '');
        }
    }
    // It is important to wrap all references to global window and document in
    // these checks to support server-side rendering use cases
    // @see https://github.com/WICG/focus-visible/issues/199
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        // Make the polyfill helper globally available. This can be used as a signal
        // to interested libraries that wish to coordinate with the polyfill for e.g.,
        // applying the polyfill to a shadow root:
        window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill;
        // Notify interested libraries of the polyfill's presence, in case the
        // polyfill was loaded lazily:
        var event;
        try {
            event = new CustomEvent('focus-visible-polyfill-ready');
        } catch (error) {
            // IE11 does not support using CustomEvent as a constructor directly:
            event = document.createEvent('CustomEvent');
            event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
        }
        window.dispatchEvent(event);
    }
    if (typeof document !== 'undefined') // Apply the polyfill to the global document, so that no JavaScript
    // coordination is required to use the polyfill in the top-level document:
    applyFocusVisiblePolyfill(document);
});

},{}],"2TKob":[function(require,module,exports,__globalThis) {
require("a3ca4ee78a1640df").polyfill();

},{"a3ca4ee78a1640df":"5hEPP"}],"5hEPP":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var now = require("cf76948a525d1513"), root = typeof window === 'undefined' ? global : window, vendors = [
    'moz',
    'webkit'
], suffix = 'AnimationFrame', raf = root['request' + suffix], caf = root['cancel' + suffix] || root['cancelRequest' + suffix];
for(var i = 0; !raf && i < vendors.length; i++){
    raf = root[vendors[i] + 'Request' + suffix];
    caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
}
// Some versions of FF have rAF but not cAF
if (!raf || !caf) {
    var last = 0, id = 0, queue = [], frameDuration = 1000 / 60;
    raf = function(callback) {
        if (queue.length === 0) {
            var _now = now(), next = Math.max(0, frameDuration - (_now - last));
            last = next + _now;
            setTimeout(function() {
                var cp = queue.slice(0);
                // Clear queue here to prevent
                // callbacks from appending listeners
                // to the current frame's queue
                queue.length = 0;
                for(var i = 0; i < cp.length; i++){
                    if (!cp[i].cancelled) try {
                        cp[i].callback(last);
                    } catch (e) {
                        setTimeout(function() {
                            throw e;
                        }, 0);
                    }
                }
            }, Math.round(next));
        }
        queue.push({
            handle: ++id,
            callback: callback,
            cancelled: false
        });
        return id;
    };
    caf = function(handle) {
        for(var i = 0; i < queue.length; i++)if (queue[i].handle === handle) queue[i].cancelled = true;
    };
}
module.exports = function(fn) {
    // Wrap in a new function to prevent
    // `cancel` potentially being assigned
    // to the native rAF function
    return raf.call(root, fn);
};
module.exports.cancel = function() {
    caf.apply(root, arguments);
};
module.exports.polyfill = function(object) {
    if (!object) object = root;
    object.requestAnimationFrame = raf;
    object.cancelAnimationFrame = caf;
};

},{"cf76948a525d1513":"28oO7"}],"28oO7":[function(require,module,exports,__globalThis) {
// Generated by CoffeeScript 1.12.2
(function() {
    var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;
    if (typeof performance !== "undefined" && performance !== null && performance.now) module.exports = function() {
        return performance.now();
    };
    else if (Date.now) {
        module.exports = function() {
            return Date.now() - loadTime;
        };
        loadTime = Date.now();
    } else {
        module.exports = function() {
            return new Date().getTime() - loadTime;
        };
        loadTime = new Date().getTime();
    }
}).call(this);

},{}],"8smV8":[function(require,module,exports,__globalThis) {
/* globals requestIdleCallback, cancelIdleCallback */ var fallback = function(cb) {
    return setTimeout(function() {
        var start = Date.now();
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
var isSupported = typeof requestIdleCallback !== 'undefined';
module.exports = isSupported ? requestIdleCallback : fallback;
module.exports.cancelIdleCallback = isSupported ? cancelIdleCallback : clearTimeout;

},{}]},["7Lukr"], "7Lukr", "parcelRequire724d", {})

