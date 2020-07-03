// this is a debug file...
var logg = require('logg');

// display messages to console
logg.addConsole();

// set logging level of "app.model.apple" to lowest.
logg.getLogger('app.model.apple').setLogLevel(logg.Level.FINEST);

