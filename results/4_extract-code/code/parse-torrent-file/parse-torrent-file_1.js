var parseTorrentFile = require('parse-torrent-file')
var path = require('path')

var torrent = fs.readFileSync(path.join(__dirname, 'torrents/leaves.torrent'))
var parsed
try {
  parsed = parseTorrentFile(torrent)
} catch (e) {
  // the torrent file was corrupt
  console.error(e)
}

console.log(parsed.name) // Prints "Leaves of Grass by Walt Whitman.epub"
