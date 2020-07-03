var smtpapi   = require('smtpapi');
var header    = new smtpapi();
header.addTo('test@example.com');
header.setUniqueArgs({cow: 'chicken'});
console.log(header.jsonString());
