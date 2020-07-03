var https = require('https'),
    MessageValidator = require('sns-validator'),
    validator = new MessageValidator();

validator.validate(message, function (err, message) {
    if (err) {
        console.error(err);
        return;
    }

    if (message['Type'] === 'SubscriptionConfirmation') {
        https.get(message['SubscribeURL'], function (res) {
          // You have confirmed your endpoint subscription
        });
    }
});
