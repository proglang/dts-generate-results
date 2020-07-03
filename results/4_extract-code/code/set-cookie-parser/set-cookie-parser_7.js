var http = require('http');
var setCookie = require('set-cookie-parser');

http.get('http://example.com', function(res) {
  var cookies = setCookie.parse(res, {
    decodeValues: true  // default: true
  });

  cookies.forEach(console.log);
}
