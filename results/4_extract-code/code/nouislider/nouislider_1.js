// webpack.config.js
var webpack = require('webpack');
...
plugins: [
	new webpack.ProvidePlugin({
		noUiSlider: 'nouislider'
	})
]
...
