const hook = require('css-modules-require-hook');

hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});

// const styles = require('./icon.css');
