# Braintree DropIn React Component

Easier than sticking cash in a dirty envelope and mailing it to a company.

## Usage

First, install via npm:

```bash
npm install braintree-react
```

If you're using CommonJS and Browserify or Webpack

```html
var DropIn = require('braintree-react').DropIn;

React.render(
  <DropIn />,
  document.getElementById('react-root')
);
```

If you're using a script tag

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
