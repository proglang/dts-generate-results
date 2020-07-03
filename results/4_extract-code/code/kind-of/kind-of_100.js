var typeOf = require('typeof');
function Test() {}
console.log(typeOf(new Test()));
//=> 'test'
