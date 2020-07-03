  
  /*
    Setup:
  */

  var RateLimiter = require("rolling-rate-limiter");
  var Redis = require("redis");
  var client = Redis.createClient(config);

  var limiter = RateLimiter({
    redis: client,
    namespace: "UserLoginLimiter", // optional: allows one redis instance to handle multiple types of rate limiters. defaults to "rate-limiter-{string of 8 random characters}"
    interval: 1000,
    maxInInterval: 10,
    minDifference: 100
  });

  /*
    Action:
  */
  
  function attemptAction(userId, cb) {
    limiter(userId, function(err, timeLeft, actionsLeft) {
      if (err) {
        // redis failed or similar.
      } else if (timeLeft) {
        // limit was exceeded, action should not be allowed
      } else {
        // limit was not exceeded, action should be allowed
      }
    });
  }

