const Email = require('email-templates');

const email = new Email();

email
  .renderAll('mars', {
    name: 'Elon'
  })
  .then(console.log)
  .catch(console.error);
