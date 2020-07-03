const chai = require("chai");
chai.use(require('chai-uuid'));
const should = chai.should();

// validate UUID v1
'bd74c8da-4d9e-11e7-b114-b2f933d5fe66'.should.be.a.uuid('v1');

// validate GUID
'bd74c8da-4d9e-11e7-b114-b2f933d5fe66'.should.be.a.guid();
