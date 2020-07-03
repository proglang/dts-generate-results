var downloader = require('s3-download-stream')
var aws = require('aws-sdk')

// config
var auth = {
  apiVersion: "2006-03-01",
  secretAccessKey: process.env.S3_SECRET_KEY,
  accessKeyId: process.env.S3_ACCESS_KEY
}

//
// params documentation:
// http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property
//
var file = process.env.S3_KEY;
var config = {
  client: new aws.S3(auth),
  concurrency: 6,
  params: {
    Key: file,
    Bucket: process.env.S3_BUCKET
  }
}

// stream
downloader(config)
  .pipe(fs.createWriteStream("/tmp/" + file)
