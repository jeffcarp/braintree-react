# Braintree React Component [![Build Status](https://travis-ci.org/jeffcarp/braintree-react.svg?branch=master)](https://travis-ci.org/jeffcarp/braintree-react) [![npm version](http://img.shields.io/npm/v/braintree-react.svg?style=flat)](https://www.npmjs.org/package/braintree-react)

> _Easier than sticking cash into a dirty envelope and mailing it to a company._

This is a React component that wraps the Drop-In integration from `braintree-web`. For issues and information concerning `braintree-web` in general, please [see that repo](https://github.com/braintree/braintree-web).

## Install

```bash
npm install braintree-react
```

## Run example

```bash
npm run example
```

And visit [http://localhost:8000/example.html](http://localhost:8000/example.html) in your browser.

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

If you're not using a module loader:

```html
<script src="node_modules/braintree-react/dist/braintree-react-standalone.js"></script>
<script src="node_modules/braintree-web/dist/braintree.js"></script>
<script>
var DropIn = braintreereact.DropIn;

React.render(
  <DropIn braintree={braintree} />,
  document.getElementById('react-root')
);
</script>
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
