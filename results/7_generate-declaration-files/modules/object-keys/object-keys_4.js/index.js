var keys = require('object-keys');
var assert = require('assert');
var obj = {
	a: true,
	b: true,
	c: true
};

assert.deepEqual(keys(obj), ['a', 'b', 'c']);
