const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const options = { ... };

module.exports = {
	// an example entry definition
	entry: [
		'app.js',
		'webpack-plugin-serve/client' // ← important: this is required, where the magic happens in the browser
	]
  ...
  plugins: [
    new Serve(options)
  ],
  watch: true  // ← important: webpack and the server will continue to run in watch mode
};

