// in browser
ws = new Wampy();
ws = new Wampy('/my-socket-path');
ws = new Wampy('ws://socket.server.com:5000/ws', { autoReconnect: false });
ws = new Wampy({ reconnectInterval: 1*1000 });

// in node.js
w3cws = require('websocket').w3cwebsocket;
ws = new Wampy(null, { ws: w3cws });
ws = new Wampy('/my-socket-path', { ws: w3cws });
ws = new Wampy('ws://socket.server.com:5000/ws', { autoReconnect: false, ws: w3cws });
ws = new Wampy({ reconnectInterval: 1*1000, ws: w3cws });

