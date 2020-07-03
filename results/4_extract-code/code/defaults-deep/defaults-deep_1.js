var defaults = require('defaults-deep');

defaults({a: {one: 'one'}}, {a: {two: 'two'}})
//=> {a: {one: 'one', two: 'two'}};
