var watson = require('ibm-watson');

// to get an IAM Access Token
var authorization = new watson.AuthorizationV1({
  iam_apikey: '<Service API key>',
  iam_url: '<IAM endpoint URL - OPTIONAL>',
});

authorization.getToken(function (err, token) {
  if (!token) {
    console.log('error:', err);
  } else {
    // Use your token here
  }
});

// to get a Watson Token - NOW DEPRECATED
var authorization = new watson.AuthorizationV1({
  username: '<Text to Speech username>',
  password: '<Text to Speech password>',
  url: 'https://stream.watsonplatform.net/authorization/api', // Speech tokens
});

authorization.getToken({
  url: 'https://stream.watsonplatform.net/text-to-speech/api'
},
function (err, token) {
  if (!token) {
    console.log('error:', err);
  } else {
    // Use your token here
  }
});
