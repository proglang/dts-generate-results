var regex = require('dotdir-regex');

var match = regex().exec('.git/a/b/c');
// match[1] => '.git'

regex().test('a/b/c/.gitignore');
//=> false

regex().test('a/.git/a/b/');
//=> true
