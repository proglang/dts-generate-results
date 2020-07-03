  var mmm = require('mmmagic'),
      Magic = mmm.Magic;

  var magic = new Magic(mmm.MAGIC_MIME_TYPE);
  magic.detectFile('node_modules/mmmagic/build/Release/magic.node', function(err, result) {
      if (err) throw err;
      console.log(result);
      // output on Windows with 32-bit node:
      //    application/x-dosexec
  });
