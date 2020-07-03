const parse = require('parse-git-config');
const config = { 
  'foo "bar"': { doStuff: true },
  'foo "baz"': { doStuff: true } 
};

console.log(parse.expandKeys(config));
