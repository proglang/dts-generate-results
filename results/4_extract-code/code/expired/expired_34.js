const expired = require('expired');

const headers = {
  'age': '0',
  'cache-control': 'public, max-age=300',
  'content-encoding': 'gzip',
  'content-type': 'application/json;charset=utf-8',
  'date': 'Fri, 23 Dec 2016 05:50:31 GMT',
  'last-modified': 'Fri, 23 Dec 2016 05:23:23 GMT'
};

expired(headers);
// false
