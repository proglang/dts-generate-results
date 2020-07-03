// ./foo.js
const getCallerFile = require('get-caller-file');

module.exports = function() {
  return getCallerFile(); // figures out who called it
};
