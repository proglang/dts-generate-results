const webpack = require('webpack');
const compiler = webpack({ ... });
const middleware = require('webpack-dev-middleware');
const instance = middleware(compiler);

app.use(instance);

instance.waitUntilValid(() => {
  console.log('Package is in a valid state');
});
