const parse = require('parse-git-config');

// sync
console.log(parse.sync());

// using async/await
(async () => console.log(await parse()))();
