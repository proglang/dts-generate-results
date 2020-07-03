var Filter = require('ldap-filters');
var input = '(&(givenName~=jeni)(sn=jensen))';
var parsed = Filter.parse(input);

var data = { givenName: 'Jenny', sn: 'Jensen' };
console.log(parsed.match(data));
