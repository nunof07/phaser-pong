(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./pong");
/**
 * Main.
 */
new index_1.Pong().start();

},{"./pong":3}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../system");
var index_2 = require("../system");
/**
 * Pong game.
 */
var Pong = function () {
    function Pong() {
        _classCallCheck(this, Pong);
    }

    _createClass(Pong, [{
        key: "start",

        /**
         * Start game.
         */
        value: function start() {
            throw new Error('Game not implemented.');
        }
    }]);

    return Pong;
}();
Pong = __decorate([index_1.final, index_2.frozen], Pong);
exports.Pong = Pong;

},{"../system":8}],3:[function(require,module,exports){
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
__export(require("./Pong"));

},{"./Pong":2}],4:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Illegal inheritance exception.
 */

var IllegalInheritanceException = function (_Error) {
  _inherits(IllegalInheritanceException, _Error);

  function IllegalInheritanceException() {
    _classCallCheck(this, IllegalInheritanceException);

    return _possibleConstructorReturn(this, (IllegalInheritanceException.__proto__ || Object.getPrototypeOf(IllegalInheritanceException)).apply(this, arguments));
  }

  return IllegalInheritanceException;
}(Error);

exports.IllegalInheritanceException = IllegalInheritanceException;

},{}],5:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Illegal state exception.
 */

var IllegalStateException = function (_Error) {
  _inherits(IllegalStateException, _Error);

  function IllegalStateException() {
    _classCallCheck(this, IllegalStateException);

    return _possibleConstructorReturn(this, (IllegalStateException.__proto__ || Object.getPrototypeOf(IllegalStateException)).apply(this, arguments));
  }

  return IllegalStateException;
}(Error);

exports.IllegalStateException = IllegalStateException;

},{}],6:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
/**
 * Prevent instances from inherited classes.
 * @param target Class.
 */
// tslint:disable-next-line:no-any
function final(target) {
    return function (_target) {
        _inherits(Final, _target);

        // tslint:disable-next-line:no-any
        function Final() {
            var _ref;

            _classCallCheck(this, Final);

            if (new.target !== Final) {
                throw new index_1.IllegalInheritanceException('Cannot inherit from final class');
            }

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _possibleConstructorReturn(this, (_ref = Final.__proto__ || Object.getPrototypeOf(Final)).call.apply(_ref, [this].concat(args)));
        }

        return Final;
    }(target);
}
exports.final = final;

},{"./index":8}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Freeze constructor and prototype.
 * @param target Target.
 */
