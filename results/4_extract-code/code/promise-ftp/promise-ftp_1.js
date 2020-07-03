  var PromiseFtp = require('promise-ftp');
  
  var ftp = new PromiseFtp();
  ftp.connect({host: host, user: user, password: password})
  .then(function (serverMessage) {
    console.log('Server message: '+serverMessage);
    return ftp.list('/');
  }).then(function (list) {
    console.log('Directory listing:');
    console.dir(list);
    return ftp.end();
  });
