var isTouchDevice = require('is-touch-device');
var assert = require('assert');

assert.equal(typeof isTouchDevice(), 'boolean');
