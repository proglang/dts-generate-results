var WebSocketJSONStream = require('@teamwork/websocket-json-stream');

// 'ws' is a websocket server connection, as passed into
// new (require('ws').Server).on('connection', ...)
var stream = new WebSocketJSONStream(ws);
share.listen(stream);
