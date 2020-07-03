const elv = require('elv');
const coalesce = elv.coalesce;

const getFoo = function() {
  // do something expensive to compute theValueOfFoo
  return theValueOfFoo;
};

class Bar {
  constructor(foo) {
    // the getFoo function will only be executed if foo is not truthy
    this._foo = coalesce(foo, getFoo);
  }
}
