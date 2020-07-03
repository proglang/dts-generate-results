const Onionoo = require('onionoo');
const onionoo = new Onionoo({
  baseUrl: 'https://onionoo.torproject.org',
  endpoints: [
    'summary',
    'details',
    'bandwidth',
    'weights',
    'clients',
    'uptime'
  ],
  cache: false
});
