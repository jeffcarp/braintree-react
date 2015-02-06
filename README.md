# Braintree React Component

Easier than sticking cash into a dirty envelope and mailing it to a company.

[![Build Status](https://travis-ci.org/jeffcarp/braintree-react.svg?branch=master)](https://travis-ci.org/jeffcarp/braintree-react)

## Usage

First, install via npm:

```bash
npm install braintree-react
```

### Drop-In

If you're using CommonJS ([browserify](http://browserify.org/) or [Webpack](http://webpack.github.io/))

```html
var DropIn = require('braintree-react').DropIn;

React.render(
  <DropIn />,
  document.getElementById('react-root')
);
```

If you're not using a module loader

```html
<script src="node_modules/braintree-react/dist/braintree-react-standalone.js"></script>
<script>
var DropIn = braintreereact.DropIn;

React.render(
  <DropIn />,
  document.getElementById('react-root')
);
</script>
```

View example integrations [here](examples).

## Notes
- The use of `jsx` is not required. Both `<Dropin />` and `DropIn()` are valid.
- Drop-In is currently the only supported integration method.
  - If there is sufficient interest, we can start building out the custom integration. (Note that since January 2015, using anything other than DropIn means you can no longer be SAQ-A).

## To-Dos
- [x] Testing (sort of)
- [ ] Allow arbitrary configuration via props
- [ ] Add Braintree integrations beyond Drop-In (PayPal, Coinbase, etc)
