proxyquire.preserveCache();

var foo1 = proxyquire('./foo', stubs);
var foo2 = proxyquire('./foo', stubs);
var foo3 = require('./foo');

// foo1, foo2 and foo3 are the same instance
assert.equal(foo1, foo2);
assert.equal(foo1, foo3);
