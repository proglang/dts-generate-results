var Filter = require('ldap-filters');

var output = Filter.AND([
  Filter.attribute('givenName').equalTo('jenny'),
  Filter.attribute('sn').equalTo('jensen')
]);

console.log(output.toString());
