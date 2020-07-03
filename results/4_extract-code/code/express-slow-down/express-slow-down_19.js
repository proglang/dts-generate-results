const slowDown = require("express-slow-down");

app.enable("trust proxy"); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)

const resetPasswordSpeedLimiter = slowDown({
  windowMs: 15 * 60 * 1000, // 15 minutes
  delayAfter: 5, // allow 5 requests to go at full-speed, then...
  delayMs: 100 // 6th request has a 100ms delay, 7th has a 200ms delay, 8th gets 300ms, etc.
});

// only apply to POST requests to /reset-password/
app.post("/reset-password/", resetPasswordSpeedLimiter, function(req, res) {
  // handle /reset-password/ request here...
});
