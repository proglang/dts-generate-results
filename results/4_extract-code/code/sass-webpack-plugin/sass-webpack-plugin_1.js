  // webpack.config.js
  const SassPlugin = require('sass-webpack-plugin');
  const HtmlPlugin = require('html-webpack-plugin');
  const contentBase = path.join(__dirname, 'build');

  module.exports = {
    entry: './src/js/index.js',
    plugins: [
      new SassPlugin('./src/styles/index.scss', process.env.NODE_ENV),
      new HtmlPlugin({
        inject: false,
        template: require('html-webpack-template'),
        title: 'Sass webpack plugin',
        links: [{ rel: 'stylesheet', type: 'text/css', href: '/index.css' }],
        appMountId: 'app'
      })
    ],
    module: {
      // babel, linter, etc
    },
    output: {
      path: contentBase,
      filename: 'index.js'
    },
    devServer: (process.env.NODE_ENV === 'production') ? false : {
      contentBase: contentBase,
      compress: true,
      port: 3000
    }
  };
