var AWSMock = require('mock-aws-s3');
AWSMock.config.basePath = '/tmp/buckets/' // Can configure a basePath for your local buckets
var s3 = AWSMock.S3({
	params: { Bucket: 'example' }
});
