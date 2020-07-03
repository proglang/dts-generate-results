var glob = require('bash-glob');
glob.each(['*.js', '*.md'], {dot: true}, function(err, files) {
  if (err) return console.log(err);
  console.log(files);
});
