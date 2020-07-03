var cron = require('node-cron');

cron.schedule('* * * January,September Sunday', () => {
  console.log('running on Sundays of January and September');
});
