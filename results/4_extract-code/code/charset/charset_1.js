var charset = require('charset');
var http = require('http');

http.get('http://nodejs.org', function (res) {
  res.on('data', function (chunk) {
    console.log(charset(res.headers, chunk));
    // or `console.log(charset(res, chunk));`
    res.destroy();
  });
});
