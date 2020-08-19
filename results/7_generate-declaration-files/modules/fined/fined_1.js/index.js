var fined = require('fined');

fined({ path: 'path/to/file', extensions: ['.js', '.json'] });
// => { path: '/absolute/path/to/file.js', extension: '.js' }  (if file exists)
// => null  (if file does not exist)

var opts = {
  name: '.app',
  cwd: '.',
  extensions: {
    'rc': 'default-rc-loader',
    '.yml': 'default-yml-loader',
  },
};

fined({ path: '.' }, opts);
// => { path: '/absolute/of/cwd/.app.yml', extension: { '.yml': 'default-yml-loader' } }

fined({ path: '~', extensions: { 'rc': 'some-special-rc-loader' } }, opts);
// => { path: '/User/home/.apprc', extension: { 'rc': 'some-special-rc-loader' } }
