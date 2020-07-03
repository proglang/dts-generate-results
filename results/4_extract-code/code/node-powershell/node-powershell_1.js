const Shell = require('node-powershell');

const ps = new Shell({
  executionPolicy: 'Bypass',
  noProfile: true
});

ps.addCommand('echo node-powershell');
ps.invoke()
.then(output => {
  console.log(output);
})
.catch(err => {
  console.log(err);
});
