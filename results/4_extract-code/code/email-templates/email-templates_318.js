const path = require('path');

// ...

email
  .send({
    template: path.join(__dirname, 'some', 'folder', 'mars')
    message: {
      to: 'elon@spacex.com'
    },
    locals: {
      name: 'Elon'
    }
  })
  .then(console.log)
  .catch(console.error);
