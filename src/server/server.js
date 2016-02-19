'use strict';

import React  from "react"
import express  from "express"
import { match, RouterContext } from "react-router"
import { renderToString }  from "react-dom/server"
import { Provider } from "react-redux"
import { routes }  from "../shared/routes"
import store from "../shared/store"

const port = 3000
const app = express()	

//********* HOT RELOADING ****************
if (process.env.NODE_ENV === "development") {
	const webpack = require("webpack")
	const config = require("../../webpack.config.development.js")
	const devMiddleware = require("webpack-dev-middleware")
	const hotMiddleware = require("webpack-hot-middleware")

	const compiler = webpack(config)

	app.use(devMiddleware(compiler, { 
		noInfo: true,
		publicPath: config.output.publicPath,
		stats: {
			colors: true
		}
	})); 
	app.use(hotMiddleware(compiler))

	console.log("Webpack middleware loaded")		
}	
//********* HOT RELOADING ****************


app.use("/dist", express.static('dist'));
app.use("/static", express.static('static'));
//		OR
//app.use("/dist", express.static(__dirname + '/../../dist'));
//app.use("/static", express.static(__dirname + '/../../static'));

app.get("*", (req, res) => {		

	// React Router URL matching and handling
	match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {						
		if (error) {
			res.status(500).send(error.message);
		}
		else if (redirectLocation){
			console.log("redirect")
			res.redirect(302, redirectLocation.pathname + redirectLocation.search)
		} else if (renderProps) {

			let componentHtml = renderToString(<Provider store={store}><RouterContext {...renderProps} /></Provider>)				
			let initialState = JSON.stringify(store.getState())				

			let html = `
			<!DOCTYPE HTML>
			<html>
				<head>
					<title>Title goes here...</title>
					<meta charset="UTF-8" />
					<script>
						window.__INITIAL_STATE__ = ${initialState}
					</script>
				</head>
				<body>
					<div id="root">${componentHtml}</div>				
					<script src="/dist/manifest${process.env.MIN_EXT}.js"></script>
					<script src="/dist/vendor${process.env.MIN_EXT}.js"></script>					
					<script src="/dist/app${process.env.MIN_EXT}.js"></script>
				</body>
			</html>`

			res.status(200).send(html)
		} else {
			res.status(404).send("Not found")
		}			
	})

})

app.listen(port, "localhost", function(error) {
  if (error) {
    console.error(error.stack);
  } else {
    console.info(`App running in ${process.env.NODE_ENV} mode on port ${port}.`)
  }
})

