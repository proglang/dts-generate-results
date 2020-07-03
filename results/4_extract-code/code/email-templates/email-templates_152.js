const Email = require('email-templates');

const email = new Email();
const locals = { name: 'Elon' };

Promise
  .all([
    email.render('mars/html', locals),
    email.render('mars/text', locals)
  ])
  .then(([ html, text ]) => {
    console.log('html', html);
    console.log('text', text);
  })
  .catch(console.error);
