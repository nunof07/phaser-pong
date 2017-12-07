(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.smalltypes = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":18}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":19}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":20}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":21}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/freeze"), __esModule: true };
},{"core-js/library/fn/object/freeze":22}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":23}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":24}],8:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/seal"), __esModule: true };
},{"core-js/library/fn/object/seal":25}],9:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":26}],10:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":27}],11:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":28}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],13:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":4}],14:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":3,"../core-js/object/set-prototype-of":9,"../helpers/typeof":16}],15:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":16}],16:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":10,"../core-js/symbol/iterator":11}],17:[function(require,module,exports){
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":123}],18:[function(require,module,exports){
require('../modules/web.dom.iterable');
require('../modules/es6.string.iterator');
module.exports = require('../modules/core.get-iterator');

},{"../modules/core.get-iterator":104,"../modules/es6.string.iterator":115,"../modules/web.dom.iterable":122}],19:[function(require,module,exports){
require('../modules/es6.object.to-string');
require('../modules/es6.string.iterator');
require('../modules/web.dom.iterable');
require('../modules/es6.map');
require('../modules/es7.map.to-json');
require('../modules/es7.map.of');
require('../modules/es7.map.from');
module.exports = require('../modules/_core').Map;

},{"../modules/_core":43,"../modules/es6.map":106,"../modules/es6.object.to-string":114,"../modules/es6.string.iterator":115,"../modules/es7.map.from":117,"../modules/es7.map.of":118,"../modules/es7.map.to-json":119,"../modules/web.dom.iterable":122}],20:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

},{"../../modules/_core":43,"../../modules/es6.object.create":107}],21:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/_core":43,"../../modules/es6.object.define-property":108}],22:[function(require,module,exports){
require('../../modules/es6.object.freeze');
module.exports = require('../../modules/_core').Object.freeze;

},{"../../modules/_core":43,"../../modules/es6.object.freeze":109}],23:[function(require,module,exports){
require('../../modules/es6.object.get-own-property-descriptor');
var $Object = require('../../modules/_core').Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};

},{"../../modules/_core":43,"../../modules/es6.object.get-own-property-descriptor":110}],24:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;

},{"../../modules/_core":43,"../../modules/es6.object.get-prototype-of":111}],25:[function(require,module,exports){
require('../../modules/es6.object.seal');
module.exports = require('../../modules/_core').Object.seal;

},{"../../modules/_core":43,"../../modules/es6.object.seal":112}],26:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;

},{"../../modules/_core":43,"../../modules/es6.object.set-prototype-of":113}],27:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;

},{"../../modules/_core":43,"../../modules/es6.object.to-string":114,"../../modules/es6.symbol":116,"../../modules/es7.symbol.async-iterator":120,"../../modules/es7.symbol.observable":121}],28:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');

},{"../../modules/_wks-ext":101,"../../modules/es6.string.iterator":115,"../../modules/web.dom.iterable":122}],29:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],30:[function(require,module,exports){
module.exports = function () { /* empty */ };

},{}],31:[function(require,module,exports){
module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

},{}],32:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":61}],33:[function(require,module,exports){
var forOf = require('./_for-of');

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

},{"./_for-of":52}],34:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":92,"./_to-iobject":94,"./_to-length":95}],35:[function(require,module,exports){
// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = require('./_ctx');
var IObject = require('./_iobject');
var toObject = require('./_to-object');
var toLength = require('./_to-length');
var asc = require('./_array-species-create');
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

},{"./_array-species-create":37,"./_ctx":44,"./_iobject":58,"./_to-length":95,"./_to-object":96}],36:[function(require,module,exports){
var isObject = require('./_is-object');
var isArray = require('./_is-array');
var SPECIES = require('./_wks')('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

},{"./_is-array":60,"./_is-object":61,"./_wks":102}],37:[function(require,module,exports){
// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

},{"./_array-species-constructor":36}],38:[function(require,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = require('./_cof');
var TAG = require('./_wks')('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

},{"./_cof":39,"./_wks":102}],39:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],40:[function(require,module,exports){
'use strict';
var dP = require('./_object-dp').f;
var create = require('./_object-create');
var redefineAll = require('./_redefine-all');
var ctx = require('./_ctx');
var anInstance = require('./_an-instance');
var forOf = require('./_for-of');
var $iterDefine = require('./_iter-define');
var step = require('./_iter-step');
var setSpecies = require('./_set-species');
var DESCRIPTORS = require('./_descriptors');
var fastKey = require('./_meta').fastKey;
var validate = require('./_validate-collection');
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};

},{"./_an-instance":31,"./_ctx":44,"./_descriptors":46,"./_for-of":52,"./_iter-define":64,"./_iter-step":65,"./_meta":68,"./_object-create":69,"./_object-dp":70,"./_redefine-all":82,"./_set-species":87,"./_validate-collection":99}],41:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = require('./_classof');
var from = require('./_array-from-iterable');
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

},{"./_array-from-iterable":33,"./_classof":38}],42:[function(require,module,exports){
'use strict';
var global = require('./_global');
var $export = require('./_export');
var meta = require('./_meta');
var fails = require('./_fails');
var hide = require('./_hide');
var redefineAll = require('./_redefine-all');
var forOf = require('./_for-of');
var anInstance = require('./_an-instance');
var isObject = require('./_is-object');
var setToStringTag = require('./_set-to-string-tag');
var dP = require('./_object-dp').f;
var each = require('./_array-methods')(0);
var DESCRIPTORS = require('./_descriptors');

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

},{"./_an-instance":31,"./_array-methods":35,"./_descriptors":46,"./_export":50,"./_fails":51,"./_for-of":52,"./_global":53,"./_hide":55,"./_is-object":61,"./_meta":68,"./_object-dp":70,"./_redefine-all":82,"./_set-to-string-tag":88}],43:[function(require,module,exports){
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],44:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":29}],45:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],46:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":51}],47:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":53,"./_is-object":61}],48:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],49:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys');
var gOPS = require('./_object-gops');
var pIE = require('./_object-pie');
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

},{"./_object-gops":75,"./_object-keys":78,"./_object-pie":79}],50:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":43,"./_ctx":44,"./_global":53,"./_hide":55}],51:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],52:[function(require,module,exports){
var ctx = require('./_ctx');
var call = require('./_iter-call');
var isArrayIter = require('./_is-array-iter');
var anObject = require('./_an-object');
var toLength = require('./_to-length');
var getIterFn = require('./core.get-iterator-method');
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;

},{"./_an-object":32,"./_ctx":44,"./_is-array-iter":59,"./_iter-call":62,"./_to-length":95,"./core.get-iterator-method":103}],53:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],54:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],55:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":46,"./_object-dp":70,"./_property-desc":81}],56:[function(require,module,exports){
var document = require('./_global').document;
module.exports = document && document.documentElement;

},{"./_global":53}],57:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":46,"./_dom-create":47,"./_fails":51}],58:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":39}],59:[function(require,module,exports){
// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

},{"./_iterators":66,"./_wks":102}],60:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

},{"./_cof":39}],61:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],62:[function(require,module,exports){
// call something on iterator step with safe closing on error
var anObject = require('./_an-object');
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

},{"./_an-object":32}],63:[function(require,module,exports){
'use strict';
var create = require('./_object-create');
var descriptor = require('./_property-desc');
var setToStringTag = require('./_set-to-string-tag');
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

},{"./_hide":55,"./_object-create":69,"./_property-desc":81,"./_set-to-string-tag":88,"./_wks":102}],64:[function(require,module,exports){
'use strict';
var LIBRARY = require('./_library');
var $export = require('./_export');
var redefine = require('./_redefine');
var hide = require('./_hide');
var has = require('./_has');
var Iterators = require('./_iterators');
var $iterCreate = require('./_iter-create');
var setToStringTag = require('./_set-to-string-tag');
var getPrototypeOf = require('./_object-gpo');
var ITERATOR = require('./_wks')('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

},{"./_export":50,"./_has":54,"./_hide":55,"./_iter-create":63,"./_iterators":66,"./_library":67,"./_object-gpo":76,"./_redefine":83,"./_set-to-string-tag":88,"./_wks":102}],65:[function(require,module,exports){
module.exports = function (done, value) {
  return { value: value, done: !!done };
};

},{}],66:[function(require,module,exports){
module.exports = {};

},{}],67:[function(require,module,exports){
module.exports = true;

},{}],68:[function(require,module,exports){
var META = require('./_uid')('meta');
var isObject = require('./_is-object');
var has = require('./_has');
var setDesc = require('./_object-dp').f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !require('./_fails')(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

},{"./_fails":51,"./_has":54,"./_is-object":61,"./_object-dp":70,"./_uid":98}],69:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = require('./_an-object');
var dPs = require('./_object-dps');
var enumBugKeys = require('./_enum-bug-keys');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

},{"./_an-object":32,"./_dom-create":47,"./_enum-bug-keys":48,"./_html":56,"./_object-dps":71,"./_shared-key":89}],70:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":32,"./_descriptors":46,"./_ie8-dom-define":57,"./_to-primitive":97}],71:[function(require,module,exports){
var dP = require('./_object-dp');
var anObject = require('./_an-object');
var getKeys = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

},{"./_an-object":32,"./_descriptors":46,"./_object-dp":70,"./_object-keys":78}],72:[function(require,module,exports){
var pIE = require('./_object-pie');
var createDesc = require('./_property-desc');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var has = require('./_has');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

},{"./_descriptors":46,"./_has":54,"./_ie8-dom-define":57,"./_object-pie":79,"./_property-desc":81,"./_to-iobject":94,"./_to-primitive":97}],73:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject');
var gOPN = require('./_object-gopn').f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":74,"./_to-iobject":94}],74:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = require('./_object-keys-internal');
var hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

},{"./_enum-bug-keys":48,"./_object-keys-internal":77}],75:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;

},{}],76:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = require('./_has');
var toObject = require('./_to-object');
var IE_PROTO = require('./_shared-key')('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

},{"./_has":54,"./_shared-key":89,"./_to-object":96}],77:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":34,"./_has":54,"./_shared-key":89,"./_to-iobject":94}],78:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":48,"./_object-keys-internal":77}],79:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;

},{}],80:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":43,"./_export":50,"./_fails":51}],81:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],82:[function(require,module,exports){
var hide = require('./_hide');
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

},{"./_hide":55}],83:[function(require,module,exports){
module.exports = require('./_hide');

},{"./_hide":55}],84:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');
var aFunction = require('./_a-function');
var ctx = require('./_ctx');
var forOf = require('./_for-of');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

},{"./_a-function":29,"./_ctx":44,"./_export":50,"./_for-of":52}],85:[function(require,module,exports){
'use strict';
// https://tc39.github.io/proposal-setmap-offrom/
var $export = require('./_export');

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

},{"./_export":50}],86:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object');
var anObject = require('./_an-object');
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

},{"./_an-object":32,"./_ctx":44,"./_is-object":61,"./_object-gopd":72}],87:[function(require,module,exports){
'use strict';
var global = require('./_global');
var core = require('./_core');
var dP = require('./_object-dp');
var DESCRIPTORS = require('./_descriptors');
var SPECIES = require('./_wks')('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

},{"./_core":43,"./_descriptors":46,"./_global":53,"./_object-dp":70,"./_wks":102}],88:[function(require,module,exports){
var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

},{"./_has":54,"./_object-dp":70,"./_wks":102}],89:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":90,"./_uid":98}],90:[function(require,module,exports){
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

},{"./_global":53}],91:[function(require,module,exports){
var toInteger = require('./_to-integer');
var defined = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

},{"./_defined":45,"./_to-integer":93}],92:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":93}],93:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],94:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":45,"./_iobject":58}],95:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":93}],96:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":45}],97:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":61}],98:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],99:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

},{"./_is-object":61}],100:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var LIBRARY = require('./_library');
var wksExt = require('./_wks-ext');
var defineProperty = require('./_object-dp').f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

},{"./_core":43,"./_global":53,"./_library":67,"./_object-dp":70,"./_wks-ext":101}],101:[function(require,module,exports){
exports.f = require('./_wks');

},{"./_wks":102}],102:[function(require,module,exports){
var store = require('./_shared')('wks');
var uid = require('./_uid');
var Symbol = require('./_global').Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

},{"./_global":53,"./_shared":90,"./_uid":98}],103:[function(require,module,exports){
var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

},{"./_classof":38,"./_core":43,"./_iterators":66,"./_wks":102}],104:[function(require,module,exports){
var anObject = require('./_an-object');
var get = require('./core.get-iterator-method');
module.exports = require('./_core').getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

},{"./_an-object":32,"./_core":43,"./core.get-iterator-method":103}],105:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables');
var step = require('./_iter-step');
var Iterators = require('./_iterators');
var toIObject = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

},{"./_add-to-unscopables":30,"./_iter-define":64,"./_iter-step":65,"./_iterators":66,"./_to-iobject":94}],106:[function(require,module,exports){
'use strict';
var strong = require('./_collection-strong');
var validate = require('./_validate-collection');
var MAP = 'Map';

// 23.1 Map Objects
module.exports = require('./_collection')(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

},{"./_collection":42,"./_collection-strong":40,"./_validate-collection":99}],107:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: require('./_object-create') });

},{"./_export":50,"./_object-create":69}],108:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_descriptors":46,"./_export":50,"./_object-dp":70}],109:[function(require,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

},{"./_is-object":61,"./_meta":68,"./_object-sap":80}],110:[function(require,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

},{"./_object-gopd":72,"./_object-sap":80,"./_to-iobject":94}],111:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

},{"./_object-gpo":76,"./_object-sap":80,"./_to-object":96}],112:[function(require,module,exports){
// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

},{"./_is-object":61,"./_meta":68,"./_object-sap":80}],113:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', { setPrototypeOf: require('./_set-proto').set });

},{"./_export":50,"./_set-proto":86}],114:[function(require,module,exports){

},{}],115:[function(require,module,exports){
'use strict';
var $at = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

},{"./_iter-define":64,"./_string-at":91}],116:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global = require('./_global');
var has = require('./_has');
var DESCRIPTORS = require('./_descriptors');
var $export = require('./_export');
var redefine = require('./_redefine');
var META = require('./_meta').KEY;
var $fails = require('./_fails');
var shared = require('./_shared');
var setToStringTag = require('./_set-to-string-tag');
var uid = require('./_uid');
var wks = require('./_wks');
var wksExt = require('./_wks-ext');
var wksDefine = require('./_wks-define');
var enumKeys = require('./_enum-keys');
var isArray = require('./_is-array');
var anObject = require('./_an-object');
var toIObject = require('./_to-iobject');
var toPrimitive = require('./_to-primitive');
var createDesc = require('./_property-desc');
var _create = require('./_object-create');
var gOPNExt = require('./_object-gopn-ext');
var $GOPD = require('./_object-gopd');
var $DP = require('./_object-dp');
var $keys = require('./_object-keys');
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !require('./_library')) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
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
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

},{"./_an-object":32,"./_descriptors":46,"./_enum-keys":49,"./_export":50,"./_fails":51,"./_global":53,"./_has":54,"./_hide":55,"./_is-array":60,"./_library":67,"./_meta":68,"./_object-create":69,"./_object-dp":70,"./_object-gopd":72,"./_object-gopn":74,"./_object-gopn-ext":73,"./_object-gops":75,"./_object-keys":78,"./_object-pie":79,"./_property-desc":81,"./_redefine":83,"./_set-to-string-tag":88,"./_shared":90,"./_to-iobject":94,"./_to-primitive":97,"./_uid":98,"./_wks":102,"./_wks-define":100,"./_wks-ext":101}],117:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
require('./_set-collection-from')('Map');

},{"./_set-collection-from":84}],118:[function(require,module,exports){
// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
require('./_set-collection-of')('Map');

},{"./_set-collection-of":85}],119:[function(require,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Map', { toJSON: require('./_collection-to-json')('Map') });

},{"./_collection-to-json":41,"./_export":50}],120:[function(require,module,exports){
require('./_wks-define')('asyncIterator');

},{"./_wks-define":100}],121:[function(require,module,exports){
require('./_wks-define')('observable');

},{"./_wks-define":100}],122:[function(require,module,exports){
require('./es6.array.iterator');
var global = require('./_global');
var hide = require('./_hide');
var Iterators = require('./_iterators');
var TO_STRING_TAG = require('./_wks')('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

},{"./_global":53,"./_hide":55,"./_iterators":66,"./_wks":102,"./es6.array.iterator":105}],123:[function(require,module,exports){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = require("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

},{"./runtime":124}],124:[function(require,module,exports){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);

},{}],125:[function(require,module,exports){
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Main.
 */
var func = require("./main/function");
exports.func = func;
var iterable = require("./main/iterable");
exports.iterable = iterable;
var random = require("./main/random");
exports.random = random;
var scalar = require("./main/scalar");
exports.scalar = scalar;
__export(require("./main"));

},{"./main":141,"./main/function":140,"./main/iterable":149,"./main/random":156,"./main/scalar":181}],126:[function(require,module,exports){
"use strict";

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Illegal inheritance exception.
 */

var IllegalInheritanceError = function (_Error) {
    (0, _inherits3.default)(IllegalInheritanceError, _Error);

    function IllegalInheritanceError(message) {
        (0, _classCallCheck3.default)(this, IllegalInheritanceError);

        var _this = (0, _possibleConstructorReturn3.default)(this, (IllegalInheritanceError.__proto__ || (0, _getPrototypeOf2.default)(IllegalInheritanceError)).call(this, message));

        Error.captureStackTrace(_this, _this.constructor);
        return _this;
    }

    return IllegalInheritanceError;
}(Error);

exports.IllegalInheritanceError = IllegalInheritanceError;

},{"babel-runtime/core-js/object/get-prototype-of":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15}],127:[function(require,module,exports){
"use strict";

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Illegal state exception.
 */

var IllegalStateError = function (_Error) {
    (0, _inherits3.default)(IllegalStateError, _Error);

    function IllegalStateError(message) {
        (0, _classCallCheck3.default)(this, IllegalStateError);

        var _this = (0, _possibleConstructorReturn3.default)(this, (IllegalStateError.__proto__ || (0, _getPrototypeOf2.default)(IllegalStateError)).call(this, message));

        Error.captureStackTrace(_this, _this.constructor);
        return _this;
    }

    return IllegalStateError;
}(Error);

exports.IllegalStateError = IllegalStateError;

},{"babel-runtime/core-js/object/get-prototype-of":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15}],128:[function(require,module,exports){
"use strict";

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
/**
 * Prevent instances from inherited classes.
 * @param target Class.
 */
// tslint:disable-next-line:no-any
function final(target) {
    return function (_target) {
        (0, _inherits3.default)(Final, _target);

        // tslint:disable-next-line:no-any
        function Final() {
            var _ref;

            (0, _classCallCheck3.default)(this, Final);

            if (new.target !== Final) {
                throw new index_1.IllegalInheritanceError('Cannot inherit from final class');
            }

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return (0, _possibleConstructorReturn3.default)(this, (_ref = Final.__proto__ || (0, _getPrototypeOf2.default)(Final)).call.apply(_ref, [this].concat(args)));
        }

        return Final;
    }(target);
}
exports.final = final;

},{"./index":141,"babel-runtime/core-js/object/get-prototype-of":7,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/inherits":14,"babel-runtime/helpers/possibleConstructorReturn":15}],129:[function(require,module,exports){
"use strict";

var _freeze = require("babel-runtime/core-js/object/freeze");

var _freeze2 = _interopRequireDefault(_freeze);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Freeze constructor and prototype.
 * @param target Target.
 */
function frozen(target) {
  (0, _freeze2.default)(target);
  (0, _freeze2.default)(target.prototype);
}
exports.frozen = frozen;

},{"babel-runtime/core-js/object/freeze":5}],130:[function(require,module,exports){
"use strict";

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("..");
var index_3 = require("..");
/**
 * Function that caches results.
 */
var Cached = function () {
    /**
     * Ctor.
     * @param func Function callback.
     */
    function Cached(func) {
        (0, _classCallCheck3.default)(this, Cached);

        this.func = new index_1.FunctionOf(func);
        this.cache = new _map2.default();
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Cached, [{
        key: "isFunction",
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            if (!this.cache.has(input)) {
                this.cache.set(input, this.func.apply(input));
            }
            return this.cache.get(input);
        }
    }]);
    return Cached;
}();
Cached = __decorate([index_2.final, index_3.frozen], Cached);
exports.Cached = Cached;

},{"..":141,"./index":140,"babel-runtime/core-js/map":2,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],131:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("..");
var index_3 = require("..");
/**
 * Function that executes conditionally.
 */
var Conditioned = function () {
    /**
     * Ctor.
     * @param condition Condition.
     * @param func Function.
     */
    function Conditioned(condition, func) {
        (0, _classCallCheck3.default)(this, Conditioned);

        this.condition = new index_1.FunctionOf(condition);
        this.func = new index_1.FunctionOf(func);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Conditioned, [{
        key: "isFunction",
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            if (this.condition.apply(input)) {
                this.func.apply(input);
            }
        }
    }]);
    return Conditioned;
}();
Conditioned = __decorate([index_2.final, index_3.frozen], Conditioned);
exports.Conditioned = Conditioned;

},{"..":141,"./index":140,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],132:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../scalar");
/**
 * Function of several possible types.
 */
