var path = require('path'),
    im = require('istanbul-middleware');

// do the server side stuff as described above

// add a client handler at the appropriate place
// (before your static handler, for example)
// all JS files under here will be sent instrumented to the browser
// see API below for additional options (e.g. ignoring framework code)
app.use(im.createClientHandler(__dirname));

// however, it will only reliably work for simple cases
// such as absolute URLs to the JS.
// you still need to post the coverage numbers to the
//server from your browser tests
