/**
 * @module {Object} webpack.config
 */
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

/** @constant {Object} Application entry points and bundle names */
const APPS = {
  home: path.resolve(__dirname, 'src/home'),
  posts: path.resolve(__dirname, 'src/posts'),
  users: path.resolve(__dirname, 'src/users'),
}

/** @constant {string} build directory name */
const OUTPUT_DIR = 'dist';

/**
 * @alias webpack.config
 * @type {Object}
 */
module.exports = {

  entry: APPS,

  output: {
    path: path.resolve(__dirname, OUTPUT_DIR),
    filename: '[name].[hash].js',
  },

  plugins: [
    // iterate over each `entry[app]` key.
    ...Object.keys(APPS)
      .map(app => new SWPrecacheWebpackPlugin({
        cacheId: `${app}`,
        filename: `${app}-service-worker.js`,
        stripPrefix: OUTPUT_DIR,
        // We specify paths to the compiled destinations of resources for each "app's"
        // bundled resources. This is one way to separate bundled assets for each
        // application.
        staticFileGlobs: [
          `${OUTPUT_DIR}/js/manifest.*.js`,
          `${OUTPUT_DIR}/js/${app}.*.js`,
          `${OUTPUT_DIR}/css/${app}.*.css`,
          `${OUTPUT_DIR}/${app}.html`,
        ],
      })),
  ],
}
