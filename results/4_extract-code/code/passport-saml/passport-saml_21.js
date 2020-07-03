var MultiSamlStrategy = require('passport-saml/multiSamlStrategy');
[...]

passport.use(new MultiSamlStrategy(
  {
    getSamlOptions: function(request, done) {
      findProvider(request, function(err, provider) {
        if (err) {
          return done(err);
        }
        return done(null, provider.configuration);
      });
    }
  },
  function(profile, done) {
    findByEmail(profile.email, function(err, user) {
      if (err) {
        return done(err);
      }
      return done(null, user);
    });
  })
);
