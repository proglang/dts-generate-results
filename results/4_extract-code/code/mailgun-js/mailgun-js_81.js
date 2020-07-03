var request = require('request');
var file = request("https://www.google.ca/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png");

var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'serobnic@mail.ru',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!',
  attachment: file
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
