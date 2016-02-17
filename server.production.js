'use strict';

var React = require("react")
var express = require("express")

var port = 3000
var app = express()	
var htmlContainer = require("./htmlContainer")

app.use(express.static("static"))

app.get("*", (req, res) => {		

	res.end(htmlContainer)

})	

app.listen(port, "localhost", function(error) {
  if (error) {
    console.error(error.stack);
  } else {	
    console.info('App running in production mode on port %s.', port);
  }
});

