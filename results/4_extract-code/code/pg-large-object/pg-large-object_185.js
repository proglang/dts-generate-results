var pg = require('pg');
var LargeObjectManager = require('pg-large-object').LargeObjectManager;
var LargeObject = require('pg-large-object').LargeObject;
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
      return client.emit('error');
    }

    // A LargeObject oid, probably stored somewhere in one of your own tables.
    var oid = 123;

    // Open with READWRITE if you would like to use
    // write() and truncate()
    man.open(oid, LargeObjectManager.READ, function(err, obj)
    {
      if (err)
      {
        done(err);
        return console.error(
          'Unable to open the given large object',
          oid,
          err);
      }

      // Read the first 50 bytes
      obj.read(50, function(err, buf)
      {
        // buf is a standard node.js Buffer
        console.log(buf.toString('hex'));
      });

      // pg uses a query queue, this guarantees the LargeObject
      // will be executed in the order you call them, even if you do not
      // wait on the callbacks.
      // In this library the callback for methods that only return an error
      // is optional (such as for seek below). If you do not give a callback
      // and an error occurs, this error will me emit()ted on the client object.

      // Set the position to byte 5000
      obj.seek(5000, LargeObject.SEEK_SET);
      obj.tell(function(err, position)
      {
        console.log(err, position); // 5000
      });
      obj.size(function(err, size)
      {
        console.log(err, size); // The size of the entire LargeObject
      });

      // Done with the object, close it
      obj.close();
      client.query('COMMIT', done);
    });
  });
});
