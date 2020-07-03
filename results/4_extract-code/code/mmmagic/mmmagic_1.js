  var Magic = require('mmmagic').Magic;

  var magic = new Magic();
  magic.detectFile('node_modules/mmmagic/build/Release/magic.node', function(err, result) {
      if (err) throw err;
      console.log(result);
      // output on Windows with 32-bit node:
      //    PE32 executable (DLL) (GUI) Intel 80386, for MS Windows
  });
