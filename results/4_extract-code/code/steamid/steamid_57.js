var SteamID = require('steamid');
var sid = new SteamID('76561198006409530');
console.log(sid.getSteam2RenderedID()); // STEAM_0:0:23071901
console.log(sid.getSteam2RenderedID(true)); // STEAM_1:0:23071901
