const lab = exports.lab = Lab.script();
const { describe, it } = lab;

// Testing shortcuts
const { expect, fail } = require('@hapi/code');

describe('expectation', () => {

    it('should be able to expect', () => {

        expect(true).to.be.true();
    });

    it('should be able to fail (This test should fail)', () => {

        fail('Should fail');
    });
});
