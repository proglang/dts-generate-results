const moduleAlias = require('module-alias')

//
// Register alias
//
moduleAlias.addAlias('@client', __dirname + '/src/client')

// Or multiple aliases
moduleAlias.addAliases({
  '@root'  : __dirname,
  '@client': __dirname + '/src/client',
  ...
})

// Custom handler function (starting from v2.1)
moduleAlias.addAlias('@src', (fromPath, request, alias) => {
  // fromPath - Full path of the file from which `require` was called
  // request - The path (first argument) that was passed into `require`
  // alias - The same alias that was passed as first argument to `addAlias` (`@src` in this case)

  // Return any custom target path for the `@src` alias depending on arguments
  if (fromPath.startsWith(__dirname + '/others')) return __dirname + '/others'
  return __dirname + '/src'
})

//
// Register custom modules directory
//
moduleAlias.addPath(__dirname + '/node_modules_custom')
moduleAlias.addPath(__dirname + '/src')

//
// Import settings from a specific package.json
//
moduleAlias(__dirname + '/package.json')

// Or let mudule-alias to figure where your package.json is
// located. By default it will look in the same directory
// where you have your node_modules (application's root)
moduleAlias()
