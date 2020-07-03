// all stubs resolved by proxyquireStrict will not call through by default
var proxyquireStrict = require('proxyquire').noCallThru();

// all stubs resolved by proxyquireNonStrict will call through by default
var proxyquireNonStrict = require('proxyquire');
