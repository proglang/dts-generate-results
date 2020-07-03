var remotes = require('list-git-remotes');

console.log(remotes.sync('some/project'));
//=> { origin: 'https://github.com/jonschlinkert/list-git-remotes.git' }

remotes('some/project', function(err, res) {
  if (err) throw err;
  console.log(res);
  //=> { origin: 'https://github.com/jonschlinkert/list-git-remotes.git' }
});
