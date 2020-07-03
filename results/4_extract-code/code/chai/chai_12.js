const { assert } = require('chai');  // Using Assert style
const { expect } = require('chai');  // Using Expect style
const { should } = require('chai');  // Using Should style
should();  // Modifies `Object.prototype`

const { expect, use } = require('chai');  // Creates local variables `expect` and `use`; useful for plugin use
