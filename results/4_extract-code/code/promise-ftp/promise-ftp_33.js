  var PromiseFtp = require('promise-ftp');
  var fs = require('fs');
  
  var ftp = new PromiseFtp();
  ftp.connect({host: host, user: user, password: password})
  .then(function (serverMessage) {
    return ftp.put('foo.txt', 'foo.remote-copy.txt');
  }).then(function () {
    return ftp.end();
  });
