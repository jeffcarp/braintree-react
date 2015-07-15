var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();

app.use(express.static(__dirname));

app.get('/braintree-web.js', function(req, res) {
  res.sendFile(path.resolve('node_modules/braintree-web/dist/braintree.js'));
});

app.get('/braintree-react.js', function(req, res) {
  res.sendFile(path.resolve('dist/braintree-react.js'));
});

app.get('/react-with-addons.js', function(req, res) {
  res.sendFile(path.resolve('node_modules/react/dist/react-with-addons.js'));
});

app.get('/JSXTransformer.js', function(req, res) {
  res.sendFile(path.resolve('node_modules/react/dist/JSXTransformer.js'));
});

module.exports = app;
