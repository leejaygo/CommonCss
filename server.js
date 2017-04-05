process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var express = require('./config/express');

var app = express();
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("访问地址为 http://%s:%s", host, port)
 
});
module.exports = app;