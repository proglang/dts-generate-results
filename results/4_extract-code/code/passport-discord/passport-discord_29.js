var DiscordStrategy = require('passport-discord').Strategy
  , refresh = require('passport-oauth2-refresh');

var discordStrat = new DiscordStrategy({
    clientID: 'id',
    clientSecret: 'secret',
    callbackURL: 'callbackURL'
},
function(accessToken, refreshToken, profile, cb) {
    profile.refreshToken = refreshToken; // store this for later refreshes
    User.findOrCreate({ discordId: profile.id }, function(err, user) {
        if (err)
            return done(err);

        return cb(err, user);
    });
});

passport.use(discordStrat);
refresh.use(discordStrat);
