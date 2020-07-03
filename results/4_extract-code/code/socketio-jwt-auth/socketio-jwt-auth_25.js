var io = require('socket.io')();
var jwtAuth = require('socketio-jwt-auth');

// using middleware
io.use(jwtAuth.authenticate({
  secret: 'Your Secret',    // required, used to verify the token's signature
  algorithm: 'HS256',        // optional, default to be HS256
  succeedWithoutToken: true
}, function(payload, done) {
  // you done callback will not include any payload data now
  // if no token was supplied
  if (payload && payload.sub) {
    User.findOne({id: payload.sub}, function(err, user) {
      if (err) {
        // return error
        return done(err);
      }
      if (!user) {
        // return fail with an error message
        return done(null, false, 'user does not exist');
      }
      // return success with a user info
      return done(null, user);
    });
  } else {
    return done() // in your connection handler user.logged_in will be false
  }
}));
