const Email = require('email-templates');

const email = new Email({
  message: {
    from: 'niftylettuce@gmail.com'
  },
  transport: {
    jsonTransport: true
  },
  textOnly: true // <----- HERE
});

email
  .send({
    template: 'mars',
    message: {
      to: 'elon@spacex.com'
    },
    locals: {
      name: 'Elon'
    }
  })
  .then(console.log)
  .catch(console.error);
