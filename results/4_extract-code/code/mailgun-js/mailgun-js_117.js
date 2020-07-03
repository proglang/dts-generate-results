var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var filename = 'mailgun_logo.png';
var filepath = path.join(__dirname, filename);
var fileStream = fs.createReadStream(filepath);
var fileStat = fs.statSync(filepath);

msg.attachment = new mailgun.Attachment({
  data: fileStream,
  filename: 'my_custom_name.png',
  knownLength: fileStat.size,
  contentType: 'image/png'});

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
