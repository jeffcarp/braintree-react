!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.braintreereact=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// braintree-web == Braintree JS API

module.exports = {
  DropIn: require('./lib/dropin')
};

},{"./lib/dropin":2}],2:[function(require,module,exports){
(function (global){
'use strict';

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
    clientToken: ReactInstance.PropTypes.string,
    rootClassName: ReactInstance.PropTypes.string,
    onNonceReceived: ReactInstance.PropTypes.func,
    onReady: ReactInstance.PropTypes.func,
    braintree: ReactInstance.PropTypes.object.isRequired
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
        var clientToken;
        if (this.props.clientToken) {
          clientToken = this.props.clientToken;
        } else {
          console.warn('BraintreeDropIn usually needs a clientToken prop. Using dummy client token for now. This will not work in sandbox or production.');
          clientToken = dummyClientToken;
        }
        props.braintree.setup(
          clientToken,
          'dropin', {
            container: this.getDOMNode(),
            paymentMethodNonceReceived: this.props.onNonceReceived,
            onReady: this.props.onReady
          }
        );
      });
    }
  },

  render: function() {
    return ReactInstance.DOM.div({
      className: this.props.rootClassName
    });
  }

});

module.exports = DropIn;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./dummy-client-token":3,"react":undefined}],3:[function(require,module,exports){
module.exports = "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJiNGEyZmY2NTFlZGJiZWQxZjc1NWNmMGQzMGQ0M2ExYTkyMmY0ZTVkNWJjY2M0YmNhMzA3ZjU0YmVjNGVmNjQ4fGNyZWF0ZWRfYXQ9MjAxNS0wMi0wMlQyMDo1Njo0My43MTY4NDE5OTMrMDAwMFx1MDAyNm1lcmNoYW50X2lkPWRjcHNweTJicndkanIzcW5cdTAwMjZwdWJsaWNfa2V5PTl3d3J6cWszdnIzdDRuYzgiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvZGNwc3B5MmJyd2RqcjNxbi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwicGF5bWVudEFwcHMiOltdLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvZGNwc3B5MmJyd2RqcjNxbi9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9jbGllbnQtYW5hbHl0aWNzLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20ifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6dHJ1ZSwidGhyZWVEU2VjdXJlIjp7Imxvb2t1cFVybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9kY3BzcHkyYnJ3ZGpyM3FuL3RocmVlX2Rfc2VjdXJlL2xvb2t1cCJ9LCJwYXlwYWxFbmFibGVkIjp0cnVlLCJwYXlwYWwiOnsiZGlzcGxheU5hbWUiOiJBY21lIFdpZGdldHMsIEx0ZC4gKFNhbmRib3gpIiwiY2xpZW50SWQiOm51bGwsInByaXZhY3lVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vcHAiLCJ1c2VyQWdyZWVtZW50VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3RvcyIsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImFsbG93SHR0cCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOnRydWUsImVudmlyb25tZW50Ijoib2ZmbGluZSIsInVudmV0dGVkTWVyY2hhbnQiOmZhbHNlLCJtZXJjaGFudEFjY291bnRJZCI6InN0Y2gybmZkZndzenl0dzUiLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwiY29pbmJhc2VFbmFibGVkIjpmYWxzZSwibWVyY2hhbnRJZCI6ImRjcHNweTJicndkanIzcW4iLCJ2ZW5tbyI6Im9mZmxpbmUiLCJhcHBsZVBheSI6eyJzdGF0dXMiOiJtb2NrIiwiY291bnRyeUNvZGUiOiJVUyIsImN1cnJlbmN5Q29kZSI6IlVTRCIsIm1lcmNoYW50SWRlbnRpZmllciI6Im1lcmNoYW50LmNvbS5icmFpbnRyZWVwYXltZW50cy5kZXYtZGNvcGVsYW5kIiwic3VwcG9ydGVkTmV0d29ya3MiOlsidmlzYSIsIm1hc3RlcmNhcmQiLCJhbWV4Il19fQ==";

},{}]},{},[1])(1)
});