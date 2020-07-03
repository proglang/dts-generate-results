var addRemote = require('git-add-remote')();

addRemote('foo', 'https://foo.git', function(err) {
  if (err) return console.log(err);
});
