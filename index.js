// braintree-web == Braintree JS API

var braintree = require('braintree-web');

// Include a dummy client token for quick demos.

var dummyClientToken = "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJiNGEyZmY2NTFlZGJiZWQxZjc1NWNmMGQzMGQ0M2ExYTkyMmY0ZTVkNWJjY2M0YmNhMzA3ZjU0YmVjNGVmNjQ4fGNyZWF0ZWRfYXQ9MjAxNS0wMi0wMlQyMDo1Njo0My43MTY4NDE5OTMrMDAwMFx1MDAyNm1lcmNoYW50X2lkPWRjcHNweTJicndkanIzcW5cdTAwMjZwdWJsaWNfa2V5PTl3d3J6cWszdnIzdDRuYzgiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvZGNwc3B5MmJyd2RqcjNxbi9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwicGF5bWVudEFwcHMiOltdLCJjbGllbnRBcGlVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvZGNwc3B5MmJyd2RqcjNxbi9jbGllbnRfYXBpIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhdXRoVXJsIjoiaHR0cHM6Ly9hdXRoLnZlbm1vLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhbmFseXRpY3MiOnsidXJsIjoiaHR0cHM6Ly9jbGllbnQtYW5hbHl0aWNzLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb20ifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6dHJ1ZSwidGhyZWVEU2VjdXJlIjp7Imxvb2t1cFVybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy9kY3BzcHkyYnJ3ZGpyM3FuL3RocmVlX2Rfc2VjdXJlL2xvb2t1cCJ9LCJwYXlwYWxFbmFibGVkIjp0cnVlLCJwYXlwYWwiOnsiZGlzcGxheU5hbWUiOiJBY21lIFdpZGdldHMsIEx0ZC4gKFNhbmRib3gpIiwiY2xpZW50SWQiOm51bGwsInByaXZhY3lVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vcHAiLCJ1c2VyQWdyZWVtZW50VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3RvcyIsImJhc2VVcmwiOiJodHRwczovL2Fzc2V0cy5icmFpbnRyZWVnYXRld2F5LmNvbSIsImFzc2V0c1VybCI6Imh0dHBzOi8vY2hlY2tvdXQucGF5cGFsLmNvbSIsImRpcmVjdEJhc2VVcmwiOm51bGwsImFsbG93SHR0cCI6dHJ1ZSwiZW52aXJvbm1lbnROb05ldHdvcmsiOnRydWUsImVudmlyb25tZW50Ijoib2ZmbGluZSIsInVudmV0dGVkTWVyY2hhbnQiOmZhbHNlLCJtZXJjaGFudEFjY291bnRJZCI6InN0Y2gybmZkZndzenl0dzUiLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwiY29pbmJhc2VFbmFibGVkIjpmYWxzZSwibWVyY2hhbnRJZCI6ImRjcHNweTJicndkanIzcW4iLCJ2ZW5tbyI6Im9mZmxpbmUiLCJhcHBsZVBheSI6eyJzdGF0dXMiOiJtb2NrIiwiY291bnRyeUNvZGUiOiJVUyIsImN1cnJlbmN5Q29kZSI6IlVTRCIsIm1lcmNoYW50SWRlbnRpZmllciI6Im1lcmNoYW50LmNvbS5icmFpbnRyZWVwYXltZW50cy5kZXYtZGNvcGVsYW5kIiwic3VwcG9ydGVkTmV0d29ya3MiOlsidmlzYSIsIm1hc3RlcmNhcmQiLCJhbWV4Il19fQ==";


// DropIn is a factory that creates a DropIn React class using an arbitrary
// instance of React. This is to avoid shipping an extra copy of React.

var DropInFactory = function(reactInstance) {

  if (!reactInstance) {
    throw new Error('DropIn requires a React instance as its first parameter');
  }

  // Create the DropIn class

  var DropIn = reactInstance.createClass({

    displayName: 'BraintreeDropIn',

    // todo: investigate turning this into clientTokenURL
    // (similar to braintree-angular)

    propTypes: {
      clientToken: React.PropTypes.string//.isRequired
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
      return reactInstance.DOM.div();
    }

  });

  return DropIn;
};

module.exports = {
  DropIn: DropInFactory
};
