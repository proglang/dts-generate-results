var uglifyEs = require('uglify-es');
app.use(minify({
  uglifyJsModule: uglifyEs,
}));
