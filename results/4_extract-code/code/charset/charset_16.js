var request = require('request');
var charset = require('charset');
var jschardet = require('jschardet');

request({
  url: 'http://www.example.com',
  encoding: null
}, function (err, res, body) {
  if (err) {
    throw err;
  }
  enc = charset(res.headers, body);
  enc = enc || jschardet.detect(body).encoding.toLowerCase();
  console.log(enc);
});
