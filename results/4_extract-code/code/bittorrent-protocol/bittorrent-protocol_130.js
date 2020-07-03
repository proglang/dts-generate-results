const Protocol = require('bittorrent-protocol')
const net = require('net')
const ut_metadata = require('ut_metadata')

net.createServer(socket => {
  const wire = new Protocol()
  socket.pipe(wire).pipe(socket)

  // initialize the extension
  wire.use(ut_metadata())

  // all `ut_metadata` functionality can now be accessed at wire.ut_metadata

  // ask the peer to send us metadata
  wire.ut_metadata.fetch()

  // 'metadata' event will fire when the metadata arrives and is verified to be correct!
  wire.ut_metadata.on('metadata', metadata => {
    // got metadata!

    // Note: the event will not fire if the peer does not support ut_metadata, if they
    // don't have metadata yet either, if they repeatedly send invalid data, or if they
    // simply don't respond.
  })

  // optionally, listen to the 'warning' event if you want to know that metadata is
  // probably not going to arrive for one of the above reasons.
  wire.ut_metadata.on('warning', err => {
    console.log(err.message)
  })

  // handle handshake
  wire.on('handshake', (infoHash, peerId) => {
    // receive a handshake (infoHash and peerId are hex strings)
    wire.handshake(new Buffer('my info hash'), new Buffer('my peer id'))
  })

}).listen(6881)
