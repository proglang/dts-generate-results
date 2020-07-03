const withThese = require('mocha-each');

describe('findByName()', () => {
  withThese([
    [1, 'foo'],
    [2, 'bar'],
    [3, 'baz']
  ])
  .it('should find data by name', (id, name) => {
    const data = findByName(name);
    assert.equal(data.id, id);
  });
});
