var launch = require('launchpad');
launch.<type>(configuration, function(error, launcher) {
  launcher.browsers(function(error, browsers) {
    // -> List of available browsers with version
  });

  launcher(url, configuration, function(error, instance) {
    instance // -> A browser instance
    instance.id // -> unique instance id
    instance.stop(callback) // -> Stop the instance
    instance.status(callback) // -> Get status information about the instance
  });

  launcher.<browsername>(url, function(error, instance) {
    // Same as above
  });
});
