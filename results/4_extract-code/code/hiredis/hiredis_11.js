var hiredis = require("hiredis"),
    reader = new hiredis.Reader({ return_buffers: true });

// Data comes in
reader.feed("$5\r\nhello\r\n");

// Reply comes out
reader.get() // => <Buffer 68 65 6c 6c 6f>
