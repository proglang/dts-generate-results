let AWS = require('aws-sdk');
AWS.config.update({
  credentials: new AWS.Credentials(accessKeyId, secretAccessKey),
  region: 'us-east-1'
});
