'use strict';

const assert = require('assert');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const bt = require('..');

describe('braintree-react', function () {

  it('Exposes a DropIn property which is a React component', function () {
    var DropInFactory = React.createFactory(bt.DropIn);
    var dropIn = DropInFactory({
      braintree: {}
    });
    assert(TestUtils.isElement(dropIn));
  });

});
