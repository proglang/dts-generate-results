const Protocol = require('bittorrent-protocol')
const net = require('net')

net.createServer(socket => {
	const wire = new Protocol()

	// pipe to and from the protocol
	socket.pipe(wire).pipe(socket)

	wire.on('handshake', (infoHash, peerId) => {
    // receive a handshake (infoHash and peerId are hex strings)

		// lets emit a handshake of our own as well
		wire.handshake('my info hash (hex)', 'my peer id (hex)')
	})

	wire.on('unchoke', () => {
		console.log('peer is no longer choking us: ' + wire.peerChoking)
	})
}).listen(6881)
