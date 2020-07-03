var getDescriptors = require('object.getownpropertydescriptors');
var assert = require('assert');
/* when Object.getOwnPropertyDescriptors is not present */
delete Object.getOwnPropertyDescriptors;
var shimmedDescriptors = getDescriptors.shim();
assert.equal(shimmedDescriptors, getDescriptors);
assert.deepEqual(shimmedDescriptors(obj), getDescriptors(obj));
