const oauth2 = require('simple-oauth2').create(credentials);

// Get the access token object.
const tokenConfig = {
  username: 'username',
  password: 'password',
  scope: '<scope>', // also can be an array of multiple scopes, ex. ['<scope1>, '<scope2>', '...']
};

// Save the access token
try {
  const result = await oauth2.ownerPassword.getToken(tokenConfig);
  const accessToken = oauth2.accessToken.create(result);
} catch (error) {
  console.log('Access Token Error', error.message);
}
