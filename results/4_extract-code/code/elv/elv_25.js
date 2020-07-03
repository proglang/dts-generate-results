const elv = require('elv');

console.log(elv(Number.NaN)); // true

elv.behavior.enableNaN = true;

console.log(elv(Number.NaN)); // false
