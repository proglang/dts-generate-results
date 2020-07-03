var S = require('string');

var phrase = S('JavaScript is the best scripting language ever!');
var sub = 'best scripting';
var pos = phrase.indexOf(sub);
console.log(phrase.substr(pos, sub.length).truncate(8)); //best...
