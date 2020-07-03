const handlebars = require('handlebars');

const contextObject = {
  variable1: 'value1',
  variable2: 'value2'
};

nodemailerMailgun.sendMail({
  from: 'myemail@example.com',
  to: 'recipient@domain.com', // An array if you have multiple recipients.
  subject: 'Hey you, awesome!',
  template: {
    name: 'email.hbs',
    engine: 'handlebars',
    context: contextObject
  }
}, (err, info) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
  else {
    console.log(`Response: ${info}`);
  }
});
