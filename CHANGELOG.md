### 3.2.1 -- June 3, 2016

- Update dependencies for React v15 (pitluga)

### 3.2.0 -- June 2, 2016

- Makes work with React v15 [#29](https://github.com/jeffcarp/braintree-react/pull/29) (pitluga)
- Add `onError` prop and implementation (christensena)
- Fix a couple unmount bugs
  - Added `.bind(this)` to fix `this` bug in teardown (christensena)
  - Set `braintreeInitialized` back to false after teardown (I'm not sure if this was causing problems but it was a logic error)

### `3.1.0` - May 2016

- Add `defaultFirst` prop [#27](https://github.com/jeffcarp/braintree-react/pull/27) (goodslav)

### `3.0.1` - December 2015

- Replace `const` with `var` to obviate need for a transpiler [#18](https://github.com/jeffcarp/braintree-react/pull/18) (christensena)

# `3.0.0` - December 2015

- The `clientToken` prop is now required. `DropIn` will no longer fall back to using a fake client token.
- Removed the ability to rely on `window.react` - you now must use CommonJS to build `braintree-react`.
- Removed all pre-built builds (the `dist` directory has been removed).
- Moved from PhantomJS integration tests to Jest unit tests
  - Not ideal from a coverage perspective, but the current test setup was prohibitive
- Renamed `onNonceReceived` prop to `onPaymentMethodReceived` (christensena)
- Added `teardown` functionality to prevent multiple callback errors (christensena)

# `2.0.0` - July 2015

- Moved to passing Braintree as a prop instead of bundling it (ascariandrea)
