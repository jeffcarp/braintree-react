'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var DropIn = React.createClass({

  displayName: 'BraintreeDropIn',

  propTypes: {
    clientToken: React.PropTypes.string.isRequired,
    rootClassName: React.PropTypes.string,
    onPaymentMethodReceived: React.PropTypes.func,
    onReady: React.PropTypes.func,
    braintree: React.PropTypes.object.isRequired
  },

  getDefaultProps: function () {
    return {
      rootClassName: '__braintree-react__'
    };
  },

  getInitialState: function() {
    return  {
      braintreeInitialized: false,
      braintreeCheckout: null
    };
  },

  componentDidMount: function() {
    this.initializeBraintree(this.props);
  },

  componentWillUnmount: function() {
    this.teardownBraintree();
  },

  initializeBraintree: function(props) {
    if (!props.braintree || this.state.braintreeInitialized) return;

    this.setState({
      braintreeInitialized: true
    }, function () {
      props.braintree.setup(
        this.props.clientToken,
        'dropin', {
          container: ReactDOM.findDOMNode(this),
          onPaymentMethodReceived: props.onPaymentMethodReceived,
          onReady: function (checkout) {
            this.setState({
                braintreeCheckout: checkout
              },
              function() {
                if (props.onReady) {
                  props.onReady(checkout);
                }
              });
            }.bind(this)
          }
        );
    });
  },

  teardownBraintree: function () {
    if (!this.state.braintreeCheckout) return;

    this.state.braintreeCheckout.teardown(function() {
      this.setState({
          braintreeCheckout: null
        });
    });
  },

  render: function() {
    return React.DOM.div({
      className:this.props.rootClassName
    });
  }

});

module.exports = DropIn;
