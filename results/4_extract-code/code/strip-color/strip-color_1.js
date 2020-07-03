var strip = require('strip-color');
var red = require('ansi-red');
var str = red('abc');

console.log(strip(str));
//=> 'abc';
