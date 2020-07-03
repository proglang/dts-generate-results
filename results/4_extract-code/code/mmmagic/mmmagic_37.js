  var Magic = require('mmmagic').Magic;

  var magic = new Magic(),
        buf = new Buffer('import Options\nfrom os import unlink, symlink');
  
  magic.detect(buf, function(err, result) {
      if (err) throw err;
      console.log(result);
      // output: Python script, ASCII text executable
  });
