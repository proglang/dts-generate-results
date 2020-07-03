// create an elasticsearch client for your Amazon ES
let es = require('elasticsearch').Client({
  hosts: [ 'https://amazon-es-host.us-east-1.es.amazonaws.com' ],
  connectionClass: require('http-aws-es')
});
