const elv = require('elv');

console.log(elv(null)); // false

elv.behavior.enableNull = false;

console.log(elv(null)); // true
