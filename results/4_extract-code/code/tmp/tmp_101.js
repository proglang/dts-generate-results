var tmp = require('tmp');

tmp.dir({ mode: 0750, prefix: 'myTmpDir_' }, function _tempDirCreated(err, path) {
  if (err) throw err;

  console.log('Dir: ', path);
});
