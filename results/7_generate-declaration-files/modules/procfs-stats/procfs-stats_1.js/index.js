
var procfs = require('procfs-stats');
var ps = procfs(process.pid);

ps.io(function(err,io){

  console.log('my process has done this much io',io);

})

