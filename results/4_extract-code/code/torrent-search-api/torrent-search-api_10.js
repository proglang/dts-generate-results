const TorrentSearchApi = require('torrent-search-api');

TorrentSearchApi.enableProvider('Torrent9');

// Search '1080' in 'Movies' category and limit to 20 results
const torrents = await TorrentSearchApi.search('1080', 'Movies', 20);
