const WebSocket = require('ws');

const ws = new WebSocket('ws://www.host.com/path', {
  perMessageDeflate: false
});
