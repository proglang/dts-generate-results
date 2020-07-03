  var PromiseFtp = require('promise-ftp');
  var fs = require('fs');
  
  var ftp = new PromiseFtp();
  ftp.connect({host: host, user: user, password: password})
  .then(function (serverMessage) {
    return ftp.get('foo.txt');
  }).then(function (stream) {
    return new Promise(function (resolve, reject) {
      stream.once('close', resolve);
      stream.once('error', reject);
      stream.pipe(fs.createWriteStream('foo.local-copy.txt'));
    });
  }).then(function () {
    return ftp.end();
  });
