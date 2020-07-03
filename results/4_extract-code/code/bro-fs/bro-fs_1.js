const fs = require('bro-fs');

(async function () {
  await fs.init({type: window.TEMPORARY, bytes: 5 * 1024 * 1024});
  await fs.mkdir('dir');
  await fs.writeFile('dir/file.txt', 'hello world');
  const content = await fs.readFile('dir/file.txt');
  console.log(content); // => "hello world"
})();
