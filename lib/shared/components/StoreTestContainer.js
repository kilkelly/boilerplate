"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require("react-redux");

var _store = require("../store");

var _store2 = _interopRequireDefault(_store);

var _action_creators = require("../action_creators");

var actionCreators = _interopRequireWildcard(_action_creators);

var _StoreTest = require("./StoreTest");

var _StoreTest2 = _interopRequireDefault(_StoreTest);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
	return {
		text: state.get("text")
	};
};

var StoreTestContainer = (0, _reactRedux.connect)(mapStateToProps, actionCreators)(_StoreTest2.default);
exports.default = StoreTestContainer;