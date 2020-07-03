const o = require('odata');

// promise example
o('http://my.url')
  .get('resource')
  .then((data) => console.log(data));
