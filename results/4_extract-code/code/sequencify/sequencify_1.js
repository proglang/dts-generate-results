var sequencify = require('sequencify');

var items = {
  a: {
    name: 'a',
    dep: []
    // other properties as needed
  },
  b: {
    name: 'b',
    dep: ['a']
  },
  c: {
    name: 'c',
    dep: ['a']
  },
  d: {
    name: 'd',
    dep: ['c']
  }
};

var names = ['d', 'b', 'c', 'a']; // The names of the items you want arranged, need not be all

var results = sequencify(items, names);

console.log(results.sequence);
// [ 'a', 'c', 'd', 'b' ];
