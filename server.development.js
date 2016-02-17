'use strict';

require('babel-register');
var React = require("react")
var express = require("express")
var appContainer = require("./src/appContainer").default

var port = 3000
var app = express()	

//********* HOT RELOADING ****************
var webpack = require("webpack")
var config = require("./webpack.config.development.js")
var devMiddleware = require("webpack-dev-middleware")
var hotMiddleware = require("webpack-hot-middleware")

var compiler = webpack(config)

app.use(devMiddleware(compiler, { 
	noInfo: true,
	publicPath: config.output.publicPath,
	stats: {
		colors: true
	}
})); 
app.use(hotMiddleware(compiler))

console.log("Webpack middleware loaded")		
//********* HOT RELOADING ****************

app.use(express.static("static"))

app.get("*", (req, res) => {		

	res.status(200).send(
		appContainer("<h1>Hello World</h1>")
	)

})	

app.listen(port, "localhost", function(error) {
  if (error) {
    console.error(error.stack);
  } else {
    console.info('App running in development mode on port %s.', port)
  }
})

