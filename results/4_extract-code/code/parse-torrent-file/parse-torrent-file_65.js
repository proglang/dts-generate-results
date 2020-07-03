var parseTorrentFile = require('parse-torrent-file')

// parse a torrent
var parsed = parseTorrentFile(/* some buffer */)

// convert parsed torrent back to a buffer
var buf = parseTorrentFile.encode(parsed)
