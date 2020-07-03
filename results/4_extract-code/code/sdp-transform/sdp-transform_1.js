var transform = require('sdp-transform');

var sdpStr = "v=0\r\n\
o=- 20518 0 IN IP4 203.0.113.1\r\n\
s= \r\n\
t=0 0\r\n\
c=IN IP4 203.0.113.1\r\n\
a=ice-ufrag:F7gI\r\n\
a=ice-pwd:x9cml/YzichV2+XlhiMu8g\r\n\
a=fingerprint:sha-1 42:89:c5:c6:55:9d:6e:c8:e8:83:55:2a:39:f9:b6:eb:e9:a3:a9:e7\r\n\
m=audio 54400 RTP/SAVPF 0 96\r\n\
a=rtpmap:0 PCMU/8000\r\n\
a=rtpmap:96 opus/48000\r\n\
a=ptime:20\r\n\
a=sendrecv\r\n\
a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host\r\n\
a=candidate:1 2 UDP 2113667326 203.0.113.1 54401 typ host\r\n\
m=video 55400 RTP/SAVPF 97 98\r\n\
a=rtpmap:97 H264/90000\r\n\
a=fmtp:97 profile-level-id=4d0028;packetization-mode=1\r\n\
a=rtpmap:98 VP8/90000\r\n\
a=sendrecv\r\n\
a=candidate:0 1 UDP 2113667327 203.0.113.1 55400 typ host\r\n\
a=candidate:1 2 UDP 2113667326 203.0.113.1 55401 typ host\r\n\
";

var res = transform.parse(sdpStr);
// =>
{ version: 0,
  origin:
   { username: '-',
     sessionId: 20518,
     sessionVersion: 0,
     netType: 'IN',
     ipVer: 4,
     address: '203.0.113.1' },
  name: '',
  timing: { start: 0, stop: 0 },
  connection: { version: 4, ip: '203.0.113.1' },
  iceUfrag: 'F7gI',
  icePwd: 'x9cml/YzichV2+XlhiMu8g',
  fingerprint:
   { type: 'sha-1',
     hash: '42:89:c5:c6:55:9d:6e:c8:e8:83:55:2a:39:f9:b6:eb:e9:a3:a9:e7' },
  media:
   [ { rtp: [Object],
       fmtp: [],
       type: 'audio',
       port: 54400,
       protocol: 'RTP/SAVPF',
       payloads: '0 96',
       ptime: 20,
       direction: 'sendrecv',
       candidates: [Object] },
     { rtp: [Object],
       fmtp: [Object],
       type: 'video',
       port: 55400,
       protocol: 'RTP/SAVPF',
       payloads: '97 98',
       direction: 'sendrecv',
       candidates: [Object] } ] }


// each media line is parsed into the following format
res.media[1];
// =>
{ rtp:
   [ { payload: 97,
       codec: 'H264',
       rate: 90000 },
     { payload: 98,
       codec: 'VP8',
       rate: 90000 } ],
  fmtp:
   [ { payload: 97,
       config: 'profile-level-id=4d0028;packetization-mode=1' } ],
  type: 'video',
  port: 55400,
  protocol: 'RTP/SAVPF',
  payloads: '97 98',
  direction: 'sendrecv',
  candidates:
   [ { foundation: 0,
       component: 1,
       transport: 'UDP',
       priority: 2113667327,
       ip: '203.0.113.1',
       port: 55400,
       type: 'host' },
     { foundation: 1,
       component: 2,
       transport: 'UDP',
       priority: 2113667326,
       ip: '203.0.113.1',
       port: 55401,
       type: 'host' } ] }
