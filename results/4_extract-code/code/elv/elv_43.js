const elv = require('elv');

console.log(elv(undefined)); // false

elv.behavior.enableUndefined = false;

console.log(elv(undefined)); // true
