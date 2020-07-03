var http = require('follow-redirects').http;
var https = require('follow-redirects').https;

http.get('http://bit.ly/900913', function (response) {
  response.on('data', function (chunk) {
    console.log(chunk);
  });
}).on('error', function (err) {
  console.error(err);
});
