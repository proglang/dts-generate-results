module.exports = function (grunt) {
  var temp = require("temp");
  temp.track(); // Cleanup files, please
  grunt.registerTask("temptest", "Testing temp", function() {

    var done = this.async(); // Don't forget this!

    grunt.log.writeln("About to write a file...");
    temp.open('tempfile', function(err, info) {
      // File writing shenanigans here
      grunt.log.writeln("Wrote a file!")

      done(); // REALLY don't forget this!

    });
  });
};
