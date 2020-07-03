var exec = require('mz/child_process').exec

exec('node --version').then(function (stdout) {
  console.log(stdout)
})
