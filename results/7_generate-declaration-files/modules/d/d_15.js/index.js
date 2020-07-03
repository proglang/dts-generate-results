var d = require('d');

var Account = function () {};
Object.defineProperties(Account.prototype, {
  deposit: d(function () {
    /* ... */
  }),
  withdraw: d(function () {
    /* ... */
  }),
  balance: d.gs(function () {
    /* ... */
  })
});
