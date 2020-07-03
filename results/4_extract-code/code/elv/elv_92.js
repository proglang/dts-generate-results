const elv = require('elv');

console.log(elv.populated('foo')); //true
console.log(elv.populated(['foo', 'bar'])); //true
console.log(elv.populated({ foo: 'bar' })); //true
console.log(elv.populated(null)); // false
console.log(elv.populated('')); // false
console.log(elv.populated([])); // false
console.log(elv.populated({})); // false
