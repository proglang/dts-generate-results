  
  /*
    Setup:
  */

  var RateLimiter = require("rolling-rate-limiter");

  var limiter = RateLimiter({
    interval: 1000 // in miliseconds
    maxInInterval: 10,
    minDifference: 100 // optional: the minimum time (in miliseconds) between any two actions
  });

  /*
    Action:
  */

  function attemptAction(userId) {

    // Argument should be a unique identifier for a user if one exists.
    // If none is provided, the limiter will not differentiate between users.
    var timeLeft = limiter(userId) 
    
    if (timeLeft > 0) {

      // limit was exceeded, action should not be allowed
      // timeLeft is the number of ms until the next action will be allowed
      // note that this can be treated as a boolean, since 0 is falsy
    
    } else {
    
      // limit was not exceeded, action should be allowed
    
    }

  }

  /*
    Note that the in-memory version can also operate asynchronously.
    The syntax is identical to the redis implementation below.
  */