var FunctionOf = function () {
    /**
     * Ctor.
     * @param func Function callback.
     */
    function FunctionOf(func) {
        (0, _classCallCheck3.default)(this, FunctionOf);

        this.func = new index_3.Cached(function () {
            return typeof func === 'function' ? func : function (input) {
                return func.apply(input);
            };
        });
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(FunctionOf, [{
        key: "isFunction",
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            return this.func.value()(input);
        }
    }]);
    return FunctionOf;
}();
FunctionOf = __decorate([index_1.final, index_2.frozen], FunctionOf);
exports.FunctionOf = FunctionOf;

},{"..":141,"../scalar":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],133:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../scalar");
/**
 * Determines if variable is of type {@link Function}.
 */
var IsFunction = function () {
    /**
     * Ctor.
     * @param maybeFunc Variable to check.
     */
    function IsFunction(maybeFunc) {
        (0, _classCallCheck3.default)(this, IsFunction);

        this.isFunction = new index_3.HasTrueResult(maybeFunc, 'isFunction');
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(IsFunction, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.isFunction.value();
        }
    }]);
    return IsFunction;
}();
IsFunction = __decorate([index_1.final, index_2.frozen], IsFunction);
exports.IsFunction = IsFunction;

},{"..":141,"../scalar":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],134:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../scalar");
/**
 * Function that caches results.
 */
var IsTrue = function () {
    function IsTrue() {
        (0, _classCallCheck3.default)(this, IsTrue);
    }

    (0, _createClass3.default)(IsTrue, [{
        key: "isFunction",

        /**
         * Type determinant.
         */
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            return new index_3.BoolOf(input).value();
        }
    }]);
    return IsTrue;
}();
IsTrue = __decorate([index_1.final, index_2.frozen], IsTrue);
exports.IsTrue = IsTrue;

},{"..":141,"../scalar":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],135:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("..");
var index_3 = require("..");
/**
 * Function without arguments.
 */
var NullaryFunctionOf = function () {
    /**
     * Ctor.
     * @param func Function callback.
     */
    function NullaryFunctionOf(func) {
        (0, _classCallCheck3.default)(this, NullaryFunctionOf);

        this.func = new index_1.FunctionOf(func);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(NullaryFunctionOf, [{
        key: "isFunction",
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            return this.func.apply(input);
        }
    }]);
    return NullaryFunctionOf;
}();
NullaryFunctionOf = __decorate([index_2.final, index_3.frozen], NullaryFunctionOf);
exports.NullaryFunctionOf = NullaryFunctionOf;

},{"..":141,"./index":140,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],136:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("..");
var index_3 = require("..");
var index_4 = require("../scalar");
/**
 * Function that executes when input is not null or undefined.
 */
var SafeNavigation = function () {
    /**
     * Ctor.
     * @param func Function.
     */
    function SafeNavigation(func) {
        (0, _classCallCheck3.default)(this, SafeNavigation);

        this.func = new index_1.Conditioned(function (input) {
            return new index_4.IsNotBlank(input).value();
        }, func);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(SafeNavigation, [{
        key: "isFunction",
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            this.func.apply(input);
        }
    }]);
    return SafeNavigation;
}();
SafeNavigation = __decorate([index_2.final, index_3.frozen], SafeNavigation);
exports.SafeNavigation = SafeNavigation;

},{"..":141,"../scalar":181,"./index":140,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],137:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("./index");
var index_3 = require("..");
var index_4 = require("..");
/**
 * Converts boolean-like types to boolean.
 */
var ToBool = function () {
    /**
     * Ctor.
     * @param toValue Function to convert scalar-like booleans to boolean primitives.
     */
    function ToBool() {
        var toValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new index_2.ToValue();
        (0, _classCallCheck3.default)(this, ToBool);

        this.toValue = new index_1.FunctionOf(toValue);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(ToBool, [{
        key: "isFunction",
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            var isConditionConsequentLikePair = Array.isArray(input) && input.length === 2;
            return this.toValue.apply(isConditionConsequentLikePair ? input[0] : input);
        }
    }]);
    return ToBool;
}();
ToBool = __decorate([index_3.final, index_4.frozen], ToBool);
exports.ToBool = ToBool;

},{"..":141,"./index":140,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],138:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../scalar");
/**
 * Converts {@link ConditionConsequentLikePair} to {@link ToConditionConsequentPair}.
 */
var ToConditionConsequentPair = function () {
    function ToConditionConsequentPair() {
        (0, _classCallCheck3.default)(this, ToConditionConsequentPair);
    }

    (0, _createClass3.default)(ToConditionConsequentPair, [{
        key: "isFunction",

        /**
         * Type determinant.
         */
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            return [new index_3.ScalarOf(input[0]), new index_3.ScalarOf(input[1])];
        }
    }]);
    return ToConditionConsequentPair;
}();
ToConditionConsequentPair = __decorate([index_1.final, index_2.frozen], ToConditionConsequentPair);
exports.ToConditionConsequentPair = ToConditionConsequentPair;

},{"..":141,"../scalar":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],139:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var index_2 = require("..");
var index_3 = require("..");
var index_4 = require("../scalar");
/**
 * Converts scalar-like types to their respective values.
 */
var ToValue = function () {
    function ToValue() {
        (0, _classCallCheck3.default)(this, ToValue);
    }

    (0, _createClass3.default)(ToValue, [{
        key: "isFunction",

        /**
         * Type determinant.
         */
        value: function isFunction() {
            return true;
        }
        /**
         * Apply the function to the input.
         * @param input Input.
         */

    }, {
        key: "apply",
        value: function apply(input) {
            if (typeof input === 'function') {
                return input();
            } else if (new index_4.IsScalar(input).value()) {
                return input.value();
            } else if (new index_1.IsFunction(input).value()) {
                return input.apply(undefined);
            } else {
                return input;
            }
        }
    }]);
    return ToValue;
}();
ToValue = __decorate([index_2.final, index_3.frozen], ToValue);
exports.ToValue = ToValue;

},{"..":141,"../scalar":181,"./index":140,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],140:[function(require,module,exports){
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Index
 */
__export(require("./Cached"));
__export(require("./Conditioned"));
__export(require("./FunctionOf"));
__export(require("./IsFunction"));
__export(require("./IsTrue"));
__export(require("./NullaryFunctionOf"));
__export(require("./SafeNavigation"));
__export(require("./ToBool"));
__export(require("./ToConditionConsequentPair"));
__export(require("./ToValue"));

},{"./Cached":130,"./Conditioned":131,"./FunctionOf":132,"./IsFunction":133,"./IsTrue":134,"./NullaryFunctionOf":135,"./SafeNavigation":136,"./ToBool":137,"./ToConditionConsequentPair":138,"./ToValue":139}],141:[function(require,module,exports){
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Main index.
 */
__export(require("./final"));
__export(require("./frozen"));
__export(require("./IllegalInheritanceError"));
__export(require("./IllegalStateError"));
__export(require("./sealed"));

},{"./IllegalInheritanceError":126,"./IllegalStateError":127,"./final":128,"./frozen":129,"./sealed":182}],142:[function(require,module,exports){
"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator = require("babel-runtime/core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../function");
var index_2 = require("..");
var index_3 = require("..");
var index_4 = require("./index");
/**
 * Iterable of logical conditions.
 */
var Conditions = function () {
    /**
     * Ctor.
     * @param conditions Conditions.
     */
    function Conditions(conditions) {
        (0, _classCallCheck3.default)(this, Conditions);

        this.conditions = new index_4.Mapped(conditions, new index_1.ToBool());
    }
    /**
     * Iterator.
     */


    (0, _createClass3.default)(Conditions, [{
        key: _iterator2.default,
        value: function value() {
            return (0, _getIterator3.default)(this.conditions);
        }
    }]);
    return Conditions;
}();
Conditions = __decorate([index_2.final, index_3.frozen], Conditions);
exports.Conditions = Conditions;

},{"..":141,"../function":140,"./index":149,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/core-js/symbol/iterator":11,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],143:[function(require,module,exports){
"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * Iterables equals.
 */
var Equals = function () {
    /**
     * Ctor.
     * @param source Value.
     * @param compared Compared.
     */
    function Equals(source, compared) {
        (0, _classCallCheck3.default)(this, Equals);

        this.source = source;
        this.compared = compared;
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Equals, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Gets the value.
         */

    }, {
        key: "value",
        value: function value() {
            var result = true;
            var sourceIterator = (0, _getIterator3.default)(this.source);
            var comparedIterator = (0, _getIterator3.default)(this.compared);
            do {
                var sourceNext = sourceIterator.next();
                var comparedNext = comparedIterator.next();
                if (sourceNext.done === comparedNext.done) {
                    if (sourceNext.value !== comparedNext.value) {
                        result = false;
                    } else {
                        if (sourceNext.done) {
                            break;
                        }
                    }
                } else {
                    result = false;
                }
            } while (result);
            return result;
        }
    }]);
    return Equals;
}();
Equals = __decorate([index_1.final, index_2.frozen], Equals);
exports.Equals = Equals;

},{"..":141,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],144:[function(require,module,exports){
"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator2 = require("babel-runtime/core-js/symbol/iterator");

var _iterator3 = _interopRequireDefault(_iterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../function");
var index_2 = require("..");
var index_3 = require("..");
/**
 * Filtered iterable.
 */
var Filtered = function () {
    /**
     * Ctor.
     * @param iterable Iterable.
     * @param func Function.
     */
    function Filtered(iterable, func) {
        (0, _classCallCheck3.default)(this, Filtered);

        this.iterable = iterable;
        this.func = new index_1.FunctionOf(func);
    }
    /**
     * Iterator.
     */


    (0, _createClass3.default)(Filtered, [{
        key: _iterator3.default,
        value: /*#__PURE__*/_regenerator2.default.mark(function value() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

            return _regenerator2.default.wrap(function value$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 3;
                            _iterator = (0, _getIterator3.default)(this.iterable);

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 13;
                                break;
                            }

                            item = _step.value;

                            if (!this.func.apply(item)) {
                                _context.next = 10;
                                break;
                            }

                            _context.next = 10;
                            return item;

                        case 10:
                            _iteratorNormalCompletion = true;
                            _context.next = 5;
                            break;

                        case 13:
                            _context.next = 19;
                            break;

                        case 15:
                            _context.prev = 15;
                            _context.t0 = _context["catch"](3);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 19:
                            _context.prev = 19;
                            _context.prev = 20;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 22:
                            _context.prev = 22;

                            if (!_didIteratorError) {
                                _context.next = 25;
                                break;
                            }

                            throw _iteratorError;

                        case 25:
                            return _context.finish(22);

                        case 26:
                            return _context.finish(19);

                        case 27:
                        case "end":
                            return _context.stop();
                    }
                }
            }, value, this, [[3, 15, 19, 27], [20,, 22, 26]]);
        })
    }]);
    return Filtered;
}();
Filtered = __decorate([index_2.final, index_3.frozen], Filtered);
exports.Filtered = Filtered;

},{"..":141,"../function":140,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/core-js/symbol/iterator":11,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16,"babel-runtime/regenerator":17}],145:[function(require,module,exports){
"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * First item of iterable.
 */
var First = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function First(value) {
        (0, _classCallCheck3.default)(this, First);

        this.source = new index_3.Limited(value, 1);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(First, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Gets the value.
         */

    }, {
        key: "value",
        value: function value() {
            return (0, _getIterator3.default)(this.source).next();
        }
    }]);
    return First;
}();
First = __decorate([index_1.final, index_2.frozen], First);
exports.First = First;

},{"..":141,"./index":149,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],146:[function(require,module,exports){
"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * Length of iterable.
 */
var LengthOf = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function LengthOf(value) {
        (0, _classCallCheck3.default)(this, LengthOf);

        this.source = value;
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(LengthOf, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Gets the value.
         */

    }, {
        key: "value",
        value: function value() {
            var length = 0;
            // tslint:disable-next-line:variable-name
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(this.source), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _item = _step.value;

                    length += 1;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return length;
        }
    }]);
    return LengthOf;
}();
LengthOf = __decorate([index_1.final, index_2.frozen], LengthOf);
exports.LengthOf = LengthOf;

},{"..":141,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],147:[function(require,module,exports){
"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator2 = require("babel-runtime/core-js/symbol/iterator");

var _iterator3 = _interopRequireDefault(_iterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../scalar");
/**
 * Limited iterable.
 */
var Limited = function () {
    /**
     * Ctor.
     * @param iterable Iterable.
     * @param number Limit.
     */
    function Limited(iterable, limit) {
        (0, _classCallCheck3.default)(this, Limited);

        this.iterable = iterable;
        this.limit = new index_3.ScalarOf(limit);
    }
    /**
     * Iterator.
     */


    (0, _createClass3.default)(Limited, [{
        key: _iterator3.default,
        value: /*#__PURE__*/_regenerator2.default.mark(function value() {
            var count, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

            return _regenerator2.default.wrap(function value$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            count = 0;
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 4;
                            _iterator = (0, _getIterator3.default)(this.iterable);

                        case 6:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 16;
                                break;
                            }

                            item = _step.value;

                            if (!(count >= this.limit.value())) {
                                _context.next = 10;
                                break;
                            }

                            return _context.abrupt("break", 16);

                        case 10:
                            _context.next = 12;
                            return item;

                        case 12:
                            count += 1;

                        case 13:
                            _iteratorNormalCompletion = true;
                            _context.next = 6;
                            break;

                        case 16:
                            _context.next = 22;
                            break;

                        case 18:
                            _context.prev = 18;
                            _context.t0 = _context["catch"](4);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 22:
                            _context.prev = 22;
                            _context.prev = 23;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 25:
                            _context.prev = 25;

                            if (!_didIteratorError) {
                                _context.next = 28;
                                break;
                            }

                            throw _iteratorError;

                        case 28:
                            return _context.finish(25);

                        case 29:
                            return _context.finish(22);

                        case 30:
                        case "end":
                            return _context.stop();
                    }
                }
            }, value, this, [[4, 18, 22, 30], [23,, 25, 29]]);
        })
    }]);
    return Limited;
}();
Limited = __decorate([index_1.final, index_2.frozen], Limited);
exports.Limited = Limited;

},{"..":141,"../scalar":181,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/core-js/symbol/iterator":11,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16,"babel-runtime/regenerator":17}],148:[function(require,module,exports){
"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator2 = require("babel-runtime/core-js/symbol/iterator");

var _iterator3 = _interopRequireDefault(_iterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../function");
var index_2 = require("..");
var index_3 = require("..");
/**
 * Mapped iterable.
 */
var Mapped = function () {
    /**
     * Ctor.
     * @param iterable Iterable.
     * @param func Function.
     */
    function Mapped(iterable, func) {
        (0, _classCallCheck3.default)(this, Mapped);

        this.iterable = iterable;
        this.func = new index_1.FunctionOf(func);
    }
    /**
     * Iterator.
     */


    (0, _createClass3.default)(Mapped, [{
        key: _iterator3.default,
        value: /*#__PURE__*/_regenerator2.default.mark(function value() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

            return _regenerator2.default.wrap(function value$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 3;
                            _iterator = (0, _getIterator3.default)(this.iterable);

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 12;
                                break;
                            }

                            item = _step.value;
                            _context.next = 9;
                            return this.func.apply(item);

                        case 9:
                            _iteratorNormalCompletion = true;
                            _context.next = 5;
                            break;

                        case 12:
                            _context.next = 18;
                            break;

                        case 14:
                            _context.prev = 14;
                            _context.t0 = _context["catch"](3);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 18:
                            _context.prev = 18;
                            _context.prev = 19;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 21:
                            _context.prev = 21;

                            if (!_didIteratorError) {
                                _context.next = 24;
                                break;
                            }

                            throw _iteratorError;

                        case 24:
                            return _context.finish(21);

                        case 25:
                            return _context.finish(18);

                        case 26:
                        case "end":
                            return _context.stop();
                    }
                }
            }, value, this, [[3, 14, 18, 26], [19,, 21, 25]]);
        })
    }]);
    return Mapped;
}();
Mapped = __decorate([index_2.final, index_3.frozen], Mapped);
exports.Mapped = Mapped;

},{"..":141,"../function":140,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/core-js/symbol/iterator":11,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16,"babel-runtime/regenerator":17}],149:[function(require,module,exports){
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Index.
 */
__export(require("./Conditions"));
__export(require("./Equals"));
__export(require("./Filtered"));
__export(require("./First"));
__export(require("./LengthOf"));
__export(require("./Limited"));
__export(require("./Mapped"));

},{"./Conditions":142,"./Equals":143,"./Filtered":144,"./First":145,"./LengthOf":146,"./Limited":147,"./Mapped":148}],150:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../scalar");
/**
 * Park-Miller random source.
 * @see http://www.firstpr.com.au/dsp/rand31/
 *
 * For other alternative implementations in JS:
 * @see https://github.com/odogono/prng-parkmiller-js
 * @see https://github.com/SirAnthony/rand31
 * @see https://gist.github.com/blixt/f17b47c62508be59987b
 */
