'use strict'

var React = require('react')
var ReactDOM = require('react-dom')

var DropIn = React.createClass({

  displayName: 'BraintreeDropIn',

  propTypes: {
    clientToken: React.PropTypes.string.isRequired,
    rootClassName: React.PropTypes.string,
    onPaymentMethodReceived: React.PropTypes.func,
    onReady: React.PropTypes.func,
    braintree: React.PropTypes.object.isRequired,
    defaultFirst: React.PropTypes.bool,
    onError: React.PropTypes.func
  },

  getDefaultProps: function () {
    return {
      rootClassName: '__braintree-react__',
      defaultFirst: false
    }
  },

  getInitialState: function () {
    return {
      braintreeInitialized: false,
      braintreeCheckout: null
    }
  },

  componentDidMount: function () {
    if (!this.props.braintree || this.state.braintreeInitialized) return

    this.setState({
      braintreeInitialized: true
    }, function () {
      this.props.braintree.setup(
        this.props.clientToken,
        'dropin', {
          defaultFirst: this.props.defaultFirst,
          container: ReactDOM.findDOMNode(this.refs.wrapper),
          onPaymentMethodReceived: this.props.onPaymentMethodReceived,
          onReady: function (checkout) {
            this.setState({
              braintreeCheckout: checkout
            }, function () {
              if (this.props.onReady) {
                this.props.onReady(checkout)
              }
            }.bind(this))
          }.bind(this),
          onError: this.props.onError
        }
      )
    }.bind(this))
  },

  componentWillUnmount: function () {
    if (!this.state.braintreeCheckout) return

    this.state.braintreeCheckout.teardown(function () {
      this.setState({
        braintreeInitialized: false,
        braintreeCheckout: null
      })
    }.bind(this))
  },

  render: function () {
    return React.DOM.div({
      ref: 'wrapper',
      className: this.props.rootClassName
    })
  }
})

module.exports = DropIn
