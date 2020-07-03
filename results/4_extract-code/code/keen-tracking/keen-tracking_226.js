const KeenTracking = require('keen-tracking');

const client = new KeenTracking({
  projectId: 'PROJECT_ID',
  writeKey: 'WRITE_KEY'
});

// promise
client
  .recordEvent('purchases', {
    item: 'Avocado',
    number_of_items: 10,
    user: {
      name: 'John Promise'
    }
  })
  .then((response) => {
    // handle successful responses
  })
  .catch(error => {
    // handle errors
  });

// or callback
client
  .recordEvent('purchases', {
    item: 'Avocado',
    number_of_items: 10,
    user: {
      name: 'John Callback'
    }
  }, (error, response) => {
    if (error) {
      // handle errors
      return;
    }
    // handle responses
  });
