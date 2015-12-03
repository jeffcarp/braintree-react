# 3.0.0 - December 2015

- The `clientToken` prop is now required. `DropIn` will no longer fall back to using a fake client token.
- Moved to JSX and ES2015
- Removed the ability to rely on `window.react` - you now must use CommonJS to build `braintree-react`.
- Removed all pre-built builds (the `dist` directory has been removed).
- Moved from PhantomJS integration tests to Jest unit tests
  - Not ideal from a coverage perspective, but the current test setup was prohibitive

# `2.0.0` - July 2015

- Moved to passing Braintree as a prop instead of bundling it (ascariandrea)
