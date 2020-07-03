var ct = require('countries-and-timezones');

var timezones = ct.getAllTimezones();
console.log(timezones);

/*
Prints:

{ 'Europe/Andorra': 
   { name: 'Europe/Andorra',
     utcOffset: 60,
     offsetStr: '+01:00',
     countries: [ 'AD' ] },
  'Asia/Dubai': 
   { name: 'Asia/Dubai',
     utcOffset: 240,
     offsetStr: '+04:00',
     countries: [ 'AE', 'OM' ] },
  'Asia/Kabul': 
   { name: 'Asia/Kabul',
     utcOffset: 270,
     offsetStr: '+04:30',
     countries: [ 'AF' ] },

...

*/

