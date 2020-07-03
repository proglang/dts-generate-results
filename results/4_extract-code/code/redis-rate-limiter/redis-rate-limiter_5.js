var rateLimiter = require('redis-rate-limiter');
var limit = rateLimiter.create({
  redis: client,
  key: function(x) { return x.id },
  rate: '100/minute'
});
