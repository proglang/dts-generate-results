const oauth2 = require('simple-oauth2').create(credentials);
const tokenConfig = {
  scope: '<scope>', // also can be an array of multiple scopes, ex. ['<scope1>, '<scope2>', '...']
};

// Get the access token object for the client
try {
  const result = await oauth2.clientCredentials.getToken(tokenConfig);
  const accessToken = oauth2.accessToken.create(result);
} catch (error) {
  console.log('Access Token error', error.message);
}
