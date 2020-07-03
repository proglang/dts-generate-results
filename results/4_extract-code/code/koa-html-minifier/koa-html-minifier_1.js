// do compression stuff first
app.use(require('koa-compress')());

// then use this minifier
app.use(require('koa-html-minifier')({
  collapseWhitespace: true
}));
