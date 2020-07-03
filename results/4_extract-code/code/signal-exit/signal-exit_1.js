var onExit = require('signal-exit')

onExit(function (code, signal) {
  console.log('process exited!')
})
