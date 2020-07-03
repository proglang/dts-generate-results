var mock = require('mock-require');

mock('http', { request: function() {
  console.log('http.request called');
}});

var http = require('http');
http.request(); // 'http.request called'
