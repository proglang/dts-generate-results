const Email = require('email-templates');

const email = new Email({
  message: {
    from: 'niftylettuce@gmail.com',
    attachments: [
      {
        filename: 'text1.txt',
        content: 'hello world!'
      }
    ]
  }
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
