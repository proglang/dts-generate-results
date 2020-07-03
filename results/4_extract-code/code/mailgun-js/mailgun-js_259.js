mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain, testMode: true })

const data = {
  from: 'mailgunjs+test1@gmail.com',
  to: 'mailgunjstest+recv1@gmail.com',
  subject: 'Test email subject',
  text: 'Test email text'
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
