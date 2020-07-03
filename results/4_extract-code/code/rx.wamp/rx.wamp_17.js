
var rxwamp = require('rx.wamp');


//Do stuff with the autobahn
//This works for both versions, though realm is only required in version 2
Rx.Observable
  .fromConnection({url: 'ws://localhost:9000', realm: 'realm1'});

