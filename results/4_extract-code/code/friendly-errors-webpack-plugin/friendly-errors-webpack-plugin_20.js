var NotifierPlugin = require('friendly-errors-webpack-plugin');
var notifier = require('node-notifier');
var ICON = path.join(__dirname, 'icon.png');

new NotifierPlugin({
    onErrors: (severity, errors) => {
      if (severity !== 'error') {
        return;
      }
      const error = errors[0];
      notifier.notify({
        title: "Webpack error",
        message: severity + ': ' + error.name,
        subtitle: error.file || '',
        icon: ICON
      });
    }
  })
]
