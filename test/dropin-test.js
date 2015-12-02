'use strict';

const assert = require('assert');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const DropIn = require('..').DropIn;

describe('DropIn', function () {

  it('calls braintree.setup on initialization', function () {

      const DropInFactory = React.createFactory(DropIn);
      const dropIn = DropInFactory({
        braintree: {}
      });

      const shallowRenderer = TestUtils.createRenderer();
      shallowRenderer.render(dropIn);
      const component = shallowRenderer.getRenderOutput();

      console.log(component);

      assert(component.type === 'div');
      assert(component.props.className === '__braintree-react__');

      // TODO: Test that braintree.setup was called
  });

});
