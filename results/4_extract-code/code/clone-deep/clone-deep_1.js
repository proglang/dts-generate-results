const cloneDeep = require('clone-deep');

let obj = { a: 'b' };
let arr = [obj];
let copy = cloneDeep(arr);
obj.c = 'd';

console.log(copy);
//=> [{ a: 'b' }]

console.log(arr);
//=> [{ a: 'b', c: 'd' }]
