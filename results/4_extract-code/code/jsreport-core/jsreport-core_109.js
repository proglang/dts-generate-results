require('jsreport-core')({
	// optionally specifies where's the application root and where jsreport searches for extensions
	rootDirectory: path.join(__dirname, '../../'),
	// optionally specifies where the application stores temporary files used by the conversion pipeline
	tempDirectory: path.join(dataDirectory, 'temp'),
	// options for logging
	logger: {
		silent: false // when true, it will silence all transports defined in logger
	},
	// options for templating engines and other scripts execution
	// see the https://github.com/pofider/node-script-manager for more information
	templatingEngines: {
		numberOfWorkers: 2,
		strategy: "http-server | dedicated-process | in-process",
		templateCache: {
			max: 100, //LRU cache with max 100 entries, see npm lru-cache for other options
			enabled: true //disable cache
		}
	},
	loadConfig: false,
	// the temporary files used to render reports are cleaned up by default
	autoTempCleanup: true,
	// set to false when you want to always force crawling node_modules when searching for extensions and starting jsreport
	useExtensionsLocationCache: true
})
