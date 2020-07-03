var immediate = require("immediate");

immediate(function () {
  // this will run soon
});

immediate(function (arg1, arg2) {
  // get your args like in iojs
}, thing1, thing2);
