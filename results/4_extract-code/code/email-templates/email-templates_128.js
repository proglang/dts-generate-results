const Email = require('email-templates');

const email = new Email();

email
  .render('mars/html', {
    name: 'Elon'
  })
  .then(console.log)
  .catch(console.error);
