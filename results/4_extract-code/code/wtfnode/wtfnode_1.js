var wtf = require('wtfnode');

wtf.setLogger('info', function (...) { ... });
wtf.setLogger('warn', function (...) { ... });
wtf.setLogger('error', function (...) { ... });

wtf.resetLoggers(); // if you want to put them back for some reason
