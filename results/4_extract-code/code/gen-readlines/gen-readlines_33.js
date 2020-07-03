const readlines = require('gen-readlines');

for (let line of readlines.fromFile('./file.txt')) {
  console.log(line.toString());
}
