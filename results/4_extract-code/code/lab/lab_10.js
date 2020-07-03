const { expect } = require('@hapi/code');
const Lab = require('@hapi/lab');
const lab = exports.lab = Lab.script();

lab.test('returns true when 1 + 1 equals 2', () => {

    expect(1 + 1).to.equal(2);
});
