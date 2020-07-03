var AWS      = require('aws-sdk'),
    s3Stream = require('../lib/s3-upload-stream.js')(new AWS.S3());

var read = fs.createReadStream('/path/to/a/file');
var upload = s3Stream.upload({
  "Bucket": "bucket-name",
  "Key": "key-name"
});

upload.maxPartSize(20971520); // 20 MB

read.pipe(upload);
