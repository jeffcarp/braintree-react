'use strict';
var React = require('react');
var BraintreeDropIn = require('.').DropIn;

React.render(
  BraintreeDropIn(),
  document.getElementById('payment-form')
);
