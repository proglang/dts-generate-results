var opts = require("nomnom").parse();

var url = opts[0];     // get the first positional arg
var file = opts.file   // see if --file was specified
var verbose = opts.v   // see if -v was specified
var extras = opts._    // get an array of the unmatched, positional args
