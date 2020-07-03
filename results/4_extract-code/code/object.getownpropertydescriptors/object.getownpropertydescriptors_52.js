var getDescriptors = require('object.getownpropertydescriptors');
var assert = require('assert');
/* when Object.getOwnPropertyDescriptors is present */
var shimmedDescriptors = getDescriptors.shim();
assert.notEqual(shimmedDescriptors, getDescriptors);
assert.deepEqual(shimmedDescriptors(obj), getDescriptors(obj));
