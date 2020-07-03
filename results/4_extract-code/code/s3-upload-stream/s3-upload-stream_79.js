var AWS      = require('aws-sdk'),
    s3Stream = require('../lib/s3-upload-stream.js')(new AWS.S3());

var read = fs.createReadStream('/path/to/a/file');
var upload = s3Stream.upload(
  {
    Bucket: "bucket-name",
    Key: "key-name",
    ACL: "public-read",
    StorageClass: "REDUCED_REDUNDANCY",
    ContentType: "binary/octet-stream"
  },
  {
    UploadId: "f1j2b47238f12984f71b2o8347f12",
    Parts: [
      {
        ETag: "3k2j3h45t9v8aydgajsda",
        PartNumber: 1
      },
      {
        Etag: "kjgsdfg876sd8fgk3j44t",
        PartNumber: 2
      }
    ]
  }
);

read.pipe(upload);
