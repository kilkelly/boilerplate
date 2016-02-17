'use strict';

var React = require("react")
var express = require("express")
var appContainer = require("./lib/appContainer").default

var port = 3000
var app = express()	

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
    console.info('App running in production mode on port %s.', port);
  }
});

