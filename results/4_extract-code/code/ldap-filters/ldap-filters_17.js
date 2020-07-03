var Filter = require('ldap-filters');
var input = '(&(givenName=jenny)(sn=jensen))';

Filter.parse(input);
