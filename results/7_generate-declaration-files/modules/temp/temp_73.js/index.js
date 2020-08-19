var temp = require('temp');

// Automatically track and cleanup files at exit
temp.track();

var stream = temp.createWriteStream();
// stream.path contains the temporary file path for the stream
stream.write("Some data");
// Maybe do some other things
stream.end();
