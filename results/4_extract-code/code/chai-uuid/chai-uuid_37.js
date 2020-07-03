const chai = require("chai");
chai.use(require('chai-uuid'));
const assert = chai.assert;

// validate UUID v1
assert.uuid('bd74c8da-4d9e-11e7-b114-b2f933d5fe66', 'v1');

// validate GUID
assert.guid('bd74c8da-4d9e-11e7-b114-b2f933d5fe66');
