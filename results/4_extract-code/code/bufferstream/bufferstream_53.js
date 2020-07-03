BufferStream = require('bufferstream')
stream = new BufferStream({encoding:'utf8', size:'flexible'})
stream.split('//', ':')
stream.on('split', function (chunk, token) {
    console.log("got '%s' by '%s'", chunk.toString(), token.toString())
})
stream.write("buffer:stream//23")
console.log(stream.toString())
