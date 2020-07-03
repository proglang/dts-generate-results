var isObject = require('is-object');
var assert = require('assert');

assert.equal(isObject(null), false);
assert.equal(isObject({}), true);
