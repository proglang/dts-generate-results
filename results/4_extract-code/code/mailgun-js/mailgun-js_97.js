var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var filename = 'mailgun_logo.png';
var filepath = path.join(__dirname, filename);
var file = fs.readFileSync(filepath);

var attch = new mailgun.Attachment({data: file, filename: filename});

var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'serobnic@mail.ru',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!',
  attachment: attch
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
