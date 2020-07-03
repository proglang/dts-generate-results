const test = require('tape')
const suite = require('abstract-leveldown/test')
const YourDOWN = require('.')

const testCommon = suite.common({
  test: test,
  factory: function () {
    return new YourDOWN()
  }
})

suite(testCommon)
