/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(1);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vuebootstrapMin = __webpack_require__(3);
	
	var _vuebootstrapMin2 = _interopRequireDefault(_vuebootstrapMin);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Label = _vuebootstrapMin2.default.Label;
	//var App = require('./app.vue');
	
	new _vue2.default({
	  template: "<label is='label' bs-style='info'>hello</label>",
	  el: 'body',
	  components: {
	    Label: Label
	  }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Vue.js v1.0.10
	 * (c) 2015 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delmited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([a-z\d])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind$1(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a non-enumerable property
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	var isIE9 = inBrowser && navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0;
	
	var isAndroid = inBrowser && navigator.userAgent.toLowerCase().indexOf('android') > 0;
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks = [];
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	  /* istanbul ignore if */
	  if (typeof MutationObserver !== 'undefined') {
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(counter);
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = counter;
	    };
	  } else {
	    timerFunc = setTimeout;
	  }
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var entry = {
	    key: key,
	    value: value
	  };
	  this._keymap[key] = entry;
	  if (this.tail) {
	    this.tail.newer = entry;
	    entry.older = this.tail;
	  } else {
	    this.head = entry;
	  }
	  this.tail = entry;
	  if (this.size === this.limit) {
	    return this.shift();
	  } else {
	    this.size++;
	  }
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var c;
	var i;
	var l;
	var lastFilterIndex;
	var inSingle;
	var inDouble;
	var curly;
	var square;
	var paren;
	/**
	 * Push a filter to the current directive object
	 */
	
	function pushFilter() {
	  var exp = str.slice(lastFilterIndex, i).trim();
	  var filter;
	  if (exp) {
	    filter = {};
	    var tokens = exp.match(filterTokenRE);
	    filter.name = tokens[0];
	    if (tokens.length > 1) {
	      filter.args = tokens.slice(1).map(processFilterArg);
	    }
	  }
	  if (filter) {
	    (dir.filters = dir.filters || []).push(filter);
	  }
	  lastFilterIndex = i + 1;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} str
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  inSingle = inDouble = false;
	  curly = square = paren = 0;
	  lastFilterIndex = 0;
	  dir = {};
	
	  for (i = 0, l = str.length; i < l; i++) {
	    c = str.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27) inSingle = !inSingle;
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22) inDouble = !inDouble;
	    } else if (c === 0x7C && // pipe
	    str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
	      if (dir.expression == null) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        dir.expression = str.slice(0, i).trim();
	      } else {
	        // already has filter
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22:
	          inDouble = true;break; // "
	        case 0x27:
	          inSingle = true;break; // '
	        case 0x28:
	          paren++;break; // (
	        case 0x29:
	          paren--;break; // )
	        case 0x5B:
	          square++;break; // [
	        case 0x5D:
	          square--;break; // ]
	        case 0x7B:
	          curly++;break; // {
	        case 0x7D:
	          curly--;break; // }
	      }
	    }
	  }
	
	  if (dir.expression == null) {
	    dir.expression = str.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  text = text.replace(/\n/g, '');
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @return {String}
	 */
	
	function tokensToExp(tokens) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	function formatToken(token, single) {
	  return token.tag ? inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE$1 = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE$1.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text$1 = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether or not to handle fully object properties which
	   * are already backed by getters and seters. Depending on
	   * use case and environment, this might introduce non-neglible
	   * performance penalties.
	   */
	  convertAllProperties: false,
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	    warn = function (msg, e) {
	      if (hasConsole && (!config.silent || config.debug)) {
	        console.warn('[Vue warn]: ' + msg);
	        /* istanbul ignore if */
	        if (config.debug) {
	          if (e) {
	            throw e;
	          } else {
	            console.warn(new Error('Warning Stack Trace').stack);
	          }
	        }
	      }
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  var doc = document.documentElement;
	  var parent = node && node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function on$1(el, event, cb) {
	  el.addEventListener(event, cb);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {Strong} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && el.content instanceof DocumentFragment) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail textNodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  trim(node, node.firstChild);
	  trim(node, node.lastChild);
	}
	
	function trim(parent, node) {
	  if (node && node.nodeType === 3 && !node.data.trim()) {
	    parent.removeChild(node);
	  }
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__vue_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/;
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && tag !== 'component') {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        if (tag.indexOf('-') > -1 || /HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        !/^(data|time|rtc|rb)$/.test(tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly?');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el) {
	  // dynamic syntax
	  var exp = getAttr(el, 'is');
	  if (exp != null) {
	    return { id: exp };
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  var key = prop.path;
	  vm[key] = vm._data[key] = assertProp(prop, value) ? value : undefined;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function assertProp(prop, value) {
	  // if a prop is not provided and is not required,
	  // skip the check.
	  if (prop.raw === null && !prop.required) {
	    return true;
	  }
	  var options = prop.options;
	  var type = options.type;
	  var valid = true;
	  var expectedType;
	  if (type) {
	    if (type === String) {
	      expectedType = 'string';
	      valid = typeof value === expectedType;
	    } else if (type === Number) {
	      expectedType = 'number';
	      valid = typeof value === 'number';
	    } else if (type === Boolean) {
	      expectedType = 'boolean';
	      valid = typeof value === 'boolean';
	    } else if (type === Function) {
	      expectedType = 'function';
	      valid = typeof value === 'function';
	    } else if (type === Object) {
	      expectedType = 'object';
	      valid = isPlainObject(value);
	    } else if (type === Array) {
	      expectedType = 'array';
	      valid = isArray(value);
	    } else {
	      valid = value instanceof type;
	    }
	  }
	  if (!valid) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator.call(null, value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
	      return false;
	    }
	  }
	  return true;
	}
	
	function formatType(val) {
	  return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
	}
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * 0.11 deprecation warning
	 */
	
	strats.paramAttributes = function () {
	  /* istanbul ignore next */
	  process.env.NODE_ENV !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var def;
	    var ids = Object.keys(components);
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  var options = {};
	  var key;
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      parent = mergeOptions(parent, child.mixins[i], vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id) {
	  var assets = options[type];
	  var camelizedId;
	  return assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	}
	
	/**
	 * Assert asset exists
	 */
	
	function assertAsset(val, type, id) {
	  if (!val) {
	    process.env.NODE_ENV !== 'production' && warn('Failed to resolve ' + type + ': ' + id);
	  }
	}
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = index + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index.
	 *
	 * @param {Number} index
	 * @param {*} val
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var uid$3 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$3++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  var i = keys.length;
	  while (i--) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  var i = items.length;
	  while (i--) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function protoAugment(target, src) {
	  target.__proto__ = src;
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  var i = keys.length;
	  var key;
	  while (i--) {
	    key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if ((isArray(value) || isPlainObject(value)) && !Object.isFrozen(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new Dep();
	
	  // cater for pre-defined getter/setters
	  var getter, setter;
	  if (config.convertAllProperties) {
	    var property = Object.getOwnPropertyDescriptor(obj, key);
	    if (property && property.configurable === false) {
	      return;
	    }
	    getter = property && property.get;
	    setter = property && property.set;
	  }
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		isIE9: isIE9,
		isAndroid: isAndroid,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on$1,
		off: off,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		assertAsset: assertAsset,
		checkComponentAttr: checkComponentAttr,
		initProp: initProp,
		assertProp: assertProp,
		commonTagRE: commonTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to reigster itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initScope().
	    this._data = {};
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g;
	var booleanLiteralRE = /^(true|false)$/;
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here becaue the regex matches 1 extra char
	  body = (' ' + body).replace(pathReplaceRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    return new Function('scope', 'return ' + body + ';');
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat true/false as paths
	  !booleanLiteralRE.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var internalQueueDepleted = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue = [];
	  userQueue = [];
	  has = {};
	  circular = {};
	  waiting = internalQueueDepleted = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  runBatcherQueue(queue);
	  internalQueueDepleted = true;
	  runBatcherQueue(userQueue);
	  // dev tool hook
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
	      window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush');
	    }
	  }
	  resetBatcherState();
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        queue.splice(has[id], 1);
	        warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
	      }
	    }
	  }
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // if an internal watcher is pushed, but the internal
	    // queue is already depleted, we run it immediately.
	    if (internalQueueDepleted && !watcher.user) {
	      watcher.run();
	      return;
	    }
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String} expression
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = isFn ? expOrFn.toString() : expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = Object.create(null);
	  this.newDeps = null;
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDeps[id]) {
	    this.newDeps[id] = dep;
	    if (!this.deps[id]) {
	      this.deps[id] = dep;
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter "' + this.expression + '"', e);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	  this.newDeps = Object.create(null);
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var ids = Object.keys(this.deps);
	  var i = ids.length;
	  while (i--) {
	    var id = ids[i];
	    if (!this.newDeps[id]) {
	      this.deps[id].removeSub(this);
	    }
	  }
	  this.deps = this.newDeps;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and Array watchers should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isArray(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var depIds = Object.keys(this.deps);
	  var i = depIds.length;
	  while (i--) {
	    this.deps[depIds[i]].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // we can skip this if the vm if being destroyed
	    // which can improve teardown performance.
	    if (!this.vm._isBeingDestroyed) {
	      this.vm._watchers.$remove(this);
	    }
	    var depIds = Object.keys(this.deps);
	    var i = depIds.length;
	    while (i--) {
	      this.deps[depIds[i]].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	function traverse(val) {
	  var i, keys;
	  if (isArray(val)) {
	    i = val.length;
	    while (i--) traverse(val[i]);
	  } else if (isObject(val)) {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) traverse(val[keys[i]]);
	  }
	}
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
	  }
	};
	
	var el = {
	
	  priority: 1500,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        value = value.replace(importantRE, '').trim();
	      }
	      this.el.style.setProperty(prop, value, isImportant);
	    } else {
	      this.el.style.removeProperty(prop);
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  if (camel in testEl.style) {
	    return prop;
	  }
	  var i = prefixes.length;
	  var prefixed;
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixes[i] + prop;
	    }
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// these input element attributes should also set their
	// corresponding properties
	var inputProps = {
	  value: 1,
	  checked: 1,
	  selected: 1
	};
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	
	var bind = {
	
	  priority: 850,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    if (this.descriptor.interp) {
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + this.descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + this.descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    if (inputProps[attr] && attr in this.el) {
	      this.el[attr] = attr === 'value' ? value || '' : // IE9 will set input.value to "null" for null...
	      value;
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (modelProp) {
	      this.el[modelProp] = value;
	      // update v-model if present
	      var model = this.el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && this.el.tagName === 'TEXTAREA') {
	      this.el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (value != null && value !== false) {
	      if (xlinkRE.test(attr)) {
	        this.el.setAttributeNS(xlinkNS, attr, value);
	      } else {
	        this.el.setAttribute(attr, value);
	      }
	    } else {
	      this.el.removeAttribute(attr);
	    }
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': 46,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	var on = {
	
	  acceptStatement: true,
	  priority: 700,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on$1(self.el.contentWindow, self.arg, self.handler);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on$1(this.el, this.arg, this.handler);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.value;
	      if (isArray(model)) {
	        var val = self.getValue();
	        if (el.checked) {
	          if (indexOf(model, val) < 0) {
	            model.push(val);
	          }
	        } else {
	          model.$remove(val);
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.checked) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', this.forceUpdate);
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.checked) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        self.listener();
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = function () {
	      if (composing) return;
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      jQuery(el).on('change', this.listener);
	      if (!lazy) {
	        jQuery(el).on('input', this.listener);
	      }
	    } else {
	      this.on('change', this.listener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.value = _toString(value);
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      jQuery(el).off('change', this.listener);
	      jQuery(el).off('input', this.listener);
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: 800,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    applyTransition(el, value ? 1 : -1, function () {
	      el.style.display = value ? '' : 'none';
	    }, this.vm);
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && node.content instanceof DocumentFragment;
	}
	
	var tagRE$1 = /<([\w:]+)/;
	var entityRE = /&\w+;|&#\d+;|&#x[\dA-F]+;/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var hit = templateCache.get(templateString);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	
	  if (!tagMatch && !entityMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    if (!raw) {
	      templateString = templateString.trim();
	    }
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	
	  templateCache.put(templateString, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment.
	  if (isRealTemplate(node)) {
	    trimNode(node.content);
	    return node.content;
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (template instanceof DocumentFragment) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__vue_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__vfrag__ = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.unlink();
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  self.callHook(destroyChild);
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  self.callHook(destroyChild);
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call destroy for all contained instances,
	 * with remove:false and defer:true.
	 * Defer is necessary because we need to
	 * keep the children to call detach hooks
	 * on them.
	 *
	 * @param {Vue} child
	 */
	
	function destroyChild(child) {
	  child.$destroy(false, true);
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el)) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : el.outerHTML);
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var vIf = {
	
	  priority: 2000,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseFactory = new FragmentFactory(this.vm, next);
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	      this.factory = new FragmentFactory(this.vm, el);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseFactory && !this.elseFrag) {
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	var uid$1 = 0;
	
	var vFor = {
	
	  priority: 2000,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    // support "item in items" syntax
	    var inMatch = this.expression.match(/(.*) in (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Alias is required in v-for.');
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$1;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          frag.scope[alias] = value;
	        }
	      } else {
	        // new isntance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    defineReactive(scope, alias, value);
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__vfrag__ = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.before(prevEl.nextSibling);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else {
	        def(value, id, frag);
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * wathcer's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number') {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__vfrag__;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__vfrag__;
	  }
	  return frag;
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(n);
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
	  };
	}
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	var text = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	// must export plain object
	var publicDirectives = {
	  text: text,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on,
	  bind: bind,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 1;
	var TYPE_ANIMATION = 2;
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = id + '-enter';
	  this.leaveClass = id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind$1(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	
	  // Important hack:
	  // in Chrome, if a just-entered element is applied the
	  // leave class while its interpolated property still has
	  // a very small value (within one frame), Chrome will
	  // skip the leave transition entirely and not firing the
	  // transtionend event. Therefore we need to protected
	  // against such cases using a one-frame timeout.
	  this.justEntered = true;
	  var self = this;
	  setTimeout(function () {
	    self.justEntered = false;
	  }, 17);
	
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on$1(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	}
	
	var transition = {
	
	  priority: 1100,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    // apply on closest vm
	    el.__v_trans = new Transition(el, id, hooks, this.el.__vue__ || this.vm);
	    if (oldId) {
	      removeClass(el, oldId + '-transition');
	    }
	    addClass(el, id + '-transition');
	  }
	};
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      if (assertProp(prop, val)) {
	        child[childKey] = val;
	      }
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var component = {
	
	  priority: 1500,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   */
	
	  resolveComponent: function resolveComponent(id, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || id;
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(id, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHook = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHook && !cached) {
	      this.waitingFor = newComponent;
	      activateHook.call(newComponent, function () {
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      this.waitingFor.$destroy();
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (process.env.NODE_ENV !== 'production') {
	      if (current) current._inactive = true;
	      target._inactive = false;
	    }
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (value && typeof value === 'string') {
	      this.handleObject(stringToObject(value));
	    } else if (isPlainObject(value)) {
	      this.handleObject(value);
	    } else if (isArray(value)) {
	      this.handleArray(value);
	    } else {
	      this.cleanup();
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    this.cleanup(value);
	    var keys = this.prevKeys = Object.keys(value);
	    for (var i = 0, l = keys.length; i < l; i++) {
	      var key = keys[i];
	      if (value[key]) {
	        addClass(this.el, key);
	      } else {
	        removeClass(this.el, key);
	      }
	    }
	  },
	
	  handleArray: function handleArray(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        addClass(this.el, value[i]);
	      }
	    }
	    this.prevKeys = value.slice();
	  },
	
	  cleanup: function cleanup(value) {
	    if (this.prevKeys) {
	      var i = this.prevKeys.length;
	      while (i--) {
	        var key = this.prevKeys[i];
	        if (key && (!value || !contains$1(value, key))) {
	          removeClass(this.el, key);
	        }
	      }
	    }
	  }
	};
	
	function stringToObject(value) {
	  var res = {};
	  var keys = value.trim().split(/\s+/);
	  var i = keys.length;
	  while (i--) {
	    res[keys[i]] = true;
	  }
	  return res;
	}
	
	function contains$1(value, key) {
	  return isArray(value) ? value.indexOf(key) > -1 : hasOwn(value, key);
	}
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition
	};
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions) {
	  var props = [];
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.');
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value)) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.');
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (options.required) {
	      // warn missing required
	      process.env.NODE_ENV !== 'production' && warn('Missing required prop: ' + name);
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, getDefault(vm, options));
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (vm._context) {
	          if (prop.mode === propBindingModes.ONE_TIME) {
	            // one time binding
	            value = (scope || vm._context).$get(prop.parentPath);
	            initProp(vm, prop, value);
	          } else {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          }
	        } else {
	            process.env.NODE_ENV !== 'production' && warn('Cannot bind dynamic prop on a root instance' + ' with no parent: ' + prop.name + '="' + raw + '"');
	          }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value
	        value = options.type === Boolean && raw === '' ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} options
	 * @return {*}
	 */
	
	function getDefault(vm, options) {
	  // no default, return undefined
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var argRE = /:(.*)$/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// terminal directives
	var terminalDirectives = ['for', 'if'];
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  dirs.sort(directiveComparator);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * Directive priority sort comparator
	 *
	 * @param {Object} a
	 * @param {Object} b
	 */
	
	function directiveComparator(a, b) {
	  a = a.descriptor.def.priority || DEFAULT_PRIORITY;
	  b = b.descriptor.def.priority || DEFAULT_PRIORITY;
	  return a > b ? -1 : a === b ? 0 : 1;
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  return function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  };
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (!destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
	    }
	  }
	
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && node.tagName !== 'SCRIPT') {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(el.attributes, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: publicDirectives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = value;
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) return;
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	  var value, dirName;
	  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
	    dirName = terminalDirectives[i];
	    /* eslint-disable no-cond-assign */
	    if (value = el.getAttribute('v-' + dirName)) {
	      return makeTerminalNodeLinkFn(el, dirName, value, options);
	    }
	    /* eslint-enable no-cond-assign */
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} [def]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    // either an element directive, or if/for
	    def: def || publicDirectives[dirName]
	  };
	  // check ref for v-for and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', publicDirectives.bind, true);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', publicDirectives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', publicDirectives.bind);
	            }
	          } else
	
	            // normal directives
	            if (name.indexOf('v-') === 0) {
	              // check arg
	              arg = (arg = name.match(argRE)) && arg[1];
	              if (arg) {
	                name = name.replace(argRE, '');
	              }
	              // extract directive name
	              dirName = name.slice(2);
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName);
	
	              if (process.env.NODE_ENV !== 'production') {
	                assertAsset(dirDef, 'directive', dirName);
	              }
	
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Boolean} [interp]
	   */
	
	  function pushDir(dirName, def, interp) {
	    var parsed = parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      expression: parsed.expression,
	      filters: parsed.filters,
	      interp: interp
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (el instanceof DocumentFragment) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || replacer.hasAttribute('is') || replacer.hasAttribute(':is') || replacer.hasAttribute('v-bind:is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class') {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude
	});
	
	function stateMixin (Vue) {
	
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var propsData = this._data;
	    var optionsDataFn = this.$options.data;
	    var optionsData = optionsDataFn && optionsDataFn();
	    if (optionsData) {
	      this._data = optionsData;
	      for (var prop in propsData) {
	        if (process.env.NODE_ENV !== 'production' && hasOwn(optionsData, prop)) {
	          warn('Data field "' + prop + '" is already defined ' + 'as a prop. Use prop default value instead.');
	        }
	        if (this._props[prop].raw !== null || !hasOwn(optionsData, prop)) {
	          set(optionsData, prop, propsData[prop]);
	        }
	      }
	    }
	    var data = this._data;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      this._proxy(key);
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind$1(userDef.get, this) : noop;
	          def.set = userDef.set ? bind$1(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind$1(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {String} name
	 * @param {Node} el
	 * @param {Vue} vm
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} raw
	 * @param {Object} def - directive definition object
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 *
	 * @param {Object} def
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop;
	    }
	    var preProcess = this._preProcess ? bind$1(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind$1(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	  this._bound = true;
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = params[i];
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 */
	
	Directive.prototype.on = function (event, handler) {
	  on$1(this.el, event, handler);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   * @return {Element}
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	    return el;
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (el instanceof DocumentFragment) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {String} name - directive name
	   * @param {Node} node   - target node
	   * @param {Object} desc - parsed directive descriptor
	   * @param {Object} def  - directive definition object
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	    // remove DOM element
	    var self = this;
	    if (remove && this.$el) {
	      this.$remove(function () {
	        self._cleanup();
	      });
	    } else if (!deferCleanup) {
	      this._cleanup();
	    }
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[i];
	      fn = resolveAsset(this.$options, 'filters', filter.name);
	      if (process.env.NODE_ENV !== 'production') {
	        assertAsset(fn, 'filter', filter.name);
	      }
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String} id
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (id, cb) {
	    var factory = resolveAsset(this.$options, 'components', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(factory, 'component', id);
	    }
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory(function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	function globalAPI (Vue) {
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text$1,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && commonTagRE.test(id)) {
	            warn('Do not use built-in HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = id;
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	}
	
	var filterRE = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression(exp);
	    if (res) {
	      if (asStatement && !isSimplePath(exp)) {
	        var self = this;
	        return function statementHandler() {
	          res.get.call(self, self);
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      filters: parsed && parsed.filters
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      for (var key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var cbs = this._events[event];
	    var shouldPropagate = !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var res = cbs[i].apply(this, args);
	        if (res === true) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, arguments);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, arguments);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function () {
	    this.$emit.apply(this, arguments);
	    var parent = this.$parent;
	    while (parent) {
	      var shouldPropagate = parent.$emit.apply(parent, arguments);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.');
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install APIs
	globalAPI(Vue);
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = toArray(arguments, n).reduce(function (prev, cur) {
	    return prev.concat(cur);
	  }, []);
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} sortKey
	 * @param {String} reverse
	 */
	
	function orderBy(arr, sortKey, reverse) {
	  arr = convertArray(arr);
	  if (!sortKey) {
	    return arr;
	  }
	  var order = reverse && reverse < 0 ? -1 : 1;
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(function (a, b) {
	    if (sortKey !== '$key') {
	      if (isObject(a) && '$value' in a) a = a.$value;
	      if (isObject(b) && '$value' in b) b = b.$value;
	    }
	    a = isObject(a) ? getPath(a, sortKey) : a;
	    b = isObject(b) ? getPath(b, sortKey) : b;
	    return a === b ? 0 : a > b ? order : -order;
	  });
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   */
	
	  currency: function currency(value, _currency) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    var stringified = Math.abs(value).toFixed(2);
	    var _int = stringified.slice(0, -3);
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = stringified.slice(-3);
	    var sign = value < 0 ? '-' : '';
	    return _currency + sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	var partial = {
	
	  priority: 1750,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id);
	    if (process.env.NODE_ENV !== 'production') {
	      assertAsset(partial, 'partial', id);
	    }
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	// This is the elementDirective that handles <content>
	// transclusions. It relies on the raw content of an
	// instance being stored as `$options._content` during
	// the transclude phase.
	
	var slot = {
	
	  priority: 1750,
	
	  params: ['name'],
	
	  bind: function bind() {
	    var host = this.vm;
	    var raw = host.$options._content;
	    var content;
	    if (!raw) {
	      this.fallback();
	      return;
	    }
	    var context = host._context;
	    var slotName = this.params.name;
	    if (!slotName) {
	      // Default content
	      var self = this;
	      var compileDefaultContent = function compileDefaultContent() {
	        self.compile(extractFragment(raw.childNodes, raw, true), context, host);
	      };
	      if (!host._isCompiled) {
	        // defer until the end of instance compilation,
	        // because the default outlet must wait until all
	        // other possible outlets with selectors have picked
	        // out their contents.
	        host.$once('hook:compiled', compileDefaultContent);
	      } else {
	        compileDefaultContent();
	      }
	    } else {
	      var selector = '[slot="' + slotName + '"]';
	      var nodes = raw.querySelectorAll(selector);
	      if (nodes.length) {
	        content = extractFragment(nodes, raw);
	        if (content.hasChildNodes()) {
	          this.compile(content, context, host);
	        } else {
	          this.fallback();
	        }
	      } else {
	        this.fallback();
	      }
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @param {Element} parent
	 * @param {Boolean} main
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent, main) {
	  var frag = document.createDocumentFragment();
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    // if this is the main outlet, we want to skip all
	    // previously selected nodes;
	    // otherwise, we want to mark the node as selected.
	    // clone the node so the original raw content remains
	    // intact. this ensures proper re-compilation in cases
	    // where the outlet is inside a conditional block
	    if (main && !node.__v_selected) {
	      append(node);
	    } else if (!main && node.parentNode === parent) {
	      node.__v_selected = true;
	      append(node);
	    }
	  }
	  return frag;
	
	  function append(node) {
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      node = parseTemplate(node);
	    }
	    node = cloneNode(node);
	    frag.appendChild(node);
	  }
	}
	
	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};
	
	Vue.version = '1.0.10';
	
	/**
	 * Vue and every constructor that extends Vue has an
	 * associated options object, which can be accessed during
	 * compilation steps as `this.constructor.options`.
	 *
	 * These can be seen as the default options of every
	 * Vue instance.
	 */
	
	Vue.options = {
	  directives: publicDirectives,
	  elementDirectives: elementDirectives,
	  filters: filters,
	  transitions: {},
	  components: {},
	  partials: {},
	  replace: true
	};
	
	// devtools global hook
	/* istanbul ignore if */
	if (process.env.NODE_ENV !== 'production') {
	  if (inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
	    window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('init', Vue);
	  }
	}
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";var _getOwnPropertyNames=__webpack_require__(4);var _getOwnPropertyNames2=_interopRequireDefault(_getOwnPropertyNames);var _defineProperties=__webpack_require__(20);var _defineProperties2=_interopRequireDefault(_defineProperties);var _freeze=__webpack_require__(22);var _freeze2=_interopRequireDefault(_freeze);var _getOwnPropertyDescriptor=__webpack_require__(26);var _getOwnPropertyDescriptor2=_interopRequireDefault(_getOwnPropertyDescriptor);var _isFrozen=__webpack_require__(29);var _isFrozen2=_interopRequireDefault(_isFrozen);var _create=__webpack_require__(32);var _create2=_interopRequireDefault(_create);var _defineProperty=__webpack_require__(34);var _defineProperty2=_interopRequireDefault(_defineProperty);var _typeof2=__webpack_require__(36);var _typeof3=_interopRequireDefault(_typeof2);var _keys=__webpack_require__(55);var _keys2=_interopRequireDefault(_keys);var _stringify=__webpack_require__(59);var _stringify2=_interopRequireDefault(_stringify);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}module.exports=(function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="production/",e(0)})([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var s=n(120),o=i(s),r=n(3),a=i(r),l=n(15),u=i(l),c=n(16),h=i(c),p=n(123),f=i(p),d=n(124),v=i(d),m=n(125),g=i(m),_=n(126),b=i(_),y=n(127),x=i(y),w=n(128),E=i(w),C=n(129),O=i(C),k=n(130),$=i(k),N=n(131),A=i(N),P=n(17),S=i(P),D=n(6),T=i(D),M=n(133),j=i(M),V=n(134),L=i(V),I=n(18),F=i(I),B=n(135),R=i(B),z=n(137),H=i(z),U=n(138),W=i(U),q=n(139),J=i(q),Y=n(19),G=i(Y),K=n(20),Q=i(K),Z=n(141),X=i(Z),tt=n(121),et=i(tt),nt=n(122),it=i(nt),st=n(140),ot=i(st),rt=n(136),at=i(rt);t.exports={Alert:o["default"],Anchor:a["default"],Button:u["default"],ButtonGroup:h["default"],Carousel:f["default"],CarouselItem:v["default"],Column:g["default"],DropdownButton:b["default"],Form:x["default"],FormInput:E["default"],Label:O["default"],MenuItem:$["default"],Modal:A["default"],Nav:S["default"],NavItem:T["default"],Pagination:j["default"],Panel:L["default"],Popover:F["default"],PopoverTrigger:R["default"],Row:H["default"],SplitButton:W["default"],Tab:J["default"],TabItem:G["default"],Tooltip:Q["default"],TooltipTrigger:X["default"],Breadcrumb:et["default"],BreadcrumbItem:it["default"],Thumbnail:ot["default"],Progressbar:at["default"]}},function(t,e){"use strict";t.exports={props:{bsStyle:{type:String,"default":"default"},bsSize:{type:String,"default":null}},created:function created(){var t="-",e=this;if(e.tag){if((e.classes[e.tag]=!0,e.bsStyle)){var n=e.bsStyle.split(",");0===n.length?e.classes[e.tag+t+n[0]]=!0:n.forEach(function(n){e.classes[e.tag+t+n]=!0})}e.bsSize&&(e.classes[e.tag+t+e.bsSize]=!0)}}}},function(t,e){"use strict";t.exports={props:{href:{type:String,"default":null},target:{type:String,"default":"_self"}}}},function(t,e,n){t.exports=n(48),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(91)},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(i[o]=!0)}for(s=0;s<e.length;s++){var r=e[s];"number"==typeof r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],s=f[i.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++){s.parts[o](i.parts[o])}for(;o<i.parts.length;o++){s.parts.push(u(i.parts[o],e))}}else {for(var r=[],o=0;o<i.parts.length;o++){r.push(u(i.parts[o],e))}f[i.id]={id:i.id,refs:1,parts:r}}}}function s(t){for(var e=[],n={},i=0;i<t.length;i++){var s=t[i],o=s[0],r=s[1],a=s[2],l=s[3],u={css:r,media:a,sourceMap:l};n[o]?n[o].parts.push(u):e.push(n[o]={id:o,parts:[u]})}return e}function o(t,e){var n=m(),i=b[b.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),b.push(e);else {if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function r(t){t.parentNode.removeChild(t);var e=b.indexOf(t);e>=0&&b.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",o(t,e),e}function l(t){var e=document.createElement("link");return e.rel="stylesheet",o(t,e),e}function u(t,e){var n,i,s;if(e.singleton){var o=_++;n=g||(g=a(e)),i=c.bind(null,n,o,!1),s=c.bind(null,n,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(e),i=p.bind(null,n),s=function(){r(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),i=h.bind(null,n),s=function(){r(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else s()}}function c(t,e,n,i){var s=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=y(e,s);else {var o=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}function h(t,e){var n=e.css,i=e.media;e.sourceMap;if((i&&t.setAttribute("media",i),t.styleSheet))t.styleSheet.cssText=n;else {for(;t.firstChild;){t.removeChild(t.firstChild)}t.appendChild(document.createTextNode(n))}}function p(t,e){var n=e.css,i=(e.media,e.sourceMap);i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent((0,_stringify2.default)(i))))+" */");var s=new Blob([n],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(s),o&&URL.revokeObjectURL(o)}var f={},d=function d(t){var e;return function(){return "undefined"==typeof e&&(e=t.apply(this,arguments)),e}},v=d(function(){return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase()))}),m=d(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,_=0,b=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=v()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=s(t);return i(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var a=n[r],l=f[a.id];l.refs--,o.push(l)}if(t){var u=s(t);i(u,e)}for(var r=0;r<o.length;r++){var l=o[r];if(0===l.refs){for(var c=0;c<l.parts.length;c++){l.parts[c]()}delete f[l.id]}}}};var y=(function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}})()},function(t,e,n){t.exports=n(63),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(106)},,,,,function(t,e,n){(function(e){ /*!
		 * Vue.js v1.0.10
		 * (c) 2015 Evan You
		 * Released under the MIT License.
		 */"use strict";function n(t,e,i){if(s(t,e))return void (t[e]=i);if(t._isVue)return void n(t._data,e,i);var o=t.__ob__;if(!o)return void (t[e]=i);if((o.convert(e,i),o.dep.notify(),o.vms))for(var r=o.vms.length;r--;){var a=o.vms[r];a._proxy(e),a._digest()}}function i(t,e){if(s(t,e)){delete t[e];var n=t.__ob__;if(n&&(n.dep.notify(),n.vms))for(var i=n.vms.length;i--;){var o=n.vms[i];o._unproxy(e),o._digest()}}}function s(t,e){return gn.call(t,e)}function o(t){return _n.test(t)}function r(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function a(t){return null==t?"":t.toString()}function l(t){if("string"!=typeof t)return t;var e=Number(t);return isNaN(e)?t:e}function u(t){return "true"===t?!0:"false"===t?!1:t}function c(t){var e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e!==n||34!==e&&39!==e?t:t.slice(1,-1)}function h(t){return t.replace(bn,p)}function p(t,e){return e?e.toUpperCase():""}function f(t){return t.replace(yn,"$1-$2").toLowerCase()}function d(t){return t.replace(xn,p)}function v(t,e){return function(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}}function m(t,e){e=e||0;for(var n=t.length-e,i=new Array(n);n--;){i[n]=t[n+e]}return i}function g(t,e){for(var n=(0,_keys2.default)(e),i=n.length;i--;){t[n[i]]=e[n[i]]}return t}function _(t){return null!==t&&"object"==(typeof t==="undefined"?"undefined":(0,_typeof3.default)(t))}function b(t){return wn.call(t)===En}function y(t,e,n,i){(0,_defineProperty2.default)(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}function x(t,e){var n,i,s,o,r,a=function l(){var a=Date.now()-o;e>a&&a>=0?n=setTimeout(l,e-a):(n=null,r=t.apply(s,i),n||(s=i=null))};return function(){return s=this,i=arguments,o=Date.now(),n||(n=setTimeout(a,e)),r}}function w(t,e){for(var n=t.length;n--;){if(t[n]===e)return n}return -1}function E(t){var e=function n(){return n.cancelled?void 0:t.apply(this,arguments)};return e.cancel=function(){e.cancelled=!0},e}function C(t,e){return t==e||(_(t)&&_(e)?(0,_stringify2.default)(t)===(0,_stringify2.default)(e):!1)}function O(t){this.size=0,this.limit=t,this.head=this.tail=void 0,this._keymap=(0,_create2.default)(null)}function k(){var t,e=Ln.slice(zn,Bn).trim();if(e){t={};var n=e.match(Gn);t.name=n[0],n.length>1&&(t.args=n.slice(1).map($))}t&&(In.filters=In.filters||[]).push(t),zn=Bn+1}function $(t){if(Kn.test(t))return {value:l(t),dynamic:!1};var e=c(t),n=e===t;return {value:n?t:e,dynamic:n}}function N(t){var e=Yn.get(t);if(e)return e;for(Ln=t,Hn=Un=!1,Wn=qn=Jn=0,zn=0,In={},Bn=0,Rn=Ln.length;Rn>Bn;Bn++){if((Fn=Ln.charCodeAt(Bn),Hn))39===Fn&&(Hn=!Hn);else if(Un)34===Fn&&(Un=!Un);else if(124===Fn&&124!==Ln.charCodeAt(Bn+1)&&124!==Ln.charCodeAt(Bn-1))null==In.expression?(zn=Bn+1,In.expression=Ln.slice(0,Bn).trim()):k();else switch(Fn){case 34:Un=!0;break;case 39:Hn=!0;break;case 40:Jn++;break;case 41:Jn--;break;case 91:qn++;break;case 93:qn--;break;case 123:Wn++;break;case 125:Wn--;}}return null==In.expression?In.expression=Ln.slice(0,Bn).trim():0!==zn&&k(),Yn.put(t,In),In}function A(t){return t.replace(Zn,"\\$&")}function P(){var t=A(ri.delimiters[0]),e=A(ri.delimiters[1]),n=A(ri.unsafeDelimiters[0]),i=A(ri.unsafeDelimiters[1]);ti=new RegExp(n+"(.+?)"+i+"|"+t+"(.+?)"+e,"g"),ei=new RegExp("^"+n+".*"+i+"$"),Xn=new O(1000)}function S(t){Xn||P();var e=Xn.get(t);if(e)return e;if((t=t.replace(/\n/g,""),!ti.test(t)))return null;for(var n,i,s,o,r,a,l=[],u=ti.lastIndex=0;n=ti.exec(t);){i=n.index,i>u&&l.push({value:t.slice(u,i)}),s=ei.test(n[0]),o=s?n[1]:n[2],r=o.charCodeAt(0),a=42===r,o=a?o.slice(1):o,l.push({tag:!0,value:o.trim(),html:s,oneTime:a}),u=i+n[0].length}return u<t.length&&l.push({value:t.slice(u)}),Xn.put(t,l),l}function D(t){return t.length>1?t.map(function(t){return T(t)}).join("+"):T(t[0],!0)}function T(t,e){return t.tag?M(t.value,e):"\""+t.value+"\""}function M(t,e){if(ni.test(t)){var n=N(t);return n.filters?"this._applyFilters("+n.expression+",null,"+(0,_stringify2.default)(n.filters)+",false)":"("+t+")"}return e?t:"("+t+")"}function j(t,e,n,i){I(t,1,function(){e.appendChild(t)},n,i)}function V(t,e,n,i){I(t,1,function(){H(t,e)},n,i)}function L(t,e,n){I(t,-1,function(){W(t)},e,n)}function I(t,e,n,i,s){var o=t.__v_trans;if(!o||!o.hooks&&!Pn||!i._isCompiled||i.$parent&&!i.$parent._isCompiled)return n(),void (s&&s());var r=e>0?"enter":"leave";o[r](n,s)}function F(t){if("string"==typeof t){var n=t;t=document.querySelector(t),t||"production"!==e.env.NODE_ENV&&ai("Cannot find element: "+n)}return t}function B(t){var e=document.documentElement,n=t&&t.parentNode;return e===t||e===n||!(!n||1!==n.nodeType||!e.contains(n))}function R(t,e){var n=t.getAttribute(e);return null!==n&&t.removeAttribute(e),n}function z(t,e){var n=R(t,":"+e);return null===n&&(n=R(t,"v-bind:"+e)),n}function H(t,e){e.parentNode.insertBefore(t,e)}function U(t,e){e.nextSibling?H(t,e.nextSibling):e.parentNode.appendChild(t)}function W(t){t.parentNode.removeChild(t)}function q(t,e){e.firstChild?H(t,e.firstChild):e.appendChild(t)}function J(t,e){var n=t.parentNode;n&&n.replaceChild(e,t)}function Y(t,e,n){t.addEventListener(e,n)}function G(t,e,n){t.removeEventListener(e,n)}function K(t,e){if(t.classList)t.classList.add(e);else {var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Q(t,e){if(t.classList)t.classList.remove(e);else {for(var n=" "+(t.getAttribute("class")||"")+" ",i=" "+e+" ";n.indexOf(i)>=0;){n=n.replace(i," ")}t.setAttribute("class",n.trim())}t.className||t.removeAttribute("class")}function Z(t,e){var n,i;if((et(t)&&t.content instanceof DocumentFragment&&(t=t.content),t.hasChildNodes()))for(X(t),i=e?document.createDocumentFragment():document.createElement("div");n=t.firstChild;){i.appendChild(n)}return i}function X(t){tt(t,t.firstChild),tt(t,t.lastChild)}function tt(t,e){e&&3===e.nodeType&&!e.data.trim()&&t.removeChild(e)}function et(t){return t.tagName&&"template"===t.tagName.toLowerCase()}function nt(t,e){var n=ri.debug?document.createComment(t):document.createTextNode(e?" ":"");return n.__vue_anchor=!0,n}function it(t){if(t.hasAttributes())for(var e=t.attributes,n=0,i=e.length;i>n;n++){var s=e[n].name;if(li.test(s))return h(s.replace(li,""))}}function st(t,e,n){for(var i;t!==e;){i=t.nextSibling,n(t),t=i}n(e)}function ot(t,e,n,i,s){function o(){if((a++,r&&a>=l.length)){for(var t=0;t<l.length;t++){i.appendChild(l[t])}s&&s()}}var r=!1,a=0,l=[];st(t,e,function(t){t===e&&(r=!0),l.push(t),L(t,n,o)})}function rt(t,n){var i=t.tagName.toLowerCase(),s=t.hasAttributes();if(ui.test(i)||"component"===i){if(s)return at(t)}else {if(_t(n,"components",i))return {id:i};var o=s&&at(t);if(o)return o;"production"!==e.env.NODE_ENV&&(i.indexOf("-")>-1||/HTMLUnknownElement/.test(t.toString())&&!/^(data|time|rtc|rb)$/.test(i))&&ai("Unknown custom element: <"+i+"> - did you register the component correctly?")}}function at(t){var e=R(t,"is");return null!=e?{id:e}:(e=z(t,"is"),null!=e?{id:e,dynamic:!0}:void 0)}function lt(t,e,n){var i=e.path;t[i]=t._data[i]=ut(e,n)?n:void 0}function ut(t,n){if(null===t.raw&&!t.required)return !0;var i,s=t.options,o=s.type,r=!0;if((o&&(o===String?(i="string",r=(typeof n==="undefined"?"undefined":(0,_typeof3.default)(n))===i):o===Number?(i="number",r="number"==typeof n):o===Boolean?(i="boolean",r="boolean"==typeof n):o===Function?(i="function",r="function"==typeof n):o===Object?(i="object",r=b(n)):o===Array?(i="array",r=Cn(n)):r=n instanceof o),!r))return "production"!==e.env.NODE_ENV&&ai("Invalid prop: type check failed for "+t.path+"=\""+t.raw+"\". Expected "+ct(i)+", got "+ht(n)+"."),!1;var a=s.validator;return a&&!a.call(null,n)?("production"!==e.env.NODE_ENV&&ai("Invalid prop: custom validator check failed for "+t.path+"=\""+t.raw+"\""),!1):!0}function ct(t){return t?t.charAt(0).toUpperCase()+t.slice(1):"custom type"}function ht(t){return Object.prototype.toString.call(t).slice(8,-1)}function pt(t,e){var i,o,r;for(i in e){o=t[i],r=e[i],s(t,i)?_(o)&&_(r)&&pt(o,r):n(t,i,r)}return t}function ft(t,e){var n=(0,_create2.default)(t);return e?g(n,mt(e)):n}function dt(t){if(t.components)for(var n,i=t.components=mt(t.components),s=(0,_keys2.default)(i),o=0,r=s.length;r>o;o++){var a=s[o];ui.test(a)?"production"!==e.env.NODE_ENV&&ai("Do not use built-in HTML elements as component id: "+a):(n=i[a],b(n)&&(i[a]=hn.extend(n)))}}function vt(t){var e,n,i=t.props;if(Cn(i))for(t.props={},e=i.length;e--;){n=i[e],"string"==typeof n?t.props[n]=null:n.name&&(t.props[n.name]=n)}else if(b(i)){var s=(0,_keys2.default)(i);for(e=s.length;e--;){n=i[s[e]],"function"==typeof n&&(i[s[e]]={type:n})}}}function mt(t){if(Cn(t)){for(var n,i={},s=t.length;s--;){n=t[s];var o="function"==typeof n?n.options&&n.options.name||n.id:n.name||n.id;o?i[o]=n:"production"!==e.env.NODE_ENV&&ai("Array-syntax assets must provide a \"name\" or \"id\" field.")}return i}return t}function gt(t,e,n){function i(i){var s=ci[i]||hi;r[i]=s(t[i],e[i],n,i)}dt(e),vt(e);var o,r={};if(e.mixins)for(var a=0,l=e.mixins.length;l>a;a++){t=gt(t,e.mixins[a],n)}for(o in t){i(o)}for(o in e){s(t,o)||i(o)}return r}function _t(t,e,n){var i,s=t[e];return s[n]||s[i=h(n)]||s[i.charAt(0).toUpperCase()+i.slice(1)]}function bt(t,n,i){t||"production"!==e.env.NODE_ENV&&ai("Failed to resolve "+n+": "+i)}function yt(){this.id=di++,this.subs=[]}function xt(t){if((this.value=t,this.dep=new yt,y(t,"__ob__",this),Cn(t))){var e=On?wt:Et;e(t,fi,vi),this.observeArray(t)}else this.walk(t)}function wt(t,e){t.__proto__=e}function Et(t,e,n){for(var i,s=n.length;s--;){i=n[s],y(t,i,e[i])}}function Ct(t,e){if(t&&"object"==(typeof t==="undefined"?"undefined":(0,_typeof3.default)(t))){var n;return s(t,"__ob__")&&t.__ob__ instanceof xt?n=t.__ob__:!Cn(t)&&!b(t)||(0,_isFrozen2.default)(t)||t._isVue||(n=new xt(t)),n&&e&&n.addVm(e),n}}function Ot(t,e,n){var i,s,o=new yt;if(ri.convertAllProperties){var r=(0,_getOwnPropertyDescriptor2.default)(t,e);if(r&&r.configurable===!1)return;i=r&&r.get,s=r&&r.set}var a=Ct(n);(0,_defineProperty2.default)(t,e,{enumerable:!0,configurable:!0,get:function get(){var e=i?i.call(t):n;if(yt.target&&(o.depend(),a&&a.dep.depend(),Cn(e)))for(var s,r=0,l=e.length;l>r;r++){s=e[r],s&&s.__ob__&&s.__ob__.dep.depend()}return e},set:function set(e){var r=i?i.call(t):n;e!==r&&(s?s.call(t,e):n=e,a=Ct(e),o.notify())}})}function kt(t){t.prototype._init=function(t){t=t||{},this.$el=null,this.$parent=t.parent,this.$root=this.$parent?this.$parent.$root:this,this.$children=[],this.$refs={},this.$els={},this._watchers=[],this._directives=[],this._uid=gi++,this._isVue=!0,this._events={},this._eventsCount={},this._isFragment=!1,this._fragment=this._fragmentStart=this._fragmentEnd=null,this._isCompiled=this._isDestroyed=this._isReady=this._isAttached=this._isBeingDestroyed=!1,this._unlinkFn=null,this._context=t._context||this.$parent,this._scope=t._scope,this._frag=t._frag,this._frag&&this._frag.children.push(this),this.$parent&&this.$parent.$children.push(this),t=this.$options=gt(this.constructor.options,t,this),this._updateRef(),this._data={},this._callHook("init"),this._initState(),this._initEvents(),this._callHook("created"),t.el&&this.$mount(t.el)}}function $t(t){if(void 0===t)return "eof";var e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:case 48:return t;case 95:case 36:return "ident";case 32:case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return "ws";}return e>=97&&122>=e||e>=65&&90>=e?"ident":e>=49&&57>=e?"number":"else"}function Nt(t){var e=t.trim();return "0"===t.charAt(0)&&isNaN(t)?!1:o(e)?c(e):"*"+e}function At(t){function e(){var e=t[c+1];return h===Ni&&"'"===e||h===Ai&&"\""===e?(c++,i="\\"+e,f[bi](),!0):void 0}var n,i,s,o,r,a,l,u=[],c=-1,h=Ei,p=0,f=[];for(f[yi]=function(){void 0!==s&&(u.push(s),s=void 0)},f[bi]=function(){void 0===s?s=i:s+=i},f[xi]=function(){f[bi](),p++},f[wi]=function(){if(p>0)p--,h=$i,f[bi]();else {if((p=0,s=Nt(s),s===!1))return !1;f[yi]()}};null!=h;){if((c++,n=t[c],"\\"!==n||!e())){if((o=$t(n),l=Di[h],r=l[o]||l["else"]||Si,r===Si))return;if((h=r[0],a=f[r[1]],a&&(i=r[2],i=void 0===i?n:i,a()===!1)))return;if(h===Pi)return u.raw=t,u}}}function Pt(t){var e=_i.get(t);return e||(e=At(t),e&&_i.put(t,e)),e}function St(t,e){return Ft(e).get(t)}function Dt(t,i,s){var o=t;if(("string"==typeof i&&(i=At(i)),!i||!_(t)))return !1;for(var r,a,l=0,u=i.length;u>l;l++){r=t,a=i[l],"*"===a.charAt(0)&&(a=Ft(a.slice(1)).get.call(o,o)),u-1>l?(t=t[a],_(t)||(t={},"production"!==e.env.NODE_ENV&&r._isVue&&Ti(i),n(r,a,t))):Cn(t)?t.$set(a,s):a in t?t[a]=s:("production"!==e.env.NODE_ENV&&t._isVue&&Ti(i),n(t,a,s))}return !0}function Tt(t,e){var n=Ji.length;return Ji[n]=e?t.replace(Ri,"\\n"):t,"\""+n+"\""}function Mt(t){var e=t.charAt(0),n=t.slice(1);return Li.test(n)?t:(n=n.indexOf("\"")>-1?n.replace(Hi,jt):n,e+"scope."+n)}function jt(t,e){return Ji[e]}function Vt(t){Fi.test(t)&&"production"!==e.env.NODE_ENV&&ai("Avoid using reserved keywords in expression: "+t),Ji.length=0;var n=t.replace(zi,Tt).replace(Bi,"");return n=(" "+n).replace(Wi,Mt).replace(Hi,jt),Lt(n)}function Lt(t){try{return new Function("scope","return "+t+";")}catch(n) {"production"!==e.env.NODE_ENV&&ai("Invalid expression. Generated function body: "+t)}}function It(t){var n=Pt(t);return n?function(t,e){Dt(t,n,e)}:void ("production"!==e.env.NODE_ENV&&ai("Invalid setter expression: "+t))}function Ft(t,e){t=t.trim();var n=ji.get(t);if(n)return e&&!n.set&&(n.set=It(n.exp)),n;var i={exp:t};return i.get=Bt(t)&&t.indexOf("[")<0?Lt("scope."+t):Vt(t),e&&(i.set=It(t)),ji.put(t,i),i}function Bt(t){return Ui.test(t)&&!qi.test(t)&&"Math."!==t.slice(0,5)}function Rt(){Gi=[],Ki=[],Qi={},Zi={},Xi=ts=!1}function zt(){Ht(Gi),ts=!0,Ht(Ki),"production"!==e.env.NODE_ENV&&kn&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("flush"),Rt()}function Ht(t){for(var n=0;n<t.length;n++){var i=t[n],s=i.id;Qi[s]=null,i.run(),"production"!==e.env.NODE_ENV&&null!=Qi[s]&&(Zi[s]=(Zi[s]||0)+1,Zi[s]>ri._maxUpdateCount&&(t.splice(Qi[s],1),ai("You may have an infinite update loop for watcher with expression: "+i.expression)))}}function Ut(t){var e=t.id;if(null==Qi[e]){if(ts&&!t.user)return void t.run();var n=t.user?Ki:Gi;Qi[e]=n.length,n.push(t),Xi||(Xi=!0,jn(zt))}}function Wt(t,e,n,i){i&&g(this,i);var s="function"==typeof e;if((this.vm=t,t._watchers.push(this),this.expression=s?e.toString():e,this.cb=n,this.id=++es,this.active=!0,this.dirty=this.lazy,this.deps=(0,_create2.default)(null),this.newDeps=null,this.prevError=null,s))this.getter=e,this.setter=void 0;else {var o=Ft(e,this.twoWay);this.getter=o.get,this.setter=o.set}this.value=this.lazy?void 0:this.get(),this.queued=this.shallow=!1}function qt(t){var e,n;if(Cn(t))for(e=t.length;e--;){qt(t[e])}else if(_(t))for(n=(0,_keys2.default)(t),e=n.length;e--;){qt(t[n[e]])}}function Jt(t){if(ls[t])return ls[t];var e=Yt(t);return ls[t]=ls[e]=e,e}function Yt(t){t=f(t);var e=h(t),n=e.charAt(0).toUpperCase()+e.slice(1);if((us||(us=document.createElement("div")),e in us.style))return t;for(var i,s=os.length;s--;){if((i=rs[s]+n,i in us.style))return os[s]+t}}function Gt(t,e){var n=e.map(function(t){var e=t.charCodeAt(0);return e>47&&58>e?parseInt(t,10):1===t.length&&(e=t.toUpperCase().charCodeAt(0),e>64&&91>e)?e:gs[t]});return function(e){return n.indexOf(e.keyCode)>-1?t.call(this,e):void 0}}function Kt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Qt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Zt(t,e,n){for(var i,s,o,r=e?[]:null,a=0,l=t.options.length;l>a;a++){if((i=t.options[a],o=n?i.hasAttribute("selected"):i.selected)){if((s=i.hasOwnProperty("_value")?i._value:i.value,!e))return s;r.push(s)}}return r}function Xt(t,e){for(var n=t.length;n--;){if(C(t[n],e))return n}return -1}function te(t){return et(t)&&t.content instanceof DocumentFragment}function ee(t,e){var n=ks.get(t);if(n)return n;var i=document.createDocumentFragment(),s=t.match(As),o=Ps.test(t);if(s||o){var r=s&&s[1],a=Ns[r]||Ns.efault,l=a[0],u=a[1],c=a[2],h=document.createElement("div");for(e||(t=t.trim()),h.innerHTML=u+t+c;l--;){h=h.lastChild}for(var p;p=h.firstChild;){i.appendChild(p)}}else i.appendChild(document.createTextNode(t));return ks.put(t,i),i}function ne(t){if(te(t))return X(t.content),t.content;if("SCRIPT"===t.tagName)return ee(t.textContent);for(var e,n=ie(t),i=document.createDocumentFragment();e=n.firstChild;){i.appendChild(e)}return X(i),i}function ie(t){if(!t.querySelectorAll)return t.cloneNode();var e,n,i,s=t.cloneNode(!0);if(Ss){var o=s;if((te(t)&&(t=t.content,o=s.content),n=t.querySelectorAll("template"),n.length))for(i=o.querySelectorAll("template"),e=i.length;e--;){i[e].parentNode.replaceChild(ie(n[e]),i[e])}}if(Ds)if("TEXTAREA"===t.tagName)s.value=t.value;else if((n=t.querySelectorAll("textarea"),n.length))for(i=s.querySelectorAll("textarea"),e=i.length;e--;){i[e].value=n[e].value}return s}function se(t,e,n){var i,s;return t instanceof DocumentFragment?(X(t),e?ie(t):t):("string"==typeof t?n||"#"!==t.charAt(0)?s=ee(t,n):(s=$s.get(t),s||(i=document.getElementById(t.slice(1)),i&&(s=ne(i),$s.put(t,s)))):t.nodeType&&(s=ne(t)),s&&e?ie(s):s)}function oe(t,e,n,i,s,o){this.children=[],this.childFrags=[],this.vm=e,this.scope=s,this.inserted=!1,this.parentFrag=o,o&&o.childFrags.push(this),this.unlink=t(e,n,i,s,this);var r=this.single=1===n.childNodes.length&&!n.childNodes[0].__vue_anchor;r?(this.node=n.childNodes[0],this.before=re,this.remove=ae):(this.node=nt("fragment-start"),this.end=nt("fragment-end"),this.frag=n,q(this.node,n),n.appendChild(this.end),this.before=le,this.remove=ue),this.node.__vfrag__=this}function re(t,e){this.inserted=!0;var n=e!==!1?V:H;n(this.node,t,this.vm),B(this.node)&&this.callHook(ce)}function ae(){this.inserted=!1;var t=B(this.node),e=this;e.callHook(he),L(this.node,this.vm,function(){t&&e.callHook(pe),e.destroy()})}function le(t,e){this.inserted=!0;var n=this.vm,i=e!==!1?V:H;st(this.node,this.end,function(e){i(e,t,n)}),B(this.node)&&this.callHook(ce)}function ue(){this.inserted=!1;var t=this,e=B(this.node);t.callHook(he),ot(this.node,this.end,this.vm,this.frag,function(){e&&t.callHook(pe),t.destroy()})}function ce(t){t._isAttached||t._callHook("attached")}function he(t){t.$destroy(!1,!0)}function pe(t){t._isAttached&&t._callHook("detached")}function fe(t,e){this.vm=t;var n,i="string"==typeof e;i||et(e)?n=se(e,!0):(n=document.createDocumentFragment(),n.appendChild(e)),this.template=n;var s,o=t.constructor.cid;if(o>0){var r=o+(i?e:e.outerHTML);s=Ms.get(r),s||(s=ke(n,t.$options,!0),Ms.put(r,s))}else s=ke(n,t.$options,!0);this.linker=s}function de(t,e,n){var i=t.node.previousSibling;if(i){for(t=i.__vfrag__;!(t&&t.forId===n&&t.inserted||i===e);){if((i=i.previousSibling,!i))return;t=i.__vfrag__}return t}}function ve(t){var e=t.node;if(t.end)for(;!e.__vue__&&e!==t.end&&e.nextSibling;){e=e.nextSibling}return e.__vue__}function me(t){for(var e=-1,n=new Array(t);++e<t;){n[e]=e}return n}function ge(t){Rs.push(t),zs||(zs=!0,jn(_e))}function _e(){for(var t=document.documentElement.offsetHeight,e=0;e<Rs.length;e++){Rs[e]()}return Rs=[],zs=!1,t}function be(t,e,n,i){this.id=e,this.el=t,this.enterClass=e+"-enter",this.leaveClass=e+"-leave",this.hooks=n,this.vm=i,this.pendingCssEvent=this.pendingCssCb=this.cancel=this.pendingJsCb=this.op=this.cb=null,this.justEntered=!1,this.entered=this.left=!1,this.typeCache={};var s=this;["enterNextTick","enterDone","leaveNextTick","leaveDone"].forEach(function(t){s[t]=v(s[t],s)})}function ye(t){return !(t.offsetWidth||t.offsetHeight||t.getClientRects().length)}function xe(t){for(var e={},n=t.trim().split(/\s+/),i=n.length;i--;){e[n[i]]=!0}return e}function we(t,e){return Cn(t)?t.indexOf(e)>-1:s(t,e)}function Ee(t,n){for(var i,s,r,a,l,u,c,p=[],d=(0,_keys2.default)(n),v=d.length;v--;){s=d[v],i=n[s]||eo,"production"===e.env.NODE_ENV||"$data"!==s?(l=h(s),no.test(l)?(c={name:s,path:l,options:i,mode:to.ONE_WAY,raw:null},r=f(s),null===(a=z(t,r))&&(null!==(a=z(t,r+".sync"))?c.mode=to.TWO_WAY:null!==(a=z(t,r+".once"))&&(c.mode=to.ONE_TIME)),null!==a?(c.raw=a,u=N(a),a=u.expression,c.filters=u.filters,o(a)?c.optimizedLiteral=!0:(c.dynamic=!0,"production"===e.env.NODE_ENV||c.mode!==to.TWO_WAY||io.test(a)||(c.mode=to.ONE_WAY,ai("Cannot bind two-way prop with non-settable parent path: "+a))),c.parentPath=a,"production"!==e.env.NODE_ENV&&i.twoWay&&c.mode!==to.TWO_WAY&&ai("Prop \""+s+"\" expects a two-way binding type.")):null!==(a=R(t,r))?c.raw=a:i.required&&"production"!==e.env.NODE_ENV&&ai("Missing required prop: "+s),p.push(c)):"production"!==e.env.NODE_ENV&&ai("Invalid prop key: \""+s+"\". Prop keys must be valid identifiers.")):ai("Do not use $data as prop.")}return Ce(p)}function Ce(t){return function(n,i){n._props={};for(var s,o,r,a,h,p=t.length;p--;){if((s=t[p],h=s.raw,o=s.path,r=s.options,n._props[o]=s,null===h))lt(n,s,Oe(n,r));else if(s.dynamic)n._context?s.mode===to.ONE_TIME?(a=(i||n._context).$get(s.parentPath),lt(n,s,a)):n._bindDir({name:"prop",def:Ks,prop:s},null,null,i):"production"!==e.env.NODE_ENV&&ai("Cannot bind dynamic prop on a root instance with no parent: "+s.name+"=\""+h+"\"");else if(s.optimizedLiteral){var f=c(h);a=f===h?u(l(h)):f,lt(n,s,a)}else a=r.type===Boolean&&""===h?!0:h,lt(n,s,a)}}}function Oe(t,n){if(!s(n,"default"))return n.type===Boolean?!1:void 0;var i=n["default"];return _(i)&&"production"!==e.env.NODE_ENV&&ai("Object/Array as default prop values will be shared across multiple instances. Use a factory function to return the default value instead."),"function"==typeof i&&n.type!==Function?i.call(t):i}function ke(t,e,n){var i=n||!e._asComponent?Te(t,e):null,s=i&&i.terminal||"SCRIPT"===t.tagName||!t.hasChildNodes()?null:Fe(t.childNodes,e);return function(t,e,n,o,r){var a=m(e.childNodes),l=$e(function(){i&&i(t,e,n,o,r),s&&s(t,a,n,o,r)},t);return Ae(t,l)}}function $e(t,e){var n=e._directives.length;t();var i=e._directives.slice(n);i.sort(Ne);for(var s=0,o=i.length;o>s;s++){i[s]._bind()}return i}function Ne(t,e){return t=t.descriptor.def.priority||co,e=e.descriptor.def.priority||co,t>e?-1:t===e?0:1}function Ae(t,e,n,i){return function(s){Pe(t,e,s),n&&i&&Pe(n,i)}}function Pe(t,e,n){for(var i=e.length;i--;){e[i]._teardown(),n||t._directives.$remove(e[i])}}function Se(t,e,n,i){var s=Ee(e,n),o=$e(function(){s(t,i)},t);return Ae(t,o)}function De(t,n,i){var s,o,r=n._containerAttrs,a=n._replacerAttrs;if(11!==t.nodeType)n._asComponent?(r&&i&&(s=qe(r,i)),a&&(o=qe(a,n))):o=qe(t.attributes,n);else if("production"!==e.env.NODE_ENV&&r){var l=r.filter(function(t){return t.name.indexOf("_v-")<0&&!oo.test(t.name)&&"slot"!==t.name}).map(function(t){return "\""+t.name+"\""});if(l.length){var u=l.length>1;ai("Attribute"+(u?"s ":" ")+l.join(", ")+(u?" are":" is")+" ignored on component <"+n.el.tagName.toLowerCase()+"> because the component is a fragment instance: http://vuejs.org/guide/components.html#Fragment_Instance")}}return function(t,e,n){var i,r=t._context;r&&s&&(i=$e(function(){s(r,e,null,n)},r));var a=$e(function(){o&&o(t,e)},t);return Ae(t,a,r,i)}}function Te(t,e){var n=t.nodeType;return 1===n&&"SCRIPT"!==t.tagName?Me(t,e):3===n&&t.data.trim()?je(t,e):null}function Me(t,e){if("TEXTAREA"===t.tagName){var n=S(t.value);n&&(t.setAttribute(":value",D(n)),t.value="")}var i,s=t.hasAttributes();return s&&(i=He(t,e)),i||(i=Re(t,e)),i||(i=ze(t,e)),!i&&s&&(i=qe(t.attributes,e)),i}function je(t,e){if(t._skip)return Ve;var n=S(t.wholeText);if(!n)return null;for(var i=t.nextSibling;i&&3===i.nodeType;){i._skip=!0,i=i.nextSibling}for(var s,o,r=document.createDocumentFragment(),a=0,l=n.length;l>a;a++){o=n[a],s=o.tag?Le(o,e):document.createTextNode(o.value),r.appendChild(s)}return Ie(n,r,e)}function Ve(t,e){W(e)}function Le(t,e){function n(e){if(!t.descriptor){var n=N(t.value);t.descriptor={name:e,def:Bs[e],expression:n.expression,filters:n.filters}}}var i;return t.oneTime?i=document.createTextNode(t.value):t.html?(i=document.createComment("v-html"),n("html")):(i=document.createTextNode(" "),n("text")),i}function Ie(t,e){return function(n,i,s,o){for(var r,a,l,u=e.cloneNode(!0),c=m(u.childNodes),h=0,p=t.length;p>h;h++){r=t[h],a=r.value,r.tag&&(l=c[h],r.oneTime?(a=(o||n).$eval(a),r.html?J(l,se(a,!0)):l.data=a):n._bindDir(r.descriptor,l,s,o))}J(i,u)}}function Fe(t,e){for(var n,i,s,o=[],r=0,a=t.length;a>r;r++){s=t[r],n=Te(s,e),i=n&&n.terminal||"SCRIPT"===s.tagName||!s.hasChildNodes()?null:Fe(s.childNodes,e),o.push(n,i)}return o.length?Be(o):null}function Be(t){return function(e,n,i,s,o){for(var r,a,l,u=0,c=0,h=t.length;h>u;c++){r=n[c],a=t[u++],l=t[u++];var p=m(r.childNodes);a&&a(e,r,i,s,o),l&&l(e,p,i,s,o)}}}function Re(t,e){var n=t.tagName.toLowerCase();if(!ui.test(n)){var i=_t(e,"elementDirectives",n);return i?We(t,n,"",e,i):void 0}}function ze(t,e){var n=rt(t,e);if(n){var i=it(t),s={name:"component",ref:i,expression:n.id,def:Xs.component,modifiers:{literal:!n.dynamic}},o=function o(t,e,n,_o2,r){i&&Ot((_o2||t).$refs,i,null),t._bindDir(s,e,n,_o2,r)};return o.terminal=!0,o}}function He(t,e){if(null!==R(t,"v-pre"))return Ue;if(t.hasAttribute("v-else")){var n=t.previousElementSibling;if(n&&n.hasAttribute("v-if"))return Ue}for(var i,s,o=0,r=uo.length;r>o;o++){if((s=uo[o],i=t.getAttribute("v-"+s)))return We(t,s,i,e)}}function Ue(){}function We(t,e,n,i,s){var o=N(n),r={name:e,expression:o.expression,filters:o.filters,raw:n,def:s||Bs[e]};("for"===e||"router-view"===e)&&(r.ref=it(t));var a=function a(t,e,n,i,s){r.ref&&Ot((i||t).$refs,r.ref,null),t._bindDir(r,e,n,i,s)};return a.terminal=!0,a}function qe(t,n){function i(t,e,n){var i=N(r);v.push({name:t,attr:a,raw:l,def:e,arg:c,modifiers:h,expression:i.expression,filters:i.filters,interp:n})}for(var s,o,r,a,l,u,c,h,p,f,d=t.length,v=[];d--;){if((s=t[d],o=a=s.name,r=l=s.value,f=S(r),c=null,h=Je(o),o=o.replace(ao,""),f))r=D(f),c=o,i("bind",Bs.bind,!0),"production"!==e.env.NODE_ENV&&"class"===o&&Array.prototype.some.call(t,function(t){return ":class"===t.name||"v-bind:class"===t.name})&&ai("class=\""+l+"\": Do not mix mustache interpolation and v-bind for \"class\" on the same element. Use one or the other.");else if(lo.test(o))h.literal=!so.test(o),i("transition",Xs.transition);else if(oo.test(o))c=o.replace(oo,""),i("on",Bs.on);else if(so.test(o))u=o.replace(so,""),"style"===u||"class"===u?i(u,Xs[u]):(c=u,i("bind",Bs.bind));else if(0===o.indexOf("v-")){if((c=(c=o.match(ro))&&c[1],c&&(o=o.replace(ro,"")),u=o.slice(2),"else"===u))continue;p=_t(n,"directives",u),"production"!==e.env.NODE_ENV&&bt(p,"directive",u),p&&i(u,p)}}return v.length?Ye(v):void 0}function Je(t){var e=(0,_create2.default)(null),n=t.match(ao);if(n)for(var i=n.length;i--;){e[n[i].slice(1)]=!0}return e}function Ye(t){return function(e,n,i,s,o){for(var r=t.length;r--;){e._bindDir(t[r],n,i,s,o)}}}function Ge(t,e){return e&&(e._containerAttrs=Qe(t)),et(t)&&(t=se(t)),e&&(e._asComponent&&!e.template&&(e.template="<slot></slot>"),e.template&&(e._content=Z(t),t=Ke(t,e))),t instanceof DocumentFragment&&(q(nt("v-start",!0),t),t.appendChild(nt("v-end",!0))),t}function Ke(t,n){var i=n.template,s=se(i,!0);if(s){var o=s.firstChild,r=o.tagName&&o.tagName.toLowerCase();return n.replace?(t===document.body&&"production"!==e.env.NODE_ENV&&ai("You are mounting an instance with a template to <body>. This will replace <body> entirely. You should probably use `replace: false` here."),s.childNodes.length>1||1!==o.nodeType||"component"===r||_t(n,"components",r)||o.hasAttribute("is")||o.hasAttribute(":is")||o.hasAttribute("v-bind:is")||_t(n,"elementDirectives",r)||o.hasAttribute("v-for")||o.hasAttribute("v-if")?s:(n._replacerAttrs=Qe(o),Ze(t,o),o)):(t.appendChild(s),t)}"production"!==e.env.NODE_ENV&&ai("Invalid template option: "+i)}function Qe(t){return 1===t.nodeType&&t.hasAttributes()?m(t.attributes):void 0}function Ze(t,e){for(var n,i,s=t.attributes,o=s.length;o--;){n=s[o].name,i=s[o].value,e.hasAttribute(n)||ho.test(n)?"class"===n&&i.split(/\s+/).forEach(function(t){K(e,t)}):e.setAttribute(n,i)}}function Xe(t){function i(){}function o(t,e){var n=new Wt(e,t,null,{lazy:!0});return function(){return n.dirty&&n.evaluate(),yt.target&&n.depend(),n.value}}Object.defineProperty(t.prototype,"$data",{get:function get(){return this._data},set:function set(t){t!==this._data&&this._setData(t)}}),t.prototype._initState=function(){this._initProps(),this._initMeta(),this._initMethods(),this._initData(),this._initComputed()},t.prototype._initProps=function(){var t=this.$options,n=t.el,i=t.props;i&&!n&&"production"!==e.env.NODE_ENV&&ai("Props will not be compiled if no `el` option is provided at instantiation."),n=t.el=F(n),this._propsUnlinkFn=n&&1===n.nodeType&&i?Se(this,n,i,this._scope):null},t.prototype._initData=function(){var t=this._data,i=this.$options.data,o=i&&i();if(o){this._data=o;for(var r in t){"production"!==e.env.NODE_ENV&&s(o,r)&&ai("Data field \""+r+"\" is already defined as a prop. Use prop default value instead."),null===this._props[r].raw&&s(o,r)||n(o,r,t[r])}}var a,l,u=this._data,c=(0,_keys2.default)(u);for(a=c.length;a--;){l=c[a],this._proxy(l)}Ct(u,this)},t.prototype._setData=function(t){t=t||{};var e=this._data;this._data=t;var n,i,o;for(n=(0,_keys2.default)(e),o=n.length;o--;){i=n[o],i in t||this._unproxy(i)}for(n=(0,_keys2.default)(t),o=n.length;o--;){i=n[o],s(this,i)||this._proxy(i)}e.__ob__.removeVm(this),Ct(t,this),this._digest()},t.prototype._proxy=function(t){if(!r(t)){var e=this;(0,_defineProperty2.default)(e,t,{configurable:!0,enumerable:!0,get:function get(){return e._data[t]},set:function set(n){e._data[t]=n}})}},t.prototype._unproxy=function(t){r(t)||delete this[t]},t.prototype._digest=function(){for(var t=0,e=this._watchers.length;e>t;t++){this._watchers[t].update(!0)}},t.prototype._initComputed=function(){var t=this.$options.computed;if(t)for(var e in t){var n=t[e],s={enumerable:!0,configurable:!0};"function"==typeof n?(s.get=o(n,this),s.set=i):(s.get=n.get?n.cache!==!1?o(n.get,this):v(n.get,this):i,s.set=n.set?v(n.set,this):i),(0,_defineProperty2.default)(this,e,s)}},t.prototype._initMethods=function(){var t=this.$options.methods;if(t)for(var e in t){this[e]=v(t[e],this)}},t.prototype._initMeta=function(){var t=this.$options._meta;if(t)for(var e in t){Ot(this,e,t[e])}}}function tn(t){function n(t,e){for(var n,i,s=e.attributes,o=0,r=s.length;r>o;o++){n=s[o].name,fo.test(n)&&(n=n.replace(fo,""),i=(t._scope||t._context).$eval(s[o].value,!0),t.$on(n.replace(fo),i))}}function i(t,e,n){if(n){var i,o,r,a;for(o in n){if((i=n[o],Cn(i)))for(r=0,a=i.length;a>r;r++){s(t,e,o,i[r])}else s(t,e,o,i)}}}function s(t,n,i,o,r){var a=typeof o==="undefined"?"undefined":(0,_typeof3.default)(o);if("function"===a)t[n](i,o,r);else if("string"===a){var l=t.$options.methods,u=l&&l[o];u?t[n](i,u,r):"production"!==e.env.NODE_ENV&&ai("Unknown method: \""+o+"\" when registering callback for "+n+": \""+i+"\".")}else o&&"object"===a&&s(t,n,i,o.handler,o)}function o(){this._isAttached||(this._isAttached=!0,this.$children.forEach(r))}function r(t){!t._isAttached&&B(t.$el)&&t._callHook("attached")}function a(){this._isAttached&&(this._isAttached=!1,this.$children.forEach(l))}function l(t){t._isAttached&&!B(t.$el)&&t._callHook("detached")}t.prototype._initEvents=function(){var t=this.$options;t._asComponent&&n(this,t.el),i(this,"$on",t.events),i(this,"$watch",t.watch)},t.prototype._initDOMHooks=function(){this.$on("hook:attached",o),this.$on("hook:detached",a)},t.prototype._callHook=function(t){var e=this.$options[t];if(e)for(var n=0,i=e.length;i>n;n++){e[n].call(this)}this.$emit("hook:"+t)}}function en(){}function nn(t,n,i,s,o,r){this.vm=n,this.el=i,this.descriptor=t,this.name=t.name,this.expression=t.expression,this.arg=t.arg,this.modifiers=t.modifiers,this.filters=t.filters,this.literal=this.modifiers&&this.modifiers.literal,this._locked=!1,this._bound=!1,this._listeners=null,this._host=s,this._scope=o,this._frag=r,"production"!==e.env.NODE_ENV&&this.el&&(this.el._vue_directives=this.el._vue_directives||[],this.el._vue_directives.push(this))}function sn(t){t.prototype._updateRef=function(t){var e=this.$options._ref;if(e){var n=(this._scope||this._context).$refs;t?n[e]===this&&(n[e]=null):n[e]=this}},t.prototype._compile=function(t){var e=this.$options,n=t;t=Ge(t,e),this._initElement(t);var i,s=this._context&&this._context.$options,o=De(t,e,s),r=this.constructor;e._linkerCachable&&(i=r.linker,i||(i=r.linker=ke(t,e)));var a=o(this,t,this._scope),l=i?i(this,t):ke(t,e)(this,t);return this._unlinkFn=function(){a(),l(!0)},e.replace&&J(n,t),this._isCompiled=!0,this._callHook("compiled"),t},t.prototype._initElement=function(t){t instanceof DocumentFragment?(this._isFragment=!0,this.$el=this._fragmentStart=t.firstChild,this._fragmentEnd=t.lastChild,3===this._fragmentStart.nodeType&&(this._fragmentStart.data=this._fragmentEnd.data=""),this._fragment=t):this.$el=t,this.$el.__vue__=this,this._callHook("beforeCompile")},t.prototype._bindDir=function(t,e,n,i,s){this._directives.push(new nn(t,this,e,n,i,s))},t.prototype._destroy=function(t,e){if(this._isBeingDestroyed)return void (e||this._cleanup());this._callHook("beforeDestroy"),this._isBeingDestroyed=!0;var n,i=this.$parent;for(i&&!i._isBeingDestroyed&&(i.$children.$remove(this),this._updateRef(!0)),n=this.$children.length;n--;){this.$children[n].$destroy()}for(this._propsUnlinkFn&&this._propsUnlinkFn(),this._unlinkFn&&this._unlinkFn(),n=this._watchers.length;n--;){this._watchers[n].teardown()}this.$el&&(this.$el.__vue__=null);var s=this;t&&this.$el?this.$remove(function(){s._cleanup()}):e||this._cleanup()},t.prototype._cleanup=function(){this._isDestroyed||(this._frag&&this._frag.children.$remove(this),this._data.__ob__&&this._data.__ob__.removeVm(this),this.$el=this.$parent=this.$root=this.$children=this._watchers=this._context=this._scope=this._directives=null,this._isDestroyed=!0,this._callHook("destroyed"),this.$off())}}function on(t){t.prototype._applyFilters=function(t,n,i,s){var o,r,a,l,u,c,h,p,f;for(c=0,h=i.length;h>c;c++){if((o=i[c],r=_t(this.$options,"filters",o.name),"production"!==e.env.NODE_ENV&&bt(r,"filter",o.name),r&&(r=s?r.write:r.read||r,"function"==typeof r))){if((a=s?[t,n]:[t],u=s?2:1,o.args))for(p=0,f=o.args.length;f>p;p++){l=o.args[p],a[p+u]=l.dynamic?this.$get(l.value):l.value}t=r.apply(this,a)}}return t},t.prototype._resolveComponent=function(n,i){var s=_t(this.$options,"components",n);if(("production"!==e.env.NODE_ENV&&bt(s,"component",n),s))if(s.options)i(s);else if(s.resolved)i(s.resolved);else if(s.requested)s.pendingCallbacks.push(i);else {s.requested=!0;var o=s.pendingCallbacks=[i];s(function(e){b(e)&&(e=t.extend(e)),s.resolved=e;for(var n=0,i=o.length;i>n;n++){o[n](e)}},function(t){"production"!==e.env.NODE_ENV&&ai("Failed to resolve async component: "+n+". "+(t?"\nReason: "+t:""))})}}}function rn(t){function s(t){return new Function("return function "+d(t)+" (options) { this._init(options) }")()}t.util=mi,t.config=ri,t.set=n,t["delete"]=i,t.nextTick=jn,t.compiler=po,t.FragmentFactory=fe,t.internalDirectives=Xs,t.parsers={path:Mi,text:ii,template:Ts,directive:Qn,expression:Yi},t.cid=0;var o=1;t.extend=function(t){t=t||{};var e=this,n=0===e.cid;if(n&&t._Ctor)return t._Ctor;var i=t.name||e.options.name,r=s(i||"VueComponent");return r.prototype=(0,_create2.default)(e.prototype),r.prototype.constructor=r,r.cid=o++,r.options=gt(e.options,t),r["super"]=e,r.extend=e.extend,ri._assetTypes.forEach(function(t){r[t]=e[t]}),i&&(r.options.components[i]=r),n&&(t._Ctor=r),r},t.use=function(t){if(!t.installed){var e=m(arguments,1);return e.unshift(this),"function"==typeof t.install?t.install.apply(t,e):t.apply(null,e),t.installed=!0,this}},t.mixin=function(e){t.options=gt(t.options,e)},ri._assetTypes.forEach(function(n){t[n]=function(i,s){return s?("production"!==e.env.NODE_ENV&&"component"===n&&ui.test(i)&&ai("Do not use built-in HTML elements as component id: "+i),"component"===n&&b(s)&&(s.name=i,s=t.extend(s)),this.options[n+"s"][i]=s,s):this.options[n+"s"][i]}})}function an(t){function e(t){return JSON.parse((0,_stringify2.default)(t))}t.prototype.$get=function(t,e){var n=Ft(t);if(n){if(e&&!Bt(t)){var i=this;return function(){n.get.call(i,i)}}try{return n.get.call(this,this)}catch(s) {}}},t.prototype.$set=function(t,e){var n=Ft(t,!0);n&&n.set&&n.set.call(this,this,e)},t.prototype.$delete=function(t){i(this._data,t)},t.prototype.$watch=function(t,e,n){var i,s=this;"string"==typeof t&&(i=N(t),t=i.expression);var o=new Wt(s,t,e,{deep:n&&n.deep,filters:i&&i.filters});return n&&n.immediate&&e.call(s,o.value),function(){o.teardown()}},t.prototype.$eval=function(t,e){if(vo.test(t)){var n=N(t),i=this.$get(n.expression,e);return n.filters?this._applyFilters(i,null,n.filters):i}return this.$get(t,e)},t.prototype.$interpolate=function(t){var e=S(t),n=this;return e?1===e.length?n.$eval(e[0].value)+"":e.map(function(t){return t.tag?n.$eval(t.value):t.value}).join(""):t},t.prototype.$log=function(t){var n=t?St(this._data,t):this._data;if((n&&(n=e(n)),!t))for(var i in this.$options.computed){n[i]=e(this[i])}console.log(n)}}function ln(t){function e(t,e,i,s,o,r){e=n(e);var a=!B(e),l=s===!1||a?o:r,u=!a&&!t._isAttached&&!B(t.$el);return t._isFragment?(st(t._fragmentStart,t._fragmentEnd,function(n){l(n,e,t)}),i&&i()):l(t.$el,e,t,i),u&&t._callHook("attached"),t}function n(t){return "string"==typeof t?document.querySelector(t):t}function i(t,e,n,i){e.appendChild(t),i&&i()}function s(t,e,n,i){H(t,e),i&&i()}function o(t,e,n){W(t),n&&n()}t.prototype.$nextTick=function(t){jn(t,this)},t.prototype.$appendTo=function(t,n,s){return e(this,t,n,s,i,j)},t.prototype.$prependTo=function(t,e,i){return t=n(t),t.hasChildNodes()?this.$before(t.firstChild,e,i):this.$appendTo(t,e,i),this},t.prototype.$before=function(t,n,i){return e(this,t,n,i,s,V)},t.prototype.$after=function(t,e,i){return t=n(t),t.nextSibling?this.$before(t.nextSibling,e,i):this.$appendTo(t.parentNode,e,i),this},t.prototype.$remove=function(t,e){if(!this.$el.parentNode)return t&&t();var n=this._isAttached&&B(this.$el);n||(e=!1);var i=this,s=function s(){n&&i._callHook("detached"),t&&t()};if(this._isFragment)ot(this._fragmentStart,this._fragmentEnd,this,this._fragment,s);else {var r=e===!1?o:L;r(this.$el,this,s)}return this}}function un(t){function e(t,e,i){var s=t.$parent;if(s&&i&&!n.test(e))for(;s;){s._eventsCount[e]=(s._eventsCount[e]||0)+i,s=s.$parent}}t.prototype.$on=function(t,n){return (this._events[t]||(this._events[t]=[])).push(n),e(this,t,1),this},t.prototype.$once=function(t,e){function n(){i.$off(t,n),e.apply(this,arguments)}var i=this;return n.fn=e,this.$on(t,n),this},t.prototype.$off=function(t,n){var i;if(!arguments.length){if(this.$parent)for(t in this._events){i=this._events[t],i&&e(this,t,-i.length)}return this._events={},this}if((i=this._events[t],!i))return this;if(1===arguments.length)return e(this,t,-i.length),this._events[t]=null,this;for(var s,o=i.length;o--;){if((s=i[o],s===n||s.fn===n)){e(this,t,-1),i.splice(o,1);break}}return this},t.prototype.$emit=function(t){var e=this._events[t],n=!e;if(e){e=e.length>1?m(e):e;for(var i=m(arguments,1),s=0,o=e.length;o>s;s++){var r=e[s].apply(this,i);r===!0&&(n=!0)}}return n},t.prototype.$broadcast=function(t){if(this._eventsCount[t]){for(var e=this.$children,n=0,i=e.length;i>n;n++){var s=e[n],o=s.$emit.apply(s,arguments);o&&s.$broadcast.apply(s,arguments)}return this}},t.prototype.$dispatch=function(){this.$emit.apply(this,arguments);for(var t=this.$parent;t;){var e=t.$emit.apply(t,arguments);t=e?t.$parent:null}return this};var n=/^hook:/}function cn(t){function n(){this._isAttached=!0,this._isReady=!0,this._callHook("ready")}t.prototype.$mount=function(t){return this._isCompiled?void ("production"!==e.env.NODE_ENV&&ai("$mount() should be called only once.")):(t=F(t),t||(t=document.createElement("div")),this._compile(t),this._initDOMHooks(),B(this.$el)?(this._callHook("attached"),n.call(this)):this.$once("hook:attached",n),this)},t.prototype.$destroy=function(t,e){this._destroy(t,e)},t.prototype.$compile=function(t,e,n,i){return ke(t,this.$options,!0)(this,t,e,n,i)}}function hn(t){this._init(t)}function pn(t,e,n){return n=n?parseInt(n,10):0,"number"==typeof e?t.slice(n,n+e):t}function fn(t,e,n){if((t=mo(t),null==e))return t;if("function"==typeof e)return t.filter(e);e=(""+e).toLowerCase();for(var i,s,o,r,a="in"===n?3:2,l=m(arguments,a).reduce(function(t,e){return t.concat(e)},[]),u=[],c=0,h=t.length;h>c;c++){if((i=t[c],o=i&&i.$value||i,r=l.length)){for(;r--;){if((s=l[r],"$key"===s&&vn(i.$key,e)||vn(St(o,s),e))){u.push(i);break}}}else vn(i,e)&&u.push(i)}return u}function dn(t,e,n){if((t=mo(t),!e))return t;var i=n&&0>n?-1:1;return t.slice().sort(function(t,n){return "$key"!==e&&(_(t)&&"$value" in t&&(t=t.$value),_(n)&&"$value" in n&&(n=n.$value)),t=_(t)?St(t,e):t,n=_(n)?St(n,e):n,t===n?0:t>n?i:-i})}function vn(t,e){var n;if(b(t)){var i=(0,_keys2.default)(t);for(n=i.length;n--;){if(vn(t[i[n]],e))return !0}}else if(Cn(t)){for(n=t.length;n--;){if(vn(t[n],e))return !0}}else if(null!=t)return t.toString().toLowerCase().indexOf(e)>-1}function mn(t,e,n){function i(t){!et(t)||t.hasAttribute("v-if")||t.hasAttribute("v-for")||(t=se(t)),t=ie(t),s.appendChild(t)}for(var s=document.createDocumentFragment(),o=0,r=t.length;r>o;o++){var a=t[o];n&&!a.__v_selected?i(a):n||a.parentNode!==e||(a.__v_selected=!0,i(a))}return s}var gn=Object.prototype.hasOwnProperty,_n=/^\s?(true|false|[\d\.]+|'[^']*'|"[^"]*")\s?$/,bn=/-(\w)/g,yn=/([a-z\d])([A-Z])/g,xn=/(?:^|[-_\/])(\w)/g,wn=Object.prototype.toString,En="[object Object]",Cn=Array.isArray,On="__proto__" in {},kn="undefined"!=typeof window&&"[object Object]"!==Object.prototype.toString.call(window),$n=kn&&navigator.userAgent.toLowerCase().indexOf("msie 9.0")>0,Nn=kn&&navigator.userAgent.toLowerCase().indexOf("android")>0,An=void 0,Pn=void 0,Sn=void 0,Dn=void 0;if(kn&&!$n){var Tn=void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend,Mn=void 0===window.onanimationend&&void 0!==window.onwebkitanimationend;An=Tn?"WebkitTransition":"transition",Pn=Tn?"webkitTransitionEnd":"transitionend",Sn=Mn?"WebkitAnimation":"animation",Dn=Mn?"webkitAnimationEnd":"animationend"}var jn=(function(){function t(){i=!1;var t=n.slice(0);n=[];for(var e=0;e<t.length;e++){t[e]()}}var e,n=[],i=!1;if("undefined"!=typeof MutationObserver){var s=1,o=new MutationObserver(t),r=document.createTextNode(s);o.observe(r,{characterData:!0}),e=function(){s=(s+1)%2,r.data=s}}else e=setTimeout;return function(s,o){var r=o?function(){s.call(o)}:s;n.push(r),i||(i=!0,e(t,0))}})(),Vn=O.prototype;Vn.put=function(t,e){var n={key:t,value:e};return this._keymap[t]=n,this.tail?(this.tail.newer=n,n.older=this.tail):this.head=n,this.tail=n,this.size===this.limit?this.shift():void this.size++},Vn.shift=function(){var t=this.head;return t&&(this.head=this.head.newer,this.head.older=void 0,t.newer=t.older=void 0,this._keymap[t.key]=void 0),t},Vn.get=function(t,e){var n=this._keymap[t];if(void 0!==n)return n===this.tail?e?n:n.value:(n.newer&&(n===this.head&&(this.head=n.newer),n.newer.older=n.older),n.older&&(n.older.newer=n.newer),n.newer=void 0,n.older=this.tail,this.tail&&(this.tail.newer=n),this.tail=n,e?n:n.value)};var Ln,In,Fn,Bn,Rn,zn,Hn,Un,Wn,qn,Jn,Yn=new O(1000),Gn=/[^\s'"]+|'[^']*'|"[^"]*"/g,Kn=/^in$|^-?\d+/,Qn=(0,_freeze2.default)({parseDirective:N}),Zn=/[-.*+?^${}()|[\]\/\\]/g,Xn=void 0,ti=void 0,ei=void 0,ni=/[^|]\|[^|]/,ii=(0,_freeze2.default)({compileRegex:P,parseText:S,tokensToExp:D}),si=["{{","}}"],oi=["{{{","}}}"],ri=(0,_defineProperties2.default)({debug:!1,silent:!1,async:!0,warnExpressionErrors:!0,convertAllProperties:!1,_delimitersChanged:!0,_assetTypes:["component","directive","elementDirective","filter","transition","partial"],_propBindingModes:{ONE_WAY:0,TWO_WAY:1,ONE_TIME:2},_maxUpdateCount:100},{delimiters:{get:function get(){return si},set:function set(t){si=t,P()},configurable:!0,enumerable:!0},unsafeDelimiters:{get:function get(){return oi},set:function set(t){oi=t,P()},configurable:!0,enumerable:!0}}),ai=void 0;"production"!==e.env.NODE_ENV&&!(function(){var t="undefined"!=typeof console;ai=function(e,n){if(t&&(!ri.silent||ri.debug)&&(console.warn("[Vue warn]: "+e),ri.debug)){if(n)throw n;console.warn(new Error("Warning Stack Trace").stack)}}})();var li=/^v-ref:/,ui=/^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/,ci=ri.optionMergeStrategies=(0,_create2.default)(null);ci.data=function(t,n,i){return i?t||n?function(){var e="function"==typeof n?n.call(i):n,s="function"==typeof t?t.call(i):void 0;return e?pt(e,s):s}:void 0:n?"function"!=typeof n?("production"!==e.env.NODE_ENV&&ai("The \"data\" option should be a function that returns a per-instance value in component definitions."),t):t?function(){return pt(n.call(this),t.call(this))}:n:t},ci.el=function(t,n,i){if(!i&&n&&"function"!=typeof n)return void ("production"!==e.env.NODE_ENV&&ai("The \"el\" option should be a function that returns a per-instance value in component definitions."));var s=n||t;return i&&"function"==typeof s?s.call(i):s},ci.init=ci.created=ci.ready=ci.attached=ci.detached=ci.beforeCompile=ci.compiled=ci.beforeDestroy=ci.destroyed=function(t,e){return e?t?t.concat(e):Cn(e)?e:[e]:t},ci.paramAttributes=function(){"production"!==e.env.NODE_ENV&&ai("\"paramAttributes\" option has been deprecated in 0.12. Use \"props\" instead.")},ri._assetTypes.forEach(function(t){ci[t+"s"]=ft}),ci.watch=ci.events=function(t,e){if(!e)return t;if(!t)return e;var n={};g(n,t);for(var i in e){var s=n[i],o=e[i];s&&!Cn(s)&&(s=[s]),n[i]=s?s.concat(o):[o]}return n},ci.props=ci.methods=ci.computed=function(t,e){if(!e)return t;if(!t)return e;var n=(0,_create2.default)(null);return g(n,t),g(n,e),n};var hi=function hi(t,e){return void 0===e?t:e},pi=Array.prototype,fi=(0,_create2.default)(pi);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=pi[t];y(fi,t,function(){for(var n=arguments.length,i=new Array(n);n--;){i[n]=arguments[n]}var s,o=e.apply(this,i),r=this.__ob__;switch(t){case "push":s=i;break;case "unshift":s=i;break;case "splice":s=i.slice(2);}return s&&r.observeArray(s),r.dep.notify(),o})}),y(pi,"$set",function(t,e){return t>=this.length&&(this.length=t+1),this.splice(t,1,e)[0]}),y(pi,"$remove",function(t){if(this.length){var e=w(this,t);return e>-1?this.splice(e,1):void 0}});var di=0;yt.target=null,yt.prototype.addSub=function(t){this.subs.push(t)},yt.prototype.removeSub=function(t){this.subs.$remove(t)},yt.prototype.depend=function(){yt.target.addDep(this)},yt.prototype.notify=function(){for(var t=m(this.subs),e=0,n=t.length;n>e;e++){t[e].update()}};var vi=(0,_getOwnPropertyNames2.default)(fi);xt.prototype.walk=function(t){for(var e=(0,_keys2.default)(t),n=e.length;n--;){this.convert(e[n],t[e[n]])}},xt.prototype.observeArray=function(t){for(var e=t.length;e--;){Ct(t[e])}},xt.prototype.convert=function(t,e){Ot(this.value,t,e)},xt.prototype.addVm=function(t){(this.vms||(this.vms=[])).push(t)},xt.prototype.removeVm=function(t){this.vms.$remove(t)};var mi=(0,_freeze2.default)({defineReactive:Ot,set:n,del:i,hasOwn:s,isLiteral:o,isReserved:r,_toString:a,toNumber:l,toBoolean:u,stripQuotes:c,camelize:h,hyphenate:f,classify:d,bind:v,toArray:m,extend:g,isObject:_,isPlainObject:b,def:y,debounce:x,indexOf:w,cancellable:E,looseEqual:C,isArray:Cn,hasProto:On,inBrowser:kn,isIE9:$n,isAndroid:Nn,get transitionProp(){return An},get transitionEndEvent(){return Pn},get animationProp(){return Sn},get animationEndEvent(){return Dn},nextTick:jn,query:F,inDoc:B,getAttr:R,getBindAttr:z,before:H,after:U,remove:W,prepend:q,replace:J,on:Y,off:G,addClass:K,removeClass:Q,extractContent:Z,trimNode:X,isTemplate:et,createAnchor:nt,findRef:it,mapNodeRange:st,removeNodeRange:ot,mergeOptions:gt,resolveAsset:_t,assertAsset:bt,checkComponentAttr:rt,initProp:lt,assertProp:ut,commonTagRE:ui,get warn(){return ai}}),gi=0,_i=new O(1000),bi=0,yi=1,xi=2,wi=3,Ei=0,Ci=1,Oi=2,ki=3,$i=4,Ni=5,Ai=6,Pi=7,Si=8,Di=[];Di[Ei]={ws:[Ei],ident:[ki,bi],"[":[$i],eof:[Pi]},Di[Ci]={ws:[Ci],".":[Oi],"[":[$i],eof:[Pi]},Di[Oi]={ws:[Oi],ident:[ki,bi]},Di[ki]={ident:[ki,bi],0:[ki,bi],number:[ki,bi],ws:[Ci,yi],".":[Oi,yi],"[":[$i,yi],eof:[Pi,yi]},Di[$i]={"'":[Ni,bi],"\"":[Ai,bi],"[":[$i,xi],"]":[Ci,wi],eof:Si,"else":[$i,bi]},Di[Ni]={"'":[$i,bi],eof:Si,"else":[Ni,bi]},Di[Ai]={"\"":[$i,bi],eof:Si,"else":[Ai,bi]};var Ti;"production"!==e.env.NODE_ENV&&(Ti=function(t){ai("You are setting a non-existent path \""+t.raw+"\" on a vm instance. Consider pre-initializing the property with the \"data\" option for more reliable reactivity and better performance.")});var Mi=(0,_freeze2.default)({parsePath:Pt,getPath:St,setPath:Dt}),ji=new O(1000),Vi="Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat",Li=new RegExp("^("+Vi.replace(/,/g,"\\b|")+"\\b)"),Ii="break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,proctected,static,interface,private,public",Fi=new RegExp("^("+Ii.replace(/,/g,"\\b|")+"\\b)"),Bi=/\s/g,Ri=/\n/g,zi=/[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g,Hi=/"(\d+)"/g,Ui=/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/,Wi=/[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g,qi=/^(true|false)$/,Ji=[],Yi=(0,_freeze2.default)({parseExpression:Ft,isSimplePath:Bt}),Gi=[],Ki=[],Qi={},Zi={},Xi=!1,ts=!1,es=0;Wt.prototype.addDep=function(t){var e=t.id;this.newDeps[e]||(this.newDeps[e]=t,this.deps[e]||(this.deps[e]=t,t.addSub(this)))},Wt.prototype.get=function(){this.beforeGet();var t,n=this.scope||this.vm;try{t=this.getter.call(n,n)}catch(i) {"production"!==e.env.NODE_ENV&&ri.warnExpressionErrors&&ai("Error when evaluating expression \""+this.expression+"\". "+(ri.debug?"":"Turn on debug mode to see stack trace."),i)}return this.deep&&qt(t),this.preProcess&&(t=this.preProcess(t)),this.filters&&(t=n._applyFilters(t,null,this.filters,!1)),this.postProcess&&(t=this.postProcess(t)),this.afterGet(),t},Wt.prototype.set=function(t){var n=this.scope||this.vm;this.filters&&(t=n._applyFilters(t,this.value,this.filters,!0));try{this.setter.call(n,n,t)}catch(i) {"production"!==e.env.NODE_ENV&&ri.warnExpressionErrors&&ai("Error when evaluating setter \""+this.expression+"\"",i)}var s=n.$forContext;if(s&&s.alias===this.expression){if(s.filters)return void ("production"!==e.env.NODE_ENV&&ai("It seems you are using two-way binding on a v-for alias ("+this.expression+"), and the v-for has filters. This will not work properly. Either remove the filters or use an array of objects and bind to object properties instead."));s._withLock(function(){n.$key?s.rawValue[n.$key]=t:s.rawValue.$set(n.$index,t)})}},Wt.prototype.beforeGet=function(){yt.target=this,this.newDeps=(0,_create2.default)(null)},Wt.prototype.afterGet=function(){yt.target=null;for(var t=(0,_keys2.default)(this.deps),e=t.length;e--;){var n=t[e];this.newDeps[n]||this.deps[n].removeSub(this)}this.deps=this.newDeps},Wt.prototype.update=function(t){this.lazy?this.dirty=!0:this.sync||!ri.async?this.run():(this.shallow=this.queued?t?this.shallow:!1:!!t,this.queued=!0,"production"!==e.env.NODE_ENV&&ri.debug&&(this.prevError=new Error("[vue] async stack trace")),Ut(this))},Wt.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||(Cn(t)||this.deep)&&!this.shallow){var n=this.value;this.value=t;var i=this.prevError;if("production"!==e.env.NODE_ENV&&ri.debug&&i){this.prevError=null;try{this.cb.call(this.vm,t,n)}catch(s) {throw jn(function(){throw i},0),s}}else this.cb.call(this.vm,t,n)}this.queued=this.shallow=!1}},Wt.prototype.evaluate=function(){var t=yt.target;this.value=this.get(),this.dirty=!1,yt.target=t},Wt.prototype.depend=function(){for(var t=(0,_keys2.default)(this.deps),e=t.length;e--;){this.deps[t[e]].depend()}},Wt.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||this.vm._watchers.$remove(this);for(var t=(0,_keys2.default)(this.deps),e=t.length;e--;){this.deps[t[e]].removeSub(this)}this.active=!1,this.vm=this.cb=this.value=null}};var ns={bind:function bind(){var t=this.el;this.vm.$once("hook:compiled",function(){t.removeAttribute("v-cloak")})}},is={bind:function bind(){"production"!==e.env.NODE_ENV&&ai("v-ref:"+this.arg+" must be used on a child component. Found on <"+this.el.tagName.toLowerCase()+">.")}},ss={priority:1500,bind:function bind(){if(this.arg){var t=this.id=h(this.arg),e=(this._scope||this.vm).$els;s(e,t)?e[t]=this.el:Ot(e,t,this.el)}},unbind:function unbind(){var t=(this._scope||this.vm).$els;t[this.id]===this.el&&(t[this.id]=null)}},os=["-webkit-","-moz-","-ms-"],rs=["Webkit","Moz","ms"],as=/!important;?$/,ls=(0,_create2.default)(null),us=null,cs={deep:!0,update:function update(t){"string"==typeof t?this.el.style.cssText=t:Cn(t)?this.handleObject(t.reduce(g,{})):this.handleObject(t||{})},handleObject:function handleObject(t){var e,n,i=this.cache||(this.cache={});for(e in i){e in t||(this.handleSingle(e,null),delete i[e])}for(e in t){n=t[e],n!==i[e]&&(i[e]=n,this.handleSingle(e,n))}},handleSingle:function handleSingle(t,e){if(t=Jt(t))if((null!=e&&(e+=""),e)){var n=as.test(e)?"important":"";n&&(e=e.replace(as,"").trim()),this.el.style.setProperty(t,e,n)}else this.el.style.removeProperty(t)}},hs="http://www.w3.org/1999/xlink",ps=/^xlink:/,fs={value:1,checked:1,selected:1},ds={value:"_value","true-value":"_trueValue","false-value":"_falseValue"},vs=/^v-|^:|^@|^(is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/,ms={priority:850,bind:function bind(){var t=this.arg,n=this.el.tagName;if((t||(this.deep=!0),this.descriptor.interp&&((vs.test(t)||"name"===t&&("PARTIAL"===n||"SLOT"===n))&&("production"!==e.env.NODE_ENV&&ai(t+"=\""+this.descriptor.raw+"\": attribute interpolation is not allowed in Vue.js directives and special attributes."),this.el.removeAttribute(t),this.invalid=!0),"production"!==e.env.NODE_ENV))){var i=t+"=\""+this.descriptor.raw+"\": ";"src"===t&&ai(i+"interpolation in \"src\" attribute will cause a 404 request. Use v-bind:src instead."),"style"===t&&ai(i+"interpolation in \"style\" attribute will cause the attribute to be discarded in Internet Explorer. Use v-bind:style instead.")}},update:function update(t){if(!this.invalid){var e=this.arg;this.arg?this.handleSingle(e,t):this.handleObject(t||{})}},handleObject:cs.handleObject,handleSingle:function handleSingle(t,e){fs[t]&&t in this.el&&(this.el[t]="value"===t?e||"":e);var n=ds[t];if(n){this.el[n]=e;var i=this.el.__v_model;i&&i.listener()}return "value"===t&&"TEXTAREA"===this.el.tagName?void this.el.removeAttribute(t):void (null!=e&&e!==!1?ps.test(t)?this.el.setAttributeNS(hs,t,e):this.el.setAttribute(t,e):this.el.removeAttribute(t))}},gs={esc:27,tab:9,enter:13,space:32,"delete":46,up:38,left:37,right:39,down:40},_s={acceptStatement:!0,priority:700,bind:function bind(){if("IFRAME"===this.el.tagName&&"load"!==this.arg){var t=this;this.iframeBind=function(){Y(t.el.contentWindow,t.arg,t.handler)},this.on("load",this.iframeBind)}},update:function update(t){if((this.descriptor.raw||(t=function(){}),"function"!=typeof t))return void ("production"!==e.env.NODE_ENV&&ai("v-on:"+this.arg+"=\""+this.expression+"\" expects a function value, got "+t));this.modifiers.stop&&(t=Kt(t)),this.modifiers.prevent&&(t=Qt(t));var n=(0,_keys2.default)(this.modifiers).filter(function(t){return "stop"!==t&&"prevent"!==t});n.length&&(t=Gt(t,n)),this.reset(),this.handler=t,this.iframeBind?this.iframeBind():Y(this.el,this.arg,this.handler)},reset:function reset(){var t=this.iframeBind?this.el.contentWindow:this.el;this.handler&&G(t,this.arg,this.handler)},unbind:function unbind(){this.reset()}},bs={bind:function bind(){function t(){var t=n.checked;return t&&n.hasOwnProperty("_trueValue")?n._trueValue:!t&&n.hasOwnProperty("_falseValue")?n._falseValue:t}var e=this,n=this.el;this.getValue=function(){return n.hasOwnProperty("_value")?n._value:e.params.number?l(n.value):n.value},this.listener=function(){var i=e._watcher.value;if(Cn(i)){var s=e.getValue();n.checked?w(i,s)<0&&i.push(s):i.$remove(s)}else e.set(t())},this.on("change",this.listener),n.checked&&(this.afterBind=this.listener)},update:function update(t){var e=this.el;Cn(t)?e.checked=w(t,this.getValue())>-1:e.hasOwnProperty("_trueValue")?e.checked=C(t,e._trueValue):e.checked=!!t}},ys={bind:function bind(){var t=this,e=this.el;this.forceUpdate=function(){t._watcher&&t.update(t._watcher.get())};var n=this.multiple=e.hasAttribute("multiple");this.listener=function(){var i=Zt(e,n);i=t.params.number?Cn(i)?i.map(l):l(i):i,t.set(i)},this.on("change",this.listener);var i=Zt(e,n,!0);(n&&i.length||!n&&null!==i)&&(this.afterBind=this.listener),this.vm.$on("hook:attached",this.forceUpdate)},update:function update(t){var e=this.el;e.selectedIndex=-1;for(var n,i,s=this.multiple&&Cn(t),o=e.options,r=o.length;r--;){n=o[r],i=n.hasOwnProperty("_value")?n._value:n.value,n.selected=s?Xt(t,i)>-1:C(t,i)}},unbind:function unbind(){this.vm.$off("hook:attached",this.forceUpdate)}},xs={bind:function bind(){var t=this,e=this.el;this.getValue=function(){if(e.hasOwnProperty("_value"))return e._value;var n=e.value;return t.params.number&&(n=l(n)),n},this.listener=function(){t.set(t.getValue())},this.on("change",this.listener),e.checked&&(this.afterBind=this.listener)},update:function update(t){this.el.checked=C(t,this.getValue())}},ws={bind:function bind(){var t=this,e=this.el,n="range"===e.type,i=this.params.lazy,s=this.params.number,o=this.params.debounce,r=!1;Nn||n||(this.on("compositionstart",function(){r=!0}),this.on("compositionend",function(){r=!1,i||t.listener()})),this.focused=!1,n||(this.on("focus",function(){t.focused=!0}),this.on("blur",function(){t.focused=!1,t.listener()})),this.listener=function(){if(!r){var i=s||n?l(e.value):e.value;t.set(i),jn(function(){t._bound&&!t.focused&&t.update(t._watcher.value)})}},o&&(this.listener=x(this.listener,o)),this.hasjQuery="function"==typeof jQuery,this.hasjQuery?(jQuery(e).on("change",this.listener),i||jQuery(e).on("input",this.listener)):(this.on("change",this.listener),i||this.on("input",this.listener)),!i&&$n&&(this.on("cut",function(){jn(t.listener)}),this.on("keyup",function(e){(46===e.keyCode||8===e.keyCode)&&t.listener()})),(e.hasAttribute("value")||"TEXTAREA"===e.tagName&&e.value.trim())&&(this.afterBind=this.listener)},update:function update(t){this.el.value=a(t)},unbind:function unbind(){var t=this.el;this.hasjQuery&&(jQuery(t).off("change",this.listener),jQuery(t).off("input",this.listener))}},Es={text:ws,radio:xs,select:ys,checkbox:bs},Cs={priority:800,twoWay:!0,handlers:Es,params:["lazy","number","debounce"],bind:function bind(){this.checkFilters(),this.hasRead&&!this.hasWrite&&"production"!==e.env.NODE_ENV&&ai("It seems you are using a read-only filter with v-model. You might want to use a two-way filter to ensure correct behavior.");var t,n=this.el,i=n.tagName;if("INPUT"===i)t=Es[n.type]||Es.text;else if("SELECT"===i)t=Es.select;else {if("TEXTAREA"!==i)return void ("production"!==e.env.NODE_ENV&&ai("v-model does not support element type: "+i));t=Es.text}n.__v_model=this,t.bind.call(this),this.update=t.update,this._unbind=t.unbind},checkFilters:function checkFilters(){var t=this.filters;if(t)for(var e=t.length;e--;){var n=_t(this.vm.$options,"filters",t[e].name);("function"==typeof n||n.read)&&(this.hasRead=!0),n.write&&(this.hasWrite=!0)}},unbind:function unbind(){this.el.__v_model=null,this._unbind&&this._unbind()}},Os={bind:function bind(){var t=this.el.nextElementSibling;t&&null!==R(t,"v-else")&&(this.elseEl=t)},update:function update(t){this.apply(this.el,t),this.elseEl&&this.apply(this.elseEl,!t)},apply:function apply(t,e){I(t,e?1:-1,function(){t.style.display=e?"":"none"},this.vm)}},ks=new O(1000),$s=new O(1000),Ns={efault:[0,"",""],legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]};Ns.td=Ns.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],Ns.option=Ns.optgroup=[1,"<select multiple=\"multiple\">","</select>"],Ns.thead=Ns.tbody=Ns.colgroup=Ns.caption=Ns.tfoot=[1,"<table>","</table>"],Ns.g=Ns.defs=Ns.symbol=Ns.use=Ns.image=Ns.text=Ns.circle=Ns.ellipse=Ns.line=Ns.path=Ns.polygon=Ns.polyline=Ns.rect=[1,"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:ev=\"http://www.w3.org/2001/xml-events\"version=\"1.1\">","</svg>"];var As=/<([\w:]+)/,Ps=/&\w+;|&#\d+;|&#x[\dA-F]+;/,Ss=(function(){if(kn){var t=document.createElement("div");return t.innerHTML="<template>1</template>",!t.cloneNode(!0).firstChild.innerHTML}return !1})(),Ds=(function(){if(kn){var t=document.createElement("textarea");return t.placeholder="t","t"===t.cloneNode(!0).value}return !1})(),Ts=(0,_freeze2.default)({cloneNode:ie,parseTemplate:se});oe.prototype.callHook=function(t){var e,n;for(e=0,n=this.children.length;n>e;e++){t(this.children[e])}for(e=0,n=this.childFrags.length;n>e;e++){this.childFrags[e].callHook(t)}},oe.prototype.destroy=function(){this.parentFrag&&this.parentFrag.childFrags.$remove(this),this.unlink()};var Ms=new O(5000);fe.prototype.create=function(t,e,n){var i=ie(this.template);return new oe(this.linker,this.vm,i,t,e,n)};var js={priority:2000,bind:function bind(){var t=this.el;if(t.__vue__)"production"!==e.env.NODE_ENV&&ai("v-if=\""+this.expression+"\" cannot be used on an instance root element."),this.invalid=!0;else {var n=t.nextElementSibling;n&&null!==R(n,"v-else")&&(W(n),this.elseFactory=new fe(this.vm,n)),this.anchor=nt("v-if"),J(t,this.anchor),this.factory=new fe(this.vm,t)}},update:function update(t){this.invalid||(t?this.frag||this.insert():this.remove())},insert:function insert(){this.elseFrag&&(this.elseFrag.remove(),this.elseFrag=null),this.frag=this.factory.create(this._host,this._scope,this._frag),this.frag.before(this.anchor)},remove:function remove(){this.frag&&(this.frag.remove(),this.frag=null),this.elseFactory&&!this.elseFrag&&(this.elseFrag=this.elseFactory.create(this._host,this._scope,this._frag),this.elseFrag.before(this.anchor))},unbind:function unbind(){this.frag&&this.frag.destroy()}},Vs=0,Ls={priority:2000,params:["track-by","stagger","enter-stagger","leave-stagger"],bind:function bind(){var t=this.expression.match(/(.*) in (.*)/);if(t){var n=t[1].match(/\((.*),(.*)\)/);n?(this.iterator=n[1].trim(),this.alias=n[2].trim()):this.alias=t[1].trim(),this.expression=t[2]}if(!this.alias)return void ("production"!==e.env.NODE_ENV&&ai("Alias is required in v-for."));this.id="__v-for__"+ ++Vs;var i=this.el.tagName;this.isOption=("OPTION"===i||"OPTGROUP"===i)&&"SELECT"===this.el.parentNode.tagName,this.start=nt("v-for-start"),this.end=nt("v-for-end"),J(this.el,this.end),H(this.start,this.end),this.cache=(0,_create2.default)(null),this.factory=new fe(this.vm,this.el)},update:function update(t){this.diff(t),this.updateRef(),this.updateModel()},diff:function diff(t){var e,n,i,o,r,a,l=t[0],u=this.fromObject=_(l)&&s(l,"$key")&&s(l,"$value"),c=this.params.trackBy,h=this.frags,p=this.frags=new Array(t.length),f=this.alias,d=this.iterator,v=this.start,m=this.end,g=B(v),b=!h;for(e=0,n=t.length;n>e;e++){l=t[e],o=u?l.$key:null,r=u?l.$value:l,a=!_(r),i=!b&&this.getCachedFrag(r,e,o),i?(i.reused=!0,i.scope.$index=e,o&&(i.scope.$key=o),d&&(i.scope[d]=null!==o?o:e),(c||u||a)&&(i.scope[f]=r)):(i=this.create(r,f,e,o),i.fresh=!b),p[e]=i,b&&i.before(m)}if(!b){var y=0,x=h.length-p.length;for(e=0,n=h.length;n>e;e++){i=h[e],i.reused||(this.deleteCachedFrag(i),this.remove(i,y++,x,g))}var w,E,C,O=0;for(e=0,n=p.length;n>e;e++){i=p[e],w=p[e-1],E=w?w.staggerCb?w.staggerAnchor:w.end||w.node:v,i.reused&&!i.staggerCb?(C=de(i,v,this.id),C===w||C&&de(C,v,this.id)===w||this.move(i,E)):this.insert(i,O++,E,g),i.reused=i.fresh=!1}}},create:function create(t,e,n,i){var s=this._host,o=this._scope||this.vm,r=(0,_create2.default)(o);r.$refs=(0,_create2.default)(o.$refs),r.$els=(0,_create2.default)(o.$els),r.$parent=o,r.$forContext=this,Ot(r,e,t),Ot(r,"$index",n),i?Ot(r,"$key",i):r.$key&&y(r,"$key",null),this.iterator&&Ot(r,this.iterator,null!==i?i:n);var a=this.factory.create(s,r,this._frag);return a.forId=this.id,this.cacheFrag(t,a,n,i),a},updateRef:function updateRef(){var t=this.descriptor.ref;if(t){var e,n=(this._scope||this.vm).$refs;this.fromObject?(e={},this.frags.forEach(function(t){e[t.scope.$key]=ve(t)})):e=this.frags.map(ve),n[t]=e}},updateModel:function updateModel(){if(this.isOption){var t=this.start.parentNode,e=t&&t.__v_model;e&&e.forceUpdate()}},insert:function insert(t,e,n,i){t.staggerCb&&(t.staggerCb.cancel(),t.staggerCb=null);var s=this.getStagger(t,e,null,"enter");if(i&&s){var o=t.staggerAnchor;o||(o=t.staggerAnchor=nt("stagger-anchor"),o.__vfrag__=t),U(o,n);var r=t.staggerCb=E(function(){t.staggerCb=null,t.before(o),W(o)});setTimeout(r,s)}else t.before(n.nextSibling)},remove:function remove(t,e,n,i){if(t.staggerCb)return t.staggerCb.cancel(),void (t.staggerCb=null);var s=this.getStagger(t,e,n,"leave");if(i&&s){var o=t.staggerCb=E(function(){t.staggerCb=null,t.remove()});setTimeout(o,s)}else t.remove()},move:function move(t,e){t.before(e.nextSibling,!1)},cacheFrag:function cacheFrag(t,n,i,o){var r,a=this.params.trackBy,l=this.cache,u=!_(t);o||a||u?(r=a?"$index"===a?i:t[a]:o||t,l[r]?"$index"!==a&&"production"!==e.env.NODE_ENV&&this.warnDuplicate(t):l[r]=n):(r=this.id,s(t,r)?null===t[r]?t[r]=n:"production"!==e.env.NODE_ENV&&this.warnDuplicate(t):y(t,r,n)),n.raw=t},getCachedFrag:function getCachedFrag(t,n,i){var s,o=this.params.trackBy,r=!_(t);if(i||o||r){var a=o?"$index"===o?n:t[o]:i||t;s=this.cache[a]}else s=t[this.id];return s&&(s.reused||s.fresh)&&"production"!==e.env.NODE_ENV&&this.warnDuplicate(t),s},deleteCachedFrag:function deleteCachedFrag(t){var e=t.raw,n=this.params.trackBy,i=t.scope,o=i.$index,r=s(i,"$key")&&i.$key,a=!_(e);if(n||r||a){var l=n?"$index"===n?o:e[n]:r||e;this.cache[l]=null}else e[this.id]=null,t.raw=null},getStagger:function getStagger(t,e,n,i){i+="Stagger";var s=t.node.__v_trans,o=s&&s.hooks,r=o&&(o[i]||o.stagger);return r?r.call(t,e,n):e*parseInt(this.params[i]||this.params.stagger,10)},_preProcess:function _preProcess(t){return this.rawValue=t,t},_postProcess:function _postProcess(t){if(Cn(t))return t;if(b(t)){for(var e,n=(0,_keys2.default)(t),i=n.length,s=new Array(i);i--;){e=n[i],s[i]={$key:e,$value:t[e]}}return s}return "number"==typeof t&&(t=me(t)),t||[]},unbind:function unbind(){if((this.descriptor.ref&&((this._scope||this.vm).$refs[this.descriptor.ref]=null),this.frags))for(var t,e=this.frags.length;e--;){t=this.frags[e],this.deleteCachedFrag(t),t.destroy()}}};"production"!==e.env.NODE_ENV&&(Ls.warnDuplicate=function(t){ai("Duplicate value found in v-for=\""+this.descriptor.raw+"\": "+(0,_stringify2.default)(t)+". Use track-by=\"$index\" if you are expecting duplicate values.")});var Is={bind:function bind(){8===this.el.nodeType&&(this.nodes=[],this.anchor=nt("v-html"),J(this.el,this.anchor))},update:function update(t){t=a(t),this.nodes?this.swap(t):this.el.innerHTML=t},swap:function swap(t){for(var e=this.nodes.length;e--;){W(this.nodes[e])}var n=se(t,!0,!0);this.nodes=m(n.childNodes),H(n,this.anchor)}},Fs={bind:function bind(){this.attr=3===this.el.nodeType?"data":"textContent"},update:function update(t){this.el[this.attr]=a(t)}},Bs={text:Fs,html:Is,"for":Ls,"if":js,show:Os,model:Cs,on:_s,bind:ms,el:ss,ref:is,cloak:ns},Rs=[],zs=!1,Hs=1,Us=2,Ws=An+"Duration",qs=Sn+"Duration",Js=be.prototype;Js.enter=function(t,e){this.cancelPending(),this.callHook("beforeEnter"),this.cb=e,K(this.el,this.enterClass),t(),this.entered=!1,this.callHookWithCb("enter"),this.entered||(this.cancel=this.hooks&&this.hooks.enterCancelled,ge(this.enterNextTick))},Js.enterNextTick=function(){this.justEntered=!0;var t=this;setTimeout(function(){t.justEntered=!1},17);var e=this.enterDone,n=this.getCssTransitionType(this.enterClass);this.pendingJsCb?n===Hs&&Q(this.el,this.enterClass):n===Hs?(Q(this.el,this.enterClass),this.setupCssCb(Pn,e)):n===Us?this.setupCssCb(Dn,e):e()},Js.enterDone=function(){this.entered=!0,this.cancel=this.pendingJsCb=null,Q(this.el,this.enterClass),this.callHook("afterEnter"),this.cb&&this.cb()},Js.leave=function(t,e){this.cancelPending(),this.callHook("beforeLeave"),this.op=t,this.cb=e,K(this.el,this.leaveClass),this.left=!1,this.callHookWithCb("leave"),this.left||(this.cancel=this.hooks&&this.hooks.leaveCancelled,this.op&&!this.pendingJsCb&&(this.justEntered?this.leaveDone():ge(this.leaveNextTick)))},Js.leaveNextTick=function(){var t=this.getCssTransitionType(this.leaveClass);if(t){var e=t===Hs?Pn:Dn;this.setupCssCb(e,this.leaveDone)}else this.leaveDone()},Js.leaveDone=function(){this.left=!0,this.cancel=this.pendingJsCb=null,this.op(),Q(this.el,this.leaveClass),this.callHook("afterLeave"),this.cb&&this.cb(),this.op=null},Js.cancelPending=function(){this.op=this.cb=null;var t=!1;this.pendingCssCb&&(t=!0,G(this.el,this.pendingCssEvent,this.pendingCssCb),this.pendingCssEvent=this.pendingCssCb=null),this.pendingJsCb&&(t=!0,this.pendingJsCb.cancel(),this.pendingJsCb=null),t&&(Q(this.el,this.enterClass),Q(this.el,this.leaveClass)),this.cancel&&(this.cancel.call(this.vm,this.el),this.cancel=null)},Js.callHook=function(t){this.hooks&&this.hooks[t]&&this.hooks[t].call(this.vm,this.el)},Js.callHookWithCb=function(t){var e=this.hooks&&this.hooks[t];e&&(e.length>1&&(this.pendingJsCb=E(this[t+"Done"])),e.call(this.vm,this.el,this.pendingJsCb))},Js.getCssTransitionType=function(t){if(!(!Pn||document.hidden||this.hooks&&this.hooks.css===!1||ye(this.el))){var e=this.typeCache[t];if(e)return e;var n=this.el.style,i=window.getComputedStyle(this.el),s=n[Ws]||i[Ws];if(s&&"0s"!==s)e=Hs;else {var o=n[qs]||i[qs];o&&"0s"!==o&&(e=Us)}return e&&(this.typeCache[t]=e),e}},Js.setupCssCb=function(t,e){this.pendingCssEvent=t;var n=this,i=this.el,s=this.pendingCssCb=function(o){o.target===i&&(G(i,t,s),n.pendingCssEvent=n.pendingCssCb=null,!n.pendingJsCb&&e&&e())};Y(i,t,s)};var Ys={priority:1100,update:function update(t,e){var n=this.el,i=_t(this.vm.$options,"transitions",t);t=t||"v",n.__v_trans=new be(n,t,i,this.el.__vue__||this.vm),e&&Q(n,e+"-transition"),K(n,t+"-transition")}},Gs=ri._propBindingModes,Ks={bind:function bind(){var t=this.vm,e=t._context,n=this.descriptor.prop,i=n.path,s=n.parentPath,o=n.mode===Gs.TWO_WAY,r=this.parentWatcher=new Wt(e,s,function(e){ut(n,e)&&(t[i]=e)},{twoWay:o,filters:n.filters,scope:this._scope});if((lt(t,n,r.value),o)){var a=this;t.$once("hook:created",function(){a.childWatcher=new Wt(t,i,function(t){r.set(t)},{sync:!0})})}},unbind:function unbind(){this.parentWatcher.teardown(),this.childWatcher&&this.childWatcher.teardown()}},Qs={priority:1500,params:["keep-alive","transition-mode","inline-template"],bind:function bind(){this.el.__vue__?"production"!==e.env.NODE_ENV&&ai("cannot mount component \""+this.expression+"\" on already mounted element: "+this.el):(this.keepAlive=this.params.keepAlive,this.keepAlive&&(this.cache={}),this.params.inlineTemplate&&(this.inlineTemplate=Z(this.el,!0)),this.pendingComponentCb=this.Component=null,this.pendingRemovals=0,this.pendingRemovalCb=null,this.anchor=nt("v-component"),J(this.el,this.anchor),this.el.removeAttribute("is"),this.descriptor.ref&&this.el.removeAttribute("v-ref:"+f(this.descriptor.ref)),this.literal&&this.setComponent(this.expression))},update:function update(t){this.literal||this.setComponent(t)},setComponent:function setComponent(t,e){if((this.invalidatePending(),t)){var n=this;this.resolveComponent(t,function(){n.mountComponent(e)})}else this.unbuild(!0),this.remove(this.childVM,e),this.childVM=null},resolveComponent:function resolveComponent(t,e){var n=this;this.pendingComponentCb=E(function(i){n.ComponentName=i.options.name||t,n.Component=i,e()}),this.vm._resolveComponent(t,this.pendingComponentCb)},mountComponent:function mountComponent(t){this.unbuild(!0);var e=this,n=this.Component.options.activate,i=this.getCached(),s=this.build();n&&!i?(this.waitingFor=s,n.call(s,function(){e.waitingFor=null,e.transition(s,t)})):(i&&s._updateRef(),this.transition(s,t))},invalidatePending:function invalidatePending(){this.pendingComponentCb&&(this.pendingComponentCb.cancel(),this.pendingComponentCb=null)},build:function build(t){var n=this.getCached();if(n)return n;if(this.Component){var i={name:this.ComponentName,el:ie(this.el),template:this.inlineTemplate,parent:this._host||this.vm,_linkerCachable:!this.inlineTemplate,_ref:this.descriptor.ref,_asComponent:!0,_isRouterView:this._isRouterView,_context:this.vm,_scope:this._scope,_frag:this._frag};t&&g(i,t);var s=new this.Component(i);return this.keepAlive&&(this.cache[this.Component.cid]=s),"production"!==e.env.NODE_ENV&&this.el.hasAttribute("transition")&&s._isFragment&&ai("Transitions will not work on a fragment instance. Template: "+s.$options.template),s}},getCached:function getCached(){return this.keepAlive&&this.cache[this.Component.cid]},unbuild:function unbuild(t){this.waitingFor&&(this.waitingFor.$destroy(),this.waitingFor=null);var e=this.childVM;return !e||this.keepAlive?void (e&&e._updateRef(!0)):void e.$destroy(!1,t)},remove:function remove(t,e){var n=this.keepAlive;if(t){this.pendingRemovals++,this.pendingRemovalCb=e;var i=this;t.$remove(function(){i.pendingRemovals--,n||t._cleanup(),!i.pendingRemovals&&i.pendingRemovalCb&&(i.pendingRemovalCb(),i.pendingRemovalCb=null)})}else e&&e()},transition:function transition(t,n){var i=this,s=this.childVM;switch(("production"!==e.env.NODE_ENV&&(s&&(s._inactive=!0),t._inactive=!1),this.childVM=t,i.params.transitionMode)){case "in-out":t.$before(i.anchor,function(){i.remove(s,n)});break;case "out-in":i.remove(s,function(){t.$before(i.anchor,n)});break;default:i.remove(s),t.$before(i.anchor,n);}},unbind:function unbind(){if((this.invalidatePending(),this.unbuild(),this.cache)){for(var t in this.cache){this.cache[t].$destroy()}this.cache=null}}},Zs={deep:!0,update:function update(t){t&&"string"==typeof t?this.handleObject(xe(t)):b(t)?this.handleObject(t):Cn(t)?this.handleArray(t):this.cleanup()},handleObject:function handleObject(t){this.cleanup(t);for(var e=this.prevKeys=(0,_keys2.default)(t),n=0,i=e.length;i>n;n++){var s=e[n];t[s]?K(this.el,s):Q(this.el,s)}},handleArray:function handleArray(t){this.cleanup(t);for(var e=0,n=t.length;n>e;e++){t[e]&&K(this.el,t[e])}this.prevKeys=t.slice()},cleanup:function cleanup(t){if(this.prevKeys)for(var e=this.prevKeys.length;e--;){var n=this.prevKeys[e];!n||t&&we(t,n)||Q(this.el,n)}}},Xs={style:cs,"class":Zs,component:Qs,prop:Ks,transition:Ys},to=ri._propBindingModes,eo={},no=/^[$_a-zA-Z]+[\w$]*$/,io=/^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/,so=/^v-bind:|^:/,oo=/^v-on:|^@/,ro=/:(.*)$/,ao=/\.[^\.]+/g,lo=/^(v-bind:|:)?transition$/,uo=["for","if"],co=1000;Ue.terminal=!0;var ho=/[^\w\-:\.]/,po=(0,_freeze2.default)({compile:ke,compileAndLinkProps:Se,compileRoot:De,transclude:Ge}),fo=/^v-on:|^@/;nn.prototype._bind=function(){var t=this.name,e=this.descriptor;if(("cloak"!==t||this.vm._isCompiled)&&this.el&&this.el.removeAttribute){var n=e.attr||"v-"+t;this.el.removeAttribute(n)}var i=e.def;if(("function"==typeof i?this.update=i:g(this,i),this._setupParams(),this.bind&&this.bind(),this.literal))this.update&&this.update(e.raw);else if((this.expression||this.modifiers)&&(this.update||this.twoWay)&&!this._checkStatement()){var s=this;this.update?this._update=function(t,e){s._locked||s.update(t,e)}:this._update=en;var o=this._preProcess?v(this._preProcess,this):null,r=this._postProcess?v(this._postProcess,this):null,a=this._watcher=new Wt(this.vm,this.expression,this._update,{filters:this.filters,twoWay:this.twoWay,deep:this.deep,preProcess:o,postProcess:r,scope:this._scope});this.afterBind?this.afterBind():this.update&&this.update(a.value)}this._bound=!0},nn.prototype._setupParams=function(){if(this.params){var t=this.params;this.params=(0,_create2.default)(null);for(var e,n,i,s=t.length;s--;){e=t[s],i=h(e),n=z(this.el,e),null!=n?this._setupParamWatcher(i,n):(n=R(this.el,e),null!=n&&(this.params[i]=""===n?!0:n))}}},nn.prototype._setupParamWatcher=function(t,e){var n=this,i=!1,s=(this._scope||this.vm).$watch(e,function(e,s){if((n.params[t]=e,i)){var o=n.paramWatchers&&n.paramWatchers[t];o&&o.call(n,e,s)}else i=!0},{immediate:!0});(this._paramUnwatchFns||(this._paramUnwatchFns=[])).push(s)},nn.prototype._checkStatement=function(){var t=this.expression;if(t&&this.acceptStatement&&!Bt(t)){var e=Ft(t).get,n=this._scope||this.vm,i=function i(t){n.$event=t,e.call(n,n),n.$event=null};return this.filters&&(i=n._applyFilters(i,null,this.filters)),this.update(i),!0}},nn.prototype.set=function(t){this.twoWay?this._withLock(function(){this._watcher.set(t)}):"production"!==e.env.NODE_ENV&&ai("Directive.set() can only be used inside twoWaydirectives.")},nn.prototype._withLock=function(t){var e=this;e._locked=!0,t.call(e),jn(function(){e._locked=!1})},nn.prototype.on=function(t,e){Y(this.el,t,e),(this._listeners||(this._listeners=[])).push([t,e])},nn.prototype._teardown=function(){if(this._bound){this._bound=!1,this.unbind&&this.unbind(),this._watcher&&this._watcher.teardown();var t,n=this._listeners;if(n)for(t=n.length;t--;){G(this.el,n[t][0],n[t][1])}var i=this._paramUnwatchFns;if(i)for(t=i.length;t--;){i[t]()}"production"!==e.env.NODE_ENV&&this.el&&this.el._vue_directives.$remove(this),this.vm=this.el=this._watcher=this._listeners=null}};var vo=/[^|]\|[^|]/;kt(hn),Xe(hn),tn(hn),sn(hn),on(hn),rn(hn),an(hn),ln(hn),un(hn),cn(hn);var mo=Ls._postProcess,go=/(\d{3})(?=\d)/g,_o={orderBy:dn,filterBy:fn,limitBy:pn,json:{read:function read(t,e){return "string"==typeof t?t:(0,_stringify2.default)(t,null,Number(e)||2)},write:function write(t){try{return JSON.parse(t)}catch(e) {return t}}},capitalize:function capitalize(t){return t||0===t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""},uppercase:function uppercase(t){return t||0===t?t.toString().toUpperCase():""},lowercase:function lowercase(t){return t||0===t?t.toString().toLowerCase():""},currency:function currency(t,e){if((t=parseFloat(t),!isFinite(t)||!t&&0!==t))return "";e=null!=e?e:"$";var n=Math.abs(t).toFixed(2),i=n.slice(0,-3),s=i.length%3,o=s>0?i.slice(0,s)+(i.length>3?",":""):"",r=n.slice(-3),a=0>t?"-":"";return e+a+o+i.slice(s).replace(go,"$1,")+r},pluralize:function pluralize(t){var e=m(arguments,1);return e.length>1?e[t%10-1]||e[e.length-1]:e[0]+(1===t?"":"s")},debounce:function debounce(t,e){return t?(e||(e=300),x(t,e)):void 0}},bo={priority:1750,params:["name"],paramWatchers:{name:function name(t){js.remove.call(this),t&&this.insert(t)}},bind:function bind(){this.anchor=nt("v-partial"),J(this.el,this.anchor),this.insert(this.params.name)},insert:function insert(t){var n=_t(this.vm.$options,"partials",t);"production"!==e.env.NODE_ENV&&bt(n,"partial",t),n&&(this.factory=new fe(this.vm,n),js.insert.call(this))},unbind:function unbind(){this.frag&&this.frag.destroy()}},yo={priority:1750,params:["name"],bind:function bind(){var t,e=this.vm,n=e.$options._content;if(!n)return void this.fallback();var i=e._context,s=this.params.name;if(s){var o="[slot=\""+s+"\"]",r=n.querySelectorAll(o);r.length?(t=mn(r,n),t.hasChildNodes()?this.compile(t,i,e):this.fallback()):this.fallback()}else {var a=this,l=function l(){a.compile(mn(n.childNodes,n,!0),i,e)};e._isCompiled?l():e.$once("hook:compiled",l)}},fallback:function fallback(){this.compile(Z(this.el,!0),this.vm)},compile:function compile(t,e,n){if(t&&e){var i=n?n._scope:this._scope;this.unlink=e.$compile(t,n,i,this._frag)}t?J(this.el,t):W(this.el)},unbind:function unbind(){this.unlink&&this.unlink()}},xo={slot:yo,partial:bo};hn.version="1.0.10",hn.options={directives:Bs,elementDirectives:xo,filters:_o,transitions:{},components:{},partials:{},replace:!0},"production"!==e.env.NODE_ENV&&kn&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit("init",hn),t.exports=hn}).call(e,n(85))},function(t,e,n){"use strict";var i=n(16),s=n(15),o=n(77);t.exports={mixins:[o],props:{title:{type:String,required:!0},dropup:{type:Boolean,"default":!1},dropdown:{type:Boolean,"default":!0}},created:function created(){this.dropup&&(this.classes.dropup=!0),this.dropdown&&(this.classes.dropdown=!1)},data:function data(){return {open:!1,classes:{dropup:!1,dropdown:!0,open:!1}}},methods:{toggleOpen:function toggleOpen(t){this.open=!this.open,this.classes.open=this.open}},components:{Button:s,ButtonGroup:i}}},function(t,e){"use strict";t.exports={props:{placement:{type:String,"default":"top"},show:{type:Boolean,"default":!1}},data:function data(){return {classes:[]}},created:function created(){this.tag&&this.classes.push(this.tag),this.show&&Array.prototype.push.apply(this.classes,[this.placement,"fade","in","show"])},computed:{bPlacement:{get:function get(){return this.placement},set:function set(t){this.placement=t}}},methods:{fadeIn:function fadeIn(){this.classes.push("fade")},animateIn:function animateIn(){this.classes.push(this.placement),this.classes.push("in")}},watch:{show:function show(t,e){t||this.classes.splice(1),t&&this.classes.push("show")}}}},function(t,e,n){"use strict";var i=n(11),s=n(78);t.exports={props:{trigger:{type:String,"default":"hover"},placement:{type:String,"default":"top"},content:{type:String,"default":"",required:!0}},data:function data(){return {show:!1,tipPosition:{}}},ready:function ready(){var t=this.$children[1].$el;switch(this.trigger){case "hover":t.addEventListener("mouseover",this.toggle),t.addEventListener("mouseout",this.toggle);break;case "click":t.addEventListener("click",this.toggle);break;default:t.addEventListener("focus",this.toggle),t.addEventListener("blur",this.toggle);}},methods:{toggle:function toggle(t){var e=this;e.show=!e.show,i.nextTick(function(){if(e.show){var t=e.$children[1],n=e.$refs[e.tag]||e.$children[1],i=new s(t.$el),o=i.getPosition();n.fadeIn();var r=new s(n.$el),a=r.getPosition();e.placement="top"===e.placement&&a.height>o.top?"bottom":"bottom"===e.placement&&a.height>o.bottom?"top":"left"===e.placement&&a.width>o.left?"right":"right"===e.placement&&a.width>o.right?"left":e.placement,n.bPlacement!==e.placement&&(n.bPlacement=e.placement),e.tipPosition="top"===e.placement?{left:Math.round(o.left-Math.abs(a.width-o.width)/2)+"px",top:o.top-o.height+"px"}:"bottom"===e.placement?{left:Math.round(o.left-Math.abs(a.width-o.width)/2)+"px",top:o.top+o.height+"px"}:"left"===e.placement?{left:Math.abs(o.left-a.width)+"px",top:Math.round(o.top+(o.height-a.height)/2)+"px"}:{left:o.left+a.width+"px",top:Math.round(o.top+(o.height-a.height)/2)+"px"},n.animateIn()}})}}}},function(t,e,n){t.exports=n(51),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(94)},function(t,e,n){t.exports=n(52),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(95)},function(t,e,n){t.exports=n(62),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(105)},function(t,e,n){t.exports=n(67),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(110)},function(t,e,n){t.exports=n(73),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(116)},function(t,e,n){n(87),t.exports=n(75),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(118)},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),o=i(s);e["default"]={mixins:[o["default"]],data:function data(){return {tag:"alert",classes:{}}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),o=i(s);e["default"]={mixins:[o["default"]],props:{onClick:{type:Function,"default":null}},methods:{clickHandle:function clickHandle(t){this.href||t.preventDefault(),this.onClick&&this.onClick(t)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{active:{type:Boolean,"default":!1},href:{type:String,"default":null}},data:function data(){return {classes:{}}},created:function created(){this.active&&(this.classes.active=this.active)}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),o=i(s);e["default"]={mixins:[o["default"]],props:{type:{type:String,"default":"button"},onClick:{type:Function,"default":null}},data:function data(){return {tag:"btn",classes:{}}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{bsSize:{type:String},align:{type:String}},computed:{bSize:function bSize(){return this.bsSize||null},bAlign:function bAlign(){return this.align||null}},created:function created(){this.bAlign&&(this.classes+=" btn-group-"+this.bAlign),this.bSize&&(this.classes+=" btn-group-"+this.bSize)},data:function data(){return {classes:"btn-group"}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(11),o=i(s),r=n(79),a=i(r);e["default"]={props:{interval:{type:Number,"default":3000},controls:{type:Boolean,"default":!0},indicators:{type:Boolean,"default":!0},pauseOnHover:{type:Boolean,"default":!0},slide:{type:Boolean,"default":!0}},data:function data(){return {activeIndex:0,timeout:null,isPause:!1,count:0}},ready:function ready(){var t=this;if(!(this.$children.length<1)){var e=this.$children;e.forEach(function(e,n){n===t.activeIndex&&e.setActive(),t.count++}),this.waitForNext()}},computed:{items:function items(){return this.$children}},methods:{waitForNext:function waitForNext(){!this.isPause&&this.slide&&this.count>0&&(this.timeout=setTimeout(this.next,this.interval))},prev:function prev(t){t&&t.preventDefault();var e=this.activeIndex-1;0>e&&(e=this.count-1),this.handleSelect(e,"prev")},next:function next(t){t&&t.preventDefault();var e=this.activeIndex+1;e>=this.count&&(e=0),this.handleSelect(e,"next")},pause:function pause(){this.isPause||(this.isPause=!0,this.timeout&&clearTimeout(this.timeout))},play:function play(){this.isPause=!1,this.waitForNext()},getDirection:function getDirection(t){return "prev"===t?"right":"left"},handleSelect:function handleSelect(t,e){clearTimeout(this.timeout);var n=this,i=n.activeIndex,s=n.getDirection(e),r=n.items[i],l=n.items[t];l.AnimatingIn(e),o["default"].nextTick(function(){l.$el.offsetWidth,r.animating(s),l.animating(s)}),a["default"].addEndEventListener(r.$el,function(){r&&(r.animateOuted(),r=null)}),a["default"].addEndEventListener(l.$el,function(){l&&(l.animatedIn(e,s),n.waitForNext(),l=null)}),n.activeIndex=t}},destroyed:function destroyed(){clearTimeout(this.timeout)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function data(){return {type:"next",classes:[]}},methods:{setActive:function setActive(){this.classes.push("active")},AnimatingIn:function AnimatingIn(t){this.classes.push(t)},animating:function animating(t){this.classes.push(t)},animateOuted:function animateOuted(){this.classes=[]},animatedIn:function animatedIn(t,e){this.classes.splice(0,2,"active")}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{xs:{type:String},sm:{type:String},md:{type:String},lg:{type:String}},data:function data(){return {classes:{}}},created:function created(){this.xs&&(this.classes["col-xs-"+this.xs]=!0),this.sm&&(this.classes["col-sm-"+this.sm]=!0),this.md&&(this.classes["col-md-"+this.md]=!0),this.lg&&(this.classes["col-lg-"+this.lg]=!0)}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(12),o=i(s);e["default"]={mixins:[o["default"]]}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),o=i(s);e["default"]={mixins:[o["default"]],props:{layout:{type:Object}},data:function data(){return {tag:"form",classes:{}}},computed:{formInputs:function formInputs(){return this.$children}},ready:function ready(){var t=this;"horizontal"===this.bsStyle&&!(function(){var e=t.formInputs,n=t.layout,i=[],s=[];n&&(n.md&&(i.push("col-md-"+n.md.split(",")[0]),s.push("col-md-"+n.md.split(",")[1])),n.sm&&(i.push("col-sm-"+n.sm.split(",")[0]),s.push("col-sm-"+n.sm.split(",")[1])),n.xs&&(i.push("col-xs-"+n.xs.split(",")[0]),s.push("col-xs-"+n.xs.split(",")[1]))),i.push("control-label"),e.forEach(function(t){t.setHorizontalLayout&&t.setHorizontalLayout({lblClass:i,iptClass:s})})})()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{type:{type:String,"default":"text"},label:{type:String,required:!0},placeholder:{type:String,"default":""},model:{type:String,"default":"",twoWay:!0}},data:function data(){return {lblClass:[],iptClass:[],horizontal:!1}},methods:{setHorizontalLayout:function setHorizontalLayout(t){this.horizontal=!0,this.lblClass=t.lblClass,this.iptClass=t.iptClass}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),o=i(s),r=n(2),a=i(r),l=n(1),u=i(l);e["default"]={mixins:[a["default"],u["default"]],data:function data(){return {tag:"label",classes:{}}},components:{Anchor:o["default"]}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),o=i(s),r=n(2),a=i(r);e["default"]={mixins:[a["default"]],components:{Anchor:o["default"]}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(132),o=i(s),r={props:{title:{type:String,required:!0},size:{type:String},show:{twoWay:!0,type:Boolean,"default":!1}},data:function data(){return {classes:{"modal-dialog":!0},isIn:{"in":!1,show:!1}}},computed:{bSize:function bSize(){return this.size||null}},watch:{show:function show(t){this.isIn["in"]=t,this.isIn.show=t}},created:function created(){this.bSize&&(this.classes["modal-"+this.bSize]=this.bSize)},components:{Overlay:o["default"]}};e["default"]=r},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),o=i(s);e["default"]={mixins:[o["default"]],data:function data(){return {tag:"nav",classes:{}}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),o=i(s),r=n(2),a=i(r);e["default"]={mixins:[a["default"]],props:{disabled:{type:Boolean,"default":!1}},components:{Anchor:o["default"]}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{show:{type:Boolean,"default":!1}},data:function data(){return {isShow:{"in":!1}}},watch:{show:function show(t){this.isShow["in"]=t}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(80),o=i(s),r=n(6),a=i(r),l=n(1),u=i(l),c=function h(t,e){var n=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],i=arguments.length<=3||void 0===arguments[3]?!1:arguments[3];(0,o["default"])(this,h),this.val=t,this.name=e||t,this.active=n,this.disabled=i};e["default"]={mixins:[u["default"]],props:{activePage:{type:Number,"default":1,validator:function validator(t){return t>0}},items:{type:Number,required:!0,validator:function validator(t){return t>0}},maxButtons:{type:Number,"default":5},ellipsis:{type:Boolean,"default":!0},onSelect:{type:Function}},data:function data(){return {tag:"pagination",classes:{},pages:[]}},computed:{bPage:{get:function get(){return this.pages},set:function set(t){this.pages.push(t)}}},created:function created(){1===this.activePage?this.bPage=this.createPagerInstance("上一页","prev",!1,!0):this.bPage=this.createPagerInstance("上一页","prev");var t=1;if(this.items<=this.maxButtons||this.activePage<=Math.ceil(this.maxButtons/2)){for(;this.items>=t&&t<=this.maxButtons;){this.bPage=this.createPagerInstance(t),t++}this.ellipsis&&this.items>this.maxButtons&&(this.bPage=this.createPagerInstance("...","ellipsis",!1,!0))}else {var e=Math.floor(this.maxButtons/2),n=this.maxButtons-e-1,i=Math.abs(this.activePage-e),s=this.activePage+1;if((this.ellipsis&&(this.bPage=this.createPagerInstance("...","ellipsis",!1,!0)),this.items-this.activePage<=n))for(t=this.items-this.maxButtons+1;t<=this.items;){this.bPage=this.createPagerInstance(t++)}else {for(;e>=t;){this.bPage=this.createPagerInstance(i++),t++}for(t=1,this.bPage=this.createPagerInstance(this.activePage);n>=t;){this.bPage=this.createPagerInstance(s++),t++}this.ellipsis&&(this.bPage=this.createPagerInstance("...","ellipsis",!1,!0))}}this.activePage===this.items?this.bPage=this.createPagerInstance("下一页","next",!1,!0):this.bPage=this.createPagerInstance("下一页","next")},methods:{createPagerInstance:function createPagerInstance(t,e){var n=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],i=arguments.length<=3||void 0===arguments[3]?!1:arguments[3];return new c(t,e,n,i)}},components:{NavItem:a["default"]}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),o=i(s);e["default"]={mixins:[o["default"]],data:function data(){return {tag:"panel",classes:{}}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(13),o=i(s);e["default"]={mixins:[o["default"]],props:{title:{type:String,"default":""}},data:function data(){return {tag:"popover",arrowStyle:{}}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(18),o=i(s),r=n(14),a=i(r);e["default"]={mixins:[a["default"]],props:{title:{type:String,"default":""}},data:function data(){return {tag:"popover"}},components:{Popover:o["default"]}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),o=i(s);e["default"]={mixins:[o["default"]],props:{bsStyle:{type:String,"default":"primary"},progress:{type:Number,"default":0,required:!0},min:{type:Number,"default":0},max:{type:Number,"default":100},striped:{type:Boolean,"default":!1},animation:{type:Boolean,"default":!1}},created:function created(){this.striped&&(this.classes[this.tag+"-striped"]=!0),this.animation&&(this.classes.active=!0)},ready:function ready(){this.progressing()},computed:{beProgress:{get:function get(){return this.progress},set:function set(t){this.$els.progressbar.style.width=t+"%"}}},data:function data(){return {tag:"progress-bar",classes:{},progressStyle:{}}},methods:{progressing:function progressing(){this.beProgress=this.progress>this.max?this.max:this.progress<this.min?this.min:this.progress}},watch:{progress:function progress(t){this.progressing()}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(12),o=i(s);e["default"]={mixins:[o["default"]],methods:{_handleClick:function _handleClick(t){this.$dispatch("click",t)}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(11),o=i(s),r=n(17),a=i(r),l=n(6),u=i(l),c=n(19),h=i(c);e["default"]={props:{onSelect:{type:Function,twoWay:!0}},data:function data(){return {tabList:[],count:0,activeIndex:0,disabledList:[]}},ready:function ready(){this.tabList[this.activeIndex]&&(this.tabList[this.activeIndex].setActive(),this.tabList[this.activeIndex].animateIn())},methods:{switchTab:function switchTab(t){var e=this;if(t!==e.activeIndex&&!(e.disabledList.indexOf(t)>-1)){this.onSelect&&this.onSelect(e.tabList[t]);var n=e.activeIndex;e.tabList[t].setActive(),e.tabList[n].animateOut(),o["default"].nextTick(function(){e.tabList[t].$el.offsetWidth,e.tabList[t].animateIn()}),this.activeIndex=t}},addItem:function addItem(t){t.disabled&&this.disabledList.push(this.count),this.tabList.push(t),this.count++}},components:{Nav:a["default"],NavItem:u["default"],TabItem:h["default"]}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{disabled:{type:Boolean,"default":!1},title:{type:String,validator:function validator(t){return ""!=t.trim()}}},data:function data(){return {classes:[]}},created:function created(){this.$parent.addItem(this)},methods:{setActive:function setActive(){this.classes.push("active")},animateIn:function animateIn(){this.classes.push("in")},animateOut:function animateOut(){this.classes.splice(0,2),this.classes=[]}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(2),o=i(s),r=n(3),a=i(r);e["default"]={mixins:[o["default"]],props:{src:{type:String,required:!0},alt:{type:String,"default":""}},components:{Anchor:a["default"]}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(13),o=i(s);e["default"]={mixins:[o["default"]],data:function data(){return {tag:"tooltip"}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(20),o=i(s),r=n(14),a=i(r);e["default"]={mixins:[a["default"]],data:function data(){return {tag:"tooltip"}},components:{Tooltip:o["default"]}}},function(t,e){"use strict";t.exports={props:{bsStyle:{type:String,"default":"default"},size:{type:String}}}},function(t,e){"use strict";var n=function n(t){this.el=t,this.left=0,this.top=0,this.right=0,this.bottom=0};n.prototype={setEl:function setEl(t){this.el=t},getPosition:function getPosition(){if(this.el){if("getBoundingClientRect" in this.el){var t=this.el.getBoundingClientRect();return {top:t.top+window.scrollY,left:t.left,right:t.right,bottom:t.bottom,width:t.width,height:t.height}}return {height:this.el.offsetHeight,width:this.el.offsetWidth,top:s(this.el),left:i(this.el),right:o(this.el),bottom:r(this.el)}}}};var i=function i(t){for(var e=t.offsetLeft;null!=t.offsetParent;){t=t.offsetParent,e+=t.offsetLeft}return e},s=function s(t){for(var e=t.offsetTop;null!=t.offsetParent;){t=t.offsetParent,e+=t.offsetTop}return e},o=function o(t){for(var e=t.offsetRight;null!=t.offsetParent;){t=t.offsetParent,e+=t.offsetRight}return e},r=function r(t){for(var e=t.offsetBottom;null!=t.offsetParent;){t=t.offsetParent,e+=t.offsetBottom}return e};t.exports=n},function(t,e){"use strict";function n(){var t=document.createElement("div"),e=t.style;"AnimationEvent" in window||delete r.animationend.animation,"TransitionEvent" in window||delete r.transitionend.transition;for(var n in r){var i=r[n];for(var s in i){if(s in e){a.push(i[s]);break}}}}function i(t,e,n){t.addEventListener(e,n,!1)}function s(t,e,n){t.removeEventListener(e,n,!1)}var o=!("undefined"==typeof window||!window.document||!window.document.createElement),r={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},a=[];o&&n();var l={addEndEventListener:function addEndEventListener(t,e){return 0===a.length?void window.setTimeout(e,0):void a.forEach(function(n){i(t,n,e)})},removeEndEventListener:function removeEndEventListener(t,e){0!==a.length&&a.forEach(function(n){s(t,n,e)})}};t.exports=l},function(t,e){"use strict";e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e.__esModule=!0},function(t,e,n){e=t.exports=n(4)(),e.push([t.id,".popover-wrap{display:inline-block;position:relative}",""])},function(t,e,n){e=t.exports=n(4)(),e.push([t.id,".tooltip{display:none}",""])},function(t,e,n){e=t.exports=n(4)(),e.push([t.id,".tooltip-wrap{display:inline-block;position:relative}",""])},function(t,e,n){e=t.exports=n(4)(),e.push([t.id,".modal-dialog{z-index:1100}",""])},function(t,e){function n(){u=!1,r.length?l=r.concat(l):c=-1,l.length&&i()}function i(){if(!u){var t=setTimeout(n);u=!0;for(var e=l.length;e;){for(r=l,l=[];++c<e;){r&&r[c].run()}c=-1,e=l.length}r=null,u=!1,clearTimeout(t)}}function s(t,e){this.fun=t,this.array=e}function o(){}var r,a=t.exports={},l=[],u=!1,c=-1;a.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++){e[n-1]=arguments[n]}l.push(new s(t,e)),1!==l.length||u||setTimeout(i,0)},s.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=o,a.addListener=o,a.once=o,a.off=o,a.removeListener=o,a.removeAllListeners=o,a.emit=o,a.binding=function(t){throw new Error("process.binding is not supported")},a.cwd=function(){return "/"},a.chdir=function(t){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(t,e,n){var i=n(81);"string"==typeof i&&(i=[[t.id,i,""]]);n(5)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){var i=n(82);"string"==typeof i&&(i=[[t.id,i,""]]);n(5)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){var i=n(83);"string"==typeof i&&(i=[[t.id,i,""]]);n(5)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,n){var i=n(84);"string"==typeof i&&(i=[[t.id,i,""]]);n(5)(i,{});i.locals&&(t.exports=i.locals)},function(t,e){t.exports="<div v-bind:class=classes><slot></slot></div>"},function(t,e){t.exports="<a href={{href}} target={{target}} @click=clickHandle><slot></slot></a>"},function(t,e){t.exports="<ol class=breadcrumb><slot></slot></ol>"},function(t,e){t.exports="<li v-bind:class=classes><a v-if=\"href != null\" v-bind:href=href><slot></slot></a><slot v-if=\"href === null\"></slot></li>"},function(t,e){t.exports="<button v-bind:class=classes v-bind:type=type><slot></slot></button>"},function(t,e){t.exports="<div role=group v-bind:class=classes><slot></slot></div>"},function(t,e){t.exports="<div id=carousel class=\"carousel slide\"><ol v-if=indicators class=carousel-indicators><li v-for=\"i in count\" v-bind:class=\"{&quot;active&quot;:$index===activeIndex}\"></li></ol><div @mouseover=pause @mouseout=play class=carousel-inner><slot></slot></div><a v-if=controls @click=prev class=\"left carousel-control\"><span class=\"glyphicon glyphicon-chevron-left\"></span><span class=sr-only>Previous</span></a><a v-if=controls @click=next class=\"right carousel-control\"><span class=\"glyphicon glyphicon-chevron-right\"></span><span class=sr-only>Next</span></a></div>"},function(t,e){t.exports="<div v-bind:class=classes class=item><slot></slot></div>"},function(t,e){t.exports="<div v-bind:class=classes><slot></slot></div>"},function(t,e){t.exports="<button-group @click=toggleOpen v-bind:class=classes><button v-bind:bs-style=bsStyle v-bind:bs-size=size data-toggle=dropdown aria-haspopup=true aria-expanded=false class=dropdown-toggle>{{title}}<span class=caret></span></button><ul class=dropdown-menu><slot></slot></ul></button-group>"},function(t,e){t.exports="<form v-bind:class=classes><slot></slot></form>"},function(t,e){t.exports="<div class=form-group><label v-bind:class=lblClass>{{label}}</label><div v-if=horizontal v-bind:class=iptClass><input v-el:input=v-el:input v-bind:type=type v-bind:placeholder=placeholder v-model=model class=\"form-control\"></div><input v-if=!horizontal v-el:input=v-el:input v-bind:type=type v-bind:placeholder=placeholder v-model=model class=\"form-control\"></div>"},function(t,e){t.exports="<span v-bind:class=classes class=label><span v-if=\"href === null\"><slot></slot></span><anchor v-if=\"href != null\" v-bind:href=href v-bind:target=target><slot></slot></anchor></span>"},function(t,e){t.exports="<li><anchor v-bind:href=href v-bind:target=target v-bind:click-handle=clickHandle><slot></slot></anchor></li>"},function(t,e){t.exports="<div v-bind:class=isIn class=\"modal fade\"><overlay v-bind:show=show></overlay><div v-bind:class=classes><div class=modal-content><div class=modal-header><slot name=modal-header></slot></div><div class=modal-body><slot name=modal-body></slot></div><div class=modal-footer><slot name=modal-footer></slot></div></div></div></div>"},function(t,e){t.exports="<ul v-bind:class=classes class=nav><slot></slot></ul>"},function(t,e){t.exports="<li v-bind:class=disabled><anchor v-bind:href=href v-bind:target=target v-bind:click-handle=clickHandle><slot></slot></anchor></li>"},function(t,e){t.exports="<div v-bind:class=isShow class=\"modal-backdrop fade\"></div>"},function(t,e){t.exports="<ul v-bind:class=classes><nav-item v-for=\"instance in pages\" v-bind:class=\"{active:instance.val === activePage,disabled:instance.disabled}\" @click=onSelect(instance)>{{instance.val}}</nav-item></ul>"},function(t,e){t.exports="<div v-bind:class=classes><div class=panel-heading><slot name=panel-header></slot></div><div class=panel-body><slot name=panel-body></slot></div></div>"},function(t,e){t.exports="<div v-bind:class=classes role=tooltip><div v-bind:style=arrowStyle class=arrow></div><h3 v-if=\"title!=&quot;&quot;\" class=popover-title>{{title}}</h3><div class=popover-content><slot></slot></div></div>"},function(t,e){t.exports="<div class=popover-wrap><slot></slot></div><popover v-ref:popover=v-ref:popover v-bind:title=title v-bind:style=tipPosition v-bind:placement=placement v-bind:show=show>{{content}}</popover>"},function(t,e){t.exports="<div class=progress><div v-bind:class=classes role=progressbar v-el:progressbar=v-el:progressbar><slot></slot></div></div>"},function(t,e){t.exports="<div class=row><slot></slot></div>"},function(t,e){t.exports="<button-group v-bind:class=classes><button v-bind:bs-style=bsStyle v-bind:size=size @click=_handleClick>{{title}}</button><button @click=toggleOpen v-bind:bs-style=bsStyle v-bind:size=size data-toggle=dropdown aria-haspopup=true aria-expanded=false class=dropdown-toggle><span class=caret></span></button><ul class=dropdown-menu><slot></slot></ul></button-group>"},function(t,e){t.exports="<div><nav is=nav bs-style=tabs><nav-item v-for=\"item in tabList\" v-bind:class=\"{'active':activeIndex==$index,'disabled':disabledList.indexOf($index)&gt;-1}\" @click=switchTab($index)>{{item.title}}</nav-item></nav><div v-el:items=v-el:items class=tab-content><slot></slot></div></div>"},function(t,e){t.exports="<div v-bind:class=classes class=\"tab-pane fade\"><slot></slot></div>"},function(t,e){t.exports="<div class=thumbnail><anchor v-bind:href=href v-bind:target=target><img v-bind:src=src v-bind:alt=\"alt\"></anchor><div class=caption><slot></slot></div></div>"},function(t,e){t.exports="<div v-bind:class=classes role=tooltip><div class=tooltip-arrow></div><div class=tooltip-inner><slot></slot></div></div>"},function(t,e){t.exports="<div class=tooltip-wrap><slot></slot></div><tooltip v-ref:tooltip=v-ref:tooltip v-bind:style=tipPosition v-bind:placement=placement v-bind:show=show>{{content}}</tooltip>"},function(t,e,n){t.exports=n(47),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(90)},function(t,e,n){t.exports=n(49),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(92)},function(t,e,n){t.exports=n(50),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(93)},function(t,e,n){t.exports=n(53),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(96)},function(t,e,n){t.exports=n(54),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(97)},function(t,e,n){t.exports=n(55),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(98)},function(t,e,n){t.exports=n(56),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(99)},function(t,e,n){t.exports=n(57),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(100)},function(t,e,n){t.exports=n(58),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(101)},function(t,e,n){t.exports=n(59),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(102)},function(t,e,n){t.exports=n(60),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(103)},function(t,e,n){n(89),t.exports=n(61),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(104)},function(t,e,n){t.exports=n(64),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(107)},function(t,e,n){t.exports=n(65),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(108)},function(t,e,n){t.exports=n(66),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(109)},function(t,e,n){n(86),t.exports=n(68),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(111)},function(t,e,n){t.exports=n(69),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(112)},function(t,e,n){t.exports=n(70),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(113)},function(t,e,n){t.exports=n(71),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(114)},function(t,e,n){t.exports=n(72),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(115)},function(t,e,n){t.exports=n(74),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(117)},function(t,e,n){n(88),t.exports=n(76),t.exports.__esModule&&(t.exports=t.exports["default"]),("function"==typeof t.exports?t.exports.options:t.exports).template=n(119)}]);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	__webpack_require__(7);
	module.exports = function getOwnPropertyNames(it){
	  return $.getNames(it);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(8)('getOwnPropertyNames', function(){
	  return __webpack_require__(15).get;
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(9)
	  , core    = __webpack_require__(11)
	  , fails   = __webpack_require__(14);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(10)
	  , core      = __webpack_require__(11)
	  , ctx       = __webpack_require__(12)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 10 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 11 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(13);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(16)
	  , getNames  = __webpack_require__(6).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(17)
	  , defined = __webpack_require__(19);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(18);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(21), __esModule: true };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function defineProperties(T, D){
	  return $.setDescs(T, D);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(23), __esModule: true };

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(24);
	module.exports = __webpack_require__(11).Object.freeze;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(25);
	
	__webpack_require__(8)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(27), __esModule: true };

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	__webpack_require__(28);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(16);
	
	__webpack_require__(8)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(30), __esModule: true };

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(31);
	module.exports = __webpack_require__(11).Object.isFrozen;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(25);
	
	__webpack_require__(8)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(33), __esModule: true };

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(35), __esModule: true };

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _typeof2 = __webpack_require__(36);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	var _symbol = __webpack_require__(37);
	
	var _symbol2 = _interopRequireDefault(_symbol);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (obj) {
	  return obj && typeof _symbol2.default !== "undefined" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj);
	};
	
	exports.__esModule = true;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(38), __esModule: true };

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(39);
	__webpack_require__(54);
	module.exports = __webpack_require__(11).Symbol;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(6)
	  , global         = __webpack_require__(10)
	  , has            = __webpack_require__(40)
	  , DESCRIPTORS    = __webpack_require__(41)
	  , $export        = __webpack_require__(9)
	  , redefine       = __webpack_require__(42)
	  , $fails         = __webpack_require__(14)
	  , shared         = __webpack_require__(45)
	  , setToStringTag = __webpack_require__(46)
	  , uid            = __webpack_require__(48)
	  , wks            = __webpack_require__(47)
	  , keyOf          = __webpack_require__(49)
	  , $names         = __webpack_require__(15)
	  , enumKeys       = __webpack_require__(50)
	  , isArray        = __webpack_require__(51)
	  , anObject       = __webpack_require__(52)
	  , toIObject      = __webpack_require__(16)
	  , createDesc     = __webpack_require__(44)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(53)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 40 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(14)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(43);

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(6)
	  , createDesc = __webpack_require__(44);
	module.exports = __webpack_require__(41) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(10)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(6).setDesc
	  , has = __webpack_require__(40)
	  , TAG = __webpack_require__(47)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(45)('wks')
	  , uid    = __webpack_require__(48)
	  , Symbol = __webpack_require__(10).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(6)
	  , toIObject = __webpack_require__(16);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(6);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(18);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(25);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 54 */
/***/ function(module, exports) {



/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(57);
	module.exports = __webpack_require__(11).Object.keys;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(58);
	
	__webpack_require__(8)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(19);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(60), __esModule: true };

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var core = __webpack_require__(11);
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return (core.JSON && core.JSON.stringify || JSON.stringify).apply(JSON, arguments);
	};

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map