const defaultGateway = require('default-gateway');

defaultGateway.v4().then(result => {
  // result = {gateway: '1.2.3.4', interface: 'en1'}
});

defaultGateway.v6().then(result => {
  // result = {gateway: '2001:db8::1', interface: 'en2'}
});

const result = defaultGateway.v4.sync();
// result = {gateway: '1.2.3.4', interface: 'en1'}

const result = defaultGateway.v6.sync();
// result = {gateway: '2001:db8::1', interface: 'en2'}
