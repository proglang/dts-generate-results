var minimist = require('minimist'),
    freshy = require('freshy');

var fresh = freshy.reload('minimist');
console.log(minimist === fresh); // false
