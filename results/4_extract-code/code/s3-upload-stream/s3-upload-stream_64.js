var AWS      = require('aws-sdk'),
    s3Stream = require('../lib/s3-upload-stream.js')(new AWS.S3());

var read = fs.createReadStream('/path/to/a/file');
var upload = s3Stream.upload({
  Bucket: "bucket-name",
  Key: "key-name",
  ACL: "public-read",
  StorageClass: "REDUCED_REDUNDANCY",
  ContentType: "binary/octet-stream"
});

read.pipe(upload);
