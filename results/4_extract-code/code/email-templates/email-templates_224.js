const Email = require('email-templates');

const env = process.env.NODE_ENV || 'development';

const email = new Email({
  message: {
    from: 'niftylettuce@gmail.com'
  },
  transport: {
    jsonTransport: true
  },
  subjectPrefix: env === 'production' ? false : `[${env.toUpperCase()}] `; // <--- HERE
});
