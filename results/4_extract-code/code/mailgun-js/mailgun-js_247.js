var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

mailgun.parse([ 'test@mail.com', 'test2@mail.com' ], function (err, body) {
  if(error){
    // handle error
  }else{
    // do something with parsed addresses: body.parsed;
    // do something with unparseable addresses: body.unparseable;
  }
});
