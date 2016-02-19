'use strict';

var express = require('express');
var app = express();

//app.use("/dist", express.static(__dirname + '/dist'));
//app.use("/static", express.static(__dirname + '/static'));
//app.use("/static2", express.static(__dirname + '/static2'));
console.log(__dirname);
app.use("/dist", express.static(__dirname + '/../dist'));

app.listen(process.env.PORT || 3000, function (error) {
  if (error) {
    console.error(error.stack);
  } else {
    console.info("Basic server listening on port 3000");
  }
});