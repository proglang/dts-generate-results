const elv = require('elv');

const val = ['foo', 'bar', 'baz', 'qux'];

console.log(elv.tryGet(val, 5)); // undefined
console.log(elv.tryGet(val, 5, 42)); // 42
console.log(elv.tryGet(val, 2)); // baz
