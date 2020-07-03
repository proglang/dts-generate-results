var pidusage = require('pidusage')

// Compute statistics every second:
setInterval(function () {
  pidusage(process.pid, function (err, stats) {
    console.log(stats)
    // => {
    //   cpu: 10.0,            // percentage (from 0 to 100*vcore)
    //   memory: 357306368,    // bytes
    //   ppid: 312,            // PPID
    //   pid: 727,             // PID
    //   ctime: 867000,        // ms user + system time
    //   elapsed: 6650000,     // ms since the start of the process
    //   timestamp: 864000000  // ms since epoch
    // }
  })
}, 1000)

// It supports also multiple pids
pidusage([727, 1234], function (err, stats) {
  console.log(stats)
  // => {
  //   727: {
  //     cpu: 10.0,            // percentage (from 0 to 100*vcore)
  //     memory: 357306368,    // bytes
  //     ppid: 312,            // PPID
  //     pid: 727,             // PID
  //     ctime: 867000,        // ms user + system time
  //     elapsed: 6650000,     // ms since the start of the process
  //     timestamp: 864000000  // ms since epoch
  //   },
  //   1234: {
  //     cpu: 0.1,             // percentage (from 0 to 100*vcore)
  //     memory: 3846144,      // bytes
  //     ppid: 727,            // PPID
  //     pid: 1234,            // PID
  //     ctime: 0,             // ms user + system time
  //     elapsed: 20000,       // ms since the start of the process
  //     timestamp: 864000000  // ms since epoch
  //   }
  // }
})

// If no callback is given it returns a promise instead
const stats = await pidusage(process.pid)
console.log(stats)
// => {
//   cpu: 10.0,            // percentage (from 0 to 100*vcore)
//   memory: 357306368,    // bytes
//   ppid: 312,            // PPID
//   pid: 727,             // PID
//   ctime: 867000,        // ms user + system time
//   elapsed: 6650000,     // ms since the start of the process
//   timestamp: 864000000  // ms since epoch
// }
