var request = require('request');
var throttledRequest = require('throttled-request')(request);

client.itemSearch({
  request: throttledRequest
  // ...
});
