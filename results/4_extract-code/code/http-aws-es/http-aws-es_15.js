let options = {
  hosts: [], // array of amazon es hosts (required)
  connectionClass: require('http-aws-es'), // use this connector (required)
  awsConfig: new AWS.Config({ region }), // set an aws config e.g. for multiple clients to different regions
  httpOptions: {} // set httpOptions on aws-sdk's request. default to aws-sdk's config.httpOptions
};
let es = require('elasticsearch').Client(options);
