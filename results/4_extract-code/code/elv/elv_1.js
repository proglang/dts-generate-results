const elv = require('elv');

const foo = { foo: 'bar' };
console.log(elv(foo)); // true

const bar = undefined;
console.log(elv(bar)); // false

const baz = false;
console.log(elv(baz)); // true

const qux = null;
console.log(elv(qux)); // false
