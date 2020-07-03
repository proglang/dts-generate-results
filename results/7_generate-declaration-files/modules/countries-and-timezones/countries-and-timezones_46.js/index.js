var ct = require('countries-and-timezones');

var countries = ct.getAllCountries();
console.log(countries);

/*
Prints:

{ AD: { id: 'AD', name: 'Andorra', timezones: [ 'Europe/Andorra' ] },
  AE: 
   { id: 'AE',
     name: 'United Arab Emirates',
     timezones: [ 'Asia/Dubai' ] },
  AF: { id: 'AF', name: 'Afghanistan', timezones: [ 'Asia/Kabul' ] },
  AG: 
   { id: 'AG',
     name: 'Antigua & Barbuda',
     timezones: [ 'America/Port_of_Spain' ] },
  AI: 
   { id: 'AI',
     name: 'Anguilla',
     timezones: [ 'America/Port_of_Spain' ] },

...

*/
