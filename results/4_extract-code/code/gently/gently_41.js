if (global.GENTLY) require = GENTLY.hijack(require);

const sys = require('sys');
exports.hello = function() {
  sys.log('world');
};
