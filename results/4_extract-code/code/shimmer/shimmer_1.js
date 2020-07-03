var http = require('http');
var shimmer = require('shimmer');

shimmer.wrap(http, 'request', function (original) {
  return function () {
    console.log("Starting request!");
    var returned = original.apply(this, arguments)
    console.log("Done setting up request -- OH YEAH!");
    return returned;
  };
});
