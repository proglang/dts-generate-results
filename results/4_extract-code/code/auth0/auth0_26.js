var AuthenticationClient = require('auth0').AuthenticationClient;

var auth0 = new AuthenticationClient({
  domain: '{YOUR_ACCOUNT}.auth0.com',
  clientId: '{CLIENT_ID}',
  clientSecret: '{CLIENT_SECRET}'
});

auth0.clientCredentialsGrant(
  {
    audience: 'https://{YOUR_ACCOUNT}.auth0.com/api/v2/',
    scope: '{MANAGEMENT_API_SCOPES}'
  },
  function(err, response) {
    if (err) {
      // Handle error.
    }
    console.log(response.access_token);
  }
);
