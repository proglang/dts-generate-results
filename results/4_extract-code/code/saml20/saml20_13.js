
var saml = require('saml20');

var options = {
	thumbprint: '1aeabdfa4473ecc7efc5947b18436c575574baf8',
	audience: 'http://myservice.com/'
}

saml.validate(rawAssertion, options, function(err, profile) {
	// err

	var claims = profile.claims; // Array of user attributes;
	var issuer = profile.issuer; // String Issuer name.
});

