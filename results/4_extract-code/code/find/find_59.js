const { fs, vol } = require('memfs');

const json = {
  './README.md': '1',
  './src/index.js': '2'
};

vol.fromJSON(json, '/app');

find
  .use({ fs: fs })
  .file('/app', console.log);
