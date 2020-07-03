var dirnameRe = require('dirname-regex');
var match = 'a/b/c/d.md'.match(dirnameRe());

match[0];
//=> 'a/b/c/d.md'

match[1];
//=> 'a/b/c/'

match[2];
//=> 'a/b/c'
