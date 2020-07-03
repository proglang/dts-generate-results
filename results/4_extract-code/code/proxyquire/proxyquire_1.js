var get    = require('simple-get');
var assert = require('assert');

module.exports = function fetch (callback) {
  get('https://api/users', callback);
};
