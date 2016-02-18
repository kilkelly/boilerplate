"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.routes = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _App = require("./components/App");

var _App2 = _interopRequireDefault(_App);

var _Default = require("./components/Default");

var _Default2 = _interopRequireDefault(_Default);

var _StoreTestContainer = require("./components/StoreTestContainer");

var _StoreTestContainer2 = _interopRequireDefault(_StoreTestContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = exports.routes = _react2.default.createElement(
	_reactRouter.Router,
	null,
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: "/", component: _App2.default },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _Default2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "storetest", component: _StoreTestContainer2.default })
	)
);