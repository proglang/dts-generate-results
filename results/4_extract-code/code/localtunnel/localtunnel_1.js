var localtunnel = require('localtunnel');

var tunnel = localtunnel(port, function(err, tunnel) {
    if (err) ...

    // the assigned public url for your tunnel
    // i.e. https://abcdefgjhij.localtunnel.me
    tunnel.url;
});

tunnel.on('close', function() {
    // tunnels are closed
});
