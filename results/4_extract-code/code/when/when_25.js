var when = require('when');
var rest = require('rest');

when.reduce(when.map(getRemoteNumberList(), times10), sum)
    .done(function(result) {
        console.log(result);
    });

function getRemoteNumberList() {
    // Get a remote array [1, 2, 3, 4, 5]
    return rest('http://example.com/numbers').then(JSON.parse);
}

function sum(x, y) { return x + y; }
function times10(x) {return x * 10; }
