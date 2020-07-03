var phoneFormatter = require('phone-formatter');

phoneFormatter.normalize('212.555.1212');
// returns "2125551212"

phoneFormatter.normalize('+1 (212) 555-1212');
// returns "2125551212"
