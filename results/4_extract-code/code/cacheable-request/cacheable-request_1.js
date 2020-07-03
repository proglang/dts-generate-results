const http = require('http');
const CacheableRequest = require('cacheable-request');

// Then instead of
const req = http.request('http://example.com', cb);
req.end();

// You can do
const cacheableRequest = new CacheableRequest(http.request);
const cacheReq = cacheableRequest('http://example.com', cb);
cacheReq.on('request', req => req.end());
// Future requests to 'example.com' will be returned from cache if still valid

// You pass in any other http.request API compatible method to be wrapped with cache support:
const cacheableRequest = new CacheableRequest(https.request);
const cacheableRequest = new CacheableRequest(electron.net);
