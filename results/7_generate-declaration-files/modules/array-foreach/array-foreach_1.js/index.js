var forEach = require('array-foreach');
var result = '';
forEach(['foo', 'bar', 'baz'], function (element, index, array) {
    result += element;
});
console.log(result); // 'foobarbaz'
