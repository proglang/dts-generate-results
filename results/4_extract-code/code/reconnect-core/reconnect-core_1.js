var inject = require('reconnect-core');
var net = require('net');

// build you own reconnect module
var reconnect = inject(function () {
  // arguments are what you passed to .connect
  // this is the reconnect instance
  return net.connect.apply(null, arguments);
});

var re = reconnect({
  // all options are optional
  initialDelay: 1e3,
  maxDelay: 30e3,
  strategy: 'fibonacci',      // available: fibonacci, exponential, or a custom backoff instance (see below)
  failAfter: Infinity,
  randomisationFactor: 0,
  immediate: false
}, function (stream) {
  // stream = the stream you should consume
})
.on('connect', function (con) {
  // con = underlying connection  
})
.on('reconnect', function (n, delay) {
  // n = current number of reconnect  
  // delay = delay used before reconnect
})
.on('disconnect', function (err) {
  // err = possible error  
})
.on('error', function (err) {
  // never forget
})
.connect(port)

// disconnect
re.disconnect();

// ...or prevent reconnecting
re.reconnect = false;

// reset the internal backoff timer
re.reset();
