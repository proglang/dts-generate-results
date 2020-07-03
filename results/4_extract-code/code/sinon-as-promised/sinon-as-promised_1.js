var sinon  = require('sinon')
require('sinon-as-promised')

sinon.stub().resolves('foo')().then(function (value) {
  assert.equal(value, 'foo')
})
