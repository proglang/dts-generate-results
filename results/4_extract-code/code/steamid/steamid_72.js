var SteamID = require('steamid');

var sid = new SteamID('[g:1:4681548]');
console.log(sid.getSteamID64()); // 103582791434202956

var sid2 = new SteamID('STEAM_0:0:23071901');
console.log(sid2.getSteamID64()); // 76561198006409530
