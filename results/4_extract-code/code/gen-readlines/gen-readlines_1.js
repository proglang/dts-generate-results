const fs = require('fs');
const util = require('util');
const readlines = require('gen-readlines');

const open = util.promisify(fs.open);
const fstat = util.promisify(fs.fstat);

function* readFile() {
  const fd = yield open('./file.txt');
  const stat = yield fstat(fd);
  const fileSize = stat.size;

  for (let line of readlines(fd, fileSize)) {
    console.log(line.toString());
  }

  console.log('continue code execution, no callbacks!');

  fs.closeSync(fd);
}
