var request = require('request');

it("should respond with hello world", function(done) {
  request("http://localhost:3000/hello", function(error, response, body){
    done();
  });
}, 250); // timeout after 250 ms
