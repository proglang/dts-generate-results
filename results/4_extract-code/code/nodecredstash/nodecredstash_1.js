let Credstash = require('nodecredstash');

let credstash = new Credstash({table: 'credential-store', awsOpts: {region: 'us-west-2'}});

credstash.putSecret({name: 'Death Star vulnerability', secret: 'Exhaust vent', version: 1, context: {rebel: 'true'}})
  .then(() => credstash.getSecret({name: 'Death Star vulnerability', version: 1, context: {rebel: 'true'}})
  .then(secret => console.log(secret));
