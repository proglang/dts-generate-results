var oauthshim = require('oauth-shim'),
	express = require('express'),
	bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.all('/oauthproxy', oauthshim);

// Initiate the shim with Client ID's and secret, e.g.
oauthshim.init([{
	// id : secret
	client_id: '12345',
	client_secret: 'secret678910',
	// Define the grant_url where to exchange Authorisation codes for tokens
	grant_url: 'https://linkedIn.com',
	// Restrict the callback URL to a delimited list of callback paths
	domain: 'test.com, example.com/redirect'
}
, ...
]);
app.listen(3000);
