var arraySort = require('array-sort');

arraySort([{foo: 'y'}, {foo: 'z'}, {foo: 'x'}], 'foo');
//=> [{foo: 'x'}, {foo: 'y'}, {foo: 'z'}]
