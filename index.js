// braintree-web contains all JS interfaces to the Braintree API.

var braintree = require('braintree-web');

// DropIn is a factory that creates a DropIn React class using an arbitrary
// instance of React. This is to avoid shipping an extra copy of React.

var DropInFactory = function(reactInstance) {

  if (!reactInstance) {
    throw new Error('DropIn requires a reactInstance as its first parameter');
  }

  // Create the DropIn class

  var DropIn = reactInstance.createClass({

    displayName: 'BTDropIn',

    // todo: investigate turning this into clientTokenURL
    // (similar to braintree-angular)

    propTypes: {
      clientToken: React.PropTypes.string.isRequired
    },

    componentDidMount: function () {
      braintree.setup(
        this.props.clientToken,
        'dropin', {
          container: this.getDOMNode()
        }
      );
    },

    render: function() {
      return reactInstance.DOM.div();
    }

  });

  return DropIn;
};

module.exports = {
  DropIn: DropInFactory
};
