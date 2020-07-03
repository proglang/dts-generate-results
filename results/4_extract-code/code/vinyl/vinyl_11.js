var Vinyl = require('vinyl');

var file = new Vinyl({ foo: 'bar' });
file.foo === 'bar'; // true
