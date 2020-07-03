'use strict';

var required = require('requires-port');

console.log(required('8080', 'http')) // true
console.log(required('80', 'http'))   // false
