var when = require('when');

var runWhen = promiseDag.implement({
  resolve: when,
  reject: function(err){
    return when.reject(err);
  },
  all: function(ps){
    return when.all(ps);
  }
});
