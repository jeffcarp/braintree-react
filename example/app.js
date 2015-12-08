'use strict';
const React = require('react');
const ReactDOM = require('react-dom');
const DropIn = require('..').DropIn;
const braintree = require('braintree-web');
const clientToken = require('./dummy-client-token');

const PaymentForm = React.createClass({

  getInitialState: function () {
    return {
      show: true
    };
  },

  componentWillMount: function () {
    var self = this;
    setInterval(function () {
      self.setState({
        show: !self.state.show
      });
    }, 20e3);
  },
  
  onReady: function () {
    console.log('Drop-In ready');
  },

  onError: function (err) {
    console.error(err);
  },

  onPaymentMethodReceived: function (payload) {
    console.log(payload);

    // Now that you have a nonce, send it to your
    // server to create a payment method or a transaction
  },

  render: function() {
    var form = (
        <form action="/transactions" method="POST">
          <DropIn 
            braintree={braintree} 
            clientToken={clientToken}
            onReady={this.onReady}
            onError={this.onError}
            onPaymentMethodReceived={this.onPaymentMethodReceived}  
            />
          <input type="submit" value="Buy for $14" />
        </form>
    );

    if (!this.state.show) {
      form = null;
    }

    return (
      <div>
        <p>{this.state.show ? 'show' : 'hide'}</p>
        {form}
      </div>
    );
  }
});
 
ReactDOM.render(
  <PaymentForm />,
  document.getElementById('payment-form')
);
