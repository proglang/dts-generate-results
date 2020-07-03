const get = require('get-value');
const obj = { a: { b: { c: { d: 'foo' } } } };

console.log(get(obj));            //=> { a: { b: { c: { d: 'foo' } } } };
console.log(get(obj, 'a'));       //=> { b: { c: { d: 'foo' } } }
console.log(get(obj, 'a.b'));     //=> { c: { d: 'foo' } }
console.log(get(obj, 'a.b.c'));   //=> { d: 'foo' }
console.log(get(obj, 'a.b.c.d')); //=> 'foo'
