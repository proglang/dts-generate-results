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

    // If you are on a high latency connection and working with
    // large LargeObjects, you should increase the buffer size.
    // The buffer should be divisible by 2048 for best performance
    // (2048 is the default page size in PostgreSQL, see LOBLKSIZE)
    var bufferSize = 16384;
    man.createAndWritableStream(bufferSize, function(err, oid, stream)
    {
      if (err)
      {
        done(err);
        return console.error('Unable to create a new large object', err);
      }

      // The server has generated an oid
      console.log('Creating a large object with the oid', oid);
      stream.on('finish', function()
      {
        // Actual writing of the large object in DB may
        // take some time, so one should provide a
        // callback to client.query.
        client.query('COMMIT', done);
      });

      // Upload an image
      var fileStream = require('fs').createReadStream('upload-my-file.png');
      fileStream.pipe(stream);
    });
  });
});
