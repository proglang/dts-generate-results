var Address6 = require('ip-address').Address6;

var address = new Address6('2001:0:ce49:7601:e866:efff:62c3:fffe');

address.isValid(); // true

var teredo = address.inspectTeredo();

teredo.client4;    // '157.60.0.1'
