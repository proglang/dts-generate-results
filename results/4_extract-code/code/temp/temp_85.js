var fs   = require('fs'),
    temp = require('temp');

fs.readFile('/path/to/source.pdf', function(err, data) {
  temp.open({suffix: '.pdf'}, function(err, info) {
    if (err) throw err;
    fs.write(info.fd, data);
    fs.close(info.fd, function(err) {
      if (err) throw err;
      // Do something with the file
    });
  });
});
