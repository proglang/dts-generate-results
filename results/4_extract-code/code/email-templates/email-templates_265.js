const Email = require('email-templates');

const email = new Email({
  message: {
    from: 'niftylettuce@gmail.com',
    headers: {
      'X-Some-Custom-Thing': 'Some-Value'
    },
    list: {
      unsubscribe: 'https://niftylettuce.com/unsubscribe'
    }
  },
  transport: {
    jsonTransport: true
  }
});
