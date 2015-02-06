'use strict';

// braintree-web == Braintree JS API
var braintree = require('braintree-web');
var dummyClientToken = require('./dummy-client-token');

function getReact() {
  return global.React || require('react');
}

// DropIn is a factory that creates a DropIn React class using an arbitrary
// instance of React. This is to avoid shipping an extra copy of React.
var ReactInstance = getReact();

// Create the DropIn class
var DropIn = ReactInstance.createClass({

  displayName: 'BraintreeDropIn',

  // todo: investigate turning this into clientTokenURL
  // (similar to braintree-angular)
  propTypes: {
    clientToken: ReactInstance.PropTypes.string//.isRequired
  },

  // TODO: add ability to pass options to braintree.setup

  componentDidMount: function () {

    var clientToken;

    if (this.props.clientToken) {
      clienToken = this.props.clientToken;
    } else {
      console.warn('BraintreeDropIn usually needs a clientToken prop. Using dummy client token for now. This will not work in sandbox or production.');
      clientToken = dummyClientToken;
    }

    braintree.setup(
      clientToken,
      'dropin', {
        container: this.getDOMNode()
      }
    );
  },

  render: function() {
    return ReactInstance.DOM.div();
  }

});

module.exports = DropIn;
