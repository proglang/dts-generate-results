const webpack = require('webpack');
const compiler = webpack({ ... });
const middleware = require('webpack-dev-middleware');
const instance = middleware(compiler);

app.use(instance);

setTimeout(() => {
  // After a short delay the configuration is changed and a banner plugin is added
  // to the config
  compiler.apply(new webpack.BannerPlugin('A new banner'));

  // Recompile the bundle with the banner plugin:
  instance.invalidate();
}, 1000);
