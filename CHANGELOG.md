# 3.0.0 - December 2015

- Removed the ability to rely on `window.react` - you now must use CommonJS to build `braintree-react`.
  - Removed standalone (browser global) build (was in `dist/braintree-react.js`)
  - Renamed `dist/braintree-react-cjs.js` to `dist/braintree-react.js`

# `2.0.0` - July 2015

- Moved to passing Braintree as a prop instead of bundling it (ascariandrea)
