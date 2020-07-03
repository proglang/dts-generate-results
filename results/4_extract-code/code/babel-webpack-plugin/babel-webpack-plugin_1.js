var BabelPlugin = require("babel-webpack-plugin");

plugins: [
	new BabelPlugin({
		test: /\.js$/,
		presets: ['es2015'],
		sourceMaps: false,
		compact: false
	})
]
