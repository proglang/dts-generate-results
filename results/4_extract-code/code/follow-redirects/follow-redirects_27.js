var url = require('url');
var followRedirects = require('follow-redirects');

var options = url.parse('http://bit.ly/900913');
options.maxRedirects = 10;
http.request(options);
