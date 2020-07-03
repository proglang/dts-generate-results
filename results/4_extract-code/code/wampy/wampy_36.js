// in browser
ws = new Wampy('ws://socket.server.com:5000/ws', {
    serializer: new MsgpackSerializer(msgpack5)
});
ws = new Wampy({
    serializer: new MsgpackSerializer(msgpack5)
});

// in node.js
import {Wampy} from 'wampy';
import {MsgpackSerializer} from 'wampy/dist/serializers';
import {w3cws} from 'websocket';

const msgpack5 = require('msgpack5');

ws = new Wampy('ws://socket.server.com:5000/ws', {
    ws: w3cws,
    serializer: new MsgpackSerializer(msgpack5())
});
ws = new Wampy({
    ws: w3cws,
    serializer: new MsgpackSerializer(msgpack5())
});

