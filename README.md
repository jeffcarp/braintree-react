# Braintree React Component [![Build Status](https://travis-ci.org/jeffcarp/braintree-react.svg?branch=master)](https://travis-ci.org/jeffcarp/braintree-react) [![npm version](http://img.shields.io/npm/v/braintree-react.svg?style=flat)](https://www.npmjs.org/package/braintree-react)

This is a React component that wraps the Drop-In integration from `braintree-web`. For issues and information concerning `braintree-web` in general, please see [`braintree/braintree-web`](https://github.com/braintree/braintree-web).

> Disclaimer: this is not an official Braintree module.

## Install

```bash
npm install braintree-react
```

## Drop-In

If you're using CommonJS ([browserify](http://browserify.org/) or [Webpack](http://webpack.github.io/)):

```js
var DropIn = require('braintree-react').DropIn;
var braintree = require('braintree-web');

React.render(
  <DropIn braintree={braintree} />,
  document.getElementById('react-root')
);
```

## Props

### `braintree` (required)

This should be `braintree-web`.

### `clientToken` (required)

The client token used to set up the integration. Learn [how to generate a client token](https://developers.braintreepayments.com/start/hello-server#generate-a-client-token).

### `onPaymentMethodReceived`

By default, once Drop-In receives a credit card nonce it submits the outer form. To intercept any nonce, use this callback:

```js
var nonceReceived = function (payload) {
  console.log(nonce);
};
<DropIn braintree={braintree} onPaymentMethodReceived={nonceReceived} />
```

[See `onPaymentMethodReceived` in Braintree docs](https://developers.braintreepayments.com/guides/client-sdk/javascript/v2#global-setup)

### `onReady`

A callback triggered when the DropIn iFrame has been written to the DOM, i.e. it's fully rendered and visible to the user.

### `onError`

See [JS SDK documentation](https://developers.braintreepayments.com/guides/client-sdk/javascript/v2#global-setup)

### `rootClassName`

The class name of the outer DOM container.

*Default*: `__braintree-react__`

## Notes

- Drop-In is currently the only supported integration method.
  - If there is sufficient interest, we can start building out the custom integration. (Note that as of January 2015, using anything other than DropIn means you can no longer be SAQ A).
