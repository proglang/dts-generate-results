var containsPath = require('contains-path');

containsPath('foo/bar', 'foo', {}); //=> true
containsPath('foo/bar', 'bar', { partialMatch: true }); //=> true
containsPath('foo/bar', 'qux'); //=> false

// returns false for partial matches
containsPath('foobar', 'foo');  //=> false
containsPath('foo.bar', 'foo'); //=> false
containsPath('foo.bar', 'bar'); //=> false

// prefix with "./" to match from beginning of filepath
containsPath('bar/foo', 'foo', {nocase: true});   //=> true
containsPath('bar/foo', './foo'); //=> false