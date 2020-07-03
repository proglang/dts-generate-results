var http  = require('http'),
    https = require('https'),
    aws4  = require('aws4')

// given an options object you could pass to http.request
var opts = {host: 'sqs.us-east-1.amazonaws.com', path: '/?Action=ListQueues'}

// alternatively (as aws4 can infer the host):
opts = {service: 'sqs', region: 'us-east-1', path: '/?Action=ListQueues'}

// alternatively (as us-east-1 is default):
opts = {service: 'sqs', path: '/?Action=ListQueues'}

aws4.sign(opts) // assumes AWS credentials are available in process.env

console.log(opts)
/*
{
  host: 'sqs.us-east-1.amazonaws.com',
  path: '/?Action=ListQueues',
  headers: {
    Host: 'sqs.us-east-1.amazonaws.com',
    'X-Amz-Date': '20121226T061030Z',
    Authorization: 'AWS4-HMAC-SHA256 Credential=ABCDEF/20121226/us-east-1/sqs/aws4_request, ...'
  }
}
*/

// we can now use this to query AWS using the standard node.js http API
http.request(opts, function(res) { res.pipe(process.stdout) }).end()
/*
<?xml version="1.0"?>
<ListQueuesResponse xmlns="http://queue.amazonaws.com/doc/2012-11-05/">
...
*/
