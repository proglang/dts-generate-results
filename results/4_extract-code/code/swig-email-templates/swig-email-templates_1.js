var EmailTemplates = require('swig-email-templates');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

var templates = new EmailTemplates();
var context = {
  meatballCount: 9001
};

templates.render('meatball-sandwich.html', context, function(err, html, text, subject) {

  // Send email
  transporter.sendMail({
      from: 'sender@address',
      to: 'receiver@address',
      subject: subject,
      html: html,
      text: text
  });

});
