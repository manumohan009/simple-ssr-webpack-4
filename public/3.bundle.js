/*! For license information please see 3.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./src/client/pages/UsersListPage/UsersListPage.js":function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _actions = __webpack_require__(/*! ../../actions */ \"./src/client/actions/index.js\");\n\n__webpack_require__(/*! ./UsersListPage.scss */ \"./src/client/pages/UsersListPage/UsersListPage.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar UsersListPage = function (_Component) {\n    _inherits(UsersListPage, _Component);\n\n    function UsersListPage() {\n        _classCallCheck(this, UsersListPage);\n\n        return _possibleConstructorReturn(this, (UsersListPage.__proto__ || Object.getPrototypeOf(UsersListPage)).apply(this, arguments));\n    }\n\n    _createClass(UsersListPage, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            this.props.fetchUsers();\n        }\n    }, {\n        key: 'renderUsers',\n        value: function renderUsers() {\n            return this.props.users.map(function (user) {\n                return _react2.default.createElement(\n                    'li',\n                    { key: user.id },\n                    user.name\n                );\n            });\n        }\n    }, {\n        key: 'head',\n        value: function head() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'title',\n                    null,\n                    this.props.users.length + ' Users Loaded'\n                )\n            );\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { id: 'users-list-page' },\n                this.head(),\n                'Here\\'s a big list of users:',\n                _react2.default.createElement(\n                    'ul',\n                    null,\n                    this.renderUsers()\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            _this2.props.history.push('/');\n                        } },\n                    'Go to Home page'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            _this2.props.history.push('/contact-us');\n                        } },\n                    'Go to Contact us page'\n                ),\n                _react2.default.createElement('br', null)\n            );\n        }\n    }]);\n\n    return UsersListPage;\n}(_react.Component);\n\nfunction mapStateToProps(state) {\n    return { users: state.users };\n}\n\n// function loadData(store) {\n//     return store.dispatch(fetchUsers());\n// }\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersListPage);\n\n//# sourceURL=webpack:///./src/client/pages/UsersListPage/UsersListPage.js?")},"./src/client/pages/UsersListPage/UsersListPage.scss":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/client/pages/UsersListPage/UsersListPage.scss?")}}]);