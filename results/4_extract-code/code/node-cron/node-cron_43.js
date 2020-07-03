var cron = require('node-cron');

var task = cron.schedule('* * * * *', () =>  {
  console.log('stopped task');
}, {
  scheduled: false
});

task.start();
