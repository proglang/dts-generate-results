var parser = require('http-string-parser');

request = parser.parseRequest(requestString);
response = parser.parseResponse(responseString);

console.log(request);
console.log(response);
