var jwt = require('express-jwt');
var data = require('./data');
var utilities = require('./utilities');

var secretCallback = function(req, payload, done){
  var issuer = payload.iss;

  data.getTenantByIdentifier(issuer, function(err, tenant){
    if (err) { return done(err); }
    if (!tenant) { return done(new Error('missing_secret')); }

    var secret = utilities.decrypt(tenant.secret);
    done(null, secret);
  });
};

app.get('/protected',
  jwt({secret: secretCallback}),
  function(req, res) {
    if (!req.user.admin) return res.sendStatus(401);
    res.sendStatus(200);
  });
