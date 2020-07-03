const omitEmpty = require('omit-empty');

console.log(omitEmpty({ a: 'a', b: '' }));
//=> { a: 'a' }

console.log(omitEmpty({ a: 'a', b: { c: 'c', d: '' } }));
//=> { a: 'a', b: { c: 'c' } }

console.log(omitEmpty({ a: ['a'], b: [] }));
//=> { a: ['a'] }

console.log(omitEmpty({ a: 0, b: 1 }));
//=> { a: 0, b: 1 }

// set omitZero to true, to evaluate "0" as falsey
console.log(omitEmpty({ a: 0, b: 1 }, { omitZero: true }));
//=> { b: 1 }