var ParkMillerRandom = ParkMillerRandom_1 = function () {
    /**
     * Ctor.
     * @param seed Seed number. If not provided will use a seed based on the current time.
     */
    function ParkMillerRandom() {
        var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
            return Date.now();
        };
        (0, _classCallCheck3.default)(this, ParkMillerRandom);

        // make sure seed is number between 1 and MAX
        this.seed = new index_3.ScalarOf(function () {
            var source = new index_3.ScalarOf(seed).value();
            source = source === 0 ? 1 : source;
            return Math.abs(source) % ParkMillerRandom_1.MAX;
        });
    }
    /**
     * Next random value between 0 (inclusive) and 1 (exclusive).
     */


    (0, _createClass3.default)(ParkMillerRandom, [{
        key: "next",
        value: function next() {
            this.seed = new index_3.ScalarOf(this.seed.value() * 16807 % ParkMillerRandom_1.MAX);
            return this.seed.value() / ParkMillerRandom_1.MAX;
        }
    }]);
    return ParkMillerRandom;
}();
/**
 * Maximum (exclusive) possible value.
 */
ParkMillerRandom.MAX = 2147483647;
ParkMillerRandom = ParkMillerRandom_1 = __decorate([index_1.final, index_2.frozen], ParkMillerRandom);
exports.ParkMillerRandom = ParkMillerRandom;
var ParkMillerRandom_1;

},{"..":141,"../scalar":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],151:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * RandomSource as {@link Random}.
 */
var RandomOf = function () {
    /**
     * Ctor.
     * @param source Random source.
     */
    function RandomOf(source) {
        (0, _classCallCheck3.default)(this, RandomOf);

        this.source = source;
    }
    /**
     * Next random value between 0 (inclusive) and 1 (exclusive).
     */


    (0, _createClass3.default)(RandomOf, [{
        key: "next",
        value: function next() {
            var arr = new Uint32Array(1);
            this.source.getRandomValues(arr);
            return arr[0] / Math.pow(2, 32);
        }
    }]);
    return RandomOf;
}();
RandomOf = __decorate([index_1.final, index_2.frozen], RandomOf);
exports.RandomOf = RandomOf;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],152:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * Randomized bool.
 */
var RandomizedBool = function () {
    /**
     * Ctor.
     * @param random Random.
     */
    function RandomizedBool(random) {
        (0, _classCallCheck3.default)(this, RandomizedBool);

        this.random = random;
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(RandomizedBool, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.random.next() >= 0.5;
        }
    }]);
    return RandomizedBool;
}();
RandomizedBool = __decorate([index_1.final, index_2.frozen], RandomizedBool);
exports.RandomizedBool = RandomizedBool;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],153:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../scalar");
/**
 * Randomized floating point number.
 */
var RandomizedFloat = function () {
    /**
     * Ctor.
     * @param random Random.
     * @param min Minimum possible value (inclusive).
     * @param max Maximum possible value (inclusive).
     */
    function RandomizedFloat(random, min, max) {
        (0, _classCallCheck3.default)(this, RandomizedFloat);

        this.random = random;
        this.min = new index_3.ScalarOf(min);
        this.max = new index_3.ScalarOf(max);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(RandomizedFloat, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.min.value() + (this.max.value() - this.min.value()) * this.random.next();
        }
    }]);
    return RandomizedFloat;
}();
RandomizedFloat = __decorate([index_1.final, index_2.frozen], RandomizedFloat);
exports.RandomizedFloat = RandomizedFloat;

},{"..":141,"../scalar":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],154:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Randomized integer.
 */
var RandomizedInt = function () {
    /**
     * Ctor.
     * @param random Random.
     * @param min Minimum possible value (inclusive).
     * @param max Maximum possible value (inclusive).
     */
    function RandomizedInt(random, min, max) {
        (0, _classCallCheck3.default)(this, RandomizedInt);

        this.randomizedFloat = new index_3.RandomizedFloat(random, min, max);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(RandomizedInt, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return Math.round(this.randomizedFloat.value());
        }
    }]);
    return RandomizedInt;
}();
RandomizedInt = __decorate([index_1.final, index_2.frozen], RandomizedInt);
exports.RandomizedInt = RandomizedInt;

},{"..":141,"./index":156,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],155:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Randomized floating point number between 0 and 1.
 */
var RandomizedPercentage = function () {
    /**
     * Ctor.
     * @param random Random.
     */
    function RandomizedPercentage(random) {
        (0, _classCallCheck3.default)(this, RandomizedPercentage);

        this.randomizedFloat = new index_3.RandomizedFloat(random, 0, 1);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(RandomizedPercentage, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.randomizedFloat.value();
        }
    }]);
    return RandomizedPercentage;
}();
RandomizedPercentage = __decorate([index_1.final, index_2.frozen], RandomizedPercentage);
exports.RandomizedPercentage = RandomizedPercentage;

},{"..":141,"./index":156,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],156:[function(require,module,exports){
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Index.
 */
__export(require("./ParkMillerRandom"));
__export(require("./RandomizedBool"));
__export(require("./RandomizedFloat"));
__export(require("./RandomizedInt"));
__export(require("./RandomizedPercentage"));
__export(require("./RandomOf"));

},{"./ParkMillerRandom":150,"./RandomOf":151,"./RandomizedBool":152,"./RandomizedFloat":153,"./RandomizedInt":154,"./RandomizedPercentage":155}],157:[function(require,module,exports){
"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../iterable");
/**
 * Logical conjunction operator.
 */
var And = function () {
    /**
     * Ctor.
     * @param conditions Conditions.
     */
    function And() {
        (0, _classCallCheck3.default)(this, And);

        for (var _len = arguments.length, conditions = Array(_len), _key = 0; _key < _len; _key++) {
            conditions[_key] = arguments[_key];
        }

        this.conditions = new index_3.Conditions(conditions);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(And, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(this.conditions), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var condition = _step.value;

                    if (!condition) {
                        return false;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return true;
        }
    }]);
    return And;
}();
And = __decorate([index_1.final, index_2.frozen], And);
exports.And = And;

},{"..":141,"../iterable":149,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],158:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../function");
var index_2 = require("../function");
var index_3 = require("..");
var index_4 = require("..");
/**
 * Boolean of different possible inputs.
 */
var BoolOf = function () {
    /**
     * Ctor.
     * @param value Boolean-like value.
     */
    function BoolOf(value) {
        var toBool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new index_2.ToBool();
        (0, _classCallCheck3.default)(this, BoolOf);

        this.bool = value;
        this.toBool = new index_1.FunctionOf(toBool);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(BoolOf, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Gets the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.toBool.apply(this.bool);
        }
    }]);
    return BoolOf;
}();
BoolOf = __decorate([index_3.final, index_4.frozen], BoolOf);
exports.BoolOf = BoolOf;

},{"..":141,"../function":140,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],159:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Cached scalar.
 */
var Cached = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function Cached(value) {
        (0, _classCallCheck3.default)(this, Cached);

        this.scalar = new index_3.ScalarOf(value);
        this.isCached = false;
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Cached, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            if (!this.isCached) {
                this.cache = this.scalar.value();
                this.isCached = true;
            }
            return this.cache;
        }
    }]);
    return Cached;
}();
Cached = __decorate([index_1.final, index_2.frozen], Cached);
exports.Cached = Cached;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],160:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../function");
var index_2 = require("../function");
var index_3 = require("..");
var index_4 = require("..");
var index_5 = require("../iterable");
var index_6 = require("../iterable");
var index_7 = require("../iterable");
var index_8 = require("./index");
/**
 * Conditional scalar.
 */
var Conditioned = function () {
    /**
     * Ctor.
     *
     * @param alternative Fallback value when all conditions are false.
     * @param conditionConsequents Condition/consequent pairs.
     */
    function Conditioned(alternative) {
        (0, _classCallCheck3.default)(this, Conditioned);

        for (var _len = arguments.length, conditionConsequents = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            conditionConsequents[_key - 1] = arguments[_key];
        }

        this.firstConditionConsequent = new index_6.First(new index_5.Filtered(new index_7.Mapped(conditionConsequents, new index_2.ToConditionConsequentPair()), new index_1.IsTrue()));
        this.alternative = new index_8.ScalarOf(alternative);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Conditioned, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Gets the value.
         */

    }, {
        key: "value",
        value: function value() {
            var first = this.firstConditionConsequent.value();
            return !first.done ? first.value[1].value() : this.alternative.value();
        }
    }]);
    return Conditioned;
}();
Conditioned = __decorate([index_3.final, index_4.frozen], Conditioned);
exports.Conditioned = Conditioned;

},{"..":141,"../function":140,"../iterable":149,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],161:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * False scalar.
 */
var False = function () {
    function False() {
        (0, _classCallCheck3.default)(this, False);
    }

    (0, _createClass3.default)(False, [{
        key: "isScalar",

        /**
         * Type determinant.
         */
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return false;
        }
    }]);
    return False;
}();
False = __decorate([index_1.final, index_2.frozen], False);
exports.False = False;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],162:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * Determines if an object has a property set to true.
 */
var HasTrueProperty = function () {
    /**
     * Ctor.
     * @param value Variable.
     * @param propertyName Name of the property.
     */
    function HasTrueProperty(value, propertyName) {
        (0, _classCallCheck3.default)(this, HasTrueProperty);

        this.isPropertyTrue = function () {
            return value !== null && (typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === 'object' && value[propertyName] === true;
        };
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(HasTrueProperty, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.isPropertyTrue();
        }
    }]);
    return HasTrueProperty;
}();
HasTrueProperty = __decorate([index_1.final, index_2.frozen], HasTrueProperty);
exports.HasTrueProperty = HasTrueProperty;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],163:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * Determines if an object has a nullary function that returns true.
 */
var HasTrueResult = function () {
    /**
     * Ctor.
     * @param value Variable.
     * @param functionName Name of the function.
     */
    function HasTrueResult(value, functionName) {
        (0, _classCallCheck3.default)(this, HasTrueResult);

        this.isResultTrue = function () {
            return value !== null && (typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === 'object' && typeof value[functionName] === 'function' && value[functionName]();
        };
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(HasTrueResult, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.isResultTrue();
        }
    }]);
    return HasTrueResult;
}();
HasTrueResult = __decorate([index_1.final, index_2.frozen], HasTrueResult);
exports.HasTrueResult = HasTrueResult;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],164:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
var index_4 = require("./index");
var index_5 = require("./index");
/**
 * Determines if scalar or value is null or undefined.
 */
var IsBlank = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function IsBlank(value) {
        (0, _classCallCheck3.default)(this, IsBlank);

        this.isBlank = new index_5.Or(new index_3.IsNull(value), new index_4.IsUndefined(value));
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(IsBlank, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.isBlank.value();
        }
    }]);
    return IsBlank;
}();
IsBlank = __decorate([index_1.final, index_2.frozen], IsBlank);
exports.IsBlank = IsBlank;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],165:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * Determines if variable is a standard JavaScript function.
 */
var IsJsFunction = function () {
    /**
     * Ctor.
     * @param val Variable to check.
     */
    function IsJsFunction(val) {
        (0, _classCallCheck3.default)(this, IsJsFunction);

        this.val = val;
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(IsJsFunction, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return typeof this.val === 'function';
        }
    }]);
    return IsJsFunction;
}();
IsJsFunction = __decorate([index_1.final, index_2.frozen], IsJsFunction);
exports.IsJsFunction = IsJsFunction;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],166:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
var index_4 = require("./index");
/**
 * Determines if scalar or value is not null and not undefined.
 */
var IsNotBlank = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function IsNotBlank(value) {
        (0, _classCallCheck3.default)(this, IsNotBlank);

        this.scalar = new index_4.ScalarOf(value);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(IsNotBlank, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return !new index_3.IsBlank(this.scalar).value();
        }
    }]);
    return IsNotBlank;
}();
IsNotBlank = __decorate([index_1.final, index_2.frozen], IsNotBlank);
exports.IsNotBlank = IsNotBlank;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],167:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Determines if scalar or value is null.
 */
var IsNull = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function IsNull(value) {
        (0, _classCallCheck3.default)(this, IsNull);

        this.scalar = new index_3.ScalarOf(value);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(IsNull, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.scalar.value() === null;
        }
    }]);
    return IsNull;
}();
IsNull = __decorate([index_1.final, index_2.frozen], IsNull);
exports.IsNull = IsNull;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],168:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Determines if variable is an object.
 */
var IsObject = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function IsObject(value) {
        (0, _classCallCheck3.default)(this, IsObject);

        this.scalar = new index_3.ScalarOf(value);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(IsObject, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return (0, _typeof3.default)(this.scalar.value()) === 'object';
        }
    }]);
    return IsObject;
}();
IsObject = __decorate([index_1.final, index_2.frozen], IsObject);
exports.IsObject = IsObject;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],169:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Determines if variable is of type {@link Scalar}.
 */
var IsScalar = function () {
    /**
     * Ctor.
     * @param maybeScalar Variable to check.
     */
    function IsScalar(maybeScalar) {
        (0, _classCallCheck3.default)(this, IsScalar);

        this.isScalarType = new index_3.HasTrueResult(maybeScalar, 'isScalar');
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(IsScalar, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.isScalarType.value();
        }
    }]);
    return IsScalar;
}();
IsScalar = __decorate([index_1.final, index_2.frozen], IsScalar);
exports.IsScalar = IsScalar;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],170:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Determines if scalar or value is undefined.
 */
var IsUndefined = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function IsUndefined(value) {
        (0, _classCallCheck3.default)(this, IsUndefined);

        this.scalar = new index_3.ScalarOf(value);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(IsUndefined, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.scalar.value() === undefined;
        }
    }]);
    return IsUndefined;
}();
IsUndefined = __decorate([index_1.final, index_2.frozen], IsUndefined);
exports.IsUndefined = IsUndefined;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],171:[function(require,module,exports){
"use strict";

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../function");
var index_2 = require("..");
var index_3 = require("..");
var index_4 = require("../iterable");
/**
 * Map of iterable and callback.
 */
var MapOf = function () {
    /**
     * Ctor.
     * @param entries Items.
     * @param getEntry Function or standard JavaScript function to get key value entry.
     */
    function MapOf(entries, getEntry) {
        (0, _classCallCheck3.default)(this, MapOf);

        this.entries = entries;
        this.getEntry = new index_1.FunctionOf(getEntry);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(MapOf, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Gets the value.
         */

    }, {
        key: "value",
        value: function value() {
            return new _map2.default(new index_4.Mapped(this.entries, this.getEntry));
        }
    }]);
    return MapOf;
}();
MapOf = __decorate([index_2.final, index_3.frozen], MapOf);
exports.MapOf = MapOf;

},{"..":141,"../function":140,"../iterable":149,"babel-runtime/core-js/map":2,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],172:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Negates a logical condition.
 */
var Not = function () {
    /**
     * Ctor.
     * @param value Value.
     */
    function Not(value) {
        (0, _classCallCheck3.default)(this, Not);

        this.scalar = new index_3.ScalarOf(value);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Not, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return !this.scalar.value();
        }
    }]);
    return Not;
}();
Not = __decorate([index_1.final, index_2.frozen], Not);
exports.Not = Not;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],173:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * Null scalar.
 */
var Null = function () {
    function Null() {
        (0, _classCallCheck3.default)(this, Null);
    }

    (0, _createClass3.default)(Null, [{
        key: "isScalar",

        /**
         * Type determinant.
         */
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return null;
        }
    }]);
    return Null;
}();
Null = __decorate([index_1.final, index_2.frozen], Null);
exports.Null = Null;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],174:[function(require,module,exports){
"use strict";

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("../iterable");
/**
 * Logical disjunction operator.
 */
var Or = function () {
    /**
     * Ctor.
     * @param conditions Conditions.
     */
    function Or() {
        (0, _classCallCheck3.default)(this, Or);

        for (var _len = arguments.length, conditions = Array(_len), _key = 0; _key < _len; _key++) {
            conditions[_key] = arguments[_key];
        }

        this.conditions = new index_3.Conditions(conditions);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Or, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(this.conditions), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var condition = _step.value;

                    if (condition) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return false;
        }
    }]);
    return Or;
}();
Or = __decorate([index_1.final, index_2.frozen], Or);
exports.Or = Or;

},{"..":141,"../iterable":149,"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],175:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Rounded number.
 * Code adapted from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round.
 */
var Rounded = function () {
    /**
     * Ctor.
     * @param something Number.
     * @param precision Precision. E.g. 1 would round to 1 decimal place.
     */
    function Rounded(value, precision) {
        (0, _classCallCheck3.default)(this, Rounded);

        this.scalar = new index_3.ScalarOf(value);
        this.precision = new index_3.ScalarOf(precision);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Rounded, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            var factor = Math.pow(10, this.precision.value());
            return Math.round(this.scalar.value() * factor) / factor;
        }
    }]);
    return Rounded;
}();
Rounded = __decorate([index_1.final, index_2.frozen], Rounded);
exports.Rounded = Rounded;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],176:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../function");
var index_2 = require("..");
var index_3 = require("..");
/**
 * Scalar of different possible inputs.
 */
var ScalarOf = function () {
    /**
     * Ctor.
     * @param value Scalar, function that returns value, or value.
     */
    function ScalarOf(value) {
        var toValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new index_1.ToValue();
        (0, _classCallCheck3.default)(this, ScalarOf);

        this.val = value;
        this.toValue = toValue;
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(ScalarOf, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Gets the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.toValue.apply(this.val);
        }
    }]);
    return ScalarOf;
}();
ScalarOf = __decorate([index_2.final, index_3.frozen], ScalarOf);
exports.ScalarOf = ScalarOf;

},{"..":141,"../function":140,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],177:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
/**
 * Ternary operation.
 */
var Ternary = function () {
    /**
     * Ctor.
     * @param condition Test condition.
     * @param consequent Return when condition is true.
     * @param alternative Return when condition is false.
     */
    function Ternary(condition, consequent, alternative) {
        (0, _classCallCheck3.default)(this, Ternary);

        this.condition = new index_3.ScalarOf(condition);
        this.consequent = new index_3.ScalarOf(consequent);
        this.alternative = new index_3.ScalarOf(alternative);
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(Ternary, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Gets the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.condition.value() ? this.consequent.value() : this.alternative.value();
        }
    }]);
    return Ternary;
}();
Ternary = __decorate([index_1.final, index_2.frozen], Ternary);
exports.Ternary = Ternary;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],178:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * True scalar.
 */
