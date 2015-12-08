'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const DropIn = React.createClass({

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
      braintreeInitialized: false
    };
  },

  componentDidMount: function() {
    this.initializeBraintree(this.props);
  },

  componentWillReceiveProps: function(nextProps) {
    this.initializeBraintree(nextProps);
  },

  initializeBraintree: function(props) {
    props = props || this.props;
    if (props.braintree && !this.state.braintreeInitialized) {
      this.setState({
        braintreeInitialized: true
      }, function() {
        props.braintree.setup(
          this.props.clientToken,
          'dropin', {
            container: ReactDOM.findDOMNode(this),
            onPaymentMethodReceived: this.props.onPaymentMethodReceived,
            onReady: this.props.onReady
          }
        );
      });
    }
  },

  render: function() {
    return <div className={this.props.rootClassName}></div>;
  }

});

module.exports = DropIn;
