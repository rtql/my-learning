const { expect } = require('chai')
const { sum } = require('./helpers')

describe.only('lesson 3.3', () => {
  it('function return a sum of arguments', () => {
    expect(sum(2,5,6)).to.equal(13)
  })
})