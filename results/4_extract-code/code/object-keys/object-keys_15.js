var keys = require('object-keys');
var assert = require('assert');
/* when Object.keys is not present */
delete Object.keys;
var shimmedKeys = keys.shim();
assert.equal(shimmedKeys, keys);
assert.deepEqual(Object.keys(obj), keys(obj));
