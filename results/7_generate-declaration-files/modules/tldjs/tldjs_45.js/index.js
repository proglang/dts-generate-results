var tldjs = require('tldjs');

tldjs.getDomain('localhost');           // returns null
tldjs.getSubdomain('vhost.localhost');  // returns null

var myTldjs = tldjs.fromUserSettings({
  validHosts: ['localhost']
});

myTldjs.getDomain('localhost');           // returns 'localhost'
myTldjs.getSubdomain('vhost.localhost');  // returns 'vhost'
