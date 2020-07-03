var glob = require('bash-glob');
glob('*.js', function(err, files) {
  if (err) return console.log(err);
  console.log(files);
});
