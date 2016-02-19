'use strict';

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _reactRouter = require("react-router");

var _server = require("react-dom/server");

var _reactRedux = require("react-redux");

var _routes = require("../shared/routes");

var _store = require("../shared/store");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 3000;
var app = (0, _express2.default)();

//********* HOT RELOADING ****************
if (process.env.NODE_ENV === "development") {
	var webpack = require("webpack");
	var config = require("../../webpack.config.development.js");
	var devMiddleware = require("webpack-dev-middleware");
	var hotMiddleware = require("webpack-hot-middleware");

	var compiler = webpack(config);

	app.use(devMiddleware(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath,
		stats: {
			colors: true
		}
	}));
	app.use(hotMiddleware(compiler));

	console.log("Webpack middleware loaded");
}
//********* HOT RELOADING ****************

app.use("/dist", _express2.default.static('dist'));
app.use("/static", _express2.default.static('static'));
//		OR
//app.use("/dist", express.static(__dirname + '/../../dist'));
//app.use("/static", express.static(__dirname + '/../../static'));

app.get("*", function (req, res) {

	// React Router URL matching and handling
	(0, _reactRouter.match)({ routes: _routes.routes, location: req.url }, function (error, redirectLocation, renderProps) {
		if (error) {
			res.status(500).send(error.message);
		} else if (redirectLocation) {
			console.log("redirect");
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (renderProps) {

			var componentHtml = (0, _server.renderToString)(_react2.default.createElement(
				_reactRedux.Provider,
				{ store: _store2.default },
				_react2.default.createElement(_reactRouter.RouterContext, renderProps)
			));
			var initialState = JSON.stringify(_store2.default.getState());

			var html = "\n\t\t\t<!DOCTYPE HTML>\n\t\t\t<html>\n\t\t\t\t<head>\n\t\t\t\t\t<title>Title goes here...</title>\n\t\t\t\t\t<meta charset=\"UTF-8\" />\n\t\t\t\t\t<script>\n\t\t\t\t\t\twindow.__INITIAL_STATE__ = " + initialState + "\n\t\t\t\t\t</script>\n\t\t\t\t</head>\n\t\t\t\t<body>\n\t\t\t\t\t<div id=\"root\">" + componentHtml + "</div>\t\t\t\t\n\t\t\t\t\t<script src=\"/dist/manifest" + process.env.MIN_EXT + ".js\"></script>\n\t\t\t\t\t<script src=\"/dist/vendor" + process.env.MIN_EXT + ".js\"></script>\t\t\t\t\t\n\t\t\t\t\t<script src=\"/dist/app" + process.env.MIN_EXT + ".js\"></script>\n\t\t\t\t</body>\n\t\t\t</html>";

			res.status(200).send(html);
		} else {
			res.status(404).send("Not found");
		}
	});
});

app.listen(port, "localhost", function (error) {
	if (error) {
		console.error(error.stack);
	} else {
		console.info("App running in " + process.env.NODE_ENV + " mode on port " + port + ".");
	}
});