var True = function () {
    function True() {
        (0, _classCallCheck3.default)(this, True);
    }

    (0, _createClass3.default)(True, [{
        key: "isScalar",

        /**
         * Type determinant.
         */
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return true;
        }
    }]);
    return True;
}();
True = __decorate([index_1.final, index_2.frozen], True);
exports.True = True;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],179:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
/**
 * Undefined scalar.
 */
var Undefined = function () {
    function Undefined() {
        (0, _classCallCheck3.default)(this, Undefined);
    }

    (0, _createClass3.default)(Undefined, [{
        key: "isScalar",

        /**
         * Type determinant.
         */
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return undefined;
        }
    }]);
    return Undefined;
}();
Undefined = __decorate([index_1.final, index_2.frozen], Undefined);
exports.Undefined = Undefined;

},{"..":141,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],180:[function(require,module,exports){
"use strict";

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _defineProperty = require("babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _getOwnPropertyDescriptor = require("babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("..");
var index_2 = require("..");
var index_3 = require("./index");
var index_4 = require("./index");
var index_5 = require("./index");
/**
 * Cached scalar.
 */
var WithFallback = function () {
    /**
     * Ctor.
     * @param value Value.
     * @param fallback Fallback value.
     */
    function WithFallback(value, fallback) {
        (0, _classCallCheck3.default)(this, WithFallback);

        this.scalar = new index_5.Ternary(new index_3.IsBlank(value), new index_4.ScalarOf(fallback), new index_4.ScalarOf(value));
    }
    /**
     * Type determinant.
     */


    (0, _createClass3.default)(WithFallback, [{
        key: "isScalar",
        value: function isScalar() {
            return true;
        }
        /**
         * Get the value.
         */

    }, {
        key: "value",
        value: function value() {
            return this.scalar.value();
        }
    }]);
    return WithFallback;
}();
WithFallback = __decorate([index_1.final, index_2.frozen], WithFallback);
exports.WithFallback = WithFallback;

},{"..":141,"./index":181,"babel-runtime/core-js/object/define-property":4,"babel-runtime/core-js/object/get-own-property-descriptor":6,"babel-runtime/helpers/classCallCheck":12,"babel-runtime/helpers/createClass":13,"babel-runtime/helpers/typeof":16}],181:[function(require,module,exports){
"use strict";

function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Index.
 */
__export(require("./And"));
__export(require("./BoolOf"));
__export(require("./Cached"));
__export(require("./Conditioned"));
__export(require("./False"));
__export(require("./HasTrueProperty"));
__export(require("./HasTrueResult"));
__export(require("./IsBlank"));
__export(require("./IsJsFunction"));
__export(require("./IsNotBlank"));
__export(require("./IsNull"));
__export(require("./IsObject"));
__export(require("./IsScalar"));
__export(require("./IsUndefined"));
__export(require("./MapOf"));
__export(require("./Not"));
__export(require("./Null"));
__export(require("./Or"));
__export(require("./Rounded"));
__export(require("./ScalarOf"));
__export(require("./Ternary"));
__export(require("./True"));
__export(require("./Undefined"));
__export(require("./WithFallback"));

},{"./And":157,"./BoolOf":158,"./Cached":159,"./Conditioned":160,"./False":161,"./HasTrueProperty":162,"./HasTrueResult":163,"./IsBlank":164,"./IsJsFunction":165,"./IsNotBlank":166,"./IsNull":167,"./IsObject":168,"./IsScalar":169,"./IsUndefined":170,"./MapOf":171,"./Not":172,"./Null":173,"./Or":174,"./Rounded":175,"./ScalarOf":176,"./Ternary":177,"./True":178,"./Undefined":179,"./WithFallback":180}],182:[function(require,module,exports){
"use strict";

var _seal = require("babel-runtime/core-js/object/seal");

var _seal2 = _interopRequireDefault(_seal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Seal constructor and prototype.
 * @param target Target.
 */
function sealed(target) {
  (0, _seal2.default)(target);
  (0, _seal2.default)(target.prototype);
}
exports.sealed = sealed;

},{"babel-runtime/core-js/object/seal":8}]},{},[125])(125)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvbWFwLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZnJlZXplLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L3NlYWwuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9zeW1ib2wuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vbWFwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZnJlZXplLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L3NlYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbC9pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYS1mdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYW4tb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1mcm9tLWl0ZXJhYmxlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktbWV0aG9kcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NvbGxlY3Rpb24tdG8tanNvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3R4LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZWZpbmVkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZG9tLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1idWcta2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fZW51bS1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19leHBvcnQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2ZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2dsb2JhbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faGFzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19odG1sLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1jYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlcmF0b3JzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19saWJyYXJ5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZHAuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wbi1leHQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1nb3BuLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ29wcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1rZXlzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtcGllLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3JlZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtY29sbGVjdGlvbi1mcm9tLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtY29sbGVjdGlvbi1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXByb3RvLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC1rZXkuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3NoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fc3RyaW5nLWF0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1hYnNvbHV0ZS1pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW50ZWdlci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL190by1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL192YWxpZGF0ZS1jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MtZXh0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL193a3MuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYubWFwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuY3JlYXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnNlYWwuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LnN5bWJvbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLmZyb20uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3Lm1hcC5vZi5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLnRvLWpzb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUtbW9kdWxlLmpzIiwibm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsInNyYy9pbmRleC50cyIsInNyYy9tYWluL0lsbGVnYWxJbmhlcml0YW5jZUVycm9yLnRzIiwic3JjL21haW4vSWxsZWdhbFN0YXRlRXJyb3IudHMiLCJzcmMvbWFpbi9maW5hbC50cyIsInNyYy9tYWluL2Zyb3plbi50cyIsInNyYy9tYWluL2Z1bmN0aW9uL0NhY2hlZC50cyIsInNyYy9tYWluL2Z1bmN0aW9uL0NvbmRpdGlvbmVkLnRzIiwic3JjL21haW4vZnVuY3Rpb24vRnVuY3Rpb25PZi50cyIsInNyYy9tYWluL2Z1bmN0aW9uL0lzRnVuY3Rpb24udHMiLCJzcmMvbWFpbi9mdW5jdGlvbi9Jc1RydWUudHMiLCJzcmMvbWFpbi9mdW5jdGlvbi9OdWxsYXJ5RnVuY3Rpb25PZi50cyIsInNyYy9tYWluL2Z1bmN0aW9uL1NhZmVOYXZpZ2F0aW9uLnRzIiwic3JjL21haW4vZnVuY3Rpb24vVG9Cb29sLnRzIiwic3JjL21haW4vZnVuY3Rpb24vVG9Db25kaXRpb25Db25zZXF1ZW50UGFpci50cyIsInNyYy9tYWluL2Z1bmN0aW9uL1RvVmFsdWUudHMiLCJzcmMvbWFpbi9mdW5jdGlvbi9pbmRleC50cyIsInNyYy9tYWluL2luZGV4LnRzIiwic3JjL21haW4vaXRlcmFibGUvQ29uZGl0aW9ucy50cyIsInNyYy9tYWluL2l0ZXJhYmxlL0VxdWFscy50cyIsInNyYy9tYWluL2l0ZXJhYmxlL0ZpbHRlcmVkLnRzIiwic3JjL21haW4vaXRlcmFibGUvRmlyc3QudHMiLCJzcmMvbWFpbi9pdGVyYWJsZS9MZW5ndGhPZi50cyIsInNyYy9tYWluL2l0ZXJhYmxlL0xpbWl0ZWQudHMiLCJzcmMvbWFpbi9pdGVyYWJsZS9NYXBwZWQudHMiLCJzcmMvbWFpbi9pdGVyYWJsZS9pbmRleC50cyIsInNyYy9tYWluL3JhbmRvbS9QYXJrTWlsbGVyUmFuZG9tLnRzIiwic3JjL21haW4vcmFuZG9tL1JhbmRvbU9mLnRzIiwic3JjL21haW4vcmFuZG9tL1JhbmRvbWl6ZWRCb29sLnRzIiwic3JjL21haW4vcmFuZG9tL1JhbmRvbWl6ZWRGbG9hdC50cyIsInNyYy9tYWluL3JhbmRvbS9SYW5kb21pemVkSW50LnRzIiwic3JjL21haW4vcmFuZG9tL1JhbmRvbWl6ZWRQZXJjZW50YWdlLnRzIiwic3JjL21haW4vcmFuZG9tL2luZGV4LnRzIiwic3JjL21haW4vc2NhbGFyL0FuZC50cyIsInNyYy9tYWluL3NjYWxhci9Cb29sT2YudHMiLCJzcmMvbWFpbi9zY2FsYXIvQ2FjaGVkLnRzIiwic3JjL21haW4vc2NhbGFyL0NvbmRpdGlvbmVkLnRzIiwic3JjL21haW4vc2NhbGFyL0ZhbHNlLnRzIiwic3JjL21haW4vc2NhbGFyL0hhc1RydWVQcm9wZXJ0eS50cyIsInNyYy9tYWluL3NjYWxhci9IYXNUcnVlUmVzdWx0LnRzIiwic3JjL21haW4vc2NhbGFyL0lzQmxhbmsudHMiLCJzcmMvbWFpbi9zY2FsYXIvSXNKc0Z1bmN0aW9uLnRzIiwic3JjL21haW4vc2NhbGFyL0lzTm90QmxhbmsudHMiLCJzcmMvbWFpbi9zY2FsYXIvSXNOdWxsLnRzIiwic3JjL21haW4vc2NhbGFyL0lzT2JqZWN0LnRzIiwic3JjL21haW4vc2NhbGFyL0lzU2NhbGFyLnRzIiwic3JjL21haW4vc2NhbGFyL0lzVW5kZWZpbmVkLnRzIiwic3JjL21haW4vc2NhbGFyL01hcE9mLnRzIiwic3JjL21haW4vc2NhbGFyL05vdC50cyIsInNyYy9tYWluL3NjYWxhci9OdWxsLnRzIiwic3JjL21haW4vc2NhbGFyL09yLnRzIiwic3JjL21haW4vc2NhbGFyL1JvdW5kZWQudHMiLCJzcmMvbWFpbi9zY2FsYXIvU2NhbGFyT2YudHMiLCJzcmMvbWFpbi9zY2FsYXIvVGVybmFyeS50cyIsInNyYy9tYWluL3NjYWxhci9UcnVlLnRzIiwic3JjL21haW4vc2NhbGFyL1VuZGVmaW5lZC50cyIsInNyYy9tYWluL3NjYWxhci9XaXRoRmFsbGJhY2sudHMiLCJzcmMvbWFpbi9zY2FsYXIvaW5kZXgudHMiLCJzcmMvbWFpbi9zZWFsZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7O0FDREE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFPQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBRUQsQUFFRyxBQUNJLEFBQUs7Ozs7Ozs7QUFDUixBQUFNLG1CQUFDLEFBQUksS0FBQyxBQUFNLE9BQUMsQUFBSyxBQUFFLEFBQUMsQUFDL0I7QUFBQyxBQUNKOzs7O0FBaENZLEFBQVksMkJBRnhCLFFBQUssT0FDTCxRQUFNLFNBQ00sQUFBWSxBQWdDeEI7QUFoQ1ksdUJBQVk7Ozs7Ozs7Ozs7O0FDYnpCLEFBRUc7OztBQUNILGlCQUFzQjtBQUV0QixpQkFBeUI7QUFDekIsaUJBQXlCO0FBR3pCLGlCQUE4QjtBQUM5QixpQkFBd0I7QUFDeEIsaUJBQWtDO0FBQ2xDLGlCQUFnQztBQUNoQyxpQkFBMEI7QUFDMUIsaUJBQStCO0FBQy9CLGlCQUE2QjtBQUM3QixpQkFBeUI7QUFDekIsaUJBQTJCO0FBQzNCLGlCQUEyQjtBQUMzQixpQkFBOEI7QUFDOUIsaUJBQXdCO0FBQ3hCLGlCQUFzQjtBQUN0QixpQkFBdUI7QUFDdkIsaUJBQXFCO0FBQ3JCLGlCQUEwQjtBQUcxQixpQkFBMkI7QUFDM0IsaUJBQTBCO0FBQzFCLGlCQUF1QjtBQUN2QixpQkFBNEI7QUFDNUIsaUJBQStCOzs7Ozs7Ozs7Ozs7QUMvQi9CLEFBR0c7Ozs7QUFDSCxnQkFBdUIsQUFBZ0I7QUFDbkMsQUFBTSxBQUFDLEFBQUksc0JBQUMsQUFBTSxBQUFDLEFBQUM7QUFDcEIsQUFBTSxBQUFDLEFBQUksc0JBQUMsQUFBTSxPQUFDLEFBQVMsQUFBQyxBQUFDLEFBQ2xDO0FBQUM7QUFIRCxpQkFHQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2ZyZWV6ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZWFsXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9zZXQtcHJvdG90eXBlLW9mXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3N5bWJvbFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zeW1ib2wvaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3Qvc2V0LXByb3RvdHlwZS1vZlwiKTtcblxudmFyIF9zZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zZXRQcm90b3R5cGVPZik7XG5cbnZhciBfY3JlYXRlID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2NyZWF0ZVwiKTtcblxudmFyIF9jcmVhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlKTtcblxudmFyIF90eXBlb2YyID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgX3R5cGVvZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90eXBlb2YyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArICh0eXBlb2Ygc3VwZXJDbGFzcyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkoc3VwZXJDbGFzcykpKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9ICgwLCBfY3JlYXRlMi5kZWZhdWx0KShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mMi5kZWZhdWx0ID8gKDAsIF9zZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mMiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIF90eXBlb2YzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHlwZW9mMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICgodHlwZW9mIGNhbGwgPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogKDAsIF90eXBlb2YzLmRlZmF1bHQpKGNhbGwpKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9pdGVyYXRvciA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3N5bWJvbC9pdGVyYXRvclwiKTtcblxudmFyIF9pdGVyYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pdGVyYXRvcik7XG5cbnZhciBfc3ltYm9sID0gcmVxdWlyZShcIi4uL2NvcmUtanMvc3ltYm9sXCIpO1xuXG52YXIgX3N5bWJvbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zeW1ib2wpO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBfc3ltYm9sMi5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIF9pdGVyYXRvcjIuZGVmYXVsdCA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIF9zeW1ib2wyLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IF9zeW1ib2wyLmRlZmF1bHQgJiYgb2JqICE9PSBfc3ltYm9sMi5kZWZhdWx0LnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIF90eXBlb2YoX2l0ZXJhdG9yMi5kZWZhdWx0KSA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgX3N5bWJvbDIuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gX3N5bWJvbDIuZGVmYXVsdCAmJiBvYmogIT09IF9zeW1ib2wyLmRlZmF1bHQucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmogPT09IFwidW5kZWZpbmVkXCIgPyBcInVuZGVmaW5lZFwiIDogX3R5cGVvZihvYmopO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpO1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC5vZicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5jcmVhdGUnKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpIHtcbiAgcmV0dXJuICRPYmplY3QuY3JlYXRlKFAsIEQpO1xufTtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnZhciAkT2JqZWN0ID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYykge1xuICByZXR1cm4gJE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKTtcbn07XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3QuZnJlZXplO1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSkge1xuICByZXR1cm4gJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSk7XG59O1xuIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2VhbDtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Quc2V0UHJvdG90eXBlT2Y7XG4iLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM3LnN5bWJvbC5hc3luYy1pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczcuc3ltYm9sLm9ic2VydmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLlN5bWJvbDtcbiIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX3drcy1leHQnKS5mKCdpdGVyYXRvcicpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyLCBJVEVSQVRPUikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvck9mKGl0ZXIsIGZhbHNlLCByZXN1bHQucHVzaCwgcmVzdWx0LCBJVEVSQVRPUik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgYXNjID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRZUEUsICRjcmVhdGUpIHtcbiAgdmFyIElTX01BUCA9IFRZUEUgPT0gMTtcbiAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gIHZhciBJU19FVkVSWSA9IFRZUEUgPT0gNDtcbiAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICB2YXIgY3JlYXRlID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgc2VsZiA9IElPYmplY3QoTyk7XG4gICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuICAgIHZhciB2YWwsIHJlcztcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmIChUWVBFKSB7XG4gICAgICAgIGlmIChJU19NQVApIHJlc3VsdFtpbmRleF0gPSByZXM7ICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYgKHJlcykgc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmIChJU19FVkVSWSkgcmV0dXJuIGZhbHNlOyAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL19pcy1hcnJheScpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWwpKSB7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xuIiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwsIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICB2YXIgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgIGlmIChlbnRyeS5rID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKSBlbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubjtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KSB0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKSB7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMsIE5BTUUpW1NJWkVdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICB2YXIgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBOQU1FLCBJU19NQVApIHtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICB0aGlzLl90ID0gdmFsaWRhdGUoaXRlcmF0ZWQsIE5BTUUpOyAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7ICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgdmFyIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChOQU1FKSB7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKSB7XG4gICAgaWYgKGNsYXNzb2YodGhpcykgIT0gTkFNRSkgdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICByZXR1cm4gZnJvbSh0aGlzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG1ldGEgPSByZXF1aXJlKCcuL19tZXRhJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBlYWNoID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspIHtcbiAgdmFyIEJhc2UgPSBnbG9iYWxbTkFNRV07XG4gIHZhciBDID0gQmFzZTtcbiAgdmFyIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJztcbiAgdmFyIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZTtcbiAgdmFyIE8gPSB7fTtcbiAgaWYgKCFERVNDUklQVE9SUyB8fCB0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpIHtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRhcmdldCwgaXRlcmFibGUpIHtcbiAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FLCAnX2MnKTtcbiAgICAgIHRhcmdldC5fYyA9IG5ldyBCYXNlKCk7XG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0YXJnZXRbQURERVJdLCB0YXJnZXQpO1xuICAgIH0pO1xuICAgIGVhY2goJ2FkZCxjbGVhcixkZWxldGUsZm9yRWFjaCxnZXQsaGFzLHNldCxrZXlzLHZhbHVlcyxlbnRyaWVzLHRvSlNPTicuc3BsaXQoJywnKSwgZnVuY3Rpb24gKEtFWSkge1xuICAgICAgdmFyIElTX0FEREVSID0gS0VZID09ICdhZGQnIHx8IEtFWSA9PSAnc2V0JztcbiAgICAgIGlmIChLRVkgaW4gcHJvdG8gJiYgIShJU19XRUFLICYmIEtFWSA9PSAnY2xlYXInKSkgaGlkZShDLnByb3RvdHlwZSwgS0VZLCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsIEtFWSk7XG4gICAgICAgIGlmICghSVNfQURERVIgJiYgSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkpIHJldHVybiBLRVkgPT0gJ2dldCcgPyB1bmRlZmluZWQgOiBmYWxzZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2NbS0VZXShhID09PSAwID8gMCA6IGEsIGIpO1xuICAgICAgICByZXR1cm4gSVNfQURERVIgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgSVNfV0VBSyB8fCBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Muc2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiwgTyk7XG5cbiAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4xJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIGdPUFMgPSByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpO1xudmFyIHBJRSA9IHJlcXVpcmUoJy4vX29iamVjdC1waWUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciByZXN1bHQgPSBnZXRLZXlzKGl0KTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIGlmIChnZXRTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KTtcbiAgICB2YXIgaXNFbnVtID0gcElFLmY7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKHN5bWJvbHMubGVuZ3RoID4gaSkgaWYgKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKSByZXN1bHQucHVzaChrZXkpO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIElTX1dSQVAgPSB0eXBlICYgJGV4cG9ydC5XO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV07XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIga2V5LCBvd24sIG91dDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZiAob3duICYmIGtleSBpbiBleHBvcnRzKSBjb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uIChDKSB7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgQykge1xuICAgICAgICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEMoKTtcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYgKElTX1BST1RPKSB7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYgKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0pIGhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZykge1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSkgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlO1xuIiwidmFyIE1FVEEgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgc2V0RGVzYyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBnT1BEIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSU9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGdPUEQoTywgUCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlRGVzYyghcElFLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBnT1BOID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mO1xudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ09QTihpdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgcmV0dXJuIHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nID8gZ2V0V2luZG93TmFtZXMoaXQpIDogZ09QTih0b0lPYmplY3QoaXQpKTtcbn07XG4iLCIvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJykuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vX2ZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVksIGV4ZWMpIHtcbiAgdmFyIGZuID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldO1xuICB2YXIgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24gKCkgeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tL1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09MTEVDVElPTikge1xuICAkZXhwb3J0KCRleHBvcnQuUywgQ09MTEVDVElPTiwgeyBmcm9tOiBmdW5jdGlvbiBmcm9tKHNvdXJjZSAvKiAsIG1hcEZuLCB0aGlzQXJnICovKSB7XG4gICAgdmFyIG1hcEZuID0gYXJndW1lbnRzWzFdO1xuICAgIHZhciBtYXBwaW5nLCBBLCBuLCBjYjtcbiAgICBhRnVuY3Rpb24odGhpcyk7XG4gICAgbWFwcGluZyA9IG1hcEZuICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG1hcHBpbmcpIGFGdW5jdGlvbihtYXBGbik7XG4gICAgaWYgKHNvdXJjZSA9PSB1bmRlZmluZWQpIHJldHVybiBuZXcgdGhpcygpO1xuICAgIEEgPSBbXTtcbiAgICBpZiAobWFwcGluZykge1xuICAgICAgbiA9IDA7XG4gICAgICBjYiA9IGN0eChtYXBGbiwgYXJndW1lbnRzWzJdLCAyKTtcbiAgICAgIGZvck9mKHNvdXJjZSwgZmFsc2UsIGZ1bmN0aW9uIChuZXh0SXRlbSkge1xuICAgICAgICBBLnB1c2goY2IobmV4dEl0ZW0sIG4rKykpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvck9mKHNvdXJjZSwgZmFsc2UsIEEucHVzaCwgQSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgdGhpcyhBKTtcbiAgfSB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDT0xMRUNUSU9OKSB7XG4gICRleHBvcnQoJGV4cG9ydC5TLCBDT0xMRUNUSU9OLCB7IG9mOiBmdW5jdGlvbiBvZigpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgQSA9IEFycmF5KGxlbmd0aCk7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSBBW2xlbmd0aF0gPSBhcmd1bWVudHNbbGVuZ3RoXTtcbiAgICByZXR1cm4gbmV3IHRoaXMoQSk7XG4gIH0gfSk7XG59O1xuIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChPLCBwcm90bykge1xuICBhbk9iamVjdChPKTtcbiAgaWYgKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpIHRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uICh0ZXN0LCBidWdneSwgc2V0KSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuL19jdHgnKShGdW5jdGlvbi5jYWxsLCByZXF1aXJlKCcuL19vYmplY3QtZ29wZCcpLmYoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaCAoZSkgeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmIChidWdneSkgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRZUEUpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgfHwgaXQuX3QgIT09IFRZUEUpIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIHdrc0V4dCA9IHJlcXVpcmUoJy4vX3drcy1leHQnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciAkU3ltYm9sID0gY29yZS5TeW1ib2wgfHwgKGNvcmUuU3ltYm9sID0gTElCUkFSWSA/IHt9IDogZ2xvYmFsLlN5bWJvbCB8fCB7fSk7XG4gIGlmIChuYW1lLmNoYXJBdCgwKSAhPSAnXycgJiYgIShuYW1lIGluICRTeW1ib2wpKSBkZWZpbmVQcm9wZXJ0eSgkU3ltYm9sLCBuYW1lLCB7IHZhbHVlOiB3a3NFeHQuZihuYW1lKSB9KTtcbn07XG4iLCJleHBvcnRzLmYgPSByZXF1aXJlKCcuL193a3MnKTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0ID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xudmFyIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9fdmFsaWRhdGUtY29sbGVjdGlvbicpO1xudmFyIE1BUCA9ICdNYXAnO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKShNQVAsIGZ1bmN0aW9uIChnZXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpIHsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih2YWxpZGF0ZSh0aGlzLCBNQVApLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHsgY3JlYXRlOiByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJykgfSk7XG4iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuIiwiLy8gMTkuMS4yLjUgT2JqZWN0LmZyZWV6ZShPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKS5vbkZyZWV6ZTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdmcmVlemUnLCBmdW5jdGlvbiAoJGZyZWV6ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gZnJlZXplKGl0KSB7XG4gICAgcmV0dXJuICRmcmVlemUgJiYgaXNPYmplY3QoaXQpID8gJGZyZWV6ZShtZXRhKGl0KSkgOiBpdDtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKS5mO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciAkZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG5cbnJlcXVpcmUoJy4vX29iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCkge1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuIiwiLy8gMTkuMS4yLjE3IE9iamVjdC5zZWFsKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBtZXRhID0gcmVxdWlyZSgnLi9fbWV0YScpLm9uRnJlZXplO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ3NlYWwnLCBmdW5jdGlvbiAoJHNlYWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNlYWwoaXQpIHtcbiAgICByZXR1cm4gJHNlYWwgJiYgaXNPYmplY3QoaXQpID8gJHNlYWwobWV0YShpdCkpIDogaXQ7XG4gIH07XG59KTtcbiIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7IHNldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuL19zZXQtcHJvdG8nKS5zZXQgfSk7XG4iLCIiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBNRVRBID0gcmVxdWlyZSgnLi9fbWV0YScpLktFWTtcbnZhciAkZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciB3a3NFeHQgPSByZXF1aXJlKCcuL193a3MtZXh0Jyk7XG52YXIgd2tzRGVmaW5lID0gcmVxdWlyZSgnLi9fd2tzLWRlZmluZScpO1xudmFyIGVudW1LZXlzID0gcmVxdWlyZSgnLi9fZW51bS1rZXlzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzLWFycmF5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIF9jcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZ09QTkV4dCA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BuLWV4dCcpO1xudmFyICRHT1BEID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcGQnKTtcbnZhciAkRFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgcmVxdWlyZSgnLi9fb2JqZWN0LWdvcG4nKS5mID0gZ09QTkV4dC5mID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gIHJlcXVpcmUoJy4vX29iamVjdC1waWUnKS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICByZXF1aXJlKCcuL19vYmplY3QtZ29wcycpLmYgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi9fbGlicmFyeScpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIGlmIChpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgdmFyIGFyZ3MgPSBbaXRdO1xuICAgIHZhciBpID0gMTtcbiAgICB2YXIgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICAgIGlmICh0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgaWYgKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpIHJlcGxhY2VyID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgIGlmICgkcmVwbGFjZXIpIHZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgICBpZiAoIWlzU3ltYm9sKHZhbHVlKSkgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICAgIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbiAgfVxufSk7XG5cbi8vIDE5LjQuMy40IFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClcbiRTeW1ib2xbUFJPVE9UWVBFXVtUT19QUklNSVRJVkVdIHx8IHJlcXVpcmUoJy4vX2hpZGUnKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcbiIsIi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS8jc2VjLW1hcC5mcm9tXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1mcm9tJykoJ01hcCcpO1xuIiwiLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtbWFwLm9mXG5yZXF1aXJlKCcuL19zZXQtY29sbGVjdGlvbi1vZicpKCdNYXAnKTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywgeyB0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKSB9KTtcbiIsInJlcXVpcmUoJy4vX3drcy1kZWZpbmUnKSgnYXN5bmNJdGVyYXRvcicpO1xuIiwicmVxdWlyZSgnLi9fd2tzLWRlZmluZScpKCdvYnNlcnZhYmxlJyk7XG4iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG52YXIgRE9NSXRlcmFibGVzID0gKCdDU1NSdWxlTGlzdCxDU1NTdHlsZURlY2xhcmF0aW9uLENTU1ZhbHVlTGlzdCxDbGllbnRSZWN0TGlzdCxET01SZWN0TGlzdCxET01TdHJpbmdMaXN0LCcgK1xuICAnRE9NVG9rZW5MaXN0LERhdGFUcmFuc2Zlckl0ZW1MaXN0LEZpbGVMaXN0LEhUTUxBbGxDb2xsZWN0aW9uLEhUTUxDb2xsZWN0aW9uLEhUTUxGb3JtRWxlbWVudCxIVE1MU2VsZWN0RWxlbWVudCwnICtcbiAgJ01lZGlhTGlzdCxNaW1lVHlwZUFycmF5LE5hbWVkTm9kZU1hcCxOb2RlTGlzdCxQYWludFJlcXVlc3RMaXN0LFBsdWdpbixQbHVnaW5BcnJheSxTVkdMZW5ndGhMaXN0LFNWR051bWJlckxpc3QsJyArXG4gICdTVkdQYXRoU2VnTGlzdCxTVkdQb2ludExpc3QsU1ZHU3RyaW5nTGlzdCxTVkdUcmFuc2Zvcm1MaXN0LFNvdXJjZUJ1ZmZlckxpc3QsU3R5bGVTaGVldExpc3QsVGV4dFRyYWNrQ3VlTGlzdCwnICtcbiAgJ1RleHRUcmFja0xpc3QsVG91Y2hMaXN0Jykuc3BsaXQoJywnKTtcblxuZm9yICh2YXIgaSA9IDA7IGkgPCBET01JdGVyYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBET01JdGVyYWJsZXNbaV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZiAocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufVxuIiwiLy8gVGhpcyBtZXRob2Qgb2Ygb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0IG5lZWRzIHRvIGJlXG4vLyBrZXB0IGlkZW50aWNhbCB0byB0aGUgd2F5IGl0IGlzIG9idGFpbmVkIGluIHJ1bnRpbWUuanNcbnZhciBnID0gKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcyB9KSgpIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcblxuLy8gVXNlIGBnZXRPd25Qcm9wZXJ0eU5hbWVzYCBiZWNhdXNlIG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCBjYWxsaW5nXG4vLyBgaGFzT3duUHJvcGVydHlgIG9uIHRoZSBnbG9iYWwgYHNlbGZgIG9iamVjdCBpbiBhIHdvcmtlci4gU2VlICMxODMuXG52YXIgaGFkUnVudGltZSA9IGcucmVnZW5lcmF0b3JSdW50aW1lICYmXG4gIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGcpLmluZGV4T2YoXCJyZWdlbmVyYXRvclJ1bnRpbWVcIikgPj0gMDtcblxuLy8gU2F2ZSB0aGUgb2xkIHJlZ2VuZXJhdG9yUnVudGltZSBpbiBjYXNlIGl0IG5lZWRzIHRvIGJlIHJlc3RvcmVkIGxhdGVyLlxudmFyIG9sZFJ1bnRpbWUgPSBoYWRSdW50aW1lICYmIGcucmVnZW5lcmF0b3JSdW50aW1lO1xuXG4vLyBGb3JjZSByZWV2YWx1dGF0aW9uIG9mIHJ1bnRpbWUuanMuXG5nLnJlZ2VuZXJhdG9yUnVudGltZSA9IHVuZGVmaW5lZDtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9ydW50aW1lXCIpO1xuXG5pZiAoaGFkUnVudGltZSkge1xuICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBydW50aW1lLlxuICBnLnJlZ2VuZXJhdG9yUnVudGltZSA9IG9sZFJ1bnRpbWU7XG59IGVsc2Uge1xuICAvLyBSZW1vdmUgdGhlIGdsb2JhbCBwcm9wZXJ0eSBhZGRlZCBieSBydW50aW1lLmpzLlxuICB0cnkge1xuICAgIGRlbGV0ZSBnLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgfSBjYXRjaChlKSB7XG4gICAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIHJ1bnRpbWUuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yLnJldHVybikge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gSW4gc2xvcHB5IG1vZGUsIHVuYm91bmQgYHRoaXNgIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCwgZmFsbGJhY2sgdG9cbiAgLy8gRnVuY3Rpb24gY29uc3RydWN0b3IgaWYgd2UncmUgaW4gZ2xvYmFsIHN0cmljdCBtb2RlLiBUaGF0IGlzIHNhZGx5IGEgZm9ybVxuICAvLyBvZiBpbmRpcmVjdCBldmFsIHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5LlxuICAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzIH0pKCkgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpXG4pO1xuIiwiLyoqXHJcbiAqIE1haW4uXHJcbiAqL1xyXG5pbXBvcnQgKiBhcyBmdW5jIGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0ICogYXMgaXRlcmFibGUgZnJvbSAnQG1haW4vaXRlcmFibGUvaW5kZXgnO1xyXG5pbXBvcnQgKiBhcyByYW5kb20gZnJvbSAnQG1haW4vcmFuZG9tL2luZGV4JztcclxuaW1wb3J0ICogYXMgc2NhbGFyIGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG5leHBvcnQgKiBmcm9tICdAbWFpbi9pbmRleCc7XHJcblxyXG5leHBvcnQge1xyXG4gICAgZnVuYyxcclxuICAgIGl0ZXJhYmxlLFxyXG4gICAgcmFuZG9tLFxyXG4gICAgc2NhbGFyXHJcbn07XHJcbiIsIi8qKlxyXG4gKiBJbGxlZ2FsIGluaGVyaXRhbmNlIGV4Y2VwdGlvbi5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJbGxlZ2FsSW5oZXJpdGFuY2VFcnJvciBleHRlbmRzIEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogSWxsZWdhbCBzdGF0ZSBleGNlcHRpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSWxsZWdhbFN0YXRlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSWxsZWdhbEluaGVyaXRhbmNlRXJyb3IgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcblxyXG4vKipcclxuICogUHJldmVudCBpbnN0YW5jZXMgZnJvbSBpbmhlcml0ZWQgY2xhc3Nlcy5cclxuICogQHBhcmFtIHRhcmdldCBDbGFzcy5cclxuICovXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmFsPFQgZXh0ZW5kcyB7IG5ldyAoLi4uYXJnczogYW55W10pOiBvYmplY3QgfT4odGFyZ2V0OiBUKTogVCB7XHJcbiAgICByZXR1cm4gY2xhc3MgRmluYWwgZXh0ZW5kcyB0YXJnZXQge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgICAgICBpZiAobmV3LnRhcmdldCAhPT0gRmluYWwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbGxlZ2FsSW5oZXJpdGFuY2VFcnJvcignQ2Fubm90IGluaGVyaXQgZnJvbSBmaW5hbCBjbGFzcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIiwiLyoqXHJcbiAqIEZyZWV6ZSBjb25zdHJ1Y3RvciBhbmQgcHJvdG90eXBlLlxyXG4gKiBAcGFyYW0gdGFyZ2V0IFRhcmdldC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmcm96ZW4odGFyZ2V0OiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgT2JqZWN0LmZyZWV6ZSh0YXJnZXQpO1xyXG4gICAgT2JqZWN0LmZyZWV6ZSh0YXJnZXQucHJvdG90eXBlKTtcclxufVxyXG4iLCJpbXBvcnQgeyBGdW5jdGlvbiB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgRnVuY3Rpb25MaWtlIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBGdW5jdGlvbk9mIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHRoYXQgY2FjaGVzIHJlc3VsdHMuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgQ2FjaGVkPFgsIFk+IGltcGxlbWVudHMgRnVuY3Rpb248WCwgWT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBjYWxsYmFjay5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmdW5jOiBGdW5jdGlvbjxYLCBZPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlc3VsdHMgbWFwLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhY2hlOiBNYXA8WCwgWT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gY2FsbGJhY2suXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGZ1bmM6IEZ1bmN0aW9uTGlrZTxYLCBZPikge1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IG5ldyBGdW5jdGlvbk9mKGZ1bmMpO1xyXG4gICAgICAgIHRoaXMuY2FjaGUgPSBuZXcgTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNGdW5jdGlvbigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5IHRoZSBmdW5jdGlvbiB0byB0aGUgaW5wdXQuXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgSW5wdXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhcHBseShpbnB1dDogWCk6IFkge1xyXG4gICAgICAgIGlmICghdGhpcy5jYWNoZS5oYXMoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FjaGUuc2V0KGlucHV0LCB0aGlzLmZ1bmMuYXBwbHkoaW5wdXQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiA8WT50aGlzLmNhY2hlLmdldChpbnB1dCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uTGlrZSB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgRnVuY3Rpb25PZiB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIGNvbmRpdGlvbmFsbHkuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uZWQ8WD4gaW1wbGVtZW50cyBGdW5jdGlvbjxYLCB2b2lkPiB7XHJcbiAgICAvKipcclxuICAgICAqIENvbmRpdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25kaXRpb246IEZ1bmN0aW9uPFgsIGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZnVuYzogRnVuY3Rpb248WCwgdm9pZD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIGNvbmRpdGlvbiBDb25kaXRpb24uXHJcbiAgICAgKiBAcGFyYW0gZnVuYyBGdW5jdGlvbi5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBGdW5jdGlvbkxpa2U8WCwgYm9vbGVhbj4sIGZ1bmM6IEZ1bmN0aW9uTGlrZTxYLCB2b2lkPikge1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gbmV3IEZ1bmN0aW9uT2YoY29uZGl0aW9uKTtcclxuICAgICAgICB0aGlzLmZ1bmMgPSBuZXcgRnVuY3Rpb25PZihmdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0Z1bmN0aW9uKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgdGhlIGZ1bmN0aW9uIHRvIHRoZSBpbnB1dC5cclxuICAgICAqIEBwYXJhbSBpbnB1dCBJbnB1dC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFwcGx5KGlucHV0OiBYKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uLmFwcGx5KGlucHV0KSkge1xyXG4gICAgICAgICAgICB0aGlzLmZ1bmMuYXBwbHkoaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBGdW5jdGlvbiB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgRnVuY3Rpb25MaWtlIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBDYWNoZWQgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIG9mIHNldmVyYWwgcG9zc2libGUgdHlwZXMuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25PZjxYLCBZPiBpbXBsZW1lbnRzIEZ1bmN0aW9uPFgsIFk+IHtcclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gY2FsbGJhY2suXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZnVuYzogU2NhbGFyPChpbnB1dDogWCkgPT4gWT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24gY2FsbGJhY2suXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGZ1bmM6IEZ1bmN0aW9uTGlrZTxYLCBZPikge1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IG5ldyBDYWNoZWQoKCk6ICgoaW5wdXQ6IFgpID0+IFkpID0+XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJyA/XHJcbiAgICAgICAgICAgICAgICBmdW5jIDpcclxuICAgICAgICAgICAgICAgIChpbnB1dDogWCk6IFkgPT4gZnVuYy5hcHBseShpbnB1dClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzRnVuY3Rpb24oKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseSB0aGUgZnVuY3Rpb24gdG8gdGhlIGlucHV0LlxyXG4gICAgICogQHBhcmFtIGlucHV0IElucHV0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXBwbHkoaW5wdXQ6IFgpOiBZIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mdW5jLnZhbHVlKCkoaW5wdXQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IEhhc1RydWVSZXN1bHQgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgaWYgdmFyaWFibGUgaXMgb2YgdHlwZSB7QGxpbmsgRnVuY3Rpb259LlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIElzRnVuY3Rpb248VD4gaW1wbGVtZW50cyBTY2FsYXI8Ym9vbGVhbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25kaXRpb24uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaXNGdW5jdGlvbjogU2NhbGFyPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSBtYXliZUZ1bmMgVmFyaWFibGUgdG8gY2hlY2suXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1heWJlRnVuYzogVCkge1xyXG4gICAgICAgIHRoaXMuaXNGdW5jdGlvbiA9IG5ldyBIYXNUcnVlUmVzdWx0KG1heWJlRnVuYywgJ2lzRnVuY3Rpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0Z1bmN0aW9uLnZhbHVlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IEJvb2xMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgQm9vbE9mIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBGdW5jdGlvbiB0aGF0IGNhY2hlcyByZXN1bHRzLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIElzVHJ1ZTxUPiBpbXBsZW1lbnRzIEZ1bmN0aW9uPEJvb2xMaWtlPFQ+LCBib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0Z1bmN0aW9uKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgdGhlIGZ1bmN0aW9uIHRvIHRoZSBpbnB1dC5cclxuICAgICAqIEBwYXJhbSBpbnB1dCBJbnB1dC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFwcGx5KGlucHV0OiBCb29sTGlrZTxUPik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgQm9vbE9mKGlucHV0KS52YWx1ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBGdW5jdGlvbk9mIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBOdWxsYXJ5RnVuY3Rpb24gfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gd2l0aG91dCBhcmd1bWVudHMuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgTnVsbGFyeUZ1bmN0aW9uT2Y8WT4gaW1wbGVtZW50cyBOdWxsYXJ5RnVuY3Rpb248WT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBjYWxsYmFjay5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmdW5jOiBGdW5jdGlvbjx1bmRlZmluZWQsIFk+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uIGNhbGxiYWNrLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihmdW5jOiAoKSA9PiBZKSB7XHJcbiAgICAgICAgdGhpcy5mdW5jID0gbmV3IEZ1bmN0aW9uT2Y8dW5kZWZpbmVkLCBZPihmdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0Z1bmN0aW9uKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgdGhlIGZ1bmN0aW9uIHRvIHRoZSBpbnB1dC5cclxuICAgICAqIEBwYXJhbSBpbnB1dCBJbnB1dC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFwcGx5KGlucHV0PzogdW5kZWZpbmVkKTogWSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVuYy5hcHBseShpbnB1dCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29uZGl0aW9uZWQgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBGdW5jdGlvbkxpa2UgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IElzTm90QmxhbmsgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIEZ1bmN0aW9uIHRoYXQgZXhlY3V0ZXMgd2hlbiBpbnB1dCBpcyBub3QgbnVsbCBvciB1bmRlZmluZWQuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgU2FmZU5hdmlnYXRpb248WD4gaW1wbGVtZW50cyBGdW5jdGlvbjxYLCB2b2lkPiB7XHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZ1bmM6IEZ1bmN0aW9uPFgsIHZvaWQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihmdW5jOiBGdW5jdGlvbkxpa2U8WCwgdm9pZD4pIHtcclxuICAgICAgICB0aGlzLmZ1bmMgPSBuZXcgQ29uZGl0aW9uZWQoXHJcbiAgICAgICAgICAgIChpbnB1dDogWCk6IGJvb2xlYW4gPT4gbmV3IElzTm90QmxhbmsoaW5wdXQpLnZhbHVlKCksXHJcbiAgICAgICAgICAgIGZ1bmNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzRnVuY3Rpb24oKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseSB0aGUgZnVuY3Rpb24gdG8gdGhlIGlucHV0LlxyXG4gICAgICogQHBhcmFtIGlucHV0IElucHV0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXBwbHkoaW5wdXQ6IFgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZ1bmMuYXBwbHkoaW5wdXQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBGdW5jdGlvbkxpa2UgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uT2YgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IFRvVmFsdWUgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IEJvb2xMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgQ29uZGl0aW9uQ29uc2VxdWVudExpa2VQYWlyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyTGlrZSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogQ29udmVydHMgYm9vbGVhbi1saWtlIHR5cGVzIHRvIGJvb2xlYW4uXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgVG9Cb29sPFQ+IGltcGxlbWVudHMgRnVuY3Rpb248Qm9vbExpa2U8VD4sIGJvb2xlYW4+IHtcclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gdG8gY29udmVydCBzY2FsYXItbGlrZSBib29sZWFucyB0byBib29sZWFuIHByaW1pdGl2ZXMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdG9WYWx1ZTogRnVuY3Rpb248U2NhbGFyTGlrZTxib29sZWFuPiwgYm9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIHRvVmFsdWUgRnVuY3Rpb24gdG8gY29udmVydCBzY2FsYXItbGlrZSBib29sZWFucyB0byBib29sZWFuIHByaW1pdGl2ZXMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHRvVmFsdWU6IEZ1bmN0aW9uTGlrZTxTY2FsYXJMaWtlPGJvb2xlYW4+LCBib29sZWFuPiA9IG5ldyBUb1ZhbHVlKCkpIHtcclxuICAgICAgICB0aGlzLnRvVmFsdWUgPSBuZXcgRnVuY3Rpb25PZih0b1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc0Z1bmN0aW9uKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgdGhlIGZ1bmN0aW9uIHRvIHRoZSBpbnB1dC5cclxuICAgICAqIEBwYXJhbSBpbnB1dCBJbnB1dC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGFwcGx5KGlucHV0OiBCb29sTGlrZTxUPik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGlzQ29uZGl0aW9uQ29uc2VxdWVudExpa2VQYWlyOiBib29sZWFuID0gKEFycmF5LmlzQXJyYXkoaW5wdXQpICYmIGlucHV0Lmxlbmd0aCA9PT0gMik7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvVmFsdWUuYXBwbHkoXHJcbiAgICAgICAgICAgIGlzQ29uZGl0aW9uQ29uc2VxdWVudExpa2VQYWlyID9cclxuICAgICAgICAgICAgKDxDb25kaXRpb25Db25zZXF1ZW50TGlrZVBhaXI8VD4+aW5wdXQpWzBdIDpcclxuICAgICAgICAgICAgPFNjYWxhckxpa2U8Ym9vbGVhbj4+aW5wdXRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBDb25kaXRpb25Db25zZXF1ZW50TGlrZVBhaXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBDb25kaXRpb25Db25zZXF1ZW50UGFpciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhck9mIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyB7QGxpbmsgQ29uZGl0aW9uQ29uc2VxdWVudExpa2VQYWlyfSB0byB7QGxpbmsgVG9Db25kaXRpb25Db25zZXF1ZW50UGFpcn0uXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgVG9Db25kaXRpb25Db25zZXF1ZW50UGFpcjxUPiBpbXBsZW1lbnRzIEZ1bmN0aW9uPENvbmRpdGlvbkNvbnNlcXVlbnRMaWtlUGFpcjxUPiwgQ29uZGl0aW9uQ29uc2VxdWVudFBhaXI8VD4+IHtcclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzRnVuY3Rpb24oKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBcHBseSB0aGUgZnVuY3Rpb24gdG8gdGhlIGlucHV0LlxyXG4gICAgICogQHBhcmFtIGlucHV0IElucHV0LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXBwbHkoaW5wdXQ6IENvbmRpdGlvbkNvbnNlcXVlbnRMaWtlUGFpcjxUPik6IENvbmRpdGlvbkNvbnNlcXVlbnRQYWlyPFQ+IHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBuZXcgU2NhbGFyT2YoaW5wdXRbMF0pLFxyXG4gICAgICAgICAgICBuZXcgU2NhbGFyT2YoaW5wdXRbMV0pXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBGdW5jdGlvbiB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgSXNGdW5jdGlvbiB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgSXNTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBzY2FsYXItbGlrZSB0eXBlcyB0byB0aGVpciByZXNwZWN0aXZlIHZhbHVlcy5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBUb1ZhbHVlPFQ+IGltcGxlbWVudHMgRnVuY3Rpb248U2NhbGFyTGlrZTxUPiwgVD4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNGdW5jdGlvbigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFwcGx5IHRoZSBmdW5jdGlvbiB0byB0aGUgaW5wdXQuXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgSW5wdXQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhcHBseShpbnB1dDogU2NhbGFyTGlrZTxUPik6IFQge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXcgSXNTY2FsYXIoaW5wdXQpLnZhbHVlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8U2NhbGFyPFQ+PmlucHV0KS52YWx1ZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3IElzRnVuY3Rpb24oaW5wdXQpLnZhbHVlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICg8RnVuY3Rpb248dW5kZWZpbmVkLCBUPj5pbnB1dCkuYXBwbHkodW5kZWZpbmVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gPFQ+aW5wdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBJbmRleFxyXG4gKi9cclxuZXhwb3J0ICogZnJvbSAnLi9DYWNoZWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbmRpdGlvbmVkJztcclxuZXhwb3J0ICogZnJvbSAnLi9GdW5jdGlvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vRnVuY3Rpb25MaWtlJztcclxuZXhwb3J0ICogZnJvbSAnLi9GdW5jdGlvbk9mJztcclxuZXhwb3J0ICogZnJvbSAnLi9Jc0Z1bmN0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9Jc1RydWUnO1xyXG5leHBvcnQgKiBmcm9tICcuL051bGxhcnlGdW5jdGlvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vTnVsbGFyeUZ1bmN0aW9uT2YnO1xyXG5leHBvcnQgKiBmcm9tICcuL1NhZmVOYXZpZ2F0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9Ub0Jvb2wnO1xyXG5leHBvcnQgKiBmcm9tICcuL1RvQ29uZGl0aW9uQ29uc2VxdWVudFBhaXInO1xyXG5leHBvcnQgKiBmcm9tICcuL1RvVmFsdWUnO1xyXG4iLCIvKipcclxuICogTWFpbiBpbmRleC5cclxuICovXHJcbmV4cG9ydCAqIGZyb20gJy4vZmluYWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2Zyb3plbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vSWxsZWdhbEluaGVyaXRhbmNlRXJyb3InO1xyXG5leHBvcnQgKiBmcm9tICcuL0lsbGVnYWxTdGF0ZUVycm9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZWFsZWQnO1xyXG4iLCJpbXBvcnQgeyBUb0Jvb2wgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IE1hcHBlZCB9IGZyb20gJ0BtYWluL2l0ZXJhYmxlL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyTGlrZSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogSXRlcmFibGUgb2YgbG9naWNhbCBjb25kaXRpb25zLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbnMgaW1wbGVtZW50cyBJdGVyYWJsZTxib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIEl0ZXJhYmxlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmRpdGlvbnM6IEl0ZXJhYmxlPGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSBjb25kaXRpb25zIENvbmRpdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbnM6IEl0ZXJhYmxlPFNjYWxhckxpa2U8Ym9vbGVhbj4+KSB7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25zID0gbmV3IE1hcHBlZChjb25kaXRpb25zLCBuZXcgVG9Cb29sKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXRlcmF0b3IuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBbU3ltYm9sLml0ZXJhdG9yXSgpOiBJdGVyYXRvcjxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uc1tTeW1ib2wuaXRlcmF0b3JdKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBJdGVyYWJsZXMgZXF1YWxzLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIEVxdWFsczxUPiBpbXBsZW1lbnRzIFNjYWxhcjxib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIFNvdXJjZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzb3VyY2U6IEl0ZXJhYmxlPFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ29tcGFyZWQgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29tcGFyZWQ6IEl0ZXJhYmxlPFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSBzb3VyY2UgVmFsdWUuXHJcbiAgICAgKiBAcGFyYW0gY29tcGFyZWQgQ29tcGFyZWQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHNvdXJjZTogSXRlcmFibGU8VD4sIGNvbXBhcmVkOiBJdGVyYWJsZTxUPikge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gc291cmNlO1xyXG4gICAgICAgIHRoaXMuY29tcGFyZWQgPSBjb21wYXJlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgY29uc3Qgc291cmNlSXRlcmF0b3I6IEl0ZXJhdG9yPFQ+ID0gdGhpcy5zb3VyY2VbU3ltYm9sLml0ZXJhdG9yXSgpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBhcmVkSXRlcmF0b3I6IEl0ZXJhdG9yPFQ+ID0gdGhpcy5jb21wYXJlZFtTeW1ib2wuaXRlcmF0b3JdKCk7XHJcblxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgY29uc3Qgc291cmNlTmV4dDogSXRlcmF0b3JSZXN1bHQ8VD4gPSBzb3VyY2VJdGVyYXRvci5uZXh0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmVkTmV4dDogSXRlcmF0b3JSZXN1bHQ8VD4gPSBjb21wYXJlZEl0ZXJhdG9yLm5leHQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzb3VyY2VOZXh0LmRvbmUgPT09IGNvbXBhcmVkTmV4dC5kb25lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlTmV4dC52YWx1ZSAhPT0gY29tcGFyZWROZXh0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VOZXh0LmRvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IHdoaWxlIChyZXN1bHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBGdW5jdGlvbkxpa2UgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uT2YgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcblxyXG4vKipcclxuICogRmlsdGVyZWQgaXRlcmFibGUuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyZWQ8VD4gaW1wbGVtZW50cyBJdGVyYWJsZTxUPiB7XHJcbiAgICAvKipcclxuICAgICAqIEl0ZXJhYmxlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGl0ZXJhYmxlOiBJdGVyYWJsZTxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZ1bmM6IEZ1bmN0aW9uPFQsIGJvb2xlYW4+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSBpdGVyYWJsZSBJdGVyYWJsZS5cclxuICAgICAqIEBwYXJhbSBmdW5jIEZ1bmN0aW9uLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihpdGVyYWJsZTogSXRlcmFibGU8VD4sIGZ1bmM6IEZ1bmN0aW9uTGlrZTxULCBib29sZWFuPikge1xyXG4gICAgICAgIHRoaXMuaXRlcmFibGUgPSBpdGVyYWJsZTtcclxuICAgICAgICB0aGlzLmZ1bmMgPSBuZXcgRnVuY3Rpb25PZihmdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEl0ZXJhdG9yLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgKltTeW1ib2wuaXRlcmF0b3JdKCk6IEl0ZXJhdG9yPFQ+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVyYWJsZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mdW5jLmFwcGx5KGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICB5aWVsZCBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IExpbWl0ZWQgfSBmcm9tICdAbWFpbi9pdGVyYWJsZS9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogRmlyc3QgaXRlbSBvZiBpdGVyYWJsZS5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBGaXJzdDxUPiBpbXBsZW1lbnRzIFNjYWxhcjxJdGVyYXRvclJlc3VsdDxUPj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTb3VyY2UgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc291cmNlOiBJdGVyYWJsZTxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBJdGVyYWJsZTxUPikge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gbmV3IExpbWl0ZWQodmFsdWUsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBJdGVyYXRvclJlc3VsdDxUPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlW1N5bWJvbC5pdGVyYXRvcl0oKVxyXG4gICAgICAgICAgICAubmV4dCgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogTGVuZ3RoIG9mIGl0ZXJhYmxlLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIExlbmd0aE9mPFQ+IGltcGxlbWVudHMgU2NhbGFyPG51bWJlcj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTb3VyY2UgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc291cmNlOiBJdGVyYWJsZTxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBJdGVyYWJsZTxUPikge1xyXG4gICAgICAgIHRoaXMuc291cmNlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGxlbmd0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcclxuICAgICAgICBmb3IgKGNvbnN0IF9pdGVtIG9mIHRoaXMuc291cmNlKSB7XHJcbiAgICAgICAgICAgIGxlbmd0aCArPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyT2YgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIExpbWl0ZWQgaXRlcmFibGUuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgTGltaXRlZDxUPiBpbXBsZW1lbnRzIEl0ZXJhYmxlPFQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogSXRlcmFibGUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaXRlcmFibGU6IEl0ZXJhYmxlPFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGltaXQ6IFNjYWxhcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSBpdGVyYWJsZSBJdGVyYWJsZS5cclxuICAgICAqIEBwYXJhbSBudW1iZXIgTGltaXQuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGl0ZXJhYmxlOiBJdGVyYWJsZTxUPiwgbGltaXQ6IFNjYWxhckxpa2U8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuaXRlcmFibGUgPSBpdGVyYWJsZTtcclxuICAgICAgICB0aGlzLmxpbWl0ID0gbmV3IFNjYWxhck9mKGxpbWl0KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEl0ZXJhdG9yLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgKltTeW1ib2wuaXRlcmF0b3JdKCk6IEl0ZXJhdG9yPFQ+IHtcclxuICAgICAgICBsZXQgY291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZXJhYmxlKSB7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA+PSB0aGlzLmxpbWl0LnZhbHVlKCkpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHlpZWxkIGl0ZW07XHJcbiAgICAgICAgICAgIGNvdW50ICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBGdW5jdGlvbkxpa2UgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uT2YgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcblxyXG4vKipcclxuICogTWFwcGVkIGl0ZXJhYmxlLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIE1hcHBlZDxYLCBZPiBpbXBsZW1lbnRzIEl0ZXJhYmxlPFk+IHtcclxuICAgIC8qKlxyXG4gICAgICogSXRlcmFibGUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaXRlcmFibGU6IEl0ZXJhYmxlPFg+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZnVuYzogRnVuY3Rpb248WCwgWT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIGl0ZXJhYmxlIEl0ZXJhYmxlLlxyXG4gICAgICogQHBhcmFtIGZ1bmMgRnVuY3Rpb24uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGl0ZXJhYmxlOiBJdGVyYWJsZTxYPiwgZnVuYzogRnVuY3Rpb25MaWtlPFgsIFk+KSB7XHJcbiAgICAgICAgdGhpcy5pdGVyYWJsZSA9IGl0ZXJhYmxlO1xyXG4gICAgICAgIHRoaXMuZnVuYyA9IG5ldyBGdW5jdGlvbk9mKGZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSXRlcmF0b3IuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyAqW1N5bWJvbC5pdGVyYXRvcl0oKTogSXRlcmF0b3I8WT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLml0ZXJhYmxlKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHRoaXMuZnVuYy5hcHBseShpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEluZGV4LlxyXG4gKi9cclxuZXhwb3J0ICogZnJvbSAnLi9Db25kaXRpb25zJztcclxuZXhwb3J0ICogZnJvbSAnLi9FcXVhbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL0ZpbHRlcmVkJztcclxuZXhwb3J0ICogZnJvbSAnLi9GaXJzdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTGVuZ3RoT2YnO1xyXG5leHBvcnQgKiBmcm9tICcuL0xpbWl0ZWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL01hcHBlZCc7XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFJhbmRvbSB9IGZyb20gJ0BtYWluL3JhbmRvbS9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhckxpa2UgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJPZiB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogUGFyay1NaWxsZXIgcmFuZG9tIHNvdXJjZS5cclxuICogQHNlZSBodHRwOi8vd3d3LmZpcnN0cHIuY29tLmF1L2RzcC9yYW5kMzEvXHJcbiAqXHJcbiAqIEZvciBvdGhlciBhbHRlcm5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgaW4gSlM6XHJcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL29kb2dvbm8vcHJuZy1wYXJrbWlsbGVyLWpzXHJcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1NpckFudGhvbnkvcmFuZDMxXHJcbiAqIEBzZWUgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vYmxpeHQvZjE3YjQ3YzYyNTA4YmU1OTk4N2JcclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBQYXJrTWlsbGVyUmFuZG9tIGltcGxlbWVudHMgUmFuZG9tIHtcclxuICAgIC8qKlxyXG4gICAgICogTWF4aW11bSAoZXhjbHVzaXZlKSBwb3NzaWJsZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgTUFYOiBudW1iZXIgPSAyMTQ3NDgzNjQ3O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogTmV4dCBzZWVkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNlZWQ6IFNjYWxhcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSBzZWVkIFNlZWQgbnVtYmVyLiBJZiBub3QgcHJvdmlkZWQgd2lsbCB1c2UgYSBzZWVkIGJhc2VkIG9uIHRoZSBjdXJyZW50IHRpbWUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHNlZWQ6IFNjYWxhckxpa2U8bnVtYmVyPiA9ICgpOiBudW1iZXIgPT4gRGF0ZS5ub3coKSkge1xyXG4gICAgICAgIC8vIG1ha2Ugc3VyZSBzZWVkIGlzIG51bWJlciBiZXR3ZWVuIDEgYW5kIE1BWFxyXG4gICAgICAgIHRoaXMuc2VlZCA9IG5ldyBTY2FsYXJPZigoKTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgbGV0IHNvdXJjZTogbnVtYmVyID0gbmV3IFNjYWxhck9mKHNlZWQpLnZhbHVlKCk7XHJcbiAgICAgICAgICAgIHNvdXJjZSA9IChzb3VyY2UgPT09IDAgPyAxIDogc291cmNlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyhzb3VyY2UpICUgUGFya01pbGxlclJhbmRvbS5NQVg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOZXh0IHJhbmRvbSB2YWx1ZSBiZXR3ZWVuIDAgKGluY2x1c2l2ZSkgYW5kIDEgKGV4Y2x1c2l2ZSkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBuZXh0KCk6IG51bWJlciB7XHJcbiAgICAgICAgdGhpcy5zZWVkID0gbmV3IFNjYWxhck9mKCh0aGlzLnNlZWQudmFsdWUoKSAqIDE2ODA3KSAlIFBhcmtNaWxsZXJSYW5kb20uTUFYKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VlZC52YWx1ZSgpIC8gUGFya01pbGxlclJhbmRvbS5NQVg7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgUmFuZG9tIH0gZnJvbSAnQG1haW4vcmFuZG9tL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBSYW5kb21Tb3VyY2UgYXMge0BsaW5rIFJhbmRvbX0uXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgUmFuZG9tT2YgaW1wbGVtZW50cyBSYW5kb20ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSYW5kb20gc291cmNlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNvdXJjZTogUmFuZG9tU291cmNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSBzb3VyY2UgUmFuZG9tIHNvdXJjZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Ioc291cmNlOiBSYW5kb21Tb3VyY2UpIHtcclxuICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5leHQgcmFuZG9tIHZhbHVlIGJldHdlZW4gMCAoaW5jbHVzaXZlKSBhbmQgMSAoZXhjbHVzaXZlKS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG5leHQoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBhcnI6IFVpbnQzMkFycmF5ID0gbmV3IFVpbnQzMkFycmF5KDEpO1xyXG4gICAgICAgIHRoaXMuc291cmNlLmdldFJhbmRvbVZhbHVlcyhhcnIpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXJyWzBdIC8gTWF0aC5wb3coMiwgMzIpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFJhbmRvbSB9IGZyb20gJ0BtYWluL3JhbmRvbS9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogUmFuZG9taXplZCBib29sLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIFJhbmRvbWl6ZWRCb29sIGltcGxlbWVudHMgU2NhbGFyPGJvb2xlYW4+IHtcclxuICAgIC8qKlxyXG4gICAgICogUmFuZG9tLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJhbmRvbTogUmFuZG9tO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSByYW5kb20gUmFuZG9tLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihyYW5kb206IFJhbmRvbSkge1xyXG4gICAgICAgIHRoaXMucmFuZG9tID0gcmFuZG9tO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJhbmRvbS5uZXh0KCkgPj0gMC41O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFJhbmRvbSB9IGZyb20gJ0BtYWluL3JhbmRvbS9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhckxpa2UgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJPZiB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogUmFuZG9taXplZCBmbG9hdGluZyBwb2ludCBudW1iZXIuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgUmFuZG9taXplZEZsb2F0IGltcGxlbWVudHMgU2NhbGFyPG51bWJlcj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSYW5kb20uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmFuZG9tOiBSYW5kb207XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNaW5pbXVtIHBvc3NpYmxlIHZhbHVlIChpbmNsdXNpdmUpLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1pbjogU2NhbGFyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXhpbXVtIHBvc3NpYmxlIHZhbHVlIChpbmNsdXNpdmUpLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1heDogU2NhbGFyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIHJhbmRvbSBSYW5kb20uXHJcbiAgICAgKiBAcGFyYW0gbWluIE1pbmltdW0gcG9zc2libGUgdmFsdWUgKGluY2x1c2l2ZSkuXHJcbiAgICAgKiBAcGFyYW0gbWF4IE1heGltdW0gcG9zc2libGUgdmFsdWUgKGluY2x1c2l2ZSkuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHJhbmRvbTogUmFuZG9tLCBtaW46IFNjYWxhckxpa2U8bnVtYmVyPiwgbWF4OiBTY2FsYXJMaWtlPG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLnJhbmRvbSA9IHJhbmRvbTtcclxuICAgICAgICB0aGlzLm1pbiA9IG5ldyBTY2FsYXJPZihtaW4pO1xyXG4gICAgICAgIHRoaXMubWF4ID0gbmV3IFNjYWxhck9mKG1heCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5taW4udmFsdWUoKSArICh0aGlzLm1heC52YWx1ZSgpIC0gdGhpcy5taW4udmFsdWUoKSkgKiB0aGlzLnJhbmRvbS5uZXh0KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgUmFuZG9tIH0gZnJvbSAnQG1haW4vcmFuZG9tL2luZGV4JztcclxuaW1wb3J0IHsgUmFuZG9taXplZEZsb2F0IH0gZnJvbSAnQG1haW4vcmFuZG9tL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyTGlrZSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogUmFuZG9taXplZCBpbnRlZ2VyLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIFJhbmRvbWl6ZWRJbnQgaW1wbGVtZW50cyBTY2FsYXI8bnVtYmVyPiB7XHJcbiAgICAvKipcclxuICAgICAqIFJhbmRvbWl6ZWQgZmxvYXRpbmcgcG9pbnQgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJhbmRvbWl6ZWRGbG9hdDogU2NhbGFyPG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIHJhbmRvbSBSYW5kb20uXHJcbiAgICAgKiBAcGFyYW0gbWluIE1pbmltdW0gcG9zc2libGUgdmFsdWUgKGluY2x1c2l2ZSkuXHJcbiAgICAgKiBAcGFyYW0gbWF4IE1heGltdW0gcG9zc2libGUgdmFsdWUgKGluY2x1c2l2ZSkuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHJhbmRvbTogUmFuZG9tLCBtaW46IFNjYWxhckxpa2U8bnVtYmVyPiwgbWF4OiBTY2FsYXJMaWtlPG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLnJhbmRvbWl6ZWRGbG9hdCA9IG5ldyBSYW5kb21pemVkRmxvYXQocmFuZG9tLCBtaW4sIG1heCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLnJhbmRvbWl6ZWRGbG9hdC52YWx1ZSgpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBSYW5kb20gfSBmcm9tICdAbWFpbi9yYW5kb20vaW5kZXgnO1xyXG5pbXBvcnQgeyBSYW5kb21pemVkRmxvYXQgfSBmcm9tICdAbWFpbi9yYW5kb20vaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIFJhbmRvbWl6ZWQgZmxvYXRpbmcgcG9pbnQgbnVtYmVyIGJldHdlZW4gMCBhbmQgMS5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBSYW5kb21pemVkUGVyY2VudGFnZSBpbXBsZW1lbnRzIFNjYWxhcjxudW1iZXI+IHtcclxuICAgIC8qKlxyXG4gICAgICogUmFuZG9taXplZCBmbG9hdGluZyBwb2ludCBudW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmFuZG9taXplZEZsb2F0OiBTY2FsYXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gcmFuZG9tIFJhbmRvbS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IocmFuZG9tOiBSYW5kb20pIHtcclxuICAgICAgICB0aGlzLnJhbmRvbWl6ZWRGbG9hdCA9IG5ldyBSYW5kb21pemVkRmxvYXQocmFuZG9tLCAwLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJhbmRvbWl6ZWRGbG9hdC52YWx1ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBJbmRleC5cclxuICovXHJcbmV4cG9ydCAqIGZyb20gJy4vUGFya01pbGxlclJhbmRvbSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmFuZG9tJztcclxuZXhwb3J0ICogZnJvbSAnLi9SYW5kb21pemVkQm9vbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmFuZG9taXplZEZsb2F0JztcclxuZXhwb3J0ICogZnJvbSAnLi9SYW5kb21pemVkSW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9SYW5kb21pemVkUGVyY2VudGFnZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vUmFuZG9tT2YnO1xyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBDb25kaXRpb25zIH0gZnJvbSAnQG1haW4vaXRlcmFibGUvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBMb2dpY2FsIGNvbmp1bmN0aW9uIG9wZXJhdG9yLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIEFuZCBpbXBsZW1lbnRzIFNjYWxhcjxib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIENvbmRpdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZGl0aW9uczogSXRlcmFibGU8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIGNvbmRpdGlvbnMgQ29uZGl0aW9ucy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoLi4uY29uZGl0aW9uczogU2NhbGFyTGlrZTxib29sZWFuPltdKSB7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25zID0gbmV3IENvbmRpdGlvbnMoY29uZGl0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb25kaXRpb24gb2YgdGhpcy5jb25kaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmICghY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBGdW5jdGlvbkxpa2UgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uT2YgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IFRvQm9vbCB9IGZyb20gJ0BtYWluL2Z1bmN0aW9uL2luZGV4JztcclxuaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgQm9vbExpa2UgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIEJvb2xlYW4gb2YgZGlmZmVyZW50IHBvc3NpYmxlIGlucHV0cy5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBCb29sT2Y8VD4gaW1wbGVtZW50cyBTY2FsYXI8Ym9vbGVhbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCb29sZWFuLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGJvb2w6IEJvb2xMaWtlPFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gdG8gY29udmVydCBib29sLWxpa2UgdHlwZXMgdG8gYm9vbGVhbiBwcmltaXRpdmUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdG9Cb29sOiBGdW5jdGlvbjxCb29sTGlrZTxUPiwgYm9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIEJvb2xlYW4tbGlrZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IEJvb2xMaWtlPFQ+LCB0b0Jvb2w6IEZ1bmN0aW9uTGlrZTxCb29sTGlrZTxUPiwgYm9vbGVhbj4gPSBuZXcgVG9Cb29sKCkpIHtcclxuICAgICAgICB0aGlzLmJvb2wgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnRvQm9vbCA9IG5ldyBGdW5jdGlvbk9mKHRvQm9vbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvQm9vbC5hcHBseSh0aGlzLmJvb2wpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhckxpa2UgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJPZiB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogQ2FjaGVkIHNjYWxhci5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBDYWNoZWQ8VD4gaW1wbGVtZW50cyBTY2FsYXI8VD4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTY2FsYXIuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2NhbGFyOiBTY2FsYXI8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHtAbGluayBzY2FsYXJ9IGlzIGNhY2hlZC5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBpc0NhY2hlZDogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENhY2hlZCB2YWx1ZSBmcm9tIHNjYWxhci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBjYWNoZTogVDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBTY2FsYXJMaWtlPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5zY2FsYXIgPSBuZXcgU2NhbGFyT2YodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuaXNDYWNoZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBUIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNDYWNoZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYWNoZSA9IHRoaXMuc2NhbGFyLnZhbHVlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNDYWNoZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSXNUcnVlIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBUb0NvbmRpdGlvbkNvbnNlcXVlbnRQYWlyIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBGaWx0ZXJlZCB9IGZyb20gJ0BtYWluL2l0ZXJhYmxlL2luZGV4JztcclxuaW1wb3J0IHsgRmlyc3QgfSBmcm9tICdAbWFpbi9pdGVyYWJsZS9pbmRleCc7XHJcbmltcG9ydCB7IE1hcHBlZCB9IGZyb20gJ0BtYWluL2l0ZXJhYmxlL2luZGV4JztcclxuaW1wb3J0IHsgQ29uZGl0aW9uQ29uc2VxdWVudExpa2VQYWlyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgQ29uZGl0aW9uQ29uc2VxdWVudFBhaXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyT2YgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIENvbmRpdGlvbmFsIHNjYWxhci5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBDb25kaXRpb25lZDxUPiBpbXBsZW1lbnRzIFNjYWxhcjxUPiB7XHJcbiAgICAvKipcclxuICAgICAqIENvbmRpdGlvbi9jb25zZXF1ZW50IHBhaXJzLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpcnN0Q29uZGl0aW9uQ29uc2VxdWVudDogU2NhbGFyPEl0ZXJhdG9yUmVzdWx0PENvbmRpdGlvbkNvbnNlcXVlbnRQYWlyPFQ+Pj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGYWxsYmFjayB2YWx1ZSB3aGVuIGFsbCBjb25kaXRpb25zIGFyZSBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhbHRlcm5hdGl2ZTogU2NhbGFyPFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gYWx0ZXJuYXRpdmUgRmFsbGJhY2sgdmFsdWUgd2hlbiBhbGwgY29uZGl0aW9ucyBhcmUgZmFsc2UuXHJcbiAgICAgKiBAcGFyYW0gY29uZGl0aW9uQ29uc2VxdWVudHMgQ29uZGl0aW9uL2NvbnNlcXVlbnQgcGFpcnMuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGFsdGVybmF0aXZlOiBTY2FsYXJMaWtlPFQ+LCAuLi5jb25kaXRpb25Db25zZXF1ZW50czogQ29uZGl0aW9uQ29uc2VxdWVudExpa2VQYWlyPFQ+W10pIHtcclxuICAgICAgICB0aGlzLmZpcnN0Q29uZGl0aW9uQ29uc2VxdWVudCA9XHJcbiAgICAgICAgICAgIG5ldyBGaXJzdChcclxuICAgICAgICAgICAgICAgIG5ldyBGaWx0ZXJlZChcclxuICAgICAgICAgICAgICAgICAgICBuZXcgTWFwcGVkKGNvbmRpdGlvbkNvbnNlcXVlbnRzLCBuZXcgVG9Db25kaXRpb25Db25zZXF1ZW50UGFpcjxUPigpKSxcclxuICAgICAgICAgICAgICAgICAgICBuZXcgSXNUcnVlKClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmFsdGVybmF0aXZlID0gbmV3IFNjYWxhck9mKGFsdGVybmF0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogVCB7XHJcbiAgICAgICAgY29uc3QgZmlyc3Q6IEl0ZXJhdG9yUmVzdWx0PENvbmRpdGlvbkNvbnNlcXVlbnRQYWlyPFQ+PiA9IHRoaXMuZmlyc3RDb25kaXRpb25Db25zZXF1ZW50LnZhbHVlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiAhZmlyc3QuZG9uZSA/IGZpcnN0LnZhbHVlWzFdLnZhbHVlKCkgOiB0aGlzLmFsdGVybmF0aXZlLnZhbHVlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBGYWxzZSBzY2FsYXIuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgRmFsc2UgaW1wbGVtZW50cyBTY2FsYXI8Ym9vbGVhbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyBpZiBhbiBvYmplY3QgaGFzIGEgcHJvcGVydHkgc2V0IHRvIHRydWUuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgSGFzVHJ1ZVByb3BlcnR5PFQ+IGltcGxlbWVudHMgU2NhbGFyPGJvb2xlYW4+IHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uZGl0aW9uLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlzUHJvcGVydHlUcnVlOiAoKSA9PiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSB2YWx1ZSBWYXJpYWJsZS5cclxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eU5hbWUgTmFtZSBvZiB0aGUgcHJvcGVydHkuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBULCBwcm9wZXJ0eU5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaXNQcm9wZXJ0eVRydWUgPSAoKTogYm9vbGVhbiA9PlxyXG4gICAgICAgICAgICB2YWx1ZSAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmXHJcbiAgICAgICAgICAgICg8eyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0+PE9iamVjdD52YWx1ZSlbcHJvcGVydHlOYW1lXSA9PT0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1Byb3BlcnR5VHJ1ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyBpZiBhbiBvYmplY3QgaGFzIGEgbnVsbGFyeSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdHJ1ZS5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBIYXNUcnVlUmVzdWx0PFQ+IGltcGxlbWVudHMgU2NhbGFyPGJvb2xlYW4+IHtcclxuICAgIC8qKlxyXG4gICAgICogQ29uZGl0aW9uLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlzUmVzdWx0VHJ1ZTogKCkgPT4gYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVmFyaWFibGUuXHJcbiAgICAgKiBAcGFyYW0gZnVuY3Rpb25OYW1lIE5hbWUgb2YgdGhlIGZ1bmN0aW9uLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogVCwgZnVuY3Rpb25OYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlzUmVzdWx0VHJ1ZSA9ICgpOiBib29sZWFuID0+XHJcbiAgICAgICAgICAgIHZhbHVlICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiZcclxuICAgICAgICAgICAgdHlwZW9mICg8eyBba2V5OiBzdHJpbmddOiAoKSA9PiB0cnVlIH0+PE9iamVjdD52YWx1ZSlbZnVuY3Rpb25OYW1lXSA9PT0gJ2Z1bmN0aW9uJyAmJlxyXG4gICAgICAgICAgICAoPHsgW2tleTogc3RyaW5nXTogKCkgPT4gdHJ1ZSB9PjxPYmplY3Q+dmFsdWUpW2Z1bmN0aW9uTmFtZV0oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1Jlc3VsdFRydWUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBJc051bGwgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBJc1VuZGVmaW5lZCB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IE9yIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyTGlrZSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyBpZiBzY2FsYXIgb3IgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWQuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgSXNCbGFuazxUPiBpbXBsZW1lbnRzIFNjYWxhcjxib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIFNjYWxhci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpc0JsYW5rOiBTY2FsYXI8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFZhbHVlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogU2NhbGFyTGlrZTxUPikge1xyXG4gICAgICAgIHRoaXMuaXNCbGFuayA9IG5ldyBPcihcclxuICAgICAgICAgICAgbmV3IElzTnVsbCh2YWx1ZSksXHJcbiAgICAgICAgICAgIG5ldyBJc1VuZGVmaW5lZCh2YWx1ZSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzQmxhbmsudmFsdWUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgaWYgdmFyaWFibGUgaXMgYSBzdGFuZGFyZCBKYXZhU2NyaXB0IGZ1bmN0aW9uLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIElzSnNGdW5jdGlvbjxUPiBpbXBsZW1lbnRzIFNjYWxhcjxib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIFZhcmlhYmxlIHRvIGNoZWNrLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbDogVDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gdmFsIFZhcmlhYmxlIHRvIGNoZWNrLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWw6IFQpIHtcclxuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMudmFsID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IElzQmxhbmsgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyT2YgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgaWYgc2NhbGFyIG9yIHZhbHVlIGlzIG5vdCBudWxsIGFuZCBub3QgdW5kZWZpbmVkLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIElzTm90Qmxhbms8VD4gaW1wbGVtZW50cyBTY2FsYXI8Ym9vbGVhbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTY2FsYXIuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2NhbGFyOiBTY2FsYXI8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFZhbHVlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogU2NhbGFyTGlrZTxUPikge1xyXG4gICAgICAgIHRoaXMuc2NhbGFyID0gbmV3IFNjYWxhck9mKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gIShuZXcgSXNCbGFuayh0aGlzLnNjYWxhcikudmFsdWUoKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyTGlrZSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhck9mIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIGlmIHNjYWxhciBvciB2YWx1ZSBpcyBudWxsLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIElzTnVsbDxUPiBpbXBsZW1lbnRzIFNjYWxhcjxib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIFNjYWxhci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzY2FsYXI6IFNjYWxhcjxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBTY2FsYXJMaWtlPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5zY2FsYXIgPSBuZXcgU2NhbGFyT2YodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxhci52YWx1ZSgpID09PSBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhckxpa2UgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJPZiB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyBpZiB2YXJpYWJsZSBpcyBhbiBvYmplY3QuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgSXNPYmplY3Q8VD4gaW1wbGVtZW50cyBTY2FsYXI8Ym9vbGVhbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTY2FsYXIuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2NhbGFyOiBTY2FsYXI8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFZhbHVlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogU2NhbGFyTGlrZTxUPikge1xyXG4gICAgICAgIHRoaXMuc2NhbGFyID0gbmV3IFNjYWxhck9mKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuc2NhbGFyLnZhbHVlKCkgPT09ICdvYmplY3QnO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IEhhc1RydWVSZXN1bHQgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgaWYgdmFyaWFibGUgaXMgb2YgdHlwZSB7QGxpbmsgU2NhbGFyfS5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBJc1NjYWxhcjxUPiBpbXBsZW1lbnRzIFNjYWxhcjxib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIENvbmRpdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpc1NjYWxhclR5cGU6IFNjYWxhcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gbWF5YmVTY2FsYXIgVmFyaWFibGUgdG8gY2hlY2suXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG1heWJlU2NhbGFyOiBUKSB7XHJcbiAgICAgICAgdGhpcy5pc1NjYWxhclR5cGUgPSBuZXcgSGFzVHJ1ZVJlc3VsdChtYXliZVNjYWxhciwgJ2lzU2NhbGFyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNTY2FsYXJUeXBlLnZhbHVlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyTGlrZSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhck9mIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIGlmIHNjYWxhciBvciB2YWx1ZSBpcyB1bmRlZmluZWQuXHJcbiAqL1xyXG5AZmluYWxcclxuQGZyb3plblxyXG5leHBvcnQgY2xhc3MgSXNVbmRlZmluZWQ8VD4gaW1wbGVtZW50cyBTY2FsYXI8Ym9vbGVhbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTY2FsYXIuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2NhbGFyOiBTY2FsYXI8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFZhbHVlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogU2NhbGFyTGlrZTxUPikge1xyXG4gICAgICAgIHRoaXMuc2NhbGFyID0gbmV3IFNjYWxhck9mKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2FsYXIudmFsdWUoKSA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEZ1bmN0aW9uIH0gZnJvbSAnQG1haW4vZnVuY3Rpb24vaW5kZXgnO1xyXG5pbXBvcnQgeyBGdW5jdGlvbkxpa2UgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IEZ1bmN0aW9uT2YgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IE1hcHBlZCB9IGZyb20gJ0BtYWluL2l0ZXJhYmxlL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBNYXAgb2YgaXRlcmFibGUgYW5kIGNhbGxiYWNrLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIE1hcE9mPFosIEssIFY+IGltcGxlbWVudHMgU2NhbGFyPE1hcDxLLCBWPj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBJdGVtcy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbnRyaWVzOiBJdGVyYWJsZTxaPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIHRvIGdldCBrZXkgdmFsdWUgZW50cnkuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZ2V0RW50cnk6IEZ1bmN0aW9uPFosIFtLLCBWXT47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIGVudHJpZXMgSXRlbXMuXHJcbiAgICAgKiBAcGFyYW0gZ2V0RW50cnkgRnVuY3Rpb24gb3Igc3RhbmRhcmQgSmF2YVNjcmlwdCBmdW5jdGlvbiB0byBnZXQga2V5IHZhbHVlIGVudHJ5LlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihlbnRyaWVzOiBJdGVyYWJsZTxaPiwgZ2V0RW50cnk6IEZ1bmN0aW9uTGlrZTxaLCBbSywgVl0+KSB7XHJcbiAgICAgICAgdGhpcy5lbnRyaWVzID0gZW50cmllcztcclxuICAgICAgICB0aGlzLmdldEVudHJ5ID0gbmV3IEZ1bmN0aW9uT2YoZ2V0RW50cnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBNYXA8SywgVj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWFwKFxyXG4gICAgICAgICAgICBuZXcgTWFwcGVkKHRoaXMuZW50cmllcywgdGhpcy5nZXRFbnRyeSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhckxpa2UgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJPZiB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogTmVnYXRlcyBhIGxvZ2ljYWwgY29uZGl0aW9uLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIE5vdCBpbXBsZW1lbnRzIFNjYWxhcjxib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIFNjYWxhci5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzY2FsYXI6IFNjYWxhcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBTY2FsYXJMaWtlPGJvb2xlYW4+KSB7XHJcbiAgICAgICAgdGhpcy5zY2FsYXIgPSBuZXcgU2NhbGFyT2YodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5zY2FsYXIudmFsdWUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIE51bGwgc2NhbGFyLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIE51bGwgaW1wbGVtZW50cyBTY2FsYXI8bnVsbD4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgQ29uZGl0aW9ucyB9IGZyb20gJ0BtYWluL2l0ZXJhYmxlL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyTGlrZSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogTG9naWNhbCBkaXNqdW5jdGlvbiBvcGVyYXRvci5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBPciBpbXBsZW1lbnRzIFNjYWxhcjxib29sZWFuPiB7XHJcbiAgICAvKipcclxuICAgICAqIENvbmRpdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZGl0aW9uczogSXRlcmFibGU8Ym9vbGVhbj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIGNvbmRpdGlvbnMgQ29uZGl0aW9ucy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoLi4uY29uZGl0aW9uczogU2NhbGFyTGlrZTxib29sZWFuPltdKSB7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25zID0gbmV3IENvbmRpdGlvbnMoY29uZGl0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb25kaXRpb24gb2YgdGhpcy5jb25kaXRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChjb25kaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyTGlrZSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhck9mIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBSb3VuZGVkIG51bWJlci5cclxuICogQ29kZSBhZGFwdGVkIGZyb20gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWF0aC9yb3VuZC5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBSb3VuZGVkIGltcGxlbWVudHMgU2NhbGFyPG51bWJlcj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBOdW1iZXIuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2NhbGFyOiBTY2FsYXI8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFByZWNpc2lvbi4gRS5nLiAxIHdvdWxkIHJvdW5kIHRvIDEgZGVjaW1hbCBwbGFjZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcmVjaXNpb246IFNjYWxhcjxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSBzb21ldGhpbmcgTnVtYmVyLlxyXG4gICAgICogQHBhcmFtIHByZWNpc2lvbiBQcmVjaXNpb24uIEUuZy4gMSB3b3VsZCByb3VuZCB0byAxIGRlY2ltYWwgcGxhY2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlOiBTY2FsYXJMaWtlPG51bWJlcj4sIHByZWNpc2lvbjogU2NhbGFyTGlrZTxudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5zY2FsYXIgPSBuZXcgU2NhbGFyT2YodmFsdWUpO1xyXG4gICAgICAgIHRoaXMucHJlY2lzaW9uID0gbmV3IFNjYWxhck9mKHByZWNpc2lvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBmYWN0b3I6IG51bWJlciA9IE1hdGgucG93KDEwLCB0aGlzLnByZWNpc2lvbi52YWx1ZSgpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy5zY2FsYXIudmFsdWUoKSAqIGZhY3RvcikgLyBmYWN0b3I7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRnVuY3Rpb24gfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IFRvVmFsdWUgfSBmcm9tICdAbWFpbi9mdW5jdGlvbi9pbmRleCc7XHJcbmltcG9ydCB7IGZpbmFsIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBmcm96ZW4gfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhciB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhckxpa2UgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIFNjYWxhciBvZiBkaWZmZXJlbnQgcG9zc2libGUgaW5wdXRzLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIFNjYWxhck9mPFQ+IGltcGxlbWVudHMgU2NhbGFyPFQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogVmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFsOiBTY2FsYXJMaWtlPFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gdG8gY29udmVydCBzY2FsYXItbGlrZSB0eXBlcyB0byB0aGVpciByZXNwZWN0aXZlIHZhbHVlcy5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0b1ZhbHVlOiBGdW5jdGlvbjxTY2FsYXJMaWtlPFQ+LCBUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN0b3IuXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgU2NhbGFyLCBmdW5jdGlvbiB0aGF0IHJldHVybnMgdmFsdWUsIG9yIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogU2NhbGFyTGlrZTxUPiwgdG9WYWx1ZTogRnVuY3Rpb248U2NhbGFyTGlrZTxUPiwgVD4gPSBuZXcgVG9WYWx1ZSgpKSB7XHJcbiAgICAgICAgdGhpcy52YWwgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnRvVmFsdWUgPSB0b1ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0cyB0aGUgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB2YWx1ZSgpOiBUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b1ZhbHVlLmFwcGx5KHRoaXMudmFsKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXJMaWtlIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyT2YgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIFRlcm5hcnkgb3BlcmF0aW9uLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIFRlcm5hcnk8VD4gaW1wbGVtZW50cyBTY2FsYXI8VD4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUZXN0IGNvbmRpdGlvbi5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25kaXRpb246IFNjYWxhcjxib29sZWFuPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB3aGVuIGNvbmRpdGlvbiBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnNlcXVlbnQ6IFNjYWxhcjxUPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybiB3aGVuIGNvbmRpdGlvbiBpcyBmYWxzZS5cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhbHRlcm5hdGl2ZTogU2NhbGFyPFQ+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3Rvci5cclxuICAgICAqIEBwYXJhbSBjb25kaXRpb24gVGVzdCBjb25kaXRpb24uXHJcbiAgICAgKiBAcGFyYW0gY29uc2VxdWVudCBSZXR1cm4gd2hlbiBjb25kaXRpb24gaXMgdHJ1ZS5cclxuICAgICAqIEBwYXJhbSBhbHRlcm5hdGl2ZSBSZXR1cm4gd2hlbiBjb25kaXRpb24gaXMgZmFsc2UuXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvbjogU2NhbGFyTGlrZTxib29sZWFuPiwgY29uc2VxdWVudDogU2NhbGFyTGlrZTxUPiwgYWx0ZXJuYXRpdmU6IFNjYWxhckxpa2U8VD4pIHtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IG5ldyBTY2FsYXJPZihjb25kaXRpb24pO1xyXG4gICAgICAgIHRoaXMuY29uc2VxdWVudCA9IG5ldyBTY2FsYXJPZihjb25zZXF1ZW50KTtcclxuICAgICAgICB0aGlzLmFsdGVybmF0aXZlID0gbmV3IFNjYWxhck9mKGFsdGVybmF0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFR5cGUgZGV0ZXJtaW5hbnQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1NjYWxhcigpOiB0cnVlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldHMgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZGl0aW9uLnZhbHVlKCkgPyB0aGlzLmNvbnNlcXVlbnQudmFsdWUoKSA6IHRoaXMuYWx0ZXJuYXRpdmUudmFsdWUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBTY2FsYXIgfSBmcm9tICdAbWFpbi9zY2FsYXIvaW5kZXgnO1xyXG5cclxuLyoqXHJcbiAqIFRydWUgc2NhbGFyLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIFRydWUgaW1wbGVtZW50cyBTY2FsYXI8Ym9vbGVhbj4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBUeXBlIGRldGVybWluYW50LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaXNTY2FsYXIoKTogdHJ1ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZmluYWwgfSBmcm9tICdAbWFpbi9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuXHJcbi8qKlxyXG4gKiBVbmRlZmluZWQgc2NhbGFyLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIFVuZGVmaW5lZCBpbXBsZW1lbnRzIFNjYWxhcjx1bmRlZmluZWQ+IHtcclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL2luZGV4JztcclxuaW1wb3J0IHsgZnJvemVuIH0gZnJvbSAnQG1haW4vaW5kZXgnO1xyXG5pbXBvcnQgeyBJc0JsYW5rIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgU2NhbGFyTGlrZSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcbmltcG9ydCB7IFNjYWxhck9mIH0gZnJvbSAnQG1haW4vc2NhbGFyL2luZGV4JztcclxuaW1wb3J0IHsgVGVybmFyeSB9IGZyb20gJ0BtYWluL3NjYWxhci9pbmRleCc7XHJcblxyXG4vKipcclxuICogQ2FjaGVkIHNjYWxhci5cclxuICovXHJcbkBmaW5hbFxyXG5AZnJvemVuXHJcbmV4cG9ydCBjbGFzcyBXaXRoRmFsbGJhY2s8VD4gaW1wbGVtZW50cyBTY2FsYXI8VD4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBTb3VyY2UuXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2NhbGFyOiBTY2FsYXI8VD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDdG9yLlxyXG4gICAgICogQHBhcmFtIHZhbHVlIFZhbHVlLlxyXG4gICAgICogQHBhcmFtIGZhbGxiYWNrIEZhbGxiYWNrIHZhbHVlLlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZTogU2NhbGFyTGlrZTxUPiwgZmFsbGJhY2s6IFNjYWxhckxpa2U8VD4pIHtcclxuICAgICAgICB0aGlzLnNjYWxhciA9IG5ldyBUZXJuYXJ5KFxyXG4gICAgICAgICAgICBuZXcgSXNCbGFuayh2YWx1ZSksXHJcbiAgICAgICAgICAgIG5ldyBTY2FsYXJPZihmYWxsYmFjayksXHJcbiAgICAgICAgICAgIG5ldyBTY2FsYXJPZih2YWx1ZSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVHlwZSBkZXRlcm1pbmFudC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzU2NhbGFyKCk6IHRydWUge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHZhbHVlKCk6IFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxhci52YWx1ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBJbmRleC5cclxuICovXHJcbmV4cG9ydCAqIGZyb20gJy4vQW5kJztcclxuZXhwb3J0ICogZnJvbSAnLi9Cb29sTGlrZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vQm9vbE9mJztcclxuZXhwb3J0ICogZnJvbSAnLi9DYWNoZWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbmRpdGlvbkNvbnNlcXVlbnRMaWtlUGFpcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vQ29uZGl0aW9uQ29uc2VxdWVudFBhaXInO1xyXG5leHBvcnQgKiBmcm9tICcuL0NvbmRpdGlvbmVkJztcclxuZXhwb3J0ICogZnJvbSAnLi9GYWxzZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vSGFzVHJ1ZVByb3BlcnR5JztcclxuZXhwb3J0ICogZnJvbSAnLi9IYXNUcnVlUmVzdWx0JztcclxuZXhwb3J0ICogZnJvbSAnLi9Jc0JsYW5rJztcclxuZXhwb3J0ICogZnJvbSAnLi9Jc0pzRnVuY3Rpb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL0lzTm90QmxhbmsnO1xyXG5leHBvcnQgKiBmcm9tICcuL0lzTnVsbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vSXNPYmplY3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL0lzU2NhbGFyJztcclxuZXhwb3J0ICogZnJvbSAnLi9Jc1VuZGVmaW5lZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTWFwT2YnO1xyXG5leHBvcnQgKiBmcm9tICcuL05vdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vTnVsbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vT3InO1xyXG5leHBvcnQgKiBmcm9tICcuL1JvdW5kZWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1NjYWxhcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2NhbGFyTGlrZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vU2NhbGFyT2YnO1xyXG5leHBvcnQgKiBmcm9tICcuL1Rlcm5hcnknO1xyXG5leHBvcnQgKiBmcm9tICcuL1RydWUnO1xyXG5leHBvcnQgKiBmcm9tICcuL1VuZGVmaW5lZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vV2l0aEZhbGxiYWNrJztcclxuIiwiLyoqXHJcbiAqIFNlYWwgY29uc3RydWN0b3IgYW5kIHByb3RvdHlwZS5cclxuICogQHBhcmFtIHRhcmdldCBUYXJnZXQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VhbGVkKHRhcmdldDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIE9iamVjdC5zZWFsKHRhcmdldCk7XHJcbiAgICBPYmplY3Quc2VhbCh0YXJnZXQucHJvdG90eXBlKTtcclxufVxyXG4iXX0=
