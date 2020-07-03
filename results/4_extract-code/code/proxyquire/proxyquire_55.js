var foostub = require('../stubs/foostub');
foostub['@global'] = true;
proxyquire('bar', {
  foo: foostub
});
