var hiredis = require("hiredis"),
    reader = new hiredis.Reader();

// Data comes in
reader.feed("$5\r\nhello\r\n");

// Reply comes out
reader.get() // => "hello"
