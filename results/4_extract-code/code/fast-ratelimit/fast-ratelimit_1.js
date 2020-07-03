var FastRateLimit = require("fast-ratelimit").FastRateLimit;

var messageLimiter = new FastRateLimit({
  threshold : 20, // available tokens over timespan
  ttl       : 60  // time-to-live value of token bucket (in seconds)
});
