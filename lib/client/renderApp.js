"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require("react-redux");

var _routes = require("../shared/routes");

var _store = require("../shared/store");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var render = function render() {
	_reactDom2.default.render(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: _store2.default },
		_routes.routes
	), document.getElementById("root"));
};

// called everytime an action has been dispatched
_store2.default.subscribe(render);

// first time render
render();