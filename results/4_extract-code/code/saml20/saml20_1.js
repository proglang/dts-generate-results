
var saml = require('saml20');

saml.parse(rawAssertion, function(err, profile) {
	// err

	var claims = profile.claims; // Array of user attributes;
	var issuer = profile.issuer; // String Issuer name.
});

