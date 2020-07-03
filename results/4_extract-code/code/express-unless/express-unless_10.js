module.exports = function (middlewareOptions) {
  var mymid = function (req, res, next) {

  };

  mymid.unless = require('express-unless');

  return mymid;
};
