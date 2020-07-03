var sinon = require('sinon');
var should = require('should');
require('should-sinon');

it('should get number of calls', function() {
  var callback = sinon.spy();
  callback();
  callback.should.be.calledOnce();
});
