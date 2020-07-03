var when = require("when")
  , request;

request = require("supertest-as-promised")(when.Promise);
request(app)
  .get("/when.js")
  .then(function (res) { /* ... */ })
  // I'm a when.js promise! (instanceof when.Promise == true)
  .frobulate()

request = require("supertest-as-promised");
request(app)
  .get("/bluebird.js")
  .then(function (res) { /* .. */ })
  // I'm back to the default Bluebird promise!
