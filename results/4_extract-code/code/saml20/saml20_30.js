
var saml = require('saml20');

var options = {
	publicKey: 'MIICDzCCAXygAwIBAgIQVWXAvbbQyI5Bc...',
	audience: 'http://myservice.com/'
}

saml.validate(rawAssertion, options, function(err, profile) {
	// err

	var claims = profile.claims; // Array of user attributes;
	var issuer = profile.issuer; // String Issuer name.
});

