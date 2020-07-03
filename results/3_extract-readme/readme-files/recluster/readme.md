# recluster

Clustering library with support for zero-downtime reloading

# usage

If server.js is your regular http server (e.g. express), create
cluster.js and add:

```js
var recluster = require('recluster'),
    path = require('path');

var cluster = recluster(path.join(__dirname, 'server.js'));
cluster.run();

process.on('SIGUSR2', function() {
    console.log('Got SIGUSR2, reloading cluster...');
    cluster.reload();
});

console.log("spawned cluster, kill -s SIGUSR2", process.pid, "to reload");
```

then run it

    node cluster.js

To hot-reload the server, simply run

    kill -s SIGUSR2 <cluster_pid>

To find out which of the N (= number of cores by default) worker
instances you're running from inside server.js, you can use

    process.env.WORKER_ID

which is zero-based i.e. 0 <= WORKER_ID < N

# options

```js
var cluster = recluster(file, opt)
```

where

### file

Absolute path to the module that defines the server

### opt.workers

Number of active workers (default = cores)

### opt.timeout

Timeout to kill old workers after reload (seconds).

Defaults to 1 second in development, 1 hour in production.

### opt.respawn

Minimum time between worker respawns when workers die (seconds)

### opt.backoff

Maximum respawn time (reached via exponential backoff). Set to
0 or undefined to disable exponential backoff.

### opt.readyWhen

Use `'listening'` for servers (e.g. for express/connect http servers)
and `'started'` for workers that are immediately ready.

If you want to manually tell recluster when the worker is ready to replace
older workers you can use `{readyWhen: 'ready'}`. Then, to signal readiness
from the worker use `process.send({cmd: 'ready'})`

### opt.args

Array of arguments to pass to the worker

### opt.log

Log various events to stdout. Currently only 'respawns' is supported.
Default: `{respawns: true}`

### opt.logger

Which logger to use. Requires a console-compatible log method
Default: `console`

# cluster

The returned object has the following methods:

### cluster.run

Starts the cluster by running child processes

### cluster.reload(cb)

Hot-reloads new code. some of the children will remain active
for `opt.timeout` seconds after reload

### cluster.terminate(cb)

Terminates the entire cluster and removes all listeners.

### cluster.activeWorkers()

Returns a hash of all worker slots (0 <= WORKER_ID < N). If a worker isn't
available at that slot, the value in the hash is null or undefined. Otherwise,
the value will be a worker object that is ready to serve requests.

### cluster.workers()

Returns an array of all the workers, including those that are not
yet ready or those that will be replaced.

# worker cleanup

A server worker can gracefully exit by cleaning up in the 'close' event
of its server:

```js
server.on('close', function() {
    // cleanup
});
```

Non-server workers can listen for the disconnect command and shut down
gracefully before the kill timeout:

```js
process.on('message', function(m) {
    if (m.cmd == 'disconnect') {
        // cleanup
    }
})
```

# sticky sessions support

If you need sticky sessions e.g. for socket.io you can use the experimental
companion module [sticky-listen][sticky-listen], which implements an alternate
balancer that distributes the sockets based on the client IP (instead of the
regular round-robin one)


[sticky-listen]: https://github.com/spion/sticky-listen

![Bitdeli](https://d2weczhvl823v0.cloudfront.net/spion/recluster/trend.png)

