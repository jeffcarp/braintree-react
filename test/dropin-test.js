jest.dontMock('../lib/dropin')

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

const DropIn = require('../lib/dropin')

describe('DropIn', () => {
  it('Calls braintree.setup on instantiation', () => {
    const braintree = require('braintree-web')
    braintree.setup = jest.genMockFunction()

    const paypalArgs = {
      singleUse: true
    }

    // Render a checkbox with label in the document
    const dropin = TestUtils.renderIntoDocument(
      <DropIn
        clientToken='bogus'
        braintree={braintree}
        paypal={paypalArgs}
        />
    )

    const dropinNode = ReactDOM.findDOMNode(dropin)
    expect(dropinNode.className).toEqual('__braintree-react__')

    const passedArgs = braintree.setup.mock.calls[0]

    expect(passedArgs[0]).toEqual('bogus')
    expect(passedArgs[1]).toEqual('dropin')
    expect(passedArgs[2].paypal).toEqual(paypalArgs)
  })
})
