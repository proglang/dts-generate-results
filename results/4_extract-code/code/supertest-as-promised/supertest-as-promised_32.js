var express = require("express")
  , request = require("supertest-as-promised");

var app = express();

request(app)
  .get("/kittens")
  .expect(200)
  .then(function (res) {
    // ...
  });
