var CognitoStrategy = require('passport-cognito')

passport.use(new CognitoStrategy({
    userPoolId: 'ap-northeast-1_eSjqLfqKc',
    clientId: 'vtvg02tr21zmxvspyvawtv09b',
    region: 'ap-northeast-1'
  },
  function(accessToken, idToken, refreshToken, user, cb) {
    process.nextTick(function() {
      ...
      cb(null, user);
    });
  }
));
