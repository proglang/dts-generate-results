var tmp = require('tmp');

tmp.file({ mode: 0644, prefix: 'prefix-', postfix: '.txt' }, function _tempFileCreated(err, path, fd) {
  if (err) throw err;

  console.log('File: ', path);
  console.log('Filedescriptor: ', fd);
});
