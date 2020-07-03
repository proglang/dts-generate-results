// test.js
const assert = require('assert');
const forEach = require('mocha-each');

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

describe('add()', () => {
  forEach([
    [1, 1, 2],
    [2, -2, 0],
    [140, 48, 188]
  ])
  .it('adds %d and %d then returns %d', (left, right, expected) => {
    assert.equal(add(left, right), expected);
  });

  context('with invalid arguments', () => {
    forEach([
      [1, 'foo'],
      [null, 10],
      [{}, []]
    ])
    .it('adds %j and %j then returns NaN', (left, right) => {
      const value = add(left, right);
      assert(isNaN(value));
    });
  });
});
