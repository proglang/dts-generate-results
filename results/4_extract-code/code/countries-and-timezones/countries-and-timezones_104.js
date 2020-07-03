const ct = require('countries-and-timezones');

const mxTimezones = ct.getTimezonesForCountry('MX');
console.log(mxTimezones);

/*
Prints:

[ { name: 'America/Mexico_City',
    utcOffset: -360,
    offsetStr: '-06:00',
    countries: [ 'MX' ] },
  { name: 'America/Cancun',
    utcOffset: -300,
    offsetStr: '-05:00',
    countries: [ 'MX' ] },
  { name: 'America/Merida',
    utcOffset: -360,
    offsetStr: '-06:00',
    countries: [ 'MX' ] },
  { name: 'America/Monterrey',

...

*/

