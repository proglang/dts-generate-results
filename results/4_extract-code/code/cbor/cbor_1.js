var cbor = require('cbor');
var assert = require('assert');

var encoded = cbor.encode(true); // returns <Buffer f5>
cbor.decodeFirst(encoded, function(error, obj) {
  // error != null if there was an error
  // obj is the unpacked object
  assert.ok(obj === true);
});

// Use integers as keys?
var m = new Map();
m.set(1, 2);
encoded = cbor.encode(m); // <Buffer a1 01 02>
