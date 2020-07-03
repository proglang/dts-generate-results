var keys = require('object-keys');
var assert = require('assert');
/* when Object.keys is present */
var shimmedKeys = keys.shim();
assert.equal(shimmedKeys, Object.keys);
assert.deepEqual(Object.keys(obj), keys(obj));
