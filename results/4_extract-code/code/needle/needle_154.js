var tunnel = require('tunnel');
var myAgent = tunnel.httpOverHttp({
  proxy: { host: 'localhost' }
});

needle.get('foobar.com', { agent: myAgent });
