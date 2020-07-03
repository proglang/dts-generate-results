var cfgManager = require('node-config-manager');

cfgManager.addConfig('db') //Load config/test/db.json
		  .addConfig('logger'); // Load config/logger.js
