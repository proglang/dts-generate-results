var util = require('util')
  , Strategy = require('passport-strategy');

function CustomStrategy(...) {
  Strategy.call(this);
}

util.inherits(CustomStrategy, Strategy);
