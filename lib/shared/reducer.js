"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _immutable = require("immutable");

var _reduxImmutable = require("redux-immutable");

var _action_creators = require("./action_creators");

// Redux combineReducers treats state object as a plain JavaScript object.
// combineReducers created using redux-immutable uses Immutable.js API to iterate the state.


var reducer = function reducer() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? (0, _immutable.fromJS)({ text: "Hello from Redux store" }) : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case _action_creators.NEVER_CALLED:
			return state.set(text, "never called");
		default:
			return state;
	}
};

/*
const lightSwitch = (state = "OFF", action) => {
	switch(action.type) {
		case USE_LIGHT_SWITCH:
			return state === "OFF" ? "ON": "OFF"
		default:
			return state
	}
}

const todos = (state = fromJS([
							{
								text: "Make bed"
							},
							{
								text: "Buy groceries"
							}
						]), action) => {
	switch(action.type) {
		default:
			return state
	}
}

const reducer = combineReducers({
	lightSwitch,
	todos
})
*/

exports.default = reducer;