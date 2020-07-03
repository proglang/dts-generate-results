var re = require('path-regex');

'a/b.c/d/e.min.js'.match(re());

//=> [0] 'a/b.c/d/e.min.js'
//=> [1] 'a/b.c/d/'
//=> [2] 'e.min.js'
//=> [3] 'e'
//=> [4] '.min.js'
//=> [5] '.js'
//=> [6] 'js'
