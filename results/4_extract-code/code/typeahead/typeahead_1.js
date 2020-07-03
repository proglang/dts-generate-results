var Typeahead = require('typeahead');

var input = document.createElement('input');

// source is an array of items
var ta = Typeahead(input, {
    source: ['foo', 'bar', 'baz']
});

input // =>
