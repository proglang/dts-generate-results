var agent = require("supertest-as-promised").agent(app);

agent
  .get("/ugly-kitteh")
  .expect(404)
  .then(function () {
    // ...
  })
