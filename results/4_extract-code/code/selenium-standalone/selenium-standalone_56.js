var selenium = require('selenium-standalone');
selenium.start({
  spawnOptions: {
      stdio: 'inherit'
  }
}, function(err, child) {
  // child.stderr now sent to your `process.stderr`
});
