var cluster = require('cluster');

if (cluster.isMaster) {
  // Make sure workers get their own stdout/stderr streams
  cluster.setupMaster({silent: true});

  // require log transformer module
  var transformer = require('strong-log-transformer');

  // Following the 12-factor app model, we pipe to stdout, but we could easily
  // pipe to any other stream(s), such as a FileStream for a log file.

  // stdout is plain line-oriented logs, but we want to add timestamps
  var info = transformer({ timeStamp: true,
                           tag: 'INFO' });
  // stderr will only be used for strack traces on crash, which are multi-line
  var error = transformer({ timeStamp: true,
                            tag: 'ERROR',
                            mergeMultiline: true });

  // Each worker's stdout/stderr gets piped into our info and erro transformers
  cluster.on('fork', function(worker) {
    console.error('connecting worker');
    worker.process.stdout.pipe(info).pipe(process.stdout);
    worker.process.stderr.pipe(error).pipe(process.stdout);
  });

  //... cluster fork logic goes here ...
  cluster.fork();

} else {
  //... worker code here ...

  console.log('new worker, this line will be timestamped!');
  throw new Error('This will generate a multi-line message!');
}

