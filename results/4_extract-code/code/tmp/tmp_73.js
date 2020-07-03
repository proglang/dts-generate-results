var tmp = require('tmp');

var tmpobj = tmp.fileSync({ mode: 0644, prefix: 'prefix-', postfix: '.txt' });
console.log('File: ', tmpobj.name);
console.log('Filedescriptor: ', tmpobj.fd);
