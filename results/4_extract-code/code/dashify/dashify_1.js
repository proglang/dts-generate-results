var dashify = require('dashify');

console.log(dashify('fooBar'));
//=> 'foo-bar'

console.log(dashify('fooBarBaz'));
//=> 'foo-bar-baz'

console.log(dashify('foo bar'));
//=> 'foo-bar'

console.log(dashify('foo barBaz'));
//=> 'foo-bar-baz'

console.log(dashify('foo barBaz quux'));
//=> 'foo-bar-baz-quux'

console.log(dashify('São Tomé and Príncipe'));
//=> 'são-tomé-and-príncipe'
