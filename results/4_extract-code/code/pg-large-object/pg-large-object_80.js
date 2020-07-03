var pg = require('pg');
var LargeObjectManager = require('pg-large-object').LargeObjectManager;
var conString = "postgres://postgres:1234@localhost/postgres";

pg.connect(conString, function(err, client, done)
{
  if (err)
  {
    return console.error('could not connect to postgres', err);
  }

  var man = new LargeObjectManager({pg: client});

  // When working with Large Objects, always use a transaction
  client.query('BEGIN', function(err, result)
  {
    if (err)
    {
      done(err);
      return client.emit('error', err);
    }

    // A LargeObject oid, probably stored somewhere in one of your own tables.
    var oid = 123;

    // If you are on a high latency connection and working with
    // large LargeObjects, you should increase the buffer size.
    // The buffer should be divisible by 2048 for best performance
    // (2048 is the default page size in PostgreSQL, see LOBLKSIZE)
    var bufferSize = 16384;
    man.openAndReadableStream(oid, bufferSize, function(err, size, stream)
    {
      if (err)
      {
        done(err);
        return console.error('Unable to read the given large object', err);
      }

      console.log('Streaming a large object with a total size of', size);
      stream.on('end', function()
      {
        client.query('COMMIT', done);
      });

      // Store it as an image
      var fileStream = require('fs').createWriteStream('my-file.png');
      stream.pipe(fileStream);
    });
  });
});
