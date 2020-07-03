const Email = require('email-templates');

const email = new Email({
  message: {
    from: 'niftylettuce@gmail.com'
  },
  transport: {
    jsonTransport: true
  },
  i18n: {} // <------ HERE
});

email
  .send({
    template: 'mars',
    message: {
      to: 'elon@spacex.com'
    },
    locals: {
      locale: 'en', // <------ CUSTOMIZE LOCALE HERE (defaults to `i18n.defaultLocale` - `en`)
      // is your user french?
      // locale: 'fr',
      name: 'Elon'
    }
  })
  .then(console.log)
  .catch(console.error);
