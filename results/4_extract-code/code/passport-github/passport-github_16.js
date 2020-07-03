var GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    authorizationURL: "https://ENTERPRISE_INSTANCE_URL/login/oauth/authorize",
    tokenURL: "https://ENTERPRISE_INSTANCE_URL/login/oauth/access_token",
    userProfileURL: "https://ENTERPRISE_INSTANCE_URL/api/v3/user",
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
