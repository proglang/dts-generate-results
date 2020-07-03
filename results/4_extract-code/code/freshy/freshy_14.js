var minimist = require('minimist'),
    freshy = require('freshy');

var fresh = freshy.freshy('minimist');
console.log(minimist === fresh); // false

var mini = require('minimist');
console.log(minimist === mini); // true
