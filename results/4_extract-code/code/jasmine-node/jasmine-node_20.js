var request = require('request');

jasmine.getEnv().defaultTimeoutInterval = 500;

it("should respond with hello world", function(done) {
  request("http://localhost:3000/hello", function(error, response, body){
    done();
  });  // timeout after 500 ms
});
