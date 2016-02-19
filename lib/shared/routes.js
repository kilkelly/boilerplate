"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.routes = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require("react-router");

var _createBrowserHistory = require("history/lib/createBrowserHistory");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _createMemoryHistory = require("history/lib/createMemoryHistory");

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _detectNode = require("detect-node");

var _detectNode2 = _interopRequireDefault(_detectNode);

var _App = require("./components/App");

var _App2 = _interopRequireDefault(_App);

var _Default = require("./components/Default");

var _Default2 = _interopRequireDefault(_Default);

var _StoreTestContainer = require("./components/StoreTestContainer");

var _StoreTestContainer2 = _interopRequireDefault(_StoreTestContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = _detectNode2.default ? (0, _createMemoryHistory2.default)() : (0, _createBrowserHistory2.default)();

var routes = exports.routes = _react2.default.createElement(
	_reactRouter.Router,
	{ history: history },
	_react2.default.createElement(
		_reactRouter.Route,
		{ path: "/", component: _App2.default },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _Default2.default }),
		_react2.default.createElement(_reactRouter.Route, { path: "storetest", component: _StoreTestContainer2.default })
	)
);