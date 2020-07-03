var minimist = require('minimist'),
    freshy = require('freshy');

var alsofresh;
var fresh = freshy.freshy('minimist', function (fresh) {
    alsofresh = require('minimist');

    console.log(fresh === alsofresh); // true
});
console.log(minimist === fresh); // false
console.log(fresh == alsofresh); // true

var mini = require('minimist');
console.log(minimist === mini); // true
