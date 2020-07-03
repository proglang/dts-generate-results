const parseTorrent = require('parse-torrent')

const uri = parseTorrent.toMagnetURI({
  infoHash: 'd2474e86c95b19b8bcfdb92bc12c9d44667cfa36'
})
console.log(uri) // 'magnet:?xt=urn:btih:d2474e86c95b19b8bcfdb92bc12c9d44667cfa36'

const buf = parseTorrent.toTorrentFile({
  info: {
    /* ... */
  }
})
console.log(buf)
