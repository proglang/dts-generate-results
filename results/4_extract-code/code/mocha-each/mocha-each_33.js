// test.js
const assert = require('assert');
const forEach = require('mocha-each');

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

forEach([
  [1, 1, 0],
  [2, -2, 4],
  [140, 48, 92]
])
.describe('subtract() with %d and %d', (left, right, expected) => {
  let actual;
  before(() => {
    actual = subtract(left, right);
  });

  it('subtracts correctly and returns ' + expected, () => {
    assert.equal(actual, expected);
  });
});
