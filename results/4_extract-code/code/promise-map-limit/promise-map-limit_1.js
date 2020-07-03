const mapLimit = require('promise-map-limit');

// This will work on max two items in the array at a time
// When all items are processed it will resolve with the resulting array in the same order.
mapLimit([1, 2, 3, 4], 2, n => Promise.resolve(n * 2)).then(array => {
  // array == [2, 4, 6, 8]
});

// The iterator function can return the result synchronous
mapLimit([1, 2, 3, 4], 2, n => n * 2).then(array => {
  // array == [2, 4, 6, 8]
});

// Any value that implements the iterator interface can be used, such as Array, String, Map, Set
mapLimit('abc', 2, str => str.toUpperCase()).then(array => {
  // array == ['A', 'B', 'C']
});

// Any value that implements the iterator interface can be used, such as Array, String, Map, Set
mapLimit('abc', 2, str => str.toUpperCase()).then(array => {
  // array == ['A', 'B', 'C']
});

// Iterator object also implements the iterator interface
const arr = ['a', 'b', 'c'];
const iterator = a.entries();
mapLimit(iterator, 2, entry => entry).then(array => {
  // array == [
  //   [0, 'a'],
  //   [1, 'b'],
  //   [2, 'c']
  // ]
});

// If the iterator is omitted, each function in the array is executed
// This will run max two functions at a time
mapLimit([
  () => Promise.resolve(1),
  () => Promise.resolve(2),
  () => 3, // can be sync
  () => Promise.resolve(4),
], 2).then(array => {
  // array == [1, 2, 3, 4]
});
