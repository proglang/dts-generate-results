let orderHandlers = require('./handlers/order');
burns.registerEvents({
  orderShipped: orderHandlers.sendOrderShippedEmail
});
