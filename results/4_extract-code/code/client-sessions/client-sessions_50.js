var sessions = require("client-sessions");
app.use(sessions({
  cookieName: 'mySession',
  requestKey: 'forcedSessionKey', // requestKey overrides cookieName for the key name added to the request object.
  secret: 'blargadeeblargblarg', // should be a large unguessable string or Buffer
  duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
}));

app.use(function(req, res, next) {
  // requestKey forces the session information to be
  // accessed via forcedSessionKey
  if (req.forcedSessionKey.seenyou) {
    res.setHeader('X-Seen-You', 'true');
  }
  next();
});
