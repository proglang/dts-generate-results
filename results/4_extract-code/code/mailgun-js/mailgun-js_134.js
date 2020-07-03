var domain = 'mydomain.org';
var mailgun = require('mailgun-js')({ apiKey: "YOUR API KEY", domain: domain });
var MailComposer = require('nodemailer/lib/mail-composer');

var mailOptions = {
  from: 'you@samples.mailgun.org',
  to: 'mm@samples.mailgun.org',
  subject: 'Test email subject',
  text: 'Test email text',
  html: '<b> Test email text </b>'
};

var mail = new MailComposer(mailOptions);

mail.compile().build((err, message) => {

    var dataToSend = {
        to: 'mm@samples.mailgun.org',
        message: message.toString('ascii')
    };

    mailgun.messages().sendMime(dataToSend, (sendError, body) => {
        if (sendError) {
            console.log(sendError);
            return;
        }
    });
});
