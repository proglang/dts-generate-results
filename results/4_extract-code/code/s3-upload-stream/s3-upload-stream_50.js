var AWS      = require('aws-sdk'),
    s3Stream = require('../lib/s3-upload-stream.js')(new AWS.S3());
