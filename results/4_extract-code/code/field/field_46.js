var field = require('field')

var bigObject = {
  host: {
    url: 'http://myserver.com'
  }
  /*
    ... some big object ...
  */
};

bigObject.get = field.get.bind(bigObject)
bigObject.set = field.set.bind(bigObject)

console.log(bigObject.get('host.url'))
// => 'http://myserver.com'
