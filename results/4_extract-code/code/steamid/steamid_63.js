var SteamID = require('steamid');

var sid = new SteamID('76561198006409530');
console.log(sid.getSteam3RenderedID()); // [U:1:46143802]

var gid = new SteamID('103582791434202956');
console.log(gid.getSteam3RenderedID()); // [g:1:4681548]
