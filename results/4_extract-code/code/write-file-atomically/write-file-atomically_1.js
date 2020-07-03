const {readFileSync} = require('fs');
const writeFileAtomically = require('write-file-atomically');

(async () => {
  await writeFileAtomically('file.txt', 'Hi!');
  readFileSync('file.txt', 'utf8'); //=> 'Hi!'
})();
