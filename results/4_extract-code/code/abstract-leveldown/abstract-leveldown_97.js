const test = require('tape')
const tempy = require('tempy')
const suite = require('abstract-leveldown/test')
const YourDOWN = require('.')

suite({
  test: test,
  factory: function () {
    return new YourDOWN(tempy.directory())
  }
})
