const { expect } = require('@hapi/code');
const Lab = require('@hapi/lab');
const { suite, test } = exports.lab = Lab.script();

suite('math', () => {

    test('returns true when 1 + 1 equals 2', () => {

        expect(1 + 1).to.equal(2);
    });
});
