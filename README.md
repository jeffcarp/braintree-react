# Braintree React Component [![Build Status](https://travis-ci.org/jeffcarp/braintree-react.svg?branch=master)](https://travis-ci.org/jeffcarp/braintree-react) [![npm version](http://img.shields.io/npm/v/braintree-react.svg?style=flat)](https://www.npmjs.org/package/braintree-react)

This is a React component that wraps the Drop-In integration from `braintree-web`. For issues and information concerning `braintree-web` in general, please [see that repo](https://github.com/braintree/braintree-web).

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

### `clientToken`

The client token used to perform the transaction.

### `onNonceReceived`

By default, once Drop-In receives a credit card nonce it submits the outer form. To intercept any nonce, use this callback:

```js
var nonceReceived = function(event, nonce) {
  console.log(nonce);
};
<DropIn braintree={braintree} onNonceReceived={nonceReceived} />
```

### `onReady`

A callback triggered when the DropIn iFrame has been written to the DOM, i.e. it's fully rendered and visible to the user.

### `onError`

See [JS SDK documentation](https://developers.braintreepayments.com/guides/client-sdk/javascript/v2#global-setup)

### `rootClassName`

The class name of the outer DOM container.
*Default*: `__braintree-react__`

## Notes
- The use of `jsx` is not required. Both `<Dropin />` and `DropIn()` are valid.
- Drop-In is currently the only supported integration method.
  - If there is sufficient interest, we can start building out the custom integration. (Note that since January 2015, using anything other than DropIn means you can no longer be SAQ-A).

## To-Dos
- [x] Testing (sort of)
- [ ] Allow arbitrary configuration via props
- [ ] Add Braintree integrations beyond Drop-In (PayPal, Coinbase, etc)
