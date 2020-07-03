const stripe = require('stripe')('sk_test_...');

const onRequest = (request) => {
  // Do something.
}

// Add the event handler function:
stripe.on('request', onRequest);

// Remove the event handler function:
stripe.off('request', onRequest);
