var Q = require('q');

var runQ = promiseDag.implement({
  resolve: Q,
  reject: function(err){
    return Q.reject(err);
  },
  all: function(ps){
    return Q.all(ps);
  }
});
