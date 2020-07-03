var cron = require('node-cron');

var task = cron.schedule('* * * * *', () =>  {
  console.log('will not execute anymore, nor be able to restart');
});

task.destroy();
