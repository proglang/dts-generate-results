var proxyquire = require('proxyquire').noCallThru();
var assert = require('assert');

var fetch = proxyquire('./get', {
  'simple-get': function (url, callback) {
    process.nextTick(function () {
      callback(null, { statusCode: 200 })
    })
  }
});

fetch(function (err, res) {
  assert(res.statusCode, 200)
});
