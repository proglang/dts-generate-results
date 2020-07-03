npm install playmusic
node

var pm = new (require('playmusic'));
pm.init({email: "email", password: "password"}, function() {});
// var pm = new (require('./'))();  pm.init(JSON.parse(require('fs').readFileSync("./examples/config.json")));

pm.getPlayLists();
pm.getPlayListEntries();

// getArtist - artistId, albumList, topTrackCount, relatedArtistCount[, callback]
pm.getArtist('Ak6zkmv2zbbsaxl63cgsnx5ttcm', true, 2, 2, console.log);

// getStreamUrl for All Access - sj#track -> storeId
pm.getStreamUrl('Tsbbwp6r2wpwxb55noc6b26kwq4', console.log);

// getStreamUrl for uploaded - sj#track -> id
pm.getStreamUrl('84df1e4e-6b76-3147-9a78-a44becc28dc5', console.log);


// Find all uploaded tracks (tracks returned by getAllTracks without a storeId), get a streamUrl for one of them
var allTracks;
pm.getAllTracks(function(data) { allTracks = data.data.items; });
var searchResults = allTracks.filter(function(track) { return typeof track.storeId === "undefined"; });
console.log(searchResults[0]);
pm.getStreamUrl(searchResults[0].id, console.log);
