const relateURL = require('relateurl');

const base = new URL('http://domain.com/seg1/seg1-1/');
const url  = new URL('//domain.com/seg1/seg1-2/index.html', base);

relateURL(url, base, options);
//-> ../seg1-2/
