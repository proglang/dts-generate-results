var selenium = require('selenium-standalone');
selenium.start(function(err, child) {
  child.stderr.on('data', function(data){
    console.log(data.toString());
  });
});
