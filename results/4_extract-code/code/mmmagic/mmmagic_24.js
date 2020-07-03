  var mmm = require('mmmagic'),
      Magic = mmm.Magic;

  var magic = new Magic(mmm.MAGIC_MIME_TYPE | mmm.MAGIC_MIME_ENCODING);
  // the above flags can also be shortened down to just: mmm.MAGIC_MIME
  magic.detectFile('node_modules/mmmagic/build/Release/magic.node', function(err, result) {
      if (err) throw err;
      console.log(result);
      // output on Windows with 32-bit node:
      //    application/x-dosexec; charset=binary
  });
