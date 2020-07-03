var Rsync = require('rsync');

// Build the command
var rsync = new Rsync()
  .shell('ssh')
  .flags('az')
  .source('/path/to/source')
  .destination('server:/path/to/destination');

// Execute the command
rsync.execute(function(error, code, cmd) {
    // we're done
});
