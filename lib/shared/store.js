"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = require("redux");

var _immutable = require("immutable");

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require("redux-logger");

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _detectNode = require("detect-node");

var _detectNode2 = _interopRequireDefault(_detectNode);

var _DevTools = require("./components/DevTools");

var _DevTools2 = _interopRequireDefault(_DevTools);

var _reducer = require("./reducer");

var _reducer2 = _interopRequireDefault(_reducer);

var _action_creators = require("./action_creators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loggerMiddleware = (0, _reduxLogger2.default)();

var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default //, // lets us dispatch() functions
//loggerMiddleware // neat middleware that logs actions
);

var enhancer = (0, _redux.compose)(middleware, _DevTools2.default.instrument());

// if on the client-side then hydrate the store using data sent
// by the server
if (!_detectNode2.default) {
	console.log("hydrating client store from server");
	var store = (0, _redux.createStore)(_reducer2.default, (0, _immutable.fromJS)(window.__INITIAL_STATE__), enhancer);
}
// else we are on server-side and we don't hydrate the store initially
else {
		console.log("creating server store");
		var store = (0, _redux.createStore)(_reducer2.default,
		// initial states set to undefined as the reducers
		// themselves provide the default states
		//fromJS({
		// action creators go here
		// i.e. todos: undefined			
		//}),
		enhancer);
	}

// Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
if (module.hot) {
	module.hot.accept('./reducer', function () {
		return store.replaceReducer(require('./reducer').default /*.default if you use Babel 6+ */);
	});
}

//const store = store
exports.default = store;