var interval = 1000; // how often to refresh our measurement
var lag = require('event-loop-lag')(interval);

console.log('event loop lag is %d', lag());
