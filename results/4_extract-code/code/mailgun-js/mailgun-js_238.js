var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

mailgun.validate('test@mail.com', {mailbox_verification: true}, function (err, body) {
  if(body && body.is_valid){
    // do something
  }
});
