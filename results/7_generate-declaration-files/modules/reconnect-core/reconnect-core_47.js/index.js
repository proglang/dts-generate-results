var inject = require('reconnect-core');
var backoff = require('backoff');
var net = require('net');

// build you own reconnect module
var reconnect = inject(function () {
  // arguments are what you passed to .connect
  // this is the reconnect instance
  return net.connect.apply(null, arguments);
});

// Reconnect every 10 seconds
var myStrategy = {
  next: function() { return 10e3; },
  reset: function() { }
}

var re = reconnect({
  strategy: new backoff.Backoff(myStrategy),
  failAfter: Infinity,
  immediate: false
}, function (stream) {
  // stream = the stream you should consume
})
