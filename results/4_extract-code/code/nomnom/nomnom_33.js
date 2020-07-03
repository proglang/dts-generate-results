var parser = require("nomnom");

parser.command('browser')
   .callback(function(opts) {
      runBrowser(opts.url);
   })
   .help("run browser tests");

parser.command('sanity')
   .option('outfile', {
      abbr: 'o',
      help: "file to write results to"
   })
   .option('config', {
      abbr: 'c',
      default: 'config.json',
      help: "json manifest of tests to run"
   })
   .callback(function(opts) {
      runSanity(opts.filename);
   })
   .help("run the sanity tests")

parser.parse();
