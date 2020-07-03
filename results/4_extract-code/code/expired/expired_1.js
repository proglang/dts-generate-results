const expired = require('expired');

const headers = `
Age: 0
Cache-Control: public, max-age=300
Content-Encoding: gzip
Content-Type: application/json;charset=utf-8
Date: Fri, 23 Dec 2016 05:50:31 GMT
Last-Modified: Fri, 23 Dec 2016 05:23:23 GMT`;

expired(headers);
// false

expired.in(headers);
// 500000

expired.on(headers);
// Date('2016-12-23T05:55:31.000Z')

delay(600000).then(() => {

  expired(headers);
  // true

  expired.in(headers);
  // -100000

  expired.on(headers);
  // Date('2016-12-23T05:55:31.000Z')

});
