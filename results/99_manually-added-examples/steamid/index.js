var SteamID = require("steamid");
var sid3 = SteamID.fromIndividualAccountID(46143802);
var sid3 = SteamID.fromIndividualAccountID("46143802");
var sid1 = new SteamID("[U:1:46143802]");

sid1.isValid();
sid1.isGroupChat();
sid1.isLobby();
sid1.getSteam2RenderedID();
sid1.getSteam2RenderedID(true);
