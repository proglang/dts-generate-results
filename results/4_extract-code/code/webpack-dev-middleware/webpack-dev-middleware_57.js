const webpack = require('webpack');
const compiler = webpack({
  // webpack options
});
const isObject = require('is-object');
const middleware = require('webpack-dev-middleware');

// This function makes server rendering of asset references consistent with different webpack chunk/entry configurations
function normalizeAssets(assets) {
  if (isObject(assets)) {
    return Object.values(assets);
  }

  return Array.isArray(assets) ? assets : [assets];
}

app.use(middleware(compiler, { serverSideRender: true }));

// The following middleware would not be invoked until the latest build is finished.
app.use((req, res) => {
  const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;
  const fs = res.locals.fs;
  const outputPath = res.locals.webpackStats.toJson().outputPath;

  // then use `assetsByChunkName` for server-sider rendering
  // For example, if you have only one main chunk:
  res.send(`
<html>
  <head>
    <title>My App</title>
    <style>
    ${normalizeAssets(assetsByChunkName.main)
      .filter((path) => path.endsWith('.css'))
      .map((path) => fs.readFileSync(outputPath + '/' + path))
      .join('\n')}
    </style>
  </head>
  <body>
    <div id="root"></div>
    ${normalizeAssets(assetsByChunkName.main)
      .filter((path) => path.endsWith('.js'))
      .map((path) => `<script src="${path}"></script>`)
      .join('\n')}
  </body>
</html>
  `);
});
