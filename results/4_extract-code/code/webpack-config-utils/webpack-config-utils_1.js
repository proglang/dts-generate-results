const webpack = require('webpack')
const {getIfUtils, removeEmpty} = require('webpack-config-utils')

const {ifProduction, ifNotProduction} = getIfUtils(process.env.NODE_ENV)

module.exports = {
  // ... your config
  mode: ifProduction('production', 'development'),
  entry: removeEmpty({
     app: ifProduction('./indexWithoutCSS', './indexWithCSS'),
     css: ifProduction('./style.scss')
  }),
  output: {
    chunkFilename: ifProduction('js/[id].[contenthash].js', 'js/[name].js'),
    filename: ifProduction('js/[id].[contenthash].js', 'js/[name].js'),
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        exclude: /node_modules/,
        use: removeEmpty([
          ifProduction(MiniCssExtractPlugin.loader),
          ifNotProduction({loader: 'style-loader', options: {sourceMap: true}}),
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'postcss-loader', options: {sourceMap: true}},
          {loader: 'sass-loader', options: {sourceMap: true}},
        ]),
      },
  },
  plugins: removeEmpty([
    ifProduction(
      new MiniCssExtractPlugin({
        filename: 'css/[id].[contenthash].css',
      })
    ),
    ifProduction(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    })),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'head',
    }),
    ifProduction(new OfflinePlugin()),
  ]),
}
