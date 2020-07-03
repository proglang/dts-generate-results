var HashSet = require('hashset');

//Create an empty hash set
var hashset = new HashSet();

//Create a hash set an initialize it with a value 'a'
var hashset = new HashSet('a');

//Create a hash set an initialize it with a set of values
var hashset = new HashSet('a', 'b', 'c');

//Create a hash set an initialize it with 3 different values
var hashset = new HashSet(1, '1', [1]);
