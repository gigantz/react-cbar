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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Item(props) {
    var icon = void 0;

    if (props.icon === "down") {
        icon = _react2.default.createElement(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
            _react2.default.createElement("path", { fill: "#c92663", d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" })
        );
    } else {
        icon = _react2.default.createElement(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
            _react2.default.createElement("path", { fill: "#3b84ba", d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" })
        );
    }

    return _react2.default.createElement(
        "div",
        { className: "cbar-item" },
        _react2.default.createElement(
            "span",
            { className: "cbar-code" },
            props.names ? props.name : props.code
        ),
        _react2.default.createElement(
            "span",
            { className: "cbar-value" },
            props.value
        ),
        _react2.default.createElement(
            "span",
            { className: "cbar-arrow" },
            icon
        )
    );
}

var Widget = function (_React$Component) {
    _inherits(Widget, _React$Component);

    function Widget(props) {
        _classCallCheck(this, Widget);

        var _this = _possibleConstructorReturn(this, (Widget.__proto__ || Object.getPrototypeOf(Widget)).call(this, props));

        var curries = _this.props.val.split(',');
        _this.state = {
            curries: curries,
            list: []
        };

        _this.parseXML = _this.parseXML.bind(_this);
        return _this;
    }

    _createClass(Widget, [{
        key: "parseXML",
        value: function parseXML() {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', 'https://www.cbar.az/other/azn-rates');
                xhr.send();

                xhr.addEventListener('load', function () {
                    var result = document.createElement('div');
                    result.innerHTML = xhr.responseText.replace(/<img/g, '<p');
                    resolve(result);
                });

                xhr.addEventListener('error', function () {
                    reject('Linkdə problem var!');
                });
            });
        }
    }, {
        key: "componentWillMount",
        value: function componentWillMount() {
            var _this2 = this;

            this.parseXML().then(function (result) {
                var list = [];
                _this2.state.curries.forEach(function (curr) {
                    var code = curr;
                    var elms = result.querySelectorAll('.date');

                    for (var i = 0; i < elms.length; i++) {
                        if (elms[i].innerHTML.indexOf(curr) > -1) {
                            var icon = elms[i].querySelector('.icon p').getAttribute('src');
                            if (icon.match(/down.png/)) {
                                icon = "down";
                            } else {
                                icon = "up";
                            }

                            list.push({
                                code: code,
                                name: elms[i].querySelector('.left').innerText,
                                icon: icon,
                                value: elms[i].querySelector('.rate').innerText
                            });
                        }
                    }
                });

                _this2.setState({
                    list: list
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var list = void 0;
            if (this.state.list.length || this.state.list.length > 0) {
                list = this.state.list.map(function (item, idx) {
                    return _react2.default.createElement(Item, { names: _this3.props.names, key: idx, code: item.code, name: item.name, value: item.value, icon: item.icon });
                });
            }

            var horizontal = this.props.horizontal ? 'horizontal' : '';

            return _react2.default.createElement(
                "div",
                { className: 'cbr-main ' + horizontal },
                this.state.list ? list : 'loading...'
            );
        }
    }]);

    return Widget;
}(_react2.default.Component);

exports.default = Widget;
;

Widget.propTypes = {
    val: _react.PropTypes.string.isRequired
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _Widget = __webpack_require__(1);

var _Widget2 = _interopRequireDefault(_Widget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_Widget2.default, { val: 'USD,RUB,EUR,TRY,GBP', horizontal: true }), document.querySelector('#cbar')); /**
                                                                                                                                                            *
                                                                                                                                                            * Currencies  val: 'string'
                                                                                                                                                            * Example: USD,RUB,EUR,GBP"
                                                                                                                                                            *
                                                                                                                                                            * View options: horizontal names
                                                                                                                                                            * Example: <Main val="USD,RUB,EUR,TRY" horizontal names />"
                                                                                                                                                            */

/***/ })
/******/ ]);