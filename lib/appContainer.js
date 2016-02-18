"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var appContainer = function appContainer(componentHtml, initialState) {
	return "<!DOCTYPE HTML>\n<html>\n\t<head>\n\t\t<title>Title goes here...</title>\n\t\t<meta charset=\"UTF-8\" />\n\t\t<script>\n\t\t\twindow.__INITIAL_STATE__ = " + initialState + "\n\t\t</script>\n\t</head>\n\t<body>\t\n\t\t<div id=\"root\">" + componentHtml + "</div>\n\t\t<script src=\"bundle.js\"></script>\n\t</body>\n</html>";
};

exports.default = appContainer;