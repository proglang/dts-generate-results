const elv = require('elv');

console.log(elv(false)); // true

elv.behavior.enableFalse = true;

console.log(elv(false)); // false
