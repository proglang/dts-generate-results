var proxyquire = require('proxyquire').noCallThru();

// all methods for foo's dependencies will have to be stubbed out since proxyquire will not call through
var foo = proxyquire('./foo', stubs);

proxyquire.callThru();

// only some methods for foo's dependencies will have to be stubbed out here since proxyquire will now call through
var foo2 = proxyquire('./foo', stubs);
