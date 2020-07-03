var Typeahead = require('typeahead');
var input = document.createElement('input');

// source is an array of items
var ta = Typeahead(input, {
    source: function(query, result) {
        result(['foo', 'bar', 'baz']);
    }
});

input // =>
