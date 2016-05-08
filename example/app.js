'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const DropIn = require('..').DropIn
const braintree = require('braintree-web')
const clientToken = require('./dummy-client-token')

const PaymentForm = React.createClass({

  onReady: function () {
    console.log('Drop-In ready')
  },

  onError: function (err) {
    console.error(err)
  },

  onPaymentMethodReceived: function (payload) {
    console.log(payload)

    // Now that you have a nonce, send it to your
    // server to create a payment method or a transaction
  },

  render: function () {
    return (
      <form action='/transactions' method='POST'>
        <DropIn
          braintree={braintree}
          clientToken={clientToken}
          onReady={this.onReady}
          onError={this.onError}
          onPaymentMethodReceived={this.onPaymentMethodReceived}
          />
        <input type='submit' value='Buy for $14' />
      </form>
    )
  }
})

ReactDOM.render(
  <PaymentForm />,
  document.getElementById('payment-form')
)
