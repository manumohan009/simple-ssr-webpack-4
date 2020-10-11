(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/client/components/FirstTest/FirstTest.js":
/*!******************************************************!*\
  !*** ./src/client/components/FirstTest/FirstTest.js ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./FirstTest.scss */ \"./src/client/components/FirstTest/FirstTest.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar FirstTest = function (_Component) {\n    _inherits(FirstTest, _Component);\n\n    function FirstTest(props) {\n        _classCallCheck(this, FirstTest);\n\n        return _possibleConstructorReturn(this, (FirstTest.__proto__ || Object.getPrototypeOf(FirstTest)).call(this, props));\n    }\n\n    _createClass(FirstTest, [{\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { id: 'first-test' },\n                _react2.default.createElement(\n                    'h1',\n                    null,\n                    'FirstTest Component'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return console.log('clicked !');\n                        } },\n                    'Click Me'\n                )\n            );\n        }\n    }]);\n\n    return FirstTest;\n}(_react.Component);\n\nexports.default = FirstTest;\n\n//# sourceURL=webpack:///./src/client/components/FirstTest/FirstTest.js?");

/***/ }),

/***/ "./src/client/components/FirstTest/FirstTest.scss":
/*!********************************************************!*\
  !*** ./src/client/components/FirstTest/FirstTest.scss ***!
  \********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/components/FirstTest/FirstTest.scss?");

/***/ })

}]);