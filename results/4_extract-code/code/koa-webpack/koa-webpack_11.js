const webpack = require('webpack');
const config = require('./webpack.config.js');
const koaWebpack = require('koa-webpack');

const compiler = Webpack(config);
const middleware = await koaWebpack({ compiler });

app.use(middleware);
