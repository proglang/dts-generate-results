require('es6-shim');
var assert = require('assert');

assert.equal(true, 'abc'.startsWith('a'));
assert.equal(false, 'abc'.endsWith('a'));
assert.equal(true, 'john alice'.includes('john'));
assert.equal('123'.repeat(2), '123123');

assert.equal(false, NaN === NaN);
assert.equal(true, Object.is(NaN, NaN));
assert.equal(true, -0 === 0);
assert.equal(false, Object.is(-0, 0));

var result = Object.assign({ a: 1 }, { b: 2 });
assert.deepEqual(result, { a: 1, b: 2 });

assert.equal(true, isNaN('a'));
assert.equal(false, Number.isNaN('a'));
assert.equal(true, Number.isNaN(NaN));

assert.equal(true, isFinite('123'));
assert.equal(false, Number.isFinite('123'));
assert.equal(false, Number.isFinite(Infinity));

// Tests if value is a number, finite,
// >= -9007199254740992 && <= 9007199254740992 and floor(value) === value
assert.equal(false, Number.isInteger(2.4));

assert.equal(1, Math.sign(400));
assert.equal(0, Math.sign(0));
assert.equal(-1, Math.sign(-400));

var found = [5, 10, 15, 10].find(function (item) { return item / 2 === 5; });
assert.equal(10, found);

var foundIndex = [5, 10, 15, 10].findIndex(function (item) { return item / 2 === 5; });
assert.equal(1, foundIndex);

// Replacement for `{}` key-value storage.
// Keys can be anything.
var map = new Map([['Bob', 42], ['Foo', 'bar']]);
map.set('John', 25);
map.set('Alice', 400);
map.set(['meh'], 555);
assert.equal(undefined, map.get(['meh'])); // undefined because you need to use exactly the same object.
map.delete('Alice');
map.keys();
map.values();
assert.equal(4, map.size);

// Useful for storing unique items.
var set = new Set([0, 1]);
set.add(2);
set.add(5);
assert.equal(true, set.has(0));
assert.equal(true, set.has(1));
assert.equal(true, set.has(2));
assert.equal(false, set.has(4));
assert.equal(true, set.has(5));
set.delete(5);
assert.equal(false, set.has(5));

// Promises, see
// http://www.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript
// https://github.com/petkaantonov/bluebird/#what-are-promises-and-why-should-i-use-them
Promise.resolve(5).then(function (value) {
  assert.equal(value, 5);
  if (value) throw new Error('whoops!');
  // do some stuff
  return anotherPromise();
}).catch(function (e) {
  assert.equal(e.message, 'whoops!');
  assert.equal(true, e instanceof Error);
  // any errors thrown asynchronously end up here
});
