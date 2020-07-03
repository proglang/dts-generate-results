
var BloomFilter = require('bloom-filter');

// convenient method to initialize the filter
var numberOfElements = 3;
var falsePositiveRate = 0.01;
var filter = BloomFilter.create(numberOfElements, falsePositiveRate);

// elements
var a = new Buffer('99108ad8ed9bb6274d3980bab5a85c048f0950c8', 'hex');
var b = new Buffer('19108ad8ed9bb6274d3980bab5a85c048f0950c8', 'hex');
var c = new Buffer('b5a2c786d9ef4658287ced5914b37a1b4aa32eee', 'hex');

// insert elements
filter.insert(a);
filter.insert(b);

// check if elements match
assert(!filter.contains(c));
assert(filter.contains(a));

// reinstantiate from an object
var serialized = filter.toObject();
var filter = new BloomFilter(serialized);

// initialize directly
var filter = new BloomFilter({
  vData: [], // the data of the filter
  nHashFuncs: 3, // the number of hash functions to use
  nTweak: 2147483649, // the seed used for the hash fuctions
  nFlags: 0 // flags used to update the filter when matched
});


