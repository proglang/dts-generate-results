var Promise = require('bluebird');

var runBluebird = promiseDag.implement({
  resolve: function(v){
    return Promise.resolve(v);
  },
  reject: function(err){
    return Promise.reject(err);
  },
  all: function(ps){
    return Promise.all(ps);
  }
}) 
