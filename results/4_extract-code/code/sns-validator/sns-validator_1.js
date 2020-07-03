var MessageValidator = require('sns-validator'),
    validator = new MessageValidator();

validator.validate(message, function (err, message) {
    if (err) {
        // Your message could not be validated.
        return;
    }

    // message has been validated and its signature checked.
});
