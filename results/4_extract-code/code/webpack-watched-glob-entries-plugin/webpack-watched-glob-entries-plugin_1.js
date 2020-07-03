
// Get the plugin
const WebpackWatchedGlobEntries = require('webpack-watched-glob-entries-plugin');
 
// In your Webpack config:
{
    ... // At your entry definition
    
    entry: WebpackWatchedGlobEntries.getEntries(
      [ 
        // Your path(s) 
        path.resolve(__dirname, 'entry/**/*.js'),
        path.resolve(__dirname, 'more/entries/**/*.js')
      ],
      {
          // Optional glob options that are passed to glob.sync()
          ignore: '**/*.test.js'
      }
    )
    
    ... // At the plugin definition
    
    plugins: [
        new WebpackWatchedGlobEntries(),
    ],
    
    ...
}

