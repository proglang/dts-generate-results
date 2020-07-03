var browserslist = require('browserslist');

// Your CSS/JS build tool code
var process = function (source, opts) {
    var browsers = browserslist(opts.browsers, {
        stats: opts.stats,
        path:  opts.file,
        env:   opts.env
    });
    // Your code to add features for selected browsers
}
