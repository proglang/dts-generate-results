var NodeResque = require(__dirname + "/../index.js");

var connectionDetails = {
  pkg:       "ioredis",
  host:      "127.0.0.1",
  password:  ""
}

var multiWorker = new NodeResque.MultiWorker({
  connection: connectionDetails,
  queues: ['slowQueue'],
  minTaskProcessors:   1,
  maxTaskProcessors:   100,
  checkTimeout:        1000,
  maxEventLoopDelay:   10,  
}, jobs);

// normal worker emitters
multiWorker.on('start',             (workerId) => {                      console.log("worker["+workerId+"] started"); })
multiWorker.on('end',               (workerId) => {                      console.log("worker["+workerId+"] ended"); })
multiWorker.on('cleaning_worker',   (workerId, worker, pid) => {         console.log("cleaning old worker " + worker); })
multiWorker.on('poll',              (workerId, queue) => {               console.log("worker["+workerId+"] polling " + queue); })
multiWorker.on('ping',              (workerId, time) => {               console.log("worker["+workerId+"] check in @ " + time); })
multiWorker.on('job',               (workerId, queue, job) => {          console.log("worker["+workerId+"] working job " + queue + " " + JSON.stringify(job)); })
multiWorker.on('reEnqueue',         (workerId, queue, job, plugin) => {  console.log("worker["+workerId+"] reEnqueue job (" + plugin + ") " + queue + " " + JSON.stringify(job)); })
multiWorker.on('success',           (workerId, queue, job, result) => {  console.log("worker["+workerId+"] job success " + queue + " " + JSON.stringify(job) + " >> " + result); })
multiWorker.on('failure',           (workerId, queue, job, failure) => { console.log("worker["+workerId+"] job failure " + queue + " " + JSON.stringify(job) + " >> " + failure); })
multiWorker.on('error',             (workerId, queue, job, error) => {   console.log("worker["+workerId+"] error " + queue + " " + JSON.stringify(job) + " >> " + error); })
multiWorker.on('pause',             (workerId) => {                      console.log("worker["+workerId+"] paused"); })

// multiWorker emitters
multiWorker.on('internalError',     (error) => {                         console.log(error); })
multiWorker.on('multiWorkerAction', (verb, delay) => {                   console.log("*** checked for worker status: " + verb + " (event loop delay: " + delay + "ms)"); });

multiWorker.start();
