const elv = require('elv');
const coalesce = elv.coalesce;

const foo = undefined;
const bar = null;
const baz = 'hello world';
const qux = true;

const result = coalesce(foo, bar, baz, qux);
console.log(result); // hello world
