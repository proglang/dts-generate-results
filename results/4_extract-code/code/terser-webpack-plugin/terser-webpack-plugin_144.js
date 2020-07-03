module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        minify: (file, sourceMap) => {
          const extractedComments = [];

          // Custom logic for extract comments

          const { error, map, code, warnings } = require('uglify-module') // Or require('./path/to/uglify-module')
            .minify(file, {
              /* Your options for minification */
            });

          return { error, map, code, warnings, extractedComments };
        },
      }),
    ],
  },
};
