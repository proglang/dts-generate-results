const koaWebpack = require('koa-webpack');
const config = require('./webpack.config.js');

const middleware = await koaWebpack({ config });

app.use(middleware);
