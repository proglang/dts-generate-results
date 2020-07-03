var template = require('url-template');

var emailUrlTemplate = template.parse('/{email}/{folder}/{id}');
var emailUrl = emailUrlTemplate.expand({
  email: 'user@domain',
  folder: 'test',
  id: 42
});

console.log(emailUrl);
// Returns '/user@domain/test/42'
