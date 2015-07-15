'use strict';
var React = require('react');
var braintree = require('braintree-web');
var BraintreeDropIn = require('.').DropIn;

React.render(
  BraintreeDropIn({ braintree: braintree }),
  document.getElementById('payment-form')
);
