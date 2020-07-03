var AWS      = require('aws-sdk');

// Make sure AWS credentials are loaded using one of the following techniques
AWS.config.loadFromPath('./config.json');
AWS.config.update({accessKeyId: 'akid', secretAccessKey: 'secret'});

// Create a stream client.
var s3Stream = require('../lib/s3-upload-stream.js')(new AWS.S3());
