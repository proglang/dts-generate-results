var isDotdir = require('is-dotdir');

isDotdir('a/b/c/.gitignore');
//=> false

isDotdir('a/.git/a/b/');
//=> true
