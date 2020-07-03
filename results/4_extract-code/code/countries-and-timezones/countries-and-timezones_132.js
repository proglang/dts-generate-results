const ct = require('countries-and-timezones');

const nyTimezone = ct.getCountriesForTimezone('America/New_York');
console.log(nyTimezone);

/*
Prints:

[ { id: 'US',
    name: 'United States',
    timezones: 
     [ 'America/New_York',
       'America/Detroit',
       'America/Kentucky/Louisville',
       'America/Kentucky/Monticello',
       'America/Indiana/Indianapolis',
       'America/Indiana/Vincennes',
       'America/Indiana/Winamac',
       'America/Indiana/Marengo',
       'America/Indiana/Petersburg',

...

*/

