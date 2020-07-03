var cfgManager = require('node-config-manager'),
    options = {
		configDir: './config',
		env: 'test',
		camelCase: true
	};

cfgManager.init(options);
