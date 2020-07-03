var toobusy = require('toobusy-js');

// Set maximum lag to an aggressive value.
toobusy.maxLag(10);

// Set check interval to a faster value. This will catch more latency spikes
// but may cause the check to be too sensitive.
toobusy.interval(250);

// Get current maxLag or interval setting by calling without parameters.
var currentMaxLag = toobusy.maxLag(), interval = toobusy.interval();

toobusy.onLag(function(currentLag) {
  console.log("Event loop lag detected! Latency: " + currentLag + "ms");
});