function frozen(target) {
  Object.freeze(target);
  Object.freeze(target.prototype);
}
exports.frozen = frozen;

},{}],8:[function(require,module,exports){
"use strict";

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./final"));
__export(require("./frozen"));
__export(require("./IllegalInheritanceException"));
__export(require("./IllegalStateException"));
__export(require("./sealed"));

},{"./IllegalInheritanceException":4,"./IllegalStateException":5,"./final":6,"./frozen":7,"./sealed":9}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Seal constructor and prototype.
 * @param target Target.
 */
function sealed(target) {
  Object.seal(target);
  Object.seal(target.prototype);
}
exports.sealed = sealed;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcmVtYWtlL21haW4vbWFpbi50cyIsInNyYy9yZW1ha2UvbWFpbi9wb25nL1BvbmcudHMiLCJzcmMvcmVtYWtlL21haW4vcG9uZy9pbmRleC50cyIsInNyYy9yZW1ha2UvbWFpbi9zeXN0ZW0vSWxsZWdhbEluaGVyaXRhbmNlRXhjZXB0aW9uLnRzIiwic3JjL3JlbWFrZS9tYWluL3N5c3RlbS9JbGxlZ2FsU3RhdGVFeGNlcHRpb24udHMiLCJzcmMvcmVtYWtlL21haW4vc3lzdGVtL2ZpbmFsLnRzIiwic3JjL3JlbWFrZS9tYWluL3N5c3RlbS9mcm96ZW4udHMiLCJzcmMvcmVtYWtlL21haW4vc3lzdGVtL2luZGV4LnRzIiwic3JjL3JlbWFrZS9tYWluL3N5c3RlbS9zZWFsZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUNBQSxjQUF3QztBQUV4QyxBQUVHOzs7QUFDSCxJQUFJLFFBQUksQUFBRSxPQUFDLEFBQUssQUFBRSxBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puQixjQUEyQztBQUMzQyxjQUE0QztBQUU1QyxBQUVHOzs7QUFHSDtBQUFBLEFBQWEsQUFBSTs7Ozs7OztBQUNiLEFBRUcsQUFDSSxBQUFLOzs7O0FBQ1Isa0JBQU0sSUFBSSxBQUFLLE1BQUMsQUFBdUIsQUFBQyxBQUFDLEFBQzdDO0FBQUMsQUFDSjs7Ozs7QUFQWSxBQUFJLG1CQUZoQixRQUFLLE9BQ0wsUUFBTSxTQUNNLEFBQUksQUFPaEI7QUFQWSxlQUFJOzs7Ozs7Ozs7OztBQ1RqQixBQUVHOzs7QUFDSCxpQkFBdUI7Ozs7Ozs7Ozs7OztBQ0h2QixBQUVHLEFBQ0g7Ozs7SUFBeUM7Ozs7Ozs7Ozs7RUFBUSxBQUFLLEFBQ3JEOztBQURELHNDQUNDOzs7Ozs7Ozs7Ozs7QUNKRCxBQUVHLEFBQ0g7Ozs7SUFBbUM7Ozs7Ozs7Ozs7RUFBUSxBQUFLLEFBQy9DOztBQURELGdDQUNDOzs7Ozs7Ozs7Ozs7QUNKRCxjQUFpRTtBQUVqRSxBQUdHOzs7O0FBQ0gsQUFBa0M7QUFDbEMsZUFBa0UsQUFBUztBQUN2RSxBQUFNLEFBQUMsQUFBWTs7O0FBQ2YsQUFBa0M7QUFDbEMsQUFBWTs7Ozs7QUFDUixBQUFFLEFBQUMsZ0JBQUMsQUFBRyxJQUFDLEFBQU0sV0FBSyxBQUFLLEFBQUMsT0FBQyxBQUFDO0FBQ3ZCLHNCQUFNLElBQUksUUFBMkIsNEJBQUMsQUFBaUMsQUFBQyxBQUFDLEFBQzdFO0FBQUMsQUFDRCxBQUFLLEFBQUM7OztBQUpLLEFBQVc7Ozs0SUFJYixBQUFJLEFBQUMsQUFBQyxBQUNuQjtBQUFDLEFBQ0osQUFBQyxBQUNOOzs7TUFUK0IsQUFBTTtBQVNwQztBQVZELGdCQVVDOzs7Ozs7QUNqQkQsQUFHRzs7OztBQUNILGdCQUF1QixBQUFnQjtBQUNuQyxBQUFNLFNBQUMsQUFBTSxPQUFDLEFBQU0sQUFBQyxBQUFDO0FBQ3RCLEFBQU0sU0FBQyxBQUFNLE9BQUMsQUFBTSxPQUFDLEFBQVMsQUFBQyxBQUFDLEFBQ3BDO0FBQUM7QUFIRCxpQkFHQzs7Ozs7Ozs7Ozs7QUNIRCxpQkFBd0I7QUFDeEIsaUJBQXlCO0FBQ3pCLGlCQUE4QztBQUM5QyxpQkFBd0M7QUFFeEMsaUJBQXlCOzs7Ozs7QUNUekIsQUFHRzs7OztBQUNILGdCQUF1QixBQUFnQjtBQUNuQyxBQUFNLFNBQUMsQUFBSSxLQUFDLEFBQU0sQUFBQyxBQUFDO0FBQ3BCLEFBQU0sU0FBQyxBQUFJLEtBQUMsQUFBTSxPQUFDLEFBQVMsQUFBQyxBQUFDLEFBQ2xDO0FBQUM7QUFIRCxpQkFHQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgeyBQb25nIH0gZnJvbSAnQG1haW4vcG9uZy9pbmRleCc7XHJcblxyXG4vKipcclxuICogTWFpbi5cclxuICovXHJcbm5ldyBQb25nKCkuc3RhcnQoKTtcclxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gJ0BtYWluL2NvcmUvaW5kZXgnO1xyXG5pbXBvcnQgeyBmaW5hbCB9IGZyb20gJ0BtYWluL3N5c3RlbS9pbmRleCc7XHJcbmltcG9ydCB7IGZyb3plbiB9IGZyb20gJ0BtYWluL3N5c3RlbS9pbmRleCc7XHJcblxyXG4vKipcclxuICogUG9uZyBnYW1lLlxyXG4gKi9cclxuQGZpbmFsXHJcbkBmcm96ZW5cclxuZXhwb3J0IGNsYXNzIFBvbmcgaW1wbGVtZW50cyBHYW1lIHtcclxuICAgIC8qKlxyXG4gICAgICogU3RhcnQgZ2FtZS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignR2FtZSBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEluZGV4LlxyXG4gKi9cclxuZXhwb3J0ICogZnJvbSAnLi9Qb25nJztcclxuIiwiLyoqXHJcbiAqIElsbGVnYWwgaW5oZXJpdGFuY2UgZXhjZXB0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIElsbGVnYWxJbmhlcml0YW5jZUV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcclxufVxyXG4iLCIvKipcclxuICogSWxsZWdhbCBzdGF0ZSBleGNlcHRpb24uXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSWxsZWdhbFN0YXRlRXhjZXB0aW9uIGV4dGVuZHMgRXJyb3Ige1xyXG59XHJcbiIsImltcG9ydCB7IElsbGVnYWxJbmhlcml0YW5jZUV4Y2VwdGlvbiB9IGZyb20gJ0BtYWluL3N5c3RlbS9pbmRleCc7XHJcblxyXG4vKipcclxuICogUHJldmVudCBpbnN0YW5jZXMgZnJvbSBpbmhlcml0ZWQgY2xhc3Nlcy5cclxuICogQHBhcmFtIHRhcmdldCBDbGFzcy5cclxuICovXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmFsPFQgZXh0ZW5kcyB7IG5ldyAoLi4uYXJnczogYW55W10pOiBvYmplY3QgfT4odGFyZ2V0OiBUKTogVCB7XHJcbiAgICByZXR1cm4gY2xhc3MgRmluYWwgZXh0ZW5kcyB0YXJnZXQge1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgICBjb25zdHJ1Y3RvciguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgICAgICBpZiAobmV3LnRhcmdldCAhPT0gRmluYWwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbGxlZ2FsSW5oZXJpdGFuY2VFeGNlcHRpb24oJ0Nhbm5vdCBpbmhlcml0IGZyb20gZmluYWwgY2xhc3MnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBGcmVlemUgY29uc3RydWN0b3IgYW5kIHByb3RvdHlwZS5cclxuICogQHBhcmFtIHRhcmdldCBUYXJnZXQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZnJvemVuKHRhcmdldDogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIE9iamVjdC5mcmVlemUodGFyZ2V0KTtcclxuICAgIE9iamVjdC5mcmVlemUodGFyZ2V0LnByb3RvdHlwZSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFN5dGVtIGluZGV4LlxyXG4gKi9cclxuZXhwb3J0ICogZnJvbSAnLi9BbnlJbnRBcnJheSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZmluYWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2Zyb3plbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vSWxsZWdhbEluaGVyaXRhbmNlRXhjZXB0aW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9JbGxlZ2FsU3RhdGVFeGNlcHRpb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL0ludEFycmF5JztcclxuZXhwb3J0ICogZnJvbSAnLi9zZWFsZWQnO1xyXG5leHBvcnQgKiBmcm9tICcuL1VpbnRBcnJheSc7XHJcbiIsIi8qKlxyXG4gKiBTZWFsIGNvbnN0cnVjdG9yIGFuZCBwcm90b3R5cGUuXHJcbiAqIEBwYXJhbSB0YXJnZXQgVGFyZ2V0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlYWxlZCh0YXJnZXQ6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICBPYmplY3Quc2VhbCh0YXJnZXQpO1xyXG4gICAgT2JqZWN0LnNlYWwodGFyZ2V0LnByb3RvdHlwZSk7XHJcbn1cclxuIl19
