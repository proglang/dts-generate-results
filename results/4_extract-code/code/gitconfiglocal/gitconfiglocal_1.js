var gitconfig = require('gitconfiglocal');

gitconfig('./',function(err,config){
  console.log(config);
  /* prints:
  { core:
     { repositoryformatversion: '0',
       filemode: true,
       bare: false,
       logallrefupdates: true },
    remote:
     { origin:
        { url: 'git@github.com:soldair/node-gitconfiglocal.git',
          fetch: '+refs/heads/*:refs/remotes/origin/*' } } }
  */
});

