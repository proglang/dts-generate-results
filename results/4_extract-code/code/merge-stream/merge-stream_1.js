stream = require('merge-stream')();
// Something like a loop to add some streams to the merge stream
// stream.add(streamA);
// stream.add(streamB);
return stream.isEmpty() ? null : stream;
