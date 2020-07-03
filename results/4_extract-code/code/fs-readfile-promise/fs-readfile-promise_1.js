const readFilePromise = require('fs-readfile-promise');

(async () => {
  const buffer = await readPromise('path/to/a/file');
  buffer.toString(); //=> '... file contents ...'
})();
